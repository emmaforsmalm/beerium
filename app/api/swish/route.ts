import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const {reference} = await req.json();

  
  const resp = await fetch(`https://mpc.getswish.net/qrg-swish/api/v1/prefilled`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        format: 'png',
        payee: {value: process.env.SWISH_NUMBER, editable: false},
        amount: {value: process.env.SWISH_VALUE, editable: false},
        message: {value: reference, editable: false},
        size: 300,
      }),
  });

  if(!resp.ok) {
    return NextResponse.json({error: "Kunde inte generera QR-kod"}, {status: 500});
  }

  //Konvertera bilden
  const qrBuffer = await resp.arrayBuffer();
  const qrBase64 = 'data:image/png;base64,' + Buffer.from(qrBuffer).toString('base64');

  return NextResponse.json({qrCode: qrBase64});
}
