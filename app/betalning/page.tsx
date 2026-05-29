export const metadata: Metadata = {
  title: "Betalningssida - Beerium",
  description: "Betalningssida för medlemskap i Beerium"
}

import { getPaymentInfo } from "@/apiReq/wordpressApi";
import Betalning from "./BetalningClient";
import { Metadata } from "next";

export default async function Payment() {

    const page = await getPaymentInfo();

  return (
    <Betalning page={page} />
  );
}