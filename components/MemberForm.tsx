'use client';

import { getQr, postMember } from "@/apiReq/wordpressApi";
import { getReference } from "@/functions/memberFunctions";
import { useState } from "react";
import './memberForm.scss';
import { useRouter } from "next/navigation";

export default function MemberForm() {

    const router = useRouter();

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

      await postMember(newReference, name, email);

      const qr = await getQr(newReference);
      setQrCode(qr);

      //Spara qr och referensnummer i sessionStorage
      sessionStorage.setItem("qrCode", qr);
      sessionStorage.setItem("reference", newReference);
      router.push("/betalning");

      } catch (error) {
        console.error(error);
        setError("Något gick fel")
      } finally {
        setLoading (false);
      }


    }

return (
    <div>
        <div className="memberForm">
            <h2>Medlemsformulär</h2>
          <form onSubmit={becomeMember}>
          <label htmlFor="name">Namn:</label>
          <input type="text" id="name" name="name" required placeholder="För- och efternamn..." value={name} onChange={(e) => setName(e.target.value)}></input>

          <label htmlFor="email">E-post:</label>
          <input type="email" id="email" name="email" required placeholder="Din e-postadress..." value={email} onChange={(e) => setEmail(e.target.value)}></input>

          <input type="submit" value="Betala"></input>
          </form>          

</div>

    </div>
)}