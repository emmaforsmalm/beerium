
import type { Metadata } from "next";
import "./globals.scss";
import NavComponent from "@/components/NavComponent";

import { Poppins, Outfit} from "next/font/google";
import localFont from 'next/font/local';
import FooterComponent from "@/components/FooterComponent";

const azoSans = localFont({
  src: './fonts/azosansbold.woff2',
  variable: '--font-azo-sans',
    display: 'swap',
})

const breathing = localFont({
  src: './fonts/BreathingRegular.ttf',
  variable: '--font-breathing',
    display: 'swap',
})

const azoSansBlack = localFont({
  src: './fonts/AzoSans-Black.ttf',
  variable: '--font-azosansblack',
    display: 'swap',
})

const materialSymbols = localFont ({
  src: './fonts/MaterialSymbolsOutlined.woff2',
  variable: '--font-material-symbols',
  display: 'swap',
})


const poppins = Poppins ({
  subsets: ['latin'],
  weight: ['400', '300'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
    display: 'swap',
});

const outfit =  Outfit ({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-outfit',
    display: 'swap',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="sv" className={`${poppins.variable} ${azoSans.variable}  ${outfit.variable} ${breathing.variable} ${azoSansBlack.variable} ${materialSymbols.variable}`}>
      <head>
              
      </head>
      <body className="min-h-full flex flex-col">
        <NavComponent />
        {children}
        <FooterComponent/>
      </body>
    </html>
  );
}
