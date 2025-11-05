export function BonusSection() {
  const bonusBooks = [
    {
      id: 1,
      title: "EL ARTE DE MEZCLAR HARINAS SIN GLUTEN",
      bannerColor: "bg-[#C85A8E]",
      description:
        "20 Recetas de bocaditos de pastel frito crujientes, fibres de culpa, saludables y llenos de sabor en cada bocado.",
      image: "/gluten-free-flour-mixing-cookbook.jpg",
    },
    {
      id: 2,
      title: "GALLETAS Y BIZCOCHOS",
      bannerColor: "bg-[#D97638]",
      description: "20 Recetas irresistibles de galletas crujientes y bizcochos esponjosos, deliciosos y saludables.",
      image: "/cookies-and-biscuits-cookbook.jpg",
    },
    {
      id: 3,
      title: "RECETAS PROTEICAS EN FREIDORA DE AIRE",
      bannerColor: "bg-[#E89B3C]",
      description: "20 Recetas de comidas rápidas, saludables y llenas de proteína usando solo tu freidora de aire.",
      image: "/air-fryer-protein-recipes-cookbook.jpg",
    },
    {
      id: 4,
      title: "67 SUCOS DETOX",
      bannerColor: "bg-[#4CAF50]",
      description: "Renueva tu energía con 67 recetas de jugos detox naturales, refrescantes y nutritivos.",
      image: "/detox-juice-recipes-cookbook.jpg",
    },
  ]

  return (
    <section className="bg-[#F5E6D3] py-12 px-4">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#F4C430] to-[#FFD700] py-3 mb-8 -mx-4">
        <h2 className="text-center text-white font-bold text-xl md:text-2xl tracking-wide">RECIBE +3 LIBROS GRATIS:</h2>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Bonus Books */}
        {bonusBooks.map((book, index) => (
          <div key={book.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-center font-bold text-lg mb-3">LIBRO BONUS {index + 1}:</h3>
            <div className={`${book.bannerColor} text-white text-center py-2 px-4 font-bold text-sm md:text-base mb-4`}>
              {book.title}
            </div>
            <div className="flex justify-center mb-4">
              <img
                src={book.image || "/placeholder.svg"}
                alt={book.title}
                className="w-32 h-44 object-cover rounded shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300"
              />
            </div>
            <p className="text-center text-sm text-gray-700 mb-4">{book.description}</p>
            <div className="text-center">
              <span className="text-red-600 line-through font-semibold mr-2">$19.90</span>
              <span className="text-gray-700 font-semibold">HOY ES </span>
              <span className="text-green-600 font-bold text-lg">GRATIS</span>
              <div className="h-0.5 bg-green-600 w-20 mx-auto mt-1"></div>
            </div>
          </div>
        ))}

        {/* Secret Gifts Bonus */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="bg-gradient-to-r from-[#E89B3C] to-[#F4A460] text-white text-center py-2 px-4 font-bold text-sm md:text-base mb-4">
            +3 BONIFICACIÓN DE REGALOS SECRETOS
          </div>
          <div className="flex justify-center mb-4">
            <img src="/golden-gift-box-with-question-marks.jpg" alt="Regalos Secretos" className="w-32 h-32 object-contain" />
          </div>
          <div className="text-center">
            <span className="text-red-600 line-through font-semibold mr-2">$59.90</span>
            <span className="text-gray-700 font-semibold">HOY ES </span>
            <span className="text-green-600 font-bold text-lg">GRATIS</span>
            <div className="h-0.5 bg-green-600 w-20 mx-auto mt-1"></div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-6">
          <button className="bg-[#4A7BA7] hover:bg-[#3A6B97] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300">
            QUIERO LOS LIBROS
          </button>
        </div>
      </div>
    </section>
  )
}
