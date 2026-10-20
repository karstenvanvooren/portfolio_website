import path from "path";
import Image from "next/image";
import type { CaseImage } from "@/content/projects";
import { findPublicFile } from "@/lib/findPublicImage";
import { getImageSize } from "@/lib/imageSize";

/** Public URL + pixel size of a case study image, or null if the file
    doesn't exist (yet). The page uses this to hide missing images. */
export function resolveCaseImage(slug: string, file: string) {
  const relativePath = `images/projects/${slug}/${file}`;
  const src = findPublicFile(relativePath);
  if (!src) return null;
  const size = getImageSize(path.join(process.cwd(), "public", relativePath));
  return size ? { src, ...size } : null;
}

export function caseImageExists(slug: string, image: CaseImage | undefined) {
  return Boolean(image && resolveCaseImage(slug, image.file));
}

// One case study image from public/images/projects/<slug>/, at its own
// aspect ratio (exact width/height, so nothing shifts while it loads).
// Renders nothing if the file is missing.
//
// `frame`: "surface" puts screenshots on a light panel with padding;
// "mockup" uses the orange gradient, for transparent device mockups.
// `maxHeight` caps tall images such as phone screenshots.
export default function CaseStudyImage({
  slug,
  image,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  frame = "surface",
  maxHeight = "max-h-[640px]",
  showCaption = true,
}: {
  slug: string;
  image: CaseImage;
  sizes?: string;
  frame?: "surface" | "mockup";
  maxHeight?: string;
  showCaption?: boolean;
}) {
  const resolved = resolveCaseImage(slug, image.file);
  if (!resolved) return null;

  const frameClass =
    frame === "mockup" ? "mockup-bg p-6 sm:p-10" : "bg-surface p-4 sm:p-6";

  return (
    <figure>
      <div className={`flex justify-center overflow-hidden rounded-2xl ${frameClass}`}>
        <Image
          src={resolved.src}
          alt={image.alt}
          width={resolved.width}
          height={resolved.height}
          sizes={sizes}
          className={`h-auto w-auto max-w-full ${maxHeight}`}
        />
      </div>
      {showCaption && image.caption && (
        <figcaption className="mt-3 text-sm text-muted">{image.caption}</figcaption>
      )}
    </figure>
  );
}
