import { createApp } from "../server/index.js";

// Vercel Serverless Function handler
export default async function handler(req, res) {
    const app = await createApp();
    // Pass the request to the express app
    app(req, res);
}
