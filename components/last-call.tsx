"use client"

import { useIntersectionObserver } from "@/lib/animation-utils"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { useRef } from "react"

export default function LastCall() {
  const heroRef = useRef(null)
  useIntersectionObserver(heroRef)

  return (
    <section className="py-20 bg-gradient-to-b from-black to-blue-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="fade-in-element max-w-4xl mx-auto bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-sm rounded-xl p-6 border border-blue-800/50 shadow-lg hover:shadow-blue-600/10 transition-all duration-300 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
            O futuro do marketing estratégico já começou. <span className="text-blue-400">E ele é inteligente.</span>
          </h2>

          <p className="text-xl text-gray-300 mb-10">
            Experimente Agora e Veja a BSN STRATEGY Transformar Seu Negócio!
          </p>

          <Button className="bg-green-600 hover:bg-[#00B894] text-white px-10 py-7 rounded-full text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-white/20 group">
            <Sparkles className="mr-2 h-6 w-6 text-white group-hover:animate-pulse" />
            COMEÇAR MEU TESTE GRATUITO AGORA!
          </Button>
        </div>
      </div>
    </section>
  )
}