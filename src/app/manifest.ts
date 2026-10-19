import type { MetadataRoute } from "next";

// Web app manifest: name, colours and icons used when the site is added to
// a phone's home screen (Android). iOS uses app/apple-icon.png instead.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Karsten van Vooren — Portfolio",
    short_name: "Karsten",
    description: "Portfolio of Karsten van Vooren, UX/UI Design Student.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf9",
    theme_color: "#fe5e1f",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
