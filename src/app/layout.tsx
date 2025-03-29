import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";

import { Karla, Merriweather } from "next/font/google";

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
  title: "Hill Medical",
  description: "Hill Medical családi fogászat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${karla.variable} ${merriweather.variable}`}>
      <body>
        <Header />
        <main className="pt-28 md:pt-[156px] flex-grow max-w-screen">{children}</main>
      </body>
    </html>
  );
}
