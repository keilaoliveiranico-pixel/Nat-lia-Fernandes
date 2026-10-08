import React from 'react';
import { MessageCircle, Stethoscope, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HOW_IT_WORKS_STEPS, CLINIC_INFO } from '@/data/physioData';

const stepIconMap = {
  MessageCircle: MessageCircle,
  Stethoscope: Stethoscope,
  Sparkles: Sparkles,
};

export const HowItWorks: React.FC = () => {
  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent("Olá, Nat! Gostaria de agendar minha avaliação conforme o Passo 1 do site.");
    window.open(`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${message}`, '_blank');
  };

  return (
    <section id="como-funciona" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <Badge variant="outline" className="gap-1.5 px-3.5 py-1 text-primary border-primary/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Jornada de Cuidado</span>
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Como funciona o atendimento?
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground">
            Um processo transparente, estruturado e focado em oferecer conforto e resultados funcionais desde o primeiro contato.
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {HOW_IT_WORKS_STEPS.map((item, index) => {
            const StepIcon = stepIconMap[item.icon as keyof typeof stepIconMap] || MessageCircle;

            return (
              <div
                key={item.step}
                className="glass-card glass-card-hover rounded-2xl p-8 text-left space-y-5 relative flex flex-col justify-between"
              >
                {/* Step pill */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                    {item.step}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">0{index + 1} / 03</span>
                </div>

                <div className="space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/80 border border-primary/30 text-primary flex items-center justify-center">
                    <StepIcon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/40 text-xs text-emerald-300/80 font-medium">
                  {index === 0 && "• Resposta rápida e flexibilidade de dias"}
                  {index === 1 && "• Anamnese detalhada e testes físicos"}
                  {index === 2 && "• Plano de metas e evolução contínua"}
                </div>
              </div>
            );
          })}
        </div>

        {/* Centralized CTA */}
        <div className="mt-14 text-center">
          <Button
            size="lg"
            onClick={handleWhatsAppBooking}
            className="gap-2.5 bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base px-9 py-6 rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>QUERO AGENDAR MINHA AVALIAÇÃO</span>
          </Button>
          <p className="text-xs text-muted-foreground mt-3">
            Atendimento presencial com agendamento prévio.
          </p>
        </div>

      </div>
    </section>
  );
};