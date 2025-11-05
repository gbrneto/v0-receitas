"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "vturb-smartplayer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { id: string }, HTMLElement>
    }
  }
}

export function TestimonialVideoSection() {
  useEffect(() => {
    // Load VTurb player script
    const script = document.createElement("script")
    script.src =
      "https://scripts.converteai.net/33c48ae5-11f3-4040-b011-a6b5ad090b61/players/690b8d436489e82b7da1194c/v4/player.js"
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
    <section className="relative bg-[#B8704F] py-16 px-4">
      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path
            fill="#A0826D"
            fillOpacity="0.3"
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,74.7C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
          <path
            fill="#9B6B4F"
            fillOpacity="0.5"
            d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
          <path
            fill="#8B5A3C"
            fillOpacity="0.7"
            d="M0,96L48,90.7C96,85,192,75,288,69.3C384,64,480,64,576,69.3C672,75,768,85,864,85.3C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 mt-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">MIRA LO QUE DICE QUIÉN COMPRÓ:</h2>

        {/* Video Container */}
        <div className="bg-[#F5E6D3] rounded-lg p-8 md:p-12 shadow-lg">
          <vturb-smartplayer
            id="vid-690b8d436489e82b7da1194c"
            style={{ display: "block", margin: "0 auto", width: "100%" }}
          />
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <button className="bg-[#4A7BA7] hover:bg-[#3A6B97] text-white font-bold py-4 px-12 rounded-full text-lg transition-colors shadow-lg">
            DESCARGAR MI CÓPIA
          </button>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            LO QUE DICEN NUESTRAS ALUMNAS :
          </h3>

          {/* First Carousel */}
          <TestimonialCarousel
            testimonials={[
              {
                name: "Valentina García",
                status: "Online ahora",
                image: "/golden-bread-rolls.jpg",
                message:
                  "Después de años tirando recetas a la basura, por fin logré un pan sin gluten delicioso. Mi hijo lo probó y dijo: '¡mamá, sabe a pan de verdad!' 🍞💚 Gracias por devolvernos la alegría en la mesa.",
              },
              {
                name: "Camila Rojas",
                status: "Online ahora",
                image: "/braided-bread-loaf.jpg",
                message:
                  "Chef Teresa, pensé que nunca más iba a comer pan sin dolor ni culpa. Hoy partí tu receta y mi esposo no creyó que era sin gluten 😍. Fue un momento de felicidad inmensa, gracias de corazón.",
              },
              {
                name: "Sofía Martínez",
                status: "Online ahora",
                image: "/sandwich-bread-with-vegetables.jpg",
                message:
                  "Chef Teresa, llevaba años gastando fortunas en panes sin gluten secos y feos. Con tu receta hice uno por la mitad del precio y mucho más rico 🥖💗. Mi familia se emocionó al probarlo, ¡gracias infinitas!",
              },
              {
                name: "María López",
                status: "Online ahora",
                image: "/homemade-baguettes.jpg",
                message:
                  "Profe, no puedo creer lo fácil que fue hacer pan con tu método. Mis hijos están felices y yo también 🥰",
              },
              {
                name: "Laura Fernández",
                status: "Online ahora",
                image: "/artisan-bread.png",
                message:
                  "Gracias Chef Teresa! Después de tanto buscar, finalmente encontré recetas que funcionan. Mi familia está encantada 💕",
              },
            ]}
          />

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 my-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-white" : "bg-white/50"}`} />
            ))}
          </div>

          {/* Second Carousel */}
          <TestimonialCarousel
            testimonials={[
              {
                name: "Edna",
                status: "online",
                image: null,
                message:
                  "Comí tu pan al café con mis amigas y quedaron alucinadas 😍. Decían: '¿en serio es sin gluten?' Me sentí por primera vez en años... casi ¡Mil gracias, profe!",
                timestamp: "12:40",
              },
              {
                name: "Anna",
                status: "online",
                image: null,
                message:
                  "Profe, tenía q decirte... x fin encontré una receta q funciona 🙏. Antes gastaba $$$ en panes carísimos q terminaban en la basura 😭. Con tu guía, toda mi familia comió feliz. ¡Eres un ángel 💕",
                timestamp: "12:40",
              },
              {
                name: "carol",
                status: "online",
                image: null,
                message:
                  "Profesé 😭 no sabes la emoción q sentí! Siempre me salían los panes secos y feos... y con tu método salió tan suavecito a mijos ni notaron q era sin gluten 🍞. Gracias de verdad, me devolviste la esperanza 💗",
                timestamp: "12:40",
              },
              {
                name: "Patricia",
                status: "online",
                image: null,
                message:
                  "Chef, estoy llorando de felicidad! Mi hija celíaca probó el pan y me abrazó fuerte. Hacía años que no comía pan rico 🥺💕",
                timestamp: "12:40",
              },
              {
                name: "Daniela",
                status: "online",
                image: null,
                message:
                  "Profe Teresa, tu libro cambió mi vida! Ahora puedo disfrutar del pan sin preocupaciones. Mil gracias! 🙏✨",
                timestamp: "12:40",
              },
            ]}
          />
        </div>

        {/* Certified Students Section */}
        <div className="mt-16">
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mb-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-white" : "bg-white/50"}`} />
            ))}
          </div>

          {/* Green Banner */}
          <div className="bg-[#2D8B3C] text-white text-center py-4 px-6 rounded-t-lg font-bold text-xl md:text-2xl">
            + de 3.200 Alumnas Certificadas
          </div>

          {/* 2x2 Grid of Student Photos */}
          <div className="grid grid-cols-2 gap-0 rounded-b-lg overflow-hidden shadow-lg">
            <div className="aspect-square bg-gray-200">
              <img src="/woman-with-bread-loaf-in-kitchen.jpg" alt="Alumna certificada 1" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-200">
              <img src="/woman-holding-round-bread-in-kitchen.jpg" alt="Alumna certificada 2" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-200">
              <img src="/woman-with-basket-of-bread-rolls.jpg" alt="Alumna certificada 3" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-gray-200">
              <img src="/woman-in-apron-with-artisan-bread.jpg" alt="Alumna certificada 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-full h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path
            fill="#A0826D"
            fillOpacity="0.3"
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,74.7C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
          <path
            fill="#9B6B4F"
            fillOpacity="0.5"
            d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
          <path
            fill="#8B5A3C"
            fillOpacity="0.7"
            d="M0,96L48,90.7C96,85,192,75,288,69.3C384,64,480,64,576,69.3C672,75,768,85,864,85.3C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

function TestimonialCarousel({ testimonials }: { testimonials: Array<any> }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || isPaused) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-auto scrollbar-hide"
      style={{ scrollBehavior: "smooth" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
    >
      {/* Duplicate testimonials for infinite scroll effect */}
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-[350px] bg-white rounded-lg shadow-lg overflow-hidden"
          style={{ minWidth: "350px" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b">
            <div className="flex items-center gap-3">
              <button className="text-gray-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src={`/placeholder.svg?height=40&width=40&query=profile picture`}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-sm">{testimonial.name}</div>
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  {testimonial.status}
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="text-gray-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </button>
              <button className="text-gray-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 7l-7 5 7 5V7z" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image (if exists) */}
          {testimonial.image && (
            <div className="w-full h-64 bg-gray-200">
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt="Testimonial"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Message */}
          <div className="p-4 min-h-[200px] flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=32&width=32&query=profile picture`}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gray-100 rounded-lg p-3 flex-1">
                  <p className="text-sm text-gray-800">{testimonial.message}</p>
                  {testimonial.timestamp && (
                    <div className="text-xs text-gray-500 mt-1 text-right">{testimonial.timestamp}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="flex items-center gap-2 mt-4 p-2 bg-gray-100 rounded-full">
              <button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Mensagem..."
                className="flex-1 bg-transparent text-sm outline-none"
                disabled
              />
              <button className="text-gray-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                </svg>
              </button>
              <button className="text-gray-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </button>
              <button className="text-gray-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
