import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import Hero from "@/components/Hero";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* Work */}
      <section id="work" className="mx-auto w-full max-w-5xl px-6 py-16">
        <Reveal>
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Selected work
            </h2>
            <span className="text-sm text-muted">{projects.length} projects</span>
          </div>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <Reveal className="max-w-md">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              A bit about me
            </h2>
            <p className="mt-3 text-muted">
              {/* Replace with a short real bio teaser */}
              Graphic design student focusing on UX/UI, with hands-on
              experience building the products I design — frontend, backend,
              and everything in between.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent"
            >
              Read more →
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
