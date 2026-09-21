'use client'

import './ageVerification.scss';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Image from 'next/image';

const CookieName = 'age_verified';
const CookieDays = 30;


export default function AgeVerification () {

    const router = useRouter();

    const [denied, setDenied] = useState(false);

    function handleConfirm() {
        Cookies.set(CookieName, 'yes', {expires: CookieDays, sameSite: 'Lax'});
        router.refresh();
    }

    function handleDeny() {
        setDenied(true);
    }

    return (
        <div className='ageDiv'>
            <div className='ageCard'>
            {!denied ? (
                <div>
                    <h2>Är du 20 år eller äldre?</h2>
                    <p>
                        Den här sidan innehåller information om och marknadsföring av alkoholhaltiga produkter. Du måste vara minst 20 år för att fortsätta.
                    </p>
                    <div className='ageButtonDiv'>
                        <button className='confirmButton' onClick={handleConfirm}>Ja, jag är 20 år eller äldre</button>
                        <button className='denyButton' onClick={handleDeny}>Nej</button>
                    </div>
                </div>
            ) : (
                <div>
                    <h2>Du måste vara 20 år eller äldre</h2>
                    <p>Tyvärr kan du inte ta del av innehållet på den här sidan just nu.</p>
                </div>
            )}
</div>
</div>
    );
}