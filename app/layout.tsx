import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
