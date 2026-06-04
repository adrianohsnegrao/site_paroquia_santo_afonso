import { Container } from "@/components/ui/Container";
import { getIcon } from "@/lib/iconMap";
import { contactPageData } from "@/data/contact";

const { quickContacts } = contactPageData;

/** Cards rápidos de contato (4) logo após o hero. */
export function QuickContacts() {
  return (
    <section className="bg-brand-cream-light pt-16 lg:pt-20">
      <Container>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {quickContacts.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <li
                key={item.title}
                className="rounded-lg border border-brand-green/10 bg-white p-6 shadow-card"
              >
                <Icon className="h-8 w-8 text-brand-gold-dark" strokeWidth={1.5} aria-hidden />
                <h2 className="mt-3 font-serif text-xl font-bold text-brand-green-dark">
                  {item.title}
                </h2>
                <div className="mt-2 space-y-0.5 text-sm text-brand-green-dark/75">
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
