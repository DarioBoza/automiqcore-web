import React from 'react';

const steps = [
  {
    number: "01",
    title: "Diagnóstico Operativo",
    description: "Mapeamos tus flujos de trabajo actuales, rastreamos el flujo de datos e identificamos cuellos de botella críticos para proyectar el retorno de inversión (ROI) financiero de cada automatización."
  },
  {
    number: "02",
    title: "Arquitectura de Sistemas",
    description: "Diseñamos el plano técnico del sistema. Definimos los esquemas de bases de datos, las conexiones vía API y los protocolos de procesamiento lógico idóneos para tu negocio."
  },
  {
    number: "03",
    title: "Desarrollo e Integración",
    description: "Codificamos, configuramos los entornos y realizamos pruebas rigurosas en ambientes de staging para garantizar una transición suave, libre de fricciones y sin detener tus operaciones."
  },
  {
    number: "04",
    title: "Soporte y Escalabilidad",
    description: "Monitoreamos la infraestructura digital de forma constante para prevenir incidentes, adaptamos las integraciones a nuevas herramientas y expandimos el sistema a la par del crecimiento de tu empresa."
  }
];

export function Process() {
  return (
    <section id="proceso" className="py-24 bg-dark-lighter/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand uppercase tracking-wider mb-2">Metodología de Trabajo</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Ingeniería aplicada a la <span className="text-gradient-brand">eficiencia</span>
          </h3>
          <p className="text-lg text-foreground/70">
            No improvisamos. Aplicamos un proceso riguroso que garantiza la estabilidad de los sistemas y la consistencia en el rendimiento operativo de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (hidden on mobile, visible on lg) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[2px] bg-gradient-to-r from-brand/50 to-transparent z-0" />
              )}
              
              <div className="relative z-10 glass-card p-8 h-full flex flex-col items-start border border-foreground/5 hover:border-brand/30 transition-colors">
                <div className="text-4xl font-black text-foreground/5 mb-6 group-hover:text-brand/20 transition-colors">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4 relative inline-block">
                  {step.title}
                  <div className="absolute -bottom-2 left-0 w-8 h-1 bg-brand rounded-full transition-all group-hover:w-full" />
                </h4>
                <p className="text-foreground/60 leading-relaxed mt-2">
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
