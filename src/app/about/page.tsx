import Reveal from "@/components/Reveal";
import SplitSection from "@/components/SplitSection";

const skillGroups = [
  {
    label: "Design",
    skills: ["UI Design", "UX Research", "Design Systems", "Figma", "Illustrator"],
  },
  {
    label: "Development",
    skills: ["Frontend Development", "Backend Development", "React / Next.js", "Node.js, MongoDB"],
  },
];

const values = [
  {
    title: "Clarity first",
    description:
      "A good interface shouldn't make someone stop and think about how to use it.",
  },
  {
    title: "Usability over decoration",
    description:
      "Design is more than a nice picture. It has to genuinely work for the person using it.",
  },
  {
    title: "End to end",
    description:
      "I like owning the whole process: research and design through to a real, shipped product.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10">
      <div className="grid gap-10 sm:grid-cols-2 sm:items-start sm:gap-16">
        <Reveal>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink">
            <div className="gradient-blob absolute inset-0 opacity-80" />
            <span className="relative flex h-full items-center justify-center font-display text-sm font-medium uppercase tracking-wide text-ink-foreground">
              {/* Swap for a real photo */}
              Photo
            </span>
            <div className="absolute -right-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-lg bg-accent px-2 py-4 shadow-lg sm:-right-4">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-accent-foreground [writing-mode:vertical-rl]">
                Open to work
              </span>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">About</p>
            <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
              I&apos;m an Interface Design student focusing on UX/UI.
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-6 leading-relaxed text-muted">
              <p>
                Good design means much more to me than just a nice picture.
                It&apos;s about creating clear, intuitive, and accessible
                experiences that genuinely help the user. As an Interface
                Design student, I work every day on finding the right balance
                between usability, interaction, and visual design.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-4">
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">Based in</dt>
                <dd className="mt-1 text-sm font-medium">Beveren, BE</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">Studying</dt>
                <dd className="mt-1 text-sm font-medium">Interface Design</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">Focus</dt>
                <dd className="mt-1 text-sm font-medium">UX/UI Design</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">Open to</dt>
                <dd className="mt-1 text-sm font-medium">Freelance work</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>

      <SplitSection label="Skills">
        <div className="space-y-4">
          {skillGroups.map((group) => (
            <div key={group.label} className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs uppercase tracking-wide text-muted">
                {group.label}
              </span>
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>
      </SplitSection>

      <SplitSection label="What I care about" className="pb-4">
        <div className="grid gap-10 sm:grid-cols-3">
          {values.map((value) => (
            <Reveal key={value.title}>
              <h3 className="font-display text-lg font-semibold tracking-tight">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
            </Reveal>
          ))}
        </div>
      </SplitSection>
    </div>
  );
}
