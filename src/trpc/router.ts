// import { TRPCError } from '@trpc/server'
// import { z } from 'zod'

import { createTRPCRouter } from "./init";
import { userRouter } from "./trpc-routes/user";

// const peopleRouter = {
// 	list: publicProcedure.query(async (ctx) => {
// 		return ctx.ctx.db.query.user.findMany({});
// 	}),
// } satisfies TRPCRouterRecord;

export const trpcRouter = createTRPCRouter({
	user: userRouter,
});
export type TRPCRouter = typeof trpcRouter;
