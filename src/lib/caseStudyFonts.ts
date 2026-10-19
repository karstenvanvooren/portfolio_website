import { Montserrat, Poppins, Roboto_Slab, Rubik, Syne } from "next/font/google";
import type { SpecimenFont } from "@/content/projects";

// Fonts for the case study style guides, so each type specimen shows the
// project's real typeface. preload: false, so they're only downloaded on
// the case study that actually renders them, not on every page.
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", preload: false });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", preload: false });
const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik", preload: false });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
  preload: false,
});
// Stand-in for Egyptian Slate Pro (Voedselbank timer), which isn't
// available as a web font: a similar bold slab serif.
const slab = Roboto_Slab({ subsets: ["latin"], variable: "--font-slab", preload: false });

/** Put this on the style guide wrapper so the variables are defined. */
export const specimenFontVariables = [syne, montserrat, rubik, poppins, slab]
  .map((font) => font.variable)
  .join(" ");

/** CSS font-family for a specimen font (Inter comes from the root layout). */
export const specimenFontFamily: Record<SpecimenFont, string> = {
  inter: "var(--font-inter), sans-serif",
  syne: "var(--font-syne), sans-serif",
  montserrat: "var(--font-montserrat), sans-serif",
  rubik: "var(--font-rubik), sans-serif",
  poppins: "var(--font-poppins), sans-serif",
  slab: "var(--font-slab), serif",
};
