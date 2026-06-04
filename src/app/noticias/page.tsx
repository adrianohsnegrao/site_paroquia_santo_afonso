import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsHero } from "@/components/news/NewsHero";
import { FeaturedNews } from "@/components/news/FeaturedNews";
import { NewsBrowser } from "@/components/news/NewsBrowser";
import { NewsCTA } from "@/components/news/NewsCTA";

export const metadata: Metadata = {
  title: "Notícias e Comunicados",
  description:
    "Acompanhe as notícias, avisos e comunicados da Paróquia Santo Afonso Maria de Ligório.",
};

export default function NoticiasPage() {
  return (
    <>
      <Header />
      <main>
        <NewsHero />
        <FeaturedNews />
        <NewsBrowser />
        <NewsCTA />
      </main>
      <Footer />
    </>
  );
}
