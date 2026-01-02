import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

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
          borderRadius: 14,
          background:
            "radial-gradient(60% 60% at 35% 30%, #00FF7F 0%, rgba(0,255,127,0.12) 45%, rgba(0,0,0,0) 70%), linear-gradient(135deg, #001a0d 0%, #004d26 50%, #001a0d 100%)",
          boxShadow:
            "inset 0 0 0 2px rgba(0,255,127,0.14), inset 0 -12px 30px rgba(0,0,0,0.35)",
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(180deg, rgba(0,255,127,0.22) 0%, rgba(0,255,127,0.06) 100%)",
            border: "1px solid rgba(0,255,127,0.22)",
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 900,
              letterSpacing: 0.5,
              color: "#00FF7F",
              fontFamily:
                "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial",
            }}
          >
            R
          </div>
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}
