import React from 'react';
import Link from 'next/link';
import { Globe, Send, Mail } from 'lucide-react';
import { LogoIcon, BrandName } from '../ui/Logo';

export function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <LogoIcon className="w-8 h-8" />
              <BrandName className="text-lg" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Transformando negocios B2B mediante automatizaciones inteligentes y agentes de IA personalizados. Resultados medibles, tecnología de vanguardia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand hover:text-white transition-all">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand hover:text-white transition-all">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Servicios</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li><Link href="#" className="hover:text-brand transition-colors">Automatizaciones con IA</Link></li>
              <li><Link href="#" className="hover:text-brand transition-colors">Agentes de IA</Link></li>
              <li><Link href="#" className="hover:text-brand transition-colors">Landing Webs</Link></li>
              <li><Link href="#" className="hover:text-brand transition-colors">Integraciones de Sistemas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Compañía</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li><Link href="#" className="hover:text-brand transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="#" className="hover:text-brand transition-colors">Casos de Éxito</Link></li>
              <li><Link href="#" className="hover:text-brand transition-colors">Proceso</Link></li>
              <li><Link href="#" className="hover:text-brand transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Contacto</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand" />
                <a href="mailto:contacto@automiqcore.com" className="hover:text-white transition-colors">
                  contacto@automiqcore.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand">📍</span>
                <span>
                  Edificio Empresarial Tech<br />
                  Ciudad de México, México
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} AUTOMIQ -CORE-. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Términos de Servicio</Link>
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
