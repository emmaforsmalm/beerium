'use client';

import { formatEventDate } from '@/functions/DateFunctions';
import './eventComponent.scss';
import { useState } from "react";


type EventProps = {
    title: string;
    startDate: string;
    endDate: string;
    place: string;
    info?: string;
    link?: string;
    isPassed: boolean;
}

export default function EventComponent ({title, startDate, endDate, place, info, link, isPassed}: EventProps) {

    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    }

    return (        
        <div className={isPassed ? 'eventPassed' : 'eventComponentDiv'}>
              <p className='eventDate'>{formatEventDate(startDate, endDate)}</p>
              <div className='eventContent'>
              <h2>{title}</h2>  
              <p className='eventPlace'>{place}</p>
            {!show &&(
                <p className='eventShowInfo' onClick={toggleShow}>Visa information<span className="material-symbols-outlined">arrow_drop_down</span></p>
            )}
            {show && (
                <p className='eventShowInfo' onClick={toggleShow}>Dölj information<span className="material-symbols-outlined">arrow_drop_up</span></p>
            )}
              {info && show && (
                <p className='eventInfo'>{info}</p>)}

              {link && (
                <a className='eventLink' href={link}>Till eventet<span className="material-symbols-outlined">open_in_new</span></a>)}
              </div>

        </div>
        )
}