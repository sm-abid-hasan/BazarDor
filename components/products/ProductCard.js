import Link from "next/link";
import PriceBadge from "@/components/products/PriceBadge";
import { getChange } from "@/lib/product-utils";
import { formatTaka, perUnit } from "@/lib/format";

export default function ProductCard({ product }) {
  const { dir, pct } = getChange(product);

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block rounded-2xl border border-base-300 bg-base-100 p-4 transition-colors hover:border-primary"
    >
      <div className="flex items-center gap-3">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-base-200 text-2xl"
          aria-hidden="true"
        >
          {product.image}
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold leading-6">
            {product.nameBn}
          </h3>
          <p className="text-xs">{perUnit(product.unit)}</p>
        </div>
      </div>

      <div className="mt-3 flex items-end justify-between gap-2">
        <div>
          <p className="text-xs">আজকের দাম</p>
          <p className="text-xl font-bold leading-7">{formatTaka(product.today)}</p>
        </div>
        <PriceBadge dir={dir} pct={pct} className="mb-1" />
      </div>
    </Link>
  );
}
