import { getProducts } from "@/lib/api";
import { getChange } from "@/lib/product-utils";
import { CHANGE_STYLES } from "@/lib/change-style";
import { formatPercent, formatTaka, unitLabel } from "@/lib/format";


export default async function Ticker() {
  let products = [];
  try {
    products = await getProducts();
  } catch (error) {
    console.error("Could not load ticker products:", error);
  }

  if (products.length === 0) return <TickerSkeleton />;


  const items = [...products, ...products];

  return (
    <div
      className="ticker-wrap overflow-hidden border-b border-base-300 bg-base-100 motion-reduce:overflow-x-auto"
      aria-label="আজকের দামের তালিকা"
    >
      <div className="ticker-track flex w-max">
        {items.map((product, index) => {
          const { dir, pct } = getChange(product);
          const style = CHANGE_STYLES[dir];
          const isCopy = index >= products.length;

          return (
            <div
              key={`${product.id}-${index}`}
              aria-hidden={isCopy}
              className="flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap border-r border-base-200 px-4 text-sm"
            >
              <span aria-hidden="true">{product.image}</span>
              <span className="font-bold">{product.nameBn}</span>
              <span dir="ltr" className="inline-block  font-bold ">
                {formatTaka(product.today)}/{unitLabel(product.unit)}
              </span>
              <span className={`dir="ltr" text-sm  ${style.text}`}>
                {style.arrow} <span dir="ltr" className="inline-block font-bold">{formatPercent(pct)}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function TickerSkeleton() {
  return (
    <div className="border-b border-base-300 bg-base-100">
      <div className="flex h-9 items-center gap-6 overflow-hidden px-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="skeleton h-4 w-40 shrink-0 rounded" />
        ))}
      </div>
    </div>
  );
}
