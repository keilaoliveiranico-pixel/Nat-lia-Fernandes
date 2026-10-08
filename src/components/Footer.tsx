import React from 'react';
import { Sparkles, Instagram, MessageCircle, MapPin, Clock, ShieldCheck, ExternalLink, Heart } from 'lucide-react';
import { CLINIC_INFO, ETHICAL_NOTE } from '@/data/physioData';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  return (
    <footer className="bg-background text-foreground pt-16 pb-12 border-t border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 4-column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-left">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold text-foreground block">
                  {CLINIC_INFO.name} | Fisioterapia
                </span>
                <span className="text-xs text-emerald-400 font-mono">
                  {CLINIC_INFO.crefito}
                </span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              Fisioterapia humanizada, reabilitação ortopédica, prevenção de dores e saúde funcional com atendimento individual e exclusivo.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/60 hover:bg-secondary text-xs text-foreground hover:text-primary transition-all border border-border"
              >
                <Instagram className="w-4 h-4 text-emerald-400" />
                <span>{CLINIC_INFO.instagramHandle}</span>
              </a>

              <a
                href={`https://wa.me/${CLINIC_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/60 hover:bg-secondary text-xs text-foreground hover:text-primary transition-all border border-border"
              >
                <MessageCircle className="w-4 h-4 text-primary" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><a href="#hero" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre a Dra. Nat</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços & Terapias</a></li>
              <li><a href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a></li>
              <li><a href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</a></li>
              <li><a href="#galeria" className="hover:text-primary transition-colors">Galeria</a></li>
              <li><a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          {/* Location & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Endereço & Contato</span>
            </h4>
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <p className="text-foreground font-medium">{CLINIC_INFO.address.street}</p>
              <p>{CLINIC_INFO.address.neighborhood} - {CLINIC_INFO.address.city}</p>
              <p>CEP: {CLINIC_INFO.address.cep}</p>
              <p className="pt-2 text-foreground font-semibold">WhatsApp: {CLINIC_INFO.phoneFormatted}</p>
              <p>E-mail: {CLINIC_INFO.email}</p>
            </div>
          </div>

          {/* Office Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Horários</span>
            </h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              {CLINIC_INFO.hours.map((h, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-secondary/40 border border-border/50">
                  <span className="block font-semibold text-foreground">{h.days}</span>
                  <span className="text-emerald-300">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Ethical Disclaimer Box (COFFITO Compliance) */}
        <div className="p-4 rounded-xl bg-secondary/20 border border-border/40 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Normas Éticas e Publicidade Profissional (COFFITO / CREFITO)</span>
          </div>
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            {ETHICAL_NOTE}
          </p>
        </div>

        {/* Copyright & Legal Links */}
        <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {CLINIC_INFO.name} - Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-primary transition-colors underline underline-offset-4"
            >
              Política de Privacidade & Termos
            </button>
            <span>•</span>
            <span className="text-emerald-400 font-mono">{CLINIC_INFO.crefito}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};