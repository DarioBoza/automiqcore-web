import React from 'react';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    category: "Adquisición Comercial",
    title: "Calificación y Agenda en Tiempo Real",
    problem: "Las solicitudes comerciales por WhatsApp o formularios web tardan horas en responderse, enfriando el interés del prospecto.",
    solution: "Un sistema inteligente integrado a tu base de datos y calendario califica el perfil del lead al instante y agenda reuniones directamente.",
    result: "Incremento inmediato de llamadas calificadas agendadas sin carga comercial."
  },
  {
    category: "Ciclo de Ventas",
    title: "Seguimiento Automatizado de Prospectos",
    problem: "Falta de constancia en el seguimiento posterior a la primera cotización, lo que resulta en oportunidades comerciales perdidas.",
    solution: "Configuración de flujos condicionales que envían recordatorios, casos de éxito y reactivaciones personalizadas por correo y WhatsApp.",
    result: "Incremento en cierres al garantizar contacto inmediato y sistemático."
  },
  {
    category: "Atención al Cliente",
    title: "Centro de Soporte Automatizado",
    problem: "Saturación del equipo de soporte resolviendo consultas repetitivas de baja complejidad.",
    solution: "Implementación de una base de conocimiento interactiva integrada en canales oficiales para resolver el 80% de preguntas frecuentes.",
    result: "Reducción radical de tickets y liberación del equipo para casos críticos."
  },
  {
    category: "Servicios / Agendas",
    title: "Confirmación y Gestión de Citas",
    problem: "Alto porcentaje de ausentismo e inasistencias en agendas debido a olvidos de los usuarios.",
    solution: "Sistema de notificaciones automáticas bidireccionales por WhatsApp con confirmación/cancelación de citas en tiempo real.",
    result: "Optimización del tiempo del personal y reducción de inasistencias."
  },
  {
    category: "E-commerce",
    title: "Recuperación de Ventas e Interacciones",
    problem: "Fuga recurrente de ingresos por usuarios que no completan su proceso de pago en la tienda en línea.",
    solution: "Secuencias transaccionales automáticas con ofertas dinámicas basadas en los productos abandonados.",
    result: "Recuperación sistemática de ventas sin intervención comercial manual."
  },
  {
    category: "Operaciones",
    title: "Sincronización Automática entre Plataformas",
    problem: "El equipo operativo invierte horas semanales transcribiendo datos manualmente entre el CRM, hojas de cálculo y ERP.",
    solution: "Integraciones API robustas que automatizan el traspaso de información en tiempo real, garantizando la consistencia de datos.",
    result: "Reducción absoluta de errores humanos y consistencia operativa."
  },
  {
    category: "Finanzas / Administración",
    title: "Automatización de Reportes y Facturación",
    problem: "Demoras y errores en la generación manual de reportes financieros mensuales y conciliación de facturas con el CRM.",
    solution: "Scripting y flujos de automatización que consolidan reportes bancarios con las ventas del CRM y emiten alertas automáticas.",
    result: "Información financiera al instante y cierre de mes automatizado."
  },
  {
    category: "Logística",
    title: "Alertas Automáticas de Stock e Inventario",
    problem: "Desabasto o sobreinventario por falta de visibilidad en tiempo real entre los canales de venta y el almacén.",
    solution: "Conexión en tiempo real de almacenes y sistemas de facturación para activar notificaciones preventivas y reabastecimiento.",
    result: "Inventarios saludables y eliminación de pedidos cancelados."
  }
];

export function UseCases() {
  return (
    <section id="automatizacion" className="py-24 bg-dark-lighter/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand uppercase tracking-wider mb-2">Automatización</h2>
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
