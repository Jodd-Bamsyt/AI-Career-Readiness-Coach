import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "ElevateHire", // Unique app ID
  name: "ElevateHire",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});