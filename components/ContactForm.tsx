'use client'

import { useState } from "react";
import { sendContactForm } from "@/apiReq/wordpressApi";

export default function contactForm () {

    //States definierade för kontaktformulär
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [confirmation, setConfirmation] = useState(false);
    const [error, setError] = useState(false);

    //Funktion för att skicka in ett formulär
    const handleSubmit = async(event:any) => {
        event.preventDefault();
        setLoading(true);

        try {
            await sendContactForm(name, email, message);
            setConfirmation(true);
            setLoading(false);
        }catch(err) {
            setError(true)
            setLoading(false);
        }

    }

    return (
        
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Namn:</label><br/>
            <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)}></input><br/>

            <label htmlFor="email">E-post:</label><br/>
            <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)}></input><br/>

            <label htmlFor="message">Meddelande:</label><br/>
            <input type="textarea" id="message" required value={message} onChange={(e) => setMessage(e.target.value)}></input><br/>

            <input type="submit" value="Skicka"></input>

            {loading && (
                <p>Laddar...</p>
            )}
          </form>

        </div>
    )
}