import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "British Garden Nature",
  description: "Explore insects and flowers in British gardens",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/bees">Bees</Link>
              </li>
              <li>
                <Link href="/butterflies">Butterflies</Link>
              </li>
              <li>
                <Link href="/ladybirds">Ladybirds</Link>
              </li>
              <li>
                <Link href="/flowers">Flowers</Link>
              </li>
              <li>
              <Link href="/birds">Birds</Link>
            </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}

