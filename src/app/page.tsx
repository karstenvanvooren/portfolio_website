import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import Hero from "@/components/Hero";
import Magnetic from "@/components/Magnetic";
import ListRow from "@/components/ListRow";
import SplitSection from "@/components/SplitSection";
import { projects } from "@/data/projects";

const services = [
  {
    title: "UX/UI Design",
    description: "Wireframes through to polished, production-ready UI.",
    details:
      "I start from user flows and low-fidelity wireframes, then move into visual design once the structure actually works. Everything happens in Figma, with fast iteration so bad ideas get killed early instead of after they're built. The goal is always an interface that reads as obvious, not just one that looks nice.",
  },
  {
    title: "Design Systems",
    description: "Reusable components and type/color systems that scale.",
    details:
      "Typography, color, spacing, and components get defined once, in a shared library, instead of redrawn on every screen. That keeps a product visually consistent as it grows past the first few screens, and makes it much faster to design and build new features later without reinventing decisions that were already made.",
  },
  {
    title: "Development",
    description:
      "Building the products I design, frontend and a bit of backend with Node.js and MongoDB.",
    details:
      "Mostly React and Next.js on the frontend — I like being the one who builds what I designed, since it keeps the two honest. On the backend I've worked with Node.js, Express, and MongoDB when a project needs its own API, authentication, or a database, most recently on the KSK Beveren app.",
  },
  {
    title: "Product Prototyping",
    description: "End-to-end prototypes, from Figma to a working app.",
    details:
      "Somewhere between a click-through Figma prototype and a full production build, there's a working version that's real enough to actually test with people. I build that middle step often, since it's usually the fastest way to find out if an idea holds up before committing to a full build.",
  },
];

const processSteps = [
  {
    title: "Discover",
    description: "Understand the problem, the users, and the constraints.",
    details:
      "Before opening Figma, I try to get clear on who this is actually for and what they're doing today instead of using this product. That means talking to users where possible, looking at what already exists, and writing down the actual problem in one sentence — if I can't do that, I'm not ready to design yet.",
  },
  {
    title: "Design",
    description: "Wireframes, visual design, and a system to build on.",
    details:
      "Wireframes come first, so structure and flow get settled before any visual decisions. Then visual design, building or extending a small design system along the way — colors, type, spacing, components — so the product feels considered rather than assembled screen by screen.",
  },
  {
    title: "Test",
    description: "Validate the design with real users before it's built.",
    details:
      "Even informal feedback — sitting next to someone while they try to use it — catches problems a design review never will. I'd rather find out a flow doesn't make sense here, on a Figma prototype, than after it's already built and shipped.",
  },
  {
    title: "Build",
    description: "Turn the design into a real, working product.",
    details:
      "This is where the design becomes real: working code, real data, real edge cases. I try to stay close to the original design intent instead of quietly cutting corners under time pressure, and I flag it explicitly when a technical constraint means something has to change.",
  },
  {
    title: "Ship",
    description: "Launch, gather feedback, and iterate.",
    details:
      "Launching isn't the finish line — it's when real usage data starts. I watch how a product actually gets used once it's live, gather feedback from real users where I can, and treat the first version as a starting point to iterate on rather than a finished product.",
  },
];

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const teaserProjects =
    featured.length >= 2 ? featured.slice(0, 2) : projects.slice(0, 2);

  return (
    <div className="flex flex-col">
      <Hero />

      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10">
        {/* Work teaser — full listing lives at /work */}
        <SplitSection label="Selected work">
          <div id="work" className="flex scroll-mt-24 items-end justify-between">
            <p className="text-sm text-muted">Recent projects</p>
            <Link href="/work" className="link-underline text-sm font-medium text-accent">
              View all work →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {teaserProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </SplitSection>

        {/* What I do */}
        <SplitSection label="What I do">
          <div className="flex flex-col">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.06}>
                <ListRow
                  title={service.title}
                  description={service.description}
                  details={service.details}
                />
              </Reveal>
            ))}
          </div>
        </SplitSection>

        {/* How I work */}
        <SplitSection label="How I work">
          <div id="how-i-work" className="flex scroll-mt-24 flex-col">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <ListRow
                  index={`0${i + 1}`}
                  title={step.title}
                  description={step.description}
                  details={step.details}
                />
              </Reveal>
            ))}
          </div>
        </SplitSection>

        {/* About teaser */}
        <SplitSection label="About" className="pb-20">
          <div className="rounded-2xl bg-surface px-6 py-14 sm:px-14 sm:py-20">
            <div className="grid gap-10 sm:grid-cols-[1.3fr_auto] sm:items-center sm:gap-16">
              <div>
                <Reveal>
                  <h3 className="max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                    Interface Design student focused on{" "}
                    <span className="text-accent">UX/UI</span>.
                  </h3>
                </Reveal>
                <Reveal delay={0.08}>
                  <p className="mt-5 max-w-md text-lg text-muted">
                    Good design isn&apos;t just how it looks. It&apos;s how
                    well it works.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.16}>
                <Magnetic>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                  >
                    More about me →
                  </Link>
                </Magnetic>
              </Reveal>
            </div>
          </div>
        </SplitSection>
      </div>
    </div>
  );
}
