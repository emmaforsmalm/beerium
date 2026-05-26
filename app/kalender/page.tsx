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
import Image from "next/image";

//Importera funktioner för att hantera datum
import { parseDate } from "@/functions/DateFunctions";
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
        <Image src={imgUrlHeader?.url ?? '/defaultHeader.webp'} alt={page.acf.header_bild_beskrivning} width={imgUrlHeader?.width ?? 2000} height={imgUrlHeader?.height ?? 400} sizes="100vw" />
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
          .map((event) => { 

            return (
            <div key={event.id}>
              <EventComponent title={event.acf.event_titel} place={event.acf.event_plats} startDate={event.acf.start_datum} endDate={event.acf.slut_datum} info={event.acf.event_info} link={event.acf.event_lank} />
            </div>
)})}
        </div>            
          )}




        <div className={styles.highlights}>
          <h2>{page.acf.bild_titel}</h2>
          <div className={styles.highlightsImg}>
            <Image src={imgUrlEventOne?.url ?? '/calendarImg.webp'} alt={page.acf.event_bild_ett_beskrivning} width={imgUrlEventOne?.width ?? 200} height={imgUrlEventOne?.height ?? 200} sizes="200px" />
            <Image src={imgUrlEventTwo?.url ?? '/calendarImg.webp'} alt={page.acf.event_bild_tva_beskrivning} width={imgUrlEventTwo?.width ?? 200} height={imgUrlEventTwo?.height ?? 200} sizes="200px" />
            <Image src={imgUrlEventThree?.url ?? '/calendarImg.webp'} alt={page.acf.event_bild_tre_beskrivning} width={imgUrlEventThree?.width ?? 200} height={imgUrlEventThree?.height ?? 200} sizes="200px" />
            <Image src={imgUrlEventFour?.url ?? '/calendarImg.webp'} alt={page.acf.event_bild_fyra_beskrivning} width={imgUrlEventFour?.width ?? 200} height={imgUrlEventFour?.height ?? 200} sizes="200px" />
            <Image src={imgUrlEventFive?.url ?? '/calendarImg.webp'} alt={page.acf.event_bild_fem_beskrivning} width={imgUrlEventFive?.width ?? 200} height={imgUrlEventFive?.height ?? 200} sizes="200px" />
            <Image src={imgUrlEventSix?.url ?? '/calendarImg.webp'} alt={page.acf.event_bild_sex_beskrivning} width={imgUrlEventSix?.width ?? 200} height={imgUrlEventSix?.height ?? 200} sizes="200px" />            
          </div>
        </div>
      </main>
    </div>
  );
}