import ProductClient from "./ProductClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sortiment - Beerium",
  description: "Utforska Beeriums sortiment av hantverksöl"
}

export default async function Sortiment() {

  return <ProductClient/>;
}