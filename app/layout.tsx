import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "J1MLtGDD7bV3JgivgjiVQjcodSrQ5qSClRxKJglZWVY",
  },

  metadataBase: new URL(
    "https://www.sudidfexecutivetransport.fr"
  ),

  title: {
    default: "Sud IDF Executive Transport",
    template: "%s | Sud IDF Executive Transport",
  },

  description:
    "Chauffeur privé haut de gamme en Essonne et Île-de-France. Transferts Orly, CDG, transport business et mise à disposition 24h/24.",

  keywords: [
    "chauffeur privé Essonne",
    "VTC Essonne",
    "transfert Orly",
    "transfert CDG",
    "chauffeur business",
    "transport premium",
    "chauffeur privé Melun",
    "chauffeur privé Corbeil-Essonnes",
    "VTC Seine-et-Marne",
    "chauffeur privé Paris",
    "chauffeur privé Orly",
    "chauffeur privé CDG",
    "transport entreprise Île-de-France",
  ],

  authors: [
    {
      name: "Sud IDF Executive Transport",
      url: "https://www.sudidfexecutivetransport.fr",
    },
  ],

  creator: "Sud IDF Executive Transport",

  publisher: "Sud IDF Executive Transport",

  category: "transport",

  alternates: {
    canonical:
      "https://www.sudidfexecutivetransport.fr",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Sud IDF Executive Transport",

    description:
      "Service de chauffeur privé premium en Île-de-France. Transferts Orly, CDG, déplacements business et mise à disposition 24h/24.",

    url:
      "https://www.sudidfexecutivetransport.fr",

    siteName:
      "Sud IDF Executive Transport",

    locale: "fr_FR",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sud IDF Executive Transport",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Sud IDF Executive Transport",

    description:
      "Chauffeur privé premium en Essonne et Île-de-France.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  other: {
    instagram:
      "https://www.instagram.com/sudidfexecutivetransport",

    facebook:
      "https://www.facebook.com/sudidfexecutivetransport",

    tiktok:
      "https://www.tiktok.com/@sudidfexecutivetransport",

    youtube:
      "https://www.youtube.com/@SUDIDFEXECUTIVETRANSPORT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H7LN73SM2B"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-H7LN73SM2B');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@graph": [

                {
                  "@type": "LocalBusiness",

                  "@id":
                    "https://www.sudidfexecutivetransport.fr/#business",

                  name:
                    "Sud IDF Executive Transport",

                  image:
                    "https://www.sudidfexecutivetransport.fr/og-image.jpg",

                  url:
                    "https://www.sudidfexecutivetransport.fr",

                  telephone:
                    "+33668863673",

                  email:
                    "contact@sudidfexecutivetransport.fr",

                  priceRange: "€€",

                  address: {
                    "@type": "PostalAddress",

                    addressLocality:
                      "Corbeil-Essonnes",

                    addressRegion:
                      "Île-de-France",

                    postalCode: "91100",

                    addressCountry: "FR",
                  },

                  geo: {
                    "@type": "GeoCoordinates",

                    latitude: "48.6066",

                    longitude: "2.4875",
                  },

                  areaServed: [
                    "Paris",
                    "Essonne",
                    "Seine-et-Marne",
                    "Corbeil-Essonnes",
                    "Évry-Courcouronnes",
                    "Melun",
                    "Fontainebleau",
                    "Orly",
                    "Roissy Charles-de-Gaulle",
                  ],

                  openingHoursSpecification: {
                    "@type":
                      "OpeningHoursSpecification",

                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ],

                    opens: "00:00",

                    closes: "23:59",
                  },

                  sameAs: [
                    "https://www.instagram.com/sudidfexecutivetransport",
                    "https://www.facebook.com/sudidfexecutivetransport",
                    "https://www.tiktok.com/@sudidfexecutivetransport",
                    "https://www.youtube.com/@SUDIDFEXECUTIVETRANSPORT",
                  ],

                  description:
                    "Service de chauffeur privé premium en Essonne et Île-de-France. Transferts Orly, CDG, déplacements business et transport VIP.",
                },

                {
                  "@type": "Service",

                  serviceType:
                    "Chauffeur privé premium",

                  provider: {
                    "@id":
                      "https://www.sudidfexecutivetransport.fr/#business",
                  },

                  areaServed: [
                    "Île-de-France",
                    "Paris",
                    "Essonne",
                    "Seine-et-Marne",
                  ],

                  hasOfferCatalog: {
                    "@type": "OfferCatalog",

                    name:
                      "Services de transport",

                    itemListElement: [

                      {
                        "@type": "Offer",

                        itemOffered: {
                          "@type": "Service",

                          name:
                            "Transfert Orly",
                        },
                      },

                      {
                        "@type": "Offer",

                        itemOffered: {
                          "@type": "Service",

                          name:
                            "Transfert CDG",
                        },
                      },

                      {
                        "@type": "Offer",

                        itemOffered: {
                          "@type": "Service",

                          name:
                            "Transport business",
                        },
                      },

                      {
                        "@type": "Offer",

                        itemOffered: {
                          "@type": "Service",

                          name:
                            "Transport VIP",
                        },
                      },

                      {
                        "@type": "Offer",

                        itemOffered: {
                          "@type": "Service",

                          name:
                            "Mise à disposition",
                        },
                      },

                    ],
                  },
                },

              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}