import Reveal from "@/components/Reveal";

const skills = [
  "UI Design",
  "UX Research",
  "Figma",
  "Design Systems",
  "React / Next.js",
  "React Native",
  "Node.js / Express",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-muted">About</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {/* Replace with your real bio — 2-3 short paragraphs works best */}
          I&apos;m a graphic design student focusing on UX/UI.
        </h1>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-8 space-y-5 leading-relaxed text-muted">
          <p>
            I design and build digital products — most recently a mobile
            companion app for a local football club, covering everything from
            the interface design and design system to the React Native
            frontend and Express/MongoDB backend behind it.
          </p>
          <p>
            I&apos;m currently studying graphic design with a focus on UX/UI,
            and I&apos;m planning to take on freelance work after I graduate.
            I like projects where I can own the process end to end — from
            research and wireframes through to a shipped, working product.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.16} className="mt-12">
        <h2 className="font-display text-xl font-semibold tracking-tight">
          What I work with
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border px-3 py-1.5 text-sm text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.24} className="mt-12">
        <h2 className="font-display text-xl font-semibold tracking-tight">Resume</h2>
        <p className="mt-3 text-muted">
          {/* Drop a resume.pdf into /public and link it here */}
          <a href="/resume.pdf" className="text-accent hover:underline">
            Download my resume (PDF) →
          </a>
        </p>
      </Reveal>
    </div>
  );
}
