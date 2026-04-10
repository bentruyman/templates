# node/api

A TypeScript Hono API template using Node.js, Drizzle ORM, PostgreSQL, and
Docker Compose.

## Requirements

- Node.js 24 or newer
- Docker with Compose support

## Getting Started

```bash
npx giget gh:bentruyman/templates/node/api my-api
cd my-api
npm install
cp .env.example .env
npm run db:init
npm run dev
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
| `npm run dev`       | Start the API in watch mode                      |
| `npm run build`     | Compile the server entrypoint to `dist/`         |
| `npm run lint`      | Check formatting and lint the template           |
| `npm run typecheck` | Type-check with TypeScript                       |
| `npm test`          | Start Postgres, run migrations, and run tests    |
| `npm run verify`    | Run lint, typecheck, tests, and build            |
| `npm run db:up`     | Start PostgreSQL with Docker Compose             |
| `npm run db:init`   | Start PostgreSQL and apply Drizzle migrations    |
| `npm run db:down`   | Stop PostgreSQL and remove the local data volume |
| `npm run db:logs`   | Tail PostgreSQL logs                             |
| `npm run db:studio` | Open Drizzle Studio                              |

## Customize

Update these files for your project:

- `package.json` - project name and description
- `src/db/schema.ts` - your application schema
- `.env` - local database credentials and server port

After changing the schema, generate and apply a new migration:

```bash
npm run db:generate
npm run db:migrate
```
