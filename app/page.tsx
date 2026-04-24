
//Importera funktion för att läsa in startsida från wordpress
import { getStartPage, getMedia } from "@/apiReq/wordpressApi";
//Importera scss-fil
import styles from "./page.module.scss";

export default async function Home() {

  const page = await getStartPage();

  let imgUrlHeader = "breweryb&w.jpg";

  if (page.acf.header_bild) {
      imgUrlHeader = await getMedia(page.acf.header_bild);
  }


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

      </main>
    </div>
  );
}
