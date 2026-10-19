import type { Metadata } from "next";
import Link from "next/link";
import SplitSection from "@/components/SplitSection";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Karsten van Vooren's portfolio site handles your data: the contact form, hosting and cookieless analytics.",
};

// Plain-language privacy policy (GDPR). Keep "Last updated" current when
// anything here changes, e.g. a different form or analytics provider.
const LAST_UPDATED = "19 October 2026";

const linkClass = "link-underline text-accent-text";
const subheadingClass = "mt-6 font-medium text-foreground";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 pb-20 sm:px-10">
      <div className="py-16">
        <p className="text-sm font-medium uppercase tracking-widest text-accent-text">Legal</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
          Privacy policy
        </h1>
        <p className="mt-4 text-sm text-muted">Last updated: {LAST_UPDATED}</p>
      </div>

      <div>
        <SplitSection label="Who I am">
          <div className="max-w-2xl space-y-3 leading-relaxed text-muted">
            <p>
              This is the personal portfolio of Karsten van Vooren, based in
              Beveren, Belgium. I&apos;m responsible for the personal data
              collected through this site. Questions about your data? Email{" "}
              <a className={linkClass} href="mailto:karstenvanvooren@gmail.com">karstenvanvooren@gmail.com</a>.
            </p>
          </div>
        </SplitSection>

        <SplitSection label="What I collect">
          <div className="max-w-2xl space-y-3 leading-relaxed text-muted">
            <h3 className="font-medium text-foreground">Contact form</h3>
            <p>
              When you send a message, I receive your name, email address and
              message. I use them only to reply to you. They&apos;re never sold
              or shared for marketing. The form is processed and stored by my
              hosting provider, Netlify (see below).
            </p>
            <p>
              I keep messages as long as needed to handle your question or
              application, and delete them at the latest 12 months after our
              last contact.
            </p>

            <h3 className={subheadingClass}>Hosting</h3>
            <p>
              This site is hosted by Netlify, Inc. Like any web server, it
              processes technical data such as your IP address and browser type
              to deliver pages and keep the site secure. See{" "}
              <a className={linkClass} href="https://www.netlify.com/privacy/" target="_blank" rel="noreferrer">
                Netlify&apos;s privacy policy
              </a>
              .
            </p>

            <h3 className={subheadingClass}>Analytics</h3>
            <p>
              I use GoatCounter to see which pages are visited. It doesn&apos;t
              use cookies, doesn&apos;t store your IP address and doesn&apos;t
              track you across sites; it only counts page views. See{" "}
              <a className={linkClass} href="https://www.goatcounter.com/help/privacy" target="_blank" rel="noreferrer">
                GoatCounter&apos;s privacy policy
              </a>
              .
            </p>
          </div>
        </SplitSection>

        <SplitSection label="Cookies">
          <div className="max-w-2xl space-y-3 leading-relaxed text-muted">
            <p>
              This site doesn&apos;t use tracking or advertising cookies, so
              there&apos;s no cookie banner. Your browser may store small
              technical preferences, but nothing that identifies you.
            </p>
          </div>
        </SplitSection>

        <SplitSection label="Your rights" className="pb-4">
          <div className="max-w-2xl space-y-3 leading-relaxed text-muted">
            <p>Under the GDPR you have the right to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>see which personal data I have about you;</li>
              <li>have it corrected or deleted;</li>
              <li>object to or restrict how I use it.</li>
            </ul>
            <p>
              Email me and I&apos;ll respond within a month. If you think I
              handle your data incorrectly, you can also file a complaint with
              the Belgian Data Protection Authority (
              <a className={linkClass} href="https://www.dataprotectionauthority.be" target="_blank" rel="noreferrer">
                dataprotectionauthority.be
              </a>
              ).
            </p>
            <p>
              <Link className={linkClass} href="/contact">Back to contact</Link>
            </p>
          </div>
        </SplitSection>
      </div>
    </div>
  );
}
