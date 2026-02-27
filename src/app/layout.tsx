import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'Teahan Pro Audio & Lighting | Professional Event Production Ireland',
    template: '%s | Teahan Pro Audio & Lighting',
  },
  description:
    'Professional audio, lighting, visual and stage production services for concerts, festivals, corporate events, weddings and schools across Ireland.',
  keywords: ['audio production', 'lighting Ireland', 'event production', 'sound engineering', 'stage set', 'concerts festivals Ireland'],
  metadataBase: new URL('https://teahansound.ie'),
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://teahansound.ie',
    siteName: 'Teahan Pro Audio & Lighting',
    title: 'Teahan Pro Audio & Lighting | Professional Event Production Ireland',
    description: 'Professional audio, lighting, visual and stage production services across Ireland.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teahan Pro Audio & Lighting',
    description: 'Professional event production services across Ireland.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
