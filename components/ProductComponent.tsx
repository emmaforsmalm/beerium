'use client';

import './productComponent.scss';
import { useState } from "react";
import Image from 'next/image';
import { parseDate } from '@/functions/DateFunctions';
import { Heart } from 'lucide-react';

type ProductProps = {
    img: string;
    alt: string;
    width: number;
    height: number;
    title: string;
    category: string;
    info: string;
    releaseDate?: string;
    notAvailable: boolean;
    likes: number;
}

export default function ProductComponent ({img, alt, width, height, title, category, info, releaseDate, notAvailable, likes}: ProductProps) {

    const [show, setShow] = useState(false);
    const [like, setLike] = useState(false);

    const today = new Date();
    today.setHours(0,0,0,0)

    const isComing = releaseDate ? parseDate(releaseDate) > today : false;

    const toggleShow = () => {
        setShow(!show);
    }

    const toggleLike = () => {
        setLike(!like);
    }

    return ( 
        <div> 
               
        <div className='productComponentDiv'>
            {notAvailable && (
            <div className='notAvailable'>
                 <p className='notAvailableText'>Ur sortiment</p>
                 <div className='likesDiv'>
                                 <p className='missingProductText'>Gilla om du saknar produkten!</p>
                <Heart className="heartSymbol" onClick={toggleLike} size={26} fill={like ? "red" : "none"} color="red" />
                <p className='likeAmount'>{likes}</p>

                </div>
            </div>
            )}  
            {isComing && (
            <div className='isComing'>
                 <p>Kommer snart!</p>
            </div>
            )} 
            {!isComing && !notAvailable && (
            <div className='isReleased'>
                <p></p>
            </div>
            )} 
 

           <Image src={img ?? '/placeholderDark.png'} alt={alt ?? 'Produktbild'} width={width ?? 200} height={height ?? 350} sizes="300px"/>
           <h2>{title}</h2>
           <h3>{category}</h3>
           {!show &&(
            <p className='productShowInfo' onClick={toggleShow}>Visa information<span className="material-symbols-outlined">arrow_drop_down</span></p>
           )}
           {show && (
            <p className='productShowInfo' onClick={toggleShow}>Dölj information<span className="material-symbols-outlined">arrow_drop_up</span></p>
           )}
           {show && (
           <p className='productInfo'>{info}</p>            
           )}
           {show && releaseDate && isComing && (
            <p className='productDate'>Lanseringsdatum: {parseDate(releaseDate).toLocaleDateString('sv-SE')}</p>
           )}
        </div>
        </div> 
        )
}