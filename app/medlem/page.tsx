export const metadata: Metadata = {
  title: "Medlem - Beerium",
  description: "Bli en del av Beerium som kraftölskamrat"
}

//Importera funktion för att läsa in om oss-sidan från wordpress
import { getMemberPage, getMedia } from "@/apiReq/wordpressApi";
//Importera scss-fil
import styles from "./medlem.module.scss";
import { Metadata } from "next";
import { checkImg } from "@/functions/FilterFunctions";
import { useState } from "react";

export default async function Member() {

    const page = await getMemberPage();
  
    const imgUrlHeader = await checkImg(page.acf.header_bild, "/breweryb&w.jpg");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

  return (
    <div>
      <main>
        <div className={styles.header}>
          <img src={imgUrlHeader} alt={page.acf.header_bild_beskrivning}></img>
        <h1>{page.acf.medlem_sidtitel}</h1>
        <p>{page.acf.medlem_tagline}</p>          
        </div>

                <div>
          {!page && (
            <p className="notLoadedPage">Något gick fel...</p>
          )}
        </div>

        <div>
          <label htmlFor="name">Namn:</label>
          <input type="text" id="name" name="name" placeholder="För- och efternamn..." value={name} onChange={(e) => setName(e.target.value)}></input>

          <label htmlFor="email">E-post:</label>
          <input type="email" id="email" name="email" placeholder="Din e-postadress..." value={email} onChange={(e) => setEmail(e.target.value)}></input>

          <input type="submit" value="Betala"></input>
        </div>

        <div className={styles.memberDiv}>
          <h2>{page.acf.medlem_text_titel}</h2>
          <p className={styles.memberText}>{page.acf.medlem_text}</p>
        </div>

      </main>
    </div>
  );
}