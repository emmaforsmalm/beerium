import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {

    const secret = req.nextUrl.searchParams.get('secret');

    if (secret !== process.env.REVALIDATE_SECRET) {
        return Response.json({message: 'Invalid token'}, {status: 401});
    }

    try {
        revalidatePath('/');
        revalidatePath('/sortiment');
        revalidatePath('/omoss');
        revalidatePath('/kalender');
        revalidatePath('/medlem');
        return Response.json({revalidated: true});
    } catch (err) {
        return Response.json({message :'Error revalidating'}, {status:500});
    }
}

  