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
        <div className="flex animate-wave-seamless">
          <svg
            className="relative block w-full h-[80px] md:h-[120px] flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#D4A574"
              fillOpacity="1"
              d="M0,224L26.7,213.3C53.3,203,107,181,160,192C213.3,203,267,245,320,229.3C373.3,213,427,139,480,117.3C533.3,96,587,128,640,165.3C693.3,203,747,245,800,240C853.3,235,907,181,960,181.3C1013.3,181,1067,235,1120,240C1173.3,245,1227,203,1280,181.3C1333.3,160,1387,160,1413,160L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
            />
          </svg>
          <svg
            className="relative block w-full h-[80px] md:h-[120px] flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#D4A574"
              fillOpacity="1"
              d="M0,224L26.7,213.3C53.3,203,107,181,160,192C213.3,203,267,245,320,229.3C373.3,213,427,139,480,117.3C533.3,96,587,128,640,165.3C693.3,203,747,245,800,240C853.3,235,907,181,960,181.3C1013.3,181,1067,235,1120,240C1173.3,245,1227,203,1280,181.3C1333.3,160,1387,160,1413,160L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
            />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0% {
            transform: translateX(0) translateZ(0) scaleY(1);
          }
          50% {
            transform: translateX(-25%) translateZ(0) scaleY(0.95);
          }
          100% {
            transform: translateX(-50%) translateZ(0) scaleY(1);
          }
        }

        .animate-wave {
          animation: wave 10s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
        }

        .animate-wave path {
          transform-origin: center;
        }

        /* New seamless infinite loop animation with slower speed */
        @keyframes wave-seamless {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-wave-seamless {
          animation: wave-seamless 25s linear infinite;
        }
      `}</style>
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
