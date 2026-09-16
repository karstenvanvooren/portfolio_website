import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      {/* Header — same mx-auto max-w-[1600px] px-6 sm:px-10 wrapper as the
          rest of the site, so this page's left edge lines up with the nav,
          hero, and work grid. The prose itself stays narrower (max-w-3xl)
          for readability, but hugs that same left edge instead of being
          independently centered. */}
      <header className="border-b border-border pb-14 pt-16">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
          <div className="max-w-3xl">
            <Reveal>
              <Link href="/work" className="text-sm text-muted hover:text-foreground">
                ← Back to work
              </Link>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                {project.title}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 max-w-xl text-lg text-muted">{project.summary}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted">Role</dt>
                  <dd className="mt-1 text-sm font-medium">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted">Year</dt>
                  <dd className="mt-1 text-sm font-medium">{project.year}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-xs uppercase tracking-wide text-muted">Tools</dt>
                  <dd className="mt-1 text-sm font-medium">{project.tools.join(", ")}</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </header>

      {/* Cover placeholder — swap for a real screenshot/hero image */}
      <Reveal>
        <div className="mx-auto flex max-w-[1600px] items-center justify-center px-6 py-10 sm:px-10">
          <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-ink">
            <div className="gradient-blob absolute inset-0 opacity-80" />
            <span className="relative font-display font-medium uppercase tracking-wide text-ink-foreground">
              {project.cover.label}
            </span>
          </div>
        </div>
      </Reveal>

      {/* Body */}
      <div className="mx-auto max-w-[1600px] px-6 py-10 sm:px-10">
        <div className="max-w-3xl">
          <Reveal className="mb-12">
            <h2 className="font-display text-xl font-semibold tracking-tight">
              The problem
            </h2>
            <p className="mt-3 leading-relaxed text-muted">{project.problem}</p>
          </Reveal>

          <Reveal className="mb-12">
            <h2 className="font-display text-xl font-semibold tracking-tight">Process</h2>
            <ul className="mt-3 space-y-3">
              {project.process.map((step, i) => (
                <li key={i} className="leading-relaxed text-muted">
                  {step}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mb-12">
            <h2 className="font-display text-xl font-semibold tracking-tight">
              The solution
            </h2>
            <p className="mt-3 leading-relaxed text-muted">{project.solution}</p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-xl font-semibold tracking-tight">Outcome</h2>
            <p className="mt-3 leading-relaxed text-muted">{project.outcome}</p>
          </Reveal>
        </div>
      </div>

      {/* Next project */}
      <div className="border-t border-border">
        <Link
          href={`/work/${next.slug}`}
          className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-10 text-left sm:px-10"
        >
          <div>
            <p className="text-xs uppercase tracking-wide text-muted">Next project</p>
            <p className="mt-1 font-display text-lg font-semibold tracking-tight">
              {next.title}
            </p>
          </div>
          <span className="text-2xl">→</span>
        </Link>
      </div>
    </article>
  );
}
