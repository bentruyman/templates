import { afterAll, beforeEach, describe, expect, test } from "bun:test";

import app from "./app.ts";
import { closeDb, db } from "./db/index.ts";
import { todos } from "./db/schema.ts";

describe("api", () => {
  beforeEach(async () => {
    await db.delete(todos);
  });

  afterAll(async () => {
    await closeDb();
  });

  test("GET /health", async () => {
    const response = await app.request("/health");

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
  });

  test("GET /todos returns an empty list after setup", async () => {
    const response = await app.request("/todos");

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual([]);
  });

  test("POST /todos creates a todo", async () => {
    const createResponse = await app.request("/todos", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ title: "Ship the template" }),
    });

    expect(createResponse.status).toBe(201);

    const created = (await createResponse.json()) as {
      completed: boolean;
      createdAt: string;
      id: number;
      title: string;
    };

    expect(typeof created.id).toBe("number");
    expect(created.id).toBeGreaterThan(0);
    expect(created.title).toBe("Ship the template");
    expect(created.completed).toBe(false);
    expect(typeof created.createdAt).toBe("string");

    const listResponse = await app.request("/todos");
    const items = (await listResponse.json()) as Array<typeof created>;

    expect(listResponse.status).toBe(200);
    expect(items).toHaveLength(1);
    expect(items[0]?.title).toBe("Ship the template");
  });

  test("POST /todos rejects invalid JSON", async () => {
    const response = await app.request("/todos", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ title: "" }),
    });

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual(
      expect.objectContaining({
        error: "Invalid request body",
      }),
    );
  });
});
