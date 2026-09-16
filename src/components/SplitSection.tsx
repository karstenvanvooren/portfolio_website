import type { ReactNode } from "react";

// Quiet label pinned to a narrow left column, content in a wide column to
// its right — instead of a numbered eyebrow sitting above a centered
// heading. The label stays put while its content scrolls past on tall
// sections.
export default function SplitSection({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`grid gap-6 border-t border-border py-16 sm:grid-cols-[200px_1fr] sm:gap-16 ${className}`}
    >
      <h2 className="font-display text-lg font-medium tracking-tight text-foreground sm:sticky sm:top-28 sm:self-start">
        {label}
      </h2>
      <div>{children}</div>
    </div>
  );
}
