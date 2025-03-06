"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, X, Check } from "lucide-react"
import { useIntersectionObserver, createAnimationClass } from "@/lib/animation-utils"

export default function ProblemSolution() {
  useIntersectionObserver()

  const problems = [
    "Desorganização e equipes desconectadas.",
    "Estratégias de marketing imprevisíveis e ineficazes.",
    "Ferramentas fragmentadas que não se integram bem.",
    "Tempo e dinheiro desperdiçados em aplicativos ineficientes.",
  ]

  const solutions = [
    {
      title: "Automação Inteligente:",
      description: "Elimine tarefas manuais e otimize campanhas com IA.",
    },
    {
      title: "Plataforma Tudo em Um:",
      description: "Acompanhe e gerencie campanhas internas e externas.",
    },
    {
      title: "Análises Avançadas:",
      description: "Tome decisões baseadas em dados com insights profundos.",
    },
    {
      title: "Redução de Custos:",
      description: "Substitua múltiplas ferramentas por uma solução unificada.",
    },
    {
      title: "Mais Eficiência, Menos Complexidade:",
      description: "Foco no crescimento sustentável do negócio.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-blue-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="fade-in-element text-3xl md:text-4xl font-bold mb-8 text-white">
              Qual é o maior problema que as empresas enfrentam hoje?
            </h2>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className={createAnimationClass(200, index)}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-4">
                      <X className="h-5 w-5 text-red-500" />
                    </div>
                    <p className="text-gray-300">{problem}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="fade-in-element text-3xl md:text-4xl font-bold mb-8 text-white">
              A Solução: <span className="text-blue-400">BSN STRATEGY!</span>
            </h2>

            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className={createAnimationClass(200, index)}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">{solution.title}</span> {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pt-28">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-600/20 group">
            Quero Experimentar Grátis!
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}

