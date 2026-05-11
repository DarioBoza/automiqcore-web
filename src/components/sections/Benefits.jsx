import React from 'react';
import { Target, Lightbulb, TrendingUp, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: <Target className="w-6 h-6 text-brand" />,
    title: "Enfoque en Resultados",
    description: "No implementamos tecnología por moda. Cada proyecto está diseñado para impactar directamente en tus KPIs: más ventas, menos costos operativos o mayor retención de clientes."
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-brand" />,
    title: "Soluciones a Medida",
    description: "Entendemos que cada negocio es único. Adaptamos los modelos de IA y flujos de trabajo específicamente a tu industria, procesos y desafíos particulares."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-brand" />,
    title: "IA Práctica y Escalable",
    description: "Nos alejamos de la teoría. Entregamos herramientas funcionales que tu equipo puede usar desde el día uno y que crecen junto con tu empresa."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand" />,
    title: "Acompañamiento Continuo",
    description: "La tecnología evoluciona rápido y nosotros estamos a tu lado. Ofrecemos soporte, mantenimiento y entrenamiento para asegurar el éxito a largo plazo."
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
            <h2 className="text-sm font-bold text-brand uppercase tracking-wider mb-2">Por qué elegirnos</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Diferenciales que marcan la <span className="text-gradient-brand">diferencia</span>
            </h3>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              En AUTOMIQ -CORE-, no somos solo desarrolladores; somos consultores de negocio especializados en Inteligencia Artificial. Nuestro compromiso es transformar la complejidad tecnológica en rentabilidad simple y clara.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="glass-card p-6 border-l-2 border-l-brand rounded-r-2xl border-y border-r border-white/5">
                <div className="text-3xl font-black text-white mb-1">+40%</div>
                <div className="text-sm text-white/60">Ahorro en tiempo operativo</div>
              </div>
              <div className="glass-card p-6 border-l-2 border-l-brand rounded-r-2xl border-y border-r border-white/5">
                <div className="text-3xl font-black text-white mb-1">24/7</div>
                <div className="text-sm text-white/60">Operatividad sin interrupciones</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card p-6 border border-white/5 hover:bg-white/[0.05] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-dark-lighter flex items-center justify-center mb-4 border border-white/5">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-sm text-white/60 leading-relaxed">
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
