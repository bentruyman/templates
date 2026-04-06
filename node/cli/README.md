# node/cli

A TypeScript CLI template using Node.js.

## Requirements

- Node.js 24 or newer

## Getting Started

```bash
npx giget gh:bentruyman/templates/node/cli my-cli
cd my-cli
npm install
```

## Customize

Update `package.json` with your project details:

- `name` - Your CLI package name
- `description` - What your CLI does
- `bin` - Rename the command users will type

## Scripts

| Script              | Description                                   |
| ------------------- | --------------------------------------------- |
| `npm run build`     | Compile the CLI to `dist/`                    |
| `npm run format`    | Format code with oxfmt and apply oxlint fixes |
| `npm run lint`      | Check formatting and lint the template        |
| `npm test`          | Run tests with Vitest                         |
| `npm run typecheck` | Type-check with TypeScript                    |
| `npm run verify`    | Run lint, typecheck, test, and build          |
| `npm run release`   | Publish a new version with release-it         |

## Development

Run your CLI locally with Node's native TypeScript support:

```bash
node src/index.ts --help
```

## Publishing

1. Update `package.json` name and bin fields
2. Run `npm run release` to build, tag, and publish to npm
