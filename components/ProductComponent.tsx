'use client';

import './productComponent.scss';
import { useState } from "react";
import Image from 'next/image';
import { parseDate } from '@/functions/DateFunctions';
import { Heart } from 'lucide-react';
import { updateLikes } from '@/apiReq/wordpressApi';

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
    productId: number;
}

export default function ProductComponent ({img, alt, width, height, title, category, info, releaseDate, notAvailable, likes, productId}: ProductProps) {

    const [show, setShow] = useState(false);
    const [like, setLike] = useState(() => {
        //Läs in like från localStorage
        if (typeof window === 'undefined') return false;
        const liked = localStorage.getItem(`liked_${productId}`);
        return liked !== null ? liked === 'true' : false;
    });
    const [likeCount, setLikeCount] = useState(likes);

    const today = new Date();
    today.setHours(0,0,0,0)

    const isComing = releaseDate ? parseDate(releaseDate) > today : false;

    const toggleShow = () => {
        setShow(!show);
    }

    const toggleLike = async() => {

        const newLikes = like ? likeCount - 1 : likeCount + 1;
        const newLike = !like;

        try {
        await updateLikes(productId, newLikes);

        setLikeCount(newLikes);
        setLike(newLike);      
        
        //Spara eller ta bort från localStorage
        if (newLike) {
            localStorage.setItem(`liked_${productId}`, 'true');
        } else {
            localStorage.removeItem(`liked_${productId}`)
        }
        
        } catch (error) {
            console.error('Något gick fel:', error);
            setLikeCount(likeCount);
            setLike(like);

        //Spara eller ta bort från localStorage
        if (like) {
            localStorage.setItem(`liked_${productId}`, 'true');
        } else {
            localStorage.removeItem(`liked_${productId}`)
        }
        }

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
                <p className='likeAmount'>{likeCount}</p>

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