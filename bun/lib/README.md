# bun/lib

A TypeScript library template using Bun.

## Getting Started

```bash
npx giget gh:bentruyman/templates/bun/lib my-lib
cd my-lib
bun install
```

## Customize

Update `package.json` with your project details:

- `name` - Your package name
- `description` - What your library does
- `exports` - The entrypoints you want to publish

Replace the example implementation in `src/index.ts` with your library code.

## Scripts

| Script                 | Description                                  |
| ---------------------- | -------------------------------------------- |
| `bun run build`        | Bundle the library to `dist/`                |
| `bun run format`       | Format code with oxfmt                       |
| `bun run format:check` | Check formatting without rewriting files     |
| `bun run lint`         | Lint the template with oxlint                |
| `bun run typecheck`    | Type-check with TypeScript                   |
| `bun run verify`       | Run format, lint, typecheck, test, and build |
| `bun run release`      | Publish a new version with release-it        |

## Development

Run tests while iterating:

```bash
bun test --watch
```

## Publishing

1. Update `package.json` name and exports fields
2. Run `bun run release` to build, tag, and publish to npm
