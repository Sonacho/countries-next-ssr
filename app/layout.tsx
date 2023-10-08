import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import axios from "axios";
axios.defaults.baseURL = process.env.LOCALHOST || "https://countries-next-ssr.vercel.app"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Countries',
  description: 'Countries of the World',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
