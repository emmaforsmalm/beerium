
//Importera funktion för att läsa in startsida från wordpress
import { getStartPage, getMedia } from "@/apiReq/wordpressApi";
//Importera scss-fil
import styles from "./page.module.scss";
//Importera Link
import Link from "next/link";

export default async function Home() {

  const page = await getStartPage();

  const imgUrlHeader = await getMedia(page.acf.header_bild);


  return (
    <div>
      <main>
        <div className={styles.header}>
          <img className={styles.startHeader} src={imgUrlHeader} alt={page.acf.header_bild_beskrivning}></img>
          <div className={styles.headTextDiv}>
          <h1>{page.acf.sidtitel}</h1>
          <p>{page.acf.sid_tagline}</p>            
          </div>
        </div>

        <div className={styles.aboutDiv}>
          <h2>{page.acf.om_oss_titel}</h2>
          <p>{page.acf.om_oss_text}</p>
        </div>

        <div className={styles.eventDiv}>
          <h2>{page.acf.nasta_event_titel}</h2>
        </div>

        <div className={styles.productDiv}>
          <h2>{page.acf.senaste_produkter_titel}</h2>
          <Link href="/sortiment">Vårt sortiment</Link>
        </div>

        <div className={styles.memberDiv}>
          <h2>{page.acf.kraftolskamrat_tagline}</h2>
          <Link href="/medlem">{page.acf.kraftolskamrat_lanktext}</Link>
        </div>

      </main>
    </div>
  );
}
