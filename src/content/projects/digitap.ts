import type { CaseStudy } from "./types";

const PROTOTYPE = "https://www.figma.com/proto/MSSnaNK587w5JHC3VqNupT/expert-class-ux-ui";

const digitap: CaseStudy = {
  slug: "digitap",
  title: "Digitap Redesign",
  summary:
    "A mobile-first redesign of AP's learning platform Digitap, with clearer, task-based flows for students and teachers.",
  tags: ["UX/UI Design", "Mobile", "Redesign"],
  featured: true,
  cover: {
    label: "Digitap",
    alt: "Phone showing the redesigned Digitap course page with assignments",
  },

  meta: {
    role: "UX/UI design (solo)",
    year: "2025",
    type: "School project, Expert Class UX/UI (AP Hogeschool)",
    tools: ["Figma"],
    deliverable: "Interactive Figma prototype (3 flows)",
  },

  links: [
    { label: "View prototype – flow 1", href: `${PROTOTYPE}?node-id=518-1181` },
    { label: "View prototype – flow 2", href: `${PROTOTYPE}?node-id=518-1182` },
    { label: "View prototype – flow 3", href: `${PROTOTYPE}?node-id=518-1183` },
  ],

  glance: {
    challenge:
      "Digitap, AP's digital learning platform, holds course materials, assignments, grades and communication, but it asks a lot of its users. The brief was a use case for learning management platforms.",
    solution:
      "A mobile-first redesign that lowers the cognitive load and guides students and teachers through clear, task-based flows.",
    result:
      "A complete interactive prototype covering three flows: onboarding, the student side and the teacher side.",
  },

  context: [
    "Digitap is the platform where AP students and teachers come together: course materials, assignments, grades and communication all live there. In the Expert Class UX/UI I redesigned it mobile-first, with one goal: make every task obvious, so students spend their time on the course and not on finding their way around the platform.",
  ],

  beforeAfter: {
    before: { file: "before.png", alt: "The old Digitap interface" },
    after: { file: "after.png", alt: "The redesigned Digitap interface" },
    caption: "Old Digitap vs. redesign",
  },

  finalDesign: {
    features: [
      {
        title: "Step-by-step onboarding",
        description:
          "Signing up happens in four clear steps with a progress bar: basic info, email verification, role & permissions, and review & confirmation. Going back asks for confirmation so no progress is lost by accident.",
        image: { file: "feature-1.png", alt: "Onboarding step with a progress bar" },
      },
      {
        title: "Role-based access",
        description:
          "Students, teachers and admins each pick their role and see exactly which permissions come with it.",
        image: { file: "feature-2.png", alt: "Role selection screen showing permissions per role" },
      },
      {
        title: "A course page built around tasks",
        description:
          "Each course has tabs for content, documents, assignments with a clear submission status, and questionnaires & forums. Surveys show progress, have a question navigator and can be saved halfway.",
        image: { file: "feature-3.png", alt: "Course page with tabs and assignment submission status" },
      },
      {
        title: "Teacher settings in one place",
        description:
          "Teachers manage documents, assignments (late submissions, penalties, resubmissions, peer review), forums and archiving per course, each in its own focused panel.",
        image: { file: "feature-4.png", alt: "Teacher course settings panel" },
      },
    ],
    alsoIncluded: "My Account with profile, enrolled courses with progress, grade overview and settings.",
    screens: [
      { file: "screen-1.png", alt: "My Account screen" },
      { file: "screen-2.png", alt: "Enrolled courses with progress" },
      { file: "screen-3.png", alt: "Grade overview" },
    ],
  },

  styleGuide: {
    colors: [
      { name: "AP Red", hex: "#DE2F38", role: "Primary actions, active states" },
      { name: "Dark Red", hex: "#930108", role: "Accents, AP shapes" },
      { name: "Purple", hex: "#C72FDE", role: "Communication: forums & surveys" },
      { name: "Black", hex: "#000000", role: "Text" },
      { name: "Border Grey", hex: "#DADADA", role: "Inputs, dividers, disabled" },
      { name: "White", hex: "#FFFFFF", role: "Background" },
    ],
    typography: [
      { role: "Headings", spec: "Inter Black 32px", font: "inter", weight: 900, size: 32 },
      { role: "Labels", spec: "Inter Medium 16px", font: "inter", weight: 500, size: 16 },
      { role: "Body text", spec: "Inter Regular 16px", font: "inter", weight: 400, size: 16 },
      {
        role: "Placeholders",
        spec: "Inter Italic 16px, #DADADA",
        font: "inter",
        weight: 400,
        size: 16,
        italic: true,
        color: "#DADADA",
        sample: "Enter your email address",
      },
    ],
    componentPreview: true,
    description: [
      "AP's geometric shapes, quarter circles and squares in reds, appear only on the start and end screens. The rest stays clean so the content comes first.",
    ],
  },
};

export default digitap;
