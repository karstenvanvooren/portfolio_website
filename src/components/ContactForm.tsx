"use client";

import { useState, type FormEvent } from "react";
import Magnetic from "@/components/Magnetic";

// Free, no-signup form backend — https://web3forms.com. This key is
// meant to be public (it's embedded client-side by design, like a
// mailing address), it just tells Web3Forms where to deliver the
// message. Get your own at web3forms.com and swap it in here.
const WEB3FORMS_ACCESS_KEY = "YOUR-WEB3FORMS-ACCESS-KEY";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", "New message from your portfolio site");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await res.json();
      if (result.success) {
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
      <div className="rounded-2xl border border-border bg-surface px-6 py-12 text-center">
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
            className="border-b border-border bg-transparent py-2 text-sm text-foreground outline-none transition-colors focus:border-accent"
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
            className="border-b border-border bg-transparent py-2 text-sm text-foreground outline-none transition-colors focus:border-accent"
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
          className="resize-none border-b border-border bg-transparent py-2 text-sm text-foreground outline-none transition-colors focus:border-accent"
        />
      </div>

      {/* Honeypot — hidden from real visitors, catches basic spam bots */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

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
          <p className="text-sm text-muted">
            Something went wrong — try again, or email me directly below.
          </p>
        )}
      </div>
    </form>
  );
}
