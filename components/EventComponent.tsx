'use client';

import './productComponent.scss';
import { useState } from "react";

type EventProps = {
    title: string;
    date: string;
    place: string;
    info?: string;
    link?: string;
}

export default function EventComponent ({title, date, place, info, link}: EventProps) {

    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    }

    return (        
        <div className='eventComponentDiv'>
              <p>{date}</p>
              <div>
              <h2>{title}</h2>  
              <p>{place}</p>
            {!show &&(
                <p className='productShowInfo' onClick={toggleShow}>Visa information<span className="material-symbols-outlined">arrow_drop_down</span></p>
            )}
            {show && (
                <p className='productShowInfo' onClick={toggleShow}>Dölj information<span className="material-symbols-outlined">arrow_drop_up</span></p>
            )}
              {info && show && (
                <p>{info}</p>)}

              {link && (
                <a href={link}>Till eventet</a>)}
              </div>

        </div>
        )
}