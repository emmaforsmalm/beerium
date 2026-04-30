
//Importera funktion för att läsa in startsida från wordpress
import { getStartPage, getMedia, getEvents, getProducts } from "@/apiReq/wordpressApi";
//Importera scss-fil
import styles from "./page.module.scss";
//Importera Link
import Link from "next/link";
import { getLatestEvent, getLatestProducts } from "@/functions/FilterFunctions";
import EventComponent from "@/components/EventComponent";
import ProductComponent from "@/components/ProductComponent";

export default async function Home() {

  const page = await getStartPage();
  const events = await getEvents();
  const nextEvent = await getLatestEvent(events);
  const products = await getProducts();
  const latestProducts = await getLatestProducts(products);

  const imgUrlHeader = await getMedia(page.acf.header_bild);
  const imgUrlAbout = await getMedia(page.acf.omoss_bild);



  return (
    <div>
      <main>
        <div className={styles.header}>
          <img className={styles.startHeader} src={imgUrlHeader} alt={page.acf.header_bild_beskrivning}></img>
          <div className={styles.headTextDiv}>
          <h1>{page.acf.sidtitel}</h1>
          <p>{page.acf.sid_tagline}</p>            
          </div>
        </div>

        <div className={styles.aboutDiv}>
          <div className={styles.aboutImg}>
            <div className={styles.imgBorder}>
            <img src={imgUrlAbout} alt={page.acf.omoss_bild_beskrivning}></img>
          </div>
          </div>
          <div className={styles.aboutContent}>
            <h2>{page.acf.om_oss_titel}</h2>
            <p>{page.acf.om_oss_text}</p>   
            <Link className={styles.aboutLink} href="/sortiment">Läs mer om oss</Link>         
          </div>

        </div>

        <div className={styles.eventDiv}>
          <h2>{page.acf.nasta_event_titel}</h2>
          <div key={nextEvent.id}>
          <EventComponent title={nextEvent.acf.event_titel} place={nextEvent.acf.event_plats} startDate={nextEvent.acf.start_datum} endDate={nextEvent.acf.slut_datum}/>
          </div>
          <Link className={styles.calendarLink} href="/kalender">Se vår kalender</Link>
        </div>

        <div className={styles.productDiv}>
          <h2>{page.acf.senaste_produkter_titel}</h2>
          {latestProducts.map((product) => (
            <div key={product.id}>
              <ProductComponent img={product.productImgUrl} alt={product.acf.produkt_bild_beskrivning} info={product.acf.produkt_info} category={product.acf.produkt_kategori} title={product.acf.produkt_titel}/>
           </div>
          ))}
          <Link className={styles.productsLink} href="/sortiment">Vårt sortiment</Link>
        </div>

        <div className={styles.memberDiv}>
          <h2>{page.acf.kraftolskamrat_tagline}</h2>
          <Link className={styles.memberLink} href="/medlem">{page.acf.kraftolskamrat_lanktext}</Link>
        </div>

      </main>
    </div>
  );
}
