'use client';

import { getReference } from "@/functions/memberFunctions";
import { useState } from "react";


export default function MemberForm() {

    

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const becomeMember = ((event: any) => {
      event.preventDefault();
      setLoading(true);

      const reference = getReference();

      console.log(reference);

    })

return (
    <div>
        <div>
          <form onSubmit={becomeMember}>
          <label htmlFor="name">Namn:</label>
          <input type="text" id="name" name="name" placeholder="För- och efternamn..." value={name} onChange={(e) => setName(e.target.value)}></input>

          <label htmlFor="email">E-post:</label>
          <input type="email" id="email" name="email" placeholder="Din e-postadress..." value={email} onChange={(e) => setEmail(e.target.value)}></input>

          <input type="submit" value="Betala"></input>
          </form>          
        </div>
    </div>
)}