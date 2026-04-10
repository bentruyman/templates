import "dotenv/config";
import { SQL } from "bun";
import { drizzle } from "drizzle-orm/bun-sql";

import * as schema from "./schema.ts";

export const DEFAULT_DATABASE_URL =
  "postgresql://postgres:postgres@127.0.0.1:5432/app";

const client = new SQL(process.env.DATABASE_URL ?? DEFAULT_DATABASE_URL);

export const db = drizzle({ client, schema });

export async function closeDb() {
  await client.close();
}
