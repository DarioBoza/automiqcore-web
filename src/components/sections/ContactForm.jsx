import React from 'react';
import { Mail, MessageSquare, Phone, ArrowRight } from 'lucide-react';

export function ContactForm() {
  return (
    <section id="formulario-contacto" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-brand/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left: Info */}
          <div className="lg:col-span-2">
            <h2 className="text-sm font-bold text-brand uppercase tracking-wider mb-2">Contáctanos</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Cuéntanos sobre tu negocio
            </h3>
            <p className="text-foreground/60 leading-relaxed mb-8">
              Completa el formulario y te responderemos en menos de 24 horas con un análisis inicial de cómo podemos ayudarte.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <p className="text-xs text-foreground/40 mb-0.5">Email</p>
                  <a href="mailto:hectordariobozacarrasco@gmail.com" className="text-foreground/80 text-sm hover:text-brand transition-colors">
                    hectordariobozacarrasco@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-xs text-foreground/40 mb-0.5">WhatsApp</p>
                  <a href="https://wa.me/51933805954" target="_blank" rel="noopener noreferrer" className="text-foreground/80 text-sm hover:text-[#25D366] transition-colors">
                    +51 933 805 954
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <p className="text-xs text-foreground/40 mb-0.5">Respuesta</p>
                  <p className="text-foreground/80 text-sm">En menos de 24 horas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8 border border-foreground/5">
              <form
                action="https://formsubmit.co/hectordariobozacarrasco@gmail.com"
                method="POST"
                className="flex flex-col gap-5"
              >
                <input type="hidden" name="_subject" value="Nueva consulta desde AUTOMIQ -CORE-" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" className="hidden" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nombre" className="text-sm text-foreground/60 font-medium">
                      Nombre completo <span className="text-brand">*</span>
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      name="nombre"
                      required
                      placeholder="Ej. Juan Pérez"
                      className="bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-brand/60 focus:bg-foreground/8 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="empresa" className="text-sm text-foreground/60 font-medium">
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      type="text"
                      name="empresa"
                      placeholder="Nombre de tu empresa"
                      className="bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-brand/60 focus:bg-foreground/8 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm text-foreground/60 font-medium">
                    Email de contacto <span className="text-brand">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="tu@empresa.com"
                    className="bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-brand/60 focus:bg-foreground/8 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="servicio" className="text-sm text-foreground/60 font-medium">
                    ¿En qué servicio estás interesado?
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    className="bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground text-sm focus:outline-none focus:border-brand/60 transition-colors appearance-none"
                  >
                    <option value="" className="bg-background text-foreground">Selecciona un servicio...</option>
                    <option value="Agendar Llamada" className="bg-background text-brand font-bold">📅 Agendar una Llamada Estratégica</option>
                    <option value="Automatizaciones con IA" className="bg-background text-foreground">Automatizaciones con IA</option>
                    <option value="Agentes de IA" className="bg-background text-foreground">Agentes de IA Personalizados</option>
                    <option value="Landing Webs" className="bg-background text-foreground">Landing Webs de Alta Conversión</option>
                    <option value="Webs Profesionales" className="bg-background text-foreground">Webs Profesionales</option>
                    <option value="Integraciones de Sistemas" className="bg-background text-foreground">Integraciones de Sistemas</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="mensaje" className="text-sm text-foreground/60 font-medium">
                    Cuéntanos tu desafío <span className="text-brand">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    placeholder="Describe brevemente qué procesos quieres mejorar o automatizar..."
                    className="bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-brand/60 focus:bg-foreground/8 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand text-white font-semibold rounded-full px-8 py-4 hover:bg-brand-hover shadow-[0_0_20px_rgba(63,22,253,0.3)] hover:shadow-[0_0_30px_rgba(63,22,253,0.5)] transition-all duration-300 mt-2"
                >
                  Enviar consulta <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-center text-xs text-foreground/30">
                  Al enviar aceptas que te contactemos con información sobre nuestros servicios. Sin spam.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
