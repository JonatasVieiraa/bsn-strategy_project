"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Sparkles, Users, Percent } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Bonuses() {
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

  const bonuses = [
    {
      icon: <Sparkles className="h-10 w-10 text-white" />,
      title: "30 Dias de Acesso Gratuito à Academia BSN",
      description: "Aprenda sobre IA e marketing digital com cursos exclusivos e materiais avançados.",
      color: "from-[#0052CC] to-[#00B894]",
      number: "1",
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Grupo VIP para Estratégias Avançadas",
      description: "Acesso direto a especialistas em marketing e networking com outros profissionais.",
      color: "from-[#0052CC] to-[#00B894]",
      number: "2",
    },
    {
      icon: <Percent className="h-10 w-10 text-white" />,
      title: "Descontos Especiais em Planos Anuais",
      description: "Pague menos e cresça mais rápido com nossos descontos exclusivos para assinaturas anuais.",
      color: "from-[#0052CC] to-[#00B894]",
      number: "3",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-black">
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
            Bônus Exclusivos para Novos Usuários
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-3 gap-4 auto-rows-fr mb-12"
        >
          {bonuses.map((bonus, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-sm rounded-xl p-6 border border-blue-800/50 shadow-lg hover:shadow-blue-600/10 transition-all duration-300 hover:-translate-y-1 will-change-transform h-full">
                <div
                  className={`absolute -top-5 -left-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${bonus.color} shadow-lg ${isTablet ? "h-20 w-20" : ""}`}
                >
                  {bonus.icon}
                </div>
                <div className="pt-6 mt-4">
                  <div className="mb-1 text-sm font-semibold text-blue-400">Bônus {bonus.number}</div>
                  <h3 className={`text-xl font-bold text-white mb-4 ${isTablet ? "text-2xl" : ""}`}>{bonus.title}</h3>
                  <p className={`text-gray-300 ${isTablet ? "text-lg" : ""}`}>{bonus.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-[#00B894] hover:to-[#00A583] text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-600/20"
          >
            Comece Agora com Um Clique e Transforme Sua Estratégia!
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}