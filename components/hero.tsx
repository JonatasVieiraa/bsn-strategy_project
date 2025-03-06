"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import { useIntersectionObserver } from "@/lib/animation-utils"

export default function Hero() {
  const videoRef = useRef<HTMLDivElement>(null)
  useIntersectionObserver() // Inicializa o observador de interseção

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <p className="fade-in-element delay-100 text-blue-300 font-medium mb-4 max-w-3xl mx-auto">
          Reduza custos, elimine tarefas manuais e escale seu negócio com eficiência.
        </p>

        <h1 className="fade-in-element delay-200 text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
          A Plataforma Que Transforma Sua Estratégia de Marketing!
        </h1>

        <p className="fade-in-element delay-300 text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Tudo o que você precisa para planejar, executar e otimizar seu marketing em um só lugar!
        </p>

        <div
          ref={videoRef}
          className="fade-in-element delay-400 w-full max-w-3xl mx-auto aspect-video bg-black/20 backdrop-blur-sm rounded-xl shadow-lg mb-8 flex items-center justify-center border border-blue-900/50"
        >
          <div className="text-center p-8">
            <p className="text-gray-300 mb-2">Espaço para vídeo demonstrativo da plataforma</p>
            <Button variant="outline" className="bg-transparent border-blue-500 text-blue-300 hover:bg-blue-900/30">
              Assistir demonstração
            </Button>
          </div>
        </div>

        <Button className="fade-in-element delay-500 bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-600/20 group">
          Experimente Grátis Agora
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

