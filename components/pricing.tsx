"use client";

import { useIntersectionObserver, createAnimationClass } from "@/lib/animation-utils";
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function Pricing() {
  const heroRef = useRef<HTMLElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [currentPlan, setCurrentPlan] = useState(1); // Começar com o plano Pro (índice 1)
  
  useIntersectionObserver(heroRef);

  const plans = [
    {
      name: "Gratuito",
      description: "Ideal para freelancers e empreendedores solo.",
      price: "R$0",
      period: "/mês",
      features: [
        "Acesso básico à plataforma",
        "1 usuário",
        "Relatórios básicos",
        "Suporte por email",
      ],
      buttonText: "Começar Grátis",
      buttonLink: "https://api.whatsapp.com/send?phone=5515996156506&text=Olá! Gostaria de saber mais sobre o plano Gratuito da BSN Strategy.",
      buttonClass:
        "w-full bg-white hover:bg-gray-100 text-blue-900 font-medium group relative overflow-hidden",
      popular: false,
      containerClass:
        "bg-blue-900/20 backdrop-blur-sm rounded-xl border border-blue-800/50 shadow-lg hover:shadow-blue-600/10 transition-all duration-300 hover:-translate-y-1",
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
      buttonLink: "https://api.whatsapp.com/send?phone=5515996156506&text=Olá! Gostaria de saber mais sobre o plano Pro da BSN Strategy.",
      buttonClass:
        "w-full bg-white hover:bg-gray-100 text-blue-600 font-medium group relative overflow-hidden",
      popular: true,
      containerClass:
        "bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl border border-blue-500 shadow-xl hover:shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 relative z-10",
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
      buttonLink: "https://api.whatsapp.com/send?phone=5515996156506&text=Olá! Gostaria de saber mais sobre o plano Enterprise da BSN Strategy.",
      buttonClass:
        "w-full bg-white hover:bg-gray-100 text-blue-900 font-medium group relative overflow-hidden",
      popular: false,
      containerClass:
        "bg-blue-900/20 backdrop-blur-sm rounded-xl border border-blue-800/50 shadow-lg hover:shadow-blue-600/10 transition-all duration-300 hover:-translate-y-1",
    },
  ];

  // Navegar para o plano anterior no carrossel
  const prevPlan = () => {
    setCurrentPlan((prev) => (prev === 0 ? plans.length - 1 : prev - 1));
  };

  // Navegar para o próximo plano no carrossel
  const nextPlan = () => {
    setCurrentPlan((prev) => (prev === plans.length - 1 ? 0 : prev + 1));
  };

  // Função para navegar diretamente para um plano específico
  const setCurrentPlanIndex = (index: number) => {
    setCurrentPlan(index);
  };

  return (
    <section ref={heroRef} className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-black to-blue-950">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="fade-in-element text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center text-white">
          Planos & Preços
        </h2>

        <p className="fade-in-element delay-200 text-lg md:text-xl text-center text-gray-300 mb-10 md:mb-16 max-w-3xl mx-auto">
          Escolha o plano ideal para o seu negócio e comece a crescer hoje mesmo
        </p>

        {/* Layout para todos os dispositivos - Mobile First */}
        <div className="relative max-w-xs mx-auto md:max-w-none md:mx-0">
          {/* Versão mobile - Carrossel */}
          <div className="md:hidden relative">
            {/* Navegação lateral */}
            <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none">
              <div className="flex justify-between items-center h-full px-1">
                <button 
                  onClick={prevPlan}
                  className="bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-full shadow-lg transform -translate-x-1/2 pointer-events-auto"
                  aria-label="Plano anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                <button 
                  onClick={nextPlan}
                  className="bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-full shadow-lg transform translate-x-1/2 pointer-events-auto"
                  aria-label="Próximo plano"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Card do plano atual */}
            <div className="w-full">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`${plan.containerClass} p-6 flex flex-col h-full ${currentPlan === index ? 'block' : 'hidden'}`}
                >
                  {/* Badge bem posicionado */}
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-4 py-1 rounded-full text-sm font-bold shadow-md whitespace-nowrap z-20">
                      MAIS POPULAR
                    </div>
                  )}

                  <div className={plan.popular ? "mt-2" : ""}>
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {plan.name}
                    </h3>
                    <p
                      className={
                        plan.popular ? "text-blue-100 mb-4" : "text-gray-300 mb-4"
                      }
                    >
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span
                      className={plan.popular ? "text-blue-200" : "text-gray-400"}
                    >
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check
                          className={`h-5 w-5 ${
                            plan.popular ? "text-white" : "text-green-500"
                          } mr-2 mt-0.5 flex-shrink-0`}
                        />
                        <span
                          className={
                            plan.popular ? "text-blue-100" : "text-gray-300"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a href={plan.buttonLink} className="mt-auto">
                    <Button className={`${plan.buttonClass} py-6`}>
                      {plan.buttonText}
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              ))}
            </div>
            
            {/* Indicadores de paginação */}
            <div className="flex justify-center space-x-2 mt-6">
              {plans.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPlanIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentPlan === index ? "bg-blue-400 w-6" : "bg-blue-800 w-2.5"
                  }`}
                  aria-label={`Ver plano ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Versão desktop - Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-5 lg:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`${createAnimationClass(300, index)} ${plan.containerClass} p-8 flex flex-col h-full ${index === 1 ? 'md:scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-4 py-1 rounded-full text-sm font-bold shadow-md whitespace-nowrap">
                    MAIS POPULAR
                  </div>
                )}

                <div className={plan.popular ? "mt-2" : ""}>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {plan.name}
                  </h3>
                  <p
                    className={
                      plan.popular ? "text-blue-100 mb-4" : "text-gray-300 mb-4"
                    }
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span
                    className={plan.popular ? "text-blue-200" : "text-gray-400"}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check
                        className={`h-5 w-5 ${
                          plan.popular ? "text-white" : "text-green-500"
                        } mr-2 mt-0.5 flex-shrink-0`}
                      />
                      <span
                        className={
                          plan.popular ? "text-blue-100" : "text-gray-300"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href={plan.buttonLink} className="mt-auto">
                  <Button className={`${plan.buttonClass} py-6`}>
                    {plan.buttonText}
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-element delay-700 text-center mt-12 md:mt-16">
          <p className="text-lg md:text-xl text-blue-300 font-medium mb-5">
            🎁 Teste Gratuito Disponível! Sem necessidade de cartão de crédito.
          </p>

          <a href="https://api.whatsapp.com/send?phone=5515996156506&text=Olá! Gostaria de começar com a BSN Strategy.">
            <Button className="bg-gradient-to-r from-green-600 to-[#00B894] hover:from-green-700 hover:to-green-600 text-white px-6 md:px-8 py-5 md:py-6 rounded-full text-base md:text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-green-600/20 group">
              Comece Agora e Escale Seu Marketing!
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}