// What owners want settled before they reach out. No prices here: every job is quoted to fit (README → Decisions).
// Terms match the client agreement (2026-11-10); change both together.
import { z } from "astro/zod";

export const questions = z
  .array(
    z.object({ id: z.string().regex(/^[a-z0-9-]+$/), question: z.string(), answer: z.string() }),
  )
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
        "Half to start, and half once your site is working: tested, ready to go live, and taking orders if it sells online. The first half isn’t refundable once work begins. I send each half as an online invoice, and you can pay by card, Cash App Pay, Klarna or bank transfer.",
    },
    {
      id: "after-launch",
      question: "What will I pay after launch?",
      answer:
        "Your domain name has a small yearly fee, paid to the registrar, not to me. Hosting is usually free, on an account in your name. For the first year, anything that needs fixing to stay safe or keep working is on me, at no charge. After that, upkeep is your choice: a small monthly or yearly fee, or stop and your site keeps running as it is.",
    },
    {
      id: "changes",
      question: "Can I make changes myself?",
      answer:
        "The everyday ones, yes. Your prices, hours and services can come straight from the tools you already run your business with, like Square or your booking app, so a change there shows on your site. Anything else I change for a set price you know before you ask, and anything bigger is quoted first. I don’t start paid work without your OK.",
    },
    {
      id: "google",
      question: "Will I show up first on Google?",
      answer:
        "Nobody can honestly promise that, so I don’t. I build every site so Google can read it well, keep your details the same everywhere they appear, and make sure Google and Apple Maps point to it.",
    },
    {
      id: "ownership",
      question: "Who owns the site?",
      answer:
        "You do. Your domain, hosting and code accounts are in your name from day one, and once the site is paid in full, the site and its code are yours too. You can remove my access at any time, and you get a plain language guide for keeping it up to date.",
    },
    {
      id: "who",
      question: "Who does the work?",
      answer:
        "I do, from our first conversation through launch. I’ve built websites since 2005, and you’ll always be talking to the person doing the work.",
    },
  ]);
