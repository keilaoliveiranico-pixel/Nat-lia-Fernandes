import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, Award, Heart, CheckCircle2, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CLINIC_INFO } from '@/data/physioData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá, Dra. Nat Fernandes! Gostaria de agendar minha avaliação fisioterapêutica individualizada.");
    window.open(`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${message}`, '_blank');
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-40 right-10 w-[350px] h-[350px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/80 border border-primary/30 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="text-xs font-semibold text-emerald-300">
                Atendimento Humanizado & Especializado
              </span>
              <span className="text-muted-foreground text-xs">•</span>
              <span className="text-xs text-muted-foreground">{CLINIC_INFO.crefito}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Seu bem-estar merece um{' '}
              <span className="bg-gradient-to-r from-primary via-emerald-300 to-accent bg-clip-text text-transparent">
                cuidado especial.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Cuidado fisioterapêutico humanizado, com atenção às suas necessidades e foco na sua qualidade de vida. Agende uma avaliação detalhada e descubra o tratamento sob medida para o seu corpo.
            </p>

            {/* Trust Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-foreground/90">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Consultas individuais de 50 a 60 min</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-foreground/90">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Avaliação biomecânica criteriosa</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-foreground/90">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Condutas baseadas em evidências</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-foreground/90">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Ambiente acolhedor e seguro</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="gap-2.5 bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base px-8 py-6 rounded-full shadow-lg shadow-primary/25 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>AGENDAR MINHA AVALIAÇÃO</span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-border/80 hover:bg-secondary/70 text-foreground font-semibold px-6 py-6 rounded-full transition-all"
              >
                <a href="#sobre" className="flex items-center gap-2">
                  <span>CONHEÇA MEU TRABALHO</span>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </a>
              </Button>
            </div>

            {/* Micro Social Proof Badge */}
            <div className="pt-4 flex items-center gap-4 border-t border-border/40">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="w-8 h-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs font-bold text-primary">
                    <Heart className="w-3.5 h-3.5 fill-primary/30" />
                  </div>
                ))}
              </div>
              <div className="text-xs text-muted-foreground">
                <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-emerald-400" />
                  <Star className="w-3.5 h-3.5 fill-emerald-400" />
                  <Star className="w-3.5 h-3.5 fill-emerald-400" />
                  <Star className="w-3.5 h-3.5 fill-emerald-400" />
                  <Star className="w-3.5 h-3.5 fill-emerald-400" />
                  <span className="text-foreground ml-1">Atendimento 5.0</span>
                </div>
                <span>Pacientes satisfeitas com o cuidado personalizado</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative gradient border frame */}
              <div className="relative rounded-3xl p-1.5 bg-gradient-to-b from-primary/40 via-emerald-400/20 to-transparent shadow-2xl">
                <div className="relative rounded-[22px] overflow-hidden bg-secondary/60 aspect-[4/5] sm:aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1594824813590-789a5b12cca4?auto=format&fit=crop&w=900&q=80"
                    alt="Nat Fernandes - Fisioterapeuta"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  
                  {/* Photo Overlay Caption */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-card text-left space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Nat Fernandes
                      </span>
                      <span className="text-[10px] text-muted-foreground">{CLINIC_INFO.crefito}</span>
                    </div>
                    <p className="text-xs text-foreground/90 font-medium">
                      Especialista em Reabilitação & Movimento Funcional
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Floating Card 1: Avaliação 100% Individual */}
              <div className="absolute -top-4 -left-4 sm:-left-6 p-3.5 rounded-2xl glass-card flex items-center gap-3 shadow-xl animate-float">
                <div className="w-9 h-9 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-foreground">100% Individual</div>
                  <div className="text-[10px] text-muted-foreground">Sem divisão de horários</div>
                </div>
              </div>

              {/* Floating Floating Card 2: Horários Flexíveis */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 p-3.5 rounded-2xl glass-card flex items-center gap-3 shadow-xl animate-float" style={{ animationDelay: '3s' }}>
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-foreground">Agenda Personalizada</div>
                  <div className="text-[10px] text-muted-foreground">Consulte disponibilidade</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};