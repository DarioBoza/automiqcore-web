import React from 'react';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    category: "Atención al Cliente",
    title: "Soporte Autónomo 24/7",
    problem: "Un equipo de soporte saturado respondiendo las mismas dudas sobre precios, horarios y estados de pedido.",
    solution: "Implementación de un Agente IA entrenado con el FAQ de la empresa e integrado con WhatsApp y la web.",
    result: "Reducción del 70% en tickets manuales y aumento de la satisfacción del cliente por respuestas inmediatas."
  },
  {
    category: "Ventas B2B",
    title: "Clasificación Automática de Leads",
    problem: "Comerciales perdiendo tiempo valioso intentando contactar a prospectos no calificados que llegan desde campañas publicitarias.",
    solution: "Un bot conversacional que pre-califica leads mediante preguntas clave y los envía directamente al CRM solo si cumplen el perfil.",
    result: "El equipo de ventas dedica el 100% de su tiempo a cerrar tratos reales, aumentando la tasa de conversión en un 25%."
  },
  {
    category: "Operaciones",
    title: "Reportes Inteligentes Automáticos",
    problem: "Directivos esperando días a que los gerentes consoliden datos de diferentes plataformas para tomar decisiones.",
    solution: "Automatización que extrae datos de ERP, CRM y Google Analytics, generando un reporte ejecutivo en lenguaje natural.",
    result: "Visibilidad total del negocio en tiempo real cada mañana, ahorrando 15 horas semanales de trabajo manual."
  }
];

export function UseCases() {
  return (
    <section id="casos-uso" className="py-24 bg-dark-lighter/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand uppercase tracking-wider mb-2">Casos de Uso</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            La Inteligencia Artificial en <span className="text-gradient-brand">acción</span>
          </h3>
          <p className="text-lg text-white/70">
            Ejemplos reales de cómo nuestras soluciones resuelven problemas cotidianos y generan un impacto medible en las empresas.
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((useCase, index) => (
            <div key={index} className="glass-card p-6 md:p-10 border border-white/5 flex flex-col md:flex-row gap-8 lg:gap-12 hover:border-white/10 transition-colors">
              <div className="md:w-1/3">
                <span className="text-brand text-sm font-bold tracking-wider uppercase mb-3 block">{useCase.category}</span>
                <h4 className="text-2xl font-bold text-white">{useCase.title}</h4>
              </div>
              
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" /> El Problema
                  </h5>
                  <p className="text-white/60 text-sm leading-relaxed">{useCase.problem}</p>
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand" /> La Solución
                  </h5>
                  <p className="text-white/60 text-sm leading-relaxed">{useCase.solution}</p>
                </div>
                <div className="sm:col-span-2 pt-4 border-t border-white/10">
                  <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" /> El Resultado
                  </h5>
                  <p className="text-white/80 font-medium">{useCase.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
