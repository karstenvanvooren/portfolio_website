"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Routes whose top section is the dark "ink" background (hero/closing
// sections) — the nav starts transparent with light text on these, and
// solidifies once you scroll past that section. Every other route has a
// light background at the top, so the nav is solid from the start there.
const darkTopRoutes = new Set(["/", "/contact"]);

const links = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const hasDarkTop = darkTopRoutes.has(pathname);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 64);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !hasDarkTop || scrolled;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        solid
          ? "border-border bg-background/80 text-foreground backdrop-blur"
          : "border-transparent bg-transparent text-ink-foreground"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          {/* Replace with your name */}
          Karsten Van Vooren
        </Link>

        <nav className="hidden gap-8 text-sm font-medium sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                solid ? "text-muted hover:text-foreground" : "text-ink-foreground/70 hover:text-ink-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-9 w-9 items-center justify-center rounded-full border sm:hidden ${
            solid ? "border-border" : "border-ink-foreground/30"
          }`}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1">
            <span className={`h-px w-4 ${solid ? "bg-foreground" : "bg-ink-foreground"}`} />
            <span className={`h-px w-4 ${solid ? "bg-foreground" : "bg-ink-foreground"}`} />
          </div>
        </button>
      </div>

      {open && (
        <nav
          className={`flex flex-col gap-1 border-t px-6 py-3 sm:hidden ${
            solid ? "border-border bg-background" : "border-ink-foreground/20 bg-ink"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-2 text-sm font-medium transition-colors ${
                solid ? "text-muted hover:text-foreground" : "text-ink-foreground/70 hover:text-ink-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
