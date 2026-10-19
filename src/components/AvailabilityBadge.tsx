import { INTERNSHIP_LINE } from "@/lib/site";

// Internship availability line with a small pulsing orange dot. Used in the
// hero and on the About page so both say exactly the same thing.
export default function AvailabilityBadge({ className = "" }: { className?: string }) {
  return (
    <p className={`flex items-start gap-2.5 text-sm font-medium text-foreground ${className}`}>
      <span aria-hidden="true" className="relative mt-[0.4em] flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      {INTERNSHIP_LINE}
    </p>
  );
}
