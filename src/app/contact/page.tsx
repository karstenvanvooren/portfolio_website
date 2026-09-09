import Reveal from "@/components/Reveal";

export default function ContactPage() {
  return (
    // Bold, full-bleed closing moment — a nod to the "bedankt!" page in
    // your PDF portfolio, rebuilt as a proper contact page.
    <div className="relative isolate flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-ink px-6 text-center text-ink-foreground">
      <div className="gradient-blob pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-2xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Get in touch
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight sm:text-7xl">
            Let&apos;s talk.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-ink-foreground/70">
            {/* Replace with your real pitch — mention freelance availability once you're taking clients */}
            Open to freelance UX/UI work and collaborations. The fastest way
            to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href="mailto:you@example.com"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            you@example.com
          </a>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex justify-center gap-6 text-sm text-ink-foreground/60">
            <a
              href="https://github.com/karstenvanvooren"
              className="hover:text-ink-foreground"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a href="#" className="hover:text-ink-foreground">
              LinkedIn
            </a>
            <a href="#" className="hover:text-ink-foreground">
              Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
