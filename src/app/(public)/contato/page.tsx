import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { ContactForm } from './ContactForm';
import { site } from '@/data/site';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fale Conosco | Paróquia Santo Afonso',
  description: 'Entre em contato com a Paróquia Santo Afonso Maria de Ligório. Tire suas dúvidas, peça informações ou mande uma sugestão.',
};

export default function ContatoPage() {
  return (
    <div className="bg-brand-cream-light min-h-screen">
      {/* Banner de Topo */}
      <div className="bg-brand-green-deep py-16 lg:py-24 text-center">
        <Container>
          <div className="max-w-2xl mx-auto text-white">
            <div className="mb-4 flex items-center justify-center gap-3 text-brand-gold">
              <span className="h-px w-8 bg-brand-gold/60" aria-hidden />
              <MessageSquare className="h-6 w-6" strokeWidth={1.5} />
              <span className="h-px w-8 bg-brand-gold/60" aria-hidden />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Fale Conosco
            </h1>
            <p className="text-lg text-white/80">
              Estamos aqui para lhe atender. Dúvidas sobre casamentos, batizados, 
              horários ou intenções de missa? Mande sua mensagem ou venha nos visitar.
            </p>
          </div>
        </Container>
      </div>

      <Container className="-mt-8 lg:-mt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-start">
          
          {/* Informações de Contato (Secretaria) */}
          <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8 md:p-10 flex flex-col gap-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand-green-dark mb-6">
                Secretaria Paroquial
              </h2>
              <div className="space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 text-brand-green">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-600 text-sm whitespace-pre-wrap leading-relaxed">
                      {site.contact.officeHours.split(' | ').join('\n')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 text-brand-green">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider mb-1">Telefone / WhatsApp</h3>
                    <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-brand-green transition-colors block">
                      {site.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 text-brand-green">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider mb-1">E-mail</h3>
                    <a href={`mailto:${site.contact.email}`} className="text-gray-600 text-sm hover:text-brand-green transition-colors block">
                      {site.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 text-brand-green">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider mb-1">Endereço</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {site.contact.addressLines.map((line, idx) => (
                        <span key={idx} className="block">{line}</span>
                      ))}
                    </p>
                  </div>
                </div>

              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-100 mt-auto">
              <a 
                href={site.contact.mapUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-gold-dark font-semibold text-sm flex items-center gap-2 hover:text-brand-green transition-colors"
              >
                Como Chegar no Google Maps &rarr;
              </a>
            </div>
          </div>

          {/* Formulário Interativo */}
          <div className="lg:pt-12">
            <h2 className="font-serif text-3xl font-bold text-brand-green-dark mb-6">
              Envie sua mensagem
            </h2>
            <ContactForm />
          </div>

        </div>
      </Container>
    </div>
  );
}
