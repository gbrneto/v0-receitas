"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export function HeroSection() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://scripts.converteai.net/33c48ae5-11f3-4040-b011-a6b5ad090b61/players/690b36e6d4bbf937f39fc463/v4/player.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <section className="min-h-screen bg-[#d4a574] flex flex-col items-center justify-center px-4 py-12 pb-32 relative">
        <div className="w-full max-w-4xl mb-8">
          <div className="px-6 py-8 text-center">
            <h1 className="text-2xl md:text-4xl font-bold uppercase leading-relaxed">
              <span
                className="inline-block bg-[#3b7dc3] text-white px-3 py-2 -rotate-1 shadow-lg"
                style={{
                  boxDecorationBreak: "clone",
                  WebkitBoxDecorationBreak: "clone",
                }}
              >
                NUNCA VOLVERÁS A VER EL PAN SIN GLUTEN DE LA MISMA MANERA
              </span>{" "}
              <span className="inline-block text-[#2c2c2c] font-bold mt-2">DESPUÉS DE VER ESTO</span>
            </h1>
          </div>
        </div>

        {/* Subtitle */}
        <div className="w-full max-w-4xl mb-8 text-center">
          <p className="text-white text-base md:text-lg font-medium">
            Aprende 200 recetas de panes suaves, esponjosos y deliciosos — y disfruta pan sin gluten de verdad todos los
            días, sin miedo ni restricciones.
          </p>
        </div>

        <div className="w-full max-w-3xl mb-12">
          <div className="bg-[#c49668] rounded-lg shadow-2xl p-6 md:p-8">
            <div className="relative w-full max-w-md mx-auto">
              <vturb-smartplayer
                id="vid-690b36e6d4bbf937f39fc463"
                style={{ display: "block", margin: "0 auto", width: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="w-full max-w-md">
          <Button className="w-full bg-[#8b5a3c] hover:bg-[#6d4530] text-white text-lg md:text-xl font-bold py-6 md:py-7 rounded-full shadow-lg uppercase transition-colors">
            QUIERO EL LIBRO
          </Button>
        </div>
      </section>

      <div className="relative w-full overflow-hidden leading-[0] -mt-1">
        <svg
          className="relative block w-full h-[80px] md:h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C150,80 350,80 600,50 C850,20 1050,20 1200,80 L1200,120 L0,120 Z" className="fill-[#d4a574]" />
        </svg>
      </div>
    </>
  )
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "vturb-smartplayer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        id: string
        style?: React.CSSProperties
      }
    }
  }
}
