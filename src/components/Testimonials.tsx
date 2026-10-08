import React, { useState } from 'react';
import { Sparkles, Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { TESTIMONIALS_DATA } from '@/data/physioData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const activeTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="depoimentos" className="py-20 md:py-28 relative bg-secondary/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <Badge variant="outline" className="gap-1.5 px-3.5 py-1 text-primary border-primary/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Experiências Reais</span>
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            O que dizem as pacientes atendidas
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground">
            Relatos voluntários de pacientes reais que confiaram no trabalho e no cuidado individualizado da Dra. Nat Fernandes.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto">
          <Card className="glass-card border-primary/20 relative p-8 md:p-12 overflow-hidden text-left shadow-2xl">
            <Quote className="w-16 h-16 text-primary/10 absolute -top-2 -left-2 pointer-events-none" />

            <CardContent className="p-0 space-y-6 relative z-10">
              {/* Rating stars */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-emerald-400">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-400" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-300/80 bg-emerald-950/50 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  <span>{activeTestimonial.date}</span>
                </div>
              </div>

              {/* Testimonial Quote */}
              <p className="text-base sm:text-lg text-foreground/95 italic leading-relaxed font-serif">
                "{activeTestimonial.text}"
              </p>

              {/* Author & Treatment */}
              <div className="pt-4 border-t border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-base font-bold text-foreground">
                    {activeTestimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {activeTestimonial.role}
                  </p>
                </div>

                <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-md self-start sm:self-auto">
                  {activeTestimonial.treatment}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-primary' : 'w-2 bg-secondary hover:bg-muted-foreground'
                  }`}
                  aria-label={`Ver depoimento ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="w-10 h-10 p-0 rounded-full border-border/80 hover:border-primary text-foreground"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="w-10 h-10 p-0 rounded-full border-border/80 hover:border-primary text-foreground"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Ethical Note Banner */}
        <div className="mt-12 text-center max-w-xl mx-auto">
          <p className="text-[11px] text-muted-foreground/70">
            * Conforme as diretrizes éticas do COFFITO, os depoimentos aqui presentes refletem experiências pessoais e não constituem garantia de resultado para casos clínicos distintos.
          </p>
        </div>

      </div>
    </section>
  );
};