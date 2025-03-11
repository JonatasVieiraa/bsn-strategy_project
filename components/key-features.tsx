"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Bot, BarChart, Layers, FileText, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import Link from "next/link"

export default function KeyFeatures() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [isTablet, setIsTablet] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const carouselRef = useRef(null)

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth
      setIsTablet(width >= 768 && width < 1024)
      setIsMobile(width < 768)
    }

    checkDeviceType()
    window.addEventListener("resize", checkDeviceType)

    return () => {
      window.removeEventListener("resize", checkDeviceType)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  // URL do WhatsApp para o botão
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5515996156506&text=Olá%2C%20gostaria%20de%20experimentar%20a%20BSN%20Marketing!"

  const features = [
    {
      icon: <Bot className="h-10 w-10 text-white" />,
      title: "Automação Impulsionada por IA",
      description:
        "Campanhas otimizadas com esforço mínimo. Nossa IA aprende com seus dados para melhorar continuamente os resultados.",
      color: "from-[#0052CC] to-[#00B894]",
      number: "1",
    },
    {
      icon: <BarChart className="h-10 w-10 text-white" />,
      title: "Relatórios & Painéis Personalizados",
      description:
        "Insights acionáveis para melhores decisões. Visualize dados complexos de forma simples e intuitiva.",
      color: "from-[#0052CC] to-[#00B894]",
      number: "2",
    },
    {
      icon: <Layers className="h-10 w-10 text-white" />,
      title: "Operações de Marketing Integradas",
      description: 
        "Gerencie tudo em um só lugar. Integre todas as suas ferramentas e canais para uma visão unificada.",
      color: "from-[#0052CC] to-[#00B894]",
      number: "3",
    },
    {
      icon: <FileText className="h-10 w-10 text-white" />,
      title: "Marketing de Conteúdo Automatizado",
      description:
        "Aumente o tráfego orgânico com precisão. Nossa plataforma cria e distribui conteúdo relevante automaticamente para seu público-alvo.",
      color: "from-[#0052CC] to-[#00B894]",
      number: "4",
    },
  ]

  const nextFeature = () => {
    setActiveFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1))
  }

  const prevFeature = () => {
    setActiveFeature((prev) => (prev === 0 ? features.length - 1 : prev - 1))
  }

  const handleSomething = (index: number) => {
    setActiveFeature(index)
  }

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Recursos Principais que <span className="text-blue-400">Fazem a Diferença</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-gray-300"
          >
            Transforme sua estratégia de marketing com ferramentas poderosas e intuitivas
          </motion.p>
        </motion.div>

        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="relative px-2">
            <div 
              ref={carouselRef}
              className="relative overflow-hidden px-2"
            >
              <div 
                className="flex transition-transform duration-300 ease-in-out" 
                style={{ transform: `translateX(-${activeFeature * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-1">
                    <div className="relative mt-8 mb-2">
                      <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-sm rounded-xl p-6 border border-blue-800/50 shadow-lg h-full">
                        <div
                          className="absolute -top-8 left-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#0052CC] to-[#00B894] shadow-lg"
                        >
                          {feature.icon}
                        </div>
                        <div className="pt-10">
                          <div className="mb-1 text-sm font-semibold text-blue-400">Recurso {feature.number}</div>
                          <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                          <p className="text-gray-300">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation Controls */}
            <button 
              onClick={prevFeature}
              className="absolute top-2/3 left-0 -translate-y-1/2 bg-blue-900/60 hover:bg-blue-800 text-white rounded-full p-2 shadow-lg"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={nextFeature}
              className="absolute top-2/3 right-2 -translate-y-1/2 bg-blue-900/60 hover:bg-blue-800 text-white rounded-full p-2 shadow-lg"
              aria-label="Próximo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSomething(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeFeature === index ? "w-6 bg-blue-400" : "w-2 bg-blue-800"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Tablet and Desktop Grid View */}
        {!isMobile && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={`grid gap-6 sm:gap-8 lg:gap-10 ${isTablet ? "grid-cols-2 gap-y-12" : "md:grid-cols-2"} auto-rows-fr`}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-sm rounded-xl p-6 sm:p-7 border border-blue-800/50 shadow-lg hover:shadow-blue-600/10 transition-all duration-300 hover:-translate-y-1 will-change-transform h-full">
                  <div
                    className={`absolute -top-5 -left-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${feature.color} shadow-lg ${isTablet ? "h-20 w-20" : ""}`}
                  >
                    {feature.icon}
                  </div>
                  <div className="pt-6 sm:pt-8">
                    <div className="mb-1 text-sm font-semibold text-blue-400">Recurso {feature.number}</div>
                    <h3 className={`text-xl font-bold text-white mb-4 ${isTablet ? "text-2xl" : ""}`}>{feature.title}</h3>
                    <p className={`text-gray-300 ${isTablet ? "text-lg" : ""}`}>{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-lg sm:text-xl text-white font-medium mb-8">
            <span className="text-blue-400">Diga adeus à complexidade.</span> Transforme o seu negócio com ferramentas intuitivas e poderosas hoje!
          </p>
          
          <div className="flex justify-center">
            <Link 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-gradient-to-r from-green-600 to-[#00B894] hover:from-green-500 hover:to-[#00C7A3] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-semibold text-white shadow-lg transition-all hover:shadow-green-500/30 flex items-center group"
              >
                Quero Experimentar Agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}