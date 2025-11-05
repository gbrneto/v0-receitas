import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "200 Recetas Sin Gluten - Chef Teresa Oliveira",
  description:
    "Libro digital con 200 recetas de panes sin gluten. Aprende a hacer pan dulce, pizzas, arepas, tortillas y mucho más con la Chef Teresa Oliveira.",
  generator: "receitas.beversia.com",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '861866157007304');
              fbq('track', 'PageView');
            `,
          }}
        />
        <link
          rel="preload"
          href="https://scripts.converteai.net/33c48ae5-11f3-4040-b011-a6b5ad090b61/players/690b36e6d4bbf937f39fc463/v4/player.js"
          as="script"
        />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script" />
        <link
          rel="preload"
          href="https://cdn.converteai.net/33c48ae5-11f3-4040-b011-a6b5ad090b61/690b36e177d4604252a031fc/main.m3u8"
          as="fetch"
        />
        <link
          rel="preload"
          href="https://scripts.converteai.net/33c48ae5-11f3-4040-b011-a6b5ad090b61/players/690b8d436489e82b7da1194c/v4/player.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://cdn.converteai.net/33c48ae5-11f3-4040-b011-a6b5ad090b61/690b8d3f22ce52d5d4b17668/main.m3u8"
          as="fetch"
        />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
      </head>
      <body className={`font-sans antialiased`}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=861866157007304&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
