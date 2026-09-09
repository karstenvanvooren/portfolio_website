"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  // Gentle parallax: the gradient blob drifts toward the cursor.
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 60, damping: 20 });
  const springY = useSpring(y, { stiffness: 60, damping: 20 });
  const blobX = useTransform(springX, [0, 1], ["20%", "80%"]);
  const blobY = useTransform(springY, [0, 1], ["20%", "80%"]);

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <section
      onPointerMove={handlePointerMove}
      className="relative isolate flex min-h-[92vh] flex-col justify-center overflow-hidden bg-ink px-6 py-24 text-ink-foreground"
    >
      {/* Animated gradient blob backdrop, echoes the cover page's dark background */}
      <motion.div
        aria-hidden
        style={{ left: blobX, top: blobY }}
        className="pointer-events-none absolute h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
      >
        <div className="gradient-blob h-full w-full rounded-full" />
      </motion.div>

      <div className="relative mx-auto w-full max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-accent"
        >
          {/* Replace with your real focus / school */}
          UX/UI Design Student
        </motion.p>

        {/* Hollow, see-through headline — the fill is transparent so the
            gradient blob behind it shows through the letterforms. */}
        <h1 className="font-display text-[16vw] font-semibold uppercase leading-[0.85] tracking-tight sm:text-[9rem]">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="hollow-text block"
          >
            Karsten
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            className="block"
          >
            Van&nbsp;Vooren
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
          className="mt-8 max-w-lg text-lg leading-relaxed text-ink-foreground/70"
        >
          {/* Replace with your real pitch */}
          I design interfaces and build them end to end — from Figma to
          working React and React Native apps. Open to freelance work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="#work"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            View my work
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-ink-foreground/25 px-6 py-3 text-sm font-medium transition-colors hover:border-ink-foreground"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
