import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { EventDetail } from "@/data/eventDetails";

/** Seção "Programação": timeline vertical à esquerda, imagem à direita. */
export function EventSchedule({
  schedule,
  eventTitle,
}: {
  schedule: EventDetail["schedule"];
  eventTitle: string;
}) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          {/* Timeline */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-brand-green-dark sm:text-4xl">
              {schedule.title}
            </h2>
            <ol className="mt-8 ml-1 border-l-2 border-brand-gold/30">
              {schedule.items.map((item) => (
                <li key={`${item.time}-${item.title}`} className="relative pb-8 pl-6 last:pb-0">
                  <span
                    className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-brand-gold ring-4 ring-white"
                    aria-hidden
                  />
                  <p className="text-sm font-bold text-brand-gold-dark">{item.time}</p>
                  <p className="font-serif text-lg font-semibold text-brand-green-dark">
                    {item.title}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Imagem */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md shadow-card ring-1 ring-brand-green/10">
            <Image
              src={schedule.image}
              alt={`Imagem relacionada à programação do evento ${eventTitle}`}
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
