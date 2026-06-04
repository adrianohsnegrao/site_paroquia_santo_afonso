"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactPageData } from "@/data/contact";
import { cn } from "@/lib/utils";

const { faq } = contactPageData;

/** Seção "Dúvidas frequentes" — accordion client-side. */
export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-brand-cream-light py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Tire suas dúvidas"
          title="Dúvidas frequentes"
          align="center"
          className="mx-auto"
        />

        <ul className="mx-auto mt-10 max-w-3xl space-y-3">
          {faq.map((item, index) => {
            const isOpen = open === index;
            return (
              <li
                key={item.question}
                className="overflow-hidden rounded-lg border border-brand-green/10 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-serif text-lg font-bold text-brand-green-dark">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-brand-gold-dark transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-200 ease-in-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-brand-green-dark/75">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
