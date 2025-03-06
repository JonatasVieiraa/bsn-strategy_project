"use client"

import { useIntersectionObserver } from "@/lib/animation-utils"

export default function Footer() {
  useIntersectionObserver()

  const footerLinks = {
    company: ["Sobre Nós", "Carreiras", "Blog", "Contato"],
    resources: ["Documentação", "Tutoriais", "Webinars", "Suporte"],
    legal: ["Termos de Serviço", "Política de Privacidade", "Cookies", "LGPD"],
  }

  return (
    <footer className="py-12 bg-black border-t border-blue-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="fade-in-element">
            <h3 className="text-xl font-bold mb-4 text-white">BSN STRATEGY</h3>
            <p className="text-gray-400">
              A plataforma que transforma sua estratégia de marketing com automação inteligente e insights baseados em
              dados.
            </p>
          </div>

          <div className="fade-in-element delay-200">
            <h4 className="text-lg font-semibold mb-4 text-white">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="fade-in-element delay-300">
            <h4 className="text-lg font-semibold mb-4 text-white">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="fade-in-element delay-400">
            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="fade-in-element delay-500 mt-12 pt-8 border-t border-blue-900/30 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} BSN STRATEGY. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

