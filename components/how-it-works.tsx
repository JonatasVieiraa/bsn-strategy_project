"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Rocket, Zap, BarChart3, TrendingUp, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkTablet = () => {
      const width = window.innerWidth
      setIsTablet(width >= 768 && width < 1024)
    }

    checkTablet()
    window.addEventListener("resize", checkTablet)

    return () => {
      window.removeEventListener("resize", checkTablet)
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
      color: "from-blue-500 to-blue-600",
      number: "1",
    },
    {
      icon: <Zap className="h-10 w-10 text-white" />,
      title: "Automatize",
      description: "Gerencie e automatize todo o seu painel de marketing.",
      color: "from-purple-500 to-purple-600",
      number: "2",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-white" />,
      title: "Analise",
      description: "Gere insights de conversão e tome decisões baseadas em dados.",
      color: "from-indigo-500 to-indigo-600",
      number: "3",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-white" />,
      title: "Escale",
      description: "Cresça com automação impulsionada por IA e segmentação avançada.",
      color: "from-blue-600 to-purple-600",
      number: "4",
    },
  ]

  return (
    <section ref={ref} className="py-20 ">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className={`text-3xl font-bold text-white mb-4 ${isTablet ? "text-4xl" : "md:text-4xl"}`}
          >
            Como Funciona a BSN STRATEGY?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`max-w-2xl mx-auto text-lg text-gray-300  ${isTablet ? "text-xl" : ""}`}
          >
            Um processo simples e eficiente para transformar seu marketing digital
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={`grid gap-8 ${isTablet ? "grid-cols-2 gap-y-12" : "md:grid-cols-2 lg:grid-cols-4"}`}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div
                  className={`absolute -top-5 -left-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${step.color} shadow-lg ${isTablet ? "h-20 w-20" : ""}`}
                >
                  {step.icon}
                </div>
                <div className="pt-6">
                  <div className="mb-1 text-sm font-semibold text-blue-600">Passo {step.number}</div>
                  <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isTablet ? "text-2xl" : ""}`}>{step.title}</h3>
                  <p className={`text-gray-600 ${isTablet ? "text-lg" : ""}`}>{step.description}</p>
                </div>
              </div>

              {index < steps.length - 1 && !isTablet && (
                <div className="hidden md:block absolute top-1/2 -right-7 transform -translate-y-1/2 z-10">
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

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl ${isTablet ? "px-10 py-5 text-xl" : ""}`}
          >
            Tecnologia Poderosa e Fácil de Usar!
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
