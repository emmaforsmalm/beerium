import styles from "./cookiepolicy.module.scss";


export default async function Cookiepolicy() {

  return (
    <div className={styles.policy}>
      <h2>Integritets- och cookiepolicy</h2>
      <p className={styles.date}>Senast uppdaterad 2026-09-22</p>
      <h3>Integritetspolicy</h3>
      <h4>1. Vilka är personuppgiftsansvariga?</h4>
      <p>Beerium är personuppgiftsansvariga för behandlingen av dina personuppgifter enligt denna policy. <br></br>
      Kontakta oss: kontakt@beerium.se</p>
      <h4>2. Vilka personuppgifter samlar vi in?</h4>
      <p>Vi samlar in följande personuppgifter när du blir kraftölskamrat hos oss:</p>
      <ul>
        <li>Namn</li>
        <li>E-postadress</li>
        <li>Referensnummer (kopplat till ditt medlemskap)</li>
      </ul>
      <h4>4. Varför behandlar vi dina uppgifter, och med vilken rättslig grund?</h4>
      <div className={styles.table}>
      <table>
        <thead>
          <tr>
          <th>Ändamål</th>
          <th>Rättslig grund</th>            
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>Administrera ditt medlemskap</td>
          <td>Fullgörande av avtal</td>
        </tr>
        <tr>
          <td>Skicka bekräftelse och information kopplat till ditt medlemskap</td>
          <td>Fullgörande av avtal</td>
        </tr>
        <tr>
          <td>Intern administration (t.ex. notis till oss om nya medlemmar)</td>
          <td>Berättigat intresse</td>
        </tr>          
        </tbody>
      </table>
      </div>
      <h4>4. Vem delar vi dina uppgifter med?</h4>
      <ul>
        <li>Brevo, vår leverantör för att skicka mejl (t.ex. bekräftelser och interna notiser). Brevo 
          behandlar uppgifterna på vårt uppdrag enligt personuppgiftsbiträdesavtal.
        </li>
        <li>Railway, driftar den tekniska plattformen där dina uppgifter lagras.</li>
      </ul>
      Vi säljer aldrig dina uppgifter till tredje part.

      <h4>5. Hur länge sparar vi dina uppgifter?</h4>
      <p>Uppgifter om våra kraftölskamrater sparas så länge du själv inte ber om att få dem borttagna.</p>

      <h4>6. Dina rättigheter</h4>
      <p>Du har rätt att:</p>
      <ul>
        <li>Begära ett utdrag av vilka uppgifter vi har om dig.</li>
        <li>Begära rättelse av felaktiga uppgifter.</li>
        <li>Begära radering av dina uppgifter.</li>
        <li>Invända mot vår behandling.</li>
        <li>Lämna in ett klagomål till Integritetsskyddsmyndigheten om du anser att vi 
          behandlar dina uppgifter felaktigt.
        </li>
      </ul>

      Kontakta oss på kontakt@beerium.se för att utöva dina rättigheter.

      <h3>Cookies</h3>
      <h4>Cookies och liknande lagring</h4>
      <p>Vi använder cookies och lokal lagring i din webbläsare för att sidan 
        ska fungera som avsett. All lagring vi använder är nödvändig för sidans 
        grundfunktioner. Vi använder för närvarande inga cookies för 
        analys, marknadsföring eller spårning. 
      </p>
      <div className={styles.table}>
      <table>
        <thead>
          <tr>
          <th>Namn</th>
          <th>Syfte</th>
          <th>Lagringstid</th>            
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>age_verified</td>
          <td>Kommer ihåg att du bekräftat att du är 20 år eller 
            äldre, så att du inte behöver bekräfta det vid varje besök. 
            Krävs enligt lag för att vi ska få visa innehåll om alkoholhaltiga produkter.
          </td>
          <td>30 dagar</td>
        </tr>
        <tr>
          <td>cookie_notice_seen</td>
          <td>Kommer ihåg att du har läst informationen om cookies, så att notisen 
            inte visas vid varje besök. 
          </td>
          <td>180 dagar</td>
        </tr>
        <tr>
          <td>liked_productId</td>
          <td>Håller reda på vilka produkter du har gillat, så att du kan ta 
            bort din gillamarkering genom att klicka igen istället för att skapa
            dubletter.
          </td>
          <td>Sparas medan produkten finns synlig i sortimentet</td>
        </tr>
       
        </tbody>
      </table>
      </div>
      <p>Du kan när som helst radera cookies via din webbläsares inställningar.
      
      </p>
    </div>
  );
}