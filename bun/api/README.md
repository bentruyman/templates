# bun/api

A TypeScript Hono API template using Bun, Drizzle ORM, PostgreSQL, and Docker
Compose.

## Requirements

- Bun 1.3 or newer
- Docker with Compose support

## Getting Started

```bash
npx giget gh:bentruyman/templates/bun/api my-api
cd my-api
bun install
cp .env.example .env
bun run db:init
bun run dev
```

The API will start on `http://localhost:3000`.

## Routes

| Method | Path      | Description              |
| ------ | --------- | ------------------------ |
| `GET`  | `/health` | Returns a simple status  |
| `GET`  | `/todos`  | Lists the example todos  |
| `POST` | `/todos`  | Creates a todo from JSON |

## Scripts

| Script              | Description                                      |
| ------------------- | ------------------------------------------------ |
| `bun run dev`       | Start the API in watch mode                      |
| `bun run build`     | Bundle the server entrypoint to `dist/index.js`  |
| `bun run lint`      | Check formatting and lint the template           |
| `bun run typecheck` | Type-check with TypeScript                       |
| `bun run test`      | Start Postgres, run migrations, and run tests    |
| `bun run verify`    | Run lint, typecheck, tests, and build            |
| `bun run db:up`     | Start PostgreSQL with Docker Compose             |
| `bun run db:init`   | Start PostgreSQL and apply Drizzle migrations    |
| `bun run db:down`   | Stop PostgreSQL and remove the local data volume |
| `bun run db:logs`   | Tail PostgreSQL logs                             |
| `bun run db:studio` | Open Drizzle Studio                              |

## Customize

Update these files for your project:

- `package.json` - project name and description
- `src/db/schema.ts` - your application schema
- `.env` - local database credentials and server port

After changing the schema, generate and apply a new migration:

```bash
bun run db:generate
bun run db:migrate
```
