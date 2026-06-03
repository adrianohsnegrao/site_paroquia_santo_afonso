import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PastoralDetailHero } from "@/components/pastorals/detail/PastoralDetailHero";
import { PastoralAbout } from "@/components/pastorals/detail/PastoralAbout";
import { PastoralPillars } from "@/components/pastorals/detail/PastoralPillars";
import { PastoralActivities } from "@/components/pastorals/detail/PastoralActivities";
import { PastoralDetailCTA } from "@/components/pastorals/detail/PastoralDetailCTA";
import { PastoralCoordinator } from "@/components/pastorals/detail/PastoralCoordinator";
import { pastoralDetails, getPastoralBySlug } from "@/data/pastoralDetails";

interface PageProps {
  params: { slug: string };
}

// Gera as rotas estáticas para cada pastoral em tempo de build.
export function generateStaticParams() {
  return pastoralDetails.map((pastoral) => ({ slug: pastoral.slug }));
}

// Metadata dinâmica por pastoral (o template do layout acrescenta o nome da paróquia).
export function generateMetadata({ params }: PageProps): Metadata {
  const pastoral = getPastoralBySlug(params.slug);

  if (!pastoral) {
    return { title: "Pastoral não encontrada" };
  }

  return {
    title: pastoral.title,
    description: pastoral.shortDescription,
  };
}

export default function PastoralDetailPage({ params }: PageProps) {
  const pastoral = getPastoralBySlug(params.slug);

  // Slug inexistente → página 404 do projeto.
  if (!pastoral) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <PastoralDetailHero pastoral={pastoral} />
        <PastoralAbout description={pastoral.description} />
        <PastoralPillars pillars={pastoral.pillars} />
        <PastoralActivities
          activities={pastoral.activities}
          pastoralTitle={pastoral.title}
        />
        <PastoralDetailCTA cta={pastoral.cta} />
        <PastoralCoordinator
          coordinator={pastoral.coordinator}
          contact={pastoral.contact}
        />
      </main>
      <Footer />
    </>
  );
}
