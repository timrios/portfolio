// Reels shown as silent previews, one at a time (the first is featured). The clips are short web copies in public/media/reels/ (made from
// the finished Reels in ~/Movies/<Client>/); the full Reels, with sound, live on the client's Instagram.
import { z } from "astro/zod";

const reelSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  /** Project the Reel was made for (projects.ts id) */
  projectId: z.string(),
  title: z.string(),
  /** What the Reel is and how it was made, shown beside it */
  story: z.string(),
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
    note: z.string(),
    pause: z.string(),
    play: z.string(),
    aiLabel: z.string(),
    pickLabel: z.string(),
  })
  .parse({
    heading: "The website is only half of it. Here’s what customers see every week.",
    note: "A silent preview. The full Reels, with sound, are on Fanzi’s Instagram.",
    pause: "Pause the Reels",
    play: "Play the Reels",
    aiLabel: "AI",
    pickLabel: "Choose a Reel to watch",
  });

export const reels = z.array(reelSchema).parse([
  {
    id: "gizmo-pug-tips",
    projectId: "fanzi-pet",
    title: "Gizmo’s pug care tips",
    story:
      "A full visit filmed by the groomer, cut into three tips for pug and bulldog owners, in her own words.",
    ai: false,
    video: "gizmo-pug-tips.mp4",
    poster: "gizmo-pug-tips.jpg",
    alt: "A pug on the grooming table while the groomer explains how to clean above the nose, with captions",
  },
  {
    id: "duncan-deshed",
    projectId: "fanzi-pet",
    title: "Mr. Duncan’s de-shed",
    story:
      "Filmed first person on smart glasses in the groomer’s own voice, told as three steps that sell the de-shed add-on.",
    ai: false,
    video: "duncan-deshed.mp4",
    poster: "duncan-deshed.jpg",
    alt: "A husky in the tub being de-shed, filmed from the groomer’s point of view",
  },
  {
    id: "cornpop-tangle-rescue",
    projectId: "fanzi-pet",
    title: "Corn Pop’s tangle rescue",
    story:
      "One visit narrated by the groomer, cut as a 32-second story from tangled to tangle-free. The same footage became a longer tutorial, to learn which length Fanzi’s followers watch.",
    ai: false,
    video: "cornpop-tangle-rescue.mp4",
    poster: "cornpop-tangle-rescue.jpg",
    alt: "A groomer sprays detangler on a golden retriever’s ear and brushes it out, ending on the dog sitting tangle-free in the van, with captions",
  },
  {
    id: "doodle-before-after",
    projectId: "fanzi-pet",
    title: "A doodle, before and after",
    story: "Four stills of one groom, from shaggy to finished, cut into a Reel.",
    ai: false,
    video: "doodle-before-after.mp4",
    poster: "doodle-before-after.jpg",
    alt: "Photos of a fluffy doodle before its groom and neatly trimmed after",
  },
]);
