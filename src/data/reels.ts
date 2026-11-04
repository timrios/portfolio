// Reels shown on the home page as silent previews. The clips are short web copies in public/media/reels/ (made from
// the finished Reels in ~/Movies/<Client>/); the full Reels, with sound, live on the client's Instagram.
import { z } from "astro/zod";

const reelSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  /** Project the Reel was made for (projects.ts id) */
  projectId: z.string(),
  title: z.string(),
  caption: z.string(),
  /** Made with AI: labeled on the site as it is on Instagram (openly magical scenes only, never real pets or people) */
  ai: z.boolean(),
  /** File names in public/media/reels/ */
  video: z.string(),
  poster: z.string(),
  /** Describes the clip for people who can't see it */
  alt: z.string(),
});

export const reelsSection = z
  .object({
    heading: z.string(),
    intro: z.string(),
    note: z.string(),
    pause: z.string(),
    play: z.string(),
    aiLabel: z.string(),
  })
  .parse({
    heading: "The website is only half of it. Here’s what customers see every week.",
    intro:
      "Reels for Fanzi Pet, cut from real visits the groomers film, in the style of the van wrap.",
    note: "Silent previews. The full Reels, with sound, are on Fanzi’s Instagram.",
    pause: "Pause the Reels",
    play: "Play the Reels",
    aiLabel: "AI",
  });

export const reels = z.array(reelSchema).parse([
  {
    id: "gizmo-pug-tips",
    projectId: "fanzi-pet",
    title: "Gizmo’s pug-care tips",
    caption: "Filmed by the groomer, in her own words",
    ai: false,
    video: "gizmo-pug-tips.mp4",
    poster: "gizmo-pug-tips.jpg",
    alt: "A pug on the grooming table while the groomer explains how to clean above the nose, with captions",
  },
  {
    id: "duncan-deshed",
    projectId: "fanzi-pet",
    title: "Mr. Duncan’s de-shed",
    caption: "Three steps, filmed on smart glasses",
    ai: false,
    video: "duncan-deshed.mp4",
    poster: "duncan-deshed.jpg",
    alt: "A husky in the tub being de-shed, filmed from the groomer’s point of view",
  },
  {
    id: "halloween-spell",
    projectId: "fanzi-pet",
    title: "The Halloween spell",
    caption: "Openly magical, labeled as AI",
    ai: true,
    video: "halloween-spell.mp4",
    poster: "halloween-spell.jpg",
    alt: "An illustrated scene of aqua bubble magic swirling under a full moon, made with AI",
  },
  {
    id: "doodle-before-after",
    projectId: "fanzi-pet",
    title: "A doodle, before and after",
    caption: "Four stills, one groom",
    ai: false,
    video: "doodle-before-after.mp4",
    poster: "doodle-before-after.jpg",
    alt: "Photos of a fluffy doodle before its groom and neatly trimmed after",
  },
]);
