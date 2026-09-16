"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SPACING = 34;
const RADIUS = 2.2;
const DOT_COLOR = "254, 94, 31"; // --accent, matches the hero's dot grid
const REVEAL_MS = 650;
const HOLD_MS = 200;
const EXIT_MS = 400;

// A brief branded loading screen on first paint (page open/refresh), not
// on client-side navigations — it lives in the root layout and only ever
// mounts once per real page load. A ring of dots ripples out from the
// center to fill the screen (the hero's dot grid, at rest), holds for a
// beat, then the whole thing fades to reveal the page.
export default function Preloader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(false);
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cols = Math.ceil(width / SPACING) + 1;
    const rows = Math.ceil(height / SPACING) + 1;
    const cx = width / 2;
    const cy = height / 2;
    const maxDist = Math.hypot(cx, cy) || 1;

    let raf = 0;
    const start = performance.now();

    function draw(now: number) {
      const t = Math.min(1, (now - start) / REVEAL_MS);
      ctx!.clearRect(0, 0, width, height);

      // Soft leading edge: dots pop in as the ripple's radius passes them,
      // instead of snapping on all at once.
      const edge = 0.14;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * SPACING;
          const y = row * SPACING;
          const dist = Math.hypot(x - cx, y - cy) / maxDist;
          const opacity = Math.max(0, Math.min(1, (t - dist) / edge));
          if (opacity <= 0) continue;

          ctx!.beginPath();
          ctx!.arc(x, y, RADIUS, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${DOT_COLOR}, ${opacity * 0.9})`;
          ctx!.fill();
        }
      }

      if (t < 1) raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);
    const hideTimer = setTimeout(() => setVisible(false), REVEAL_MS + HOLD_MS);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-background"
        >
          <canvas ref={canvasRef} aria-hidden className="h-full w-full" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
