import type { CaseStudy } from "./types";

const voedselbankGame: CaseStudy = {
  slug: "voedselbank-game",
  title: "Voedselbank Game",
  summary:
    "A location-based mobile game about food banks for young people in Antwerp: real places in the city unlock mini-games about food waste.",
  tags: ["Game Design", "Mobile", "Social Impact"],
  cover: {
    label: "Voedselbank Game",
    alt: "Two phones showing the Voedselbank game: the city map and the Sleep Finn mini-game",
  },

  meta: {
    role: "UX/UI design",
    team: "Team of 4",
    year: "2024",
    duration: "About 12 weeks (late September to mid-December), in weekly sprints",
    type: "School project (AP Hogeschool)",
    tools: ["Figma", "Code"],
    deliverable: "A coded mobile game with a map; mini-games start when you arrive at a location",
  },

  glance: {
    challenge:
      "Develop a location-based game in a team of four, around the theme \"food bank\". The target group was ours to choose.",
    solution:
      "A mobile game for young people (16–23) that takes them to real places in Antwerp, where mini-games teach them about food waste and food banks.",
    result:
      "A working game: the map and location triggers work, and the mini-games start on arrival.",
  },

  context: [
    "Young people are the biggest users of mobile games, they are often socially aware, and they respond well to gamification and interactive, educational content. That made them our target group: 16 to 23 years old.",
    "The game's goal is awareness and education about food waste and poverty.",
  ],

  research: {
    methods: [
      {
        title: "Desk research",
        description:
          "What a food bank does and the numbers behind it, trends in mobile games, business models, game genres, and location-based examples such as Pokémon GO, Ingress and Zombies, Run!",
      },
      {
        title: "Target group",
        description: "Research into young people and gaming, a persona and an empathy map.",
      },
      {
        title: "Field research",
        description:
          "We visited the food bank and interviewed staff, interviewed young people from our target group, and visited and photographed possible locations in Antwerp.",
      },
    ],
    insights: [
      "Young people sometimes feel guilty when they throw food away.",
      "They feel proud when they can contribute or help.",
      "They already take part in collection drives at school or in their neighbourhood, and they spend a lot of time on social media.",
    ],
    image: { file: "research.png", alt: "Persona and empathy map of the target group" },
  },

  process: {
    intro: "We worked in weekly sprints with scrum meetings.",
    steps: [
      { title: "Debriefing and mind map" },
      { title: "Desk research, persona and empathy map" },
      { title: "Concept and storyline" },
      { title: "Field research and pitch" },
      { title: "Feedback from the lecturers, concept reworked" },
      { title: "Sketches, mid-fi wireframes and user flow" },
      { title: "Design guide, hi-fi screens and mini-games" },
      { title: "Code: map and location-triggered games" },
    ],
    images: [
      { file: "sketches.png", caption: "Sketches", alt: "Sketches of the game screens" },
      { file: "lofi.png", caption: "Mid-fi wireframes", alt: "Mid-fidelity wireframes" },
      { file: "userflow.png", caption: "User flow", alt: "User flow of the game" },
    ],
  },

  finalDesign: {
    features: [
      {
        title: "City map with real locations",
        description:
          "Places such as Antwerp Central Station, the Grote Markt, Het Steen, the MAS and the Groenplaats become stops in the game.",
        image: { file: "feature-1.png", alt: "Game map of Antwerp with locations as stops" },
      },
      {
        title: "Mini-games on location",
        description:
          "When you arrive at a stop, a mini-game starts. In \"Sleep Finn\" you sort good food from spoiled food against the clock while a progress bar fills up.",
        image: { file: "feature-2.png", alt: "The Sleep Finn mini-game with food icons and a timer" },
      },
      {
        title: "One consistent game world",
        description:
          "A design guide defined colours, buttons and text once, so every screen and mini-game feels like the same game and stays readable for a broad audience.",
        image: { file: "feature-3.png", alt: "Design guide with colours, buttons and text styles" },
      },
    ],
    showcase: [
      { file: "mockup.png", alt: "Voedselbank game mockup on two phones" },
    ],
  },

  callouts: [
    {
      label: "Why it works",
      after: "finalDesign",
      items: [
        "Real places in the city make the theme tangible: you play where it matters.",
        "Short mini-games fit how young people play on mobile: quick sessions with instant feedback.",
        "A friendly illustrated character (Finn) and clear food icons keep a heavy topic approachable.",
      ],
    },
  ],

  styleGuide: {
    colors: [
      { name: "Success Green", hex: "#5AD12D", role: "Progress, correct answers" },
      { name: "Error Red", hex: "#FF0000", role: "Wrong answers" },
      {
        name: "Light Grey",
        hex: "#E8E9E9 → #C8C8C8",
        role: "Game panel gradient",
        background: "linear-gradient(180deg, #E8E9E9, #C8C8C8)",
      },
      { name: "Track Grey", hex: "#D9D9D9", role: "Empty progress bar" },
      { name: "White", hex: "#FFFFFF", role: "Tiles, text on photos" },
    ],
    typography: [
      {
        role: "Titles",
        spec: "Rubik Bold 36px",
        font: "rubik",
        weight: 700,
        size: 36,
        sample: "SLEEP FINN",
      },
      {
        role: "Labels",
        spec: "Rubik Regular 30px",
        font: "rubik",
        weight: 400,
        size: 30,
        sample: "Vooruitgang",
      },
      {
        role: "Timer",
        spec: "Egyptian Slate Pro Bold",
        font: "slab",
        weight: 700,
        size: 32,
        sample: "TIJD 9:50",
        note: "Display font. Shown here in a similar slab serif, as Egyptian Slate Pro isn't available as a web font.",
      },
    ],
    componentPreview: true,
    description: [
      "A blurred photo of the real location in the background, with a friendly illustrated character (Finn) on top.",
    ],
  },

  testing: {
    paragraphs: [
      "After our pitch, the lecturers gave feedback on the concept. We reworked it before starting the sketches and wireframes.",
    ],
  },
};

export default voedselbankGame;
