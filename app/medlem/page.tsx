export const revalidate = 60

export const metadata: Metadata = {
  title: "Medlem - Beerium",
  description: "Bli en del av Beerium som kraftölskamrat"
}

//Importera funktion för att läsa in om oss-sidan från wordpress
import { getMemberPage, getMedia } from "@/apiReq/wordpressApi";
//Importera scss-fil
import styles from "./medlem.module.scss";
import { Metadata } from "next";
import MemberForm from "@/components/MemberForm";
import Image from "next/image";

export default async function Member() {

    const page = await getMemberPage();
  
    const imgUrlHeader = await getMedia(page.acf.header_bild);



  return (
    <div>
      <main>
        <div className={styles.header}>
          <Image src={imgUrlHeader?.url ?? '/defaultHeader.webp'} alt={page.acf.header_bild_beskrivning} width={imgUrlHeader?.width ?? 2000} height={imgUrlHeader?.height ?? 400} sizes="100vw"/>
        <h1>{page.acf.medlem_sidtitel}</h1>
        <p>{page.acf.medlem_tagline}</p>          
        </div>

                <div>
          {!page && (
            <p className="notLoadedPage">Något gick fel...</p>
          )}
        </div>

        

        <div className={styles.memberDiv}>
          <h2>{page.acf.medlem_text_titel}</h2>
          <p className={styles.memberText}>{page.acf.medlem_text}</p>
        </div>

        <MemberForm />

      </main>
    </div>
  );
}