import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, MessageCircle, Instagram, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CLINIC_INFO } from '@/data/physioData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre a Nat', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent("Olá, Nat! Gostaria de obter mais informações e agendar uma avaliação fisioterapêutica.");
    window.open(`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${message}`, '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Professional Subtitle */}
        <a href="#hero" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary/30 to-emerald-400/20 border border-primary/40 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
              {CLINIC_INFO.name}
              <span className="text-xs font-normal text-emerald-400/80 px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/20">Fisio</span>
            </span>
            <span className="text-[11px] text-muted-foreground tracking-wide uppercase font-medium">
              Fisioterapia Integrada
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={CLINIC_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Fisioterapeuta"
            className="p-2 rounded-lg bg-secondary/60 border border-border/80 text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
            title="Siga no Instagram @natfernandes_fisio"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <Button
            size="sm"
            onClick={handleWhatsAppDirect}
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20 font-semibold px-4 rounded-full transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Agendar no WhatsApp</span>
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground hover:bg-secondary/70 rounded-lg"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-background/95 backdrop-blur-xl border-b border-border/80 p-6 shadow-2xl animate-fade-in">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border/50">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Navegação
              </span>
              <Badge variant="outline" className="text-[10px] text-primary border-primary/30">
                {CLINIC_INFO.crefito}
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-lg bg-secondary/40 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-border/50 flex flex-col gap-3">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppDirect();
                }}
                className="w-full gap-2 bg-primary text-primary-foreground font-semibold rounded-xl py-6"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Agendar Avaliação via WhatsApp</span>
              </Button>

              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary/60 text-sm text-foreground hover:text-primary border border-border"
              >
                <Instagram className="w-4 h-4 text-emerald-400" />
                <span>Acompanhar no Instagram ({CLINIC_INFO.instagramHandle})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};