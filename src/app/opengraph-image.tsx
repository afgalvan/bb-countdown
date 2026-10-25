import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { BABY_NAME, formatBirthDate } from "@/lib/baby";

export const alt = `${BABY_NAME} 🐣 — una estrellita está en camino`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const fontFile = await readFile(
    join(process.cwd(), "src/assets/fredoka.ttf"),
  );
  const fontData = fontFile.buffer.slice(
    fontFile.byteOffset,
    fontFile.byteOffset + fontFile.byteLength,
  ) as ArrayBuffer;

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
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(160deg, #10365b 0%, #07182e 48%, #050b18 100%)",
          color: "#eaf7ff",
          fontFamily: "sans-serif",
        }}
      >
        {/* glows */}
        <div
          style={{
            position: "absolute",
            top: -240,
            left: 280,
            width: 640,
            height: 640,
            borderRadius: 9999,
            background:
              "radial-gradient(circle at center, rgba(56, 189, 248, 0.2) 0%, rgba(56, 189, 248, 0.07) 48%, rgba(56, 189, 248, 0) 72%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            right: -140,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background:
              "radial-gradient(circle at center, rgba(129, 140, 248, 0.16) 0%, rgba(129, 140, 248, 0.06) 48%, rgba(129, 140, 248, 0) 72%)",
          }}
        />

        {/* moon */}
        <div
          style={{
            position: "absolute",
            top: 72,
            right: 92,
            width: 112,
            height: 112,
            borderRadius: 9999,
            background: "radial-gradient(circle at 32% 28%, #ffffff, #bae6fd)",
            boxShadow: "0 0 80px rgba(125, 211, 252, 0.45)",
          }}
        />

        {/* clouds */}
        <div
          style={{
            position: "absolute",
            left: -40,
            bottom: 40,
            width: 340,
            height: 120,
            borderRadius: 9999,
            background: "rgba(186, 230, 253, 0.09)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 60,
            bottom: 105,
            width: 170,
            height: 100,
            borderRadius: 9999,
            background: "rgba(186, 230, 253, 0.09)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -80,
            top: 210,
            width: 300,
            height: 100,
            borderRadius: 9999,
            background: "rgba(125, 211, 252, 0.06)",
          }}
        />

        {/* stars */}
        <div
          style={{
            position: "absolute",
            left: 150,
            top: 130,
            width: 6,
            height: 6,
            borderRadius: 9999,
            background: "#e0f2fe",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 260,
            top: 300,
            width: 4,
            height: 4,
            borderRadius: 9999,
            background: "#bae6fd",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 300,
            top: 150,
            width: 5,
            height: 5,
            borderRadius: 9999,
            background: "#e0f2fe",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 180,
            bottom: 150,
            width: 4,
            height: 4,
            borderRadius: 9999,
            background: "#bae6fd",
          }}
        />

        {/* copy */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            border: "1px solid rgba(186, 230, 253, 0.25)",
            borderRadius: 9999,
            background: "rgba(125, 211, 252, 0.08)",
            padding: "12px 26px",
            fontSize: 20,
            letterSpacing: 6,
            color: "#bae6fd",
          }}
        >
          UNA ESTRELLITA ESTÁ EN CAMINO
        </div>

        <div
          style={{
            marginTop: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 128,
              fontWeight: 600,
              fontFamily: "Fredoka",
              letterSpacing: -3,
              lineHeight: 1,
              color: "#f0f9ff",
            }}
          >
            {BABY_NAME}
          </div>
          <div style={{ fontSize: 92, marginLeft: 20, lineHeight: 1 }}>🐣</div>
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 28,
            color: "rgba(234, 247, 255, 0.62)",
          }}
        >
          Contando cada segundito hasta conocerte
        </div>

        <div
          style={{
            marginTop: 36,
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 24,
            color: "#7dd3fc",
          }}
        >
          <span>Llegada esperada</span>
          <span style={{ color: "rgba(234, 247, 255, 0.3)" }}>/</span>
          <span>{formatBirthDate()}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Fredoka",
          data: fontData,
          weight: 600,
          style: "normal",
        },
      ],
    },
  );
}
