import { createApp } from "../server/index.js";

// Create the Express app once on cold start (not on every request!)
const app = createApp();

// Export the app - Vercel will invoke it with (req, res) automatically
export default app;
