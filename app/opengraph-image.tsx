import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Splendid View Eco Orchard Resort - Resort in Rajgarh, Himachal Pradesh";
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
          backgroundColor: "#173725",
          color: "#FAFBF9",
          fontFamily: "system-ui, sans-serif",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(205, 158, 83, 0.3) 0%, transparent 60%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              padding: "8px 18px",
              borderRadius: "999px",
              backgroundColor: "rgba(205, 158, 83, 0.2)",
              color: "#E1BC7C",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            HIMACHAL PRADESH • ECO ORCHARD RESORT
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 800,
              color: "#FAFBF9",
              lineHeight: 1.15,
            }}
          >
            Splendid View Eco Orchard Resort
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#D1D7CC",
              maxWidth: "920px",
              lineHeight: 1.35,
            }}
          >
            Cottages overlooking the Giri Valley in Rajgarh, District Sirmour.
            Peaceful pine ridges, orchard blossom walks & authentic Himachali hospitality.
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
