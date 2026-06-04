"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getIcon } from "@/lib/iconMap";
import { newsPageData } from "@/data/newsPage";
import { cn } from "@/lib/utils";

const { news, notices, categories } = newsPageData;
const ALL = "Todos";

/** Últimas notícias + comunicados + filtro por categoria (client-side). */
export function NewsBrowser() {
  const [active, setActive] = useState<string>(ALL);

  const filteredNews =
    active === ALL ? news : news.filter((item) => item.filterCategory === active);

  return (
    <>
      {/* Últimas Notícias + Comunicados */}
      <section id="ultimas-noticias" className="bg-brand-cream-light py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            {/* Notícias */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-bold text-brand-green-dark sm:text-4xl">
                Últimas Notícias
              </h2>

              {filteredNews.length > 0 ? (
                <ul className="mt-8 grid gap-6 sm:grid-cols-2">
                  {filteredNews.map((item) => (
                    <li key={item.slug}>
                      <article className="flex h-full flex-col overflow-hidden rounded-lg border border-brand-green/10 bg-white shadow-card transition-shadow hover:shadow-soft">
                        <div className="relative aspect-[16/9] w-full">
                          <Image
                            src={item.image}
                            alt={item.imageAlt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover object-center"
                          />
                          <span className="absolute left-3 top-3 rounded-md bg-brand-green px-2.5 py-1 text-xs font-semibold text-white shadow-card">
                            {item.category}
                          </span>
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <p className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-gold-dark">
                            <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                            {item.formattedDate}
                          </p>
                          <h3 className="mt-2 font-serif text-xl font-bold leading-snug text-brand-green-dark">
                            {item.title}
                          </h3>
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-green-dark/70">
                            {item.excerpt}
                          </p>
                          <a
                            href={`/noticias/${item.slug}`}
                            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green transition-colors hover:text-brand-gold-dark"
                          >
                            Ler mais
                            <ArrowRight className="h-4 w-4" aria-hidden />
                          </a>
                        </div>
                      </article>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-8 text-brand-green-dark/60">
                  Nenhuma notícia nesta categoria no momento.
                </p>
              )}
            </div>

            {/* Comunicados e Avisos */}
            <aside className="lg:col-span-1">
              <h2 className="font-serif text-3xl font-bold text-brand-green-dark sm:text-4xl">
                Comunicados e Avisos
              </h2>
              <ul className="mt-8 space-y-4">
                {notices.map((notice) => {
                  const Icon = getIcon(notice.icon);
                  return (
                    <li
                      key={notice.title}
                      className="flex gap-3 rounded-lg border border-brand-green/10 bg-white p-4 shadow-card"
                    >
                      <Icon
                        className="mt-0.5 h-6 w-6 shrink-0 text-brand-gold-dark"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                      <div>
                        <p className="text-xs font-semibold text-brand-gold-dark">
                          {notice.formattedDate}
                        </p>
                        <h3 className="font-serif text-lg font-bold leading-snug text-brand-green-dark">
                          {notice.title}
                        </h3>
                        <p className="mt-0.5 text-sm leading-relaxed text-brand-green-dark/70">
                          {notice.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      {/* Explore por categoria */}
      <section className="bg-white py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Categorias"
            title="Explore por categoria"
            align="center"
            className="mx-auto"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {categories.map((category) => {
              const isActive = active === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  aria-pressed={isActive}
                  className={cn(
                    "rounded-md border px-4 py-2 text-sm font-semibold transition-colors",
                    isActive
                      ? "border-brand-green-dark bg-brand-green-dark text-white"
                      : "border-brand-green/15 bg-white text-brand-green-dark/80 hover:border-brand-gold/40",
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <p className="mt-4 text-center text-sm text-brand-green-dark/50">
            Filtra as notícias da seção acima.
          </p>
        </Container>
      </section>
    </>
  );
}
