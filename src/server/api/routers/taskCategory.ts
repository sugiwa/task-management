import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const taskCategoryRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  findAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.taskCategory.findMany();
  }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.taskCategory.create({
        data: {
          name: input.name,
        },
      });
    }),
});
