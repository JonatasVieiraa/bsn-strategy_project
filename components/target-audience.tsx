"use client"

import { useIntersectionObserver, createAnimationClass } from "@/lib/animation-utils"
import { Building, Users, Briefcase } from "lucide-react"

export default function TargetAudience() {
  useIntersectionObserver()

  const audiences = [
    {
      icon: Building,
      title: "Empresas & Startups",
      description: "Escale campanhas com inteligência de dados e automatize processos para crescimento sustentável.",
    },
    {
      icon: Users,
      title: "Empreendedores & PMEs",
      description: "Conquiste mais clientes sem ferramentas fragmentadas e otimize seu orçamento de marketing.",
    },
    {
      icon: Briefcase,
      title: "Agências de Marketing & Publicidade",
      description: "Centralize operações e otimize resultados dos clientes com uma plataforma unificada.",
    },
  ]

  return (
    <section className="py-20 bg-blue-950">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="fade-in-element text-3xl md:text-4xl font-bold mb-16 text-center text-white">
          Para quem é a <span className="text-blue-400">BSN STRATEGY</span>?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className={`${createAnimationClass(200, index)} bg-blue-900/30 backdrop-blur-sm rounded-xl p-8 border border-blue-800/50 shadow-lg hover:shadow-blue-600/10 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mb-6 mx-auto">
                <audience.icon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-white">{audience.title}</h3>
              <p className="text-gray-300 text-center">{audience.description}</p>
            </div>
          ))}
        </div>

        <div className="fade-in-element delay-600 text-center mt-12">
          <p className="text-xl text-blue-300 font-medium">
            Precisa de mais eficiência e resultados previsíveis? BSN é para você!
          </p>
        </div>
      </div>
    </section>
  )
}

