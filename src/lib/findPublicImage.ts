import fs from "fs";
import path from "path";

const EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

// Looks for <public>/<dir>/<baseName>.<ext> at render time (server
// components only) and returns its public URL if found, else null. Used
// so dropping a real image into public/images/... "just works" without
// touching any component code.
export function findPublicImage(dir: string, baseName: string): string | null {
  for (const ext of EXTENSIONS) {
    const filePath = path.join(process.cwd(), "public", dir, `${baseName}.${ext}`);
    if (fs.existsSync(filePath)) {
      return `/${dir}/${baseName}.${ext}`;
    }
  }
  return null;
}

// Exact-file version of the above: returns the public URL of
// <public>/<relativePath> if that file exists, else null.
export function findPublicFile(relativePath: string): string | null {
  const filePath = path.join(process.cwd(), "public", relativePath);
  return fs.existsSync(filePath) ? `/${relativePath}` : null;
}

// A project's cover image: `cover.file` from its content if set, otherwise
// cover.(jpg|jpeg|png|webp) in public/images/projects/<slug>/.
export function findProjectCover(project: { slug: string; cover: { file?: string } }): string | null {
  const dir = `images/projects/${project.slug}`;
  return project.cover.file ? findPublicFile(`${dir}/${project.cover.file}`) : findPublicImage(dir, "cover");
}
