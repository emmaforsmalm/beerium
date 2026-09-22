'use client'

import './cookieBanner.scss';
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';

const CookieName = 'cookie_notice_seen';
const CookieDays = 180;


export default function CookieInfo () {

    const [visible, setVisible] = useState(false);

    useEffect (() => {
        if (Cookies.get(CookieName) !== 'yes') {
            setVisible(true)
        }
    }, []);

    function handleDismiss() {
        Cookies.set(CookieName, 'yes', {expires: CookieDays, sameSite: 'Lax'});
        setVisible(false);
    }

    if(!visible) {
        return null;
    }


    return (
        <div className='cookieBanner'>
                   <p>Vi använder cookies som är nödvändiga för att sidan ska fungera, t.ex. för åldersverifiering och för att hantera gillamarkeringar. <a href='/cookiepolicy'>Läs mer om integritet och cookies</a></p> 
                   <div className='cookieButtons'>
                   <button className='all' onClick={handleDismiss}>Jag förstår</button>
        </div>
</div>

    )
}