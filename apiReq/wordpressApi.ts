//Importera typer för sidor och poster
import type { Startsida, Sortiment, OmOss, Medlem, Produkt, Event, Kalender } from "@/types/wordpress.types";

//Hämta in URL för api
const API_URL = process.env.WORDPRESS_API_URL;

//Funktion för att hämta in en sida
export const getStartPage = async (): Promise<Startsida> => {

    const resp = await fetch(`${API_URL}/pages?slug=startsida`);

    if(!resp.ok) {
      throw new Error("Något gick fel med att läsa in startsidan");
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