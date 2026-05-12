//Importera typer för sidor och poster
import { checkImg } from "@/functions/FilterFunctions";
import type { Startsida, Sortiment, OmOss, Medlem, Produkt, Event, Kalender, Footer } from "@/types/wordpress.types";

//Hämta in URL för api
const API_URL = process.env.WORDPRESS_API_URL;
const FORM_URL = process.env.NEXT_PUBLIC_WP_URL;

//Funktion för att hämta in startsidan
export const getStartPage = async (): Promise<Startsida> => {

    const resp = await fetch(`${API_URL}/pages?slug=startsida`, {
      next: {revalidate: 60}
    });

    if(!resp.ok) {
      throw new Error("Något gick fel med att läsa in startsidan");
    } else {
      const data = await resp.json();

      return data[0];
    }
}

//Funktion för att hämta in sortimentsidan
export const getSortimentPage = async (): Promise<Sortiment> => {

    const resp = await fetch(`${API_URL}/pages?slug=sortiment`, {
      next: {revalidate: 60}
    });

    if(!resp.ok) {
      throw new Error("Något gick fel med att läsa in sortimentsidan");
    } else {
      const data = await resp.json();

      return data[0];
    }
}

//Funktion för att hämta in medlemssidan
export const getMemberPage = async (): Promise<Medlem> => {

    const resp = await fetch(`${API_URL}/pages?slug=medlem`, {
      next: {revalidate: 60}
    });

    if(!resp.ok) {
      throw new Error("Något gick fel med att läsa in medlemssidan");
    } else {
      const data = await resp.json();

      return data[0];
    }
}

//Funktion för att hämta in om oss-sidan
export const getAboutPage = async (): Promise<OmOss> => {

    const resp = await fetch(`${API_URL}/pages?slug=om-oss`, {
      next: {revalidate: 60}
    });

    if(!resp.ok) {
      throw new Error("Något gick fel med att läsa in om oss-sidan");
    } else {
      const data = await resp.json();

      return data[0];
    }
}

//Funktion för att hämta in kalendersidan
export const getCalendarPage = async (): Promise<Kalender> => {

    const resp = await fetch(`${API_URL}/pages?slug=kalender`, {
      next: {revalidate: 60}
    });

    if(!resp.ok) {
      throw new Error("Något gick fel med att läsa in kalendersidan");
    } else {
      const data = await resp.json();

      return data[0];
    }
}

//Funktion för att hämta in footer
export const getFooter = async (): Promise<Footer> => {

    const resp = await fetch(`${API_URL}/pages?slug=footer`, {
      next: {revalidate: 60}
    });

    if(!resp.ok) {
      throw new Error("Något gick fel med att läsa in footer");
    } else {
      const data = await resp.json();

      return data[0];
    }
}

//Funktion för att hämta in bilder från api
export const getMedia = async (id: number): Promise<string> => {

  const resp = await fetch(`${API_URL}/media/${id}`, {
      next: {revalidate: 60}
    });

    if(!resp.ok) {
      throw new Error("Något gick fel med att läsa in bilden");
    } else {
      const data = await resp.json();

      return data.source_url;
    }

}

//Funktion för att hämta in kontaktformulär 
export const sendContactForm = async (name: string, email: string, subject: string, message: string) => {
  
  console.log('Form url:', FORM_URL);
  console.log('full url:', `${FORM_URL}/6/feedback`);

  const formData = new FormData();
  formData.append('your-name', name);
  formData.append('your-email', email);
  formData.append('your-subject', subject);
  formData.append('your-message', message);
  formData.append('_wpcf7', '6');
  formData.append('_wpcf7_unit_tag', 'wpcf7-f6-p1-o1');

  const resp = await fetch(`${FORM_URL}/6/feedback`, {
    method: 'POST',
    body: formData
  });

  const data = await resp.json();
  console.log("data:", data);

  if (data.status !== 'mail_sent') {
    throw new Error(data.message || 'Något gick fel');
  }

  return data; 
}

//Funktion för att hämta in produkter
export const getProducts = async (): Promise<Produkt[]> => {

    const resp = await fetch(`${API_URL}/product`, {
      next: {revalidate: 60}
    });

    if(!resp.ok) {
      throw new Error("Något gick fel med att läsa in produkter");
    } else {
      const data = await resp.json();
      
      const products = await Promise.all(
        data.map(async (product: Produkt) => {
          const productImgUrl = await checkImg(product.acf.produkt_bild, "/placeholderDark.png");
          return {...product, productImgUrl}
        })
      )
      
      return products;
    }
}

//Funktion för att hämta in event
export const getEvents = async (): Promise<Event[]> => {

    const resp = await fetch(`${API_URL}/event`, {
      next: {revalidate: 60}
    });

    if(!resp.ok) {
      throw new Error("Något gick fel med att läsa in events");
    } else {
      const data = await resp.json();
      return data;
    }
}