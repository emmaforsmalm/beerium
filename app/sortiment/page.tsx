export const revalidate = 60

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
import { checkImg } from "@/functions/FilterFunctions";
import Image from "next/image";

export default async function Sortiment() {

  const page = await getSortimentPage();
  const products = await getProducts();


  const imgUrlHeader = await getMedia(page.acf.header_bild);
  const imgUrlSystembolaget = await getMedia(page.acf.systembolaget_bild);
  

  return (
    <div>
      <main>
        <div className={styles.header}>
          <Image src={imgUrlHeader?.url ?? '/defaultHeader.webp'} alt={page.acf.header_bild_beskrivning} width={imgUrlHeader?.width ?? 400} height={imgUrlHeader?.height ?? 400} sizes="100vw"/>
          <h1>{page.acf.sidtitel}</h1>
          <p>{page.acf.sid_tagline}</p>          
        </div>

                <div>
          {!page && (
            <p className="notLoadedPage">Något gick fel...</p>
          )}
        </div>

                  {!products && (
                            <div>
                    <p className="notLoadedPage">Inga produkter hittades...</p>
                </div>
                  )}

{products &&(
        <div className={styles.productDiv}>
          {products.map((product) => (
              <ProductComponent key={product.id} img={product.productImgUrl?.url ?? '/placeholderDark.png'} alt={product.acf.produkt_bild_beskrivning} width={product.productImgUrl?.width ?? 400} height={product.productImgUrl?.height ?? 400} info={product.acf.produkt_info} category={product.acf.produkt_kategori} title={product.acf.produkt_titel} releaseDate={product.acf.lanseringsdatum} notAvailable={product.acf.ur_sortiment}/>
          ))}
        </div>  
)}


        <div className={styles.systembolagetDiv}>
          <h2>{page.acf.sortiment_titel}</h2>
          <a className={styles.systembolagetLink} href="https://www.systembolaget.se/sortiment/?q=beerium"><Image src={imgUrlSystembolaget?.url ?? '/systembolaget.png'} alt={page.acf.systembolaget_bild_beskrivning} width={imgUrlSystembolaget?.width ?? 400} height={imgUrlSystembolaget?.height ?? 400} sizes="500px"/></a>
        </div>

        <div className={styles.krogDiv}>
          <h2>{page.acf.krog_titel}</h2>
          <p>{page.acf.kontakt_info}</p>
        </div>

      </main>
    </div>
  );
}