// What I offer, each with proof from a real project. Prices are never listed: every job is quoted to fit.
import { z } from "astro/zod";

const serviceSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string(),
  text: z.string(),
  /** A real example, pointing to a project page */
  proof: z.object({ text: z.string(), projectId: z.string() }),
});

export const services = z.array(serviceSchema).parse([
  {
    id: "websites",
    name: "Websites",
    text: "Fast sites you own, built around what your customers came to do: book, order, call or find you.",
    proof: {
      text: "Fanzi Pet’s prices by dog size and its “Do we come to you?” address check.",
      projectId: "fanzi-pet",
    },
  },
  {
    id: "brand",
    name: "Brand",
    text: "Logos, packaging, vehicle wraps and signs, so the van, the bag and the website look like one business.",
    proof: { text: "Fanzi’s logo, treat bags and van wrap.", projectId: "fanzi-pet" },
  },
  {
    id: "local-search",
    name: "Getting found",
    text: "Google and Apple Maps listings set up and tidied, and search basics done right, so people nearby find you first.",
    proof: {
      text: "3,749 people viewed Christopher’s Google profile in five months.",
      projectId: "hair-by-christopher",
    },
  },
  {
    id: "social-media",
    name: "Social media",
    text: "Posts and Reels in your brand’s style, cut from real footage you and your team film.",
    proof: { text: "Fanzi’s Reels, filmed by the groomers themselves.", projectId: "fanzi-pet" },
  },
]);
