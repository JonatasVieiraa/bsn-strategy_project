"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Brain, Layers, BarChart3, Workflow, Link, CheckCircle, ArrowRight } from "lucide-react"

export default function WhyChooseUs() {
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

  const features = [
    {
      icon: <Brain className="h-10 w-10 text-white" />,
      title: "Automação Impulsionada por IA",
      description: "Reduza trabalho manual e erros, liberando sua equipe para tarefas estratégicas.",
      color: "from-[#0052CC] to-[#00B894]",
      number: "1",
      details: [
        "IA que aprende com seus dados para otimizar campanhas",
        "Automação de tarefas repetitivas de marketing",
        "Redução de 75% no tempo gasto com trabalho administrativo"
      ],
      stats: { value: "75%", label: "Redução de trabalho manual" }
    },
    {
      icon: <Layers className="h-10 w-10 text-white" />,
      title: "Solução Tudo em Um",
      description: "Gerencie tudo em um só lugar, eliminando a necessidade de múltiplas ferramentas.",
      color: "from-[#0052CC] to-[#00B894]",
      number: "2",
      details: [
        "Dashboard unificado para todas as atividades de marketing",
        "Substitui 5+ ferramentas diferentes com uma única plataforma",
        "Interface intuitiva que simplifica processos complexos"
      ],
      stats: { value: "60%", label: "Economia em ferramentas" }
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-white" />,
      title: "Insights Baseados em Dados",
      description: "Tome decisões mais inteligentes e precisas com análises avançadas e relatórios detalhados.",
      color: "from-[#0052CC] to-[#00B894]",
      number: "3",
      details: [
        "Relatórios em tempo real para decisões ágeis",
        "Análise preditiva para identificar tendências futuras",
        "Visualizações de dados personalizáveis para cada necessidade"
      ],
      stats: { value: "3.2x", label: "Aumento no ROI" }
    },
    {
      icon: <Workflow className="h-10 w-10 text-white" />,
      title: "Personalizável & Escalável",
      description: "Adapta-se ao crescimento do seu negócio, com recursos que evoluem conforme suas necessidades.",
      color: "from-[#0052CC] to-[#00B894]",
      number: "4",
      details: [
        "Escala de 10 a 10.000 clientes sem perda de desempenho",
        "Personalize funções e fluxos de trabalho para sua equipe",
        "Adicione recursos apenas quando precisar deles"
      ],
      stats: { value: "100%", label: "Adaptável a qualquer negócio" }
    },
    {
      icon: <Link className="h-10 w-10 text-white" />,
      title: "Integrações Perfeitas",
      description: "Sem dores de cabeça técnicas! Conecte-se facilmente com suas ferramentas favoritas.",
      color: "from-[#0052CC] to-[#00B894]",
      number: "5",
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
      <div className="container mx-auto px-4 md:px-8 relative">
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
          <motion.h2 
            variants={itemVariants}
            className={`text-3xl font-bold text-white mb-4 ${isTablet ? "text-4xl" : "md:text-5xl"}`}
          >
            Por Que Escolher a <span className="text-blue-400">BSN STRATEGY</span>?
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className={`max-w-3xl mx-auto text-lg text-gray-300 ${isTablet ? "text-xl" : ""}`}
          >
            O que torna a BSN STRATEGY diferente de tudo o que você já viu antes?
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={`grid gap-8 ${isTablet ? "grid-cols-2 gap-y-12" : "md:grid-cols-2 lg:grid-cols-3"} auto-rows-fr mb-16`}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-sm rounded-xl p-6 border border-blue-800/50 shadow-lg hover:shadow-blue-600/10 transition-all duration-300 hover:-translate-y-1 will-change-transform h-full">
                <div
                  className={`absolute -top-5 -left-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${feature.color} shadow-lg ${isTablet ? "h-20 w-20" : ""}`}
                >
                  {feature.icon}
                </div>
                <div className="pt-6">
                  <div className="mb-1 text-sm font-semibold text-blue-400">Vantagem {feature.number}</div>
                  <h3 className={`text-xl font-bold text-white mb-4 ${isTablet ? "text-2xl" : ""}`}>{feature.title}</h3>
                  <p className={`text-gray-300 ${isTablet ? "text-lg" : ""} mb-4`}>{feature.description}</p>
                  
                  <div className="mb-4 text-center border-t border-blue-800/30 pt-4">
                    <div className="text-3xl font-bold text-blue-400">{feature.stats.value}</div>
                    <div className="text-sm text-gray-300">{feature.stats.label}</div>
                  </div>
                  
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-sm rounded-xl p-6 border border-blue-800/50 shadow-lg"
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2"
            >
              <Button className="bg-green-600 hover:bg-[#00B894] text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-600/20 group">
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