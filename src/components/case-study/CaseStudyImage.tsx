import Image from "next/image";
import type { CaseImage } from "@/content/projects";
import { findPublicFile } from "@/lib/findPublicImage";

// One case study image from public/images/projects/<slug>/. While the file
// doesn't exist yet, renders a grey box with the expected path, so it's
// obvious on the page which image still needs to be added.
export default function CaseStudyImage({
  slug,
  image,
  aspect = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  showCaption = true,
}: {
  slug: string;
  image: CaseImage;
  /** Tailwind aspect-ratio class for the frame. */
  aspect?: string;
  sizes?: string;
  showCaption?: boolean;
}) {
  const relativePath = `images/projects/${slug}/${image.file}`;
  const src = findPublicFile(relativePath);

  return (
    <figure>
      <div className={`relative w-full overflow-hidden rounded-2xl ${aspect} ${src ? "bg-surface" : ""}`}>
        {src ? (
          <Image src={src} alt={image.alt} fill sizes={sizes} className="object-contain" />
        ) : (
          <div
            role="img"
            aria-label={`${image.alt} (image coming soon)`}
            className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-2xl border border-dashed border-muted/40 bg-border/60 p-4 text-center"
          >
            <span className="text-xs font-medium uppercase tracking-wide text-muted">
              Image coming soon
            </span>
            <code className="break-all text-xs text-muted">{relativePath}</code>
          </div>
        )}
      </div>
      {showCaption && image.caption && (
        <figcaption className="mt-3 text-sm text-muted">{image.caption}</figcaption>
      )}
    </figure>
  );
}
