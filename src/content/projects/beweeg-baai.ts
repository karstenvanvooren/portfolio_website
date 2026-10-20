import type { CaseStudy } from "./types";

const beweegBaai: CaseStudy = {
  slug: "beweeg-baai",
  title: "Beweeg Baai",
  summary:
    "An interactive browser installation where your hands play piano and violin, and every movement shapes a living wave on screen.",
  tags: ["Creative Coding", "Interaction", "Web"],
  cover: {
    label: "Beweeg Baai",
    file: "mockup.png",
    alt: "Beweeg Baai on two screens: the start screen and the piano and violin view",
  },

  meta: {
    role: "Concept, design & code (solo)",
    year: "2025",
    type: "School project, Creative Coding (AP Hogeschool)",
    tools: ["JavaScript", "MediaPipe Hands", "Tone.js", "HTML Canvas", "AI assistant for coding"],
  },

  links: [
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

  contextImage: {
    file: "start-screen.jpg",
    caption: "Start screen",
    alt: "Beweeg Baai start screen: \"Welkom bij BeweegBaai\" with a button to turn on the camera",
  },

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
        image: { file: "feature-1.jpg", alt: "Playing piano on the left side of the screen" },
      },
      {
        title: "Your hand is the pitch",
        description: "Raise or lower your hand to play higher or lower notes.",
        image: { file: "feature-2.jpg", alt: "A raised hand playing a higher note" },
      },
      {
        title: "A wave that responds",
        description:
          "Colour, rhythm and amplitude change with your movement, so you see what you hear.",
        image: { file: "feature-3.jpg", alt: "The wave changing colour and amplitude with movement" },
      },
    ],
  },

  styleGuide: {
    colors: [
      { name: "Night", hex: "#0B1020", role: "Background" },
      { name: "Deep Navy", hex: "#12183A" },
      { name: "Text", hex: "#E9EEF9" },
      { name: "Muted", hex: "#CFD8F6" },
      { name: "Cyan", hex: "#7BDFF2", role: "Accent, buttons" },
      { name: "Mint", hex: "#B2F7EF", role: "Highlight" },
    ],
    typography: [
      { role: "Titles", spec: "Poppins 600", font: "poppins", weight: 600, size: 32, sample: "Beweeg Baai" },
      {
        role: "Text",
        spec: "Poppins 400",
        font: "poppins",
        weight: 400,
        size: 16,
        sample: "Raise your hand to play higher notes.",
      },
    ],
    componentPreview: true,
    description: ["The wave itself changes hue with your movement."],
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
};

export default beweegBaai;
