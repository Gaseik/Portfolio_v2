import type { Metadata } from 'next'
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://james-cheng.vercel.app'),
  title: 'James Cheng — Frontend Engineer',
  description: 'Frontend Engineer with 6+ years experience. React, Next.js, TypeScript. Based in London, UK.',
  openGraph: {
    title: 'James Cheng — Frontend Engineer',
    description: 'Frontend Engineer with 6+ years experience. React, Next.js, TypeScript. Based in London, UK.',
    url: 'https://james-cheng.vercel.app',
    siteName: 'James Cheng',
    locale: 'en_GB',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <body>
        <Cursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
