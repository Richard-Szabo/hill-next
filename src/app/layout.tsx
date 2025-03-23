import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";

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
    <html lang="en">
      <body>
        <Header />
        <main className="pt-28 md:pt-28 flex-grow max-w-screen">{children}</main>
      </body>
    </html>
  );
}
