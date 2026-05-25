import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://keystoneworkforcebridge.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Keystone Workforce Bridge | Bangladesh–Malaysia Workforce Documentation & Compliance',
    template: '%s | Keystone Workforce Bridge',
  },
  description:
    'Keystone Workforce Bridge — B2B documentation, compliance reporting, employer liaison, and post-arrival welfare-data support for the Bangladesh–Malaysia labour corridor. Serving licensed agencies, Malaysian employers, HRO partners, and ESG teams. Not a recruitment agency.',
  keywords: [
    'Keystone Workforce Bridge',
    'Bangladesh Malaysia workforce compliance',
    'recruitment fee documentation Bangladesh',
    'WRO risk assessment Bangladesh',
    'WRO exposure check Malaysia',
    'employer compliance dashboard Malaysia',
    'migrant worker welfare data Bangladesh',
    'ESG social compliance Bangladesh Malaysia',
    'labour corridor documentation',
    'Bangladesh employer liaison Malaysia',
    'Malaysia workforce documentation',
    'labour compliance reporting Bangladesh',
    'responsible recruitment Bangladesh',
    'B2B compliance vendor Bangladesh',
    'Keystone Education Consultancy',
    'Munim Hasibul',
    'post arrival welfare support Bangladesh',
    'corridor intelligence brief Bangladesh Malaysia',
    'UFLPA supply chain Bangladesh',
    'CSDDD compliance Bangladesh',
    'Sedex SMETA Bangladesh Malaysia',
    'recruitment agency compliance Bangladesh',
    'agency documentation BPO Bangladesh',
    'Bangladesh Malaysia labour migration compliance',
  ],
  authors: [{ name: 'Munim Hasibul' }, { name: 'Keystone Education Consultancy' }],
  creator: 'Keystone Workforce Bridge',
  publisher: 'Keystone Education Consultancy',
  category: 'Business Services',
  classification: 'B2B Compliance & Documentation',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Keystone Workforce Bridge',
    title: 'Keystone Workforce Bridge | Bangladesh–Malaysia Workforce Documentation & Compliance',
    description:
      'B2B documentation, compliance reporting, employer liaison, and welfare-data support for licensed agencies, Malaysian employers, HRO partners, and ESG teams operating in the Bangladesh–Malaysia labour corridor.',
    images: [
      {
        url: '/images/logo.jpg',
        width: 1320,
        height: 820,
        alt: 'Keystone Workforce Bridge — Bangladesh Malaysia Workforce Compliance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keystone Workforce Bridge | Bangladesh–Malaysia Workforce Compliance',
    description:
      'B2B workforce documentation & compliance support for the Bangladesh–Malaysia labour corridor.',
    images: ['/images/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/icon.png', type: 'image/png' },
    ],
    apple: '/images/icon.png',
    shortcut: '/images/icon.png',
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    // Tell AI crawlers where to find the llms.txt
    'llms-txt': `${siteUrl}/llms.txt`,
    'llms-full-txt': `${siteUrl}/llms-full.txt`,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Tell AI crawlers and search engines about llms.txt */}
        <link rel="alternate" type="text/plain" title="LLMs.txt" href="/llms.txt" />
      </head>
      <body className={`${inter.className} antialiased text-slate-900 bg-white`}>
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
