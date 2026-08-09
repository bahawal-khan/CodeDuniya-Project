import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "CodeDuniya — Coding seekho jaise koi dost tumhein samjha raha ho.";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(165deg, #FBF6EC 0%, #FDF8F0 30%, #F6D3E1 70%, #CDECEA 100%)",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 72,
              height: 72,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #F2A93B 0%, #D6336C 50%, #0E7C7B 100%)",
            }}
          >
            <svg width="38" height="38" viewBox="0 0 24 24" fill="white">
              <path d="M12 0l2.5 7.5L22 10l-7.5 2.5L12 20l-2.5-7.5L2 10l7.5-2.5L12 0z" />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 800, color: "#241B2F" }}>
            Code<span style={{ color: "#D6336C" }}>Duniya</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 34,
            fontWeight: 600,
            color: "#241B2F",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          Coding seekho jaise koi dost tumhein samjha raha ho.
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 22, color: "#0E7C7B", fontWeight: 600 }}>
          Roman Urdu + English · CodeYaar AI dost · Pakistan ka apna coding platform
        </div>
      </div>
    ),
    { ...size }
  );
}
