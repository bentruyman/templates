import { zValidator } from "@hono/zod-validator";
import { desc } from "drizzle-orm";
import { Hono } from "hono";
import { z } from "zod";

import { db } from "./db/index.ts";
import { todos } from "./db/schema.ts";

const createTodoSchema = z.object({
  completed: z.boolean().optional(),
  title: z.string().trim().min(1).max(120),
});

const app = new Hono();

app.get("/health", (c) => {
  return c.json({ ok: true }, 200);
});

app.get("/todos", async (c) => {
  const items = await db
    .select()
    .from(todos)
    .orderBy(desc(todos.createdAt), desc(todos.id));

  return c.json(items, 200);
});

app.post(
  "/todos",
  zValidator("json", createTodoSchema, (result, c) => {
    if (!result.success) {
      return c.json(
        {
          error: "Invalid request body",
          issues: result.error.issues,
        },
        400,
      );
    }
  }),
  async (c) => {
    const input = c.req.valid("json");

    const [todo] = await db
      .insert(todos)
      .values({
        completed: input.completed ?? false,
        title: input.title,
      })
      .returning();

    return c.json(todo, 201);
  },
);

export default app;
