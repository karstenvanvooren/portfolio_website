import type { Metadata } from "next";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";

export const metadata: Metadata = {
  title: "Message sent",
  description: "Thanks for your message.",
  // Only reached after submitting the contact form, so keep it out of search.
  robots: { index: false, follow: true },
};

export default function ThanksPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-6 py-20 text-center text-foreground sm:px-10">
      <div className="mx-auto max-w-md">
        <p className="text-sm font-medium uppercase tracking-widest text-accent-text">Message sent</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
          Thank you!
        </h1>
        <p className="mx-auto mt-4 text-lg text-muted">
          Your message is on its way. I&apos;ll get back to you as soon as I can,
          usually within a few days.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <Link
              href="/work"
              className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              View my work
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href="/"
              className="inline-block rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
            >
              Back home
            </Link>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}
