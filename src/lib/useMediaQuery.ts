"use client";

import { useSyncExternalStore } from "react";

// Whether a CSS media query matches. Server render (and hydration) uses
// `serverValue`, then the real value is applied right after, the same way
// a mount effect would, without setting state inside an effect.
export function useMediaQuery(query: string, serverValue = false) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => serverValue,
  );
}
