"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { aboutPageData } from "@/data/about";
import { cn } from "@/lib/utils";

const { history } = aboutPageData;

/** Seção "Nossa História": texto à esquerda (com expandir), imagem à direita. */
export function HistorySection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-brand-cream-light py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Texto */}
          <div>
            <span className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-brand-gold-dark">
              <span className="h-px w-6 bg-current" aria-hidden />
              Nossa caminhada
            </span>
            <h2 className="font-serif text-4xl font-bold text-brand-green-dark sm:text-5xl">
              {history.title}
            </h2>
            <p className="mt-3 text-lg font-medium text-brand-green-dark/80">
              {history.subtitle}
            </p>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-brand-green-dark/75">
              {history.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {/* Conteúdo adicional revelado inline (sem modal) */}
              {expanded &&
                history.extraParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
            </div>

            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-green transition-colors hover:text-brand-gold-dark"
            >
              {expanded ? history.ctaCollapse : history.ctaExpand}
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  expanded && "rotate-180",
                )}
                aria-hidden
              />
            </button>
          </div>

          {/* Imagem */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md shadow-card ring-1 ring-brand-green/10">
            <Image
              src={history.image}
              alt={history.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
