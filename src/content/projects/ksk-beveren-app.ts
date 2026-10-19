import type { CaseStudy } from "./types";

const kskBeverenApp: CaseStudy = {
  slug: "ksk-beveren-app",
  title: "KSK Beveren Companion App",
  summary:
    "A fan app for KSK Beveren with live match data, news, the squad and a Man of the Match vote, powered by my own backend.",
  tags: ["Mobile", "React Native", "Product Design"],
  featured: true,
  cover: {
    label: "KSK Beveren",
    alt: "Two phones showing the KSK Beveren app: the home screen with upcoming matches and the login screen",
  },

  meta: {
    role: "UX/UI design & full-stack development (solo)",
    year: "2026",
    type: "School project, Expert Class Coding (AP Hogeschool)",
    team: "Solo",
    tools: [
      "Figma",
      "VS Code",
      "Claude (AI assistant)",
      "React Native / Expo",
      "Node.js / Express",
      "MongoDB (Mongoose)",
      "Render",
    ],
  },

  glance: {
    challenge:
      "Design and build a working mobile app with its own backend, from scratch. The brief was completely open.",
    solution:
      "A companion app for the supporters of my local club, KSK Beveren. Every screen pulls its data from my own API and database.",
    result: "A fully working app with a live backend. Graded 16/20.",
  },

  context: [
    "The Expert Class Coding brief was simple: build an app with a real backend. There was no client and no fixed topic, so I picked something I know well: KSK Beveren.",
    "The target audience is the club's supporters, who want match info, news and the squad together in one place.",
  ],

  process: {
    intro:
      "I started with desk research and a user flow, then went from low-fidelity wireframes to high-fidelity designs in Figma before building anything.",
    steps: [
      { file: "sketches.png", title: "Sketches", alt: "First paper sketches of the app screens" },
      { file: "userflow.png", title: "User flow", alt: "User flow of the KSK Beveren app" },
      { file: "lofi.png", title: "Low-fi wireframes", alt: "Low-fidelity wireframes of the main screens" },
      { file: "hifi.png", title: "High-fi designs", alt: "High-fidelity Figma designs of the app" },
    ],
  },

  finalDesign: {
    features: [
      {
        title: "Live match data",
        description:
          "Fixtures, results and standings, all loaded from the database through the API.",
        image: { file: "feature-1.png", alt: "Matches screen with fixtures, results and the league table" },
      },
      {
        title: "Man of the Match vote",
        description:
          "After a match, logged-in fans vote for the best player and see the live results. Each user can vote once per match, which is enforced in the database.",
        image: { file: "feature-2.png", alt: "Man of the Match voting screen with live results" },
      },
      {
        title: "News with comments",
        description: "Club news articles where logged-in fans can leave comments.",
        image: { file: "feature-3.png", alt: "News article screen with comments from fans" },
      },
      {
        title: "Squad & player profiles",
        description: "The full team, with a detail page per player.",
        image: { file: "feature-4.png", alt: "Squad overview and a player detail page" },
      },
    ],
    alsoIncluded: "Account registration & login, and a profile page.",
    screens: [
      { file: "screen-1.png", alt: "Login screen" },
      { file: "screen-2.png", alt: "Registration screen" },
      { file: "screen-3.png", alt: "Profile screen" },
    ],
  },

  styleGuide: {
    colors: [
      { name: "Blue", hex: "#2743B2", role: "Primary" },
      { name: "Yellow", hex: "#F3D02D", role: "Accent" },
      { name: "Text", hex: "#111111" },
      { name: "Surface", hex: "#F5F7FB" },
    ],
    typography: [
      { name: "Syne", usage: "Headings" },
      { name: "Inter", usage: "Body text" },
    ],
    components: ["Custom floating tab bar", "Match cards", "News cards", "Screen headers"],
    image: { file: "styleguide.png", alt: "KSK Beveren app style guide: colours, type and components" },
  },

  build: {
    stack: [
      {
        label: "Frontend",
        items: ["React Native", "Expo", "React Navigation"],
      },
      {
        label: "Backend",
        items: ["Node.js", "Express", "MongoDB", "Mongoose", "Render"],
      },
      {
        label: "Auth",
        items: ["bcrypt", "JWT"],
      },
    ],
    diagram: ["App (Expo)", "REST API (Express on Render)", "MongoDB"],
    notes: [
      "12 screens, with a floating bottom tab bar and stack navigation per tab: Home, Matches, News and Team.",
      "REST API with 7 resources: users, players, matches, news, comments, Man of the Match votes and standings.",
      "Passwords are hashed with bcrypt; logging in returns a JWT.",
      "Seed scripts fill the database with players, matches, news, standings, comments and votes.",
    ],
    links: [
      {
        label: "Frontend on GitHub",
        href: "https://github.com/karstenvanvooren/kskbeverenapp-frontend",
      },
      {
        label: "Backend on GitHub",
        href: "https://github.com/karstenvanvooren/kskbeverenapp-backend",
      },
    ],
  },

  reflection: {
    result:
      "16/20. The app looked good and worked fully, and almost everything on screen comes straight from the database.",
    proud:
      "It's a complete, working product, not just a prototype. Design and code are both mine.",
    learned:
      "How a backend really works, from models and routes to authentication and connecting a frontend to a live API.",
    nextTime:
      "Put the seed scripts in their own folder.",
  },
};

export default kskBeverenApp;
