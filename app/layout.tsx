import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Otago Doors — UK Door Installation',
  description:
    "The UK's all-in-one door installation service. We turn up, measure, give you options, and fit your door. Transparent, seamless, hassle-free.",
  keywords: 'door installation, front doors, UK, door fitting, composite doors',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
