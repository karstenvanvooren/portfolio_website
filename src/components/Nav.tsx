"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LiveClock from "@/components/LiveClock";
import Magnetic from "@/components/Magnetic";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 text-foreground backdrop-blur">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-display text-sm font-semibold uppercase tracking-widest">
            Karsten van Vooren
          </span>
          <span className="mt-0.5 flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-muted">
            Beveren, BE
            <span aria-hidden>—</span>
            <span className="tabular-nums">
              <LiveClock />
            </span>
          </span>
        </Link>

        <nav className="hidden gap-6 text-xs font-medium uppercase tracking-widest sm:flex">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`link-underline transition-colors hover:text-foreground ${
                  active ? "is-active text-foreground" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center sm:flex">
          <Magnetic>
            <Link
              href="/contact"
              className="link-underline text-xs font-medium uppercase tracking-widest transition-colors hover:text-accent-text"
            >
              Let&apos;s talk
            </Link>
          </Magnetic>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1">
            <span className="h-px w-4 bg-foreground" />
            <span className="h-px w-4 bg-foreground" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-6 py-3 sm:hidden">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`link-underline inline-block py-2 text-sm font-medium transition-colors hover:text-foreground ${
                  active ? "is-active text-foreground" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="py-2 text-sm font-medium text-accent-text"
          >
            Let&apos;s talk
          </Link>
        </nav>
      )}
    </header>
  );
}
