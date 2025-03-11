"use client"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, X, Check } from "lucide-react"
import { useIntersectionObserver, createAnimationClass } from "@/lib/animation-utils"
import Link from "next/link"

export default function ProblemSolution() {
  // Criar as referências para os elementos que queremos animar
  const problemsRef = useRef(null)
  const solutionsRef = useRef(null)
  
  // Passar as referências como argumentos
  useIntersectionObserver(problemsRef)
  useIntersectionObserver(solutionsRef)

  // URL do WhatsApp para o botão
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5515996156506&text=Olá%2C%20gostaria%20de%20experimentar%20a%20BSN%20Marketing!"

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
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black to-blue-950">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-stretch">
          {/* CAIXA DE PROBLEMAS */}
          <div 
            ref={problemsRef} 
            className="fade-in-element relative overflow-hidden bg-gradient-to-br from-slate-900 to-red-950/30 border border-red-900/30 rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg"
          >
            {/* Decoração da caixa */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/10 to-red-800/40"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-red-700/10 blur-3xl"></div>
            
            <h2 className="fade-in-element text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white relative z-10">
              Qual é o maior problema que as empresas enfrentam hoje?
            </h2>

            <div className="space-y-4 sm:space-y-5 md:space-y-6 relative z-10">
              {problems.map((problem, index) => (
                <div 
                  key={index} 
                  className={`${createAnimationClass(200, index)} bg-black/30 backdrop-blur-sm border border-red-800/20 rounded-xl p-3 sm:p-4 hover:bg-red-950/30 transition-all duration-300 hover:shadow-md hover:shadow-red-900/10 transform hover:-translate-y-1`}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-500/20 flex items-center justify-center mr-3 sm:mr-4 border border-red-600/40">
                      <X className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base font-medium">{problem}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CAIXA DE SOLUÇÕES */}
          <div 
            ref={solutionsRef} 
            className="fade-in-element relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-950/40 border border-blue-900/30 rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg"
          >
            {/* Decoração da caixa */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/10 to-blue-600/40"></div>
            <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-blue-700/10 blur-3xl"></div>
            
            <h2 className="fade-in-element text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white relative z-10">
              A Solução: <span className="text-blue-400">BSN STRATEGY!</span>
            </h2>

            <div className="space-y-4 sm:space-y-5 md:space-y-6 relative z-10">
              {solutions.map((solution, index) => (
                <div 
                  key={index} 
                  className={`${createAnimationClass(200, index)} bg-black/30 backdrop-blur-sm border border-blue-800/20 rounded-xl p-3 sm:p-4 hover:bg-blue-950/30 transition-all duration-300 hover:shadow-md hover:shadow-blue-900/10 transform hover:-translate-y-1`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3 sm:mr-4 border border-green-600/40 mt-1">
                      <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-base sm:text-lg">{solution.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base">{solution.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pt-16 sm:pt-20 md:pt-24 lg:pt-28">
          <Link 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button 
              className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-[#00B894] hover:from-green-500 hover:to-[#00C7A3] text-white px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg md:text-xl font-medium transition-all duration-300 shadow-lg hover:shadow-green-500/30 group"
            >
              Quero Experimentar Grátis!
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}