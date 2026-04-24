//Importera funktion för att läsa in sortimentsidan från wordpress
import { getSortimentPage, getMedia } from "@/apiReq/wordpressApi";
//Importera scss-fil
import styles from "./sortiment.module.scss";

export default async function Sortiment() {

  const page = await getSortimentPage();

  const imgUrlHeader = await getMedia(page.acf.header_bild);
  const imgUrlSystembolaget = await getMedia(page.acf.systembolaget_bild);
  

  return (
    <div>
      <main>
        <div>
          <img src={imgUrlHeader} alt={page.acf.header_bild_beskrivning}></img>
          <h1>{page.acf.sidtitel}</h1>
          <p>{page.acf.sid_tagline}</p>          
        </div>

        <div>
          <h2>{page.acf.sortiment_titel}</h2>
          <img src={imgUrlSystembolaget} alt={page.acf.systembolaget_bild_beskrivning}></img>
        </div>

        <div>
          <h2>{page.acf.krog_titel}</h2>
          <p>{page.acf.kontakt_info}</p>
        </div>

      </main>
    </div>
  );
}