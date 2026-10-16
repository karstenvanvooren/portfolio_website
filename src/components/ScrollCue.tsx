// "Scroll down" button for the hero: an accent-filled circle with a gently
// bobbing arrow. Links to the work section, so it doubles as a shortcut
// (Lenis smooth-scrolls anchor links, see SmoothScroll.tsx).
export default function ScrollCue({ href = "#work" }: { href?: string }) {
  return (
    <a
      href={href}
      aria-label="Scroll down to my work"
      className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 hover:scale-110 sm:h-16 sm:w-16"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 motion-safe:animate-[scroll-cue-bob_1.8s_ease-in-out_infinite]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14M6 13l6 6 6-6" />
      </svg>
    </a>
  );
}
