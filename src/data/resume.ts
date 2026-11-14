// Tim's master resume: the /resume/ page and the PDF (npm run resume-pdf) both come from this file. Leads with web
// development and cloud computing (Tim, 2026-11-04). Kept in line with the one-page CV in job-search (2026-11-14): no
// certifications until one is earned, no client count, and never "supervised" for the Chase roles. Tailored versions per job are made in ~/Projects/job-search.
// The phone number is never here: the public page leaves it out, and the PDF script adds it from .env.
import { z } from "astro/zod";

const resumeSchema = z.object({
  title: z.string(),
  description: z.string(),
  name: z.string(),
  headline: z.string(),
  summary: z.string(),
  experience: z.array(
    z.object({
      id: z.string(),
      employer: z.string(),
      place: z.string(),
      dates: z.string(),
      /** One employer can hold several roles (promotions), newest first */
      roles: z.array(
        z.object({ title: z.string(), dates: z.string().nullable(), points: z.array(z.string()) }),
      ),
    }),
  ),
  projectsIntro: z.string(),
  education: z.array(
    z.object({
      id: z.string(),
      degree: z.string(),
      school: z.string(),
      dates: z.string(),
      details: z.array(z.string()),
    }),
  ),
  skills: z.array(z.object({ id: z.string(), group: z.string(), items: z.array(z.string()) })),
  printLabel: z.string(),
});

export const resume = resumeSchema.parse({
  title: "Resume",
  description:
    "Resume of Tim Rios, web developer and cloud computing student in San Antonio: freelance websites since 2005, data analysis at JPMorgan Chase, and nine years running a small business.",
  name: "Tim Rios",
  headline: "Web developer and cloud computing student",
  summary:
    "Web developer moving into full-time development and cloud work, completing an A.A.S. in Cloud Computing (May 2027). I design, build and deploy production websites for businesses with Next.js, React, Astro and TypeScript on Cloudflare Workers, set up DNS and email authentication, and integrate payments securely. Background in data analysis at JPMorgan Chase, where my Power BI automation cut the reporting work of my role by 80%, and nine years running a small business, where a new website and marketing doubled its income.",
  experience: [
    {
      id: "freelance",
      employer: "Tim Rios, websites and brands",
      place: "San Antonio, TX",
      dates: "2005 – present",
      roles: [
        {
          title: "Freelance Web Developer and Designer (alongside full-time roles until 2024)",
          dates: null,
          points: [
            "Design, build and deploy production websites for local businesses with Next.js, React, Astro and TypeScript on Cloudflare Workers, with automatic builds and branch previews from GitHub; AI-assisted development with Claude Code.",
            "Integrate Stripe hosted checkout so no card data touches the site, with secret keys kept server-side only.",
            "Move domains and DNS to Cloudflare with no email downtime, setting up MX, SPF and DKIM records for custom-domain email.",
            "Cut the time for a restaurant’s new site’s main image to appear on phones from 6.1 s to 3.4 s, with a Lighthouse accessibility score of 100 on every page tested.",
            "Set up Google Business Profile and Apple Business Connect for a solo stylist: 3,749 Google profile views and 299 direction requests in five months, and website visitors up 72% year over year.",
            "Started with hand-coded HTML and CSS, then Perl CGI and PHP with MySQL back ends for freelance clients, including database migrations from staging to production, security patching and access control.",
          ],
        },
      ],
    },
    {
      id: "jpmorgan",
      employer: "JPMorgan Chase",
      place: "San Antonio, TX",
      dates: "Dec 2020 – Oct 2024",
      roles: [
        {
          title: "Quality Data Analyst",
          dates: "Jan 2023 – Oct 2024",
          points: [
            "Automated every recurring quality report in Power BI, cutting the reporting work of my role by 80%.",
            "Guided team leaders and division leaders on meeting regulatory compliance and quality KPIs, and wrote call evaluations and coaching for telephone specialists.",
            "Built Tableau and Power BI reports that turned quality findings into insights for executive leadership.",
          ],
        },
        {
          title: "Development Center Coach",
          dates: "May 2022 – Jan 2023",
          points: ["Trained new hires on the firm’s proprietary knowledge management system."],
        },
        {
          title: "Executive Line / Private Client Supervisor",
          dates: "Dec 2020 – May 2022",
          points: [
            "Escalation point for specialists on complex questions from the firm’s executive and private clients.",
          ],
        },
      ],
    },
    {
      id: "agsa",
      employer: "Acrobatic Gymnastics of San Antonio",
      place: "San Antonio, TX",
      dates: "2011 – 2020",
      roles: [
        {
          title: "Business Manager",
          dates: null,
          points: [
            "Doubled the gym’s income in 2012 (+100%) with a new website, marketing and search optimization.",
            "Cut total operating costs by 50% by analyzing overhead and renegotiating business services.",
            "Designed the logo and tuition calendars, and built and ran the gym’s website.",
          ],
        },
      ],
    },
  ],
  projectsIntro: "Case studies with results, live sites and screenshots:",
  education: [
    {
      id: "aas",
      degree: "A.A.S. in Cloud Computing",
      school: "Northeast Lakeview College",
      dates: "Expected May 2027",
      details: [
        "Coursework: Red Hat Linux Administration I and II, Cisco routers, networking fundamentals, network security, cloud concepts, Java programming.",
      ],
    },
  ],
  skills: [
    {
      id: "web",
      group: "Web development",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Astro",
        "PHP",
        "WordPress",
      ],
    },
    {
      id: "cloud",
      group: "Cloud and infrastructure",
      items: [
        "Cloudflare Workers",
        "DNS",
        "Email authentication (SPF, DKIM)",
        "Git and GitHub",
        "Continuous deployment",
        "Red Hat Linux",
        "Cisco routing and switching",
        "Network security",
      ],
    },
    {
      id: "data",
      group: "Data",
      items: ["SQL", "MySQL", "Power BI", "Tableau", "Microsoft Office"],
    },
    {
      id: "search",
      group: "Search and marketing",
      items: [
        "Google Search Console",
        "Google Business Profile",
        "Apple Business Connect",
        "Lighthouse",
        "Stripe",
      ],
    },
  ],
  printLabel: "Print or save as PDF",
});
