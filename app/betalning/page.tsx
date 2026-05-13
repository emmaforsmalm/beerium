'use client';

import Link from "next/link";
import styles from "./betalning.module.scss";
import { useEffect, useState } from "react";

export default function Member() {

    const [qr, setQr] = useState("");
    const [reference, setReference] = useState("");

    // Garanterar att koden körs i webbläsaren efter sidan laddats, förhindrar krash
    useEffect(() => {
        setQr(sessionStorage.getItem("qrCode") || "");
        setReference(sessionStorage.getItem("reference") || "");
    
    })

    // Funktion för att ta bort värden från sessionStorage
    const removeSessionItems = () => {
        sessionStorage.removeItem("qrCode");
        sessionStorage.removeItem("reference");
    }


  return (
    <div className={styles.paymentDiv}>

        <h1 className={styles.title}>Medlemsbetalning</h1>
        <p className={styles.instructions}>Skanna QR-koden med Swish-appen för att genomföra betalningen. När betalningen är godkänd kan du gå tillbaka till föregående sida.</p>


            <div className={styles.qrCode}>

        {qr && (
            <img src={qr} className={styles.qrCodeImg} alt="Swish QR-kod"></img>
        )}          
        { reference && (
            <p className={styles.reference}>Betalningsreferens: {reference}</p>

        )}
        <p className={styles.questions}>Om något har några frågor, skriv till: kontakt@beerium.se</p>
        <Link className={styles.goBackLink} href="/medlem" onClick={removeSessionItems}>Tillbaka till medlemssidan</Link>  
        </div>
    </div>
  );
}