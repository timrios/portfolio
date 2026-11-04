// Site-wide facts and copy. Every page reads these; nothing here is repeated anywhere else.
import { z } from "astro/zod";

const siteSchema = z.object({
  name: z.string(),
  domain: z.string(),
  email: z.email(),
  /** Where Tim is based, for search engines and copy */
  city: z.string(),
  region: z.string(),
  /** Formspree form that delivers contact messages to the email above */
  formEndpoint: z.url(),
  description: z.string(),
  navigation: z.array(z.object({ label: z.string(), href: z.string() })),
  home: z.object({
    headline: z.string(),
    lede: z.string(),
    primaryAction: z.object({ label: z.string(), href: z.string() }),
    secondaryAction: z.object({ label: z.string(), href: z.string() }),
    projectsLabel: z.string(),
    projectsHint: z.string(),
    workHeading: z.string(),
    workIntro: z.string(),
    servicesHeading: z.string(),
    processHeading: z.string(),
    processIntro: z.string(),
    closingHeading: z.string(),
    closingText: z.string(),
  }),
  footer: z.object({ about: z.string(), colorNote: z.string() }),
  projectLabels: z.object({
    inProgress: z.string(),
    liveSite: z.string(),
    preview: z.string(),
    archived: z.string(),
  }),
  contact: z.object({
    title: z.string(),
    description: z.string(),
    heading: z.string(),
    intro: z.string(),
    needsLegend: z.string(),
    needs: z.array(z.string()),
    messagePlaceholder: z.string(),
    submitLabel: z.string(),
    sending: z.string(),
    success: z.string(),
    error: z.string(),
    nextHeading: z.string(),
    next: z.array(z.string()),
  }),
  notFound: z.object({
    title: z.string(),
    heading: z.string(),
    text: z.string(),
    action: z.string(),
  }),
});

export const site = siteSchema.parse({
  name: "Tim Rios",
  domain: "timrios.dev",
  email: "hello@timrios.dev",
  city: "San Antonio",
  region: "TX",
  formEndpoint: "https://formspree.io/f/xnpplzng",
  description:
    "Tim Rios designs websites, logos, packaging, vehicle wraps and social media for local businesses in San Antonio, so every part of the business looks like it belongs together.",
  navigation: [
    { label: "Work", href: "/#work" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Contact", href: "/contact/" },
  ],
  home: {
    headline: "I make local businesses look as good as they are.",
    lede: "Websites, logos, packaging, vehicle wraps and social media, designed together so every part of your business looks like it belongs.",
    primaryAction: { label: "Start a project", href: "/contact/" },
    secondaryAction: { label: "See the work", href: "#work" },
    projectsLabel: "Projects",
    projectsHint: "Choose a project to watch it build.",
    workHeading: "Every business gets its own look.",
    workIntro:
      "A dog groomer, a hair stylist, a gymnastics gym and a shawarma restaurant don’t share customers, so they shouldn’t share a look. Each project is designed from the business itself: its people, its place and its customers.",
    servicesHeading: "One person for everything your customers see.",
    processHeading: "How working together goes.",
    processIntro:
      "There are no packages or price lists. Every quote is built around what your business needs.",
    closingHeading: "Tell me about your business.",
    closingText:
      "The first conversation is free. Tell me what you do and what isn't working yet, and I'll suggest where to start.",
  },
  footer: {
    about: "Websites, brands and social media for local businesses. Based in {city}.",
    colorNote:
      "My own colors are black and paper. The accent color you see belongs to whichever client is on screen.",
  },
  projectLabels: {
    inProgress: "In progress",
    liveSite: "Live site",
    preview: "Preview",
    archived: "Archived site",
  },
  contact: {
    title: "Contact",
    description:
      "Tell Tim Rios about your business: a new website, a logo or brand, signs, vehicle wraps or packaging, or social media. The first conversation is free.",
    heading: "Tell me about your business.",
    intro:
      "What do you do, and what isn't working yet? A few sentences is plenty. The first conversation is free.",
    needsLegend: "What do you need? Tick any that fit.",
    needs: [
      "A new website",
      "A logo or brand",
      "Signs, vehicle wraps or packaging",
      "Social media",
      "Not sure yet",
    ],
    messagePlaceholder: "My business is… and I'd like…",
    submitLabel: "Send message",
    sending: "Sending…",
    success: "Message sent. I'll reply by email to set up a time to talk.",
    error: "The message didn't send. Check your connection and try again, or email me at {email}.",
    nextHeading: "What happens next",
    next: [
      "I read your message and reply by email.",
      "We talk, by phone or in person, about your business and what would help most.",
      "I send a plan and a quote built for your business. You decide from there.",
    ],
  },
  notFound: {
    title: "Page not found",
    heading: "Nothing built here yet.",
    text: "This address doesn't lead to a page. It may have moved, or there may be a typo in the link.",
    action: "Go to the home page",
  },
});
