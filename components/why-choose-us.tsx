"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Brain, Layers, BarChart3, Workflow, Link, ChevronDown, CheckCircle, ArrowRight } from "lucide-react"

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const [hoveredFeature, setHoveredFeature] = useState(null)

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      setIsSmallScreen(width < 1024) // Desktop: >= 1024px, Tablet/Mobile: < 1024px
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    return () => {
      window.removeEventListener("resize", checkDevice)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const featureVariants = {
    inactive: { scale: 1 },
    active: { scale: 1.02, transition: { duration: 0.3 } },
    hover: { scale: 1.03, transition: { duration: 0.2 } }
  }

  const features = [
    {
      title: "Automação Impulsionada por IA",
      benefit: "Reduza trabalho manual e erros, liberando sua equipe para tarefas estratégicas.",
      icon: <Brain className="h-6 w-6" />,
      color: "from-blue-500 to-indigo-600",
      details: [
        "IA que aprende com seus dados para otimizar campanhas",
        "Automação de tarefas repetitivas de marketing",
        "Redução de 75% no tempo gasto com trabalho administrativo"
      ],
      stats: { value: "75%", label: "Redução de trabalho manual" }
    },
    {
      title: "Solução Tudo em Um",
      benefit: "Gerencie tudo em um só lugar, eliminando a necessidade de múltiplas ferramentas.",
      icon: <Layers className="h-6 w-6" />,
      color: "from-purple-500 to-purple-600",
      details: [
        "Dashboard unificado para todas as atividades de marketing",
        "Substitui 5+ ferramentas diferentes com uma única plataforma",
        "Interface intuitiva que simplifica processos complexos"
      ],
      stats: { value: "60%", label: "Economia em ferramentas" }
    },
    {
      title: "Insights Baseados em Dados",
      benefit: "Tome decisões mais inteligentes e precisas com análises avançadas e relatórios detalhados.",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-blue-600 to-blue-500",
      details: [
        "Relatórios em tempo real para decisões ágeis",
        "Análise preditiva para identificar tendências futuras",
        "Visualizações de dados personalizáveis para cada necessidade"
      ],
      stats: { value: "3.2x", label: "Aumento no ROI" }
    },
    {
      title: "Personalizável & Escalável",
      benefit: "Adapta-se ao crescimento do seu negócio, com recursos que evoluem conforme suas necessidades.",
      icon: <Workflow className="h-6 w-6" />,
      color: "from-indigo-500 to-purple-600",
      details: [
        "Escala de 10 a 10.000 clientes sem perda de desempenho",
        "Personalize funções e fluxos de trabalho para sua equipe",
        "Adicione recursos apenas quando precisar deles"
      ],
      stats: { value: "100%", label: "Adaptável a qualquer negócio" }
    },
    {
      title: "Integrações Perfeitas",
      benefit: "Sem dores de cabeça técnicas! Conecte-se facilmente com suas ferramentas favoritas.",
      icon: <Link className="h-6 w-6" />,
      color: "from-blue-500 to-blue-700",
      details: [
        "Mais de 200 integrações nativas prontas para usar",
        "API robusta para conexões personalizadas",
        "Sincronização em tempo real com todas as suas ferramentas"
      ],
      stats: { value: "200+", label: "Integrações disponíveis" }
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-[#0a1330] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Network background with dots and lines */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <svg width="100%" height="100%" className="absolute inset-0 opacity-20">
            <pattern id="network-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="#4a88e5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#network-pattern)" />
            
            {/* Add some random connecting lines */}
            <g opacity="0.15">
              <line x1="20%" y1="30%" x2="45%" y2="20%" stroke="#4a88e5" strokeWidth="0.5" />
              <line x1="60%" y1="10%" x2="80%" y2="30%" stroke="#4a88e5" strokeWidth="0.5" />
              <line x1="10%" y1="50%" x2="30%" y2="70%" stroke="#4a88e5" strokeWidth="0.5" />
              <line x1="50%" y1="60%" x2="75%" y2="50%" stroke="#4a88e5" strokeWidth="0.5" />
              <line x1="70%" y1="80%" x2="90%" y2="60%" stroke="#4a88e5" strokeWidth="0.5" />
              <line x1="30%" y1="40%" x2="50%" y2="30%" stroke="#4a88e5" strokeWidth="0.5" />
              <line x1="40%" y1="80%" x2="60%" y2="70%" stroke="#4a88e5" strokeWidth="0.5" />
              <line x1="80%" y1="20%" x2="90%" y2="40%" stroke="#4a88e5" strokeWidth="0.5" />
            </g>
          </svg>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Por Que Escolher a <span className="text-blue-400">BSN STRATEGY</span>?
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
            O que torna a BSN STRATEGY diferente de tudo o que você já viu antes?
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={`cursor-pointer rounded-xl border transition-all duration-300 ${
                (isSmallScreen && index !== activeFeature) 
                  ? "bg-[#0f1a40] border-blue-900/50 hover:border-blue-800" 
                  : "bg-[#162252] border-blue-700"
              }`}
              onClick={() => isSmallScreen && setActiveFeature(index)}
              style={{
                height: (isSmallScreen && index !== activeFeature) ? "100px" : "auto",
                overflow: (isSmallScreen && index !== activeFeature) ? "hidden" : "visible"
              }}
            >
              {/* Card header */}
              <div className={`flex items-center gap-2 ${(isSmallScreen && index === activeFeature) || !isSmallScreen ? "p-5 pb-2" : "p-4"}`}>
                <div className={`flex-shrink-0 rounded-lg ${(isSmallScreen && index === activeFeature) || !isSmallScreen ? "bg-gradient-to-r" : "bg-blue-800"} ${feature.color} p-2`}>
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-white text-lg">{feature.title}</h3>
              </div>
              
              {/* Truncated text for non-active cards (only in tablet/mobile) */}
              {isSmallScreen && index !== activeFeature && (
                <div className="px-4 pb-4">
                  <p className="text-gray-400 text-sm line-clamp-1">{feature.benefit}</p>
                </div>
              )}
              
              {/* Expanded content for desktop or active card */}
              {(!isSmallScreen || index === activeFeature) && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 pt-0"
                >
                  <p className="text-gray-300 mb-6">{feature.benefit}</p>
                  
                  <div className="mb-6 flex justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-400">{feature.stats.value}</div>
                      <div className="text-sm text-gray-400">{feature.stats.label}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          className="relative bg-gradient-to-r from-[#14204f] to-[#1b1a4b] rounded-2xl p-8 border border-blue-800/30"
        >
          <motion.div 
            variants={itemVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Você Está <span className="text-blue-400">Perdendo Oportunidades</span> Todos os Dias
            </h3>
            
            <p className="text-gray-300 mb-8">
              Enquanto seus concorrentes otimizam seus processos com tecnologia avançada, 
              você ainda está desperdiçando tempo e recursos com métodos ultrapassados?
            </p>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-600/20 group">
                Experimente Agora, Sem Compromisso!
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}