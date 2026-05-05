
import type { Metadata } from "next";
import "./globals.scss";
import NavComponent from "@/components/NavComponent";

import { Poppins, Comforter_Brush, Playfair_Display, Outfit} from "next/font/google";
import localFont from 'next/font/local';
import FooterComponent from "@/components/FooterComponent";

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

const outfit =  Outfit ({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-outfit'
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="sv" className={`${poppins.variable} ${azoSans.variable} ${comforterBrush.variable} ${outfit.variable}`}>
      <head>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className="min-h-full flex flex-col">
        <NavComponent />
        {children}
        <FooterComponent/>
      </body>
    </html>
  );
}
