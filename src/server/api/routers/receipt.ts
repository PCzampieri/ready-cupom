import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "y/server/api/trpc";

export const receiptRouter = createTRPCRouter({
  createReceipt: publicProcedure
  .input(
    z.object({
    url: z.string().url()
  }))
  .mutation(
    async({ctx, input}) => {
    const receipt = await ctx.prisma.receipt.create({
      data: {
        url: input.url,
        status: 'pending'
      }
    })
    return receipt
  })
  
});
