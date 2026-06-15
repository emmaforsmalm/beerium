//Struktur för startsidan
export interface Startsida {
    id: number;
    slug: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    acf: {
        sidtitel: string;
        sid_tagline: string;
        header_bild: number;
        header_bild_beskrivning: string;
        om_oss_titel: string;
        om_oss_text: string;
        nasta_event_titel: string;
        inget_nasta_event: string;
        senaste_produkter_titel: string;
        kraftolskamrat_tagline: string;
        kraftolskamrat_lanktext: string;
        omoss_bild: number;
        omoss_bild_beskrivning: string;
    };
}

//Struktur för sortimentsidan
export interface Sortiment {
    id: number;
    slug: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    acf: {
        sidtitel: string;
        sid_tagline: string;
        header_bild: number;
        header_bild_beskrivning: string;
        sortiment_titel: string;
        systembolaget_bild: number;
        systembolaget_bild_beskrivning: string;
        krog_titel: string;
        kontakt_info: string;
    };
}

//Struktur för kalendersidan
export interface Kalender {
    id: number;
    slug: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    acf: {
        kalender_titel: string;
        header_bild: number;
        header_bild_beskrivning: string;
        bild_titel: string;
        event_bild_ett: number; 
        event_bild_ett_beskrivning: string;
        event_bild_tva: number; 
        event_bild_tva_beskrivning: string;
        event_bild_tre: number; 
        event_bild_tre_beskrivning: string;
        event_bild_fyra: number; 
        event_bild_fyra_beskrivning: string;
        event_bild_fem: number; 
        event_bild_fem_beskrivning: string;
        event_bild_sex: number; 
        event_bild_sex_beskrivning: string;
    };
}

//Struktur för om osssidan
export interface OmOss {
    id: number;
    slug: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    acf: {
        om_oss_titel: string;
        header_bild: number;
        header_bild_beskrivning: string;
        om_oss_text: string;
        kontakt_titel: string;
        kontakt_text: string;
        adress_titel: string;
        adress_text: string;
        epost_titel: string;
        email_text: string;
    };
}

//Struktur för medlemssidan
export interface Medlem {
    id: number;
    slug: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    acf: {
        medlem_sidtitel: string;
        medlem_tagline: string;
        header_bild: number;
        header_bild_beskrivning: string;
        medlem_text_titel: string;
        medlem_text: string;
    };
}

//Struktur för ett event-post
export interface Event {
    id: number;
    slug: string;
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    acf: {
        start_datum: string;
        slut_datum: string;
        event_plats: string;
        event_titel: string;
        event_info?: string;
        event_lank?: string;
    };
}

//Struktur för ett produkt-post
export interface Produkt {
    id: number;
    slug: string;
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    acf: {
        produkt_titel: string;
        produkt_kategori: string;
        produkt_info: string;
        produkt_bild: number;
        produkt_bild_beskrivning: string;
        lanseringsdatum?: string;
        ur_sortiment?: boolean;
    };
    productImgUrl: Media;
}

//Struktur för footer
export interface Footer {
    id: number;
    slug: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    acf: {
        footer_titel: string;
        footer_tagline: string;
        footer_adress: string;
        footer_epost: string;
        footer_facebook_img?: number;
        footer_facebook_link?: string;
        footer_instagram_img?: number;
        footer_instagram_link?: string;
        footer_untappd_img?: number;
        footer_untappd_link?: string;
        footer_logga: number;
    };
}

export interface newMember {
    memberName: string; 
    email: string;
    reference: string;
    payStatus: string;
    welcomeEmail: string;
    merch: string;
}

export interface Payment {
    id: number;
    slug: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    acf: {
    payment_title: string; 
    payment_info: string;
    reference_text: string;
    contact_info: string;
    link_text: string;
    };
}

export interface Media {
    url: string;
    alt: string;
    width: number;
    height: number;
}




