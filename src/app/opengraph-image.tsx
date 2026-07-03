import { ImageResponse } from "next/og";
import { PROFILE } from "@/lib/data";

export const runtime = "edge";
export const alt = `${PROFILE.name} — AI Automation Builder`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
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
          background: "#0a0a0f",
          color: "#ededf2",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 22,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#6fe3ff",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "linear-gradient(120deg, #ff9d6c, #8b7cff)",
              display: "flex",
            }}
          />
          AI Automation Builder
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>
          Building AI that helps people work better.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#9292a0", marginTop: 32 }}>
          {PROFILE.name} — Customer Success · AI Agents · Business Systems
        </div>
      </div>
    ),
    { ...size }
  );
}
