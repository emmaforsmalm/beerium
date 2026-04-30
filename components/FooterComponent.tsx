
import './footerComponent.scss';
import { getFooter, getMedia } from '@/apiReq/wordpressApi';

export default async function FooterComponent () {

    const footer = await getFooter();

    let facebookImg = null;
    let instagramImg = null;
    let untappdImg = null;

    //Hämta in bilder
    if (footer.acf.footer_facebook_img) {
            facebookImg = await getMedia(footer.acf.footer_facebook_img);
    }
    if (footer.acf.footer_instagram_img) {
            instagramImg = await getMedia(footer.acf.footer_instagram_img);
    }
    if (footer.acf.footer_untappd_img) {
            untappdImg = await getMedia(footer.acf.footer_untappd_img);
    }

    const footerLogo = await getMedia(footer.acf.footer_logga);

    return (
    <div className='footer'>
        <div className='footerMainDiv'>
        <img src={footerLogo} alt="Beeriums logga"></img>
        <div className='footerTitleDiv'>
        <p className='footerTitle'>{footer.acf.footer_titel}</p>
        <p className='footerTagline'>{footer.acf.footer_tagline}</p>
        </div>
</div>
        <div className='footerInfoDiv'>
            <div>
                <p className='footerAdress'>{footer.acf.footer_adress}</p>
                <p className='footerEmail'>{footer.acf.footer_epost}</p>
            </div>
            <div className='footerSocials'>
                {facebookImg && footer.acf.footer_facebook_link && (
                    <a className='footerFacebook' href={footer.acf.footer_facebook_link}><img src={facebookImg} alt="Facebook logga"></img></a>
                )}
                {instagramImg && footer.acf.footer_instagram_link && (
                <a className='footerInstagram' href={footer.acf.footer_instagram_link}><img src={instagramImg} alt="Instagram logga"></img></a>                    
                )}
                {untappdImg && footer.acf.footer_untappd_link && (
                <a className='footerUntappd' href={footer.acf.footer_untappd_link}><img src={untappdImg} alt="Untappd logga"></img></a>                    
                )}

            </div>
        </div>
    </div>
)}