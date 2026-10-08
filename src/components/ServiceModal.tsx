import React from 'react';
import { X, CheckCircle2, Clock, Sparkles, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceItem, CLINIC_INFO } from '@/data/physioData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(`Olá, Dra. Nat Fernandes! Gostaria de agendar uma avaliação para o tratamento de *${service.title}*.`);
    window.open(`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative max-w-2xl w-full bg-card rounded-3xl border border-primary/30 shadow-2xl overflow-hidden my-8 animate-fade-in text-left">
        
        {/* Header Image */}
        <div className="relative h-60 bg-secondary/80">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/80 text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
            aria-label="Fechar detalhes"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30 backdrop-blur-md">
              {service.format}
            </span>
            <h3 className="text-2xl font-bold text-foreground mt-2">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {service.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Indications */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                Indicações Comuns
              </h4>
              <ul className="space-y-1.5">
                {service.indications.map((ind, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-foreground/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Benefícios do Tratamento
              </h4>
              <ul className="space-y-1.5">
                {service.benefits.map((ben, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-foreground/80">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-secondary/40 border border-border/50 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Duração estimada: <strong className="text-foreground">{service.duration}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Atendimento Individual</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <Button
              onClick={handleWhatsAppInquiry}
              className="w-full sm:flex-1 gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-6 rounded-xl shadow-lg shadow-primary/20"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Agendar Avaliação para este Serviço</span>
            </Button>

            <Button
              variant="outline"
              onClick={onClose}
              className="w-full sm:w-auto border-border hover:bg-secondary text-foreground"
            >
              Fechar
            </Button>
          </div>

        </div>

      </div>
    </div>
  );
};