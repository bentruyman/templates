#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { command, run } from "@truyman/cli";

type PackageManifest = {
  description: string;
  name: string;
  version: string;
};

function loadPackageManifest(): PackageManifest {
  return JSON.parse(
    readFileSync(new URL("../package.json", import.meta.url), "utf8"),
  ) as PackageManifest;
}

export function formatGreeting(name: string, loud = false): string {
  const greeting = `Hello, ${name}!`;
  return loud ? greeting.toUpperCase() : greeting;
}

const pkg = loadPackageManifest();

export const cli = command({
  name: pkg.name,
  description: pkg.description,
  version: pkg.version,
  args: [
    { name: "name", type: "string", description: "Name to greet" },
  ] as const,
  options: {
    loud: { type: "boolean", short: "l", description: "Shout the greeting" },
    times: {
      type: "number",
      short: "t",
      default: 1,
      description: "Number of times to greet",
    },
  },
  handler: (
    [name]: [string],
    { loud, times }: { loud: boolean; times: number },
  ) => {
    const output = formatGreeting(name, loud);

    for (let i = 0; i < times; i++) {
      console.log(output);
    }
  },
});

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  run(cli, process.argv.slice(2));
}
