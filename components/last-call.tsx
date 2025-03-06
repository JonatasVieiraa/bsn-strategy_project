"use client"

import { useIntersectionObserver } from "@/lib/animation-utils"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function LastCall() {
  useIntersectionObserver()

  return (
    <section className="py-20 bg-gradient-to-b from-black to-blue-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="fade-in-element max-w-4xl mx-auto bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-10 md:p-16 shadow-xl border border-blue-700/50 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            O Futuro do Marketing Está Aqui – e É Inteligente.
          </h2>

          <p className="text-xl text-blue-100 mb-10">
            Experimente Agora e Veja a BSN STRATEGY Transformar Seu Negócio!
          </p>

          <Button className="bg-white hover:bg-gray-100 text-blue-900 px-10 py-7 rounded-full text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-white/20 group">
            <Sparkles className="mr-2 h-6 w-6 text-blue-600 group-hover:animate-pulse" />
            INICIAR MEU TESTE GRATUITO AGORA!
          </Button>
        </div>
      </div>
    </section>
  )
}

