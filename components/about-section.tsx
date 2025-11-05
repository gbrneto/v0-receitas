import Image from "next/image"

export function AboutSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#4a7c9e] to-[#5a8db0] py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Chef Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative h-[500px] w-full max-w-[450px] overflow-hidden rounded-lg shadow-2xl">
            <Image src="/woman-chef-cooking-in-kitchen.jpg" alt="Jefa Teresa" fill className="object-cover" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="mb-6 text-center font-bold text-3xl text-white md:text-4xl">QUIÉN ES LA JEFA TERESA ?</h2>

        {/* Story Text */}
        <p className="text-center font-medium text-base text-white leading-relaxed md:text-lg">
          Crecí en una familia donde el pan recién horneado siempre fue símbolo de unión y cariño. Cuando descubrí mi
          intolerancia al gluten, pensé que nunca más podría disfrutar ese sabor de mi infancia. Pero no me rendí: con
          dedicación y años de pruebas, logré recrear panes con la misma textura, aroma y sabor que los tradicionales,
          pero totalmente sin gluten. Hoy, en este libro con 200 recetas, quiero compartir mi misión contigo: que nadie
          tenga que renunciar al placer de un buen pan por culpa de una intolerancia.
        </p>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block h-[60px] w-full md:h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
