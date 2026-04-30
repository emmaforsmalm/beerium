import { Event } from "@/types/wordpress.types";
import { parseDate } from "./DateFunctions";

export const getLatestEvent = (events: Event[]) => {

    //Hämta in dagens datum
    const today = new Date();

    //Filtrera events på datum som har passerat och sortera på tidigast
    return events 
    .filter((event) => parseDate(event.acf.slut_datum) >= today)
    .sort((a,b) => parseDate(a.acf.start_datum).getDate() - parseDate(b.acf.start_datum).getDate())
    [0];

}