import type { Metadata } from 'next'
import { Montserrat, Inter, Poppins } from 'next/font/google'
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

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['700', '800'],
})

export const metadata: Metadata = {
  title: 'Otago Doors — Door Installation Service',
  description:
    'Otago Doors is a professional door installation service. We visit, measure up, help you choose, and fit your door. Front doors, patio and sliding doors across the UK.',
  keywords: 'door installation, front doors, UK, door fitting, composite doors',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} ${poppins.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
