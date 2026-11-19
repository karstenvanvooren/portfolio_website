import type { CaseStudy } from "./types";

const insideOut: CaseStudy = {
  slug: "inside-out",
  title: "Inside Out",
  summary:
    "A mystery game that turns Antwerp into a book: solve riddles, walk to real places and collect torn-out pages of a Louise Bourgeois artwork, all the way to the KMSKA.",
  tags: ["Game", "Web App", "UX/UI Design"],
  cover: {
    label: "Inside Out",
    file: "mockup.png",
    alt: "Three phones showing the Inside Out game: the riddle chat, a new piece found and the revealed artwork",
  },

  meta: {
    role: "Target audience research, user flows, hi-fi design, poster and building the web app",
    year: "2026",
    type: "School project, team assignment (AP Hogeschool)",
    team: "Team 3",
    tools: ["Figma", "React", "Vite", "Leaflet", "MapLibre", "BRouter", "Cloudflare Workers"],
    deliverable: "A working mobile web app with QR codes, live GPS and walking routes through Antwerp",
  },

  links: [
    {
      label: "Code on GitHub",
      href: "https://github.com/karstenvanvooren/InsideOut_team3",
    },
  ],

  glance: {
    challenge:
      "After a visit to the KMSKA and FOMU, every team member researched one artwork. As a team, we had to turn one of them into an experience in the city, with a web app that uses Leaflet for the map and BRouter for the routes.",
    solution:
      "Inside Out: \"The city is a book. Someone tore out the last page.\" Players solve riddles, walk to six places in Antwerp and unlock pages of Louise Bourgeois' Ode à l'oubli, which they finally put back together at the KMSKA.",
    result:
      "A fully working game: from the start QR code at the Stadsfeestzaal to the finale in the museum, with live GPS, walking routes, 12 challenges and 12 hidden hooks.",
  },

  context: [
    "We visited the KMSKA and FOMU as a team, and each of us picked one artwork to research. I chose Louise Bourgeois' Ode à l'oubli (Ode to forgetting): a book without paper, sewn from cloth she kept for most of her life.",
    "The team picked my artwork as the concept for the game. A book of torn memories fits a hunt through the city well: the pieces are scattered over Antwerp, and the player puts the page back together.",
    "My own research part in the team was the target audience.",
  ],

  process: {
    intro:
      "From concept to working app, I made the user flows and the hi-fi designs, worked on the poster and built the web app myself.",
    steps: [
      {
        title: "Museum visit and artwork research",
        description: "Each team member researched one artwork from the KMSKA or FOMU. I took Ode à l'oubli by Louise Bourgeois.",
      },
      {
        title: "Concept choice",
        description: "The team chose my artwork as the concept, after a green light from our mentor.",
      },
      {
        title: "Route and fragments",
        description:
          "I started the explore phase: the route through the city and how the fragments are divided over the locations.",
      },
      {
        title: "User flows and hi-fi designs",
        description: "A dark style for the locked start screen, a light style for everything in the game.",
      },
      {
        title: "Feedback: \"Google Maps vibes\"",
        description:
          "Our lecturer found the app well structured, but too simple. He wanted it to feel more Gen Z, with fun animations.",
      },
      {
        title: "Hi-fi v3",
        description:
          "Our own colours, combined with collage elements taken from the artwork. Approved by the lecturer.",
      },
      {
        title: "Building the web app",
        description: "React and Vite, Leaflet for the map and BRouter for walking routes, deployed on Cloudflare.",
      },
    ],
    images: [
      { file: "userflow.png", caption: "User flow", alt: "User flow of the Inside Out game" },
      { file: "hifi.png", caption: "Hi-fi designs", alt: "Hi-fi designs of the Inside Out screens in Figma" },
      { file: "poster.png", caption: "Poster", alt: "Poster for the Inside Out game" },
    ],
  },

  beforeAfter: {
    before: { file: "before.png", alt: "Earlier version of the game screens, close to a regular map app" },
    after: { file: "after.png", alt: "Hi-fi v3 of the game screens, with collage details from the artwork" },
    caption: "From \"Google Maps vibes\" to hi-fi v3: our colours, plus tape, stitches, stickers and handwriting from the artwork.",
  },

  finalDesign: {
    features: [
      {
        title: "Riddles as a chat",
        description:
          "A mysterious narrator, Sfumato, sends you a riddle that names the next place. Every wrong answer gives a hint, and after three tries the answer is shown. Small typos are forgiven.",
        image: { file: "feature-1.png", alt: "Riddle chat with Sfumato asking for the next location" },
      },
      {
        title: "Walk there, then take on the challenge",
        description:
          "Once solved, a 3D map shows the walking route with turn-by-turn directions. Arriving is detected by GPS, so there's no QR code at the locations. Every location has two challenges, from a memory game at Plantin-Moretus to counting the heads on the Bourla.",
        image: { file: "feature-2.png", alt: "Arrived pop-up at the Bourla with the challenge to count the heads on the building" },
      },
      {
        title: "Every challenge gives a page",
        description:
          "A new piece arrives with a FOUND stamp on deep burgundy. Some pieces are real, some are fake: \"real or fake? you'll know at the museum.\"",
        image: { file: "feature-3.png", alt: "New piece found: fragment 3 of 12 with a FOUND stamp" },
      },
      {
        title: "The last page, revealed at the KMSKA",
        description:
          "In the museum the real pieces fly into place and Ode à l'oubli is revealed, together with Louise Bourgeois' story. Then the player sews their own page and can share it as a story picture: \"ode à toi\".",
        image: { file: "feature-4.png", alt: "Finale: the full artwork Ode à l'oubli with photos of Louise Bourgeois" },
      },
    ],
    alsoIncluded:
      "12 hooks to collect: small QR codes hidden in the street, each a page from Louise Bourgeois' diary. Plus a collection with every fragment and hook you found, and a pick-the-real-fragments challenge at the end.",
    screens: [
      { file: "screen-1.png", alt: "Locked start screen: someone left you a message, the scan unlocks at the Stadsfeestzaal" },
      { file: "screen-2.png", alt: "Story card in the finale: who Louise Bourgeois is" },
      { file: "screen-3.png", alt: "Collection with the pieces and diary pages you found" },
    ],
    showcase: [{ file: "mockup.png", alt: "Inside Out game on phones" }],
  },

  callouts: [
    {
      label: "Colours that follow the story",
      after: "finalDesign",
      items: [
        "The game starts dark and mysterious: the locked start screen is navy with cream text.",
        "While you play, the app (and the map) slowly takes on the colours of the artwork: olive halfway, then cream, blue, rose and sage at the end.",
        "By the finale, the app looks like the page you just put back together.",
      ],
    },
  ],

  styleGuide: {
    colors: [
      { name: "Navy", hex: "#1C2430", role: "Text, locked start screen" },
      { name: "Burgundy", hex: "#4B1E23", role: "Buttons, big moments" },
      { name: "Olive", hex: "#6B6F4E", role: "Middle of the game" },
      { name: "Cream", hex: "#E6E0D6", role: "Paper, text on dark" },
      { name: "Rose", hex: "#C29095", role: "Artwork colours (end)" },
      { name: "Blue", hex: "#647C9F", role: "Artwork colours (end)" },
      { name: "Sage", hex: "#929677", role: "Artwork colours (end)" },
    ],
    typography: [
      {
        role: "Titles",
        spec: "Pra Bono",
        font: "syne",
        weight: 700,
        size: 36,
        sample: "Inside Out",
        note: "A brush font, also used on the poster. Shown here in Syne Bold, as Pra Bono isn't available as a web font.",
      },
      { role: "Body text", spec: "Inter", font: "inter", weight: 400, size: 16, sample: "The city is a book." },
    ],
    description: [
      "Collage details taken from Ode à l'oubli: thin navy lines with a small hard shadow, tape, stitches, small tilted stickers and handwriting.",
    ],
  },

  build: {
    stack: [
      { label: "App", items: ["React", "Vite", "JavaScript", "CSS"] },
      { label: "Map & routes", items: ["Leaflet", "MapLibre", "OpenFreeMap", "BRouter"] },
      { label: "Hosting", items: ["Cloudflare Workers"] },
    ],
    diagram: ["QR code / GPS", "Game state (in the browser)", "Map + routes (Leaflet, BRouter)"],
    notes: [
      "No backend and no login: the game state lives in the browser, so a reload never resets a player.",
      "A strict phase system (locked → riddle → walking → at the location → fragment) only allows valid steps.",
      "All story content (places, riddles, challenges, fragments, hooks) is in one JSON file, so the team could write it without coding.",
      "A hidden dev panel fakes your location and walks the route, so the whole game can be tested without walking through Antwerp.",
      "Cloudflare builds and deploys the app after every push to GitHub.",
    ],
    links: [
      {
        label: "Code on GitHub",
        href: "https://github.com/karstenvanvooren/InsideOut_team3",
      },
    ],
  },
};

export default insideOut;
