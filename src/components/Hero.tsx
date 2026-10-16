"use client";

import { motion } from "framer-motion";
import DotGrid from "@/components/DotGrid";
import ScrollCue from "@/components/ScrollCue";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[88svh] flex-col justify-end overflow-hidden bg-background px-6 pt-16 pb-12 text-foreground sm:px-10 sm:pb-16">
      <DotGrid />

      <div className="@container relative mx-auto w-full max-w-[1600px]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-accent-text"
        >
          {/* Replace with your real focus / school */}
          UX/UI Design Student
        </motion.p>

        {/* Sized in cqw (% of this container's width). "Karsten" is about
            3.15em wide and "van Vooren" about 4.7em, so 15.8cqw makes Karsten
            span half the width on desktop (van Vooren ~75%), and 21cqw
            makes van Vooren fill the width on phones. */}
        <h1 className="whitespace-nowrap font-display text-[length:21cqw] font-semibold leading-[0.85] tracking-tighter sm:text-[length:15.8cqw]">
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

        {/* Bottom right on desktop, next to the name; above the label on
            phones, where the name takes the full width. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
          className="absolute right-0 bottom-full mb-6 sm:bottom-0 sm:mb-0"
        >
          <ScrollCue />
        </motion.div>
      </div>
    </section>
  );
}
