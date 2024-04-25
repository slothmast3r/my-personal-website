import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navigation } from "@/app/_components/Navigation"
import { PageFooter } from "@/app/_components/PageFooter"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Oskar Straszynski - Portfolio",
  description: "This is Oskar Straszynski's personal portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navigation></Navigation>
        {children}
        <PageFooter></PageFooter>
      </body>
    </html>
  )
}
