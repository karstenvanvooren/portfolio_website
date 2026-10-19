// Shape of one case study. Every section except the basics is optional:
// the page at /work/[slug] only renders a section when the project has
// content for it, so a project without user testing simply has no
// "Testing & iteration" section.
//
// Images live in public/images/projects/<slug>/. Refer to them by file
// name only (e.g. "sketches.png"). If a file isn't there yet, the page
// shows a grey placeholder box with the expected file name instead.

export type CaseImage = {
  file: string;
  alt: string;
  caption?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  /** One line, shown under the title and on the project card. */
  summary: string;
  /** Shown as pills on the project card. */
  tags: string[];
  /** Shown on the homepage "Selected work" teaser. */
  featured?: boolean;
  /** Cover mockup is cover.png (or .jpg/.webp) in the project's image
      folder; `label` is shown on the placeholder until it exists. */
  cover: { label: string; alt?: string };

  meta: {
    role?: string;
    year?: string;
    duration?: string;
    team?: string;
    tools?: string[];
    type?: string;
  };

  /** Three cards right under the cover. */
  glance?: { challenge?: string; solution?: string; result?: string };

  /** Who it's for and what the brief was. One string per paragraph. */
  context?: string[];

  research?: { intro?: string; methods?: string[]; insights?: string[] };

  /** Image strip: sketches → user flow → low-fi → high-fi. */
  process?: { intro?: string; steps: (CaseImage & { title: string })[] };

  finalDesign?: {
    /** 2–4 key features, shown alternating left/right with a screen. */
    features: { title: string; description: string; image: CaseImage }[];
    /** One line for smaller features that don't get their own row. */
    alsoIncluded?: string;
    /** Strip with the remaining screens. */
    screens?: CaseImage[];
  };

  styleGuide?: {
    colors?: { name: string; hex: string; role?: string }[];
    typography?: { name: string; usage: string }[];
    components?: string[];
    image?: CaseImage;
  };

  testing?: { paragraphs: string[]; changes?: string[] };

  build?: {
    intro?: string;
    stack?: { label: string; items: string[] }[];
    /** Boxes joined by arrows, left to right. */
    diagram?: string[];
    notes?: string[];
    links?: { label: string; href: string }[];
  };

  reflection?: {
    result?: string;
    proud?: string;
    learned?: string;
    nextTime?: string;
  };
};
