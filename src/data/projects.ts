export type ProcessStep = {
  step: string;
  description: string;
  details: string;
};

export type Project = {
  slug: string;
  title: string;
  role: string;
  year: string;
  summary: string;
  tags: string[];
  cover: { label: string };
  problem: string;
  process: ProcessStep[];
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
// `process` mirrors the 5 steps from "How I work" on the homepage
// (Discover, Design, Test, Build, Ship) — filling these in per project
// is what makes that process concrete instead of just a general claim.
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
      {
        step: "Discover",
        description: "Figuring out what fans actually needed from a club app.",
        details:
          "Replace with the real discovery work: any conversations with fans or the club, competitor apps you looked at, and the core problem you decided to focus on.",
      },
      {
        step: "Design",
        description: "Wireframes, then a blue/gold design system built from scratch.",
        details:
          "Replace with specifics: the sitemap or user flows, early wireframes, and how the type/color system (Syne/Inter, blue/gold) came together before screens were finalized.",
      },
      {
        step: "Test",
        description: "Replace with how the design was validated before building.",
        details:
          "Replace with real detail: did you test with fans or friends, what feedback changed the design, or say honestly if this step was skipped this time.",
      },
      {
        step: "Build",
        description: "React Native frontend on an Express/MongoDB backend.",
        details:
          "Replace with real detail: how the frontend consumed the API, and any tricky technical parts — auth, live match data, the man-of-the-match vote, etc.",
      },
      {
        step: "Ship",
        description: "Replace with how and where this launched.",
        details:
          "Replace with real detail: is it in use by the club, how you rolled it out, and what early feedback looked like.",
      },
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
    process: [
      {
        step: "Discover",
        description: "Replace with what you learned before designing anything.",
        details: "Who was this for, and what problem were you actually solving?",
      },
      {
        step: "Design",
        description: "Replace with your design approach.",
        details: "Wireframes, visual design decisions, and how the system came together.",
      },
      {
        step: "Test",
        description: "Replace with how (or if) this was validated.",
        details: "Any feedback gathered, and what it changed about the design.",
      },
      {
        step: "Build",
        description: "Replace with how this was turned into a working prototype.",
        details: "Tools used and how far the prototype went — click-through vs. working app.",
      },
      {
        step: "Ship",
        description: "Replace with the result.",
        details: "Grade, feedback, or real-world use, if any.",
      },
    ],
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
    process: [
      {
        step: "Discover",
        description: "Replace with the awareness goal this game was built around.",
        details: "What did people misunderstand about food banks that the game addresses?",
      },
      {
        step: "Design",
        description: "Replace with the concept and UI design approach.",
        details: "How the game concept was chosen, and how the UI supports it.",
      },
      {
        step: "Test",
        description: "Replace with how the game was tested.",
        details: "Who played it, and what changed based on that.",
      },
      {
        step: "Build",
        description: "Replace with how the game was built.",
        details: "Tools/engine used and how far it was built out.",
      },
      {
        step: "Ship",
        description: "Replace with the result.",
        details: "Grade, feedback, or reach, if any.",
      },
    ],
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
    process: [
      {
        step: "Discover",
        description: "Replace with what you learned before designing anything.",
        details: "Who was this for, and what problem were you actually solving?",
      },
      {
        step: "Design",
        description: "Replace with your design approach.",
        details: "Wireframes, visual design decisions, and how the system came together.",
      },
      {
        step: "Test",
        description: "Replace with how (or if) this was validated.",
        details: "Any feedback gathered, and what it changed about the design.",
      },
      {
        step: "Build",
        description: "Replace with how this was turned into a working prototype.",
        details: "Tools used and how far the prototype went — click-through vs. working app.",
      },
      {
        step: "Ship",
        description: "Replace with the result.",
        details: "Grade, feedback, or real-world use, if any.",
      },
    ],
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
    process: [
      {
        step: "Discover",
        description: "Replace with what you learned before designing anything.",
        details: "Who was this for, and what problem were you actually solving?",
      },
      {
        step: "Design",
        description: "Replace with your design approach.",
        details: "Wireframes, visual design decisions, and how the system came together.",
      },
      {
        step: "Test",
        description: "Replace with how (or if) this was validated.",
        details: "Any feedback gathered, and what it changed about the design.",
      },
      {
        step: "Build",
        description: "Replace with how this was turned into a working prototype.",
        details: "Tools used and how far the prototype went — click-through vs. working app.",
      },
      {
        step: "Ship",
        description: "Replace with the result.",
        details: "Grade, feedback, or real-world use, if any.",
      },
    ],
    solution: "What did you design? Walk through the key screens/flows.",
    outcome: "What was the result — grade, feedback, or real-world use?",
    tools: ["Figma"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
