'use client';

import Link from "next/link";

export default function Member() {

    const qr = sessionStorage.getItem("qrCode");
    const reference = sessionStorage.getItem("reference");

  return (
    <div>

        <h1>Medlemsbetalning</h1>
        <p>Skanna QR-koden med Swish-appen för att genomföra betalningen.</p>
        <p>När betalningen är godkänd kan du gå tillbaka till föregående sida.</p>

            <div className="qrCode">
                <p>Ditt referensnummer för betalningen är: {reference}</p>
        {qr && (
            <img src={qr} className="qrCodeImg" alt="Swish QR-kod"></img>
        )}          

        <p>Om något har några frågor, skriv till: kontakt@beerium.se</p>
        <Link className="navMenuLink" href="/medlem">Tillbaka till medlemssidan</Link>  
        </div>
    </div>
  );
}