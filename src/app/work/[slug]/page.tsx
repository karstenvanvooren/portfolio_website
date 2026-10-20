import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import SplitSection from "@/components/SplitSection";
import CaseStudyImage, { caseImageExists } from "@/components/case-study/CaseStudyImage";
import type { CaseImage } from "@/content/projects";
import { getProject, projects } from "@/content/projects";
import { styleGuidePreviews } from "@/components/case-study/StyleGuidePreviews";
import { findProjectCover } from "@/lib/findPublicImage";
import { specimenFontFamily, specimenFontVariables } from "@/lib/caseStudyFonts";

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

// Small grey label above a group (e.g. "Colours", "Key insights"), and the
// outlined pill used for tags such as tools and methods.
const SUB_LABEL = "text-xs uppercase tracking-wide text-muted";
const PILL = "rounded-full border border-border px-3 py-1.5 text-sm";

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
  const cover = findProjectCover(project);

  const {
    meta,
    links,
    glance,
    context,
    contextImage: contextImageRaw,
    research,
    process,
    beforeAfter,
    finalDesign,
    callouts,
    styleGuide,
    testing,
    build,
  } = project;

  const has = (image?: CaseImage) => caseImageExists(project.slug, image);
  const contextImage = contextImageRaw && has(contextImageRaw) ? contextImageRaw : undefined;
  const researchImage = research?.image && has(research.image) ? research.image : undefined;
  const processImages = process?.images?.filter(has) ?? [];
  const beforeAfterItems = beforeAfter
    ? [
        { label: "Before", image: beforeAfter.before },
        { label: "After", image: beforeAfter.after },
      ].filter((item) => has(item.image))
    : [];
  const screens = finalDesign?.screens?.filter(has) ?? [];
  const showcase = finalDesign?.showcase?.filter(has) ?? [];

  // Long values get two columns so they don't squeeze into one narrow cell.
  const metaItems = [
    { label: "Role", value: meta.role },
    { label: "Year", value: meta.year },
    { label: "Duration", value: meta.duration, wide: true },
    { label: "Team", value: meta.team },
    { label: "Type", value: meta.type, wide: true },
    { label: "Tools", value: meta.tools?.join(", "), wide: true },
    { label: "Deliverable", value: meta.deliverable, wide: true },
  ].filter((item): item is { label: string; value: string; wide?: boolean } => Boolean(item.value));

  // Short titled bullet lists that sit after a given section.
  const renderCallouts = (after: "context" | "finalDesign") =>
    callouts
      ?.filter((callout) => callout.after === after)
      .map((callout) => (
        <SplitSection key={callout.label} label={callout.label}>
          <Reveal>
            <ul className="grid gap-4 sm:grid-cols-3">
              {callout.items.map((item) => (
                <li key={item} className="rounded-2xl border border-border p-6 leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </SplitSection>
      ));

  const glanceCards = [
    { label: "Challenge", text: glance?.challenge },
    { label: "Solution", text: glance?.solution },
    { label: "Result", text: glance?.result },
  ].filter((card): card is { label: string; text: string } => Boolean(card.text));


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
                  <div key={item.label} className={item.wide ? "col-span-2" : ""}>
                    <dt className={SUB_LABEL}>{item.label}</dt>
                    <dd className="mt-1 text-sm font-medium">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
          {links && links.length > 0 && (
            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap gap-3">
                {links.map((link) => (
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
            {contextImage && (
              <Reveal className="mt-10">
                <CaseStudyImage
                  slug={project.slug}
                  image={contextImage}
                  maxHeight="max-h-[640px]"
                  sizes="(min-width: 1600px) 1300px, 100vw"
                />
              </Reveal>
            )}
          </SplitSection>
        )}
        {renderCallouts("context")}

        {/* 5. Research */}
        {research && (
          <SplitSection label="Research">
            <Reveal className="flex flex-col gap-10">
              {research.methods && research.methods.length > 0 && (
                <dl className="grid max-w-4xl gap-6 sm:grid-cols-3">
                  {research.methods.map((method) => (
                    <div key={method.title}>
                      <dt className="font-display text-lg font-semibold tracking-tight">{method.title}</dt>
                      {method.description && (
                        <dd className="mt-2 text-sm leading-relaxed text-muted">{method.description}</dd>
                      )}
                    </div>
                  ))}
                </dl>
              )}
              {research.insights && research.insights.length > 0 && (
                <div>
                  <h3 className={SUB_LABEL}>Key insights</h3>
                  <ul className="mt-4 grid gap-4 sm:grid-cols-3">
                    {research.insights.map((insight) => (
                      <li key={insight} className="rounded-2xl bg-surface p-6 leading-relaxed">
                        {insight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {researchImage && (
                <CaseStudyImage
                  slug={project.slug}
                  image={researchImage}
                  maxHeight="max-h-[720px]"
                  sizes="(min-width: 1600px) 1300px, 100vw"
                />
              )}
            </Reveal>
          </SplitSection>
        )}

        {/* 6. Process: numbered steps and/or an image strip */}
        {process && Boolean(process.steps?.length || processImages.length) && (
          <SplitSection label="Process">
            {process.intro && (
              <Reveal>
                <p className="max-w-2xl text-lg leading-relaxed text-muted">{process.intro}</p>
              </Reveal>
            )}
            {process.steps && process.steps.length > 0 && (
              <ol className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 xl:grid-cols-4">
                {process.steps.map((step, i) => (
                  <li key={step.title} className="border-t border-border pt-4">
                    <Reveal delay={Math.min(i, 4) * 0.05}>
                      <p className="text-sm font-medium text-accent-text">{String(i + 1).padStart(2, "0")}</p>
                      <p className="mt-1 font-medium">{step.title}</p>
                      {step.description && (
                        <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
                      )}
                    </Reveal>
                  </li>
                ))}
              </ol>
            )}
            {processImages.length > 0 && (
              <ul className="mt-10 grid items-start gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {processImages.map((image, i) => (
                  <li key={image.file}>
                    <Reveal delay={i * 0.06}>
                      <CaseStudyImage
                        slug={project.slug}
                        image={image}
                        sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                        maxHeight="max-h-[520px]"
                        showCaption={false}
                      />
                      {image.caption && <p className="mt-3 text-sm font-medium">{image.caption}</p>}
                    </Reveal>
                  </li>
                ))}
              </ul>
            )}
          </SplitSection>
        )}

        {/* Before / after */}
        {beforeAfter && beforeAfterItems.length > 0 && (
          <SplitSection label="Before & after">
            <Reveal>
              <div className="grid gap-6 sm:grid-cols-2">
                {beforeAfterItems.map(({ label, image }) => (
                  <div key={label}>
                    <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent-text">{label}</p>
                    <CaseStudyImage
                      slug={project.slug}
                      image={image}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      showCaption={false}
                    />
                  </div>
                ))}
              </div>
              {beforeAfter.caption && <p className="mt-4 text-sm text-muted">{beforeAfter.caption}</p>}
            </Reveal>
          </SplitSection>
        )}

        {/* 7. Final design */}
        {finalDesign && Boolean(finalDesign.features.length || finalDesign.screens?.length) && (
          <SplitSection label="Final design">
            {finalDesign.vimeoId && (
              <Reveal className="mb-14">
                {/* 16:9 responsive embed. dnt=1: Vimeo's "do not track", as
                    promised on the privacy page. */}
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-ink">
                  <iframe
                    src={`https://player.vimeo.com/video/${finalDesign.vimeoId}?dnt=1`}
                    title={`${project.title} demo video`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <a
                  href={`https://vimeo.com/${finalDesign.vimeoId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-text"
                >
                  <span className="link-underline">Watch the demo on Vimeo</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </Reveal>
            )}
            <div className="flex flex-col gap-14">
              {finalDesign.features.map((feature, i) => {
                const withImage = has(feature.image);
                return (
                  <Reveal
                    key={feature.title}
                    className={withImage ? "grid items-center gap-6 sm:grid-cols-2 sm:gap-12" : ""}
                  >
                    {withImage && (
                      <div className={i % 2 === 1 ? "sm:order-last" : ""}>
                        <CaseStudyImage slug={project.slug} image={feature.image} />
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-muted">{String(i + 1).padStart(2, "0")}</p>
                      <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="mt-3 max-w-md leading-relaxed text-muted">{feature.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {finalDesign.alsoIncluded && (
              <Reveal>
                <p className="mt-12 text-muted">
                  <span className="font-medium text-foreground">Also included: </span>
                  {finalDesign.alsoIncluded}
                </p>
              </Reveal>
            )}

            {screens.length > 0 && (
              <ul className="mt-8 grid grid-cols-2 items-start gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {screens.map((screen, i) => (
                  <li key={screen.file}>
                    <Reveal delay={i * 0.05}>
                      <CaseStudyImage
                        slug={project.slug}
                        image={screen}
                        maxHeight="max-h-[560px]"
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                        showCaption={false}
                      />
                      <p className="mt-2 text-sm text-muted">{screen.caption ?? screen.alt}</p>
                    </Reveal>
                  </li>
                ))}
              </ul>
            )}

            {showcase.length > 0 && (
              <Reveal className={`mt-14 grid gap-6 ${showcase.length > 1 ? "lg:grid-cols-2" : ""}`}>
                {showcase.map((image) => (
                  <CaseStudyImage
                    key={image.file}
                    slug={project.slug}
                    image={image}
                    frame="mockup"
                    maxHeight="max-h-[720px]"
                    sizes={showcase.length > 1 ? "(min-width: 1024px) 40vw, 100vw" : "(min-width: 1600px) 1300px, 100vw"}
                  />
                ))}
              </Reveal>
            )}
          </SplitSection>
        )}
        {renderCallouts("finalDesign")}

        {/* 8. Style guide: colours, a type specimen in the real fonts, live
            components (StyleGuidePreviews.tsx) and visual-language notes */}
        {styleGuide && (
          <SplitSection label="Style guide">
            <Reveal className={`flex flex-col gap-12 ${specimenFontVariables}`}>
              {styleGuide.colors && styleGuide.colors.length > 0 && (
                <div>
                  <h3 className={SUB_LABEL}>Colours</h3>
                  <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">
                    {styleGuide.colors.map((color) => (
                      <li key={color.name}>
                        <div
                          className="h-20 rounded-xl border border-border"
                          style={{ background: color.background ?? color.hex }}
                          aria-hidden="true"
                        />
                        <p className="mt-2 text-sm font-medium">{color.name}</p>
                        <p className="font-mono text-xs text-muted">{color.hex}</p>
                        {color.role && <p className="mt-1 text-xs leading-snug text-muted">{color.role}</p>}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {styleGuide.typography && styleGuide.typography.length > 0 && (
                <div>
                  <h3 className={SUB_LABEL}>Typography</h3>
                  <dl className="mt-4 flex flex-col">
                    {styleGuide.typography.map((type) => (
                      <div
                        key={type.role}
                        className="grid gap-2 border-t border-border py-5 last:border-b sm:grid-cols-[200px_1fr] sm:items-baseline sm:gap-8"
                      >
                        <dt>
                          <span className="block text-sm font-medium">{type.role}</span>
                          <span className="block text-xs text-muted">{type.spec}</span>
                        </dt>
                        <dd>
                          <span
                            className="block break-words leading-tight"
                            style={{
                              fontFamily: specimenFontFamily[type.font],
                              fontWeight: type.weight,
                              fontStyle: type.italic ? "italic" : undefined,
                              fontSize: type.size ? `min(${type.size}px, 9vw)` : undefined,
                              color: type.color,
                            }}
                          >
                            {type.sample ?? type.role}
                          </span>
                          {type.note && <span className="mt-2 block text-xs text-muted">{type.note}</span>}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {styleGuide.componentPreview && styleGuidePreviews[project.slug] && (
                <div>
                  <h3 className="mb-4 text-xs uppercase tracking-wide text-muted">Components</h3>
                  {styleGuidePreviews[project.slug]()}
                </div>
              )}

              {styleGuide.description && styleGuide.description.length > 0 && (
                <div>
                  <h3 className={SUB_LABEL}>Visual language</h3>
                  <div className="mt-3 max-w-2xl space-y-3 text-lg leading-relaxed text-muted">
                    {styleGuide.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
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
            </Reveal>
          </SplitSection>
        )}

        {/* 10. Build */}
        {build && (
          <SplitSection label="Build">
            <Reveal className="flex flex-col gap-10">
              {build.stack && build.stack.length > 0 && (
                <div className="space-y-4">
                  {build.stack.map((group) => (
                    <div key={group.label} className="grid gap-2 sm:grid-cols-[120px_1fr] sm:items-start sm:gap-6">
                      <h3 className="pt-1.5 text-xs uppercase tracking-wide text-muted">{group.label}</h3>
                      <ul className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <li key={item} className={PILL}>
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
                  <h3 className={SUB_LABEL}>Architecture</h3>
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
      </div>

      {/* 11. Next project */}
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
