"use client";

import { useState } from "react";
import ProductGrid from "@/components/products/ProductGrid";
import SortSelect from "@/components/products/SortSelect";
import EmptyState from "@/components/products/EmptyState";
import { sortProducts } from "@/lib/product-utils";
import { toBn } from "@/lib/format";

export default function ProductExplorer({ products, boxed = false }) {
  const [sortMode, setSortMode] = useState("default");

  if (products.length === 0) {
    return <EmptyState />;
  }

  const sorted = sortProducts(products, sortMode);
  const countText = `মোট ${toBn(products.length)}টি পণ্য দেখানো হচ্ছে`;

  return (
    <div className="space-y-4">
      {boxed && (
        <div className="flex justify-end rounded-2xl border border-base-300 bg-base-100 px-4 py-4">
          <SortSelect value={sortMode} onChange={setSortMode} />
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm">{countText}</p>
        {!boxed && <SortSelect value={sortMode} onChange={setSortMode} />}
      </div>

      <ProductGrid products={sorted} />
    </div>
  );
}
