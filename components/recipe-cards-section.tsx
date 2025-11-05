"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const recipes = [
  {
    title: "PAN DULCE / PAN DE PASCUA",
    calories: 180,
    time: 25,
    info: "Sin azúcar, gluten y lactosa",
    href: "#pan-dulce",
  },
  {
    title: "PIZZAS ARTESANALES",
    calories: 180,
    time: 15,
    info: "Sin azúcar, gluten y lactosa",
    href: "#pizzas",
  },
  {
    title: "PAN FRANCÉS / BAGUETTE",
    calories: 85,
    time: 20,
    info: "Sin azúcar, gluten y lactosa",
    href: "#pan-frances",
  },
  {
    title: "PAN DE MOLDE (DE CAJA)",
    calories: 120,
    time: 20,
    info: "Sin azúcar, gluten y lactosa",
    href: "#pan-molde",
  },
  {
    title: "AREPAS",
    calories: 90,
    time: 15,
    info: "Sin azúcar, gluten y lactosa",
    href: "#arepas",
  },
  {
    title: "TORTILLAS MEXICANAS",
    calories: 120,
    time: 20,
    info: "Sin azúcar, gluten y lactosa",
    href: "#tortillas",
  },
  {
    title: "PAN DE YUCA",
    calories: 140,
    time: 20,
    info: "Sin azúcar, gluten y lactosa",
    href: "#pan-yuca",
  },
]

export function RecipeCardsSection() {
  const getRecipeImage = (index: number) => {
    const imageMap: { [key: number]: string } = {
      0: "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/fts3.6.webp",
      1: "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/fts3.7.webp",
      2: "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/fts3.1.webp",
      3: "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/fts3.2.webp",
      4: "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/fts3.3.webp",
      5: "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/fts3.4.webp",
      6: "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/fts3.5.webp",
    }
    return (
      imageMap[index] || "https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/fts3.2.webp"
    )
  }

  return (
    <section className="bg-[#f5e6d3] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-[#8B4513] text-2xl md:text-3xl font-bold mb-12">
          PANES DELICIOSOS (SIN GLUTEN):
        </h2>

        {/* Recipe Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {recipes.map((recipe, index) => (
            <Link key={index} href={recipe.href} className="block">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Recipe Image */}
                <div className="relative w-full bg-gray-200">
                  <Image
                    src={getRecipeImage(index) || "/placeholder.svg"}
                    alt={recipe.title}
                    width={800}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>

                {/* Recipe Info */}
                <div className="p-6 text-center">
                  <h3 className="text-[#8B4513] font-bold text-lg mb-2">{recipe.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">(SIN GLUTEN)</p>
                  <p className="text-gray-700 text-sm">
                    Calorías: {recipe.calories} Tiempo: {recipe.time} minutos {recipe.info}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-6">
          <Button
            size="lg"
            className="bg-[#4A7C9C] hover:bg-[#3d6680] text-white font-bold px-12 py-6 text-lg rounded-full"
          >
            DESCARGAR MI COPIA
          </Button>
        </div>

        {/* Footer Text */}
        <p className="text-center text-[#8B4513] font-bold text-lg">Y más de 193 RECETAS DE PANES...</p>
      </div>
    </section>
  )
}
