import React from 'react';
import { Workflow, Bot, LayoutTemplate, Globe, Network } from 'lucide-react';

const services = [
  {
    icon: <Workflow className="w-8 h-8 text-brand" />,
    title: "Automatización de Procesos",
    description: "Diseñamos e integramos flujos de trabajo autónomos que enlazan tus sistemas internos, erradicando tareas manuales repetitivas y cuellos de botella operativos.",
    benefit: "Libera al talento humano de la carga operativa rutinaria."
  },
  {
    icon: <Bot className="w-8 h-8 text-brand" />,
    title: "Sistemas de Atención Automatizada",
    description: "Desarrollamos soluciones de procesamiento de lenguaje natural e integraciones de datos que responden consultas de clientes, califican leads y coordinan agendas sin intervención humana.",
    benefit: "Disponibilidad garantizada y respuestas precisas 24/7."
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-brand" />,
    title: "Plataformas Web y Portales Corporativos",
    description: "Desarrollamos infraestructuras web rápidas, seguras y escalables que transmiten el nivel de autoridad y profesionalismo premium de tu organización.",
    benefit: "Seguridad y rendimiento alineados a estándares empresariales."
  },
  {
    icon: <Globe className="w-8 h-8 text-brand" />,
    title: "Sistemas de Conversión y CRO",
    description: "Estructuramos plataformas de aterrizaje optimizadas técnicamente para maximizar la captación de leads comerciales y acelerar tus ciclos de ventas.",
    benefit: "Incremento medible del retorno de tus activos digitales."
  },
  {
    icon: <Network className="w-8 h-8 text-brand" />,
    title: "Integración de Sistemas y Datos",
    description: "Unificamos de forma robusta tu CRM, ERP, bases de datos y herramientas de terceros para lograr flujos de información bidireccionales y centralizados.",
    benefit: "Centralización absoluta y eliminación de errores de captura."
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand uppercase tracking-wider mb-2">Líneas de Especialización</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Sistemas que <span className="text-gradient-brand">optimizan</span> tu operación
          </h3>
          <p className="text-lg text-foreground/70">
            No vendemos soluciones genéricas. Diseñamos e integramos la infraestructura digital que requiere tu negocio para operar de forma eficiente y ordenada.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(63,22,253,0.15)] w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
              <p className="text-foreground/60 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="pt-4 border-t border-foreground/10">
                <p className="text-sm font-medium text-brand">
                  ✓ {service.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
