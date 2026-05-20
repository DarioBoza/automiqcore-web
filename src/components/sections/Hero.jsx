import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, Bot, Zap, BarChart3 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand/30 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-brand text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            La Agencia de IA para el Futuro B2B
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Impulsa tu negocio con <br className="hidden md:block" />
            <span className="text-gradient-brand">Soluciones Digitales</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Ayudamos a empresas a optimizar procesos, reducir costos y escalar resultados mediante Webs, Automatizaciones avanzadas y Agentes Inteligentes personalizados.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contacto" size="lg" className="w-full sm:w-auto flex items-center gap-2">
              Contáctanos <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="/servicios" variant="outline" size="lg" className="w-full sm:w-auto">
              Ver servicios
            </Button>
          </div>
        </div>

        {/* Visual Tech Element */}
        <div className="mt-20 md:mt-32 relative">
          <div className="glass-card p-4 md:p-8 rounded-3xl border border-foreground/10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/5 to-transparent pointer-events-none" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-dark-lighter/50 rounded-2xl p-6 border border-foreground/5 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-brand/20 rounded-xl flex items-center justify-center mb-4 text-brand">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">Agentes Inteligentes</h3>
                <p className="text-sm text-foreground/60">Atención 24/7 y resolución automática de consultas frecuentes.</p>
              </div>
              <div className="bg-dark-lighter/50 rounded-2xl p-6 border border-foreground/5 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-brand/20 rounded-xl flex items-center justify-center mb-4 text-brand">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">Automatización Total</h3>
                <p className="text-sm text-foreground/60">Conectamos tus herramientas para eliminar tareas repetitivas.</p>
              </div>
              <div className="bg-dark-lighter/50 rounded-2xl p-6 border border-foreground/5 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-brand/20 rounded-xl flex items-center justify-center mb-4 text-brand">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">Decisiones con Datos</h3>
                <p className="text-sm text-foreground/60">Análisis predictivo para impulsar el crecimiento de tu negocio.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
