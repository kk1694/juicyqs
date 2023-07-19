import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

interface QSInterface {
  question: string;
  category: string;
  juicyness: number;
  gender?: "male" | "female";
}

const questions: QSInterface[] = [
  {
    question: "When was the last time you had sex?",
    category: "sex",
    juicyness: 3,
    gender: "male",
  },
  {
    question: "When was the last time you had sex?",
    category: "sex",
    juicyness: 3,
  },
  {
    question: "When was the last time you had orgasm?",
    category: "sex",
    juicyness: 5,
  },
  {
    question: "Do you have any specific kink?",
    category: "sex",
    juicyness: 5,
  },
  {
    question: "Who was te emost attractive person you have ever met?",
    category: "sex",
    juicyness: 1,
  },
  {
    question: "Have you ever attended a sex party?",
    category: "sex",
    juicyness: 7,
  },
  {
    question: "Do you prefer to punish or be punished?",
    category: "sex",
    juicyness: 7,
  },
  {
    question: "What would be your BDSM green-amber-red thresholds?",
    category: "sex",
    juicyness: 10,
  },
  {
    question: "Have you ever been spanked?",
    category: "sex",
    juicyness: 5,
  },
  {
    question:
      "Recall a memory when you have been embarassed by your sexual fantasy?",
    category: "sex",
    juicyness: 1,
  },
  {
    question: "Have you ever been in a groups setting?",
    category: "sex",
    juicyness: 7,
  },
  {
    question:
      "If you had to engage in a sexual activity wit the same gender, what would it be?",
    category: "sex",
    juicyness: 3,
  },
  {
    question: "What was the last time thta you mimicked orgams?",
    category: "sex",
    juicyness: 6,
    gender: "female",
  },
  {
    question: "What is on the edge of gross and attractive?",
    category: "sex",
    juicyness: 5,
  },
  {
    question: "Have you ever lied about your sexual partners?",
    category: "sex",
    juicyness: 3,
  },
  {
    question: "What is your ultimate turn-off?",
    category: "sex",
    juicyness: 7,
  },
  {
    question: "What is your ultimate turn-on?",
    category: "sex",
    juicyness: 5,
  },
  {
    question: "Who was the favourite in your family?",
    category: "family",
    juicyness: 3,
  },
  {
    question: "Have you ever considered having sex with your friends' partner?",
    category: "sex",
    juicyness: 9,
  },
  {
    question: "Which is your most attractive body part?",
    category: "sex",
    juicyness: 4,
  },
  {
    question: "When are you the best in bed?",
    category: "sex",
    juicyness: 7,
  },
  {
    question: "Have you ever regretted having sex with someone?",
    category: "sex",
    juicyness: 6,
  },
  {
    question: "Have you ever had sex in a public place?",
    category: "sex",
    juicyness: 4,
  },
  {
    question: "Have you ever felt tempted to cheat on your partner?",
    category: "sex",
    juicyness: 7,
  },
  {
    question: "Have you ever cheated on your partner? Was it good?",
    category: "sex",
    juicyness: 10,
  },
  {
    question: "Have you ever had sex in your workplace?",
    category: "sex",
    juicyness: 6,
  },
  {
    question: "What is your most sensitive body part?",
    category: "sex",
    juicyness: 7,
  },
  {
    question: "How does alcohol effect your sex-drive?",
    category: "sex",
    juicyness: 1,
  },
  {
    question: "Do you have any sexual experience that you are ashamed of?",
    category: "sex",
    juicyness: 7,
  },
  {
    question: "Have you ever recorded your sexual activity on video or audio?",
    category: "sex",
    juicyness: 7,
  },
  {
    question: "What is your best sexual experience?",
    category: "sex",
    juicyness: 6,
  },
  {
    question: "Would you ever consider getting paid for sex? How much?",
    category: "sex",
    juicyness: 4,
  },
  {
    question: "What is your experience with BDSM?",
    category: "sex",
    juicyness: 7,
  },
  {
    question:
      "What was the biggest age-gap between you and your sexual partner?",
    category: "sex",
    juicyness: 6,
  },
  {
    question: "Do you consider yourself hot?",
    category: "sex",
    juicyness: 8,
  },
  {
    question: "How can you get turned on without physical touch?",
    category: "sex",
    juicyness: 8,
  },
  {
    question: "Your go to sex-song is....?",
    category: "sex",
    juicyness: 2,
  },
  {
    question: "Who is the most attractive person in the room?",
    category: "each other",
    juicyness: 8,
  },
  {
    question:
      "What was the last time when you wanted to yell at me but you did not?",
    category: "each other",
    juicyness: 8,
  },
  {
    question: "How much money should you get to betray me?",
    category: "each other",
    juicyness: 10,
  },
  {
    question: "Who is the least attractive person in the room?",
    category: "each other",
    juicyness: 9,
  },
  {
    question:
      "Is there any other type of relationship that you would consider starting with me?",
    category: "each other",
    juicyness: 7,
  },
  {
    question: "Would you honestly recommend me for the job that I am doing?",
    category: "each other",
    juicyness: 10,
  },
  {
    question: "What is my biggest blindspot about myself?",
    category: "each other",
    juicyness: 6,
  },
  {
    question: "Have you ever had a sexual fantasy about me?",
    category: "each other",
    juicyness: 10,
  },
  {
    question: "What is the biggest gift of the relationship that we have?",
    category: "each other",
    juicyness: 2,
  },
  {
    question: "How do you see me in 5 years?",
    category: "each other",
    juicyness: 3,
  },
  {
    question:
      "What is the part of my life that you think you do not know a lot about but want to know?",
    category: "each other",
    juicyness: 7,
  },
  {
    question: "Would you start a business with me?",
    category: "each other",
    juicyness: 2,
  },
  {
    question: "What was your first impression about me?",
    category: "each other",
    juicyness: 1,
  },
  {
    question: "Describe your first romantic relationship!",
    category: "relationships",
    juicyness: 3,
  },
  {
    question: "Describe your worst break-up!",
    category: "relationships",
    juicyness: 10,
  },
  {
    question:
      "Have you been emotionally, sexually or physically abused by any of your partners?",
    category: "relationships",
    juicyness: 10,
  },
  {
    question: "From what moment do you consider someone to be a friend of you?",
    category: "relationships",
    juicyness: 3,
  },
  {
    question: "Who is your best friend?",
    category: "relationships",
    juicyness: 2,
  },
  {
    question: "Have you ever felt excluded from a group?",
    category: "relationships",
    juicyness: 3,
  },
  {
    question:
      "What is the most important value that your friends should share?",
    category: "relationships",
    juicyness: 3,
  },
  {
    question:
      "Where is the line between a frinedship and a romantic relationship for you?",
    category: "relationships",
    juicyness: 3,
  },
  {
    question: "Have you ever felt betrayed?",
    category: "soft points",
    juicyness: 5,
  },
  {
    question: "Have you ever felt that someone just used you?",
    category: "soft points",
    juicyness: 6,
  },
  {
    question: "What was your biggest mistake so far?",
    category: "soft points",
    juicyness: 6,
  },

  {
    question: "Have you ever done something that you are really ashamed of?",
    category: "soft points",
    juicyness: 5,
  },
  {
    question: "What is your biggest insecurity about your body?",
    category: "soft points",
    juicyness: 3,
  },
  {
    question: "What is your biggest fear right now?",
    category: "soft points",
    juicyness: 6,
  },
  {
    question: "When was the last time when you felt you are lost?",
    category: "soft points",
    juicyness: 7,
  },
  {
    question:
      "What was the last event that you wish you were invited but you were not?",
    category: "soft points",
    juicyness: 3,
  },
  {
    question: "What is your dream that you rather not talk about?",
    category: "soft points",
    juicyness: 6,
  },
  {
    question: "When was the last time when you felt genuinly happy?",
    category: "soft points",
    juicyness: 7,
  },

  {
    question: "What bit of you that people do not understand?",
    category: "soft points",
    juicyness: 4,
  },
  {
    question: "What bit of you did your parents never understand?",
    category: "family",
    juicyness: 2,
  },
  {
    question: "When you lie about the money you earn, why do you lie?",
    category: "money",
    juicyness: 2,
  },
  {
    question: "What would you want to spend a lot of money on?",
    category: "money",
    juicyness: 2,
  },
  {
    question: "What do you wish you could ideally tell your mother?",
    category: "family",
    juicyness: 4,
  },
  {
    question: "What do you wish you could ideally tell your father?",
    category: "family",
    juicyness: 4,
  },
  {
    question: "Rank people in terms of attractiveness in the room!",
    category: "m",
    juicyness: 2,
  },
  {
    question: "What is love??",
    category: "relationships",
    juicyness: 1,
  },
  {
    question:
      "What is the difference between loving someone and being in love with someone??",
    category: "relationships",
    juicyness: 2,
  },
  {
    question: "How do you know that you are in love?",
    category: "romantic",
    juicyness: 2,
  },
  {
    question: "Sex is enough to fall in love with someone. Do you agree?",
    category: "romantic",
    juicyness: 3,
  },
  {
    question:
      " What is the biggest sacrifice that you have made for a relationship?",
    category: "relationships",
    juicyness: 3,
  },
  {
    question: "Who does love you the most?",
    category: "relationships",
    juicyness: 5,
  },
  {
    question: " Who do you love the most?",
    category: " relationships ",
    juicyness: 5,
  },
  {
    question: "What is the purpose of your life?",
    category: "each other",
    juicyness: 2,
  },
  {
    question: "Is it difficult for you to trust people? Why? ",
    category: "relationships",
    juicyness: 5,
  },
  {
    question: "How do I make it difficult to trust me?",
    category: "each other",
    juicyness: 6,
  },
  {
    question: "What is the quickest way to your heart? ",
    category: "relationships ",
    juicyness: 4,
  },
  {
    question: "Have you ever lied to me? About what and when?",
    category: "each other",
    juicyness: 9,
  },
  {
    question: "When was the last time that you lied to someone?",
    category: "relationships",
    juicyness: 3,
  },
  {
    question: "When was the last time that someone lied to you?",
    category: "relationships",
    juicyness: 4,
  },
  {
    question: "What was your biggest failure so far?",
    category: "soft points ",
    juicyness: 7,
  },
  {
    question: "What was your biggest disappointment in love?",
    category: "romantic",
    juicyness: 6,
  },
  {
    question: "What bit of you that people do not understand?",
    category: "soft points",
    juicyness: 4,
  },
  {
    question: "What bit of you did your parents never understand?",
    category: "family",
    juicyness: 2,
  },
  {
    question: "When you lie about the money you earn, why do you lie?",
    category: "money",
    juicyness: 2,
  },
  {
    question: "What would you want to spend a lot of money on?",
    category: "money",
    juicyness: 2,
  },
  {
    question: "What do you wish you could ideally tell your mother?",
    category: "family",
    juicyness: 4,
  },
  {
    question: "What do you wish you could ideally tell your father?",
    category: "family",
    juicyness: 4,
  },
  {
    question: "Rank people in terms of attractiveness in the room!",
    category: "m",
    juicyness: 2,
  },
  {
    question: "What is love??",
    category: "relationships",
    juicyness: 1,
  },
  {
    question:
      "What is the difference between loving someone and being in love with someone??",
    category: "relationships",
    juicyness: 2,
  },
  {
    question: "How do you know that you are in love?",
    category: "romantic",
    juicyness: 2,
  },
  {
    question: "Sex is enough to fall in love with someone. Do you agree?",
    category: "romantic",
    juicyness: 3,
  },
  {
    question:
      " What is the biggest sacrifice that you have made for a relationship?",
    category: "relationships",
    juicyness: 3,
  },
  {
    question: "Who does love you the most?",
    category: "relationships",
    juicyness: 5,
  },
  {
    question: " Who do you love the most?",
    category: " relationships ",
    juicyness: 5,
  },
  {
    question: "What is the purpose of your life?",
    category: "each other",
    juicyness: 2,
  },
  {
    question: "Is it difficult for you to trust people? Why? ",
    category: "relationships",
    juicyness: 5,
  },
  {
    question: "How do I make it difficult to trust me?",
    category: "each other",
    juicyness: 6,
  },
  {
    question: "What is the quickest way to your heart? ",
    category: "relationships ",
    juicyness: 4,
  },
  {
    question: "Have you ever lied to me? About what and when?",
    category: "each other",
    juicyness: 9,
  },
  {
    question: "When was the last time that you lied to someone?",
    category: "relationships",
    juicyness: 3,
  },
  {
    question: "When was the last time that someone lied to you?",
    category: "relationships",
    juicyness: 4,
  },
  {
    question: "What was your biggest failure so far?",
    category: "soft points ",
    juicyness: 7,
  },
  {
    question: "What was your biggest disappointment in love?",
    category: "romantic",
    juicyness: 6,
  },
  {
    question: "What bit of you that people do not understand?",
    category: "soft points",
    juicyness: 4,
  },
  {
    question: "What bit of you did your parents never understand?",
    category: "family",
    juicyness: 2,
  },
  {
    question: "When you lie about the money you earn, why do you lie?",
    category: "money",
    juicyness: 2,
  },
  {
    question: "What would you want to spend a lot of money on?",
    category: "money",
    juicyness: 2,
  },
  {
    question: "What do you wish you could ideally tell your mother?",
    category: "family",
    juicyness: 4,
  },
  {
    question: "What do you wish you could ideally tell your father?",
    category: "family",
    juicyness: 4,
  },
  {
    question: "Rank people in terms of attractiveness in the room!",
    category: "m",
    juicyness: 2,
  },
  {
    question: "What is love??",
    category: "relationships",
    juicyness: 1,
  },
  {
    question:
      "What is the difference between loving someone and being in love with someone??",
    category: "relationships",
    juicyness: 2,
  },
  {
    question: "How do you know that you are in love?",
    category: "romantic",
    juicyness: 2,
  },
  {
    question: "Sex is enough to fall in love with someone. Do you agree?",
    category: "romantic",
    juicyness: 3,
  },
  {
    question:
      " What is the biggest sacrifice that you have made for a relationship?",
    category: "relationships",
    juicyness: 3,
  },
  {
    question: "Who does love you the most?",
    category: "relationships",
    juicyness: 5,
  },
  {
    question: " Who do you love the most?",
    category: " relationships ",
    juicyness: 5,
  },
  {
    question: "What is the purpose of your life?",
    category: "each other",
    juicyness: 2,
  },
  {
    question: "Is it difficult for you to trust people? Why? ",
    category: "relationships",
    juicyness: 5,
  },
  {
    question: "How do I make it difficult to trust me?",
    category: "each other",
    juicyness: 6,
  },
  {
    question: "What is the quickest way to your heart? ",
    category: "relationships ",
    juicyness: 4,
  },
  {
    question: "Have you ever lied to me? About what and when?",
    category: "each other",
    juicyness: 9,
  },
  {
    question: "When was the last time that you lied to someone?",
    category: "relationships",
    juicyness: 3,
  },
  {
    question: "When was the last time that someone lied to you?",
    category: "relationships",
    juicyness: 4,
  },
  {
    question: "What was your biggest failure so far?",
    category: "soft points ",
    juicyness: 7,
  },
  {
    question: "What was your biggest disappointment in love?",
    category: "romantic",
    juicyness: 6,
  },
  {
    question: "How would you define our relationship?",
    category: "each other",
    juicyness: 2
  },
  {
    question: "How would you change our relationship?",
    category: "each other",
    juicyness: 5
  },
  {
    question: "What are the boundaries of our relationship that you would never cross?",
    category: "each other",
    juicyness: 7
  },
  {
    question: "What song would best describe our relationship?",
    category: "each other",
    juicyness: 1
  },
  {
    question: "What movie would best describe our relationship?",
    category: "each other",
    juicyness: 1
  },
  {
    question: "What is something people don't understand about sex?",
    category: "sex",
    juicyness: 5
  },
  {
    question: "What is something people don't understand about love?",
    category: "relationship",
    juicyness: 5
  },
  {
    question: "What is your weakest skill?",
    category: "soft points",
    juicyness: 5
  },
  {
    question: "Is it difficult for yout to reach orgasm?",
    category: "sex",
    juicyness: 4,
    gender: "female"
  },
  {
    question: "What is your weight?",
    category: "soft points",
    juicyness: 7,
    gender: "female"
  },
  {
    question: "What is your experience with sexual impotence?",
    category: "sex",
    juicyness: 9,
    gender: "male"
  },
  {
    question: "How long is your penis?",
    category: "sex",
    juicyness: 10,
    gender: "male"
  },
  {
    question: "What is your bra size?",
    category: "sex",
    juicyness: 5,
    gender: "female"
  },
  {
    question: "What is the last time you lied about your orgasm?",
    category: "sex",
    juicyness: 7,
    gender: "female"
  },
];

export const questionRouter = createTRPCRouter({
  random: publicProcedure
    .input(
      z.object({
        maxJuicyness: z.number(),
        minJuicyness: z.number(),
        categories: z.array(z.string()),
      })
    )
    .query(({ input }) => {
      const filtered = questions.filter(
        (question) =>
          question.juicyness <= input.maxJuicyness &&
          question.juicyness >= input.minJuicyness &&
          input.categories.includes(question.category)
      );

      if (filtered.length === 0) {
        return {
          question: "No questions found -- revisit your settings",
          category: "none",
          juicyness: 0,
        };
      }

      const idx = Math.floor(Math.random() * filtered.length);

      console.log("filtered", filtered.length, "idx", idx);

      return filtered[idx];
    }),
  numQs: publicProcedure
    .input(
      z.object({
        maxJuicyness: z.number(),
        minJuicyness: z.number(),
        categories: z.array(z.string()),
      })
    )
    .query(({ input }) => {
      const filtered = questions.filter(
        (question) =>
          question.juicyness <= input.maxJuicyness &&
          question.juicyness >= input.minJuicyness &&
          input.categories.includes(question.category)
      );

      return { total: filtered.length };
    }),
});
