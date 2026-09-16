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
