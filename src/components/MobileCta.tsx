"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CV_PATH } from "@/lib/site";

// Sticky call-to-action bar for phones only (hidden from sm up, where the
// header's "Let's talk" is always visible). Slides in once you've scrolled
// past the first screen, and stays off the contact pages themselves.
export default function MobileCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.startsWith("/contact")) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] transition-all duration-300 sm:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div className="flex gap-2 rounded-full border border-border bg-background/90 p-1.5 shadow-lg shadow-black/10 backdrop-blur">
        <Link
          href="/contact"
          tabIndex={visible ? undefined : -1}
          className="flex-1 rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-accent-foreground"
        >
          Let&apos;s talk
        </Link>
        <a
          href={CV_PATH}
          download
          tabIndex={visible ? undefined : -1}
          className="flex-1 rounded-full px-5 py-3 text-center text-sm font-medium"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
