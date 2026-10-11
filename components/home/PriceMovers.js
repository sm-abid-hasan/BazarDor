import ProductGrid from "@/components/products/ProductGrid";
import { CHANGE_STYLES } from "@/lib/change-style";

export default function PriceMovers({ title, dir, products }) {
  const style = CHANGE_STYLES[dir];

  return (
    <section className="space-y-3">
      <h2 className="flex items-center gap-2 text-xl font-bold">
        {title}
        <span className={`text-base ${style.text}`} aria-hidden="true">
          {style.arrow}
        </span>
      </h2>
      <ProductGrid products={products} />
    </section>
  );
}
