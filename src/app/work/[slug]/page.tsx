import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import SplitSection from "@/components/SplitSection";
import CaseStudyImage from "@/components/case-study/CaseStudyImage";
import { getProject, projects } from "@/content/projects";
import { findPublicImage } from "@/lib/findPublicImage";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

// One template for every case study. Content comes from
// src/content/projects/<slug>.ts; each section below only renders when the
// project has content for it.
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
  const cover = findPublicImage(`images/projects/${project.slug}`, "cover");

  const { meta, glance, context, research, process, finalDesign, styleGuide, testing, build, reflection } =
    project;

  const metaItems = [
    { label: "Role", value: meta.role },
    { label: "Year", value: meta.year },
    { label: "Duration", value: meta.duration },
    { label: "Team", value: meta.team },
    { label: "Type", value: meta.type },
    { label: "Tools", value: meta.tools?.join(", ") },
  ].filter((item): item is { label: string; value: string } => Boolean(item.value));

  const glanceCards = [
    { label: "Challenge", text: glance?.challenge },
    { label: "Solution", text: glance?.solution },
    { label: "Result", text: glance?.result },
  ].filter((card): card is { label: string; text: string } => Boolean(card.text));

  const reflectionItems = [
    { label: "Result", text: reflection?.result },
    { label: "What I'm proud of", text: reflection?.proud },
    { label: "What I learned", text: reflection?.learned },
    { label: "Next time", text: reflection?.nextTime },
  ].filter((item): item is { label: string; text: string } => Boolean(item.text));

  return (
    <article>
      {/* 1. Hero + 2. meta row */}
      <header className="border-b border-border pb-14 pt-16">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
          <Reveal>
            <Link href="/work" className="link-underline text-sm font-medium text-accent-text">
              ← Back to work
            </Link>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-2xl text-lg text-muted">{project.summary}</p>
          </Reveal>
          {metaItems.length > 0 && (
            <Reveal delay={0.18}>
              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-6 sm:grid-cols-3 lg:grid-cols-6">
                {metaItems.map((item) => (
                  <div key={item.label} className={item.label === "Tools" ? "col-span-2 sm:col-span-3 lg:col-span-2" : ""}>
                    <dt className="text-xs uppercase tracking-wide text-muted">{item.label}</dt>
                    <dd className="mt-1 text-sm font-medium">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </div>
      </header>

      {/* Cover — placeholder until public/images/projects/<slug>/cover.png exists */}
      <Reveal>
        <div className="mx-auto max-w-[1600px] px-6 pt-10 sm:px-10">
          <div
            className={`relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl ${
              cover ? "mockup-bg" : "bg-ink"
            }`}
          >
            {cover ? (
              <Image
                src={cover}
                alt={project.cover.alt ?? `${project.title} mockup`}
                fill
                sizes="(min-width: 1600px) 1600px, 100vw"
                className="object-contain"
                priority
              />
            ) : (
              <>
                <div className="gradient-blob absolute inset-0 opacity-80" />
                <span className="relative font-display font-medium uppercase tracking-wide text-ink-foreground">
                  {project.cover.label}
                </span>
              </>
            )}
          </div>
        </div>
      </Reveal>

      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        {/* 3. At a glance */}
        {glanceCards.length > 0 && (
          <section aria-label="At a glance" className="grid gap-4 py-10 sm:grid-cols-3">
            {glanceCards.map((card, i) => (
              <Reveal key={card.label} delay={i * 0.06} className="rounded-2xl bg-surface p-6 sm:p-8">
                <h2 className="text-xs font-medium uppercase tracking-widest text-accent-text">
                  {card.label}
                </h2>
                <p className="mt-3 leading-relaxed">{card.text}</p>
              </Reveal>
            ))}
          </section>
        )}

        {/* 4. Context */}
        {context && context.length > 0 && (
          <SplitSection label="Context">
            <Reveal className="max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
              {context.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>
          </SplitSection>
        )}

        {/* 5. Research */}
        {research && (
          <SplitSection label="Research">
            <Reveal className="max-w-3xl">
              {research.intro && <p className="text-lg leading-relaxed text-muted">{research.intro}</p>}
              <div className="mt-6 grid gap-8 sm:grid-cols-2">
                {research.methods && research.methods.length > 0 && (
                  <div>
                    <h3 className="text-xs uppercase tracking-wide text-muted">Methods</h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {research.methods.map((method) => (
                        <li key={method} className="rounded-full border border-border px-3 py-1.5 text-sm">
                          {method}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {research.insights && research.insights.length > 0 && (
                  <div>
                    <h3 className="text-xs uppercase tracking-wide text-muted">Key insights</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-accent-text">
                      {research.insights.map((insight) => (
                        <li key={insight}>{insight}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Reveal>
          </SplitSection>
        )}

        {/* 6. Process */}
        {process && process.steps.length > 0 && (
          <SplitSection label="Process">
            {process.intro && (
              <Reveal>
                <p className="max-w-2xl text-lg leading-relaxed text-muted">{process.intro}</p>
              </Reveal>
            )}
            <ol className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {process.steps.map((step, i) => (
                <li key={step.file}>
                  <Reveal delay={i * 0.06}>
                    <CaseStudyImage
                      slug={project.slug}
                      image={step}
                      sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                      showCaption={false}
                    />
                    <p className="mt-3 text-sm">
                      <span className="mr-2 text-muted">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-medium">{step.title}</span>
                    </p>
                    {step.caption && <p className="mt-1 text-sm text-muted">{step.caption}</p>}
                  </Reveal>
                </li>
              ))}
            </ol>
          </SplitSection>
        )}

        {/* 7. Final design */}
        {finalDesign && (finalDesign.features.length > 0 || finalDesign.screens?.length) && (
          <SplitSection label="Final design">
            <div className="flex flex-col gap-14">
              {finalDesign.features.map((feature, i) => (
                <Reveal key={feature.title} className="grid items-center gap-6 sm:grid-cols-2 sm:gap-12">
                  <div className={i % 2 === 1 ? "sm:order-last" : ""}>
                    <CaseStudyImage slug={project.slug} image={feature.image} />
                  </div>
                  <div>
                    <p className="text-sm text-muted">{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-3 max-w-md leading-relaxed text-muted">{feature.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {finalDesign.alsoIncluded && (
              <Reveal>
                <p className="mt-12 text-muted">
                  <span className="font-medium text-foreground">Also included: </span>
                  {finalDesign.alsoIncluded}
                </p>
              </Reveal>
            )}

            {finalDesign.screens && finalDesign.screens.length > 0 && (
              <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {finalDesign.screens.map((screen, i) => (
                  <li key={screen.file}>
                    <Reveal delay={i * 0.05}>
                      <CaseStudyImage
                        slug={project.slug}
                        image={screen}
                        aspect="aspect-[9/16]"
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                        showCaption={false}
                      />
                      <p className="mt-2 text-sm text-muted">{screen.caption ?? screen.alt}</p>
                    </Reveal>
                  </li>
                ))}
              </ul>
            )}
          </SplitSection>
        )}

        {/* 8. Style guide */}
        {styleGuide && (
          <SplitSection label="Style guide">
            <Reveal className="flex flex-col gap-10">
              {styleGuide.colors && styleGuide.colors.length > 0 && (
                <div>
                  <h3 className="text-xs uppercase tracking-wide text-muted">Colours</h3>
                  <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {styleGuide.colors.map((color) => (
                      <li key={color.hex}>
                        <div
                          className="h-20 rounded-xl border border-border"
                          style={{ backgroundColor: color.hex }}
                          aria-hidden="true"
                        />
                        <p className="mt-2 text-sm font-medium">
                          {color.name}
                          {color.role && <span className="font-normal text-muted"> · {color.role}</span>}
                        </p>
                        <p className="font-mono text-xs text-muted">{color.hex}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {styleGuide.typography && styleGuide.typography.length > 0 && (
                <div>
                  <h3 className="text-xs uppercase tracking-wide text-muted">Typography</h3>
                  <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                    {styleGuide.typography.map((font) => (
                      <div key={font.name} className="rounded-xl border border-border p-5">
                        <dt className="font-display text-2xl font-semibold tracking-tight">{font.name}</dt>
                        <dd className="mt-1 text-sm text-muted">{font.usage}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {styleGuide.components && styleGuide.components.length > 0 && (
                <div>
                  <h3 className="text-xs uppercase tracking-wide text-muted">Components</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {styleGuide.components.map((component) => (
                      <li key={component} className="rounded-full border border-border px-3 py-1.5 text-sm">
                        {component}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {styleGuide.image && (
                <CaseStudyImage
                  slug={project.slug}
                  image={styleGuide.image}
                  aspect="aspect-video"
                  sizes="(min-width: 1600px) 1300px, 100vw"
                />
              )}
            </Reveal>
          </SplitSection>
        )}

        {/* 9. Testing & iteration */}
        {testing && testing.paragraphs.length > 0 && (
          <SplitSection label="Testing & iteration">
            <Reveal className="max-w-2xl">
              <div className="space-y-4 text-lg leading-relaxed text-muted">
                {testing.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {testing.changes && testing.changes.length > 0 && (
                <>
                  <h3 className="mt-8 text-xs uppercase tracking-wide text-muted">What changed</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-accent-text">
                    {testing.changes.map((change) => (
                      <li key={change}>{change}</li>
                    ))}
                  </ul>
                </>
              )}
            </Reveal>
          </SplitSection>
        )}

        {/* 10. Build */}
        {build && (
          <SplitSection label="Build">
            <Reveal className="flex flex-col gap-10">
              {build.intro && <p className="max-w-2xl text-lg leading-relaxed text-muted">{build.intro}</p>}

              {build.stack && build.stack.length > 0 && (
                <div className="space-y-4">
                  {build.stack.map((group) => (
                    <div key={group.label} className="grid gap-2 sm:grid-cols-[120px_1fr] sm:items-start sm:gap-6">
                      <h3 className="pt-1.5 text-xs uppercase tracking-wide text-muted">{group.label}</h3>
                      <ul className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <li key={item} className="rounded-full border border-border px-3 py-1.5 text-sm">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {build.diagram && build.diagram.length > 0 && (
                <div>
                  <h3 className="text-xs uppercase tracking-wide text-muted">Architecture</h3>
                  <ol
                    aria-label={build.diagram.join(" → ")}
                    className="mt-4 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center"
                  >
                    {build.diagram.map((node, i) => (
                      <li key={node} className="flex flex-col items-center gap-2 sm:flex-row">
                        {i > 0 && (
                          <span aria-hidden="true" className="text-accent-text">
                            <span className="sm:hidden">↓</span>
                            <span className="hidden sm:inline">→</span>
                          </span>
                        )}
                        <span className="w-full rounded-xl border border-border bg-surface px-5 py-4 text-center text-sm font-medium sm:w-auto">
                          {node}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {build.notes && build.notes.length > 0 && (
                <ul className="max-w-2xl list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-accent-text">
                  {build.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              )}

              {build.links && build.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {build.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground"
                    >
                      {link.label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              )}
            </Reveal>
          </SplitSection>
        )}

        {/* 11. Result & reflection */}
        {reflectionItems.length > 0 && (
          <SplitSection label="Result & reflection">
            <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {reflectionItems.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.06}>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{item.label}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </SplitSection>
        )}
      </div>

      {/* 12. Next project */}
      <div className="mt-10 border-t border-border">
        <Link
          href={`/work/${next.slug}`}
          className="group mx-auto flex max-w-[1600px] items-end justify-between gap-6 px-6 py-16 sm:px-10 sm:py-24"
        >
          <div className="min-w-0">
            <p className="text-sm font-medium uppercase tracking-widest text-accent-text">Next project</p>
            <p className="mt-3 font-display text-4xl font-semibold tracking-tight transition-colors group-hover:text-accent-text sm:text-7xl">
              {next.title}
            </p>
          </div>
          <span
            aria-hidden="true"
            className="text-4xl transition-transform duration-300 group-hover:translate-x-2 sm:text-6xl"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
