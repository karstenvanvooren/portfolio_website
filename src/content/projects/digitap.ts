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
    result: "A complete interactive prototype with three flows. Graded 14/20.",
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
      { name: "AP Red", hex: "#DE2F38", role: "Primary" },
      { name: "Dark Red", hex: "#930108" },
      { name: "Purple", hex: "#C72FDE", role: "Communication features" },
    ],
    description: [
      "White and light greys keep the interface calm.",
      "AP's geometric shapes appear on the start and end screens; the rest of the UI stays clean so content comes first.",
    ],
    image: { file: "styleguide.png", alt: "Digitap redesign style guide" },
  },

  reflection: {
    result: "14/20.",
    proud: "A clean, clear interface across a large platform with three different user roles.",
    nextTime: "Test the flows with real students before finalising the design.",
  },
};

export default digitap;
