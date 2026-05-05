'use client';

import Link from "next/link";
import { useState } from "react";

export default function NavComponent() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

return (
    <>
      <nav className="mainNav">
        <Link className="logoLink" href="/"><img className="logo" src="/Beerium_Logga_ub.png" alt="Beeriums logga"></img></Link>
        <Link className="navMenuLink" href="/">Hem</Link>
        <Link className="navMenuLink" href="/sortiment">Vårt sortiment</Link>
        <Link className="navMenuLink" href="/kalender">Kalender</Link>
        <Link className="navMenuLink" href="/omoss">Om oss</Link>
        <Link className="navMenuLink" href="/medlem">Medlem</Link>
      </nav>  
      <nav className="mobileNav">
        <div className="menuLogos">
        <Link className="logoLink" href="/"><img className="logo" src="/Beerium_Logga_ub.png" alt="Beeriums logga"></img></Link>   

            {!menuOpen && (
                <span className="material-symbols-outlined menuSymbol" onClick={toggleMenu}>menu</span>
            )}

            {menuOpen && (
                <span className="material-symbols-outlined menuSymbol" onClick={toggleMenu}>close</span>
            )}

        </div>
        {menuOpen && (
        <div className="menuMobileLinks">
        <Link className="navMenuLink" onClick={toggleMenu} href="/">Hem</Link>
        <Link className="navMenuLink" onClick={toggleMenu} href="/sortiment">Vårt sortiment</Link>
        <Link className="navMenuLink" onClick={toggleMenu} href="/kalender">Kalender</Link>
        <Link className="navMenuLink" onClick={toggleMenu} href="/omoss">Om oss</Link>
        <Link className="navMenuLink" onClick={toggleMenu} href="/medlem">Medlem</Link>          
        </div> 
        )}

      </nav>     
    </>
)

}

