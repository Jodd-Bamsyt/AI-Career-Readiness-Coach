import { serve } from "inngest/next";
import {inngest} from  "@/lib/inngest/client";
import { generateIndustryInsights, helloWorld } from "@/lib/inngest/functions";


export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    /* your functions will be passed here later! */
    generateIndustryInsights
    // helloWorld,
  ],
});