"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import DotGrid from "@/components/DotGrid";
import ScrollCue from "@/components/ScrollCue";
import DownloadCvButton from "@/components/DownloadCvButton";
import Magnetic from "@/components/Magnetic";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[88svh] flex-col justify-end overflow-hidden bg-background px-6 pt-16 pb-12 text-foreground sm:px-10 sm:pb-16">
      <DotGrid />

      <div className="@container relative mx-auto w-full max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-6"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-text">
            UX/UI Design Student
          </p>
        </motion.div>

        {/* Sized in cqw (% of this container's width). "Karsten" is about
            3.15em wide and "van Vooren" about 4.7em, so 15.8cqw makes Karsten
            span half the width on desktop (van Vooren ~75%), and 21cqw
            makes van Vooren fill the width on phones.
            The {" "} between the lines keeps a real space in the text, so
            screen readers and copy/paste get "Karsten van Vooren". */}
        <h1 className="whitespace-nowrap font-display text-[length:21cqw] font-semibold leading-[0.85] tracking-tighter sm:text-[length:15.8cqw]">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="block"
          >
            Karsten
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            className="block"
          >
            van&nbsp;Vooren
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: easeOut }}
          className="mt-8"
        >
          <p className="max-w-md text-lg leading-relaxed text-muted">
            I&apos;m a creative and social designer with a passion for UX/UI
            and web design, and I build what I design.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Link
                href="/work"
                className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                View work
              </Link>
            </Magnetic>
            <Magnetic>
              <DownloadCvButton />
            </Magnetic>
          </div>
        </motion.div>

        {/* Bottom right on desktop, level with the buttons; above the label
            on phones, where the name takes the full width. */}
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
