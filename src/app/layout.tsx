import type { Metadata } from 'next'
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
  metadataBase: new URL('https://portfolio-james-cheng.vercel.app'),
  title: 'James Cheng (程韋傑) — Frontend Engineer | React · Next.js · TypeScript',
  description:
    'James Cheng (程韋傑 / Wei Chieh Cheng) — Frontend Engineer with 6+ years experience building production web & mobile apps. React, Next.js, TypeScript, React Native. Based in London, UK. 前端工程師作品集。',
  keywords: [
    'James Cheng', 'Wei Chieh Cheng', '程韋傑',
    'Frontend Engineer', 'Front-End Developer', '前端工程師', '前端作品集',
    'React', 'Next.js', 'TypeScript', 'React Native', 'Three.js',
    'portfolio', 'web developer', 'London', 'UK',
  ],
  alternates: {
    canonical: 'https://portfolio-james-cheng.vercel.app',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'James Cheng (程韋傑) — Frontend Engineer',
    description:
      'Frontend Engineer with 6+ years experience. React, Next.js, TypeScript, React Native. London, UK. 前端工程師作品集。',
    url: 'https://portfolio-james-cheng.vercel.app',
    siteName: 'James Cheng',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'James Cheng (程韋傑) — Frontend Engineer',
    description:
      'Frontend Engineer with 6+ years experience. React, Next.js, TypeScript. London, UK.',
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'James Cheng',
              alternateName: ['程韋傑', 'Wei Chieh Cheng'],
              jobTitle: 'Frontend Engineer',
              url: 'https://portfolio-james-cheng.vercel.app',
              sameAs: [
                'https://github.com/Gaseik',
                'https://www.linkedin.com/in/weichieh-cheng-fe',
              ],
              knowsAbout: ['React', 'Next.js', 'TypeScript', 'React Native', 'Three.js'],
              worksFor: {
                '@type': 'Organization',
                name: 'M10c',
                url: 'https://www.m10c.com/',
              },
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Queen Mary University of London',
                url: 'https://www.qmul.ac.uk/',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'London',
                addressCountry: 'GB',
              },
            }),
          }}
        />
      </head>
      <body>
        <Cursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
