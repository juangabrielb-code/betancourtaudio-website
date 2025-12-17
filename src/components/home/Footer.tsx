"use client";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    servicios: [
      { label: "Mezcla", href: "#" },
      { label: "Mastering", href: "#" },
      { label: "Producción", href: "#" },
      { label: "Beat Making", href: "#" },
    ],
    recursos: [
      { label: "Blog", href: "/blog" },
      { label: "Tutoriales", href: "#" },
      { label: "Portafolio", href: "#portafolio" },
      { label: "Precios", href: "#" },
    ],
    empresa: [
      { label: "Sobre Nosotros", href: "#" },
      { label: "Contacto", href: "#" },
      { label: "Términos", href: "#" },
      { label: "Privacidad", href: "#" },
    ],
  };
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-clay rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-semibold text-xl">B</span>
              </div>
              <span className="font-display text-xl text-white">Betancourt Audio</span>
            </div>
            <p className="text-stone-400 font-sans mb-6 max-w-sm">Producción musical profesional, mezcla y mastering para artistas que buscan el sonido perfecto.</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-clay" />
                <a href="mailto:info@betancourtaudio.com" className="hover:text-clay transition-colors">info@betancourtaudio.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-clay" />
                <a href="tel:+1234567890" className="hover:text-clay transition-colors">+1 (234) 567-890</a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-display text-white text-lg mb-4">Servicios</h4>
            <ul className="space-y-2">{footerLinks.servicios.map((link, i) => <li key={i}><Link href={link.href} className="text-sm hover:text-clay transition-colors">{link.label}</Link></li>)}</ul>
          </div>
          <div>
            <h4 className="font-display text-white text-lg mb-4">Recursos</h4>
            <ul className="space-y-2">{footerLinks.recursos.map((link, i) => <li key={i}><Link href={link.href} className="text-sm hover:text-clay transition-colors">{link.label}</Link></li>)}</ul>
          </div>
          <div>
            <h4 className="font-display text-white text-lg mb-4">Empresa</h4>
            <ul className="space-y-2">{footerLinks.empresa.map((link, i) => <li key={i}><Link href={link.href} className="text-sm hover:text-clay transition-colors">{link.label}</Link></li>)}</ul>
          </div>
        </div>
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-500 font-sans">© 2024 Betancourt Audio. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 bg-clay text-white rounded-lg font-sans text-sm font-medium hover:bg-wood transition-colors">Subir Proyecto</button>
            <button className="px-6 py-2 border border-stone-700 text-stone-300 rounded-lg font-sans text-sm font-medium hover:border-clay hover:text-clay transition-colors">Pagar Ahora</button>
          </div>
        </div>
      </div>
    </footer>
  );
}