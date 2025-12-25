import { createApp } from "../server/index.js";

// Vercel Serverless Function handler
export default function handler(req, res) {
    const app = createApp();
    // Pass the request to the express app
    app(req, res);
}
