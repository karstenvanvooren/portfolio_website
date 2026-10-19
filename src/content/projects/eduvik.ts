import type { CaseStudy } from "./types";

const eduvik: CaseStudy = {
  slug: "eduvik",
  title: "Eduvik: Tutor App",
  summary:
    "A gamified mobile app for Eduvik's tutors to follow up their lessons and earnings, and level up through ranks to earn a certificate.",
  tags: ["UI Design", "Mobile", "Gamification"],
  cover: {
    label: "Eduvik",
    alt: "Eduvik tutor app mockup showing the dashboard",
  },

  meta: {
    role: "UX/UI design (solo)",
    year: "2024",
    type: "School project for Eduvik, a real tutoring platform (UX/UI Essentials, AP Hogeschool)",
    tools: ["Figma"],
    deliverable: "Figma prototype",
  },

  glance: {
    challenge:
      "Eduvik connects pupils from primary and secondary school, their parents and tutors. Tutors need a clear overview of their lessons and a reason to stay active on the platform.",
    solution:
      "A tutor app with a clear dashboard and a rank system (Bronze to Platinum) that rewards lessons, positive reviews and consistency.",
    result: "A clickable Figma prototype. The result was good.",
  },

  context: [
    "Eduvik is a tutoring platform that brings pupils, parents and tutors together. Pupils find a tutor, and tutors earn money by teaching. I designed the tutor side of the app.",
  ],

  callouts: [
    {
      label: "What I focused on",
      after: "context",
      items: [
        "Tutors want to see what's next at a glance, so the dashboard opens with the next lesson and a button to plan a new one.",
        "Earnings are a key motivator, so \"earned this month\" gets its own prominent card.",
        "Progress should feel rewarding, so goals are split into small, visible steps per rank.",
      ],
    },
  ],

  finalDesign: {
    features: [
      {
        title: "Dashboard",
        description:
          "\"Hey Sophie\" greets the tutor with the next lesson, a button to plan a new lesson, the current trajectory (subject, lessons completed, period, channel, level, price per hour, pupil) and earnings this month.",
        image: { file: "feature-1.png", alt: "Tutor dashboard with the next lesson and earnings this month" },
      },
      {
        title: "Your progress",
        description:
          "The current rank with a progress bar to the next rank, and the goals to get there: number of lessons, positive reviews and being a consistent tutor.",
        image: { file: "feature-2.png", alt: "Progress screen with rank progress bar and goals" },
      },
      {
        title: "Ranks & certificate",
        description:
          "All ranks from Bronze 1 to Platinum at a glance; from Gold 1, tutors can download a certificate.",
        image: { file: "feature-3.png", alt: "Overview of all ranks from Bronze to Platinum" },
      },
    ],
    alsoIncluded: "Bottom navigation with Chat, Trajectories, Home, Invoices and Settings.",
  },

  styleGuide: {
    description: [
      "Dark navy and turquoise, with hexagon shapes for the home button and rank badges.",
    ],
    image: { file: "styleguide.png", alt: "Eduvik tutor app style guide" },
  },

  reflection: {
    result: "The result was good.",
  },
};

export default eduvik;
