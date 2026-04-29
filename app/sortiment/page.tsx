//Importera funktion för att läsa in sortimentsidan från wordpress
import { getSortimentPage, getMedia, getProducts } from "@/apiReq/wordpressApi";
//Importera scss-fil
import styles from "./sortiment.module.scss";

export default async function Sortiment() {

  const page = await getSortimentPage();
  const products = await getProducts();


  const imgUrlHeader = await getMedia(page.acf.header_bild);
  const imgUrlSystembolaget = await getMedia(page.acf.systembolaget_bild);
  

  return (
    <div>
      <main>
        <div className={styles.header}>
          <img src={imgUrlHeader} alt={page.acf.header_bild_beskrivning}></img>
          <h1>{page.acf.sidtitel}</h1>
          <p>{page.acf.sid_tagline}</p>          
        </div>

        <div className={styles.productDiv}>
          {products.map((product) => {

            const productImgUrl = getMedia(product.acf.produkt_bild);

            return (
            <div key={product.id}>
           <img src={productImgUrl} alt={product.acf.produkt_bild_beskrivning}></img>
           <h3>{product.acf.produkt_titel}</h3>
           </div> 
            )

})}
          
        </div>

        <div className={styles.systembolagetDiv}>
          <h2>{page.acf.sortiment_titel}</h2>
          <a className={styles.systembolagetLink} href="https://www.systembolaget.se/sortiment/?q=beerium"><img src={imgUrlSystembolaget} alt={page.acf.systembolaget_bild_beskrivning}></img></a>
        </div>

        <div className={styles.krogDiv}>
          <h2>{page.acf.krog_titel}</h2>
          <p>{page.acf.kontakt_info}</p>
        </div>

      </main>
    </div>
  );
}