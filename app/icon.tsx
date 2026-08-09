import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          borderRadius: 8,
          background: "linear-gradient(135deg, #F2A93B 0%, #D6336C 50%, #0E7C7B 100%)",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
          <path d="M12 0l2.5 7.5L22 10l-7.5 2.5L12 20l-2.5-7.5L2 10l7.5-2.5L12 0z" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
