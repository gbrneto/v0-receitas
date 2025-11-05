import Image from "next/image"

export function RecipesSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Chef with Book Image */}
        <div className="w-full max-w-md mb-8">
          <Image
            src="https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/libro3-1279x1536.png.webp"
            alt="Dra. Teresa González con el libro de pan sin gluten"
            width={1279}
            height={1536}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* +de 200 Pan Title Image */}
        <div className="w-full max-w-2xl mb-6">
          <Image
            src="https://dxy4adpuoflk7uxq.public.blob.vercel-storage.com/sem%20gluten/espanhol/titulo-1-1024x225.png.webp"
            alt="+de 200 Pan por Jefa Teresa"
            width={1024}
            height={225}
            className="w-full h-auto"
          />
        </div>

        {/* Blue Heading */}
        <div className="text-center">
          <h2 className="text-[#2b5a9e] text-2xl md:text-3xl font-bold uppercase">
            MIRA LAS DELICIAS que VAS A APRENDER:
          </h2>
        </div>
      </div>
    </section>
  )
}
