'use client';

import './productComponent.scss';
import { useState } from "react";

type ProductProps = {
    img: string;
    alt: string;
    title: string;
    category: string;
    info: string;
}

export default function ProductComponent ({img, alt, title, category, info}: ProductProps) {

    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    }

    return (        
        <div className='productComponentDiv'>
           <img src={img} alt={alt}></img>
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
        </div>
        )
}