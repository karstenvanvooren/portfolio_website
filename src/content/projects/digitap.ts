import type { CaseStudy } from "./types";

// Placeholder text carried over from the previous version of the site.
// Replace it with the real case study; see ksk-beveren-app.ts for a
// filled-in example of most sections.
const digitap: CaseStudy = {
  slug: "digitap",
  title: "Digitap",
  summary:
    "One-sentence summary of Digitap — swap in your real project description.",
  tags: ["UI Design", "Mobile"],
  featured: true,
  cover: { label: "Digitap" },

  meta: {
    role: "UX/UI Designer",
    year: "2024",
    tools: ["Figma"],
  },

  glance: {
    challenge: "What problem was Digitap solving, and for whom?",
    solution: "What did you design? Walk through the key screens/flows.",
    result: "What was the result — grade, feedback, or real-world use?",
  },
};

export default digitap;
