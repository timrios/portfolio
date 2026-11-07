// The "How this site was built" page, for developers and hiring managers. Reached only from the footer. Every figure
// is measured, with its date in `measuredSource`: rerun and update them after any large change.
import { z } from "astro/zod";

export const buildNotes = z
  .object({
    title: z.string(),
    description: z.string(),
    heading: z.string(),
    intro: z.string(),
    measuredLabel: z.string(),
    measured: z.array(z.object({ figure: z.string(), text: z.string() })),
    measuredSource: z.string(),
    sections: z.array(z.object({ id: z.string().regex(/^[a-z0-9-]+$/), heading: z.string(), text: z.string() })),
    resumeAction: z.string(),
    contactAction: z.string(),
  })
  .parse({
    title: "How this site was built",
    description:
      "The design system, browser features and measured performance behind timrios.dev, for developers and hiring managers.",
    heading: "How this site was built.",
    intro:
      "The words on this site speak to local business owners. The design and the build are what I’d like a developer or hiring manager to read, so here’s what’s under them.",
    measuredLabel: "Measured results for this site",
    measured: [
      { figure: "90", text: "Lighthouse performance, home page on a simulated phone" },
      { figure: "100", text: "Lighthouse accessibility" },
      { figure: "100", text: "Lighthouse best practices" },
      { figure: "3.2 KB", text: "JavaScript on the home page, compressed" },
    ],
    measuredSource: "One Lighthouse run on the launch build, served locally, 6 November 2026.",
    sections: [
      {
        id: "phones",
        heading: "Phones first",
        text: "Most web traffic worldwide now comes from phones (StatCounter, 2026), and 85% of the views of Hair By Christopher’s Google profile came from one. So every page was designed at phone size and then widened. Actions sit in a dock under the thumb, and a script checks every page for sideways scrolling and small tap targets.",
      },
      {
        id: "system",
        heading: "One design system",
        text: "Every color, size, radius and timing is a token. Colors are written in OKLCH, there are two complete looks, and interface transitions share three durations and one curve.",
      },
      {
        id: "effects",
        heading: "Effects that have a reason",
        text: "On desktop, the window light behind the page follows the real sun over San Antonio: its angle, height and warmth. The before and after wipe plays once so you can see what the switch does, and the steps fill in as you scroll past them. All of it respects reduced motion, and a browser that can’t run an effect simply goes without it.",
      },
      {
        id: "platform",
        heading: "The browser before a library",
        text: "There’s no React, animation library or UI kit. Astro builds static pages, and the page transitions, theme reveal, scroll effects, answers, menu sheet and before and after slider use what browsers already provide: View Transitions, scroll timelines, details, dialog and a range input.",
      },
      {
        id: "data",
        heading: "Content as checked data",
        text: "All copy, results and client details live in typed data files, validated with zod at build time, so a malformed edit fails the build instead of breaking the live site. Client quotes carry an approved flag, and the launch build removes any quote without one.",
      },
      {
        id: "access",
        heading: "Accessible by default",
        text: "Keyboard focus is always visible, tap targets are at least 44 pixels, and motion stops for anyone who asks their device to reduce it. The before and after slider is a real range input, so arrow keys work.",
      },
    ],
    resumeAction: "See my resume",
    contactAction: "Get in touch",
  });
