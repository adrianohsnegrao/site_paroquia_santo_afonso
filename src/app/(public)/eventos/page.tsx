import { createClient } from '@/lib/supabase/server';
import { Container } from '@/components/ui/Container';
import { MapPin, Clock, CalendarHeart } from 'lucide-react';

// Incremental Static Regeneration (ISR) a cada 60 segundos
export const revalidate = 60;

export default async function EventosPage() {
  const supabase = await createClient();

  // Buscar eventos ativos ordenados pela data mais próxima
  // Filtramos para mostrar todos os eventos ativos independentemente da data (ou poderíamos filtrar apenas futuros, mas para o momento, listar os ativos é o ideal)
  const { data: eventos, error } = await supabase
    .from('eventos')
    .select('*')
    .eq('status', 'ativo')
    .order('data_inicio', { ascending: true });

  if (error) {
    console.error('Erro ao buscar eventos:', error);
  }

  const listaEventos = eventos || [];

  return (
    <div className="py-12 lg:py-20 bg-brand-cream-light min-h-screen">
      <Container>
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="mb-3 flex items-center justify-center gap-3 text-brand-gold-dark">
            <span className="h-px w-8 bg-brand-gold/60" aria-hidden />
            <CalendarHeart className="h-5 w-5" strokeWidth={1.5} />
            <span className="h-px w-8 bg-brand-gold/60" aria-hidden />
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-brand-green-dark">
            Agenda da Paróquia
          </h1>
          <p className="mt-4 text-lg text-brand-green-dark/70">
            Acompanhe os próximos retiros, encontros, formações e celebrações especiais da nossa comunidade.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {listaEventos.length > 0 ? (
            listaEventos.map((evento) => {
              const dateObj = new Date(evento.data_inicio);
              const dia = dateObj.toLocaleDateString('pt-BR', { day: '2-digit' });
              const mes = dateObj.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '').toUpperCase();
              const hora = dateObj.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
              
              // Se a hora for "00:00", podemos assumir que é evento de dia inteiro ou não especificado.
              const isFullDay = hora === "00:00";

              return (
                <div 
                  key={evento.id} 
                  className="group flex flex-col md:flex-row bg-white rounded-2xl shadow-sm hover:shadow-md border border-brand-green/10 transition-all overflow-hidden"
                >
                  {/* Bloco de Data (Destaque) */}
                  <div className="flex-shrink-0 bg-brand-green-deep flex flex-row md:flex-col items-center justify-center p-6 md:w-36 text-center">
                    <span className="text-brand-gold text-lg md:text-xl font-semibold tracking-wider uppercase md:mb-1 mr-3 md:mr-0">
                      {mes}
                    </span>
                    <span className="text-white text-4xl md:text-5xl font-bold font-serif leading-none">
                      {dia}
                    </span>
                  </div>
                  
                  {/* Imagem Opcional */}
                  {evento.imagem && (
                    <div className="w-full md:w-48 h-48 md:h-auto flex-shrink-0 overflow-hidden bg-gray-100 hidden sm:block">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={evento.imagem} 
                        alt={evento.titulo} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  )}

                  {/* Conteúdo do Evento */}
                  <div className="flex flex-col justify-center p-6 md:p-8 flex-grow">
                    <h2 className="font-serif text-2xl font-bold text-brand-green-dark mb-3">
                      {evento.titulo}
                    </h2>
                    
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-gray-600 mb-4 font-medium">
                      {!isFullDay && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-brand-gold-dark" />
                          <span>{hora}</span>
                        </div>
                      )}
                      {evento.local && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-brand-gold-dark" />
                          <span>{evento.local}</span>
                        </div>
                      )}
                    </div>
                    
                    {evento.descricao_curta && (
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {evento.descricao_curta}
                      </p>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
              <CalendarHeart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Não há eventos no momento</h3>
              <p className="text-gray-500">
                Não há novos eventos agendados no momento. Fique de olho em nossa página inicial e acompanhe nossos avisos semanais para novidades!
              </p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
