import React from 'react';
import { CalendarCheck, SearchCode, LineChart, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProcessProps {
  onOpenSchedule: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenSchedule }) => {
  const steps = [
    {
      step: 'Passo 1',
      title: 'Agendamento',
      description: 'Entre em contato pelo WhatsApp e consulte os dias e horários disponíveis de acordo com a sua preferência.',
      icon: CalendarCheck,
      badge: 'Rápido & Prático',
    },
    {
      step: 'Passo 2',
      title: 'Avaliação',
      description: 'Uma avaliação individual detalhada para compreender suas queixas, histórico clínico e necessidades biomecânicas.',
      icon: SearchCode,
      badge: '100% Individual',
    },
    {
      step: 'Passo 3',
      title: 'Acompanhamento',
      description: 'Planejamento e acompanhamento fisioterapêutico contínuo conforme seus objetivos reais de reabilitação e qualidade de vida.',
      icon: LineChart,
      badge: 'Evolução Contínua',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-[#0b1413] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary px-3 py-1 text-xs">
            Jornada do Paciente
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Como funciona o <span className="text-primary">atendimento</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Um processo claro e organizado desde o primeiro contato até o alcance dos seus objetivos de saúde.
          </p>
        </div>

        {/* Steps display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-[#14211f] p-8 rounded-2xl border border-primary/20 text-left flex flex-col justify-between hover:border-primary/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
                      {item.step}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#0b1413] border border-primary/30 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center text-xs text-primary font-medium">
                  <span>Etapa {index + 1} de 3</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="pt-12 text-center">
          <Button
            size="lg"
            onClick={onOpenSchedule}
            className="bg-primary text-[#0b1413] hover:bg-primary/90 font-bold gap-2 px-8 py-6 text-sm sm:text-base shadow-xl shadow-primary/20 hover:scale-105 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>QUERO AGENDAR MINHA AVALIAÇÃO</span>
          </Button>
        </div>

      </div>
    </section>
  );
};