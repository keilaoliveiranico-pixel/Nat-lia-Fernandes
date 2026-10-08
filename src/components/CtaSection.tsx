import React from 'react';
import { MessageCircle, Sparkles, Shield, Clock, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CtaSectionProps {
  onOpenSchedule: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenSchedule }) => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-[#0e1f1c] via-[#142925] to-[#0b1413] border-y border-primary/20 relative overflow-hidden">
      {/* Background glowing sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold tracking-wide uppercase">
          <Sparkles className="w-4 h-4" />
          <span>Atendimento com Hora Marcada</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Dê o primeiro passo para <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-primary via-[#a7f3d0] to-teal-200 bg-clip-text text-transparent">
            cuidar de você.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
          Agende sua avaliação fisioterapêutica e conheça um atendimento planejado exclusivamente para as suas necessidades e objetivos de saúde.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={onOpenSchedule}
            className="w-full sm:w-auto bg-primary text-[#0b1413] hover:bg-primary/90 font-extrabold text-base px-9 py-6 h-auto gap-3 shadow-xl shadow-primary/25 hover:scale-105 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>AGENDAR PELO WHATSAPP</span>
          </Button>

          <a
            href="https://www.instagram.com/natfernandes_fisio/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-md text-sm font-semibold border border-primary/40 text-white hover:bg-primary/10 h-13 px-6 transition-all"
          >
            <span>Ver Instagram @natfernandes_fisio</span>
          </a>
        </div>

        {/* Small trust footer */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-primary" />
            Atendimento com Registro Profissional
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary" />
            Respostas Rápidas no WhatsApp
          </span>
          <span className="flex items-center gap-1.5">
            <PhoneCall className="w-4 h-4 text-primary" />
            Dúvidas e Triagem Inicial
          </span>
        </div>

      </div>
    </section>
  );
};