import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import { createServer } from "http";
import cors from "cors";

// CRITICAL: Load environment variables FIRST
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

async function startServer() {
  // Dynamically import local modules AFTER loading env vars to prevent hoisting issues
  const { db } = await import("../db/index.js");
  const { bookingSubmissions } = await import("../db/schema.js");
  const { sendLeadNotification, sendConfirmationEmail } = await import("./email.js");
  const { checkRateLimit } = await import("./rateLimit.js");

  const app = express();
  const server = createServer(app);

  // Middleware
  app.use(cors());
  app.use(express.json());

  // API Routes
  app.post('/api/bookings', async (req, res) => {
    console.log('[API] Received booking submission request');

    try {
      const { email } = req.body;
      console.log(`[API] Processing submission for email: ${email}`);

      // Rate limit check (email-based only)
      if (!checkRateLimit(email)) {
        console.log(`[API] Rate limit exceeded for ${email}`);
        return res.status(429).json({
          error: 'You have already submitted an application. Please wait a minute before submitting again.'
        });
      }

      // Validate required fields
      const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'retreatId',
        'preferredDate', 'numberOfGuests', 'emergencyContact', 'emergencyPhone'];
      for (const field of requiredFields) {
        if (!req.body[field]) {
          console.log(`[API] Validation failed: Missing field ${field}`);
          return res.status(400).json({ error: `Missing required field: ${field}` });
        }
      }

      // Save to database
      console.log('[API] Saving to database...');
      const [submission] = await db.insert(bookingSubmissions)
        .values(req.body)
        .returning();

      console.log(`[API] ✓ Saved to database with ID: ${submission.id}`);

      // Send emails asynchronously (completely independent - don't block response)
      setImmediate(async () => {
        try {
          console.log('[Email] Starting email notifications...');
          await sendLeadNotification(req.body);
          console.log('[Email] ✓ Lead notification sent');
        } catch (emailError) {
          console.error('[Email] ✗ Lead notification failed:', emailError);
        }

        try {
          await sendConfirmationEmail(req.body);
          console.log('[Email] ✓ User confirmation sent');
        } catch (emailError) {
          console.error('[Email] ✗ User confirmation failed:', emailError);
        }
      });

      res.json({ success: true, submissionId: submission.id });
      console.log(`[API] ✓ Response sent successfully for submission ${submission.id}`);
    } catch (error) {
      console.error('[API] ✗ Booking submission error:', error);
      res.status(500).json({ error: 'Submission failed. Please try again.' });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("/{*splat}", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  // Use API_PORT if set, otherwise try PORT (unless it's 3000 which is Vite's default), or default to 3001
  const port = process.env.API_PORT || 3001;

  server.listen(port, () => {
    console.log(`\n🚀 Server running on http://localhost:${port}/`);
    console.log(`📊 API endpoint: http://localhost:${port}/api/bookings`);
    console.log(`💾 Database: Connected to Neon`);
    console.log(`📧 Email: Ready to send via Nodemailer\n`);
  });
}

startServer().catch(console.error);
