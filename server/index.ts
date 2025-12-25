import dotenv from 'dotenv';
import express from "express";
import { createServer } from "http";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { db } from "../db/index.js";
import { bookingSubmissions } from "../db/schema.js";
import { sendLeadNotification, sendConfirmationEmail } from "./email.js";
import { checkRateLimit } from "./rateLimit.js";

// Load environment variables for local development only
// Vercel injects env vars directly, so dotenv is only needed locally
if (process.env.NODE_ENV !== 'production') {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  dotenv.config({ path: path.resolve(__dirname, '../.env') });
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Export the app creation logic for Vercel
export function createApp() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // API Routes
  app.post('/api/bookings', async (req, res) => {
    console.log('[API] Received booking submission request');

    try {
      const { email } = req.body;
      console.log(`[API] Processing submission for email: ${email}`);

      // Rate limit check
      if (!checkRateLimit(email)) {
        return res.status(429).json({
          error: 'You have already submitted an application. Please wait a minute before submitting again.'
        });
      }

      // Check required fields
      const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'retreatId', 'preferredDate', 'numberOfGuests', 'emergencyContact', 'emergencyPhone'];
      for (const field of requiredFields) {
        if (!req.body[field]) {
          return res.status(400).json({ error: `Missing required field: ${field}` });
        }
      }

      // Save to database
      console.log('[API] Saving to database...');
      const [submission] = await db.insert(bookingSubmissions).values(req.body).returning();
      console.log(`[API] ✓ Saved to database with ID: ${submission.id}`);

      // Send emails
      setImmediate(async () => {
        try {
          await sendLeadNotification(req.body);
          console.log('[Email] ✓ Lead notification sent');
        } catch (e) { console.error('[Email] ✗ Lead notification failed:', e); }
        try {
          await sendConfirmationEmail(req.body);
          console.log('[Email] ✓ User confirmation sent');
        } catch (e) { console.error('[Email] ✗ User confirmation failed:', e); }
      });

      res.json({ success: true, submissionId: submission.id });
    } catch (error) {
      console.error('[API] ✗ Booking submission error:', error);
      res.status(500).json({ error: 'Submission failed. Please try again.' });
    }
  });

  return app;
}

// Only start the server if running locally/standalone
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("Starting server in standalone mode...");
  const app = createApp();

  const staticPath = process.env.NODE_ENV === "production"
    ? path.resolve(__dirname, "public")
    : path.resolve(__dirname, "..", "dist", "public");

  // Static files and catch-all for local dev
  app.use(express.static(staticPath));
  app.get("/{*splat}", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const server = createServer(app);
  const port = process.env.API_PORT || 3001;
  server.listen(port, () => {
    console.log(`\n🚀 Server running on http://localhost:${port}/`);
    console.log(`📊 API endpoint: http://localhost:${port}/api/bookings`);
    console.log(`💾 Database: Connected to Neon`);
    console.log(`📧 Email: Ready to send via Nodemailer\n`);
  });
}
