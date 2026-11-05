# DESIGN.md

The design system for timrios.dev, Tim Rios's portfolio. Every visual decision is recorded here. Components get these
values only through the CSS variables in `src/styles/global.css`. When a value changes, update this file first, then
the CSS, then the components.

History: version 1 (black and paper, client colors borrowed as the accent) and version 2 (black and proof yellow,
halftone portrait) were both rejected by Tim on 2026-11-04: the first handed his identity to his clients, the second
felt claustrophobic and dated ("1999"), and neither would make a business owner hire him. Version 3, below, starts
from what convinces a buyer.

## The brief

- **Subject:** Tim Rios designs websites, brand identities (logos, packaging, vehicle wraps, signs), Google and Apple
  Maps listings and social media for local businesses, so everything a customer sees looks like one business.
- **Audience:** owners of local businesses of every kind (groomers, stylists, gyms, restaurants, food trucks). Mostly
  on phones. Not designers: they hire someone who will get them more customers and is easy to work with.
- **Main job:** get the owner to reach out: text Tim, or send the form. No prices; typical timing is stated (2 to 4
  weeks for most websites).
- **Tim's direction (2026-11-04):** the work speaks for itself, Tim is not the face of it. Results over personality.
  Clean, open, never claustrophobic. Diverse: show he adapts to any kind of business. Tasteful effects, each with a job.
- **Benchmarks Tim likes:** patrickgibbs.dev and rubenmarcus.dev: the buyer's problem as the headline, practical facts
  (timing) up front, proof (numbers, clients) before personality, generous space, calm type.

## Principles

1. **Results first.** The first screen says what the owner gets (more customers) and shows real work; the next shows
   real numbers, each tied to the kind of business it came from.
2. **The work brings the color.** Tim's frame is a Prussian blue family (see Color), quiet enough that client sites, logos and photos
   keep their own colors and are what the eye goes to.
3. **Room to breathe.** Normal-width type at moderate sizes, wide margins, generous section spacing. Nothing fills the
   screen edge to edge.
4. **Life, with a job.** Tim's review: compared with patrickgibbs.dev the site felt flat and stacked. So the site moves
   and answers: the opening asks what's wrong and types real owner problems; the slider shows the change; results count up; the process line draws itself. Each plays once or answers
   the visitor. The star band and client light are the two ambient layers that never stop; only the one featured Reel also loops, and it can be paused.
5. **Dark first, light on request.** Both looks are complete; the site opens dark and remembers a visitor's switch.
6. **Proof next to every claim.** Results name their business and, on project pages, their source and date.
7. **Statement type.** Headlines are large enough to stand alone as the section's image.

## Brand

- **Name:** Tim Rios. **Domain and email:** timrios.dev, hello@timrios.dev. **Text:** (210) 802-8851 (`site.ts`).
- **Voice:** plain, warm, confident, first person ("I"). Speaks to the owner's goals: customers, calls, bookings.
- **Logo (2026-11-05): the star dot.** `timrios.dev` with the dot replaced by a star. The letters are Bricolage
  Grotesque (weight 700, display cut) converted to outlines. The star is a five-point lone star for Texas and the night
  sky of the star band: plump, softly cornered and leaning 10° forward, so it doesn't read as a rating star or a typed ★.
  Don't swap it for a four-point sparkle or an asterisk: both now read as AI product icons. The cloud idea was dropped:
  it speaks to employers, not owners, and turned to noise at small sizes.
  - **Color:** letters in the text color, star in the accent (frost and sky on dark, ink and Prussian on light; white or
    ink alone for one-color use). In the header it's the `Logo` component, so it follows both looks by itself.
  - **The star alone** is the small version: sky on a deep-ink tile for the favicon and profile pictures.
  - **Files:** `src/assets/images/brand/` (SVG masters, PNG copies, profile picture); `public/` holds the favicons.
    The artwork is final vector art: edit the SVGs, never redraw it from a screenshot. AI never draws it.

## Color

**Prussian blue** (2026-11-04). A single accent on white read as a website-builder default; purple has become an
AI-design tell; olive read as a wellness site. Prussian blue is the printer's ink and the blueprint blue: crafted,
trustworthy and fitting for someone who builds, deep and muted rather than bright web blue. Like Fanzi's teal, one hue
becomes a family of three shades, each with a job: **deep ink** carries whole sections (the header once scrolled,
results, closing, footer), **Prussian** does buttons and links, **blueprint** tints the page and pale panels.

Two complete looks, **dark by default** (Tim, 2026-11-04). `html[data-theme]` holds the look; an inline script in the
head applies the visitor's saved choice, else dark, before the page paints. The dark look is built from
the same hue (deep navy), not a neutral gray, so both looks are one brand.

### Palette

| Token                    | Hex       | Name           | Use                                            |
| ------------------------ | --------- | -------------- | ---------------------------------------------- |
| `--color-ink-deep`       | `#0E2433` | Deep ink       | Deep bands in light                            |
| `--color-prussian`       | `#1F5C8A` | Prussian       | Accent in light: buttons, links, focus         |
| `--color-blueprint`      | `#E4EEF5` | Blueprint      | Pale panels, tags (light)                      |
| `--color-blueprint-mist` | `#F6F9FB` | Blueprint mist | Page (light)                                   |
| `--color-white`          | `#FFFFFF` | White          | Cards (light)                                  |
| `--color-ink`            | `#0F1B26` | Ink            | Text (light); handle and tags on screenshots   |
| `--color-steel`          | `#4F6070` | Steel          | Secondary text (light)                         |
| `--color-slate`          | `#7F8E9C` | Slate          | Field edges (light)                            |
| `--color-brick`          | `#B42318` | Brick          | Errors (light)                                 |
| `--color-navy-night`     | `#0A1822` | Navy night     | Page (dark)                                    |
| `--color-navy-card`      | `#102331` | Navy card      | Cards and fields (dark)                        |
| `--color-navy-band`      | `#15314A` | Navy band      | Deep bands (dark)                              |
| `--color-sky`            | `#8EC3EA` | Sky            | Accent in dark and inside deep bands           |
| `--color-frost`          | `#EAF1F7` | Frost          | Text (dark)                                    |
| `--color-mist-gray`      | `#A9BACB` | Mist gray      | Secondary text (dark)                          |
| `--color-harbor`         | `#5F7387` | Harbor         | Field edges (dark)                             |
| `--color-steel-light`    | `#B9C8D6` | Pale steel     | Secondary text inside deep bands               |
| `--color-dusk`           | `#6E8499` | Dusk           | Field edges inside deep bands                  |
| `--color-coral`          | `#FF8A7A` | Coral          | Errors (dark)                                  |
| `--color-paper`          | `#F2EEE6` | Paper          | Mat behind client artwork drawn for light backgrounds |
| `--color-black`, `--color-print-white`, `--color-print-gray` | | Print | Resume print only |

### Semantic tokens

Components use these, never the palette tokens directly (exceptions: the paper mat, the print colors, and the
slider's handle and tags, which sit on client screenshots).

| Token            | Light          | Dark        | Inside `.on-deep` | Use                           |
| ---------------- | -------------- | ----------- | ----------------- | ----------------------------- |
| `--bg`           | blueprint mist | navy night  | deep ink (dark: navy band) | Page / band background |
| `--band`         | blueprint      | navy card   |                   | Pale panels, tags             |
| `--surface`      | white          | navy card   |                   | Cards, preview window, fields |
| `--text`         | ink            | frost       | white / frost     | Text                          |
| `--text-muted`   | steel          | mist gray   | pale steel        | Secondary text                |
| `--rule`         | Prussian 14%   | sky 14%     | sky 18%           | Hairlines (decorative)        |
| `--field-border` | slate          | harbor      | dusk              | Field and toggle edges (3:1)  |
| `--accent`       | Prussian       | sky         | sky               | Buttons, links, focus         |
| `--on-accent`    | white          | deep ink    | deep ink          | Text on the accent            |
| `--error`        | brick          | coral       |                   | Errors                        |
| `--shadow`       | ink-tinted, soft | black, deeper |               | Cards and screenshots         |

`.on-deep` switches the tokens above for everything inside a deep-ink surface (the scrolled header, results band,
closing, footer). `.deep` adds a soft glow of the Prussian blue inside the band (not the header).

### Client colors

Each project's `accent` in `projects.ts` appears only as the small square marker beside the client's name, with a
1px `--field-border` edge. It's decorative: the name beside it carries the meaning.

### Approved pairings

| Text / element  | On                   | Ratio |
| --------------- | -------------------- | ----- |
| ink             | blueprint mist / blueprint / white | 16.5 / 14.8 / 17.4 |
| steel           | blueprint mist / blueprint / white | 6.1 / 5.5 / 6.5 |
| Prussian (links) | blueprint mist / blueprint / white | 6.7 / 6.0 / 7.1 |
| white on Prussian | button             | 7.1   |
| slate edge      | blueprint mist / white | 3.2 / 3.4 (never on blueprint panels: 2.9) |
| white / pale steel / sky | deep ink    | 15.9 / 9.3 / 8.5 |
| dusk edge       | deep ink             | 4.1   |
| frost           | navy night / navy card / navy band | 15.8 / 14.1 / 11.7 |
| mist gray       | navy night / navy card / navy band | 9.1 / 8.1 / 6.7 |
| sky             | navy night / navy card / navy band | 9.6 / 8.5 / 7.1 |
| deep ink on sky | button (dark)        | 8.5   |
| harbor edge     | navy night / navy card | 3.7 / 3.3 |
| brick / coral   | light page / dark page | 6.2 / 7.9 |

## Typography

| Token            | Font                                                   | Role                          |
| ---------------- | ------------------------------------------------------ | ----------------------------- |
| `--font-display` | **Bricolage Grotesque** (variable), fallback system-ui | Headlines, normal width       |
| `--font-body`    | **Bricolage Grotesque**, text optical size             | Body, nav, buttons, forms     |
| `--font-mono`    | **Fragment Mono**                                      | Decorative code; resume dates |

**Why:** the same Bricolage, now at its normal width and weight 650: friendly, confident and roomy, where the
condensed 800 shouted. Self-hosted through Astro's font API.

- Headlines (h1, h2): `"opsz" 96, "wdth" 98`, weight 700, letter-spacing −0.028em, line-height 1.08: the display cut,
  where the font's ink traps show.
- h3: weight 650, letter-spacing −0.01em. Body: `"opsz" 14`, weight 400 (600 for emphasis and buttons).

### Type scale

| Token           | Size                          | Use                          |
| --------------- | ----------------------------- | ---------------------------- |
| `--text-display`| `clamp(3rem, 5.8vw, 5.5rem)`  | Page titles, home headline   |
| `--text-1`      | `clamp(2.6rem, 4.4vw, 3.75rem)` | Result figures, step numbers |
| `--text-2`      | `clamp(2.3rem, 4.6vw, 4.25rem)` | Section headings, owner problems, project names |
| `--text-3`      | 1.25rem                       | Card and step titles         |
| `--text-lede`   | 1.1875rem                     | Intros                       |
| `--text-body`   | 1.0625rem                     | Body                         |
| `--text-small`  | 0.9375rem                     | Captions, labels             |
| `--text-mono`   | 0.875rem                      | Code                         |

- Line length: body max 38rem. No all-caps labels, no arrows on buttons, no single highlighted word in a headline.

## Layout

- **Content width:** `--content-max` 76rem; `--content-narrow` 38rem. **Gutters:** 1.25rem phones, 2rem from `md`.
- **Section spacing:** `--section`, `clamp(4rem, 8vw, 6rem)`.
- **Hero (from `lg`):** text 5 parts, collage 7 parts. The text keeps the content column's left edge; the collage
  runs wider, toward the right edge of the window. The hero is sized to its content (not the full window height), so
  the results band shows at the bottom of the first screen on a typical laptop.

```
Home (desktop)
┌──────────────────────────────────────────────────────────────┐
│ timrios.dev       Work  How it works  About  [Text] [toggle]  │
│ More customers for        ┌ collage: client sites, a phone,  ┐│
│ your business.            │ the vans;                        ││
│ what I do                 │ shifts with the pointer          ││
│ [what's holding you back? ▌ typing…][Get a free plan] Text   ││
├──── Results band ─────────────────────────────────────────────┤
│ Before and after (huge)                                       │
│ [slider ........]  name, outcome, links                       │
│    name, outcome, links  [........ slider]   staggered, no lines │
├──── Quotes (approved only) ───────────────────────────────────┤
│ one big phone, playing │ heading, its story, stills to switch │
├──── Sound familiar? deep band: huge problem │ what I do ──────┤
│ From first text to live site: 1──2──3──4──5 drawn line        │
├──── Closing band ─────────────────────────────────────────────┤
└──── Footer ───────────────────────────────────────────────────┘
```

## Spacing

| Token        | Value   |
| ------------ | ------- |
| `--space-1`  | 0.25rem |
| `--space-2`  | 0.5rem  |
| `--space-3`  | 0.75rem |
| `--space-4`  | 1rem    |
| `--space-5`  | 1.5rem  |
| `--space-6`  | 2rem    |
| `--space-7`  | 2.5rem  |
| `--space-8`  | 3rem    |
| `--space-9`  | 4.5rem  |
| `--space-10` | 7rem    |

## Breakpoints

Mobile-first; write these directly in `@media` rules.

| Name | Min width |
| ---- | --------- |
| `sm` | 640px     |
| `md` | 768px     |
| `lg` | 1024px    |
| `xl` | 1280px    |

## Shape and elevation

| Token             | Value   | Used on                                  |
| ----------------- | ------- | ---------------------------------------- |
| `--radius-pill`   | 999px   | Buttons, the theme toggle, tags          |
| `--radius-card`   | 12px    | Cards, the preview window                |
| `--radius-screen` | 8px     | Screenshots                              |

`--shadow` lifts screenshots and the collage off the page; it's softer in light, deeper in dark.

## Interaction and motion

| Element            | Behavior                                                                          |
| ------------------ | --------------------------------------------------------------------------------- |
| **Collage**        | Each piece shifts up to 14px with the pointer, at its own depth, and settles back when the pointer leaves. Fine pointers only. |
| **Client glow**    | Behind the collage, a soft blur of the featured clients' own colors (their `accent` in `projects.ts`), stronger in light (0.8) than dark (0.45) so it reads on white. It drifts slowly with the pointer, the deepest layer. |
| **Star band**      | Behind every page, a band of tiny stars winds down the full page, dense at its core, thinning at its edges, in clumps with dark gaps between, with empty sky on either side. Two depths: a slow, dim far layer with soft haze, and a sparser near layer of larger stars that drift and scroll faster. Each star has its own heading and gently curving path, and fades in and out over its life, so the band keeps its shape while the motion inside it looks natural. About one near star in six carries a client's color. Stars fade out around text and small controls. Sky and frost in dark; Prussian and steel in light. Fewer stars on phones. A fine grain over the background keeps the haze from banding. |
| **Client light**   | Behind each before/after, a blur of that client's color visibly breathes (opacity 0.3 to 0.95, scale 0.88 to 1.14) over 7s, each out of step with the others. The hero's glow breathes too. |
| **Results**        | Each figure counts up from zero once, over 1.2s, when the band first comes into view. The final value is in the HTML, so screen readers and no-script see it. |
| **Before/after**   | A range slider wipes between the old and new site (`clip-path`); arrow keys move it. Starts at 50%. |
| **Theme toggle**   | Switches with a circular reveal from the button (View Transitions), 0.5s; instant where unsupported. |
| **Preview window** | Opens the client's live site; the build line sweeps over its code while it loads. |
| **Reels**          | One featured silent loop, large, plays only while visible; stills switch it; a pause button stops it. Paused under reduced motion. |
| **Ask box**        | The field's placeholder types real owner problems, one letter at a time, and stops once the visitor focuses it. What they type (or nothing) goes to the contact form, prefilled. |
| **Process line**   | The line through the steps draws left to right once, 1.4s, when it comes into view. |
| **Buttons**        | Hover darkens the accent slightly; ghost buttons gain a stronger edge.            |
| **Links**          | A 2px accent bar under the text that fills in behind it on hover (text turns `--on-accent`). |
| **Cards**          | Soft ink-tinted shadow, no border; lift 3px on hover.                             |
| **Header**         | Pinned to the top. At the top of the page it sits on the page; once scrolled 16px it switches to the deep-ink surface (`.on-deep`) with a shadow, 0.3s, so the menu and the text number always stand out. |
| **Primary button** | A soft glow of the accent beneath it.                                             |

### Reduced motion

With `prefers-reduced-motion: reduce`: the star band holds still and moves with the page, client light doesn't breathe, the ask box shows one static example, the process line is already drawn, no collage movement, figures appear at their value, the theme switches
instantly, the preview's line holds still, Reels start paused.

## Components

- **Header:** the logo (`Logo`), links, the theme toggle, and a "Text" pill button with the number.
- **Footer:** name and city, email, text number, year.
- **StarBand:** the star band; one fixed canvas and grain layer behind every page, from the layout. Hidden in print. Never named as space in copy: it's atmosphere, not a theme.
- **HomeHero:** the short headline, what Tim does, the ask box, timing note; the client collage.
- **AskBox:** a labeled field with typed examples and a "Get a free plan" button, posting to `/contact/?need=…`, which prefills the message.
- **ResultsBand:** home: the featured results (`band` text in `projects.ts`), each naming its kind of business. Project
  pages: that project's results and source. One row for up to four; more wrap in rows of three.
- **BeforeAfter:** one row per project on the home page, alternating sides with no dividers: the **CompareSlider**, big name, kind, the outcome line, "Read the
  story" and "Browse the site" (opens **ProjectPreview**).
- **CompareSlider:** the before/after slider (or a "before" description when there's no old site), with the client's light behind it; home and project pages.
- **LogoRow:** "Businesses I've worked with": each client's real logo on the background it was designed for (white or
  ink, in either look), linking to the project. On About.
- **Project page:** kind and place with the client marker, name, summary, facts (what I did, the site, Instagram),
  "Browse the site"; the results band with its source; the before story with the CompareSlider and the phone view;
  each section with a service pill, text, points (accent dots) and gallery (Fanzi's social section shows its Reels);
  the client's quote (when approved); the next project as a card with its screenshot; the closing band.
- **Quotes:** client quotes from `quotes.ts`. Only `approved` quotes appear on the live site; drafts show in local
  development only, labeled "Draft, awaiting the client's OK".
- **FeaturedReel:** one Reel, emphasized: a large phone playing it, its story beside it, stills to switch to the others, a pause button. Home and project pages.
- **ServiceList** ("Sound familiar?"): a deep band of huge statements, each the owner's problem with what Tim does and a proof link beside it; the problem turns accent on hover.
- **ProcessSteps:** a timeline: large numbers in the accent on a line that draws itself.
- **Closing:** heading, free-plan button, text button.
- **ProjectPreview:** the preview window.
- **ThemeToggle:** a pill switch; `aria-pressed` reflects dark.
- **Img:** every image; builds WebP copies.

## Imagery

- **Client work only.** Screenshots are cropped from case-study captures (1440×900 desktop, 1290×2796 phone).
- **Image treatments** (`treatment` in `projects.ts`): `photo` crops to fill; `artwork` shows whole on the surface;
  `artwork-on-light` shows whole on a paper mat. `wide` spans a gallery. Client artwork is never recolored.
- **No photo of Tim** on the home page (his choice): the work is the face.

## Accessibility

- Only the approved pairings. A visible 2px focus outline (accent) with 2px offset everywhere.
- "Skip to content" first. Every form field labeled; required fields marked in words.
- 44×44px minimum targets. Color never carries meaning alone.
- The slider is a real `<input type="range">` with a label. The toggle states its current look.
- Reduced motion respected (see above).
