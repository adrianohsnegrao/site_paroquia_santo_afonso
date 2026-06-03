import type { Metadata } from "next";
import { Source_Sans_3, Cormorant_Garamond } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

// Sans-serif limpa e moderna para textos, menu, botões e conteúdo
const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

// Serifada elegante para títulos e headings (estilo institucional cristão)
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

// URL de produção: usa NEXT_PUBLIC_SITE_URL (domínio próprio) quando definido,
// senão a URL automática da Vercel, e por fim localhost em desenvolvimento.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.fullName} | Comunidade de fé e acolhimento`,
    template: `%s | ${site.fullName}`,
  },
  description: site.description,
  applicationName: site.fullName,
  keywords: [
    "Paróquia Santo Afonso",
    "Santo Afonso Maria de Ligório",
    "missas",
    "horários de missa",
    "igreja católica",
    "comunidade católica",
  ],
  icons: {
    icon: site.logo.src,
    apple: site.logo.src,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: site.fullName,
    title: `${site.fullName} | Comunidade de fé e acolhimento`,
    description: site.description,
    images: [
      {
        url: "/images/igreja-hero.png",
        width: 1200,
        height: 630,
        alt: "Fachada da Paróquia Santo Afonso Maria de Ligório",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} | Comunidade de fé e acolhimento`,
    description: site.description,
    images: ["/images/igreja-hero.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
