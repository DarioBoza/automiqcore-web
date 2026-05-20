import React from 'react';
import { Target, Lightbulb, TrendingUp, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: <Target className="w-6 h-6 text-brand" />,
    title: "Enfoque en Rentabilidad",
    description: "No instalamos tecnología por moda. Cada flujo de información y sistema integrado está estructurado para impactar directamente tus KPIs de negocio: reducción de costos operativos, velocidad de entrega o retención de cuentas."
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-brand" />,
    title: "Arquitectura a Medida",
    description: "No creemos en soluciones genéricas listas para usar. Adaptamos la lógica de automatización y el modelado de datos a la infraestructura de software y procesos particulares de tu organización."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-brand" />,
    title: "Sistemas Robustos y Escalables",
    description: "Desarrollamos bajo estándares de alta estabilidad y documentación. Creamos flujos limpios y modulares que tu equipo puede operar con confianza y que crecen orgánicamente junto con la empresa."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand" />,
    title: "Soporte e Ingeniería Continua",
    description: "Las herramientas y APIs cambian constantemente. Estamos a tu lado con un servicio de mantenimiento preventivo, optimización proactiva y actualizaciones de seguridad a largo plazo."
  }
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-sm font-bold text-brand uppercase tracking-wider mb-2">Ventajas Competitivas</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              Sólida experiencia para tu <span className="text-gradient-brand">tranquilidad</span>
            </h3>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              En AUTOMIQ -CORE- actuamos como tus socios tecnológicos y consultores de sistemas. Diseñamos e implementamos flujos operativos estables y seguros, eliminando el desorden manual para que te enfoques exclusivamente en la estrategia de tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-8">
              <div className="glass-card p-6 border-l-2 border-l-brand rounded-r-2xl border-y border-r border-foreground/5">
                <div className="text-3xl font-black text-foreground mb-1">+40%</div>
                <div className="text-sm text-foreground/60">Eficiencia en tiempos operativos</div>
              </div>
              <div className="glass-card p-6 border-l-2 border-l-brand rounded-r-2xl border-y border-r border-foreground/5">
                <div className="text-3xl font-black text-foreground mb-1">0%</div>
                <div className="text-sm text-foreground/60">Fricción en transferencia de datos</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card p-6 border border-foreground/5 hover:bg-foreground/[0.05] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-dark-lighter flex items-center justify-center mb-4 border border-foreground/5">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
