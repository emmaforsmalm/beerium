//Importera typer för sidor och poster
import { checkImg } from "@/functions/FilterFunctions";
import type { Startsida, Sortiment, OmOss, Medlem, Produkt, Event, Kalender, Footer, newMember, Payment, Media } from "@/types/wordpress.types";
import { NextResponse } from "next/server";

//Hämta in URL för api
const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
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
export const getMedia = async (id: number): Promise<Media | null> => {
  if (!id) return null;

  const resp = await fetch(`${API_URL}/media/${id}`, {
      next: {revalidate: 60}
    });

    if(!resp.ok) {
      return null;
    } else {
      const data = await resp.json();

      return {
        url: data.source_url,
        alt: data.alt_text,
        width: data.media_details.width,
        height: data.media_details.height
      }
    }

}

//Funktion för att skicka in kontaktformulär 
export const sendContactForm = async (name: string, email: string, subject: string, message: string) => {
  
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
          const productImgUrl = await getMedia(product.acf.produkt_bild);
          return {...product, productImgUrl: productImgUrl ?? null}
        })
      )
      
      return products;
    }
}

//Funktion för att hämta in event
export const getEvents = async (): Promise<Event[]> => {

  console.log(API_URL);

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

//funktion för att skapa en ny medlem
export const postMember = async (reference:string, memberName: string, email: string): Promise<void> => {

  console.log(API_URL);
  const resp = await fetch(`${API_URL}/member`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + Buffer.from(`${process.env.NEXT_PUBLIC_WP_Profile_User}:${process.env.NEXT_PUBLIC_WP_Profile_Password}`).toString('base64'),
    },
    body: JSON.stringify({
      title: reference,
      status: 'publish',
      acf: {
        member_name: memberName,
        member_email: email,
        member_reference: reference,
        member_payment: "ej betald",
        member_welcome_email: "ej skickat",
        member_merch: "ej skickat",
      },
    }),
  });

    const data = await resp.json();

  if(!resp.ok) {
    throw new Error ("Det gick inte att skapa en ny medlem");


  }
}


//Hämta in en QR-kod
export const getQr = async(reference:string) => {
  const resp = await fetch("/api/swish", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({reference}),
  });

  const data = await resp.json();

  return data.qrCode;
}

//Funktion för att hämta in footer
export const getPaymentInfo = async (): Promise<Payment> => {

    const resp = await fetch(`${API_URL}/pages?slug=betalningssida`, {
      next: {revalidate: 60}
    });

    if(!resp.ok) {
      throw new Error("Något gick fel med att läsa in betalningssidan");
    } else {
      const data = await resp.json();

      return data[0];
    }
}