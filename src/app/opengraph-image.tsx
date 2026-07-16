import { ImageResponse } from "next/og";

export const alt = "Codex Dream Skin install guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          padding: 64,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "5px solid #3c3c3c",
            borderBottom: "16px solid #3c3c3c",
            borderRadius: 24,
            padding: 56,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", width: 760 }}>
            <div style={{ color: "#267a0b", fontSize: 28, fontWeight: 800 }}>
              codexdreamskin.top
            </div>
            <div
              style={{
                color: "#042c60",
                fontSize: 72,
                lineHeight: 1.05,
                fontWeight: 900,
                marginTop: 24,
              }}
            >
              Change your Codex skin today.
            </div>
            <div style={{ color: "#4b4b4b", fontSize: 28, marginTop: 28 }}>
              Install on macOS or Windows. Verify. Restore anytime.
            </div>
          </div>
          <div
            style={{
              width: 220,
              height: 220,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "6px solid #3f9800",
              borderBottom: "16px solid #3f9800",
              borderRadius: 24,
              background: "#d7ffb8",
              color: "#042c60",
              fontSize: 110,
              fontWeight: 900,
            }}
          >
            C
          </div>
        </div>
      </div>
    ),
    size,
  );
}
