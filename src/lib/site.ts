// Update this once the site has a real domain — it's used for the
// sitemap, robots.txt, and to resolve absolute URLs for Open Graph
// images and canonical links. Falls back to localhost so dev/build
// don't break before that's set.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";
