import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import SideMenu from "@/components/side-menu"
import Script from "next/script";
// Import the CartProvider
import { CartProvider } from "@/context/cart-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fashion Personalization Engine",
  description: "Personalized fashion recommendations and outfit inspiration",
    generator: 'v0.dev'
}

// Wrap the content with CartProvider
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-R97RWHFP9Z"></Script>
        <Script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-R97RWHFP9Z');
              `,
            }}
        />
      </head>
      <body className={inter.className}>
        <CartProvider>
          <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1 overflow-hidden">
              <SideMenu />
              <main className="flex-1 overflow-y-auto p-6">{children}</main>
            </div>
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
