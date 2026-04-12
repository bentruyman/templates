# Templates

A collection of my personal project templates.

## Usage

Use [giget](https://github.com/unjs/giget) to scaffold a new project:

```bash
npx giget gh:bentruyman/templates/<template> <project-name>
```

The Node templates require Node.js 24 or newer.
The API templates also require Docker with Compose support for local PostgreSQL.

## Bun Package Distribution

The Bun npm package templates build with `--packages external` by default. That keeps runtime dependencies aligned with `package.json` semantics instead of inlining them into `dist/`.

Use bundled package dependencies only when you want a single-file distribution artifact. For normal npm packages, keep dependencies external and verify the generated `dist/index.js` stays small and still references package imports.

## Available Templates

| Template               | Description                                                  | Command                                              |
| ---------------------- | ------------------------------------------------------------ | ---------------------------------------------------- |
| [bun/api](./bun/api)   | Bun API with Hono, Drizzle, PostgreSQL, and Docker Compose   | `npx giget gh:bentruyman/templates/bun/api my-api`   |
| [bun/cli](./bun/cli)   | Bun CLI with TypeScript, Husky, and release-it               | `npx giget gh:bentruyman/templates/bun/cli my-cli`   |
| [bun/lib](./bun/lib)   | Bun library with TypeScript, Husky, and release-it           | `npx giget gh:bentruyman/templates/bun/lib my-lib`   |
| [node/api](./node/api) | Node.js API with Hono, Drizzle, PostgreSQL, and Docker Compose | `npx giget gh:bentruyman/templates/node/api my-api`  |
| [node/cli](./node/cli) | Node.js CLI with TypeScript, Vitest, Husky, and release-it   | `npx giget gh:bentruyman/templates/node/cli my-cli`  |
| [node/lib](./node/lib) | Node.js library with TypeScript, Vitest, Husky, and release-it | `npx giget gh:bentruyman/templates/node/lib my-lib`  |

See each template's README for detailed usage instructions.
