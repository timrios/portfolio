// What owners want settled before they reach out. No prices here: every job is quoted to fit (README → Decisions).
import { z } from "astro/zod";

export const questions = z
  .array(z.object({ id: z.string().regex(/^[a-z0-9-]+$/), question: z.string(), answer: z.string() }))
  .parse([
    {
      id: "cost",
      question: "What will it cost?",
      answer:
        "Every job is different, so I quote yours after we talk. The price mostly depends on how much you need: how many pages, and whether you want a logo, photos or social media too. You’ll see the full price before you agree to anything.",
    },
    {
      id: "payment",
      question: "How do I pay?",
      answer:
        "40% to start, and 60% when the work is finished and ready to go live. You can pay by credit card, Cash App or PayPal.",
    },
    {
      id: "after-launch",
      question: "What will I pay after launch?",
      answer:
        "Your domain name has a yearly fee, paid to the registrar, not to me. Upkeep however is your choice: pay me a monthly fee and I’ll handle it, or I’ll show you how to manage it yourself and there’s no upkeep fee.",
    },
    {
      id: "ownership",
      question: "Who owns the site?",
      answer:
        "You do. You own your domain and your site, and you get a plain language guide for keeping it up to date.",
    },
    {
      id: "who",
      question: "Who does the work?",
      answer:
        "I do, from our first conversation through launch. I’ve built websites since 2005, and you’ll always be talking to the person doing the work.",
    },
  ]);
