import { CV_PATH } from "@/lib/site";

// Outlined pill that downloads the CV PDF. `download` saves it straight to
// the visitor's device instead of opening it in a tab.
export default function DownloadCvButton({
  size = "md",
  className = "",
}: {
  // "lg" matches the larger pills on the Contact page.
  size?: "md" | "lg";
  className?: string;
}) {
  return (
    <a
      href={CV_PATH}
      download
      className={`inline-flex items-center gap-2 rounded-full border border-border ${size === "lg" ? "px-7 py-3.5" : "px-6 py-3"} text-sm font-medium transition-colors hover:border-foreground ${className}`}
    >
      Download CV
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
      </svg>
    </a>
  );
}
