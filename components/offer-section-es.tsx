"use client"

import { Check, Star, GraduationCap, Shield } from "lucide-react"
import Image from "next/image"

export function OfferSectionEs() {
  return (
    <section id="offer-section" className="bg-white py-16 px-4">
      <div className="max-w-md mx-auto bg-[#f5e6d3] rounded-lg shadow-lg p-6">
        {/* Best Seller Badge */}
        <div className="bg-red-600 text-white text-center py-2 px-4 font-bold text-sm mb-6">MEJOR VENDIDO</div>

        {/* Book Image */}
        <div className="relative mb-6">
          <Image
            src="/images/design-mode/MOCKUP-NOVO-1.webp"
            alt="Libro de Pan por la Jefa Teresa"
            width={250}
            height={300}
            className="mx-auto"
          />
        </div>

        {/* Title */}
        <h2 className="text-[#8B4513] text-2xl font-bold text-center mb-4">LIBRO DE 200 PAN DE LA JEFA TERESA ®</h2>

        {/* Free Books Banner */}
        <div className="bg-green-600 text-white text-center py-2 px-4 font-bold text-sm mb-4">+7 LIBROS GRATIS:</div>

        {/* Bonus List */}
        <div className="space-y-2 mb-6">
          <div className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm">+ EL ARTE DE MEZCLAR HARINAS SIN GLUTEN</span>
          </div>
          <div className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm">+ RECETAS GALLETAS Y BIZCOCHOS</span>
          </div>
          <div className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm">+ RECETAS PROTEICAS EN FREIDORA DE AIRE</span>
          </div>
          <div className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm">+ 67 RECETAS DE SUCO DETOX</span>
          </div>
          <div className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm">+ 3 BONUS SECRETOS</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="text-center mb-6">
          <div className="relative inline-block mb-2">
            <span className="text-gray-600 text-lg">DE $ 99.90</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-0.5 bg-red-600 rotate-[-15deg]"></div>
            </div>
          </div>
          <div className="text-sm text-gray-700 mb-2">Por solo</div>
          <div className="text-green-600 text-6xl font-bold">
            <sup className="text-3xl">$</sup>9,90
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="https://pay.brightcarty.com/checkout-es-eur"
          className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors mb-4 text-center"
        >
          SI, LO QUIERO
        </a>

        {/* Urgency Text */}
        <p className="text-center text-sm font-bold mb-6">**LA OFERTA VENCE HOY**</p>

        {/* Security Badges */}
        <div className="text-center">
          <p className="text-sm font-semibold mb-3">100% SECURE SITE</p>
          <div className="flex justify-center items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs">
                Compra
                <br />
                Segura
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs">
                Satisfaction
                <br />
                Garantizada
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <span className="text-xs">
                Privacidad
                <br />
                Protegida
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Recipe Delivery Information Section */}
      <div className="max-w-4xl mx-auto mt-16">
        {/* Recipe Pages Image */}
        <div className="mb-8">
          <Image
            src="/recipe-pages-spread-out.jpg"
            alt="Páginas de recetas"
            width={600}
            height={200}
            className="mx-auto"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1e3a8a] mb-8">¿CÓMO RECIBIRÉ LAS RECETAS?</h2>

        {/* Benefits List */}
        <div className="space-y-3 mb-12 max-w-xl mx-auto">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#8B4513] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-700">Me puedo imprimir mi pedido</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#8B4513] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-700">Puedes verlo en tu celular</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#8B4513] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-700">Puedes verlo en tu computadora</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#8B4513] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-700">Sin límites</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#8B4513] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-700">Acceso de por vida. Con nuevas recetas</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#8B4513] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-700">¿Perdiste tu receta? Te la reenviaremos.</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#8B4513] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-700">Obtengas nuevos libros cada mes</span>
          </div>
        </div>

        {/* Multi-Device Mockup */}
        <div className="mb-12">
          <Image
            src="/recipes-displayed-on-multiple-devices-smartphone-l.jpg"
            alt="Recetas en múltiples dispositivos"
            width={700}
            height={400}
            className="mx-auto"
          />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center">
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800 mb-1">5.0</div>
            <div className="text-sm text-gray-600">
              Calificación
              <br />
              Promedio
            </div>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center">
            <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800 mb-1">+200+</div>
            <div className="text-sm text-gray-600">
              Alumnas
              <br />
              Certificadas
            </div>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800 mb-1">99%</div>
            <div className="text-sm text-gray-600">
              Satisfacción
              <br />
              Garantizada
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            DESCARGAR MI COPIA
          </button>
        </div>
      </div>
    </section>
  )
}
