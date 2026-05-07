//Sätter en titel för sidan med metadata
export const metadata: Metadata = {
  title: "Kalender - Beerium",
  description: "Se våra planerade evenemang under året"
}

//Importera funktion för att läsa in om oss-sidan från wordpress
import { getCalendarPage, getEvents, getMedia } from "@/apiReq/wordpressApi";
//Importera scss-fil
import styles from "./kalender.module.scss";
import EventComponent from "@/components/EventComponent";

//Importera funktioner för att hantera datum
import { parseDate, formatEventDate } from "@/functions/DateFunctions";
import { Metadata } from "next";

export default async function Home() {

    const page = await getCalendarPage();
    const events = await getEvents();
  
    const imgUrlHeader = await getMedia(page.acf.header_bild);
    const imgUrlEventOne = await getMedia(page.acf.event_bild_ett);
    const imgUrlEventTwo = await getMedia(page.acf.event_bild_tva);
    const imgUrlEventThree = await getMedia(page.acf.event_bild_tre);
    const imgUrlEventFour = await getMedia(page.acf.event_bild_fyra);
    const imgUrlEventFive = await getMedia(page.acf.event_bild_fem);
    const imgUrlEventSix = await getMedia(page.acf.event_bild_sex);




  return (
    <div>
      <main>
        <div className={styles.header}>
        <img src={imgUrlHeader} alt={page.acf.header_bild_beskrivning}></img>
        <h1>{page.acf.kalender_titel}</h1>          
        </div>

        <div className={styles.calenderContent}>
          {events.sort((a, b) => parseDate(a.acf.start_datum).getDate() - parseDate(b.acf.start_datum).getDate())
          .map((event) => (
            <div key={event.id}>
              <EventComponent title={event.acf.event_titel} place={event.acf.event_plats} startDate={event.acf.start_datum} endDate={event.acf.slut_datum} info={event.acf.event_info} link={event.acf.event_lank} />
              
            </div>
          ))}
        </div>

        <div className={styles.highlights}>
          <h2>{page.acf.bild_titel}</h2>
          <div className={styles.highlightsImg}>
            <img src={imgUrlEventOne} alt={page.acf.event_bild_ett_beskrivning}></img>
            <img src={imgUrlEventTwo} alt={page.acf.event_bild_tva_beskrivning}></img>
            <img src={imgUrlEventThree} alt={page.acf.event_bild_tre_beskrivning}></img>
            <img src={imgUrlEventFour} alt={page.acf.event_bild_fyra_beskrivning}></img>
            <img src={imgUrlEventFive} alt={page.acf.event_bild_fem_beskrivning}></img>
            <img src={imgUrlEventSix} alt={page.acf.event_bild_sex_beskrivning}></img>            
          </div>
        </div>
      </main>
    </div>
  );
}