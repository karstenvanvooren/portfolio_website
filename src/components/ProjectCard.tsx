import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:shadow-lg hover:shadow-black/5"
    >
      {/* Swap this placeholder block for a real screenshot/mockup image */}
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-ink">
        <div className="gradient-blob absolute inset-0 opacity-80 transition-transform duration-500 group-hover:scale-110" />
        <span className="relative font-display text-sm font-medium uppercase tracking-wide text-ink-foreground">
          {project.cover.label}
        </span>
      </div>
      <div className="flex flex-col gap-2 p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <span className="shrink-0 text-xs text-muted">{project.year}</span>
        </div>
        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
          View case study
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
