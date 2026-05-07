export const metadata: Metadata = {
  title: "Sortiment - Beerium",
  description: "Utforska Beeriums sortiment av hantverksöl"
}

//Importera funktion för att läsa in sortimentsidan från wordpress
import { getSortimentPage, getMedia, getProducts } from "@/apiReq/wordpressApi";
//Importera scss-fil
import styles from "./sortiment.module.scss";
import ProductComponent from "@/components/ProductComponent";
import { Metadata } from "next";

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
          {products.map((product) => (
              <ProductComponent key={product.id} img={product.productImgUrl} alt={product.acf.produkt_bild_beskrivning} info={product.acf.produkt_info} category={product.acf.produkt_kategori} title={product.acf.produkt_titel}/>
          ))}
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