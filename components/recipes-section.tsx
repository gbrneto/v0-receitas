"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const recipeImages = [
  {
    src: "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/fts2.1.webp",
    alt: "Pan baguette sin gluten",
  },
  {
    src: "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/fts2.2.webp",
    alt: "Panecillos sin gluten",
  },
  {
    src: "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/fts2.3.webp",
    alt: "Panettone sin gluten",
  },
  {
    src: "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/fts2.4.avif",
    alt: "Bollitos sin gluten",
  },
  {
    src: "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/fts2.5.webp",
    alt: "Pan artesanal sin gluten",
  },
  {
    src: "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/fts2.6.webp",
    alt: "Focaccia sin gluten",
  },
  {
    src: "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/fts2.7.webp",
    alt: "Pizza sin gluten",
  },
  {
    src: "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/fts2.8.webp",
    alt: "Pan de chocolate sin gluten",
  },
  {
    src: "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/fts2.9.webp",
    alt: "Rollos de canela sin gluten",
  },
  {
    src: "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/fts2.10.webp",
    alt: "Pan dulce sin gluten",
  },
]

const benefits = [
  { icon: "⊕", text: "200 panes, suaves y esponjosos" },
  { icon: "🥖", text: "Textura perfecta, sin gluten" },
  { icon: "🥖", text: "Sin harinas especiales" },
  { icon: "⏰", text: "Listos en 15 minutos" },
  { icon: "⊕", text: "Aprobadas por toda la familia" },
  { icon: "✓", text: "Paso a paso de la preparación" },
  { icon: "💰", text: "50% más barato que el tradicional" },
]

function AutoScrollCarousel({ images, startIndex }: { images: typeof recipeImages; startIndex: number }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const pauseTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || isPaused) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth
    let scrollPosition = 0

    const scroll = () => {
      if (isPaused) return

      scrollPosition += 0.5 // Slow scroll speed

      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
    }

    const intervalId = setInterval(scroll, 30)

    return () => clearInterval(intervalId)
  }, [isPaused])

  const handleUserScroll = () => {
    setIsPaused(true)

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current)
    }

    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false)
    }, 3000)
  }

  return (
    <div
      ref={scrollRef}
      onTouchStart={handleUserScroll}
      onWheel={handleUserScroll}
      className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {/* Duplicate images for seamless loop */}
      {[...images, ...images].map((image, index) => (
        <div key={index} className="flex-shrink-0 w-[150px] h-[150px] relative rounded-lg overflow-hidden">
          <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
        </div>
      ))}
    </div>
  )
}

export function RecipesSection() {
  const firstRowImages = recipeImages.slice(0, 5)
  const secondRowImages = recipeImages.slice(5, 10)

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Chef with Book Image */}
        <div className="w-full max-w-md mb-8">
          <Image
            src="/images/design-mode/libro3.webp"
            alt="Dra. Teresa González con el libro de pan sin gluten"
            width={1279}
            height={1536}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* +de 200 Pan Title Image */}
        <div className="w-full max-w-2xl mb-6">
          <Image
            src="/images/design-mode/titulo-1.webp"
            alt="+de 200 Pan por Jefa Teresa"
            width={1024}
            height={225}
            className="w-full h-auto"
          />
        </div>

        {/* Blue Heading */}
        <div className="text-center mb-8">
          <h2 className="text-[#2b5a9e] text-2xl md:text-3xl font-bold uppercase">
            MIRA LAS DELICIAS que VAS A APRENDER:
          </h2>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-5 gap-4 w-full mb-8">
          {recipeImages.map((image, index) => (
            <div key={index} className="relative w-[150px] h-[150px] rounded-lg overflow-hidden mx-auto">
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Mobile Carousels - Hidden on desktop */}
        <div className="md:hidden w-full space-y-4 mb-8">
          <AutoScrollCarousel images={firstRowImages} startIndex={0} />
          <AutoScrollCarousel images={secondRowImages} startIndex={5} />
        </div>

        <div className="w-full max-w-2xl space-y-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-2xl flex-shrink-0">{benefit.icon}</span>
              <p className="text-gray-700 text-lg">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
