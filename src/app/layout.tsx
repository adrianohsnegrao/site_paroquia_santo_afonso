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

export const metadata: Metadata = {
  title: `${site.fullName} | Comunidade de fé e acolhimento`,
  description: site.description,
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
