// What I offer, led by the problem an owner says out loud, with proof from a real project. Prices are never listed:
// every job is quoted to fit.
import { z } from "astro/zod";

const serviceSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  /** What owners tell me in the first conversation */
  problem: z.string(),
  name: z.string(),
  text: z.string(),
  /** A real example, pointing to a project page */
  proof: z.object({ text: z.string(), projectId: z.string() }),
});

export const services = z.array(serviceSchema).parse([
  {
    id: "local-search",
    problem: "Nobody finds us on Google.",
    name: "Getting found",
    text: "Google and Apple Maps listings set up properly, and a site built to show up when people nearby search.",
    proof: {
      text: "3,749 people viewed Christopher’s Google profile in five months.",
      projectId: "hair-by-christopher",
    },
  },
  {
    id: "websites",
    problem: "Our website looks outdated.",
    name: "Websites",
    text: "A fast, modern site designed from your business, built around what customers came to do: book, order, call or find you.",
    proof: {
      text: "Fanzi Pet’s prices by dog size and its “Do we come to you?” address check.",
      projectId: "fanzi-pet",
    },
  },
  {
    id: "brand",
    problem: "Our van, signs and site don’t match.",
    name: "Brand",
    text: "One look across everything: logo, packaging, vehicle wraps, signs and the website.",
    proof: { text: "Fanzi’s logo, treat bags and van wrap.", projectId: "fanzi-pet" },
  },
  {
    id: "social-media",
    problem: "We never have time for social media.",
    name: "Social media",
    text: "Posts and Reels cut from footage you already film, in your brand’s style.",
    proof: { text: "Fanzi’s Reels, filmed by the groomers themselves.", projectId: "fanzi-pet" },
  },
]);
