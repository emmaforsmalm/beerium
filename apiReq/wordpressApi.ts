//Importera typer för sidor och poster
import type { Startsida, Sortiment, OmOss, Medlem, Produkt, Event, Kalender } from "@/types/wordpress.types";

//Hämta in URL för api
const API_URL = process.env.WORDPRESS_API_URL;

//Funktion för att hämta in startsidan
export const getStartPage = async (): Promise<Startsida> => {

    const resp = await fetch(`${API_URL}/pages?slug=startsida`);

    if(!resp.ok) {
      throw new Error("Något gick fel med att läsa in startsidan");
    } else {
      const data = await resp.json();

      return data[0];
    }
}

//Funktion för att hämta in sortimentsidan
export const getSortimentPage = async (): Promise<Sortiment> => {

    const resp = await fetch(`${API_URL}/pages?slug=sortiment`);

    if(!resp.ok) {
      throw new Error("Något gick fel med att läsa in sortimentsidan");
    } else {
      const data = await resp.json();

      return data[0];
    }
}

//Funktion för att hämta in medlemssidan
export const getMemberPage = async (): Promise<Medlem> => {

    const resp = await fetch(`${API_URL}/pages?slug=medlem`);

    if(!resp.ok) {
      throw new Error("Något gick fel med att läsa in medlemssidan");
    } else {
      const data = await resp.json();

      return data[0];
    }
}

//Funktion för att hämta in om oss-sidan
export const getAboutPage = async (): Promise<OmOss> => {

    const resp = await fetch(`${API_URL}/pages?slug=om-oss`);

    if(!resp.ok) {
      throw new Error("Något gick fel med att läsa in om oss-sidan");
    } else {
      const data = await resp.json();

      return data[0];
    }
}

//Funktion för att hämta in kalendersidan
export const getCalendarPage = async (): Promise<Kalender> => {

    const resp = await fetch(`${API_URL}/pages?slug=kalender`);

    if(!resp.ok) {
      throw new Error("Något gick fel med att läsa in kalendersidan");
    } else {
      const data = await resp.json();

      return data[0];
    }
}

//Funktion för att hämta in bilder från api
export const getMedia = async (id: number): Promise<string> => {

  const resp = await fetch(`${API_URL}/media/${id}`);

    if(!resp.ok) {
      throw new Error("Något gick fel med att läsa in bilden");
    } else {
      const data = await resp.json();

      return data.source_url;
    }

}