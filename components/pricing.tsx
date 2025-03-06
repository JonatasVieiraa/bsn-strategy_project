"use client"

import { useIntersectionObserver, createAnimationClass } from "@/lib/animation-utils"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function Pricing() {
  useIntersectionObserver()

  const plans = [
    {
      name: "Gratuito",
      description: "Ideal para freelancers e empreendedores solo.",
      price: "R$0",
      period: "/mês",
      features: ["Acesso básico à plataforma", "1 usuário", "Relatórios básicos", "Suporte por email"],
      buttonText: "Começar Grátis",
      buttonClass: "w-full bg-white hover:bg-gray-100 text-blue-900 font-medium",
      popular: false,
      containerClass:
        "bg-blue-900/20 backdrop-blur-sm rounded-xl p-8 border border-blue-800/50 shadow-lg hover:shadow-blue-600/10 transition-all duration-300 hover:-translate-y-1",
    },
    {
      name: "Pro",
      description: "Perfeito para pequenas e médias empresas.",
      price: "R$197",
      period: "/mês",
      features: [
        "Tudo do plano Gratuito",
        "Até 5 usuários",
        "Automação avançada com IA",
        "Relatórios personalizados",
        "Suporte prioritário",
      ],
      buttonText: "Escolher Pro",
      buttonClass: "w-full bg-white hover:bg-gray-100 text-blue-600 font-medium",
      popular: true,
      containerClass:
        "bg-blue-600 rounded-xl p-8 border border-blue-500 shadow-xl hover:shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 relative z-10 transform md:scale-105",
    },
    {
      name: "Enterprise",
      description: "Projetado para grandes empresas e agências.",
      price: "R$497",
      period: "/mês",
      features: [
        "Tudo do plano Pro",
        "Usuários ilimitados",
        "API personalizada",
        "Gerente de conta dedicado",
        "Treinamento personalizado",
      ],
      buttonText: "Contato Comercial",
      buttonClass: "w-full bg-white hover:bg-gray-100 text-blue-900 font-medium",
      popular: false,
      containerClass:
        "bg-blue-900/20 backdrop-blur-sm rounded-xl p-8 border border-blue-800/50 shadow-lg hover:shadow-blue-600/10 transition-all duration-300 hover:-translate-y-1",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-blue-950">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="fade-in-element text-3xl md:text-4xl font-bold mb-6 text-center text-white">Planos & Preços</h2>

        <p className="fade-in-element delay-200 text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Escolha o plano ideal para o seu negócio
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`${createAnimationClass(300, index)} ${plan.containerClass}`}>
              {plan.popular && (
                <div className="absolute -top-4 right-8 bg-yellow-500 text-blue-900 px-4 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
              <p className={plan.popular ? "text-blue-100 mb-6" : "text-gray-300 mb-6"}>{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className={plan.popular ? "text-blue-200" : "text-gray-400"}>{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className={`h-5 w-5 ${plan.popular ? "text-white" : "text-green-500"} mr-2 mt-0.5`} />
                    <span className={plan.popular ? "text-blue-100" : "text-gray-300"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className={plan.buttonClass}>{plan.buttonText}</Button>
            </div>
          ))}
        </div>

        <div className="fade-in-element delay-700 text-center mt-12">
          <p className="text-xl text-blue-300 font-medium mb-4">
            🎁 Teste Gratuito Disponível! Sem necessidade de cartão de crédito.
          </p>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-600/20">
            Comece Agora e Escale Seu Marketing com BSN STRATEGY!
          </Button>
        </div>
      </div>
    </section>
  )
}

