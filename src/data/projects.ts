export type Project = {
  slug: string;
  title: string;
  role: string;
  year: string;
  summary: string;
  tags: string[];
  cover: { label: string };
  problem: string;
  process: string[];
  solution: string;
  outcome: string;
  tools: string[];
  featured?: boolean;
};

// Edit this file to add, remove, or update projects.
// Each project renders at /work/[slug] using the template in
// src/app/work/[slug]/page.tsx — you don't need to touch that file
// to add a new case study, just add an entry here.
//
// The four placeholders below (Eduvik, Voedselbank Game, Digitap, Beweeg
// Baai) are named after the projects in your PDF portfolio — fill in the
// real problem/process/solution/outcome text and swap the cover placeholder
// for real screenshots when you have them.
export const projects: Project[] = [
  {
    slug: "ksk-beveren-app",
    title: "KSK Beveren Companion App",
    role: "Designer & Developer",
    year: "2025",
    summary:
      "A mobile companion app for a Belgian football club — match results, standings, news, and squad info in one place for fans.",
    tags: ["Mobile", "React Native", "Product Design"],
    cover: { label: "KSK Beveren" },
    problem:
      "Replace with the real problem statement: who was this for, what were they doing before this app existed (following results on scattered Facebook posts and a slow club site?), and what specifically wasn't working for them.",
    process: [
      "Replace with your actual process: research/interviews if any, sitemap or user flows, wireframes, and how the design system (color, type, spacing) came together before you started building screens.",
      "If you have early sketches, Figma frames, or rejected directions, this is the section to show them — process is what makes a case study convincing, not just the final screens.",
    ],
    solution:
      "Describe the final product: auth, live match schedule and results, league standings, club news, full squad with player detail pages, and a man-of-the-match vote. Mention the design system specifically — a blue/gold brand palette and a Syne/Inter type pairing — since defining that from scratch is worth calling out.",
    outcome:
      "Replace with real outcome info: is it in use by the club, how many users, feedback you got, or if it's not shipped yet, say what you'd test or validate next. It's fine to be honest that this was a self-directed / learning project.",
    tools: ["Figma", "React Native", "Expo", "Express", "MongoDB"],
    featured: true,
  },
  {
    slug: "eduvik",
    title: "Eduvik",
    role: "UX/UI Designer",
    year: "2024",
    summary: "One-sentence summary of Eduvik — swap in your real project description.",
    tags: ["UI Design", "Mobile"],
    cover: { label: "Eduvik" },
    problem: "What problem was Eduvik solving, and for whom?",
    process: ["Research", "Wireframes", "Visual design", "Prototype"],
    solution: "What did you design? Walk through the key screens/flows.",
    outcome: "What was the result — grade, feedback, or real-world use?",
    tools: ["Figma"],
  },
  {
    slug: "voedselbank-game",
    title: "Voedselbank Game",
    role: "UX/UI Designer",
    year: "2024",
    summary:
      "One-sentence summary of the Voedselbank (food bank) game — swap in your real project description.",
    tags: ["UI Design", "Game", "Social Impact"],
    cover: { label: "Voedselbank Game" },
    problem: "What problem or awareness goal was this game designed around?",
    process: ["Research", "Concept", "UI design", "Testing"],
    solution: "What did you design, and how does the game work?",
    outcome: "What was the result — grade, feedback, or reach?",
    tools: ["Figma"],
  },
  {
    slug: "digitap",
    title: "Digitap",
    role: "UX/UI Designer",
    year: "2024",
    summary: "One-sentence summary of Digitap — swap in your real project description.",
    tags: ["UI Design", "Mobile"],
    cover: { label: "Digitap" },
    problem: "What problem was Digitap solving, and for whom?",
    process: ["Research", "Wireframes", "Visual design", "Prototype"],
    solution: "What did you design? Walk through the key screens/flows.",
    outcome: "What was the result — grade, feedback, or real-world use?",
    tools: ["Figma"],
  },
  {
    slug: "beweeg-baai",
    title: "Beweeg Baai",
    role: "UX/UI Designer",
    year: "2024",
    summary: "One-sentence summary of Beweeg Baai — swap in your real project description.",
    tags: ["UI Design", "Web"],
    cover: { label: "Beweeg Baai" },
    problem: "What problem was Beweeg Baai solving, and for whom?",
    process: ["Research", "Wireframes", "Visual design", "Prototype"],
    solution: "What did you design? Walk through the key screens/flows.",
    outcome: "What was the result — grade, feedback, or real-world use?",
    tools: ["Figma"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
