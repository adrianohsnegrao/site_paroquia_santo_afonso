import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { MassSchedule } from "@/components/sections/MassSchedule";
import { FeaturedEvents } from "@/components/sections/FeaturedEvents";
import { Pastorals } from "@/components/sections/Pastorals";
import { News } from "@/components/sections/News";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MassSchedule />
        {/* Eventos e Pastorais lado a lado no desktop */}
        <div className="bg-brand-cream-light">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-10 pt-4 sm:px-6 lg:grid-cols-[1fr_1.08fr] lg:items-stretch lg:gap-12 lg:px-8 lg:pb-12 lg:pt-6">
            <FeaturedEvents />
            <Pastorals />
          </div>
        </div>
        <News />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
