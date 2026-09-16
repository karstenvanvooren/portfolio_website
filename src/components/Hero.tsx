"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import DotGrid from "@/components/DotGrid";
import Magnetic from "@/components/Magnetic";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[62vh] flex-col justify-center overflow-hidden bg-background px-6 py-16 text-foreground sm:px-10">
      <DotGrid />

      <div className="relative mx-auto w-full max-w-[1600px]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-accent"
        >
          {/* Replace with your real focus / school */}
          UX/UI Design Student
        </motion.p>

        <h1 className="font-display text-[15vw] font-semibold leading-[0.88] tracking-tight sm:text-[7.5rem]">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="block"
          >
            Karsten
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            className="block"
          >
            van&nbsp;Vooren
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
          className="mt-8 max-w-lg text-lg leading-relaxed text-muted"
        >
          I design interfaces and build them end to end, turning ideas into
          real, working products. Open to freelance work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <Link
              href="#work"
              className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              View my work
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href="/contact"
              className="inline-block rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
            >
              Get in touch
            </Link>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
