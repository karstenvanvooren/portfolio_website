import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SplitSection from "@/components/SplitSection";
import Timeline, { type TimelineItem } from "@/components/Timeline";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import DownloadCvButton from "@/components/DownloadCvButton";
import { findPublicImage } from "@/lib/findPublicImage";

export const metadata: Metadata = {
  title: "About",
  description:
    "UX/UI Design Student at AP Hogeschool Antwerpen, looking for a UX/UI internship in semester 2 of 2026–27. Education, experience, skills and languages.",
  alternates: { canonical: "/about" },
};

const education: TimelineItem[] = [
  {
    date: "2023–now",
    title: "Graphic & Digital Media (Interface Design)",
    place: "AP Hogeschool Antwerpen",
  },
  {
    date: "2022–2023",
    title: "Rehabilitation Sciences & Physiotherapy",
    place: "University of Antwerp · not completed",
  },
  {
    date: "2016–2022",
    title: "Technical Physical Education",
    place: "KA Beveren",
  },
];

const experience: TimelineItem[] = [
  {
    date: "Oct 2023–now",
    title: "Cashier",
    place: "Brico Beveren",
    description: "Customer service at the checkout and on the shop floor, handling payments.",
  },
  {
    date: "Jan–Mar 2023",
    title: "Delivery driver",
    place: "King Ribs Beveren",
    description: "Delivering orders on time, customer contact at the door.",
  },
  {
    date: "Aug 2022",
    title: "Production worker",
    place: "AGFA-Gevaert",
    description: "Summer job, working within safety and quality procedures.",
  },
];

const skillGroups = [
  {
    label: "UX/UI",
    skills: ["User flows", "Wireframing", "Prototyping", "UI design", "Design systems"],
  },
  {
    label: "Design tools",
    skills: ["Figma", "Illustrator", "Photoshop", "After Effects", "InDesign", "WordPress"],
  },
  {
    label: "Development",
    skills: ["React / Next.js", "React Native / Expo", "Node.js / Express", "MongoDB"],
  },
];

const languages = [
  { name: "Dutch", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Basic" },
];

const values = [
  {
    title: "Clarity first",
    description:
      "A good interface shouldn't make someone stop and think about how to use it.",
  },
  {
    title: "Usability over decoration",
    description:
      "Design is more than a nice picture. It has to genuinely work for the person using it.",
  },
  {
    title: "End to end",
    description:
      "I like owning the whole process: research and design through to a real, shipped product.",
  },
];

export default function AboutPage() {
  const photo = findPublicImage("images/profile", "photo");

  return (
    <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10">
      <div className="mb-16 grid gap-10 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:items-start sm:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-ink">
            {photo ? (
              <Image
                src={photo}
                alt="Karsten van Vooren"
                fill
                sizes="(min-width: 640px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            ) : (
              <>
                <div className="gradient-blob absolute inset-0 opacity-80" />
                <span className="relative flex h-full items-center justify-center font-display text-sm font-medium uppercase tracking-wide text-ink-foreground">
                  Photo
                </span>
              </>
            )}
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-accent-text">About</p>
            <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
              I&apos;m a UX/UI Design Student studying Interface Design.
            </h1>
            <AvailabilityBadge className="mt-6" />
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-6 leading-relaxed text-muted">
              I&apos;m a creative and social designer with a passion for UX/UI
              and web design. I love creating beautiful, user-friendly designs
              that make a real impact. I&apos;m looking for an internship where
              I can further develop my skills and work with driven, like-minded
              people. I&apos;m open and direct in my communication and enjoy
              creating designs that are clear and accessible to everyone.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6 lg:grid-cols-4">
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">Based in</dt>
                <dd className="mt-1 text-sm font-medium">Beveren, BE</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted">Focus</dt>
                <dd className="mt-1 text-sm font-medium">UX/UI Design</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-xs uppercase tracking-wide text-muted">Studying</dt>
                <dd className="mt-1 text-sm font-medium">
                  Graphic &amp; Digital Media (Interface Design), AP Hogeschool Antwerpen
                </dd>
              </div>
              <div className="col-span-2">
                <dt className="text-xs uppercase tracking-wide text-muted">Open to</dt>
                <dd className="mt-1 text-sm font-medium">Internship (semester 2, 2026–27)</dd>
              </div>
            </dl>
            <DownloadCvButton className="mt-8" />
          </Reveal>
        </div>
      </div>

      <SplitSection label="Education">
        <Timeline items={education} />
      </SplitSection>

      <SplitSection label="Experience">
        <Timeline items={experience} />
      </SplitSection>

      <SplitSection label="Skills">
        <div className="space-y-5">
          {skillGroups.map((group) => (
            <div key={group.label} className="grid gap-2 sm:grid-cols-[160px_1fr] sm:items-start sm:gap-8">
              <h3 className="pt-1.5 text-xs uppercase tracking-wide text-muted">{group.label}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SplitSection>

      <SplitSection label="Languages">
        <dl className="flex max-w-xl flex-col">
          {languages.map((language) => (
            <div
              key={language.name}
              className="flex items-baseline justify-between border-b border-border py-3 last:border-b-0"
            >
              <dt className="font-medium">{language.name}</dt>
              <dd className="text-sm text-muted">{language.level}</dd>
            </div>
          ))}
        </dl>
      </SplitSection>

      <SplitSection label="Interests">
        <p className="max-w-xl leading-relaxed text-muted">
          Football &amp; futsal (18 years), gaming, music and fashion.
        </p>
      </SplitSection>

      <SplitSection label="What I care about" className="pb-4">
        <div className="grid gap-10 sm:grid-cols-3">
          {values.map((value) => (
            <Reveal key={value.title}>
              <h3 className="font-display text-lg font-semibold tracking-tight">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
            </Reveal>
          ))}
        </div>
      </SplitSection>
    </div>
  );
}
