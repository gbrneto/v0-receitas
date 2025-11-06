"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "vturb-smartplayer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { id: string; muted?: string },
        HTMLElement
      >
    }
  }
}

export function TestimonialVideoSection() {
  const scrollToOffer = () => {
    const offerSection = document.getElementById("offer-section")
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  useEffect(() => {
    // Load VTurb player script
    const script = document.createElement("script")
    script.src =
      "https://scripts.converteai.net/33c48ae5-11f3-4040-b011-a6b5ad090b61/players/690b8d436489e82b7da1194c/v4/player.js"
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      setTimeout(() => {
        const player = document.querySelector("#vid-690b8d436489e82b7da1194c") as any
        if (player && player.player) {
          player.player.muted = true
        }
      }, 1000)
    }

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
            muted="true"
            style={{ display: "block", margin: "0 auto", width: "100%" }}
          />
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <button
            onClick={scrollToOffer}
            className="bg-[#4A7BA7] hover:bg-[#3A6B97] text-white font-bold py-4 px-12 rounded-full text-lg transition-colors shadow-lg"
          >
            DESCARGAR MI CÓPIA
          </button>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            LO QUE DICEN NUESTRAS ALUMNAS :
          </h3>

          {/* First Carousel */}
          <TestimonialCarousel
            images={[
              "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/dep%201.webp",
              "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/dep%202.webp",
              "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/dep%203.webp",
              "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/dep%204.webp",
              "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/dep%206.webp",
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
            images={[
              "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/edna.webp",
              "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/ana.webp",
              "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/carol.webp",
              "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/lucia.webp",
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
              <img
                src="/woman-with-bread-loaf-in-kitchen.jpg"
                alt="Alumna certificada 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-200">
              <img
                src="/images/design-mode/fsafsads(1).png"
                alt="Alumna certificada 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-200">
              <img
                src="/images/design-mode/fsafsads(1).png"
                alt="Alumna certificada 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-200">
              <img
                src="/images/design-mode/fsafsads(1).png"
                alt="Alumna certificada 4"
                className="w-full h-full object-cover"
              />
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

function TestimonialCarousel({ images }: { images: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || isPaused || isDragging) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [isPaused, isDragging])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0))
    setScrollLeft(scrollRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-scroll cursor-grab active:cursor-grabbing"
      style={{
        scrollBehavior: isDragging ? "auto" : "smooth",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false)
        setIsDragging(false)
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
    >
      {/* Duplicate images for infinite scroll effect */}
      {[...images, ...images].map((image, index) => (
        <div key={index} className="flex-shrink-0 w-[350px] rounded-lg overflow-hidden shadow-lg">
          <img
            src={image || "/placeholder.svg"}
            alt={`Testimonial ${index + 1}`}
            className="w-full h-auto object-cover pointer-events-none"
            draggable="false"
          />
        </div>
      ))}
    </div>
  )
}
