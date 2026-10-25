import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { BABY_NAME, formatBirthDate } from "@/lib/baby";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

const title = `${BABY_NAME} 🐣 · Una estrellita está en camino`;
const description = `Una pequeña cuenta regresiva para la llegada de ${BABY_NAME} Cada segundo nos acerca al saludo más dulce — se espera el ${formatBirthDate()}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: `Cuenta regresiva de ${BABY_NAME}`,
  keywords: [BABY_NAME, "cuenta regresiva", "baby shower", "bebé", "niño"],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "/",
    siteName: `${BABY_NAME} · Una estrellita está en camino`,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#050b18",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`dark ${fredoka.variable} ${nunito.variable}`}
    >
      <body className="min-h-svh font-sans">{children}</body>
    </html>
  );
}
