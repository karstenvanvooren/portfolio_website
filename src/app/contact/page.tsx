import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch — open to freelance UX/UI work and collaborations.",
};

export default function ContactPage() {
  return (
    // A nod to the "bedankt!" page in your PDF portfolio, rebuilt as a
    // proper contact page. Kept plain (no dot grid/gradient) — this page
    // has a real form people need to read and fill in, and the animated
    // background made that harder rather than more interesting.
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-background px-6 py-20 text-center text-foreground sm:px-10">
      <div className="mx-auto w-full max-w-xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Get in touch
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight sm:text-7xl">
            Let&apos;s talk.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-muted">
            Open to freelance UX/UI work and collaborations. Send a message
            below, or reach me directly.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <ContactForm />
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <a
                href="mailto:karstenvanvooren@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:border-foreground"
              >
                karstenvanvooren@gmail.com
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="tel:+32479410599"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:border-foreground"
              >
                +32 479 41 05 99
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10 flex justify-center gap-6 text-sm text-muted">
            <a
              href="https://github.com/karstenvanvooren"
              className="link-underline hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/karstenvanvooren/"
              className="link-underline hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/vanvoorenkarsten/"
              className="link-underline hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
