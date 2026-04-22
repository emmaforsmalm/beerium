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
        om_oss_titel: string;
        om_oss_text: string;
        nasta_event_titel: string;
        senaste_produkter_titel: string;
        kraftolskamrat_tagline: string;
        kraftolskamrat_lanktext: string;
        omoss_bild: string;
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
        sortiment_titel: string;
        systembolaget_bild: string;
        krog_titel: string;
        kontakt_info: string;
    };
}