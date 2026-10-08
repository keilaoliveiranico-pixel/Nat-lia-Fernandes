import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';
import { CLINIC_INFO } from '@/data/physioData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSend = (text?: string) => {
    const message = encodeURIComponent(text || customMsg || "Olá, Nat! Gostaria de agendar uma avaliação fisioterapêutica.");
    window.open(`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${message}`, '_blank');
    setIsOpen(false);
  };

  const quickPrompts = [
    "Quero agendar uma avaliação fisioterapêutica",
    "Gostaria de saber os horários disponíveis",
    "Tenho dores nas costas e preciso de ajuda",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Interactive Chat Popup Preview */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl glass-card border-primary/40 shadow-2xl p-4 animate-fade-in text-left">
          <div className="flex items-center justify-between pb-3 border-b border-border/50">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs">
                NF
              </div>
              <div>
                <h4 className="text-xs font-bold text-foreground">{CLINIC_INFO.name}</h4>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Atendimento WhatsApp
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground p-1 rounded-md"
              aria-label="Fechar popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 space-y-2">
            <div className="p-3 rounded-xl bg-secondary/60 text-xs text-foreground leading-relaxed border border-border/40">
              Olá! Como posso te ajudar hoje com o seu bem-estar e reabilitação? Escolha uma opção ou digite sua dúvida:
            </div>

            <div className="space-y-1.5 pt-1">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="w-full text-left p-2 rounded-lg bg-secondary/30 hover:bg-primary/20 text-[11px] text-muted-foreground hover:text-emerald-300 transition-colors border border-border/30 flex items-center justify-between"
                >
                  <span className="truncate">{prompt}</span>
                  <Send className="w-3 h-3 text-primary shrink-0 ml-1" />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 flex items-center gap-2 border-t border-border/40">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-secondary/50 text-xs text-foreground px-3 py-2 rounded-lg border border-border/60 focus:outline-none focus:border-primary"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105"
              aria-label="Enviar para WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-2xl shadow-primary/40 hover:scale-110 transition-all active:scale-95"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-background animate-pulse" />
        <MessageCircle className="w-7 h-7 fill-current" />
      </button>

    </div>
  );
};