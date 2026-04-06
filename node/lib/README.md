# node/lib

A TypeScript library template using Node.js.

## Requirements

- Node.js 24 or newer

## Getting Started

```bash
npx giget gh:bentruyman/templates/node/lib my-lib
cd my-lib
npm install
```

## Customize

Update `package.json` with your project details:

- `name` - Your package name
- `description` - What your library does
- `exports` - The entrypoints you want to publish

Replace the example implementation in `src/index.ts` with your library code.

## Scripts

| Script              | Description                                   |
| ------------------- | --------------------------------------------- |
| `npm run build`     | Compile the library to `dist/`                |
| `npm run format`    | Format code with oxfmt and apply oxlint fixes |
| `npm run lint`      | Check formatting and lint the template        |
| `npm test`          | Run tests with Vitest                         |
| `npm run typecheck` | Type-check with TypeScript                    |
| `npm run verify`    | Run lint, typecheck, test, and build          |
| `npm run release`   | Publish a new version with release-it         |

## Development

Run tests while iterating:

```bash
npm exec vitest --watch
```

## Publishing

1. Update `package.json` name and exports fields
2. Run `npm run release` to build, tag, and publish to npm
