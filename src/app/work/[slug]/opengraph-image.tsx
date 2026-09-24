import { ImageResponse } from "next/og";
import { getProject } from "@/data/projects";

export const alt = "Case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "#fe5e1f";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#14120f",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 4,
            color: ACCENT,
          }}
        >
          Case study
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 68,
            fontWeight: 800,
            color: "#f6f3ee",
            lineHeight: 1.1,
          }}
        >
          {project?.title ?? "Karsten van Vooren"}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            fontWeight: 500,
            color: "#f6f3ee",
            opacity: 0.7,
          }}
        >
          Karsten van Vooren
        </div>
      </div>
    ),
    { ...size }
  );
}
