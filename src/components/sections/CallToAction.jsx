import React from 'react';
import { Button } from '../ui/Button';
import { Rocket, CheckCircle2 } from 'lucide-react';

export function CallToAction() {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-brand/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/20 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-[2.5rem] p-8 md:p-16 border border-brand/20 relative overflow-hidden text-center shadow-[0_0_50px_rgba(63,22,253,0.1)]">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent" />
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-brand/20">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              ¿Listo para automatizar <br className="hidden md:block" /> tu éxito?
            </h2>
            
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Agenda una sesión estratégica gratuita de 30 minutos. Evaluaremos tus procesos actuales y te mostraremos exactamente dónde la IA puede generar el mayor ROI para tu negocio.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button href="mailto:contacto@automiqcore.com" size="lg" className="w-full sm:w-auto text-lg px-8">
                Agendar Sesión Gratuita
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-white/60 font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand" /> Sin compromiso
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand" /> 100% Confidencial
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand" /> Propuesta a medida
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
