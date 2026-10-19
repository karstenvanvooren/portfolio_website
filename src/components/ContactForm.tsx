"use client";

import { useState, type FormEvent } from "react";
import Magnetic from "@/components/Magnetic";

// Submits to Netlify Forms. Next.js pages aren't static HTML, so the form
// is declared in public/__forms.html (Netlify detects it there at deploy
// time) and this component posts to that file. Form name and field names
// must match that file. Submissions show up in Netlify under Forms.
const FORM_NAME = "contact";
const FORM_ENDPOINT = "/__forms.html";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-border bg-surface px-6 py-12 text-center">
        <p className="font-display text-lg font-semibold tracking-tight">Message sent.</p>
        <p className="mt-2 text-sm text-muted">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full text-left">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs uppercase tracking-wide text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="rounded-sm border-b border-border bg-transparent py-2 text-sm text-foreground outline-2 outline-offset-2 transition-colors focus:border-accent-text"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs uppercase tracking-wide text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="rounded-sm border-b border-border bg-transparent py-2 text-sm text-foreground outline-2 outline-offset-2 transition-colors focus:border-accent-text"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs uppercase tracking-wide text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="resize-none rounded-sm border-b border-border bg-transparent py-2 text-sm text-foreground outline-2 outline-offset-2 transition-colors focus:border-accent-text"
        />
      </div>

      <input type="hidden" name="form-name" value={FORM_NAME} />
      {/* Honeypot — hidden from real visitors, catches basic spam bots.
          Declared as netlify-honeypot in public/__forms.html. */}
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="mt-8 flex items-center gap-4">
        <Magnetic>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
        </Magnetic>
        {status === "error" && (
          <p role="alert" className="text-sm text-foreground">
            Something went wrong and your message wasn&apos;t sent. Try again,
            or email me directly below.
          </p>
        )}
      </div>
    </form>
  );
}
