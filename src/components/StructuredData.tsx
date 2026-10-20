import { findPublicImage } from "@/lib/findPublicImage";
import { SITE_URL } from "@/lib/site";

// JSON-LD for search engines: who this site is about (Person) and the site
// itself (WebSite). Invisible on the page. "<" is escaped so the JSON can
// never close the script tag early (per the Next.js JSON-LD guide).
export default function StructuredData() {
  const photo = findPublicImage("images/profile", "photo");

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Karsten van Vooren",
    url: SITE_URL,
    ...(photo && { image: `${SITE_URL}${photo}` }),
    jobTitle: "UX/UI Design Student",
    // Current student, so affiliation (alumniOf would mean graduated).
    affiliation: {
      "@type": "EducationalOrganization",
      name: "AP Hogeschool Antwerpen",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beveren",
      addressCountry: "BE",
    },
    sameAs: [
      "https://www.linkedin.com/in/karstenvanvooren/",
      "https://github.com/karstenvanvooren",
      "https://www.instagram.com/vanvoorenkarsten/",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Karsten van Vooren",
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#person` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([person, website]).replace(/</g, "\\u003c") }}
    />
  );
}
