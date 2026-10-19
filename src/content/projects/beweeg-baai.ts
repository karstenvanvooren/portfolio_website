import type { CaseStudy } from "./types";

const beweegBaai: CaseStudy = {
  slug: "beweeg-baai",
  title: "Beweeg Baai",
  summary:
    "An interactive browser installation where your hands play piano and violin, and every movement shapes a living wave on screen.",
  tags: ["Creative Coding", "Interaction", "Web"],
  cover: {
    label: "Beweeg Baai",
    alt: "Beweeg Baai mockup",
  },

  meta: {
    role: "Concept, design & code (solo)",
    year: "2025",
    type: "School project, Creative Coding (AP Hogeschool)",
    tools: ["JavaScript", "MediaPipe Hands", "Tone.js", "HTML Canvas", "AI assistant for coding"],
  },

  links: [
    { label: "Watch the demo", href: "https://vimeo.com/1113396718" },
    { label: "Code on GitHub", href: "https://github.com/karstenvanvooren/AdemBaai" },
  ],

  glance: {
    challenge:
      "Make an interactive installation that turns body movement into sound and visuals. The assignment involved music students from the conservatory, which is where piano and violin come from.",
    solution:
      "The webcam tracks your hands. The left side of the screen plays piano, the right side plays violin, and the height of your hand sets the pitch. Your movement drives the colour, rhythm and amplitude of a wave.",
    result: "A working installation that runs in the browser.",
  },

  context: [
    "This is an experiment in hand tracking and sound rather than a product for a specific audience.",
    "The project started as \"AdemBaai\", driven by breathing. Without a microphone good enough to pick up breathing reliably, I switched to hand tracking, which turned out to be more direct and more fun to play with.",
  ],

  process: {
    intro:
      "I worked by experimenting directly in code: try, fail, adjust. It was my first project with hand tracking.",
    steps: [
      { title: "Breathing idea", description: "The first concept: an installation driven by your breath." },
      {
        title: "Microphone problem",
        description: "No microphone picked up breathing reliably enough to play with.",
      },
      {
        title: "Switch to hand tracking",
        description: "Hands turned out to be more direct, and more fun to play with.",
      },
      {
        title: "Tuning the instruments and the wave",
        description: "Adjusting samples, pitch and the wave until playing felt natural.",
      },
    ],
  },

  finalDesign: {
    vimeoId: "1113396718",
    features: [
      {
        title: "Two instruments, one screen",
        description: "Left is piano, right is violin, using real piano and violin samples.",
        image: { file: "feature-1.png", alt: "Playing piano on the left side of the screen" },
      },
      {
        title: "Your hand is the pitch",
        description: "Raise or lower your hand to play higher or lower notes.",
        image: { file: "feature-2.png", alt: "A raised hand playing a higher note" },
      },
      {
        title: "A wave that responds",
        description:
          "Colour, rhythm and amplitude change with your movement, so you see what you hear.",
        image: { file: "feature-3.png", alt: "The wave changing colour and amplitude with movement" },
      },
    ],
  },

  build: {
    stack: [{ label: "Stack", items: ["JavaScript", "MediaPipe Hands", "Tone.js", "HTML Canvas"] }],
    notes: [
      "MediaPipe Hands for real-time hand tracking via the webcam.",
      "Tone.js for sound, with my own piano and violin samples.",
      "HTML Canvas for the wave visual.",
      "Built with the help of an AI assistant; concept, interaction and tuning are my own.",
    ],
  },

  reflection: {
    proud: "It's a fun, creative piece that works.",
    learned: "My first time working with hand tracking.",
  },
};

export default beweegBaai;
