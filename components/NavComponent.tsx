'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavComponent() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const pathName = usePathname();


return (
    <>
      <nav className="mainNav">
        <Link className="logoLink" href="/"><Image className="logo" src="/loggaWebP.webp" alt="Beeriums logga" width="80" height="80"/></Link>
        <Link className={pathName === '/' ? "navLinkActive" : "navMenuLink"} href="/">Hem</Link>
        <Link className={pathName === '/sortiment' ? "navLinkActive" : "navMenuLink"} href="/sortiment">Vårt sortiment</Link>
        <Link className={pathName === '/kalender' ? "navLinkActive" : "navMenuLink"} href="/kalender">Kalender</Link>
        <Link className={pathName === '/omoss' ? "navLinkActive" : "navMenuLink"} href="/omoss">Om oss</Link>
        <Link className={pathName === '/medlem' ? "navLinkActive" : "navMenuLink"} href="/medlem">Medlem</Link>
      </nav>  
      <nav className="mobileNav">
        <div className="menuLogos">
        <Link className="logoLink" href="/"><img className="logo" src="/loggaWebP.webp" alt="Beeriums logga" width="60" height="60"/></Link>   

            {!menuOpen && (
                <span className="material-symbols-outlined menuSymbol" onClick={toggleMenu}>menu</span>
            )}

            {menuOpen && (
                <span className="material-symbols-outlined menuSymbol" onClick={toggleMenu}>close</span>
            )}

        </div>
        {menuOpen && (
        <div className="menuMobileLinks">
        <Link className={pathName === '/' ? "navLinkActive" : "navMenuLink"} onClick={toggleMenu} href="/">Hem</Link>
        <Link className={pathName === '/sortiment' ? "navLinkActive" : "navMenuLink"} onClick={toggleMenu} href="/sortiment">Vårt sortiment</Link>
        <Link className={pathName === '/kalender' ? "navLinkActive" : "navMenuLink"} onClick={toggleMenu} href="/kalender">Kalender</Link>
        <Link className={pathName === '/omoss' ? "navLinkActive" : "navMenuLink"} onClick={toggleMenu} href="/omoss">Om oss</Link>
        <Link className={pathName === '/medlem' ? "navLinkActive" : "navMenuLink"} onClick={toggleMenu} href="/medlem">Medlem</Link>          
        </div> 
        )}

      </nav>     
    </>
)

}

