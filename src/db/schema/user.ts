import { pgTable, varchar } from "drizzle-orm/pg-core";
import { baseTable } from "./base-table";

export const user = pgTable("user", {
	...baseTable,
	email: varchar().notNull().unique(),
	password: varchar().notNull(),
});
