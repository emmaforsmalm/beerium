'use client';

import Link from "next/link";
import styles from "./betalning.module.scss";
import { useEffect, useState } from "react";

export default function Betalning({page}: {page:any}) {

    const [qr, setQr] = useState("");
    const [reference, setReference] = useState("");

    // Garanterar att koden körs i webbläsaren efter sidan laddats, förhindrar krash
    useEffect(() => {
        setQr(sessionStorage.getItem("qrCode") || "");
        setReference(sessionStorage.getItem("reference") || "");
    }, []);

    // Funktion för att ta bort värden från sessionStorage
    const removeSessionItems = () => {
        sessionStorage.removeItem("qrCode");
        sessionStorage.removeItem("reference");
    };


  return (


    <div className={styles.paymentDiv}>

                <div>
          {!page && (
            <p className="notLoadedPage">Något gick fel...</p>
          )}
        </div>

        <h1 className={styles.title}>{page.acf.payment_title}</h1>
        <p className={styles.instructions}>{page.acf.payment_info}</p>


            <div className={styles.qrCode}>

        {qr && (
            <img src={qr} className={styles.qrCodeImg} alt="Swish QR-kod"></img>
        )}          
        { reference && (
            <p className={styles.reference}>{page.acf.reference_text} {reference}</p>

        )}
        <p className={styles.questions}>{page.acf.contact_info}</p>
        <Link className={styles.goBackLink} href="/medlem" onClick={removeSessionItems}>{page.acf.link_text}</Link>  
        </div>
    </div>
  );
}