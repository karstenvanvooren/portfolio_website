"use client";

import { useState } from "react";

// A clickable editorial list row. Collapsed, it shows a title and a short
// description; clicking it grows the row open to reveal more detail,
// using a CSS grid-rows 0fr->1fr transition so the height animates
// smoothly without knowing the content's height ahead of time. The "+"
// rotates into an "x" and the chip fills solid so it's clear the row is
// open, not just hovered.
export default function ListRow({
  index,
  title,
  description,
  details,
}: {
  index?: string;
  title: string;
  description: string;
  details: string;
}) {
  const [open, setOpen] = useState(false);
  const chip = index ?? title.slice(0, 2).toUpperCase();

  return (
    <div className="border-t border-border last:border-b">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-300 sm:py-8"
      >
        <div className="flex items-start gap-4 sm:gap-6">
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border text-xs font-semibold transition-colors duration-300 ${
              open
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border text-accent group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground"
            }`}
          >
            {chip}
          </span>
          <div>
            <h3
              className={`font-display text-xl font-semibold tracking-tight transition-colors duration-300 sm:text-2xl ${
                open ? "text-accent" : "group-hover:text-accent"
              }`}
            >
              {title}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{description}</p>
          </div>
        </div>
        <span
          aria-hidden
          className={`shrink-0 pt-1 text-lg text-accent transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid gap-6 pb-8 pl-[3.25rem] sm:grid-cols-[1fr_180px] sm:pb-10 sm:pl-[3.75rem]">
            <p className="max-w-md text-sm leading-relaxed text-muted">{details}</p>
            {/* Swap for a real screenshot/photo relevant to this step */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-ink sm:aspect-square">
              <div className="gradient-blob absolute inset-0 opacity-80" />
              <span className="relative flex h-full items-center justify-center px-2 text-center font-display text-[10px] font-medium uppercase tracking-wide text-ink-foreground">
                {title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
