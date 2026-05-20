import React from 'react';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    category: "Captación de Leads",
    title: "Respuesta automática a clientes potenciales",
    problem: "Los clientes escriben por WhatsApp o Instagram y nadie responde rápido.",
    solution: "Un agente IA responde instantáneamente, califica al cliente y agenda reuniones.",
    result: "Más conversiones y menos clientes perdidos."
  },
  {
    category: "Ventas",
    title: "Seguimiento automático de prospectos",
    problem: "Los leads se enfrían porque nadie hace seguimiento.",
    solution: "El sistema envía recordatorios, mensajes y correos automáticamente.",
    result: "Más cierres sin trabajo manual."
  },
  {
    category: "Atención al cliente",
    title: "Soporte 24/7 con IA",
    problem: "El equipo responde siempre las mismas preguntas.",
    solution: "Chat IA entrenado con información del negocio.",
    result: "Menos carga operativa y respuestas inmediatas."
  },
  {
    category: "Restaurantes / locales",
    title: "Reservas automáticas",
    problem: "Las reservas se pierden o se mezclan en WhatsApp.",
    solution: "Sistema que toma reservas y confirma automáticamente.",
    result: "Mejor organización y menos errores."
  },
  {
    category: "Clínicas / consultorios",
    title: "Confirmación automática de citas",
    problem: "Pacientes olvidan sus citas.",
    solution: "Recordatorios automáticos por WhatsApp o correo.",
    result: "Menos ausencias y agenda más ordenada."
  },
  {
    category: "Ecommerce",
    title: "Recuperación de clientes abandonados",
    problem: "Clientes dejan productos en carrito y no vuelven.",
    solution: "Correos o mensajes automáticos de recuperación.",
    result: "Recuperación de ventas perdidas."
  },
  {
    category: "Gestión interna",
    title: "Automatización de tareas repetitivas",
    problem: "El equipo pierde horas copiando datos entre plataformas.",
    solution: "Integración automática entre formularios, Excel, CRM y correo.",
    result: "Ahorro de tiempo y menos errores humanos."
  },
  {
    category: "Redes sociales",
    title: "Generación de contenido con IA",
    problem: "No hay tiempo para crear contenido constante.",
    solution: "Sistema IA que ayuda a generar ideas, copies y publicaciones.",
    result: "Más presencia digital con menos esfuerzo."
  }
];

export function UseCases() {
  return (
    <section id="casos-uso" className="py-24 bg-dark-lighter/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand uppercase tracking-wider mb-2">Casos de Uso</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Las <span className="text-gradient-brand">Automatizaciones</span> en acción
          </h3>
          <p className="text-lg text-foreground/70">
            Ejemplos reales de cómo nuestras soluciones resuelven problemas cotidianos y generan un impacto medible en las empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((useCase, index) => (
            <div key={index} className="glass-card p-6 md:p-8 border border-foreground/5 flex flex-col gap-6 hover:border-foreground/10 transition-all hover:-translate-y-1">
              <div>
                <span className="text-brand text-xs font-bold tracking-wider uppercase mb-3 block">{useCase.category}</span>
                <h4 className="text-xl font-bold text-foreground leading-snug">{useCase.title}</h4>
              </div>

              <div className="space-y-5 mt-auto">
                <div>
                  <h5 className="text-foreground text-sm font-semibold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500/80" /> Problema
                  </h5>
                  <p className="text-foreground/60 text-sm leading-relaxed">{useCase.problem}</p>
                </div>
                <div>
                  <h5 className="text-foreground text-sm font-semibold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand/80" /> Automatización
                  </h5>
                  <p className="text-foreground/60 text-sm leading-relaxed">{useCase.solution}</p>
                </div>
                <div className="pt-4 border-t border-foreground/5">
                  <h5 className="text-foreground text-sm font-semibold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500/80" /> Resultado
                  </h5>
                  <p className="text-foreground/80 text-sm font-medium leading-relaxed">{useCase.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
