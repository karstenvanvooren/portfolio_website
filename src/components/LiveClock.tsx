"use client";

import { useEffect, useState } from "react";

// Renders nothing until mounted so the server-rendered markup (which can't
// know the visitor's clock) matches the client on hydration, then ticks
// every second.
export default function LiveClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    function tick() {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    }
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;
  return <span>{time}</span>;
}
