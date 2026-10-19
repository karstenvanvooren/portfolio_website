import type { CaseStudy } from "./types";

// Placeholder text carried over from the previous version of the site.
// Replace it with the real case study; see ksk-beveren-app.ts for a
// filled-in example of most sections.
const voedselbankGame: CaseStudy = {
  slug: "voedselbank-game",
  title: "Voedselbank Game",
  summary:
    "One-sentence summary of the Voedselbank (food bank) game — swap in your real project description.",
  tags: ["UI Design", "Game", "Social Impact"],
  cover: { label: "Voedselbank Game" },

  meta: {
    role: "UX/UI Designer",
    year: "2024",
    tools: ["Figma"],
  },

  glance: {
    challenge: "What problem or awareness goal was this game designed around?",
    solution: "What did you design, and how does the game work?",
    result: "What was the result — grade, feedback, or reach?",
  },
};

export default voedselbankGame;
