import PriceBadge from "@/components/products/PriceBadge";
import { formatNumber, formatTaka, perUnit, unitLabel } from "@/lib/format";

export default function ProductHeader({ product, change }) {
  const { dir, pct } = change;
  const diff = Math.abs(product.today - product.yesterday);

  let summary = "গতকালের তুলনায় আজ দাম অপরিবর্তিত আছে";
  if (dir === "up") summary = `গতকালের তুলনায় আজ দাম বেড়েছে · ${formatTaka(diff)}`;
  if (dir === "down") summary = `গতকালের তুলনায় আজ দাম কমেছে · ${formatTaka(diff)}`;

  return (
    <section className="rounded-2xl border border-base-300 bg-base-100 p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <span
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-base-200 text-4xl"
          aria-hidden="true"
        >
          {product.image}
        </span>

        <div className="min-w-0 flex-1">
          <h1 className="text-3xl font-bold leading-9">{product.nameBn}</h1>
          <p className="text-sm">
            {perUnit(product.unit)} · {product.categoryNameBn}
          </p>
          <p className="mt-2 text-sm">{summary}</p>

          <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium">
            <span className="inline-flex items-center gap-1 rounded-full bg-base-200 px-3 py-1">
              <span aria-hidden="true">{product.categoryIcon}</span>
              {product.categoryNameBn}
            </span>
            <span className="inline-flex items-center rounded-full bg-base-200 px-3 py-1">
              {perUnit(product.unit)}
            </span>
          </div>
        </div>

        <div className="flex min-w-[140px] flex-col items-center rounded-2xl bg-base-200 px-5 py-4 text-center">
          <p className="text-sm">আজকের দাম</p>
          <p className="text-3xl font-bold leading-9">{formatNumber(product.today)}</p>
          <p className="text-sm">টাকা / {unitLabel(product.unit)}</p>
          <PriceBadge dir={dir} pct={pct} className="mt-2" />
        </div>
      </div>
    </section>
  );
}
