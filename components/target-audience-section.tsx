export function TargetAudienceSection() {
  const targetAudiences = [
    "Búsqueda de recetas más saludables",
    "Reeducación alimentaria",
    "Intolerantes a la lactosa",
    "Celíacos",
    "Diabéticos",
  ]

  return (
    <section className="relative bg-[#FFF8F0]">
      {/* Top wave divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#F5E6D3"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 pt-32">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#8B4513] mb-12">
            PARA PERSONAS QUE ENFRENTAN:
          </h2>

          {/* List */}
          <div className="space-y-6">
            {targetAudiences.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                {/* Double chevron icon */}
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#8B4513]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41zM11.59 7.41L16.18 12l-4.59 4.59L13 18l6-6-6-6-1.41 1.41z" />
                  </svg>
                </div>
                {/* Text */}
                <p className="text-lg md:text-xl text-gray-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="relative w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          {/* Multiple layers for depth effect */}
          <path
            fill="#C4A57B"
            fillOpacity="0.5"
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
          <path
            fill="#A0826D"
            fillOpacity="0.7"
            d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,69.3C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
          <path
            fill="#8B4513"
            d="M0,96L48,90.7C96,85,192,75,288,69.3C384,64,480,64,576,69.3C672,75,768,85,864,85.3C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}
