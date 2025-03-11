import type { Metadata } from "next"
import Hero from "@/components/hero"
import ProblemSolution from "@/components/problem-solution"
import TargetAudience from "@/components/target-audience"
import HowItWorks from "@/components/how-it-works"
import KeyFeatures from "@/components/key-features"
import Pricing from "@/components/pricing"
import WhyChooseUs from "@/components/why-choose-us"
import Bonuses from "@/components/bonuses"
import LastCall from "@/components/last-call"
import Faq from "@/components/faq"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "BSN STRATEGY | A Plataforma Que Transforma Sua Estratégia de Marketing",
  description:
    "Reduza custos, elimine tarefas manuais e escale seu negócio com eficiência. Tudo o que você precisa para planejar, executar e otimizar seu marketing em um só lugar!",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 to-black text-white overflow-hidden">
      <Hero />
      <ProblemSolution />
      <TargetAudience />
      <HowItWorks />
      <KeyFeatures />
      <Pricing />
      <WhyChooseUs />
      <Bonuses />
      <LastCall />
      <Faq />
      <Footer />
    </main>
  )
}

