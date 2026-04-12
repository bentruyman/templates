import { command, run } from "@truyman/cli";
import kleur from "kleur";

import pkg from "../package.json" with { type: "json" };

type PackageManifest = {
  bin?: Record<string, string>;
  description: string;
  name: string;
  version: string;
};

export function resolveCliName(manifest: PackageManifest): string {
  return Object.keys(manifest.bin ?? {})[0] ?? manifest.name;
}

export function formatGreeting(name: string, loud = false): string {
  const greeting = `Hello, ${name}!`;
  return loud
    ? kleur.bold().red(greeting.toUpperCase())
    : kleur.green(greeting);
}

const cli = command({
  name: resolveCliName(pkg as PackageManifest),
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
  handler: ([name], { loud, times }) => {
    const output = formatGreeting(name, loud);

    for (let i = 0; i < times; i++) {
      console.log(output);
    }
  },
});

if (import.meta.main) {
  run(cli, process.argv.slice(2));
}
