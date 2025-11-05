"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "¿LAS RECETAS REALMENTE FUNCIONAN?",
    answer:
      "Sí. Todas las recetas fueron probadas y ajustadas para que salgan con la textura, el sabor y la esponjosidad que tanto buscabas. Incluso personas que nunca habían hecho pan lograron resultados perfectos en el primer intento.",
  },
  {
    question: "¿NECESITO HARINAS ESPECIALES O CARAS?",
    answer:
      "No. Usamos mezclas simples y accesibles: arroz, maíz, yuca, avena sin gluten, fécula de papa, entre otras. También incluimos un capítulo de mezclas caseras para que prepares tus propias harinas en casa y ahorres dinero.",
  },
  {
    question: "¿LAS RECETAS SIRVEN PARA CELÍACOS Y PERSONAS CON INTOLERANCIA?",
    answer:
      "Sí. Todas son 100% libres de gluten. También encontrarás opciones sin lactosa y sin huevos, aptas para veganos o personas con múltiples intolerancias.",
  },
  {
    question: "¿SON RECETAS DIFÍCILES DE HACER?",
    answer:
      "No. Están pensadas para el día a día, con pasos claros y sencillos. Muchas se pueden hacer en sartén, en airfryer o en microondas, listas en minutos.",
  },
  {
    question: "¿LOS PANES QUEDAN CON TEXTURA DE PAN DE VERDAD?",
    answer:
      "¡Sí! Esa es la mayor diferencia. Los panes crecen, quedan dorados por fuera y esponjosos por dentro. Muchos clientes dicen que hasta sus familiares no notaron la diferencia con los panes tradicionales.",
  },
  {
    question: "¿CUÁNTO TIEMPO DEMORA LA ENTREGA DEL LIBRO?",
    answer:
      "La entrega es inmediata. Apenas realices la compra, recibirás un enlace en tu correo para descargar el libro en PDF y comenzar a preparar tus panes al instante.",
  },
  {
    question: "¿Y SI NO ME GUSTA O NO ME FUNCIONA?",
    answer:
      "Tienes 60 días de garantía. Si por cualquier motivo no quedas satisfecha, puedes pedir tu reembolso sin complicaciones.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Preguntas y respuestas (FAQ)</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-start gap-3 py-6 text-left hover:opacity-80 transition-opacity"
                >
                  {isOpen ? (
                    <ChevronDown className="w-5 h-5 flex-shrink-0 mt-1 text-[#B8754E]" />
                  ) : (
                    <ChevronRight className="w-5 h-5 flex-shrink-0 mt-1" />
                  )}
                  <span className={`font-bold text-base md:text-lg ${isOpen ? "text-[#B8754E]" : "text-black"}`}>
                    {faq.question}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 pl-8 pr-4">
                    <p className="text-base leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
