import Hero from "@/components/home/Hero";
import PriceMovers from "@/components/home/PriceMovers";
import ProductExplorer from "@/components/products/ProductExplorer";
import { getProducts } from "@/lib/api";
import { getTopMovers } from "@/lib/product-utils";
import { ALL_PRODUCTS_ID } from "@/lib/constants";

export default async function HomePage() {
  const products = await getProducts();

  const risers = getTopMovers(products, "up", 6); 
  const fallers = getTopMovers(products, "down", 6); 

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-6">
      <Hero />

      <PriceMovers title="আজ দাম বেড়েছে" dir="up" products={risers} />
      <PriceMovers title="আজ দাম কমেছে" dir="down" products={fallers} />

      <section id={ALL_PRODUCTS_ID} className="scroll-mt-4 space-y-3">
        <h2 className="text-xl font-bold">সব পণ্য</h2>
        <ProductExplorer products={products} />
      </section>
    </div>
  );
}
