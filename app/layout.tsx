import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Link from "next/link";

import { Poppins, Comforter_Brush } from "next/font/google";
import localFont from 'next/font/local';

const azoSans = localFont({
  src: './fonts/azosansbold.woff2',
  variable: '--font-azo-sans',
})


const poppins = Poppins ({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-poppins',
});

const comforterBrush = Comforter_Brush ({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-comforter-brush'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${poppins.variable} ${azoSans.variable} ${comforterBrush.variable}`}>
      <body className="min-h-full flex flex-col">
      <nav>
        <img className="logo" src="/Beerium_Logga_ub.png" alt="Beeriums logga"></img>
        <Link href="/">Hem</Link>
        <Link href="/sortiment">Vårt sortiment</Link>
        <Link href="/kalender">Kalender</Link>
        <Link href="/omoss">Om oss</Link>
        <Link href="/medlem">Medlem</Link>
      </nav>  
        {children}
      </body>
    </html>
  );
}
