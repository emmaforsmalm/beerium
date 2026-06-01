//funktion för att skapa en ny medlem
export async function POST(request: Request) {
    const {reference, memberName, email} = await request.json();

  const resp = await fetch(`${process.env.API_URL}/member`, {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + Buffer.from(`${process.env.WP_Profile_User}:${process.env.WP_Profile_Password}`).toString('base64'),
    },
    body: JSON.stringify({
      title: reference,
      status: 'publish',
      acf: {
        member_name: memberName,
        member_email: email,
        member_reference: reference,
        member_payment: "ej betald",
        member_welcome_email: "ej skickat",
        member_merch: "ej skickat",
      },
    }),
  });

  if(!resp.ok) {
    throw new Error ("Det gick inte att skapa en ny medlem");

  }
}