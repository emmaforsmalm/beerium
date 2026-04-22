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
        bild_titel: string;
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
        medlem_text: string;
    };
}

