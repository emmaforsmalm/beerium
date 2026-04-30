
import './footerComponent.scss';
import { getFooter, getMedia } from '@/apiReq/wordpressApi';

export default async function FooterComponent () {

    const footer = await getFooter();

    //Hämta in bilder
    const facebookImg = await getMedia(footer.acf.footer_facebook_img);
    const instagramImg = await getMedia(footer.acf.footer_instagram_img);
    const untappdImg = await getMedia(footer.acf.footer_untappd_img);
    const footerLogo = await getMedia(footer.acf.footer_logga);

    <div>
        <img src={footerLogo} alt="Beeriums logga"></img>
        <p>{footer.acf.footer_titel}</p>
        <p>{footer.acf.footer_tagline}</p>

        <div>
            <div>
                <p>{footer.acf.footer_adress}</p>
                <p>{footer.acf.footer_epost}</p>
            </div>
            <div>
                <a href={footer.acf.footer_facebook_link}><img src={facebookImg} alt="Facebook logga"></img></a>
                <a href={footer.acf.footer_instagram_link}><img src={instagramImg} alt="Instagram logga"></img></a>
                <a href={footer.acf.footer_untappd_link}><img src={untappdImg} alt="Untappd logga"></img></a>
            </div>
        </div>
    </div>
}