// The About page: who Tim is, his background and how he works. Preliminary draft (2026-11-04) from his resume and
// conversations; Tim reviews every line before the site launches (private task list).
import { z } from "astro/zod";

const aboutSchema = z.object({
  title: z.string(),
  description: z.string(),
  heading: z.string(),
  /** Tim's illustrated portrait (style guide: dev-setup knowledge, "Tim's signature art style"); file lives in assets/images/ */
  portrait: z.object({ src: z.string(), alt: z.string() }),
  intro: z.array(z.string()).min(1),
  logosHeading: z.string(),
  backgroundHeading: z.string(),
  resumeLink: z.string(),
  /** In date order: a real sequence, so it's shown as a timeline */
  background: z.array(
    z.object({ id: z.string(), when: z.string(), what: z.string(), detail: z.string() }),
  ),
  principlesHeading: z.string(),
  principles: z.array(z.object({ id: z.string(), name: z.string(), text: z.string() })),
});

export const about = aboutSchema.parse({
  title: "About: San Antonio web and brand designer",
  description:
    "Tim Rios has built websites since 2005. He ran the business side of a San Antonio gym for nine years and now designs brands, websites and social media for local businesses.",
  heading: "I’ve been building websites since 2005.",
  portrait: {
    src: "brand/tim-portrait.jpg",
    alt: "Illustration of Tim Rios, smiling, with short black hair and a trimmed beard, in a green puffer jacket with a gold star patch.",
  },
  intro: [
    "I’m Tim Rios, a web and brand designer in San Antonio. For local businesses I design the whole picture: the logo, the website, the van, the bag and the posts, so everything a customer sees looks like one business.",
    "I’ve also been on the owner’s side of the counter. For nine years I ran the business side of a gymnastics gym, and the website and marketing I built for it doubled its income in a year. So I design for what an owner actually needs: more customers, fewer repeat questions, and a site that keeps working.",
    "After the gym, I spent four years at JPMorgan Chase, where I automated every recurring quality report in Power BI, which cut the reporting work of my role by 80% and stayed with the role after I left. The habit of measuring stuck: every project here shows real numbers.",
    "I’m also finishing a degree in Cloud Computing, so what I build is fast, secure and set up right behind the scenes, from hosting to email.",
  ],
  logosHeading: "Businesses I’ve worked with",
  backgroundHeading: "Background",
  resumeLink: "Full resume",
  background: [
    {
      id: "freelance",
      when: "2005",
      what: "Websites for businesses",
      detail:
        "Started with hand-coded HTML and CSS, then Perl back ends for freelance clients, and kept building websites alongside every job since.",
    },
    {
      id: "agsa",
      when: "2011–2020",
      what: "Business Manager, Acrobatic Gymnastics of San Antonio",
      detail:
        "Designed the gym’s logo, website and marketing; income +100% in 2012. Cut operating costs in half by renegotiating the gym’s services.",
    },
    {
      id: "jpmorgan",
      when: "2020–2024",
      what: "JPMorgan Chase",
      detail:
        "Executive and private-client service, then training new hires, then Quality Data Analyst: automated reporting in Power BI, built reports for leadership, and guided team leaders on compliance and quality goals.",
    },
    {
      id: "tim-rios",
      when: "Today",
      what: "Tim Rios, websites and brands",
      detail:
        "Brands, websites, local search and social media for local businesses in San Antonio and beyond.",
    },
    {
      id: "degree",
      when: "May 2027",
      what: "A.A.S. in Cloud Computing, Northeast Lakeview College",
      detail: "Linux administration, networking and network security, and cloud infrastructure.",
    },
  ],
  principlesHeading: "How I work",
  principles: [
    {
      id: "one-person",
      name: "One person, start to finish",
      text: "You talk to the person who designs and builds your work, from the first conversation to launch day and after.",
    },
    {
      id: "from-your-business",
      name: "Designed from your business",
      text: "Colors, type and details come from your logo, your place and your personality, never from a template.",
    },
    {
      id: "yours",
      name: "Yours to run",
      text: "You own your domain and your site, and I show you how to keep it up to date.",
    },
    {
      id: "measured",
      name: "Measured",
      text: "I track what changes after launch, from searches to calls to direction requests, so you can see what the work did.",
    },
  ],
});
