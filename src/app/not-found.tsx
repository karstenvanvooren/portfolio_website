import type { Metadata } from "next";
import Link from "next/link";
import DotGrid from "@/components/DotGrid";
import Magnetic from "@/components/Magnetic";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-background px-6 py-20 text-center text-foreground sm:px-10">
      <DotGrid />

      <div className="relative mx-auto max-w-md">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
          Page not found.
        </h1>
        <p className="mx-auto mt-4 text-lg text-muted">
          That page doesn&apos;t exist, or it moved.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <Link
              href="/"
              className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Back home
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href="/work"
              className="inline-block rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
            >
              View my work
            </Link>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}
