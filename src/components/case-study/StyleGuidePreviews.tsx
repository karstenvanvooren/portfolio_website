import type { ReactNode } from "react";
import { specimenFontFamily } from "@/lib/caseStudyFonts";

// Live HTML/CSS recreations of each project's key UI components, shown in
// the case study's style guide (when its content sets componentPreview).
// They're static and decorative: aria-hidden on the visuals, with a text
// label under each one.

function Item({ label, children, dark = false }: { label: string; children: ReactNode; dark?: boolean }) {
  return (
    <figure className="flex flex-col">
      <div
        aria-hidden="true"
        className={`flex min-h-36 flex-1 items-center justify-center rounded-xl border p-6 ${
          dark ? "border-transparent" : "border-border bg-white"
        }`}
        style={dark ? { backgroundColor: "#0B1020" } : undefined}
      >
        {children}
      </div>
      <figcaption className="mt-2 text-sm text-muted">{label}</figcaption>
    </figure>
  );
}

/* ---------- Digitap ---------- */

const AP_RED = "#DE2F38";
const BORDER_GREY = "#DADADA";

function DigitapPreview() {
  const steps = ["Info", "Verify", "Role", "Review"];
  return (
    <div className="grid gap-4 sm:grid-cols-2" style={{ fontFamily: specimenFontFamily.inter }}>
      <Item label="4-step progress stepper">
        <div className="flex w-full max-w-xs items-start">
          {steps.map((step, i) => (
            <div key={step} className="flex flex-1 flex-col items-center gap-1.5">
              <div className="flex w-full items-center">
                <span className="h-0.5 flex-1" style={{ background: i === 0 ? "transparent" : BORDER_GREY }} />
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={
                    i === 0
                      ? { background: AP_RED, color: "#fff" }
                      : { background: "#fff", color: "#9a9a9a", border: `1px solid ${BORDER_GREY}` }
                  }
                >
                  {i + 1}
                </span>
                <span
                  className="h-0.5 flex-1"
                  style={{ background: i === steps.length - 1 ? "transparent" : BORDER_GREY }}
                />
              </div>
              <span className="text-[11px]" style={{ color: i === 0 ? "#000" : "#9a9a9a" }}>
                {step}
              </span>
            </div>
          ))}
        </div>
      </Item>

      <Item label="Text input">
        <div className="w-full max-w-xs">
          <p className="mb-1.5 text-sm font-medium text-black">Email</p>
          <div
            className="flex items-center px-3 text-base italic"
            style={{ height: 43, border: `1px solid ${BORDER_GREY}`, borderRadius: 4, color: BORDER_GREY }}
          >
            Enter your email address
          </div>
        </div>
      </Item>

      <Item label="Primary button and its disabled state">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-6 py-2.5 text-sm font-medium text-white" style={{ background: AP_RED, borderRadius: 8 }}>
            Next
          </span>
          <span
            className="bg-white px-6 py-2.5 text-sm font-medium"
            style={{ border: `1px solid ${BORDER_GREY}`, color: BORDER_GREY, borderRadius: 8 }}
          >
            Next
          </span>
        </div>
      </Item>

      <Item label="Tab bar">
        <div className="flex w-full max-w-xs justify-between text-sm" style={{ borderBottom: `1px solid ${BORDER_GREY}` }}>
          {["Content", "Documents", "Assignments", "Forums"].map((tab, i) => (
            <span
              key={tab}
              className="-mb-px px-1 pb-2"
              style={
                i === 2
                  ? { color: "#000", fontWeight: 600, borderBottom: `2px solid ${AP_RED}` }
                  : { color: "#7a7a7a" }
              }
            >
              {tab}
            </span>
          ))}
        </div>
      </Item>
    </div>
  );
}

/* ---------- Eduvik ---------- */

const NAVY = "#1A3F62";
const TURQUOISE = "#2CB8A9";
const HEXAGON = "polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0% 50%)";
const HEXAGON_UPRIGHT = "polygon(50% 0%, 97% 25%, 97% 75%, 50% 100%, 3% 75%, 3% 25%)";

function RankBadge({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span
        className="flex h-11 w-10 items-center justify-center"
        style={{ clipPath: HEXAGON_UPRIGHT, background: color }}
      >
        <span className="text-sm text-white">★</span>
      </span>
      <span className="text-xs font-bold" style={{ color: NAVY }}>
        {label}
      </span>
    </div>
  );
}

function EduvikPreview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2" style={{ fontFamily: specimenFontFamily.montserrat }}>
      <Item label="Hexagon home button (bottom navigation)">
        <span className="flex h-14 w-16 items-center justify-center" style={{ clipPath: HEXAGON, background: TURQUOISE }}>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="white">
            <path d="M12 3 3 10.5V21h6v-6h6v6h6V10.5z" />
          </svg>
        </span>
      </Item>

      <Item label="Rank badges with progress bar">
        <div className="flex w-full max-w-xs items-center gap-3">
          <RankBadge color="#B07A4A" label="Bronze 3" />
          <div className="h-3 flex-1 overflow-hidden rounded-full bg-[#E4E8EC]">
            <div className="h-full w-[62%] rounded-full" style={{ background: TURQUOISE }} />
          </div>
          <RankBadge color="#8E9AA6" label="Silver 1" />
        </div>
      </Item>

      <Item label="Goal row">
        <div
          className="flex w-full max-w-xs items-center justify-between rounded-lg px-4 py-3 text-sm"
          style={{ border: "1px solid #D5DCE2", color: "#2C2B2B" }}
        >
          <span className="font-semibold">Number of lessons</span>
          <span className="font-bold" style={{ color: NAVY }}>
            5/8
          </span>
        </div>
      </Item>

      <Item label="Primary call to action">
        <span
          className="inline-flex items-center gap-3 rounded-md px-5 py-3 text-sm font-semibold text-white"
          style={{ background: NAVY }}
        >
          Plan new lesson
          <span aria-hidden="true">→</span>
        </span>
      </Item>
    </div>
  );
}

/* ---------- Voedselbank Game ---------- */

const GREEN = "#5AD12D";
const RED = "#FF0000";

function GameTile({ icon, state }: { icon: string; state?: "correct" | "wrong" }) {
  return (
    <span className="relative flex h-16 w-16 items-center justify-center rounded-[22px] bg-white text-3xl shadow-sm">
      {state ? (
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold text-white"
          style={{ background: state === "correct" ? GREEN : RED }}
        >
          {state === "correct" ? "✓" : "✕"}
        </span>
      ) : (
        icon
      )}
    </span>
  );
}

function VoedselbankPreview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2" style={{ fontFamily: specimenFontFamily.rubik }}>
      <Item label="Game tiles: food, correct, wrong">
        <div
          className="flex gap-3 rounded-2xl p-4"
          style={{ background: "linear-gradient(180deg, #E8E9E9, #C8C8C8)" }}
        >
          <GameTile icon="🍎" />
          <GameTile icon="🍎" state="correct" />
          <GameTile icon="🍔" state="wrong" />
        </div>
      </Item>

      <Item label="Progress bar">
        <div className="w-full max-w-xs">
          <p className="mb-2 text-center text-lg" style={{ color: "#2C2C2C" }}>
            Vooruitgang
          </p>
          <div className="h-5 overflow-hidden rounded-full" style={{ background: "#D9D9D9" }}>
            <div className="h-full w-[55%] rounded-full" style={{ background: GREEN }} />
          </div>
        </div>
      </Item>

      <Item label="Timer and title on a location photo" dark>
        <div
          className="flex w-full max-w-xs flex-col items-center gap-1 rounded-xl py-6"
          style={{ background: "linear-gradient(135deg, #6f8f6a, #9db0b8 55%, #c8b89a)" }}
        >
          <span
            className="text-3xl font-bold text-white"
            style={{ fontFamily: specimenFontFamily.slab, textShadow: "0 2px 6px rgba(0,0,0,.35)" }}
          >
            TIJD 9:50
          </span>
          <span className="text-2xl font-bold text-white" style={{ textShadow: "0 2px 6px rgba(0,0,0,.35)" }}>
            SLEEP FINN
          </span>
        </div>
      </Item>
    </div>
  );
}

/* ---------- Beweeg Baai ---------- */

const CYAN = "#7BDFF2";
const MINT = "#B2F7EF";

function BeweegBaaiPreview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2" style={{ fontFamily: specimenFontFamily.poppins }}>
      <Item label="Floating info button" dark>
        <span
          className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold shadow-lg"
          style={{ background: "#12183A", color: CYAN, border: `1px solid ${CYAN}55`, boxShadow: `0 0 24px ${CYAN}33` }}
        >
          i
        </span>
      </Item>

      <Item label="Camera button" dark>
        <span className="rounded-full px-6 py-3 text-sm font-semibold" style={{ background: CYAN, color: "#0B1020" }}>
          Camera aanzetten
        </span>
      </Item>

      <div className="sm:col-span-2">
        <Item label="Wave preview (in the installation it changes hue with your movement)" dark>
          <svg viewBox="0 0 375 100" className="h-24 w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="beweeg-wave" x1="0" x2="1">
                <stop offset="0" stopColor={CYAN} />
                <stop offset="1" stopColor={MINT} />
              </linearGradient>
            </defs>
            <path
              d="M0 50 C 25 15, 50 15, 75 50 S 125 85, 150 50 S 200 10, 225 50 S 275 90, 300 50 S 350 20, 375 50"
              fill="none"
              stroke="url(#beweeg-wave)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M0 55 C 30 30, 60 30, 90 55 S 150 80, 180 55 S 240 25, 270 55 S 330 80, 360 55 S 375 45, 375 48"
              fill="none"
              stroke={CYAN}
              strokeOpacity="0.35"
              strokeWidth="2"
            />
          </svg>
        </Item>
      </div>
    </div>
  );
}

export const styleGuidePreviews: Record<string, () => ReactNode> = {
  digitap: DigitapPreview,
  eduvik: EduvikPreview,
  "voedselbank-game": VoedselbankPreview,
  "beweeg-baai": BeweegBaaiPreview,
};
