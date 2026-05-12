'use client';

import { getQr, postMember } from "@/apiReq/wordpressApi";
import { getReference } from "@/functions/memberFunctions";
import { useState } from "react";


export default function MemberForm() {

    

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [qrCode, setQrCode] = useState("");

    const becomeMember = async (event: any) => {
      event.preventDefault();

      try {
      setLoading(true);
      setError("");

      const newReference = getReference();

      console.log("creating member");

      await postMember(newReference, name, email);

      console.log("member created")


      const qr = await getQr(newReference);
      setQrCode(qr);

      console.log("qr created");

      } catch (error) {
        console.error(error);
        setError("Något gick fel")
      } finally {
        setLoading (false);
      }


    }

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

        {qrCode && (
            <img src={qrCode} alt="Swish QR-kod"></img>
        )}

    </div>
)}