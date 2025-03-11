"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Building, Users, Briefcase, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function TargetAudience() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [isTablet, setIsTablet] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeCard, setActiveCard] = useState(0)
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

  const audiences = [
    {
      icon: <Building className="h-10 w-10 text-white" />,
      title: "Empresas & Startups",
      description: "Escale campanhas com inteligência de dados e automatize processos para crescimento sustentável.",
      color: "from-[#0052CC] to-[#00B894]",
      number: "1",
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Empreendedores & PMEs",
      description: "Conquiste mais clientes sem ferramentas fragmentadas e otimize seu orçamento de marketing.",
      color: "from-[#0052CC] to-[#00B894]",
      number: "2",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-white" />,
      title: "Agências de Marketing & Publicidade",
      description: "Centralize operações e otimize resultados dos clientes com uma plataforma unificada.",
      color: "from-[#0052CC] to-[#00B894]",
      number: "3",
    },
  ]

  const nextCard = () => {
    setActiveCard((prev) => (prev === audiences.length - 1 ? 0 : prev + 1))
  }

  const prevCard = () => {
    setActiveCard((prev) => (prev === 0 ? audiences.length - 1 : prev - 1))
  }

  const goToCard = (index: number) => {
    setActiveCard(index)
  }

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-blue-950">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Para quem é a <span className="text-blue-400">BSN STRATEGY?</span>
          </motion.h2>
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
                style={{ transform: `translateX(-${activeCard * 100}%)` }}
              >
                {audiences.map((audience, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-1">
                    <div className="relative mt-8 mb-2">
                      <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-sm rounded-xl p-6 border border-blue-800/50 shadow-lg h-full">
                        <div
                          className="absolute -top-8 left-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#0052CC] to-[#00B894] shadow-lg"
                        >
                          {audience.icon}
                        </div>
                        <div className="pt-10">
                          <div className="mb-1 text-sm font-semibold text-blue-400">Grupo {audience.number}</div>
                          <h3 className="text-xl font-bold text-white mb-4">{audience.title}</h3>
                          <p className="text-gray-300">{audience.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation Controls */}
            <button 
              onClick={prevCard}
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-blue-900/60 hover:bg-blue-800 text-white rounded-full p-2 shadow-lg"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={nextCard}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-blue-900/60 hover:bg-blue-800 text-white rounded-full p-2 shadow-lg"
              aria-label="Próximo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {audiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToCard(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeCard === index ? "w-6 bg-blue-400" : "w-2 bg-blue-800"
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
            className={`grid gap-6 sm:gap-8 lg:gap-10 ${isTablet ? "grid-cols-2 gap-y-12" : "md:grid-cols-3"} auto-rows-fr`}
          >
            {audiences.map((audience, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-sm rounded-xl p-6 sm:p-7 border border-blue-800/50 shadow-lg hover:shadow-blue-600/10 transition-all duration-300 hover:-translate-y-1 will-change-transform h-full">
                  <div
                    className={`absolute -top-5 -left-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${audience.color} shadow-lg ${isTablet ? "h-20 w-20" : ""}`}
                  >
                    {audience.icon}
                  </div>
                  <div className="pt-6 sm:pt-8">
                    <div className="mb-1 text-sm font-semibold text-blue-400">Grupo {audience.number}</div>
                    <h3 className={`text-xl font-bold text-white mb-4 ${isTablet ? "text-2xl" : ""}`}>{audience.title}</h3>
                    <p className={`text-gray-300 ${isTablet ? "text-lg" : ""}`}>{audience.description}</p>
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
          <p className="text-lg sm:text-xl text-blue-300 font-medium">
            Precisa de mais eficiência e resultados previsíveis? BSN é para você!
          </p>
        </motion.div>
      </div>
    </section>
  ) }