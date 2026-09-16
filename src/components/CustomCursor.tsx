"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// A small ring that trails the pointer and grows over clickable elements.
// Only activates for fine pointers (real mice/trackpads) — touch devices
// keep their native behavior untouched.
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

  const hoveringRef = useRef(false);
  hoveringRef.current = hovering;

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    function handleMove(e: PointerEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as Element | null;
      const isInteractive = !!target?.closest(
        'a, button, [role="button"], input, textarea, select'
      );
      if (isInteractive !== hoveringRef.current) setHovering(isInteractive);
    }

    function handleLeave() {
      setVisible(false);
    }

    window.addEventListener("pointermove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ left: springX, top: springY }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: hovering ? 2.2 : 1,
      }}
      transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
      className="pointer-events-none fixed z-[999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent mix-blend-difference"
    />
  );
}
