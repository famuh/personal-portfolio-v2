import { ImageResponse } from "next/og";
import { profile } from "@/content/site";

// Generated social preview (LinkedIn / WhatsApp / X). Colors mirror the
// light-theme tokens in globals.css — ImageResponse can't read CSS vars.
export const alt = `${profile.name} — ${profile.roles.join(", ")}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TOKENS = { canvas: "#ffffff", ink: "#0b0b0c", muted: "#5d5d58", accent: "#34d399", line: "#e8e8e4", mint: "#b9f5d8", sky: "#c7e3ff" };

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: TOKENS.canvas,
          backgroundImage: `radial-gradient(circle at 85% 20%, ${TOKENS.mint}, transparent 45%), radial-gradient(circle at 100% 95%, ${TOKENS.sky}, transparent 40%)`,
          color: TOKENS.ink,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 28, color: TOKENS.muted }}>
          <div style={{ width: 16, height: 16, borderRadius: 999, background: TOKENS.accent }} />
          {profile.roles.join(" · ")}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 136, lineHeight: 0.95, letterSpacing: -6, fontWeight: 700 }}>Fadhil</div>
          <div style={{ fontSize: 136, lineHeight: 0.95, letterSpacing: -6, fontWeight: 700 }}>Muhammad</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: `2px solid ${TOKENS.line}`, paddingTop: 28 }}>
          <div style={{ fontSize: 30, maxWidth: 820, color: TOKENS.muted, fontFamily: "sans-serif", lineHeight: 1.35 }}>
            IT consultant, developer and analyst. Requirements, system design, Flutter and Next.js.
          </div>
          <div style={{ fontSize: 24, color: TOKENS.muted }}>Medan, Indonesia</div>
        </div>
      </div>
    ),
    size
  );
}
