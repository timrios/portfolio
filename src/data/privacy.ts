// The privacy page, written from what this site really sends: a contact form that posts to Formspree, a saved
// light/dark choice in the browser, and Cloudflare as the host. Update it, and its date, in the same change that adds
// a form, embed, analytics or any other outside service (README → Decisions; recipe: dev-setup/knowledge/web/recipes/privacy-policy/).
import { z } from "astro/zod";

export const privacy = z
  .object({
    title: z.string(),
    description: z.string(),
    heading: z.string(),
    updated: z.string(),
    /** {email} and {phone} are filled in from site.ts by the page */
    sections: z.array(
      z.object({
        id: z.string().regex(/^[a-z0-9-]+$/),
        heading: z.string(),
        paragraphs: z.array(z.string()),
      }),
    ),
  })
  .parse({
    title: "Privacy Policy",
    description:
      "What this site collects when you contact me, who handles it, and the choices you have.",
    heading: "Privacy Policy",
    updated: "November 14, 2026",
    sections: [
      {
        id: "intro",
        heading: "The short version",
        paragraphs: [
          "Tim Rios (“I,” “me”) designs websites and brands for local businesses from San Antonio, Texas. This policy explains what this website collects, how I use it, and the choices you have. The site has no accounts, no ads and no tracking.",
        ],
      },
      {
        id: "collect",
        heading: "What I collect",
        paragraphs: [
          "If you use the contact form, I receive your name, your email address or phone number, and your message. I also keep messages you send me by text, email or social media so I can reply and follow up.",
          "When you browse the site, I don’t use analytics, advertising trackers or cookies to follow you. Your browser remembers your choice of light or dark look on your own device (local storage), and nothing else. You can clear it by clearing the site’s data in your browser.",
          "Like any website, my hosting provider processes your IP address and basic browser information to deliver pages and protect the site from abuse.",
        ],
      },
      {
        id: "use",
        heading: "How I use it",
        paragraphs: [
          "Only to answer your message, quote and plan a project with you, and keep ordinary business records. I don’t sell your information or share it for advertising.",
        ],
      },
      {
        id: "share",
        heading: "Who handles it",
        paragraphs: [
          "Cloudflare hosts this website. Formspree delivers contact form messages to my email. Each company handles your information under its own privacy policy. I may also disclose information if the law requires it.",
        ],
      },
      {
        id: "keep",
        heading: "How long I keep it",
        paragraphs: [
          "Messages from people who become clients are kept for as long as I work with them and afterwards as business and tax records require. Other messages are deleted when they’re no longer needed.",
        ],
      },
      {
        id: "choices",
        heading: "Your choices",
        paragraphs: [
          "You can ask me what I hold about you, to correct it or to delete it. Email {email} and I’ll reply within 45 days. I may need to keep some records where the law requires it.",
        ],
      },
      {
        id: "children",
        heading: "Children",
        paragraphs: [
          "This site is meant for adults and teens 13 and older. I don’t knowingly collect information from children under 13. If you think a child has sent me something, email me and I’ll delete it.",
        ],
      },
      {
        id: "links",
        heading: "Other websites",
        paragraphs: [
          "This site links to my clients’ websites and social profiles. Their own privacy policies apply when you use them.",
        ],
      },
      {
        id: "changes",
        heading: "Changes",
        paragraphs: [
          "If I change this policy, I’ll post the new version here and update the date at the top.",
        ],
      },
      {
        id: "contact",
        heading: "Contact",
        paragraphs: ["Questions about your privacy? Email {email} or text {phone}."],
      },
    ],
  });
