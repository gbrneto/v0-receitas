import { Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-[400px] h-[300px]">
            <Image
              src="/images/design-mode/image.png"
              alt="Cooking with Chef Teresa Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-8">
          <p className="text-sm mb-2">Confidenciales:</p>
          <a
            href="mailto:sac.grammateresa@hotmail.com"
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>sac.grammateresa@hotmail.com</span>
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a href="#" className="hover:text-gray-300 transition-colors">
            Política de privacidad
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Condiciones de uso
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Política de devoluciones
          </a>
        </div>

        {/* Copyright */}
        <div className="text-right text-sm text-gray-400">
          <p>© 2025 / Abuela Teresas – Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
