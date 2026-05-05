import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://eximiaacademy.com"),
  title: {
    default: "eximIA Academy — Educação Corporativa com IA Socrática",
    template: "%s — eximIA Academy",
  },
  description: "Plataforma LXP com IA Socrática. Trilhas adaptativas, reflexões guiadas e gestão de competências para universidades corporativas.",
  keywords: [
    "educação corporativa", "IA socrática", "LXP", "universidade corporativa",
    "treinamento corporativo", "eximIA", "aprendizado adaptativo", "T&D",
    "plataforma de ensino", "educação empresarial", "treinamento com IA",
    "gestão de competências", "micro-learning", "heutagogia",
    "Ribeirão Preto", "São Paulo", "Brasil",
  ],
  authors: [{ name: "eximIA Ventures" }],
  creator: "eximIA Ventures",
  publisher: "eximIA Ventures",
  category: "Education Technology",
  classification: "Business/Education",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://eximiaacademy.com",
    siteName: "eximIA Academy",
    title: "eximIA Academy — Educação Corporativa com IA Socrática",
    description: "A única plataforma onde a IA faz as perguntas e o colaborador constrói o conhecimento. Retenção real, mensurável.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "eximIA Academy — Educação Corporativa com IA" }],
    countryName: "Brazil",
  },
  twitter: {
    card: "summary_large_image",
    title: "eximIA Academy — Educação Corporativa com IA",
    description: "Método Socrático com IA. Seu time aprende de verdade.",
    images: ["/og-image.png"],
    creator: "@eximia_ia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://eximiaacademy.com",
    languages: { "pt-BR": "https://eximiaacademy.com" },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  verification: {
    // google: "seu-codigo-google-search-console",
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Ribeirão Preto",
    "geo.position": "-21.1767;-47.8208",
    "ICBM": "-21.1767, -47.8208",
    "content-language": "pt-BR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" dir="ltr" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "eximIA Academy",
              url: "https://eximiaacademy.com",
              logo: "https://eximiaacademy.com/logo-horizontal.svg",
              description: "Plataforma de educação corporativa com IA Socrática. Método que transforma treinamento em retenção real.",
              foundingDate: "2026",
              areaServed: { "@type": "Country", name: "Brazil" },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ribeirão Preto",
                addressRegion: "SP",
                addressCountry: "BR",
              },
              parentOrganization: {
                "@type": "Organization",
                name: "eximIA Ventures",
                url: "https://eximiaventures.com.br",
              },
              sameAs: [
                "https://www.linkedin.com/company/exim-ia/",
                "https://www.instagram.com/eximia.ia",
              ],
              offers: {
                "@type": "Offer",
                category: "Educação Corporativa",
                areaServed: "BR",
                availableLanguage: "pt-BR",
              },
            }),
          }}
        />
        {/* SoftwareApplication Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "eximIA Academy",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web",
              description: "Plataforma LXP com IA Socrática para universidades corporativas",
              url: "https://eximiaacademy.com",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "BRL",
                description: "Demonstração gratuita disponível",
              },
              featureList: [
                "IA Socrática com 7 camadas de profundidade",
                "Trilhas de aprendizado adaptativas",
                "Course Designer com IA",
                "Analytics por aluno e competência",
                "9 módulos (3 core + 6 add-on)",
                "Multi-tenant com isolamento de dados",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
