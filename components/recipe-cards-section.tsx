"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

const recipes = [
  {
    title: "PAN DULCE / PAN DE PASCUA",
    calories: 180,
    time: 25,
    info: "Sin azúcar, gluten y lactosa",
  },
  {
    title: "PIZZAS ARTESANALES",
    calories: 180,
    time: 15,
    info: "Sin azúcar, gluten y lactosa",
  },
  {
    title: "PAN FRANCÉS / BAGUETTE",
    calories: 85,
    time: 20,
    info: "Sin azúcar, gluten y lactosa",
  },
  {
    title: "PAN DE MOLDE (DE CAJA)",
    calories: 120,
    time: 20,
    info: "Sin azúcar, gluten y lactosa",
  },
  {
    title: "AREPAS",
    calories: 90,
    time: 15,
    info: "Sin azúcar, gluten y lactosa",
  },
  {
    title: "TORTILLAS MEXICANAS",
    calories: 120,
    time: 20,
    info: "Sin azúcar, gluten y lactosa",
  },
  {
    title: "PAN DE YUCA",
    calories: 140,
    time: 20,
    info: "Sin azúcar, gluten y lactosa",
  },
]

export function RecipeCardsSection() {
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
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Recipe Image */}
              <div className="relative w-full h-64 bg-gray-200">
                <Image
                  src={`/.jpg?height=300&width=400&query=${encodeURIComponent(recipe.title)}`}
                  alt={recipe.title}
                  fill
                  className="object-cover"
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
