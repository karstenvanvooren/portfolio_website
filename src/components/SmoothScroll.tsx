"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Adds inertia/glide to scrolling site-wide. Respects prefers-reduced-motion
// by not initializing at all for people who've asked for less motion.
export default function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      // Smooth-scroll in-page #links too (e.g. the hero's ScrollCue),
      // stopping clear of the fixed header like scroll-mt-24 does natively.
      anchors: { offset: -96 },
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return null;
}
