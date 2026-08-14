import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

/**
 * Social preview card, generated at build time — no image asset to maintain.
 * Uses only system-safe serif/sans stacks so no font files are fetched.
 */
export const alt = `${profile.name} — ${profile.roles.join(", ")}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background:
            "linear-gradient(135deg, #FBF8FB 0%, #F6F2FB 45%, #FDF3F6 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#7C5AC2",
            fontWeight: 600,
          }}
        >
          {profile.name}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 28,
            fontFamily: "Georgia, serif",
            fontSize: 78,
            lineHeight: 1.08,
            color: "#2B2135",
          }}
        >
          <span>{profile.headline.lead}</span>
          <span style={{ color: "#7C5AC2" }}>{profile.headline.highlight}</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          {profile.roles.map((role) => (
            <div
              key={role}
              style={{
                display: "flex",
                border: "1px solid #DCCFF0",
                background: "rgba(255,255,255,0.7)",
                borderRadius: 999,
                padding: "12px 26px",
                fontSize: 24,
                color: "#4A3D57",
              }}
            >
              {role}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
