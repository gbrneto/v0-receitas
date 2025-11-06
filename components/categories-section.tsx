"use client"

export function CategoriesSection() {
  const scrollToOffer = () => {
    const offerSection = document.getElementById("offer-section")
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const categories = [
    {
      title: "Panes del Día a Día",
      images: ["/toast-bread.jpg", "/sandwich-bread.jpg", "/sliced-bread.jpg"],
    },
    {
      title: "Panes Exprés y Económicos",
      images: ["/flatbread.jpg", "/dinner-rolls.jpg", "/quick-bread.jpg"],
    },
    {
      title: "Panes Integrales y Funcionales",
      images: ["/whole-grain-bread.png", "/multigrain-bread.jpg", "/seeded-bread.jpg"],
    },
    {
      title: "Panes Dulces",
      images: ["/fruit-bread.jpg", "/chocolate-bread.jpg", "/warm-cinnamon-rolls.png"],
    },
    {
      title: "Panes Rellenos y Especiales",
      images: ["/artisan-bread.png", "/filled-sandwich.jpg", "/panettone.jpg"],
    },
    {
      title: "Panes Veganos y Sin Lactosa",
      images: ["/braided-bread.jpg", "/vegan-rolls.jpg", "/golden-cornbread.png"],
    },
    {
      title: "Pizzas Sin Gluten",
      images: ["/margherita-pizza.png", "/pepperoni-pizza.png", "/vegetable-pizza.png"],
    },
  ]

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#8B4513] mb-12">
          RECETAS DIVIDIDAS EN CATEGORÍAS:
        </h2>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              {/* Category Title */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-6">{category.title}</h3>

              {/* Category Images */}
              <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
                {category.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${category.title} ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button
            onClick={scrollToOffer}
            className="bg-[#4A7C9E] hover:bg-[#3d6682] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            QUIERO LAS RECETAS
          </button>
        </div>
      </div>
    </section>
  )
}
