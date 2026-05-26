
import './footerComponent.scss';
import { getFooter, getMedia } from '@/apiReq/wordpressApi';
import Image from 'next/image';

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
        <Image src={footerLogo?.url ?? '/defaultlogo.webp'} alt="Beeriums logga" width={footerLogo?.width ?? 400} height={footerLogo?.height ?? 400} sizes="100px" style={{width: '60px', height: '60px'}}/>
        <div className='footerTitleDiv'>
        <p className='footerTitle'>{footer.acf.footer_titel}</p>
        <p className='footerTagline'>{footer.acf.footer_tagline}</p>
        </div>
</div>
        <div className='footerInfoDiv'>
            <div className='footerAdressEmail'>
                <p className='footerAdress'>{footer.acf.footer_adress}</p>
                <p className='footerEmail'>{footer.acf.footer_epost}</p>
            </div>
            <div className='footerSocials'>
                {facebookImg && footer.acf.footer_facebook_link && (
                    <a className='footerFacebook' href={footer.acf.footer_facebook_link}><Image src={facebookImg.url} alt="Facebook logga" width={facebookImg.width} height={facebookImg.height} sizes="100px" style={{width: '50px', height: '50px'}}/></a>
                )}
                {instagramImg && footer.acf.footer_instagram_link && (
                <a className='footerInstagram' href={footer.acf.footer_instagram_link}><Image src={instagramImg.url} alt="Instagram logga" width={instagramImg.width} height={instagramImg.height} sizes="100px" style={{width: '50px', height: '50px'}}/></a>                    
                )}
                {untappdImg && footer.acf.footer_untappd_link && (
                <a className='footerUntappd' href={footer.acf.footer_untappd_link}><Image src={untappdImg.url} alt="Untappd logga" width={untappdImg.width} height={untappdImg.height} sizes="100px" style={{width: '50px', height: '50px'}}/></a>                    
                )}

            </div>
        </div>
    </div>
)}