import type { CaseStudy } from "./types";

// Placeholder text carried over from the previous version of the site.
// Replace it with the real case study; see ksk-beveren-app.ts for a
// filled-in example of most sections.
const eduvik: CaseStudy = {
  slug: "eduvik",
  title: "Eduvik",
  summary:
    "One-sentence summary of Eduvik — swap in your real project description.",
  tags: ["UI Design", "Mobile"],
  cover: { label: "Eduvik" },

  meta: {
    role: "UX/UI Designer",
    year: "2024",
    tools: ["Figma"],
  },

  glance: {
    challenge: "What problem was Eduvik solving, and for whom?",
    solution: "What did you design? Walk through the key screens/flows.",
    result: "What was the result — grade, feedback, or real-world use?",
  },
};

export default eduvik;
