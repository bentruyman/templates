import { describe, expect, test } from "bun:test";

import { formatGreeting, resolveCliName } from "./index";

describe("formatGreeting", () => {
  test("formats a regular greeting", () => {
    expect(formatGreeting("world")).toContain("Hello, world!");
  });

  test("formats a loud greeting", () => {
    expect(formatGreeting("world", true)).toContain("HELLO, WORLD!");
  });
});

describe("resolveCliName", () => {
  test("prefers the bin name over the package name", () => {
    expect(
      resolveCliName({
        name: "@example/package-name",
        version: "1.0.0",
        description: "Example CLI",
        bin: { "actual-command": "./dist/index.js" },
      }),
    ).toBe("actual-command");
  });

  test("falls back to the package name when bin is missing", () => {
    expect(
      resolveCliName({
        name: "package-name",
        version: "1.0.0",
        description: "Example CLI",
      }),
    ).toBe("package-name");
  });
});
