import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PastoralsHero } from "@/components/pastorals/PastoralsHero";
import { PastoralsGrid } from "@/components/pastorals/PastoralsGrid";
import { PastoralsHighlight } from "@/components/pastorals/PastoralsHighlight";
import { ParticipationSection } from "@/components/pastorals/ParticipationSection";

export const metadata: Metadata = {
  title: "Pastorais e Movimentos",
  description:
    "Conheça as pastorais e movimentos da Paróquia Santo Afonso Maria de Ligório e descubra como participar da vida missionária da comunidade.",
};

export default function PastoraisPage() {
  return (
    <>
      <Header />
      <main>
        <PastoralsHero />
        <PastoralsGrid />
        <PastoralsHighlight />
        <ParticipationSection />
      </main>
      <Footer />
    </>
  );
}
