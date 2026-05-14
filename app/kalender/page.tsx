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
import { parseDate } from "@/functions/DateFunctions";
import { Metadata } from "next";
import { checkImg, findPassedEvents } from "@/functions/FilterFunctions";

export default async function Home() {

    const page = await getCalendarPage();
    const events = await getEvents();

    const passedEvents = await findPassedEvents(events);

        const imgUrlHeader = await checkImg(page.acf.header_bild, "/breweryb&w.jpg");
        const imgUrlEventOne = await checkImg(page.acf.event_bild_ett, "/calendarImg.jpg");      
        const imgUrlEventTwo = await checkImg(page.acf.event_bild_tva, "/calendarImg.jpg");   
        const imgUrlEventThree = await checkImg(page.acf.event_bild_tre, "/calendarImg.jpg");      
        const imgUrlEventFour = await checkImg(page.acf.event_bild_fyra, "/calendarImg.jpg");
        const imgUrlEventFive = await checkImg(page.acf.event_bild_fem, "/calendarImg.jpg");
        const imgUrlEventSix = await checkImg(page.acf.event_bild_sex, "/calendarImg.jpg");
    
  

  return (
    <div>
      <main>
        <div className={styles.header}>
        <img src={imgUrlHeader} alt={page.acf.header_bild_beskrivning}></img>
        <h1>{page.acf.kalender_titel}</h1>          
        </div>

        <div>
          {!page && (
            <p className="notLoadedPage">Något gick fel...</p>
          )}
        </div>

                  {!events && (
                    <div>
            <p className="notLoadedPage">Inga evenemang hittades...</p>
        </div>
          )}

          {events && (
        <div className={styles.calenderContent}>
          {events.sort((a, b) => parseDate(a.acf.start_datum).getTime() - parseDate(b.acf.start_datum).getTime())
          .map((event) => (
            <div key={event.id}>
              <EventComponent title={event.acf.event_titel} place={event.acf.event_plats} startDate={event.acf.start_datum} endDate={event.acf.slut_datum} info={event.acf.event_info} link={event.acf.event_lank} />
            </div>
          ))}
        </div>            
          )}




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