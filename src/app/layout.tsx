import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'C&M Mechanical Heating and Cooling',
  description: 'C&M Mechanical HVAC provides services for all types of heating systems and cooling systems.',
  keywords: 'HVAC, installation, air conditioning, heating, ductless, mitsubishi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  )
}
