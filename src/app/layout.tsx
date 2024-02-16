import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./lib/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "J4 Esports",
  description: "J4 esports organisation page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
      <link rel="icon" href="/J4PB.png" sizes="any" />
      </head>
      <body className={`${inter.className} h-full`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
