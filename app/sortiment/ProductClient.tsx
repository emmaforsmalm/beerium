
export const revalidate = 60

//Importera funktion för att läsa in sortimentsidan från wordpress
import { getSortimentPage, getMedia, getProducts } from "@/apiReq/wordpressApi";

import ProductList from "./ProductList";

export default async function ProductClient() {


  const page = await getSortimentPage();
  const products = await getProducts();
  const imgUrlHeader = await getMedia(page.acf.header_bild);
  const imgUrlSystembolaget = await getMedia(page.acf.systembolaget_bild);
  

  return (
    <ProductList page={page} products={products} imgUrlHeader={imgUrlHeader} imgUrlSystembolaget={imgUrlSystembolaget} />
  );
}