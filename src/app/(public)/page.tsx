import { Hero } from "@/components/sections/Hero";
import { MassSchedule } from "@/components/sections/MassSchedule";
import { CommunityHighlights } from "@/components/sections/CommunityHighlights";

// Habilita Incremental Static Regeneration (ISR) a cada 60 segundos
// Isso garante performance de site estático (SSG) com dados dinâmicos do Supabase.
export const revalidate = 60;

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Banner: Acolhedor e visual */}
      <Hero />
      
      {/* 2. Destaques da Comunidade: Fetch direto do Supabase (RSC) */}
      <CommunityHighlights />
      
      {/* 3. Horários Rápidos: Missas, Confissões e Funcionamento */}
      <MassSchedule />
    </>
  );
}
