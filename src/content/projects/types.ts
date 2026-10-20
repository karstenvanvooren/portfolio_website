// Shape of one case study. Every section except the basics is optional:
// the page at /work/[slug] only renders a section when the project has
// content for it, so a project without user testing simply has no
// "Testing & iteration" section.
//
// Images live in public/images/projects/<slug>/. Refer to them by file
// name only (e.g. "sketches.png"). If a file isn't there yet, that image
// is simply left out (the text around it stays), and a row or strip with
// no images at all isn't shown.

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

/** Fonts available to type specimens; see src/lib/caseStudyFonts.ts. */
export type SpecimenFont = "inter" | "syne" | "montserrat" | "rubik" | "poppins" | "slab";

export type TypeStyle = {
  /** What it's used for, e.g. "Headings". */
  role: string;
  /** Human-readable spec, e.g. "Inter Black 32px". */
  spec: string;
  font: SpecimenFont;
  weight?: number;
  /** px. Large sizes are capped on small screens. */
  size?: number;
  italic?: boolean;
  color?: string;
  /** Sample text; defaults to the role. */
  sample?: string;
  /** Shown under the spec, e.g. that a substitute font is used. */
  note?: string;
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
      folder, or `file` if set; `label` is shown on the placeholder
      until it exists. */
  cover: { label: string; alt?: string; file?: string };

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
  /** Image under the context text. */
  contextImage?: CaseImage;

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
    /** Large device mockup(s) at the end of the section, side by side
        when there are two. Shown on the orange gradient. */
    showcase?: CaseImage[];
  };

  callouts?: Callout[];

  styleGuide?: {
    /** `background` overrides the swatch fill, e.g. for a gradient. */
    colors?: { name: string; hex: string; role?: string; background?: string }[];
    /** Type specimen: each row is rendered in the real font and size. */
    typography?: TypeStyle[];
    /** Component names as pills (used when there's no live preview). */
    components?: string[];
    /** Render this project's live HTML/CSS component preview, from
        src/components/case-study/StyleGuidePreviews.tsx. */
    componentPreview?: boolean;
    /** "Visual language" notes, one paragraph each. */
    description?: string[];
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
};
