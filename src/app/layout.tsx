import { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Di Monk Factory | Desarrollo Software e IA Chile - Soluciones Empresariales",
  description: "Líder en desarrollo de software a medida y aplicaciones de IA en Chile. Transformamos negocios con tecnología avanzada. Cotiza tu proyecto gratis.",
  keywords: "empresas desarrollo software Chile, desarrollo software a medida Chile, soluciones inteligencia artificial Chile, aplicaciones IA empresas Chile, consultoria tecnologica Chile, desarrollo MVP Chile, automatización procesos IA, transformación digital empresas, software empresarial personalizado, due diligence técnico",
  authors: [{ name: "Di Monk Factory" }],
  metadataBase: new URL('https://www.dimonk.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Di Monk Factory | Desarrollo Software e IA Chile - Soluciones Empresariales",
    description: "Líder en desarrollo de software a medida y aplicaciones de IA en Chile. Transformamos negocios con tecnología avanzada. Cotiza tu proyecto gratis.",
    url: 'https://www.dimonk.com',
    siteName: 'Di Monk Factory',
    images: [
      {
        url: '/favicon.ico',
        width: 200,
        height: 200,
        alt: 'Dimonk Logo',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Di Monk Factory | Desarrollo Software e IA Chile - Soluciones Empresariales",
    description: "Líder en desarrollo de software a medida y aplicaciones de IA en Chile. Transformamos negocios con tecnología avanzada. Cotiza tu proyecto gratis.",
    images: ['/dimonk-logo.svg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon.ico',
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
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Di Monk Factory",
                "url": "https://www.dimonk.com",
                "logo": "https://www.dimonk.com/dimonk-logo.svg",
                "description": "Líder en desarrollo de software a medida y aplicaciones de IA en Chile. Transformamos negocios con tecnología avanzada.",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "CL",
                  "addressRegion": "Santiago"
                },
                "areaServed": "Chile",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "url": "https://tally.so/r/nGXXAp"
                },
                "sameAs": [
                  "https://www.dimonk.com"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "Soluciones de Software e IA",
                "description": "Implementamos soluciones basadas en software, datos e inteligencia artificial para impulsar tu negocio hacia el futuro digital.",
                "image": "https://www.dimonk.com/favicon.ico",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5",
                  "reviewCount": "3874",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "990",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock"
                }
              }
            ])
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
