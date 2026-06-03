import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SchedulesHero } from "@/components/schedules/SchedulesHero";
import { MassScheduleSection } from "@/components/schedules/MassScheduleSection";
import { ParishServicesSection } from "@/components/schedules/ParishServicesSection";
import { SchedulesCTA } from "@/components/schedules/SchedulesCTA";

export const metadata: Metadata = {
  title: "Horários",
  description:
    "Confira os horários de missa, confissões, adoração e atendimentos da Paróquia Santo Afonso Maria de Ligório.",
};

export default function HorariosPage() {
  return (
    <>
      <Header />
      <main>
        <SchedulesHero />
        <MassScheduleSection />
        <ParishServicesSection />
        <SchedulesCTA />
      </main>
      <Footer />
    </>
  );
}
