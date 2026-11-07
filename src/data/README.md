# What each data file holds

Moved here from `CLAUDE.md` so it only loads when someone works on content. The rules themselves (all content lives in `src/data/`, zod-validated) stay in `CLAUDE.md`.

- `site.ts`: name, domain, email, Formspree endpoint, navigation, and the copy for home, dock, footer, contact and 404.
- `projects.ts`: every client project: copy, screenshots, images, results, the client's brand color (`accent`, a small marker only), the preview window's address (`previewUrl`, or `fullScreens` captures for a site that refuses framing), `hero` (how it appears in the home page's switcher and its phone "before"), and `published` (false keeps a project off the site).
- `reels.ts`: Reels, the first one featured; the short silent clips live in `public/media/reels/`.
- `quotes.ts`: client quotes, word for word. Drafts (for the client to approve) show labeled as drafts, on the live development build too, only until `SITE_INDEXABLE=true`; after that, only `approved: true` quotes appear (Tim, 2026-11-06).
- Text-message number: `phone` and `phoneSms` in `site.ts`.
- `questions.ts`: the home page's "Before you ask" answers: cost, payment, costs after launch, ownership, who does the work. Never a price.
- `build-notes.ts`: the "How this site was built" page, for developers and hiring managers. Its figures are measured and dated: re-measure after any large change, on a launch build (`SITE_INDEXABLE=true`), and never state a figure that wasn't measured.
- `services.ts`: the four services, each with proof from a project.
- `process.ts`: the five steps of working together.
- `about.ts`: the About page: intro, background timeline, how Tim works.
- `resume.ts`: Tim's master resume (the `/resume/` page and the PDF). Leads with web development and cloud computing. No phone number here: `npm run resume-pdf` adds it from `RESUME_PHONE` in `.env`. Job-specific versions are made in `~/Projects/job-search`.
