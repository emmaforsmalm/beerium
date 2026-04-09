import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="min-h-full flex flex-col">
      <nav>
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
