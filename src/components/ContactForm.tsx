"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Magnetic from "@/components/Magnetic";

// Submits to Netlify Forms. Next.js pages aren't static HTML, so the form
// is declared in public/__forms.html (Netlify detects it there at deploy
// time) and this component posts to that file. Form name and field names
// must match that file. Submissions show up in Netlify under Forms.
// On success, visitors go to /contact/thanks.
const FORM_NAME = "contact";
const FORM_ENDPOINT = "/__forms.html";

type Status = "idle" | "sending" | "error";
type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  if (!name) errors.name = "Please enter your name.";
  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(email)) errors.email = "That doesn't look like an email address, e.g. name@company.com.";
  if (!message) errors.message = "Please write a message.";
  else if (message.length < 10) errors.message = "Your message is a bit short. Add a few more words.";
  return errors;
}

const fieldClass =
  "rounded-sm border-b bg-transparent py-2 text-sm text-foreground outline-2 outline-offset-2 transition-colors focus:border-accent-text";

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function clearError(field: Field) {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const found = validate(data);
    setErrors(found);
    const firstInvalid = (["name", "email", "message"] as Field[]).find((f) => found[f]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(`Form returned ${res.status}`);
      form.reset();
      router.push("/contact/thanks");
    } catch {
      setStatus("error");
    }
  }

  // Shared props for a field: orange border + message when invalid, and
  // the message linked via aria-describedby so screen readers announce it.
  // suppressHydrationWarning: browser autofill / password-manager
  // extensions (e.g. Edge's) add attributes like fdprocessedid to form
  // fields before React loads, which React would report as a mismatch.
  // It only silences attribute differences on this one element.
  function fieldProps(field: Field) {
    const invalid = Boolean(errors[field]);
    return {
      id: field,
      name: field,
      "aria-invalid": invalid || undefined,
      "aria-describedby": invalid ? `${field}-error` : undefined,
      onInput: () => clearError(field),
      suppressHydrationWarning: true,
      className: `${fieldClass} ${invalid ? "border-accent-text" : "border-border"}`,
    };
  }

  function errorText(field: Field) {
    return errors[field] ? (
      <p id={`${field}-error`} className="text-xs text-accent-text">
        {errors[field]}
      </p>
    ) : null;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full text-left">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs uppercase tracking-wide text-muted">
            Name
          </label>
          <input type="text" autoComplete="name" required {...fieldProps("name")} />
          {errorText("name")}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs uppercase tracking-wide text-muted">
            Email
          </label>
          <input type="email" autoComplete="email" required {...fieldProps("email")} />
          {errorText("email")}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs uppercase tracking-wide text-muted">
          Message
        </label>
        <textarea rows={4} required {...fieldProps("message")} className={`${fieldProps("message").className} resize-none`} />
        {errorText("message")}
      </div>

      <input type="hidden" name="form-name" value={FORM_NAME} />
      {/* Honeypot — hidden from real visitors, catches basic spam bots.
          Declared as netlify-honeypot in public/__forms.html. */}
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Magnetic>
          <button
            type="submit"
            suppressHydrationWarning
            disabled={status === "sending"}
            aria-busy={status === "sending"}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {status === "sending" && (
              <span
                aria-hidden="true"
                className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"
              />
            )}
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

      <p className="mt-6 text-xs text-muted">
        I only use your details to reply to you. See the{" "}
        <Link href="/privacy" className="link-underline text-foreground">
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}
