import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const questions = [
  {
      question: "When was the last time you had sex?",
      category: "sex",
      juicyness: 3
  }
] as const;

export const questionRouter = createTRPCRouter({
  random: publicProcedure
    .input(z.object({ maxJuiciness: z.number(), categories: z.array(z.string()) }))
    .query(({ input }) => {

      const filtered = questions.filter((question) => (question.juicyness <= input.maxJuiciness && input.categories.includes(question.category)))

      if (filtered.length === 0) {
        return {
          question: "No questions found -- revisit your settings",
          category: "none",
          juicyness: 0
        }
      }

      return filtered[Math.floor(Math.random() * filtered.length)];
    }),
});
