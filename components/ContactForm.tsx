'use client'

import { useState } from "react"

export default function contactForm () {

    //States definierade för kontaktformulär
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState("");
    const [confirmation, setConfirmation] = useState("");
    const [error, setError] = useState("");

    //Funktion för att skicka in ett formulär
    const handleSubmit = async(event:any) => {
        event.preventDefault();

        //Sätt error till tomt
        setError("");

        
    }

    return (
        
        <div>
          <form>
            <label htmlFor="name">Namn:</label><br/>
            <input type="text" id="name" required></input><br/>

            <label htmlFor="email">E-post:</label><br/>
            <input type="email" id="email" required></input><br/>

            <label htmlFor="message">Meddelande:</label><br/>
            <input type="textarea" id="message" required></input><br/>

            <input type="submit" value="Skicka"></input>
          </form>

        </div>
    )
}