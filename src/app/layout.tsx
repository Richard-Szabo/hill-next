import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";

import { Karla, Merriweather } from "next/font/google";
import GTM from "@/components/Google/GTM";
import GTMTracker from "@/components/Google/GTMTracker";
import Script from "next/script";

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
  description:
    "Modern és fájdalommentes fogászati kezelések Győrújbaráton kicsiknek és nagyoknak egyaránt. Tapasztalt orvosaink segítenek mosolya megőrzésében.",
  keywords: [
    "fogászat",
    "győrújbarát",
    "családi fogászat",
    "digitális fogászat",
    "győr",
    "Bölcsességfog",
    "Fogápolási módszerek",
    "Fogszabályozás",
    "Implantátum",
    "Inlay",
    "Láthatatlan sínek",
    "Rögzített fogszabályozás",
    "Természetes tömések",
    "Vérző fogíny",
    "X-Guide",
    "Ínybetegségek",
    "Mozgó fogak",
    "Szájhigénia",
    "Fájdalommentes fogkőszedés",
    "Gyermekfogászat",
  ],
  authors: [{ name: "Hill Medical" }],
  creator: "Hill Medical",
  openGraph: {
    title: "Hill Medical - Családi fogászat Győrújbaráton",
    description:
      "Modern és fájdalommentes fogászati kezelések Győrújbaráton kicsiknek és nagyoknak egyaránt. Tapasztalt orvosaink segítenek mosolya megőrzésében.",
    url: "https://hillmedical.hu",
    siteName: "Hill Medical",
    images: [
      {
        url: "/rendelo.jpg",
        width: 1000,
        height: 667,
        alt: "Hill Medical rendelő",
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

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
        {/* Meta Pixel Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1110760790528718');
          fbq('track', 'PageView');
        `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1110760790528718&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P4XL6WCH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
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
