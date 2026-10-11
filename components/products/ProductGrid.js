import ProductCard from "@/components/products/ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export function ProductGridSkeleton({ count = 6 }) {
  return (
    <div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      aria-busy="true"
      aria-label="লোড হচ্ছে…"
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="rounded-2xl border border-base-300 bg-base-100 p-4"
        >
          <div className="flex items-center gap-3">
            <div className="skeleton h-12 w-12 rounded-xl" />
            <div className="space-y-2">
              <div className="skeleton h-4 w-28 rounded" />
              <div className="skeleton h-3 w-16 rounded" />
            </div>
          </div>
          <div className="mt-3 flex items-end justify-between">
            <div className="space-y-2">
              <div className="skeleton h-3 w-14 rounded" />
              <div className="skeleton h-6 w-24 rounded" />
            </div>
            <div className="skeleton h-6 w-14 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
