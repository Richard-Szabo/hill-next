import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";

import { Karla, Merriweather } from "next/font/google";
import GTM from "@/components/Google/GTM";
import GTMTracker from "@/components/Google/GTMTracker";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "700"], // use only needed weights!
  display: "swap",
  variable: "--font-karla",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hillmedical.hu"),
  title: "Hill Medical",
  description: 'Modern és fájdalommentes fogászati kezelések Győrújbaráton kicsiknek és nagyoknak egyaránt. Tapasztalt orvosaink segítenek mosolya megőrzésében.',
  keywords: ['fogászat', 'győrújbarát', 'családi fogászat', 'digitális fogászat', 'győr', "Bölcsességfog", "Fogápolási módszerek", "Fogszabályozás", "Implantátum", "Inlay", "Láthatatlan sínek", "Rögzített fogszabályozás", "Természetes tömések", "Vérző fogíny", "X-Guide", "Ínybetegségek", "Mozgó fogak", "Szájhigénia", "Fájdalommentes fogkőszedés", "Gyermekfogászat"],
  authors: [{ name: 'Hill Medical' }],
  creator: 'Hill Medical',
  openGraph: {
    title: 'Hill Medical - Családi fogászat Győrújbaráton',
    description: 'Modern és fájdalommentes fogászati kezelések Győrújbaráton kicsiknek és nagyoknak egyaránt. Tapasztalt orvosaink segítenek mosolya megőrzésében.',
    url: 'https://hillmedical.hu',
    siteName: 'Hill Medical',
    images: [
      {
        url: '/rendelo.jpg',
        width: 1000,
        height: 667,
        alt: 'Hill Medical rendelő',
      },
    ],
    locale: 'hu_HU',
    type: 'website',
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${karla.variable} ${merriweather.variable}`}>
      <head>
        {/* GTM head script */}
        <GTM />
      </head>
      <body>
         {/* GTM noscript in body */}
         <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P4XL6WCH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <GTMTracker />
        <Header />
        <main className="pt-28 lg:pt-[156px] flex-grow max-w-screen ">
          {children}
        </main>
      </body>
    </html>
  );
}
