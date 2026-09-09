# Karsten Van Vooren — Portfolio

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion + Lenis.

## Running it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. (First `npm run build`/`npm run dev` needs
internet access once, to fetch the Inter and Space Grotesk fonts from Google
Fonts — that's normal, Next.js caches them after that.)

## What's here

- `src/app/page.tsx` — homepage (hero + project grid + about teaser)
- `src/app/work/[slug]/page.tsx` — case study template, shared by every project
- `src/app/about/page.tsx`, `src/app/contact/page.tsx`
- `src/data/projects.ts` — **edit this file to add/update case studies.** Every
  project you add here automatically gets a page at `/work/<slug>` — you
  don't need to touch the template.
- `src/components/Hero.tsx` — the "hollow letter" hero effect, with a
  cursor-reactive gradient blob behind the text
- `src/app/globals.css` — theme tokens (`--accent`, `--accent-2`, `--ink`,
  etc.) — change these to reskin the whole site from one place

## Still placeholder — worth doing before this goes live

- Real project photos/screenshots/mockups instead of the gradient-blob
  covers (swap the `<div className="gradient-blob" .../>` blocks in
  `ProjectCard.tsx` and `work/[slug]/page.tsx` for `next/image`)
- Real copy in `src/data/projects.ts` for each case study (problem, process,
  solution, outcome) — the current text is instructional placeholder
- Your real email/socials in `Footer.tsx` and `contact/page.tsx`
- A `resume.pdf` dropped into `/public` (linked from the About page)
- Metadata/OG image in `layout.tsx` once you have a domain

## Deploying

Push this to a GitHub repo, then import it on [Vercel](https://vercel.com/new) —
it'll detect Next.js automatically and deploy on every push. Add a custom
domain from the Vercel project settings once you've bought one.
