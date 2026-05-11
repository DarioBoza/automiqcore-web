import React from 'react';
import { Workflow, Bot, LayoutTemplate, Globe, Network } from 'lucide-react';

const services = [
  {
    icon: <Workflow className="w-8 h-8 text-brand" />,
    title: "Automatizaciones con IA",
    description: "Elimina procesos manuales y cuellos de botella conectando tus herramientas diarias mediante flujos inteligentes y autónomos.",
    benefit: "Ahorra hasta un 40% de tiempo operativo."
  },
  {
    icon: <Bot className="w-8 h-8 text-brand" />,
    title: "Agentes de IA Personalizados",
    description: "Desarrollamos asistentes virtuales entrenados con la base de conocimiento de tu empresa para atención al cliente y soporte interno.",
    benefit: "Disponibilidad 24/7 y respuestas instantáneas."
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-brand" />,
    title: "Landing Webs de Alta Conversión",
    description: "Diseñamos páginas de aterrizaje enfocadas 100% en captar leads calificados y aumentar tus ventas mediante estrategias CRO.",
    benefit: "Maximiza el ROI de tus campañas publicitarias."
  },
  {
    icon: <Globe className="w-8 h-8 text-brand" />,
    title: "Webs Profesionales",
    description: "Plataformas web modernas, rápidas y escalables que reflejan la autoridad y el nivel de servicio premium de tu negocio.",
    benefit: "Construye confianza y autoridad digital."
  },
  {
    icon: <Network className="w-8 h-8 text-brand" />,
    title: "Integraciones de Sistemas",
    description: "Conectamos tu CRM, ERP, pasarelas de pago y software a medida para que la información fluya sin intervención humana.",
    benefit: "Cero errores humanos en transferencia de datos."
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand uppercase tracking-wider mb-2">Nuestras Soluciones</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Tecnología que <span className="text-gradient-brand">multiplica</span> tus resultados
          </h3>
          <p className="text-lg text-white/70">
            No vendemos software, implementamos sistemas que hacen a tu equipo más eficiente y a tu empresa más rentable.
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
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-white/60 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="pt-4 border-t border-white/10">
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
