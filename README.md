# Karsten van Vooren — Portfolio

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion + Lenis.

## Running it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's here

- `src/app/page.tsx` — homepage (hero, selected work, what I do, how I work, about)
- `src/app/work/page.tsx` — full project listing
- `src/app/work/[slug]/page.tsx` — case study template, shared by every project
- `src/app/about/page.tsx`, `src/app/contact/page.tsx`
- `src/data/projects.ts` — **edit this file to add/update case studies.** Every
  project you add here automatically gets a page at `/work/<slug>` — you
  don't need to touch the template. Each project's `process` array mirrors
  the "How I work" steps on the homepage (Discover/Design/Test/Build/Ship).
- `src/components/Hero.tsx`, `src/components/Preloader.tsx` — the
  cursor-reactive dot grid and the K-formation loading animation
- `src/components/ContactForm.tsx` — posts to
  [Web3Forms](https://web3forms.com) (see below — needs a key to actually send)
- `src/app/globals.css` — theme tokens (`--accent`, `--accent-text`,
  `--ink`, etc.) — change these to reskin the whole site from one place

### Adding real photos

Drop files into `public/images/profile/` (as `photo.jpg`) and
`public/images/projects/` (as `<project-slug>.jpg`, matching the `slug` in
`projects.ts`) — see the README in each folder. They're picked up
automatically; no code changes needed. Until they're there, everything
shows the orange gradient placeholder.

## Still to do before this is finished

- **Real case study content** — `problem`/`process`/`solution`/`outcome` in
  `src/data/projects.ts` for every project except KSK Beveren, which itself
  still has placeholder `Outcome` text
- **Real photos** — see above
- **A Web3Forms access key** — get one free at
  [web3forms.com](https://web3forms.com) (just your email, no account) and
  paste it into `WEB3FORMS_ACCESS_KEY` in `src/components/ContactForm.tsx`.
  Until then the form shows "This form isn't connected yet" instead of
  sending — it doesn't silently fail.

## Deploying, once you're ready

Push this to a GitHub repo (already done — see `origin`), then import it on
[Vercel](https://vercel.com/new) — it detects Next.js automatically and
deploys on every push. Once it's live:

- Set the `NEXT_PUBLIC_SITE_URL` environment variable to your real URL (the
  sitemap, robots.txt, and Open Graph link-preview images all use it —
  they fall back to `localhost:3000` until it's set)
- Add a custom domain from the Vercel project settings, if/when you buy one
