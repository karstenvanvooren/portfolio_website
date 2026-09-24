"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SPACING = 16;
const RADIUS = 2.4;
const DOT_COLOR = "254, 94, 31"; // --accent, matches the hero's dot grid

const FORM_MS = 550; // dots pop in to form the K, inside-out
const HOLD_MS = 200; // K sits still for a beat
const BURST_MS = 700; // dots fly outward from the K and fade
const EXIT_MS = 350; // whole overlay fades to reveal the page

const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);
const easeInCubic = (t: number) => t * t * t;

type Dot = {
  x: number;
  y: number;
  dirX: number;
  dirY: number;
  formDelay: number;
  formDuration: number;
};

// A brief branded loading screen on first paint (page open/refresh), not
// on client-side navigations — it lives in the root layout and only ever
// mounts once per real page load. Dots pop in to form a "K", hold for a
// beat, then burst outward and fade as the page underneath is revealed.
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

    const cx = width / 2;
    const cy = height / 2;

    // Render a big "K" offscreen, then sample it on the dot grid: any grid
    // point landing on an opaque pixel becomes one of the letter's dots.
    const mask = document.createElement("canvas");
    mask.width = width;
    mask.height = height;
    const mctx = mask.getContext("2d")!;
    mctx.fillStyle = "#000";
    mctx.textAlign = "center";
    mctx.textBaseline = "middle";
    mctx.font = `900 ${Math.min(width, height) * 0.55}px Arial, sans-serif`;
    mctx.fillText("K", cx, cy);
    const pixels = mctx.getImageData(0, 0, width, height).data;

    const dots: Dot[] = [];
    const cols = Math.ceil(width / SPACING);
    const rows = Math.ceil(height / SPACING);
    let maxDist = 1;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * SPACING;
        const y = row * SPACING;
        const idx = (Math.floor(y) * width + Math.floor(x)) * 4;
        if (pixels[idx + 3] <= 128) continue;

        const dist = Math.hypot(x - cx, y - cy);
        maxDist = Math.max(maxDist, dist);
        dots.push({
          x,
          y,
          dirX: dist > 0 ? (x - cx) / dist : 0,
          dirY: dist > 0 ? (y - cy) / dist : -1,
          formDelay: 0, // filled in below once maxDist is known
          formDuration: FORM_MS * 0.45,
        });
      }
    }
    for (const dot of dots) {
      const dist = Math.hypot(dot.x - cx, dot.y - cy);
      dot.formDelay = (dist / maxDist) * (FORM_MS * 0.5);
    }

    const burstDistance = Math.max(width, height) * 0.7;
    let raf = 0;
    const start = performance.now();

    function draw(now: number) {
      const elapsed = now - start;
      ctx!.clearRect(0, 0, width, height);

      for (const dot of dots) {
        let opacity = 0;
        let scale = 0;
        let dx = 0;
        let dy = 0;

        if (elapsed < FORM_MS) {
          const local = Math.max(
            0,
            Math.min(1, (elapsed - dot.formDelay) / dot.formDuration)
          );
          opacity = local;
          scale = local;
        } else if (elapsed < FORM_MS + HOLD_MS) {
          opacity = 1;
          scale = 1;
        } else {
          const t = Math.max(
            0,
            Math.min(1, (elapsed - FORM_MS - HOLD_MS) / BURST_MS)
          );
          const eased = easeOutQuint(t);
          dx = dot.dirX * eased * burstDistance;
          dy = dot.dirY * eased * burstDistance;
          opacity = 1 - easeInCubic(t);
          scale = 1 + eased * 0.6;
        }

        if (opacity <= 0) continue;
        ctx!.beginPath();
        ctx!.arc(dot.x + dx, dot.y + dy, RADIUS * scale, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${DOT_COLOR}, ${opacity})`;
        ctx!.fill();
      }

      if (elapsed < FORM_MS + HOLD_MS + BURST_MS) raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);
    const hideTimer = setTimeout(
      () => setVisible(false),
      FORM_MS + HOLD_MS + BURST_MS
    );

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
          className="pointer-events-none fixed inset-0 z-[9999] bg-background"
        >
          <canvas ref={canvasRef} aria-hidden className="h-full w-full" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
