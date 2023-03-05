import { createTRPCRouter } from "y/server/api/trpc";
import { exampleRouter } from "y/server/api/routers/example";
import { receiptRouter } from "./routers/receipt";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  receiptRouter: receiptRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
