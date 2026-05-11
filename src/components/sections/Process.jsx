import React from 'react';

const steps = [
  {
    number: "01",
    title: "Diagnóstico Profundo",
    description: "Analizamos tus operaciones actuales, identificamos cuellos de botella y evaluamos la viabilidad técnica y el ROI de implementar soluciones de IA."
  },
  {
    number: "02",
    title: "Diseño de Solución",
    description: "Arquitectamos el sistema exacto que necesitas. Seleccionamos las mejores herramientas (LLMs, automatizadores) y trazamos el mapa de implementación."
  },
  {
    number: "03",
    title: "Implementación",
    description: "Desarrollamos, integramos y probamos exhaustivamente la solución en tu entorno, asegurando que funcione sin interrumpir tus operaciones diarias."
  },
  {
    number: "04",
    title: "Optimización Continua",
    description: "Monitoreamos el rendimiento, ajustamos parámetros y escalamos las soluciones a medida que tu empresa crece y las tecnologías avanzan."
  }
];

export function Process() {
  return (
    <section id="proceso" className="py-24 bg-dark-lighter/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand uppercase tracking-wider mb-2">Cómo Trabajamos</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Un método probado hacia la <span className="text-gradient-brand">eficiencia</span>
          </h3>
          <p className="text-lg text-white/70">
            No improvisamos. Nuestro proceso garantiza resultados medibles y una transición fluida hacia operaciones impulsadas por IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (hidden on mobile, visible on lg) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[2px] bg-gradient-to-r from-brand/50 to-transparent z-0" />
              )}
              
              <div className="relative z-10 glass-card p-8 h-full flex flex-col items-start border border-white/5 hover:border-brand/30 transition-colors">
                <div className="text-4xl font-black text-white/5 mb-6 group-hover:text-brand/20 transition-colors">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold text-white mb-4 relative inline-block">
                  {step.title}
                  <div className="absolute -bottom-2 left-0 w-8 h-1 bg-brand rounded-full transition-all group-hover:w-full" />
                </h4>
                <p className="text-white/60 leading-relaxed mt-2">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
