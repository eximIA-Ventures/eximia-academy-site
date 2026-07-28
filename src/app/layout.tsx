import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Geist_Mono,
  Instrument_Sans,
} from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics/Analytics";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/site";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  display: "swap",
  fallback: ["Avenir Next", "Helvetica Neue", "system-ui"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  fallback: ["SF Pro Text", "system-ui"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  fallback: ["JetBrains Mono", "SF Mono", "ui-monospace"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#140d07" },
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} · ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "exímIA Academy",
    "escola AI First",
    "capacidade organizacional",
    "Human Capability Index",
    "aprendizagem aplicada",
  ],
  authors: [{ name: "exímIA" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  // Conjunto herdado do site anterior. Sem o `apple-touch-icon`, a página
  // salva na tela de início de um iPhone vira uma miniatura genérica.
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: `${SITE_NAME} · ${SITE_TAGLINE}`,
    description:
      "A escola AI First de capacidades humanas: aprendizagem que vira evidência aplicada no trabalho, medida pelo HCI.",
    url: "/",
    locale: "pt_BR",
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} · ${SITE_TAGLINE}`,
    description:
      "A escola AI First de capacidades humanas: aprendizagem que vira evidência aplicada no trabalho, medida pelo HCI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${bricolage.variable} ${instrument.variable} ${geistMono.variable} bg-paper font-sans text-ink antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

