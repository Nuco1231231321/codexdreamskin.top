import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#d7ffb8",
          border: "28px solid #3f9800",
          borderBottomWidth: 52,
          borderRadius: 96,
          color: "#042c60",
          fontFamily: "Arial, sans-serif",
          fontSize: 290,
          fontWeight: 900,
        }}
      >
        C
      </div>
    ),
    size,
  );
}
