import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

  metadataBase: new URL("https://www.sudidfexecutivetransport.fr"),

  title: {
    default: "Sud IDF Executive Transport",
    template: "%s | Sud IDF Executive Transport",
  },

  description:
    "Chauffeur privé haut de gamme en Essonne et Île-de-France. Transferts aéroports, transport business et mise à disposition.",

  keywords: [
    "chauffeur privé Essonne",
    "VTC Essonne",
    "transfert Orly",
    "transfert CDG",
    "chauffeur business",
    "transport premium",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
