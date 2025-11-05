export function GuaranteeSection() {
  return (
    <section className="relative bg-[#f5e6d3] py-16 px-4 overflow-hidden">
      {/* Wave pattern background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute top-0 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 Q300,20 600,50 T1200,50 L1200,0 L0,0 Z" fill="#e8d4b8" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 Q300,80 600,50 T1200,50 L1200,120 L0,120 Z" fill="#e8d4b8" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Golden seal badge */}
        <div className="flex justify-center mb-8">
          <div className="relative w-80 h-80">
            {/* Starburst background */}
            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
              <defs>
                <radialGradient id="goldGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffd700" />
                  <stop offset="50%" stopColor="#ffed4e" />
                  <stop offset="100%" stopColor="#d4af37" />
                </radialGradient>
              </defs>
              {/* Starburst points */}
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i * 360) / 24
                const isLong = i % 2 === 0
                const length = isLong ? 100 : 85
                return (
                  <polygon
                    key={i}
                    points={`100,100 ${100 + length * Math.cos((angle * Math.PI) / 180)},${100 + length * Math.sin((angle * Math.PI) / 180)} ${100 + length * Math.cos(((angle + 15) * Math.PI) / 180)},${100 + length * Math.sin(((angle + 15) * Math.PI) / 180)}`}
                    fill="url(#goldGradient)"
                    stroke="#d4af37"
                    strokeWidth="0.5"
                  />
                )
              })}
            </svg>

            {/* Inner circle with striped pattern */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
                {/* Diagonal stripes pattern */}
                <div
                  className="absolute inset-0 rounded-full overflow-hidden"
                  style={{
                    background:
                      "repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.1) 4px, rgba(255,255,255,0.1) 8px)",
                  }}
                />

                {/* Center dark circle */}
                <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center shadow-inner">
                  <div className="text-yellow-400 font-black text-5xl leading-none">60</div>
                  <div className="text-yellow-400 font-black text-2xl leading-none">DAY</div>
                </div>

                {/* Top curved text */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <path id="topCurve" d="M 30,100 A 70,70 0 0,1 170,100" fill="none" />
                  <text className="text-sm font-black fill-gray-900">
                    <textPath href="#topCurve" startOffset="50%" textAnchor="middle">
                      100% MONEY BACK
                    </textPath>
                  </text>
                </svg>

                {/* Bottom curved text */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <path id="bottomCurve" d="M 30,100 A 70,70 0 0,0 170,100" fill="none" />
                  <text className="text-sm font-black fill-gray-900">
                    <textPath href="#bottomCurve" startOffset="50%" textAnchor="middle">
                      GUARANTEE
                    </textPath>
                  </text>
                </svg>

                {/* Side dots */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-yellow-400" />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-yellow-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          PRUÉBALO SIN RIESGO - Garantía incondicional de 60 días.
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          Tienes 60 días para probarlo... Si no estás de 100% satisfecho, te reembolsaré hasta el último centavo. Sin
          complicaciones. Sin preguntas.
        </p>
      </div>
    </section>
  )
}
