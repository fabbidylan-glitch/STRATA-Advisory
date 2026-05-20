import { ImageResponse } from "next/og";

export const alt = "STRATA — STR deal underwriting, tax strategy, and operations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#0F1B2D",
          color: "#F4EFE4",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <svg width="48" height="48" viewBox="0 0 36 36">
            <path d="M6 13 L18 6 L30 13 L26.5 13 L18 8 L9.5 13 Z" fill="#C79A5A" />
            <path d="M6 20 L18 13 L30 20 L26.5 20 L18 15 L9.5 20 Z" fill="#5D7F71" />
            <path d="M6 27 L18 20 L30 27 L26.5 27 L18 22 L9.5 27 Z" fill="#DCCAB1" />
          </svg>
          <div style={{ fontSize: 34, letterSpacing: 12, fontWeight: 600 }}>
            STRATA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 64,
              lineHeight: 1.05,
              fontWeight: 700,
              maxWidth: 900,
            }}
          >
            <span>We underwrite the deal. We structure the tax.&nbsp;</span>
            <span style={{ color: "#E3C99F" }}>We run the unit.</span>
          </div>
          <div style={{ fontSize: 26, color: "rgba(244,239,228,0.7)", maxWidth: 820 }}>
            Short-term rental advisory and hospitality operations.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#B0824B",
          }}
        >
          <div style={{ width: 40, height: 2, background: "#B0824B" }} />
          STR Investment Platform
        </div>
      </div>
    ),
    { ...size }
  );
}
