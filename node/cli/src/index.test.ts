import { describe, expect, test } from "vitest";

import { formatGreeting } from "./index.ts";

describe("formatGreeting", () => {
  test("formats a regular greeting", () => {
    expect(formatGreeting("world")).toBe("Hello, world!");
  });

  test("formats a loud greeting", () => {
    expect(formatGreeting("world", true)).toBe("HELLO, WORLD!");
  });
});
