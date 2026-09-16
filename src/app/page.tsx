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
      "From user flows and low-fidelity wireframes to a final, pixel-perfect interface, mostly in Figma, iterating quickly before anything gets built.",
  },
  {
    title: "Design Systems",
    description: "Reusable components and type/color systems that scale.",
    details:
      "Typography, color, and spacing defined once and reused everywhere, so a product stays consistent as it grows past the first few screens.",
  },
  {
    title: "Development",
    description:
      "Building the products I design, frontend and a bit of backend with Node.js and MongoDB.",
    details:
      "Mostly React and Next.js on the frontend, with Node.js and MongoDB on the backend when a project needs its own API and database.",
  },
  {
    title: "Product Prototyping",
    description: "End-to-end prototypes, from Figma to a working app.",
    details:
      "From a rough click-through in Figma to a fully working prototype, so an idea can be tested before committing to a full build.",
  },
];

const processSteps = [
  {
    title: "Discover",
    description: "Understand the problem, the users, and the constraints.",
    details:
      "Talking to users where possible, mapping out the actual problem, and figuring out what needs solving before opening Figma.",
  },
  {
    title: "Design",
    description: "Wireframes, visual design, and a system to build on.",
    details:
      "Wireframes first, then visual design, building or extending a small design system along the way so the product feels consistent.",
  },
  {
    title: "Test",
    description: "Validate the design with real users before it's built.",
    details:
      "Getting the design in front of real people, even informally, to catch usability issues while they're still cheap to fix.",
  },
  {
    title: "Build",
    description: "Turn the design into a real, working product.",
    details:
      "Turning the approved design into working code, staying close to the original intent instead of cutting corners along the way.",
  },
  {
    title: "Ship",
    description: "Launch, gather feedback, and iterate.",
    details:
      "Launching, watching how it's actually used, and iterating based on real feedback rather than assumptions.",
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
