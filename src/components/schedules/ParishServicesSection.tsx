import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ScheduleNoticeCard } from "./ScheduleNoticeCard";
import { schedulesPageData } from "@/data/schedules";

const { servicesHeading, services, notice } = schedulesPageData;

/** Seção "Atendimentos na Secretaria Paroquial": lista à esquerda, imagem + aviso à direita. */
export function ParishServicesSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          {/* Coluna esquerda — lista de atendimentos */}
          <div>
            <span className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-brand-gold-dark">
              <span className="h-px w-6 bg-current" aria-hidden />
              Atendimento
            </span>
            <h2 className="font-serif text-4xl font-bold text-brand-green-dark sm:text-5xl">
              {servicesHeading.title}
            </h2>
            <p className="mt-3 text-lg font-medium text-brand-green-dark/80">
              {servicesHeading.subtitle}
            </p>

            <ul className="mt-6 divide-y divide-brand-green/10">
              {services.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex items-start gap-4 py-4">
                  <Icon
                    className="mt-0.5 h-7 w-7 shrink-0 text-brand-gold-dark"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-serif text-xl font-bold text-brand-green-dark">
                      {title}
                    </h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-brand-green-dark/75">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna direita — imagem do altar + aviso */}
          <div className="space-y-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md shadow-card ring-1 ring-brand-green/10">
              <Image
                src={notice.image}
                alt={notice.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <ScheduleNoticeCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
