import { ImageResponse } from "next/og";
import { NAME, TAGLINE, BIO } from "./data";

export const alt = "Marlon Merjos — Data Scientist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          backgroundColor: "#0d1117",
          color: "#c9d1d9",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#8b949e",
            marginBottom: 20,
          }}
        >
          <span style={{ color: "#7ee787" }}>$&nbsp;</span>
          <span>whoami</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            color: "#c9d1d9",
            marginBottom: 14,
          }}
        >
          {NAME}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            color: "#8b949e",
            marginBottom: 36,
          }}
        >
          {TAGLINE}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            lineHeight: 1.45,
            color: "#c9d1d9",
            maxWidth: 1000,
          }}
        >
          {BIO}
        </div>
      </div>
    ),
    { ...size }
  );
}
