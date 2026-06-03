import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { HistorySection } from "@/components/about/HistorySection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { PatronSaintSection } from "@/components/about/PatronSaintSection";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a história, missão, valores e o padroeiro da Paróquia Santo Afonso Maria de Ligório.",
};

export default function SobrePage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <HistorySection />
        <MissionVisionSection />
        <ValuesSection />
        <PatronSaintSection />
      </main>
      <Footer />
    </>
  );
}
