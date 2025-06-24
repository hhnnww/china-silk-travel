import { makeNanoid } from "@/hooks/make-nanoid";
import type { TRPCRouterRecord } from "@trpc/server";
import { publicProcedure } from "../init";

export const userRouter = {
	new: publicProcedure.mutation(async ({ ctx }) => {
		return await ctx.db
			.insert(ctx.schema.user)
			.values([{ email: makeNanoid(), password: "222" }])
			.returning();
	}),

	list: publicProcedure.query(async ({ ctx }) => {
		return await ctx.db.query.user.findMany({});
	}),
} satisfies TRPCRouterRecord;
