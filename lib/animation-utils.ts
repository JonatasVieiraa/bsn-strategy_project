"use client"

// Utilitário para gerenciar animações e observação de interseção
import { useEffect, useRef } from "react"

// Hook personalizado para animações de entrada
export function useIntersectionObserver() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Configuração do observador de interseção
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")

            // Opcional: parar de observar após a animação
            // observerRef.current?.unobserve(entry.target);
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px", // Ativa um pouco antes do elemento entrar completamente na viewport
      },
    )

    // Seleciona todos os elementos com a classe fade-in-element
    const elements = document.querySelectorAll(".fade-in-element")
    elements.forEach((el) => {
      observerRef.current?.observe(el)
    })

    // Limpeza ao desmontar
    return () => {
      if (observerRef.current) {
        elements.forEach((el) => {
          observerRef.current?.unobserve(el)
        })
      }
    }
  }, [])

  return observerRef
}

// Função para criar classes de animação com delay
export function createAnimationClass(baseDelay = 0, index = 0): string {
  const delayClass = `delay-${(baseDelay + index * 100).toString()}`
  return `fade-in-element ${delayClass}`
}

