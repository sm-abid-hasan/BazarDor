import Link from "next/link";
import { notFound } from "next/navigation";
import ProductHeader from "@/components/product/ProductHeader";
import PriceSummary from "@/components/product/PriceSummary";
import MarketTable from "@/components/product/MarketTable";
import { ChevronRightIcon } from "@/components/ui/Icons";
import { btnGhost, btnOutline } from "@/components/ui/button-classes";
import { getProductBySlug } from "@/lib/api";
import { getChange, getPriceStats } from "@/lib/product-utils";
import { requireSession } from "@/lib/session";

export default async function ProductDetailsPage({ params }) {
  const { slug } = await params;
  await requireSession(`/product/${slug}`);

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const change = getChange(product);
  const stats = getPriceStats(product.markets);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6">
      <nav aria-label="breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-primary">
              হোম
            </Link>
          </li>
          <ChevronRightIcon />
          <li>
            <Link href={`/category/${product.category}`} className="hover:text-primary">
              {product.categoryNameBn}
            </Link>
          </li>
          <ChevronRightIcon />
          <li aria-current="page" className="font-medium">
            {product.nameBn}
          </li>
        </ol>
      </nav>

      <ProductHeader product={product} change={change} />

      <section className="space-y-6 rounded-2xl border border-base-300 bg-base-100 p-5">
        <PriceSummary stats={stats} product={product} />
        <MarketTable stats={stats} />
      </section>

      <div className="flex flex-wrap gap-2">
        <Link href={`/category/${product.category}`} className={btnOutline}>
          ← {product.categoryNameBn} ক্যাটাগরিতে ফিরে যান
        </Link>
        <Link href="/" className={btnGhost}>
          হোম পেজ
        </Link>
      </div>
    </div>
  );
}
