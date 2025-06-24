import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema/index.ts";

export function getDrizzleDb() {
	const client = postgres(process.env.POSTGRES_URL as string);
	return drizzle({ client, schema });
}
