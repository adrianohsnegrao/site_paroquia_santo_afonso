import Image from "next/image";
import { Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getIcon } from "@/lib/iconMap";
import type { PastoralDetail } from "@/data/pastoralDetails";

/** Seção "Encontros e Atividades": lista à esquerda, imagem à direita. */
export function PastoralActivities({
  activities,
  pastoralTitle,
}: {
  activities: PastoralDetail["activities"];
  pastoralTitle: string;
}) {
  return (
    <section className="bg-brand-cream-light py-16 lg:py-20">
      <Container>
        <div className="rounded-lg border border-brand-green/10 bg-brand-cream p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            {/* Lista de atividades */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-brand-green-dark sm:text-4xl">
                {activities.title}
              </h2>
              <p className="mt-2 text-lg font-medium text-brand-green-dark/80">
                {activities.subtitle}
              </p>

              <ul className="mt-6 space-y-3">
                {activities.items.map((item) => {
                  const Icon = getIcon(item.icon);
                  return (
                    <li
                      key={item.title}
                      className="flex items-start gap-4 rounded-md border border-brand-green/10 bg-white p-4"
                    >
                      <Icon
                        className="mt-0.5 h-6 w-6 shrink-0 text-brand-gold-dark"
                        strokeWidth={1.5}
                        aria-hidden
                      />
                      <div>
                        <h3 className="font-serif text-lg font-bold text-brand-green-dark">
                          {item.title}
                        </h3>
                        <p className="text-sm text-brand-green-dark/75">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {activities.notice && (
                <p className="mt-4 flex items-start gap-2 text-sm text-brand-green-dark/60">
                  <Info
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-dark"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  {activities.notice}
                </p>
              )}
            </div>

            {/* Imagem */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md ring-1 ring-brand-green/10">
              <Image
                src={activities.image}
                alt={`Encontro da ${pastoralTitle}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
