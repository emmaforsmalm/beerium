export const metadata: Metadata = {
  title: "Om oss - Beerium",
  description: "Lär känna kraftölsbryggeriet Beerium"
}

//Importera funktion för att läsa in om oss-sidan från wordpress
import { getAboutPage, getMedia } from "@/apiReq/wordpressApi";
import Image from "next/image";
//Importera scss-fil
import styles from "./omoss.module.scss";

//Importera kontaktformulärs-komponent
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";


export default async function About() {

  const page = await getAboutPage();

  const imgUrlHeader = await getMedia(page.acf.header_bild);

  return (
    <div>
      <main>
        <div className={styles.header}>
          <Image src={imgUrlHeader.url} alt={page.acf.header_bild_beskrivning} width={imgUrlHeader.width} height={imgUrlHeader.height} sizes="100vw"/>
          <h1>{page.acf.om_oss_titel}</h1>
          <p>{page.acf.om_oss_text}</p>
        </div>

              <div>
          {!page && (
            <p className="notLoadedPage">Något gick fel...</p>
          )}
        </div>

        <div className={styles.contact}>
          <div className={styles.contactDivContent}>
          <h2>{page.acf.kontakt_titel}</h2>
          <p>{page.acf.kontakt_text}</p>

        <div className={styles.contactForm}>
          <ContactForm/>
        </div>

          <h3>{page.acf.adress_titel}</h3>
          <p>{page.acf.adress_text}</p>

          <h3>{page.acf.epost_titel}</h3>
          <p>{page.acf.email_text}</p>
        </div>
        </div>


      </main>
    </div>
  );
}