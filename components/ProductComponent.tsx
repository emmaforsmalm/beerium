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

export default async function ProductComponent ({img, alt, title, category, info}: ProductProps) {

    return (        
        <>
           <img src={img} alt={alt}></img>
           <h3>{title}</h3>
           <h4>{category}</h4>
           <p>{info}</p>
        </>
        )
}