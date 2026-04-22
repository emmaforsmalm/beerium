
//Importera funktion för att läsa in startsida från wordpress
import { getStartPage } from "@/apiReq/wordpressApi";

export default async function Home() {

  const page = await getStartPage();

  return (
    <div>
      <main>
        <h1>{page.acf.sidtitel}</h1>
        <p>{page.acf.sid_tagline}</p>
      </main>
    </div>
  );
}
