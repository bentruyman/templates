# bun/cli

A TypeScript CLI template using Bun.

## Getting Started

```bash
npx giget gh:bentruyman/templates/bun/cli my-cli
cd my-cli
bun install
```

## Customize

Update `package.json` with your project details:

- `name` - Your CLI package name
- `description` - What your CLI does
- `bin` - Rename the command users will type

## Scripts

| Script                 | Description                                  |
| ---------------------- | -------------------------------------------- |
| `bun run build`        | Build for Node.js with package deps external |
| `bun run check:dist`   | Verify `dist/index.js` size and import shape |
| `bun run format`       | Format code with oxfmt                       |
| `bun run format:check` | Check formatting without rewriting files     |
| `bun run lint`         | Lint the template with oxlint                |
| `bun run typecheck`    | Type-check with TypeScript                   |
| `bun run verify`       | Run format, lint, typecheck, test, and build |
| `bun run release`      | Publish a new version with release-it        |

## Development

Run your CLI locally:

```bash
bun run src/index.ts --help
```

## Distribution Modes

For normal npm-published CLIs, keep runtime dependencies external:

```bash
bun build src/index.ts --outdir dist --target node --packages external
```

That matches `package.json` dependency semantics: if a package stays in
`dependencies`, the published `dist/index.js` should not inline it by default.

Use Bun's default bundled mode only when your goal is a single-file portable CLI
artifact rather than a standard npm package.

## Publishing

1. Update `package.json` name and bin fields
2. Run `bun run release` to build, tag, and publish to npm
