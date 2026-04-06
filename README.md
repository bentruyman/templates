# Templates

A collection of my personal project templates.

## Usage

Use [giget](https://github.com/unjs/giget) to scaffold a new project:

```bash
npx giget gh:bentruyman/templates/<template> <project-name>
```

The Node templates require Node.js 24 or newer.

## Available Templates

| Template             | Description                                    | Command                                            |
| -------------------- | ---------------------------------------------- | -------------------------------------------------- |
| [bun/cli](./bun/cli) | Bun CLI with TypeScript, Husky, and release-it | `npx giget gh:bentruyman/templates/bun/cli my-cli` |
| [bun/lib](./bun/lib) | Bun library with TypeScript, Husky, and release-it | `npx giget gh:bentruyman/templates/bun/lib my-lib` |
| [node/cli](./node/cli) | Node.js CLI with TypeScript, Vitest, Husky, and release-it | `npx giget gh:bentruyman/templates/node/cli my-cli` |
| [node/lib](./node/lib) | Node.js library with TypeScript, Vitest, Husky, and release-it | `npx giget gh:bentruyman/templates/node/lib my-lib` |

See each template's README for detailed usage instructions.
