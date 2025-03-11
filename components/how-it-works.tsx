"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Rocket, Zap, BarChart3, TrendingUp, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import Link from "next/link"

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [isTablet, setIsTablet] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
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

  const steps = [
    {
      icon: <Rocket className="h-10 w-10 text-white" />,
      title: "Descubra",
      description: "Crie campanhas e automatize processos sem esforço.",
      color: "from-[#0052CC] to-[#00B894]",
      number: "1",
    },
    {
      icon: <Zap className="h-10 w-10 text-white" />,
      title: "Automatize",
      description: "Gerencie e automatize todo o seu painel de marketing.",
      color: "from-[#0052CC] to-[#00B894]",
      number: "2",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-white" />,
      title: "Analise",
      description: "Gere insights de conversão e tome decisões baseadas em dados.",
      color: "from-[#0052CC] to-[#00B894]",
      number: "3",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-white" />,
      title: "Escale",
      description: "Cresça com automação impulsionada por IA e segmentação avançada.",
      color: "from-[#0052CC] to-[#00B894]",
      number: "4",
    },
  ]

  const nextStep = () => {
    setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1))
  }

  const prevStep = () => {
    setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1))
  }

  const goToCard = (index: number) => {
    setActiveStep(index)
  }

  // URL do WhatsApp para o botão
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5515996156506&text=Olá%2C%20gostaria%20de%20experimentar%20a%20BSN%20Marketing!"

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24">
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
            Como Funciona a <span className="text-blue-400">BSN STRATEGY?</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-gray-300"
          >
            Um processo simples e eficiente para transformar seu marketing digital
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
                style={{ transform: `translateX(-${activeStep * 100}%)` }}
              >
                {steps.map((step, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-1">
                    <div className="relative mt-8 mb-2">
                      <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-sm rounded-xl p-6 border border-blue-800/50 shadow-lg h-full">
                        <div
                          className="absolute -top-8 left-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#0052CC] to-[#00B894] shadow-lg"
                        >
                          {step.icon}
                        </div>
                        <div className="pt-10">
                          <div className="mb-1 text-sm font-semibold text-blue-400">Passo {step.number}</div>
                          <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                          <p className="text-gray-300">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation Controls */}
            <button 
              onClick={prevStep}
              className="absolute top-2/3 left-0 -translate-y-1/2 bg-blue-900/60 hover:bg-blue-800 text-white rounded-full p-2 shadow-lg"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={nextStep}
              className="absolute top-2/3 right-2 -translate-y-1/2 bg-blue-900/60 hover:bg-blue-800 text-white rounded-full p-2 shadow-lg"
              aria-label="Próximo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToCard(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeStep === index ? "w-6 bg-blue-400" : "w-2 bg-blue-800"
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
            className={`grid gap-6 sm:gap-8 lg:gap-10 ${isTablet ? "grid-cols-2 gap-y-12" : "md:grid-cols-2 lg:grid-cols-4"} auto-rows-fr`}
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-sm rounded-xl p-6 sm:p-7 border border-blue-800/50 shadow-lg hover:shadow-blue-600/10 transition-all duration-300 hover:-translate-y-1 will-change-transform h-full">
                  <div
                    className={`absolute -top-5 -left-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${step.color} shadow-lg ${isTablet ? "h-20 w-20" : ""}`}
                  >
                    {step.icon}
                  </div>
                  <div className="pt-6 sm:pt-8">
                    <div className="mb-1 text-sm font-semibold text-blue-400">Passo {step.number}</div>
                    <h3 className={`text-xl font-bold text-white mb-4 ${isTablet ? "text-2xl" : ""}`}>{step.title}</h3>
                    <p className={`text-gray-300 ${isTablet ? "text-lg" : ""}`}>{step.description}</p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block lg:hidden absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    >
                      <ArrowRight className="h-8 w-8 text-white" />
                    </motion.div>
                  </div>
                )}

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-7 transform -translate-y-1/2 z-10">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    >
                      <ArrowRight className="h-8 w-8 text-white" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 sm:mt-16 flex justify-center"
        >
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
              Tecnologia Poderosa e Fácil de Usar!
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}