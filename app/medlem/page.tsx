//Importera funktion för att läsa in om oss-sidan från wordpress
import { getMemberPage, getMedia } from "@/apiReq/wordpressApi";
//Importera scss-fil
import styles from "./medlem.module.scss";

export default async function Member() {

    const page = await getMemberPage();
  
    const imgUrlHeader = await getMedia(page.acf.header_bild);

  return (
    <div>
      <main>
        <div className={styles.header}>
          <img src={imgUrlHeader} alt={page.acf.header_bild_beskrivning}></img>
        <h1>{page.acf.medlem_sidtitel}</h1>
        <p>{page.acf.medlem_tagline}</p>          
        </div>

        <div>
          <h2>{page.acf.medlem_text_titel}</h2>
          <p className="testText">{page.acf.medlem_text}</p>
        </div>

      </main>
    </div>
  );
}