import { describe, expect, test } from "bun:test";

import { add } from "./index.ts";

describe("add", () => {
  test("adds two numbers", () => {
    expect(add(1, 1)).toBe(2);
  });
});
