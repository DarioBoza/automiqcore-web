import React from 'react';
import Link from 'next/link';
import { Globe, Send, Mail } from 'lucide-react';
import { LogoIcon, BrandName } from '../ui/Logo';

export function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-foreground/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">

          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <LogoIcon className="w-8 h-8" />
              <BrandName className="text-lg" />
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed mb-6">
              Sistemas de información, automatización operativa e integraciones de datos para empresas B2B. Estabilidad tecnológica para sostener tu escala de negocio.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:bg-brand hover:text-white transition-all">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:bg-brand hover:text-white transition-all">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Servicios</h4>
            <ul className="flex flex-col gap-4 text-sm text-foreground/60">
              <li><Link href="/servicios" className="hover:text-brand transition-colors">Automatización Operativa</Link></li>
              <li><Link href="/automatizacion" className="hover:text-brand transition-colors">Atención Automatizada</Link></li>
              <li><Link href="/servicios" className="hover:text-brand transition-colors">Webs de Captación y CRO</Link></li>
              <li><Link href="/servicios" className="hover:text-brand transition-colors">Integración de Software y Datos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Compañía</h4>
            <ul className="flex flex-col gap-4 text-sm text-foreground/60">
              <li><Link href="#" className="hover:text-brand transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="#" className="hover:text-brand transition-colors">Casos de Éxito</Link></li>
              <li><Link href="#" className="hover:text-brand transition-colors">Proceso</Link></li>
              <li><Link href="#" className="hover:text-brand transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Contacto</h4>
            <ul className="flex flex-col gap-4 text-sm text-foreground/60">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand" />
                <a href="mailto:hectordariobozacarrasco@gmail.com" className="hover:text-foreground transition-colors">
                  hectordariobozacarrasco@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand">📞</span>
                <span>
                  +51 933 805 954<br />
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/50">
          <p>© {new Date().getFullYear()} AUTOMIQ -CORE-. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">Términos de Servicio</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Política de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
