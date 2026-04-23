
//Importera funktion för att läsa in startsida från wordpress
import { getStartPage, getMedia } from "@/apiReq/wordpressApi";

export default async function Home() {

  const page = await getStartPage();

  let imgUrlHeader = "brewery.jpg";

  if (page.acf.header_bild) {
      imgUrlHeader = await getMedia(page.acf.header_bild);
  }


  return (
    <div>
      <main>
        <div>
          <img src={imgUrlHeader}></img>
          <h1>{page.acf.sidtitel}</h1>
          <p>{page.acf.sid_tagline}</p>
        </div>

      </main>
    </div>
  );
}
