"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarDays, Clock, MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getIcon } from "@/lib/iconMap";
import { calendarPageData, calendarHighlights } from "@/data/calendarPage";
import { cn } from "@/lib/utils";

const { categories } = calendarPageData;
const ALL = "Todos";

/** Filtro por categoria + grade "Próximos destaques" (filtro client-side). */
export function CalendarFilterHighlights() {
  const [active, setActive] = useState<string>(ALL);

  const filtered =
    active === ALL
      ? calendarHighlights
      : calendarHighlights.filter((event) => event.filterCategory === active);

  return (
    <>
      {/* Filtrar por categoria */}
      <section className="bg-white py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Agenda"
            title="Filtrar por categoria"
            align="center"
            className="mx-auto"
          />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setActive(ALL)}
              aria-pressed={active === ALL}
              className={cn(
                "inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors",
                active === ALL
                  ? "border-brand-gold bg-brand-cream text-brand-green-dark"
                  : "border-brand-green/10 bg-white text-brand-green-dark/80 hover:border-brand-gold/40",
              )}
            >
              Todos
            </button>

            {categories.map((category) => {
              const Icon = getIcon(category.icon);
              const isActive = active === category.title;
              return (
                <button
                  key={category.title}
                  type="button"
                  onClick={() => setActive(category.title)}
                  aria-pressed={isActive}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors",
                    isActive
                      ? "border-brand-gold bg-brand-cream text-brand-green-dark"
                      : "border-brand-green/10 bg-white text-brand-green-dark/80 hover:border-brand-gold/40",
                  )}
                >
                  <Icon className="h-4 w-4 text-brand-gold-dark" strokeWidth={1.5} aria-hidden />
                  {category.title}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Próximos destaques */}
      <section id="proximos-destaques" className="bg-brand-cream-light py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Não perca"
            title="Próximos destaques"
            align="center"
            className="mx-auto"
          />

          {filtered.length > 0 ? (
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((event) => (
                <li key={event.slug}>
                  <article className="flex h-full flex-col overflow-hidden rounded-lg border border-brand-green/10 bg-white shadow-card transition-shadow hover:shadow-soft">
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src={event.image}
                        alt={event.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center"
                      />
                      <div className="absolute left-3 top-3 flex flex-col items-center rounded-md bg-brand-green px-3 py-1.5 text-white shadow-card">
                        <span className="text-lg font-bold leading-none">{event.dayStr}</span>
                        <span className="text-[10px] font-semibold uppercase tracking-wide">
                          {event.monthStr}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="text-xs font-semibold uppercase tracking-wide text-brand-terracotta-dark">
                        {event.category}
                      </span>
                      <h3 className="mt-1 font-serif text-xl font-bold text-brand-green-dark">
                        {event.title}
                      </h3>
                      <p className="mt-1 flex-1 text-sm leading-relaxed text-brand-green-dark/70">
                        {event.description}
                      </p>
                      <ul className="mt-3 space-y-1.5 text-xs text-brand-green-dark/70">
                        <li className="flex items-center gap-2">
                          <CalendarDays className="h-3.5 w-3.5 text-brand-gold-dark" aria-hidden />
                          {event.dayStr} {event.monthStr} · {event.time}
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-3.5 w-3.5 text-brand-gold-dark" aria-hidden />
                          {event.time}
                        </li>
                        <li className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 text-brand-gold-dark" aria-hidden />
                          {event.location}
                        </li>
                      </ul>
                      <a
                        href={`/eventos/${event.slug}`}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green transition-colors hover:text-brand-gold-dark"
                      >
                        Saiba mais
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </a>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-10 text-center text-brand-green-dark/60">
              Nenhum evento nesta categoria no momento.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
