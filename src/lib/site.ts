// The site's public URL — the one place to change when the domain changes.
// Used for metadataBase (so Open Graph / Twitter image URLs are absolute),
// the sitemap, and robots.txt. NEXT_PUBLIC_SITE_URL overrides it, e.g. in
// Netlify's environment variables, without a code change.
const DEFAULT_SITE_URL = "https://vanvoorenkarstenporftolio.netlify.app";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, "");

// Shared copy, so the hero, About and Contact pages say the same thing.
export const INTERNSHIP_LINE = "Looking for a UX/UI internship · Semester 2, 2026–27";
export const CV_PATH = "/cv/Karsten_van_Vooren_CV.pdf";
