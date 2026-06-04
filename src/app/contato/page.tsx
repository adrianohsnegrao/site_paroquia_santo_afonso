import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ContactHero } from "@/components/contact/ContactHero";
import { QuickContacts } from "@/components/contact/QuickContacts";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactSidebar } from "@/components/contact/ContactSidebar";
import { HelpCards } from "@/components/contact/HelpCards";
import { LocationSection } from "@/components/contact/LocationSection";
import { FaqAccordion } from "@/components/contact/FaqAccordion";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { contactPageData } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Paróquia Santo Afonso Maria de Ligório para informações, pedidos de oração, intenções de missa, sacramentos e pastorais.",
};

export default function ContatoPage() {
  const { form } = contactPageData;

  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <QuickContacts />

        {/* Formulário + sidebar */}
        <section id="formulario-contato" className="bg-brand-cream-light py-16 lg:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2">
                <h2 className="font-serif text-3xl font-bold text-brand-green-dark sm:text-4xl">
                  {form.title}
                </h2>
                <p className="mt-2 text-brand-green-dark/75">{form.description}</p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
              <div className="lg:col-span-1">
                <ContactSidebar />
              </div>
            </div>
          </Container>
        </section>

        <HelpCards />
        <LocationSection />
        <FaqAccordion />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
