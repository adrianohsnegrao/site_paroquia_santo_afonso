import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { NewsDetailHero } from "@/components/news/detail/NewsDetailHero";
import { NewsArticle } from "@/components/news/detail/NewsArticle";
import { NewsSidebar } from "@/components/news/detail/NewsSidebar";
import { OtherNews } from "@/components/news/detail/OtherNews";
import { NewsCTA } from "@/components/news/NewsCTA";
import { newsDetails, getNewsBySlug } from "@/data/newsDetails";

interface PageProps {
  params: { slug: string };
}

// Gera as rotas estáticas para cada notícia em tempo de build.
export function generateStaticParams() {
  return newsDetails.map((news) => ({ slug: news.slug }));
}

// Metadata dinâmica por notícia (o template do layout acrescenta o nome da paróquia).
export function generateMetadata({ params }: PageProps): Metadata {
  const news = getNewsBySlug(params.slug);

  if (!news) {
    return { title: "Notícia não encontrada" };
  }

  return {
    title: news.title,
    description: news.shortDescription,
  };
}

export default function NewsDetailPage({ params }: PageProps) {
  const news = getNewsBySlug(params.slug);

  // Slug inexistente → página 404 do projeto.
  if (!news) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <NewsDetailHero news={news} />

        {/* Conteúdo + sidebar */}
        <section className="bg-brand-cream-light py-16 lg:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2">
                <NewsArticle news={news} />
              </div>
              <div className="lg:col-span-1">
                <NewsSidebar news={news} />
              </div>
            </div>
          </Container>
        </section>

        <OtherNews slug={news.slug} />
        <NewsCTA />
      </main>
      <Footer />
    </>
  );
}
