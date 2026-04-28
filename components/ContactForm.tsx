'use client'

import './contactform.scss';
import { useState } from "react";
import { sendContactForm } from "@/apiReq/wordpressApi";

export default function ContactForm () {

    //States definierade för kontaktformulär
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [loading, setLoading] = useState(false);
    const [confirmation, setConfirmation] = useState(false);
    const [error, setError] = useState(false);

    //Funktion för att skicka in ett formulär
    const handleSubmit = async(event:any) => {
        event.preventDefault();
        setLoading(true);

        try {
            await sendContactForm(name, email, subject, message);
            setConfirmation(true);
            setLoading(false);

            //Rensa formulär
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
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

            <label htmlFor="subject">Ämne:</label><br/>
            <input type="text" id="subject" required value={subject} onChange={(e) => setSubject(e.target.value)}></input><br/>

            <label htmlFor="message">Meddelande:</label><br/>
            <textarea id="message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea><br/>

            <input type="submit" value="Skicka"></input>

            <div className="messageDiv">
            {confirmation && (
                <p className="contactFormConfirmation">Ditt meddelande har skickats!</p>
            )}

            {error && (
                <p className="contactFormError">Något gick tyvärr fel, försök igen...</p>
            )}

            {loading && (
                <p className="contactFormLoading">Laddar...</p>
            )}
            </div>
          </form>

        </div>
    )
}