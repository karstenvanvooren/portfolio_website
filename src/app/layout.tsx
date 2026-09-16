import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Self-hosted — Satoshi isn't on Google Fonts (it's distributed via
// Fontshare), so it's downloaded once into src/fonts and loaded locally.
const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    { path: "../fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Karsten van Vooren - Portfolio",
  description:
    "Portfolio of Karsten van Vooren, a UX/UI design student building product case studies and freelance work.",
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
      </body>
    </html>
  );
}
