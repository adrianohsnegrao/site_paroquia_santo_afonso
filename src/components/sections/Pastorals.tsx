import { ArrowRight, Users } from "lucide-react";
import { pastoralsPageData } from "@/data/pastoralsPage";

const { pastorals } = pastoralsPageData;

/**
 * Seção "Pastorais e Movimentos" da Home (grade de ícones sem fundo).
 * Usa a mesma fonte da listagem/detalhe; cada bloco abre a página da pastoral.
 */
export function Pastorals() {
  return (
    <section id="pastorais" className="flex h-full flex-col">
      <div className="mb-6 flex items-center gap-2.5">
        <Users className="h-7 w-7 text-brand-gold-dark" strokeWidth={1.5} aria-hidden />
        <h2 className="font-serif text-3xl font-bold text-brand-green-dark sm:text-4xl">
          Pastorais e Movimentos
        </h2>
      </div>

      <ul className="grid grid-cols-2 gap-4">
        {pastorals.map(({ icon: Icon, title, slug }) => (
          <li key={slug}>
            <a
              href={`/pastorais/${slug}`}
              className="flex h-full flex-col items-center justify-center gap-3 rounded-lg border border-brand-green/10 bg-white p-6 text-center transition-all hover:-translate-y-0.5 hover:border-brand-gold/40 hover:shadow-card"
            >
              <Icon className="h-8 w-8 text-brand-green" strokeWidth={1.5} aria-hidden />
              <span className="text-sm font-semibold leading-tight text-brand-green-dark">
                {title}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href="/pastorais"
        className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-green transition-colors hover:text-brand-gold-dark"
      >
        Conheça todas as pastorais
        <ArrowRight className="h-4 w-4" aria-hidden />
      </a>
    </section>
  );
}
