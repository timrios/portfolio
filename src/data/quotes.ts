// Client quotes, word for word. `approved` means the client has seen this exact wording and said yes. Drafts (written
// for the client to approve) show only while search engines are blocked, labeled as
// drafts, so the page can be judged with its quotes in place; the launch build drops them by itself. Once a client
// replies, paste their words exactly, trimming with "…" only, and set approved: true.
import { z } from "astro/zod";

export const quotes = z
  .array(
    z.object({
      id: z.string().regex(/^[a-z0-9-]+$/),
      projectId: z.string(),
      text: z.string(),
      /** As the client wants to be named */
      name: z.string(),
      role: z.string(),
      approved: z.boolean(),
    }),
  )
  .parse([
    {
      id: "christopher",
      projectId: "hair-by-christopher",
      text: "Before Tim, I was just another stylist on a booking app. Now people find me on Google when they search for a salon, and my book is fuller than it’s ever been.",
      name: "Christopher Valdez",
      role: "Hair By Christopher",
      approved: false,
    },
    {
      id: "fanzi",
      projectId: "fanzi-pet",
      text: "Tim designed our logo, our treat bags, our van and our website, so everything finally looks like us. Customers recognize the van before they even read the name.",
      name: "Owner",
      role: "Fanzi Pet",
      approved: false,
    },
  ]);

/** The quotes this build may show: approved ones always, drafts only until the site opens to search engines */
export const visibleQuotes = quotes.filter(
  (quote) => quote.approved || process.env.SITE_INDEXABLE !== "true",
);
