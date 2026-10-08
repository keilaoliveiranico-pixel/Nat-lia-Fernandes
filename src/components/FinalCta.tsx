import React from 'react';
import { MessageCircle, Sparkles, ShieldCheck, Heart, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CLINIC_INFO } from '@/data/physioData';

export const FinalCta: React.FC = () => {
  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent("Olá, Dra. Nat Fernandes! Gostaria de dar o primeiro passo e agendar minha avaliação fisioterapêutica.");
    window.open(`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#0d211e] border-y border-primary/20">
      
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Subtle pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-emerald-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span>Atendimento com Vagas Limitadas por Período</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight max-w-3xl mx-auto leading-tight">
          Dê o primeiro passo para{' '}
          <span className="bg-gradient-to-r from-primary via-emerald-300 to-accent bg-clip-text text-transparent">
            cuidar de você.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-emerald-100/80 max-w-2xl mx-auto leading-relaxed">
          Agende sua avaliação e conheça um atendimento pensado exclusivamente para suas necessidades, restabelecendo sua mobilidade, conforto e qualidade de vida.
        </p>

        {/* Big Action Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={handleWhatsAppBooking}
            className="w-full sm:w-auto gap-3 bg-primary text-primary-foreground hover:bg-primary/90 font-extrabold text-lg px-10 py-7 rounded-full shadow-2xl shadow-primary/30 transition-all hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
            <span>AGENDAR PELO WHATSAPP</span>
          </Button>
        </div>

        {/* Reassurance points */}
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-xs text-muted-foreground border-t border-emerald-900/60">
          <div className="flex items-center justify-center gap-2 text-emerald-200/90">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Registro Profissional Ativo</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-emerald-200/90">
            <Heart className="w-4 h-4 text-primary" />
            <span>Atendimento 100% Individual</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-emerald-200/90">
            <Calendar className="w-4 h-4 text-primary" />
            <span>Horários com Pré-agendamento</span>
          </div>
        </div>

      </div>
    </section>
  );
};