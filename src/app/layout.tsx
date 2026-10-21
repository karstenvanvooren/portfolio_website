import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import MobileCta from "@/components/MobileCta";
import Analytics from "@/components/Analytics";
import StructuredData from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Self-hosted — Satoshi isn't on Google Fonts (it's distributed via
// Fontshare), so it's downloaded once into src/fonts and loaded locally.
// Only the weights the site uses: font-display text is always
// font-medium (500) or font-semibold, which renders with the 700 file.
const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    { path: "../fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Karsten van Vooren – UX/UI Designer",
    template: "%s – Karsten van Vooren",
  },
  description:
    "Portfolio of Karsten van Vooren, UX/UI design student at AP Hogeschool Antwerpen, based in Beveren. Case studies in UX/UI design and development.",
  // No image thumbnail next to the result in Google Search. The Open Graph /
  // Twitter images still work for link previews (LinkedIn, WhatsApp, ...).
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "none" },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${satoshi.variable} antialiased`}
    >
      {/* min-h-dvh (viewport units) instead of the old h-full/min-h-full
          chain — that chain needs html to have an explicit height, which
          conflicts with Lenis's own recommended CSS (html.lenis has
          height: auto) and was capping scrollable content to one
          viewport tall. */}
      <body className="flex min-h-dvh flex-col bg-background font-sans text-foreground">
        <Preloader />
        <SmoothScroll />
        <CustomCursor />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCta />
        <Analytics />
        <StructuredData />
      </body>
    </html>
  );
}
