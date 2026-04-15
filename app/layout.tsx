import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Link from "next/link";

import { Lato } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Poppins } from "next/font/google";
import { Archivo_Black } from "next/font/google";

const lato = Lato ({
  subsets: ['latin'],
  weight: ['700', '900'],
});

const dmSans = DM_Sans ({
  subsets: ['latin'],
  weight: ['700', '900'],
});

const poppins = Poppins ({
  subsets: ['latin'],
  weight: ['400'],
});

const archivoBlack = Archivo_Black ({
  subsets: ['latin'],
  weight: ['400'],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${lato.className}, ${dmSans.className}, ${poppins.className}, ${archivoBlack.className}`}>
      <body className="min-h-full flex flex-col">
      <nav>
        <img className="logo" src="/Beerium_Logga_vit_svartBG.png" alt="Beeriums logga"></img>
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
