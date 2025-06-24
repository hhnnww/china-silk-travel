import type { getDrizzleDb } from "@/db";
import type * as schema from "@/db/schema";
import { initTRPC } from "@trpc/server";
import superjson from "superjson";

type contextType = {
	db: ReturnType<typeof getDrizzleDb>;
	schema: typeof schema;
};

const t = initTRPC.context<contextType>().create({
	transformer: superjson,
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
