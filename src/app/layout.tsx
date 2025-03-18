import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Layout/Header";

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
        <main className="pt-24 md:pt-24 flex-grow">{children}</main>
      </body>
    </html>
  );
}
