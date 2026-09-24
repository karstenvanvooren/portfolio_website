import { ImageResponse } from "next/og";

export const alt = "Karsten van Vooren, Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "#fe5e1f";

export default function Image() {
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
          background: "#fafaf9",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 24,
            background: ACCENT,
            color: "#ffffff",
            fontSize: 72,
            fontWeight: 900,
            marginBottom: 48,
          }}
        >
          K
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#14140f",
            lineHeight: 1.1,
          }}
        >
          Karsten van Vooren
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 34,
            fontWeight: 600,
            color: ACCENT,
          }}
        >
          UX/UI Design Student
        </div>
      </div>
    ),
    { ...size }
  );
}
