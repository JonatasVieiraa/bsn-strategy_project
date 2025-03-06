"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useIntersectionObserver, createAnimationClass } from "@/lib/animation-utils"

const faqs = [
  {
    question: "A BSN STRATEGY é adequada para minha empresa?",
    answer:
      "Sim! Seja você uma agência, startup ou empresa em crescimento, nossa plataforma se adapta às suas necessidades. Oferecemos diferentes planos para atender empresas de todos os tamanhos e setores.",
  },
  {
    question: "A plataforma é difícil de usar?",
    answer:
      "De forma alguma! Nosso onboarding guiado e suporte especializado facilitam o início. A interface foi projetada para ser intuitiva, mesmo para quem não tem experiência técnica avançada.",
  },
  {
    question: "Posso experimentar antes de pagar?",
    answer:
      "Sim! Oferecemos um teste gratuito de 14 dias, sem necessidade de cartão de crédito. Você pode explorar todas as funcionalidades e verificar como a BSN STRATEGY pode transformar seu marketing.",
  },
  {
    question: "Quanto tempo leva para implementar a plataforma?",
    answer:
      "A maioria dos usuários consegue configurar e começar a usar a plataforma em menos de um dia. Nossa equipe de suporte está disponível para ajudar em todo o processo de implementação.",
  },
  {
    question: "A BSN STRATEGY se integra com outras ferramentas?",
    answer:
      "Sim, oferecemos integrações com as principais ferramentas de marketing, CRM, e-commerce e análise de dados do mercado. Se você precisa de uma integração específica, nossa equipe pode ajudar.",
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  useIntersectionObserver()

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-blue-950">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="fade-in-element text-3xl md:text-4xl font-bold mb-16 text-center text-white">
          Perguntas Frequentes
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${createAnimationClass(200, index)} bg-blue-900/30 backdrop-blur-sm rounded-xl border border-blue-800/50 overflow-hidden transition-all duration-300`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-400" />
                )}
              </button>

              <div className={`px-6 pb-6 transition-all duration-300 ${openIndex === index ? "block" : "hidden"}`}>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

