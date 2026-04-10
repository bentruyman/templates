import app from "./app.ts";

const port = Number(process.env.PORT ?? 3000);

console.log(`Listening on http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};
