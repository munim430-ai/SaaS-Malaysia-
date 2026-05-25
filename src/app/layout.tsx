import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://keystoneworkforcebridge.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Keystone Workforce Bridge | Bangladesh–Malaysia Workforce Documentation & Compliance',
    template: '%s | Keystone Workforce Bridge',
  },
  description: 'B2B documentation, compliance reporting, employer liaison, and post-arrival welfare-data support for the Bangladesh–Malaysia labour corridor. Serving licensed agencies, Malaysian employers, HRO partners, and ESG teams.',
  keywords: [
    'Bangladesh Malaysia workforce compliance',
    'recruitment fee documentation',
    'WRO risk assessment support',
    'employer compliance dashboard',
    'migrant worker welfare data',
    'ESG social compliance support',
    'labour corridor documentation',
    'Bangladesh employer liaison',
    'Malaysia workforce documentation',
    'labour compliance reporting',
    'responsible recruitment',
    'B2B compliance vendor',
  ],
  authors: [{ name: 'Keystone Education Consultancy' }],
  creator: 'Keystone Workforce Bridge',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Keystone Workforce Bridge',
    title: 'Keystone Workforce Bridge | Bangladesh–Malaysia Workforce Documentation & Compliance',
    description: 'B2B documentation, compliance reporting, employer liaison, and welfare-data support for licensed agencies, Malaysian employers, HRO partners, and ESG teams.',
    images: [{ url: '/images/icon.png', width: 512, height: 512, alt: 'Keystone Workforce Bridge' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keystone Workforce Bridge',
    description: 'B2B workforce documentation & compliance for the Bangladesh–Malaysia corridor.',
    images: ['/images/icon.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/images/icon.png', apple: '/images/icon.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased text-slate-900 bg-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
