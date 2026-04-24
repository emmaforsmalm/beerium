//Importera funktion för att läsa in sortimentsidan från wordpress
import { getMedia } from "@/apiReq/wordpressApi";

export default function Sortiment() {
  return (
    <div>
      <main>
        <h1>Sortiment</h1>
        <p>Det här är en sortiment-sida!</p>
      </main>
    </div>
  );
}