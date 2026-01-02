import { command, run } from "@truyman/cli";

import pkg from "../package.json";

const cli = command({
  name: pkg.name,
  description: pkg.description,
  version: pkg.version,
  args: [
    { name: "name", type: "string", description: "Name to greet" },
  ] as const,
  options: {
    loud: { type: "boolean", short: "l", description: "Shout the greeting" },
    times: { type: "number", short: "t", default: 1, description: "Number of times to greet" },
  },
  handler: ([name], { loud, times }) => {
    const greeting = `Hello, ${name}!`;
    const output = loud ? greeting.toUpperCase() : greeting;

    for (let i = 0; i < times; i++) {
      console.log(output);
    }
  },
});

run(cli, process.argv.slice(2));
