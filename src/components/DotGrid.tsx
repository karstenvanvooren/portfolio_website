"use client";

import { useEffect, useRef } from "react";

const SPACING = 26;
const BASE_RADIUS = 1.4;
const MAX_RADIUS = 3.4;
const INFLUENCE = 170;
const REPEL_RADIUS = 150;
const MAX_PUSH = 22;
const EASE = 0.14;
const DOT_COLOR = "254, 94, 31"; // --accent, as an rgb triplet for canvas

// A faint grid of dots that lights up in a soft cluster around the cursor,
// easing toward it each frame instead of snapping — the effect from
// sandeep.design's hero, recolored orange for this site.
export default function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const pointer = { x: -9999, y: -9999 };
    const smoothed = { x: -9999, y: -9999 };

    function resize() {
      width = parent!.clientWidth;
      height = parent!.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function handlePointerMove(e: PointerEvent) {
      const rect = parent!.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    }

    function handlePointerLeave() {
      pointer.x = -9999;
      pointer.y = -9999;
    }

    let raf = 0;
    function draw() {
      smoothed.x += (pointer.x - smoothed.x) * EASE;
      smoothed.y += (pointer.y - smoothed.y) * EASE;

      ctx!.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * SPACING;
          const y = row * SPACING;
          const dx = x - smoothed.x;
          const dy = y - smoothed.y;
          const dist = Math.hypot(dx, dy) || 0.0001;

          const glowT = Math.max(0, 1 - dist / INFLUENCE);
          const radius = BASE_RADIUS + glowT * (MAX_RADIUS - BASE_RADIUS);
          const opacity = 0.1 + glowT * 0.8;

          // Push the dot away from the cursor, strongest right next to it
          // and fading to no displacement past REPEL_RADIUS.
          const pushT = Math.max(0, 1 - dist / REPEL_RADIUS);
          const push = pushT * pushT * MAX_PUSH;
          const px = x + (dx / dist) * push;
          const py = y + (dy / dist) * push;

          ctx!.beginPath();
          ctx!.arc(px, py, radius, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${DOT_COLOR}, ${opacity})`;
          ctx!.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    }

    // Reduced motion: draw the grid once at rest, with no cursor tracking,
    // repel displacement, or per-frame loop.
    function drawStatic() {
      ctx!.clearRect(0, 0, width, height);
      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          ctx!.beginPath();
          ctx!.arc(col * SPACING, row * SPACING, BASE_RADIUS, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${DOT_COLOR}, 0.1)`;
          ctx!.fill();
        }
      }
    }

    resize();

    if (prefersReduced) {
      drawStatic();
      const ro = new ResizeObserver(() => {
        resize();
        drawStatic();
      });
      ro.observe(parent);
      return () => ro.disconnect();
    }

    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    parent.addEventListener("pointermove", handlePointerMove);
    parent.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      parent.removeEventListener("pointermove", handlePointerMove);
      parent.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <canvas ref={canvasRef} aria-hidden className="pointer-events-none absolute inset-0" />
  );
}
