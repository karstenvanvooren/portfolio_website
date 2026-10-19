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

export type CaseLink = { label: string; href: string };

/** A short titled list of bullets, e.g. "What I focused on". */
export type Callout = {
  label: string;
  items: string[];
  /** Which section it appears after. */
  after: "context" | "finalDesign";
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
    deliverable?: string;
  };

  /** Buttons under the meta row: prototypes, demo video, code. */
  links?: CaseLink[];

  /** Three cards right under the cover. */
  glance?: { challenge?: string; solution?: string; result?: string };

  /** Who it's for and what the brief was. One string per paragraph. */
  context?: string[];

  research?: {
    intro?: string;
    methods?: { title: string; description?: string }[];
    /** Shown as cards. */
    insights?: string[];
    image?: CaseImage;
  };

  process?: {
    intro?: string;
    /** Numbered steps (a timeline). */
    steps?: { title: string; description?: string }[];
    /** Image strip: e.g. sketches → user flow → low-fi → high-fi. */
    images?: CaseImage[];
  };

  /** Old vs. new, side by side. */
  beforeAfter?: { before: CaseImage; after: CaseImage; caption?: string };

  finalDesign?: {
    /** Vimeo video ID, embedded above the features. */
    vimeoId?: string;
    /** 2–4 key features, shown alternating left/right with a screen. */
    features: { title: string; description: string; image: CaseImage }[];
    /** One line for smaller features that don't get their own row. */
    alsoIncluded?: string;
    /** Strip with the remaining screens. */
    screens?: CaseImage[];
  };

  callouts?: Callout[];

  styleGuide?: {
    colors?: { name: string; hex: string; role?: string }[];
    /** Free text, for colours or a visual language without exact values. */
    description?: string[];
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
    links?: CaseLink[];
  };

  reflection?: {
    result?: string;
    proud?: string;
    learned?: string;
    nextTime?: string;
  };
};
