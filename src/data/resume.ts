// Tim's master resume: the /resume/ page and the PDF (npm run resume-pdf) both come from this file. Leads with web
// development and cloud computing (Tim, 2026-11-04). Tailored versions per job are made in ~/Projects/job-search.
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
  certifications: z.object({ heading: z.string(), items: z.array(z.string()) }),
  skills: z.array(z.object({ id: z.string(), group: z.string(), items: z.array(z.string()) })),
  printLabel: z.string(),
});

export const resume = resumeSchema.parse({
  title: "Resume",
  description:
    "Resume of Tim Rios, web developer and cloud computing student in San Antonio: 20 years of building websites for businesses, data analysis at JPMorgan Chase, and nine years running a small business.",
  name: "Tim Rios",
  headline: "Web developer and cloud computing student",
  summary:
    "Web developer with 20 years of building websites for businesses, now completing an A.A.S. in Cloud Computing (May 2027). I design, build and deploy production sites on serverless edge hosting with Git-based continuous deployment, set up DNS and email authentication, and integrate payments securely. Background in data analysis, where my Power BI automation cut a team’s reporting work by 80%, and nine years running a small business, where a new website and marketing doubled its income.",
  experience: [
    {
      id: "freelance",
      employer: "Tim Rios, websites and brands (self-employed)",
      place: "San Antonio, TX",
      dates: "2005 – present",
      roles: [
        {
          title: "Web Developer and Designer",
          dates: null,
          points: [
            "Design, build and deploy websites for local businesses with Astro, Next.js and TypeScript on Cloudflare Workers, with automatic builds and branch previews from GitHub; AI-assisted development with Claude Code.",
            "Move domains and DNS to Cloudflare with no email downtime; configure MX, SPF and DKIM records and custom-domain email.",
            "Integrate Stripe hosted checkout so no card data touches the site, with secret keys kept server-side only.",
            "Cut the time for a restaurant site’s main image to appear on phones from 6.1 s to 3.4 s, with a Lighthouse accessibility score of 100 on every page tested.",
            "Set up Google Business Profile and Apple Business Connect for a solo stylist: 3,749 Google profile views and 299 direction requests in five months, and website visitors up 72% year over year.",
            "Earlier sites in PHP, Perl, JavaScript and MySQL, including database migrations from staging to production, security patching and access control.",
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
          dates: "Jan 2022 – Oct 2024",
          points: [
            "Automated every recurring quality report in Power BI, cutting analyst workload by 80% and leading to the role’s evolution.",
            "Built Tableau and Power BI reports that turned quality findings into insights for executive leadership.",
            "Worked with cross-functional teams to find process improvements in quality data.",
          ],
        },
        {
          title: "Development Center Coach",
          dates: "Jan 2021 – Jan 2022",
          points: ["Trained new hires on the firm’s proprietary knowledge management system."],
        },
        {
          title: "Executive Line / Private Client Supervisor",
          dates: "Dec 2020 – Jan 2021",
          points: ["Delivered compliant, efficient service to the firm’s executive clients."],
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
            "Designed the logo and tuition calendars; built and ran the gym’s website, which it used until 2026.",
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
  certifications: {
    heading: "Certifications in preparation",
    items: ["CompTIA Security+", "CompTIA Linux+", "Fortinet NSE 4", "Cisco CCNA"],
  },
  skills: [
    {
      id: "web",
      group: "Web development",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Astro",
        "Next.js",
        "PHP",
        "Perl",
        "WordPress",
        "Java",
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
