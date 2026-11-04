// How a project runs, in order. Shown numbered on the home page because it is a real sequence.
import { z } from "astro/zod";

export const process = z
  .array(z.object({ id: z.string().regex(/^[a-z0-9-]+$/), name: z.string(), text: z.string() }))
  .parse([
    {
      id: "talk",
      name: "A free conversation",
      text: "Tell me about your business and what isn’t working yet. No charge and no pressure.",
    },
    {
      id: "plan",
      name: "A plan and a quote",
      text: "I suggest what would help most and quote it for your business. No packages to squeeze into.",
    },
    {
      id: "design",
      name: "Design",
      text: "I design from your business itself, your logo, your place and your personality, and show you options before anything is built.",
    },
    {
      id: "launch",
      name: "Build and launch",
      text: "I build it, move your domain without losing email, and make sure Google and Apple Maps point to it.",
    },
    {
      id: "keep-fresh",
      name: "Keep it fresh",
      text: "New photos, changes, posts and Reels after launch, as much or as little as you need.",
    },
  ]);
