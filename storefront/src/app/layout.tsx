import { getBaseURL } from "@/lib/util/env"
import { Toaster } from "@medusajs/ui"
import { Analytics } from "@vercel/analytics/next"
import { Inter } from "next/font/google"
import { Metadata } from "next"
import "@/styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={inter.variable}>
      <body>
        <main className="relative">{props.children}</main>
        <Toaster className="z-[99999]" position="bottom-left" />
        <Analytics />
      </body>
    </html>
  )
}
