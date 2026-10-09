import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Splendid View Rajgarh - Resort in Rajgarh, Himachal Pradesh";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 70px",
          backgroundColor: "#183327",
          color: "#FAF8F5",
          fontFamily: "system-ui, sans-serif",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(224, 122, 95, 0.35) 0%, transparent 60%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              padding: "8px 18px",
              borderRadius: "999px",
              backgroundColor: "rgba(224, 122, 95, 0.25)",
              color: "#F4A261",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            HIMACHAL PRADESH • PEACH VALLEY
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#FAF8F5",
              lineHeight: 1.15,
            }}
          >
            Splendid View Rajgarh
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#D9CCBA",
              maxWidth: "900px",
              lineHeight: 1.35,
            }}
          >
            Your Serene Mountain Haven in District Sirmour. 180° Giri Valley
            Panoramas, Pure Pine Air & Homestyle Hospitality.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(217, 204, 186, 0.25)",
            paddingTop: "28px",
            fontSize: "20px",
            color: "#C7B49D",
          }}
        >
          <div>Village Tikkari Tali, Rajgarh, HP 173101</div>
          <div style={{ color: "#E07A5F", fontWeight: 700 }}>
            Call / WhatsApp: +91 8219515083
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
