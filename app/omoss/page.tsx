//Importera funktion för att läsa in om oss-sidan från wordpress
import { getAboutPage, getMedia } from "@/apiReq/wordpressApi";
//Importera scss-fil
import styles from "./omoss.module.scss";

export default async function About() {

  const page = await getAboutPage();

  const imgUrlHeader = await getMedia(page.acf.header_bild);

  return (
    <div>
      <main>
        <div>
          <img src={imgUrlHeader} alt={page.acf.header_bild_beskrivning}></img>
          <h1>{page.acf.om_oss_titel}</h1>
          <p>{page.acf.om_oss_text}</p>
        </div>

        <div>
          <h2>{page.acf.kontakt_titel}</h2>
          <p>{page.acf.kontakt_text}</p>

          <h3>{page.acf.adress_titel}</h3>
          <p>{page.acf.adress_text}</p>

          <h3>{page.acf.epost_titel}</h3>
          <p>{page.acf.email_text}</p>
        </div>

      </main>
    </div>
  );
}