'use client';

export const revalidate = 60


//Importera scss-fil
import styles from "./sortiment.module.scss";
import ProductComponent from "@/components/ProductComponent";
import Image from "next/image";
import { parseDate } from "@/functions/DateFunctions";
import { useState } from "react";
import { Produkt } from "@/types/wordpress.types";

interface Props {
    page: any;
    products: Produkt[];
    imgUrlHeader: any;
    imgUrlSystembolaget: any;
}

export default function ProductList({page, products, imgUrlHeader, imgUrlSystembolaget}: Props) {

  const [showComing, setShowComing] = useState(false);
  const [showAvailable, setShowAvailable] = useState(true);
  const [showNotAvailable, setShowNotAvailable] = useState(false);

  const toggleShowComing = () => {setShowComing(!showComing);}
  const toggleShowAvailable = () => {setShowAvailable(!showAvailable);}
  const toggleShowNotAvailable = () => {setShowNotAvailable(!showNotAvailable);}

  const today = new Date();
  today.setHours(0,0,0,0)

  const isComing = products.filter(p => p.acf.lanseringsdatum && parseDate(p.acf.lanseringsdatum) > today);
  const notAvailableProducts = products.filter( p => p.acf.ur_sortiment);
  const availableProducts = products.filter(p => !isComing.includes(p) && !notAvailableProducts.includes(p));

  
  const allProducts = [...(showAvailable && availableProducts ? availableProducts : []), 
                        ...(showComing && isComing ? isComing : []), 
                        ...(showNotAvailable && notAvailableProducts ? notAvailableProducts : [])];


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

<div className={styles.checkBoxes}>
<div className={styles.checkBox}>
  <input type="checkbox" id="available" name="available" value="available" checked={showAvailable} onChange={toggleShowAvailable}></input>
  <label htmlFor="available">Tillgängliga</label> 
</div>
<div className={styles.checkBox}>
  <input type="checkbox" id="notAvailable" name="notAvailable" value="notAvailable" checked={showNotAvailable} onChange={toggleShowNotAvailable}></input>
  <label htmlFor="notAvailable">Ur sortiment</label>    
</div>
<div className={styles.checkBox}>
  <input type="checkbox" id="coming" name="coming" value="coming" checked={showComing} onChange={toggleShowComing}></input>
  <label htmlFor="coming">Kommande</label>    
</div>
</div>

<div className={styles.allProducts}>                 

{allProducts.length > 0 && (
        <div className={styles.productDiv}>
          {allProducts.map((product) => (
              <ProductComponent key={product.id} img={product.productImgUrl?.url ?? '/placeholderDark.png'} alt={product.acf.produkt_bild_beskrivning} width={product.productImgUrl?.width ?? 400} height={product.productImgUrl?.height ?? 400} info={product.acf.produkt_info} category={product.acf.produkt_kategori} title={product.acf.produkt_titel} releaseDate={product.acf.lanseringsdatum} notAvailable={product.acf.ur_sortiment}/>
          ))}
        </div>  
)}
{allProducts.length === 0 && (
    <p className={styles.checkABoxMessage}>Kryssa i en kategori för att se produkterna</p>
)}
</div>



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