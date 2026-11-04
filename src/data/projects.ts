// Every client project shown on the site, in the order they appear. The raw notes behind each one live in
// case-studies/<id>/notes.md (never published); the copy here is written fresh from them for the public.
// Client permission to publish is assumed unless the notes say an item must stay out.
import { z } from "astro/zod";

const service = z.enum(["Website", "Brand", "Social media", "Local search"]);
const hex = z.string().regex(/^#[0-9A-F]{6}$/i);
const image = z.object({
  /** File in src/assets/images/, e.g. "fanzi-pet/logo.webp" */
  src: z.string(),
  alt: z.string(),
  caption: z.string().nullable(),
  /**
   * photo: cropped to fill its frame. artwork (a logo): shown whole, never cropped. artwork-on-light: artwork drawn
   * for light backgrounds (dark outlines), shown whole on a paper mat. Client artwork is never recolored.
   */
  treatment: z.enum(["photo", "artwork", "artwork-on-light"]).default("photo"),
  /** Spans the full width of a gallery (a design proof that needs room) */
  wide: z.boolean().default(false),
});

const projectSchema = z.object({
  /** Kebab-case; also the page address (/work/<id>/) and the case-studies folder name */
  id: z.string().regex(/^[a-z0-9-]+$/),
  /** false keeps a project off the site (e.g. not launched yet) */
  published: z.boolean(),
  name: z.string(),
  /** Short label for lists: "Dog grooming" */
  kind: z.string(),
  /** One line: what the business is */
  business: z.string(),
  place: z.string(),
  /**
   * The client's own brand color, used as the site's accent while this project is on screen ("borrowed color",
   * DESIGN.md → Color). Must reach 4.5:1 against black, since it also fills buttons with black text.
   */
  accent: hex,
  services: z.array(service).min(1),
  liveUrl: z.url(),
  links: z.array(z.object({ label: z.string(), href: z.url() })),
  /** One or two sentences for the home page */
  summary: z.string(),
  screens: z.object({ desktop: image, phone: image }),
  /** A real excerpt of the site's code, shown behind the build animation. Decorative. */
  code: z.string(),
  pageTitle: z.string(),
  pageDescription: z.string(),
  before: z.object({ heading: z.string(), text: z.string(), image: image.nullable() }),
  sections: z.array(
    z.object({
      service,
      heading: z.string(),
      text: z.string(),
      points: z.array(z.string()),
      images: z.array(image),
    }),
  ),
  results: z.object({
    heading: z.string(),
    items: z.array(z.object({ figure: z.string(), text: z.string() })),
    /** Where the numbers come from and when they were read */
    source: z.string(),
  }),
});

export type Project = z.infer<typeof projectSchema>;

const all = z.array(projectSchema).parse([
  {
    id: "fanzi-pet",
    published: true,
    name: "Fanzi Pet",
    kind: "Dog grooming",
    business: "Mobile dog grooming in spa vans, plus handmade, all-natural dog treats",
    place: "San Antonio and Irving, Texas",
    accent: "#9ADBD4",
    services: ["Brand", "Website", "Social media", "Local search"],
    liveUrl: "https://fanzipet.com",
    links: [{ label: "Instagram", href: "https://www.instagram.com/fanzimobilepetgrooming/" }],
    summary:
      "The logo, the treat bags and the van wrap came first. The website, the shop and the social media all grew out of the van customers already recognize on their street.",
    screens: {
      desktop: {
        src: "fanzi-pet/site-home-desktop.jpg",
        alt: "The Fanzi Pet home page: deep teal, the headline “Spa days that come to you.” and a freshly groomed doodle in the van",
        caption: null,
      },
      phone: {
        src: "fanzi-pet/site-home-phone.jpg",
        alt: "The Fanzi Pet home page on a phone",
        caption: null,
      },
    },
    code: `<section class="hero hero-band section--ink">
  <div class="container hero-split">
    <div class="hero-copy">
      <p class="pill">Mobile grooming in San Antonio &amp; Irving</p>
      <h1>Spa days that <span class="mark">come to you.</span></h1>
      <p class="lede">
        Gentle, one-on-one grooming in our spa van right
        outside your door — plus handmade, all-natural treats.
      </p>
      <a class="btn" href={site.bookingUrl}>{site.bookingLabel}</a>
      <a class="btn btn--ghost" href="/treats/">Order treats</a>
      <a class="check-link" href="/grooming/#check-address">
        Do we come to you? Check your address
      </a>
    </div>
  </div>
</section>`,
    pageTitle: "Fanzi Pet: brand, website and social for a mobile dog groomer",
    pageDescription:
      "How Tim Rios designed Fanzi Pet’s logo, treat bags and van wrap, then built the website, treat shop and social media around them.",
    before: {
      heading: "Where Fanzi started",
      text: "Fanzi had outgrown its first website. Prices weren’t clear, there was no way to check whether the vans come to your street, the treat checkout was tied to the old platform, and listings around the web used several different names for the business.",
      image: {
        src: "fanzi-pet/old-site-home-desktop.jpg",
        alt: "Fanzi’s earlier website: “Hi, we are FANZI” in orange and green type",
        caption: "The earlier site, October 2024.",
      },
    },
    sections: [
      {
        service: "Brand",
        heading: "A van people recognize on their street",
        text: "I designed the Fanzi logo, the treat bags and the van wrap: bright aqua, a white swoosh, and illustrated dogs splashing in bath bubbles. The wrap is what customers actually see, so it became the source for everything that came after.",
        points: [],
        images: [
          {
            src: "fanzi-pet/van-wrap-design-every-side.png",
            alt: "The Fanzi van wrap design drawn on every side of a Mercedes Sprinter: roof, both sides, front and back, in aqua and white with paw prints, bubbles, the logo and three illustrated dogs in a splash",
            caption: "The wrap design, drawn for every side of the van.",
            wide: true,
          },
          {
            src: "fanzi-pet/vans-side-by-side.webp",
            alt: "Two Fanzi vans parked side by side, wrapped in aqua and white with the Fanzi logo and paw prints",
            caption: "The same wrap on the street, on both vans.",
          },
          {
            src: "fanzi-pet/van-wrap-illustrated-dogs.png",
            alt: "Detail of the van wrap: a Pomeranian, a pug and a shih tzu in a bow tie splashing out of a wave of bath water",
            caption: "The wrap’s illustrated dogs.",
          },
          {
            src: "fanzi-pet/treat-bags-downtown-skyline.webp",
            alt: "Five Fanzi treat bags in different colors, each with an illustrated dog, lined up with the San Antonio skyline behind",
            caption: "Treat bags, one color and dog per flavor.",
          },
          {
            src: "fanzi-pet/logo.webp",
            alt: "The Fanzi Mobile Spa logo: a smiling dog with a bone in its mouth above the word Fanzi in aqua",
            caption: "The logo.",
            treatment: "artwork-on-light",
          },
        ],
      },
      {
        service: "Website",
        heading: "Answers before you have to ask",
        text: "The new site, live since 30 October 2026, puts what owners want to know first and keeps the same playful details as the van.",
        points: [
          "Exact grooming prices by dog size, with a size picker.",
          "“Do we come to you?”: type your address and it checks the real service areas, including a “you’re just outside” answer up to five miles out.",
          "A before-and-after slider and a photo wall of real dogs groomed in the vans. Every photo is a real customer’s dog.",
          "A treat shop with secure card checkout, live since 1 November 2026.",
          "The domain moved to the new site with no email downtime.",
        ],
        images: [
          {
            src: "fanzi-pet/site-grooming-desktop.jpg",
            alt: "The Fanzi grooming page with prices by dog size",
            caption: "Grooming, with prices by size.",
          },
          {
            src: "fanzi-pet/site-treats-desktop.jpg",
            alt: "The Fanzi treat shop",
            caption: "The treat shop.",
          },
        ],
      },
      {
        service: "Social media",
        heading: "Reels in the van’s own style",
        text: "The social style comes from the van wrap, not the website, because the van is what customers recognize. The groomers film real visits, and I cut them into short Reels in their own words. Openly magical scenes, like the Halloween Reel’s van flying past the moon, are made with AI in the wrap’s illustrated style and labeled as AI.",
        points: [],
        images: [],
      },
      {
        service: "Local search",
        heading: "One name everywhere",
        text: "I cleaned up the business’s listings around the web, so searches point customers to one name and one place.",
        points: [],
        images: [],
      },
    ],
    results: {
      heading: "So far",
      items: [{ figure: "8 days", text: "from the project’s start to the new site going live" }],
      source:
        "Results so far, November 2026. Post and search numbers will be added as they come in.",
    },
  },
  {
    id: "hair-by-christopher",
    published: true,
    name: "Hair By Christopher",
    kind: "Hair stylist",
    business: "A master stylist and colorist working on his own, with 15 years behind the chair",
    place: "Downtown San Antonio, Texas",
    accent: "#C7A46C",
    services: ["Brand", "Website", "Local search"],
    liveUrl: "https://christophercolors.com",
    links: [{ label: "Instagram", href: "https://www.instagram.com/hairbychris_sa" }],
    summary:
      "From a booking-app page to a brand of his own. Thousands now find him on Google and Apple Maps while looking for any salon, and his revenue is up sharply year over year.",
    screens: {
      desktop: {
        src: "hair-by-christopher/site-home-desktop.jpg",
        alt: "The Hair By Christopher home page: dark charcoal with champagne-gold type reading “Discover your new look”",
        caption: null,
      },
      phone: {
        src: "hair-by-christopher/site-home-phone.jpg",
        alt: "The Hair By Christopher home page on a phone",
        caption: null,
      },
    },
    code: `<div class="ehp-flex-hero has-layout-preset-storytelling">
  <div class="ehp-flex-hero__content-container">
    <h2 class="ehp-flex-hero__heading">DISCOVER YOUR NEW LOOK</h2>
    <h3 class="ehp-flex-hero__subheading">
      Led by Christopher Valdez, a master stylist and colorist,
      I specialize in the latest cutting techniques, advanced
      color applications, and transformative hair treatments.
    </h3>
    <div class="ehp-flex-hero__ctas-container">
      <a class="ehp-button ehp-button--primary">
        Call/Text +1 210 799 8160
      </a>
      <a class="ehp-button ehp-button--secondary"
         href="https://hairbychristopher.booksy.com">Book Now</a>
    </div>
  </div>
</div>`,
    pageTitle: "Hair By Christopher: brand, website and local search for a San Antonio stylist",
    pageDescription:
      "How Tim Rios gave a solo San Antonio stylist a logo, a website and listings of his own, and helped thousands of people find him on Google and Apple Maps.",
    before: {
      heading: "Where Christopher started",
      text: "Christopher had 15 years of experience and happy clients, but no website: just a page on a booking app, one stylist among hundreds. Nothing of his own came up when people searched for a salon nearby.",
      image: null,
    },
    sections: [
      {
        service: "Brand",
        heading: "Colors taken from the man himself",
        text: "I designed his logo and chose his colors from his personality and the presence he has in person: near-black, champagne gold and cream, with an elegant serif for headings.",
        points: [],
        images: [
          {
            src: "hair-by-christopher/logo.png",
            alt: "The Hair By Christopher logo: “Hair by Christopher” in gold and white serif capitals with a tint brush, comb and scissors",
            caption: "The logo.",
            treatment: "artwork",
          },
        ],
      },
      {
        service: "Website",
        heading: "One button, everywhere: Book Now",
        text: "He handles every booking himself, so the site does one job well: show his work, explain his services, and send every visitor straight to his booking page.",
        points: [
          "Services explained by type: precision cuts for men, women and kids, color from balayage to ombré, updos and smoothing treatments.",
          "A gallery of his own work, and a free consultation offered on every page.",
          "Page titles and descriptions written for people searching in San Antonio.",
        ],
        images: [
          {
            src: "hair-by-christopher/site-services-desktop.jpg",
            alt: "The Hair By Christopher services page",
            caption: "Services.",
          },
          {
            src: "hair-by-christopher/site-gallery-desktop.jpg",
            alt: "The Hair By Christopher gallery page",
            caption: "Gallery.",
          },
        ],
      },
      {
        service: "Local search",
        heading: "Found by people who didn’t know his name",
        text: "I set up and tuned his Google Business Profile and his Apple Maps listing, so people searching for a salon, a haircut or a barber nearby find him. Most of them weren’t looking for him by name.",
        points: [],
        images: [],
      },
    ],
    results: {
      heading: "Results",
      items: [
        { figure: "3,749", text: "people viewed his Google profile in five months" },
        { figure: "299", text: "asked Google for directions to his chair, and 31 called" },
        {
          figure: "333",
          text: "tapped his place in Apple Maps in a year, two thirds of them searching for a salon, not for him",
        },
        { figure: "+72%", text: "website visitors this summer compared with last summer" },
        {
          figure: "5.0",
          text: "stars from 121 Google reviews, the only perfect rating in downtown stylist results",
        },
        { figure: "Sharply up", text: "revenue this year over last, by his own books" },
      ],
      source:
        "Google Business Profile (June to October 2026), Apple Business Connect (November 2025 to October 2026), Google Analytics (July and August 2026 against 2025) and Google Search, as of November 2026.",
    },
  },
]);

export const projects = all.filter((project) => project.published);
