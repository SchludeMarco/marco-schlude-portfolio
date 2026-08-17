import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} – ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 88% 18%, rgba(84,104,255,0.35), rgba(10,10,10,0) 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 9999,
              backgroundColor: "#5468ff",
            }}
          />
          <span style={{ fontSize: 28, color: "#a1a1aa" }}>
            {profile.contact.email}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#fafafa",
              letterSpacing: "-0.02em",
            }}
          >
            {profile.name}
          </span>
          <span style={{ fontSize: 34, color: "#d4d4d8" }}>
            {profile.title}
          </span>
          <span style={{ fontSize: 26, color: "#a1a1aa", maxWidth: 820 }}>
            {profile.tagline}
          </span>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {profile.focusAreas.slice(0, 5).map((area) => (
            <div
              key={area}
              style={{
                display: "flex",
                fontSize: 22,
                color: "#e4e4e7",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 9999,
                padding: "8px 20px",
              }}
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
