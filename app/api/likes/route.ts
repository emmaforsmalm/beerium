//funktion för att uppdatera gillmarkeringar
export async function PATCH(request: Request) {

    const {productId, likes} = await request.json();

  const resp = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/product/${productId}`, {

    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + Buffer.from(`${process.env.WP_Profile_User}:${process.env.WP_Profile_Password}`).toString('base64'),
    },
    body: JSON.stringify({
      status: 'publish',
      acf: {
        gillamarkeringar: likes
      },
    }),
  });

  const data = await resp.json();

  if(!resp.ok) {
    throw new Error ("Det gick inte uppdatera gillamarkeringar");

  }

  return Response.json(data);
}