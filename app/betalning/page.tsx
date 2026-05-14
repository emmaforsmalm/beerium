
import { getPaymentInfo } from "@/apiReq/wordpressApi";
import Betalning from "./BetalningClient";

export default async function Payment() {

    const page = await getPaymentInfo();

  return (
    <Betalning page={page} />
  );
}