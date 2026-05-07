import { Event, Produkt } from "@/types/wordpress.types";
import { parseDate } from "./DateFunctions";

//Hämta näst kommande event
export const getLatestEvent = (events: Event[]) => {

    //Hämta in dagens datum
    const today = new Date();

    //Filtrera events på datum som har passerat och sortera på tidigast
    return events 
    .filter((event) => parseDate(event.acf.slut_datum).getTime() >= today.getTime())
    .sort((a,b) => parseDate(a.acf.start_datum).getTime() - parseDate(b.acf.start_datum).getTime())
    [0];

}

//Hämta in senaste produkterna
export const getLatestProducts = (products: Produkt[]) => {
    return products.slice(0,3);
}