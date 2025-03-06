"use client"

import { useIntersectionObserver, createAnimationClass } from "@/lib/animation-utils"
import { Button } from "@/components/ui/button"
import { Sparkles, Users, Percent } from "lucide-react"

export default function Bonuses() {
  useIntersectionObserver()

  const bonuses = [
    {
      icon: Sparkles,
      title: "30 Dias de Acesso Gratuito à Academia BSN",
      description: "Aprenda sobre IA e marketing digital com cursos exclusivos e materiais avançados.",
    },
    {
      icon: Users,
      title: "Grupo VIP para Estratégias Avançadas",
      description: "Acesso direto a especialistas em marketing e networking com outros profissionais.",
    },
    {
      icon: Percent,
      title: "Descontos Especiais em Planos Anuais",
      description: "Pague menos e cresça mais rápido com nossos descontos exclusivos para assinaturas anuais.",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="fade-in-element text-3xl md:text-4xl font-bold mb-16 text-center text-white">
          Bônus Exclusivos para Novos Usuários
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className={`${createAnimationClass(200, index)} bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-sm rounded-xl p-8 border border-blue-800/50 shadow-lg hover:shadow-blue-600/10 transition-all duration-300 hover:-translate-y-1 will-change-transform`}
            >
              <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mb-6 mx-auto">
                <bonus.icon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-white">{bonus.title}</h3>
              <p className="text-gray-300 text-center">{bonus.description}</p>
            </div>
          ))}
        </div>

        <div className="fade-in-element delay-600 text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-600/20">
            Comece Agora com Um Clique e Transforme Sua Estratégia!
          </Button>
        </div>
      </div>
    </section>
  )
}

