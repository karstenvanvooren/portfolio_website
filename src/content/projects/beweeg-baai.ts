import type { CaseStudy } from "./types";

// Placeholder text carried over from the previous version of the site.
// Replace it with the real case study; see ksk-beveren-app.ts for a
// filled-in example of most sections.
const beweegBaai: CaseStudy = {
  slug: "beweeg-baai",
  title: "Beweeg Baai",
  summary:
    "One-sentence summary of Beweeg Baai — swap in your real project description.",
  tags: ["UI Design", "Web"],
  cover: { label: "Beweeg Baai" },

  meta: {
    role: "UX/UI Designer",
    year: "2024",
    tools: ["Figma"],
  },

  glance: {
    challenge: "What problem was Beweeg Baai solving, and for whom?",
    solution: "What did you design? Walk through the key screens/flows.",
    result: "What was the result — grade, feedback, or real-world use?",
  },
};

export default beweegBaai;
