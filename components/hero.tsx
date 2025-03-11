"use client"

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, ChevronDown, Zap, BarChart3, Shield } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import { useIntersectionObserver } from "@/lib/animation-utils"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  const videoRef = useRef(null)
  const statsRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useIntersectionObserver(videoRef)
  useIntersectionObserver(statsRef)
  
  // URL do WhatsApp formatado corretamente
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5515996156506&text=Olá%2C%20gostaria%20de%20experimentar%20a%20BSN%20Marketing!"

  const handleVideoPlay = () => {
    // Esta função seria implementada com um vídeo real
    setIsPlaying(!isPlaying)
  }

  // Animações
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const stats = [
    { icon: <Zap size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />, value: "+150%", label: "ROI Médio" },
    { icon: <BarChart3 size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />, value: "24/7", label: "Suporte" },
    { icon: <Shield size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />, value: "100%", label: "Segurança" }
  ]

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-8 md:py-16">
      <ParticleBackground />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 z-10">
        {/* Layout para Mobile e Tablet - aparece em telas até lg */}
        <div className="flex flex-col items-center gap-8 md:gap-10 lg:hidden">
          {/* #1 Título com badge */}
          <div className="w-full text-center mb-2 md:mb-4">
            <motion.div 
              className="inline-flex items-center rounded-full bg-blue-900/50 backdrop-blur-sm px-3 py-1 text-sm font-medium text-blue-200 border border-blue-700/30 mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500">
                <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
              </span>
              Tecnologia de ponta para seu negócio
            </motion.div>
            
            <h1 className="fade-in-element delay-200 text-2xl sm:text-4xl md:text-5xl font-bold mt-4 md:mb-6 leading-tight text-center w-full" style={{ lineHeight: "1.2" }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">A Plataforma Que Transforma</span><br />
              <span className="text-white">Sua Estratégia de Marketing!</span>
            </h1>
          </div>

          {/* #2 Vídeo aprimorado */}
          <div
            ref={videoRef}
            className="fade-in-element delay-400 w-full sm:w-11/12 md:w-3/4 lg:w-2/3 mx-auto aspect-video rounded-xl shadow-xl overflow-hidden relative group mb-4 md:mb-8"
          >
            {/* Borda brilhante */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-green-400 rounded-xl opacity-70 blur-sm group-hover:opacity-100 transition-opacity"></div>
            
            {/* Container do vídeo */}
            <div className="relative w-full h-full bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-900/50 flex items-center justify-center">
              <div className="text-center p-4 sm:p-8 md:p-10">
                <p className="text-gray-300 mb-4 sm:mb-6 md:mb-8 md:text-lg lg:text-xl">Espaço para vídeo demonstrativo da plataforma</p>
                
                <button 
                  onClick={handleVideoPlay}
                  className="flex items-center gap-2 sm:gap-3 bg-blue-900/60 hover:bg-blue-800/80 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 backdrop-blur-sm border border-blue-700/40 mx-auto"
                >
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/10">
                    <Play className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" fill="white" />
                  </div>
                  <span>Assistir demonstração</span>
                </button>
              </div>
            </div>
            
            {/* Badge de destaque */}
            <div className="absolute -right-3 -top-3 bg-green-600 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full shadow-lg transform rotate-3 border-2 border-green-500/20">
              NOVO
            </div>
          </div>

          {/* #3 Botão com Link de WhatsApp - Aprimorado */}
          <Link 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mb-6 md:mb-8"
          >
            <Button
              className="fade-in-element delay-500 bg-gradient-to-r from-green-600 to-[#00B894] hover:from-green-500 hover:to-[#00C7A3] text-white px-6 sm:px-8 py-5 sm:py-6 rounded-full text-base sm:text-lg md:text-xl font-medium transition-all duration-300 shadow-lg hover:shadow-green-500/30 group w-full"
            >
              Experimente Grátis Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          {/* #4 Parágrafo com ícones */}
          <div className="fade-in-element delay-600 w-full">
            <p className="text-gray-200 font-medium text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl md:max-w-3xl text-center px-1 mb-8 md:mb-10 mx-auto">
              Reduza custos, elimine tarefas manuais e escale seu negócio com eficiência. Na BSN você tem tudo o que você precisa para planejar, executar e otimizar seu marketing em um só lugar!
            </p>
            
            {/* Stats em mobile/tablet */}
            <div ref={statsRef} className="grid grid-cols-3 gap-3 sm:gap-5 md:gap-8 w-full max-w-xs sm:max-w-lg md:max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="fade-in-element delay-800 flex flex-col items-center p-3 sm:p-4 md:p-6 rounded-lg bg-blue-900/20 backdrop-blur-sm border border-blue-800/30">
                  <div className="text-blue-300 mb-1 sm:mb-2 md:mb-3">{stat.icon}</div>
                  <div className="text-white font-bold text-lg sm:text-xl md:text-2xl">{stat.value}</div>
                  <div className="text-blue-200 text-xs sm:text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Layout para Desktop e Tablet - escondido em telas pequenas */}
        <div className="hidden lg:flex flex-row items-start justify-center gap-12 xl:gap-16">
          {/* Coluna da esquerda (texto) */}
          <motion.div 
            className="lg:w-3/5 text-left pr-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.div 
              className="inline-flex items-center rounded-full bg-blue-900/50 backdrop-blur-sm px-4 py-2 text-sm font-medium text-blue-200 border border-blue-700/30 mb-6"
              variants={fadeInUp}
            >
              <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500">
                <span className="h-2 w-2 rounded-full bg-white"></span>
              </span>
              Tecnologia de ponta para seu negócio
            </motion.div>
            
            <motion.h1 
              className="text-4xl xl:text-5xl font-bold mb-8 leading-tight text-left w-full"
              style={{ lineHeight: "1.2" }}
              variants={fadeInUp}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">A Plataforma Que Transforma</span><br />
              <span className="relative text-white">
                Sua Estratégia de Marketing!
                <span className="absolute -bottom-3 left-0 w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
              </span>
            </motion.h1>

            <motion.p 
              className="text-gray-200 font-medium mb-8 max-w-xl lg:text-base xl:text-lg"
              variants={fadeInUp}
            >
              Reduza custos, elimine tarefas manuais e escale seu negócio com eficiência. Na BSN você tem tudo o que você precisa para planejar, executar e otimizar seu marketing em um só lugar!
            </motion.p>

            {/* Botão com Link de WhatsApp - Aprimorado */}
            <motion.div variants={fadeInUp}>
              <Link 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="bg-gradient-to-r from-green-600 to-[#00B894] hover:from-green-500 hover:to-[#00C7A3] text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-green-500/30 group"
                >
                  Experimente Grátis Agora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
            
            {/* Stats para desktop */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mt-12 max-w-xl"
              variants={fadeInUp}
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center p-3 rounded-lg bg-blue-900/20 backdrop-blur-sm border border-blue-800/30 hover:bg-blue-800/30 transition-colors">
                  <div className="text-blue-300 mb-2">{stat.icon}</div>
                  <div className="text-white font-bold text-xl">{stat.value}</div>
                  <div className="text-blue-200 text-xs">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Coluna da direita (vídeo) */}
          <motion.div
            className="lg:w-2/5 aspect-video rounded-xl shadow-xl overflow-hidden relative group"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Borda brilhante */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-green-400 rounded-xl opacity-70 blur-sm group-hover:opacity-100 transition-opacity"></div>
            
            {/* Container do vídeo */}
            <div className="relative w-full h-full bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-900/50 flex items-center justify-center">
              <div className="text-center p-6 lg:p-8">
                <p className="text-gray-300 mb-6">Espaço para vídeo demonstrativo da plataforma</p>
                
                <button 
                  onClick={handleVideoPlay}
                  className="flex items-center gap-3 bg-blue-900/60 hover:bg-blue-800/80 text-white px-5 py-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-blue-700/40 mx-auto"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Play className="h-5 w-5 text-white" fill="white" />
                  </div>
                  <span>Assistir demonstração</span>
                </button>
              </div>
            </div>
            
            {/* Badge de destaque */}
            <div className="absolute -right-3 -top-3 bg-green-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg transform rotate-3 border-2 border-green-500/20">
              NOVO
            </div>
            
            {/* Notificação flutuante */}
            <motion.div 
              className="absolute -left-4 bottom-8 bg-blue-900/80 backdrop-blur-md px-4 py-2 rounded-lg border border-blue-700/50 shadow-lg max-w-[200px]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="flex items-start gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-xs font-medium">Mais de 150 empresas aumentaram seu ROI em até 200%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de rolagem animado */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div 
          className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ opacity: [0.4, 1, 0.4], y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  )
}