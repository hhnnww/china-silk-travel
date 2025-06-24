import { integer, timestamp } from "drizzle-orm/pg-core";

export const baseTable = {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	create_at: timestamp().defaultNow().notNull(),
};
