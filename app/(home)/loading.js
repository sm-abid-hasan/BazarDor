import { ProductGridSkeleton } from "@/components/products/ProductGrid";

export default function HomeLoading() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-6">
      <div className="skeleton h-72 w-full rounded-3xl md:h-64" />
      <div className="space-y-3">
        <div className="skeleton h-7 w-40 rounded" />
        <ProductGridSkeleton count={6} />
      </div>
      <div className="space-y-3">
        <div className="skeleton h-7 w-40 rounded" />
        <ProductGridSkeleton count={6} />
      </div>
    </div>
  );
}
