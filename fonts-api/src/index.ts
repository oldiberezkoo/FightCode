import { serve } from "@hono/node-server";
import { Hono } from "hono";

export const app = new Hono();

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
