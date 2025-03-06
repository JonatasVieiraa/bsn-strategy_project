"use client"

import { useIntersectionObserver, createAnimationClass } from "@/lib/animation-utils"
import { Bot, BarChart, Layers, FileText } from "lucide-react"

export default function KeyFeatures() {
  useIntersectionObserver()

  const features = [
    {
      icon: Bot,
      title: "Automação Impulsionada por IA",
      description:
        "Campanhas otimizadas com esforço mínimo. Nossa IA aprende com seus dados para melhorar continuamente os resultados.",
    },
    {
      icon: BarChart,
      title: "Relatórios & Painéis Personalizados",
      description:
        "Insights acionáveis para melhores decisões. Visualize dados complexos de forma simples e intuitiva.",
    },
    {
      icon: Layers,
      title: "Operações de Marketing Integradas",
      description: "Gerencie tudo em um só lugar. Integre todas as suas ferramentas e canais para uma visão unificada.",
    },
    {
      icon: FileText,
      title: "Marketing de Conteúdo Automatizado",
      description:
        "Aumente o tráfego orgânico com precisão. Nossa plataforma cria e distribui conteúdo relevante automaticamente para seu público-alvo.",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="fade-in-element text-3xl md:text-4xl font-bold mb-6 text-center text-white">
          Recursos Principais que Fazem a Diferença
        </h2>

        <p className="fade-in-element delay-200 text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Transforme sua estratégia de marketing com ferramentas poderosas e intuitivas
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${createAnimationClass(300, index)} flex gap-6 bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300`}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <feature.icon className="h-7 w-7 text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-in-element delay-700 text-center mt-12">
          <p className="text-xl text-blue-300 font-medium">Diga adeus à complexidade. Transforme seu marketing hoje!</p>
        </div>
      </div>
    </section>
  )
}

