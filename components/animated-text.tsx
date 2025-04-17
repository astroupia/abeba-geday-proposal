"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
}

export default function AnimatedText({ text, className = "", once = false }: AnimatedTextProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const animateLetters = () => {
      if (once && hasAnimated.current) return

      const letters = element.querySelectorAll("span")
      letters.forEach((letter, index) => {
        setTimeout(() => {
          letter.classList.add("opacity-100")
          letter.classList.remove("opacity-0", "translate-y-8")
        }, 50 * index)
      })

      hasAnimated.current = true
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateLetters()
            if (once) observer.disconnect()
          } else if (!once) {
            // Reset animation when out of view if not once
            const letters = element.querySelectorAll("span")
            letters.forEach((letter) => {
              letter.classList.remove("opacity-100")
              letter.classList.add("opacity-0", "translate-y-8")
            })
            hasAnimated.current = false
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [text, once])

  return (
    <div ref={elementRef} className={cn("inline-block", className)}>
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className={cn(
            "inline-block opacity-0 translate-y-8 transition-all duration-300",
            letter === " " ? "mr-1" : "",
          )}
        >
          {letter}
        </span>
      ))}
    </div>
  )
}
