import { ImageResponse } from "next/server";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: size.height,
          width: size.width,
          borderRadius: "100%",
          backgroundColor: "theme('colors.slate.900')",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "24px",
          color: "#f7f7f7",
        }}
      >
        v
      </div>
    ),
    {
      // debug: true,
      ...size,
    }
  );
}
