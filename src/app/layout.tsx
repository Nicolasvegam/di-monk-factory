import { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Dimonk | Soluciones de Software e Inteligencia Artificial",
  description: "Implementamos soluciones basadas en software, datos e inteligencia artificial para impulsar tu negocio hacia el futuro digital.",
  keywords: "software development, artificial intelligence, AI solutions, data analytics, business technology, desarrollo de software, inteligencia artificial",
  authors: [{ name: "Dimonk" }],
  metadataBase: new URL('https://di-monk-factory.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dimonk | Soluciones de Software e Inteligencia Artificial",
    description: "Implementamos soluciones basadas en software, datos e inteligencia artificial para impulsar tu negocio hacia el futuro digital.",
    url: 'https://di-monk-factory.vercel.app',
    siteName: 'Dimonk',
    images: [
      {
        url: '/dimonk-logo.svg',
        width: 800,
        height: 600,
        alt: 'Dimonk Logo',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dimonk | Soluciones de Software e Inteligencia Artificial",
    description: "Implementamos soluciones basadas en software, datos e inteligencia artificial para impulsar tu negocio hacia el futuro digital.",
    images: ['/dimonk-logo.svg'],
  },
  icons: {
    icon: '/dimonk-logo.svg',
    shortcut: '/dimonk-logo.svg',
    apple: '/dimonk-logo.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/dimonk-logo.svg',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Dimonk",
              "url": "https://di-monk-factory.vercel.app",
              "logo": "https://di-monk-factory.vercel.app/dimonk-logo.svg",
              "description": "Implementamos soluciones basadas en software, datos e inteligencia artificial para impulsar tu negocio hacia el futuro digital.",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://tally.so/r/nGXXAp"
              }
            })
          }}
        />
      </head>
      <body>
        {children}         
        <Analytics />
      </body>
    </html>
  );
}
