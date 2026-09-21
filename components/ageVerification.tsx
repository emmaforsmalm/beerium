'use client'

import './cookieBanner.scss';
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';

const CookieName = 'age_verified';
const CookieDays = 30;


export default function AgeVerification () {

    const [visible, setVisible] = useState(false);
    const [denied, setDenied] = useState(false);

    useEffect (() => {
            if (Cookies.get(CookieName) !== 'yes') {
                setVisible(true)
        }
    }, []);

    function handleConfirm() {
        Cookies.set(CookieName, 'yes', {expires: CookieDays, sameSite: 'Lax'});
        setVisible(false);
    }

    function handleDeny() {
        setDenied(true);
    }

    if(!visible) {
        return null;
    }


    return (
        <div className='ageDiv'>
            {!denied ? (
                <div>
                    <h2>Är du 20 år eller äldre?</h2>
                    <p>
                        Den här sidan innehåller information om och marknadsföring av alkoholhaltiga produkter. Du måste vara minst 20 år för att fortsätta.
                    </p>
                    <div className='ageButtonDiv'>
                        <button onClick={handleConfirm}>Ja, jag är 20 år eller äldre</button>
                        <button onClick={handleDeny}>Nej</button>
                    </div>
                </div>
            ) : (
                <div>
                    <h2>Du måste vara 20 år eller äldre</h2>
                    <p>Tyvärr kan du inte ta del av innehållet på den här sidan just nu.</p>
                </div>
            )}
</div>

    );
}