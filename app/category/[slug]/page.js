import { notFound } from "next/navigation";
import ProductExplorer from "@/components/products/ProductExplorer";
import { getCategory, getProductsByCategory } from "@/lib/api";
import { toBn } from "@/lib/format";

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  const [category, products] = await Promise.all([
    getCategory(slug),
    getProductsByCategory(slug),
  ]);


  if (!category) notFound();

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6">
      <div className="flex items-center gap-3 rounded-2xl border border-base-300 bg-base-100 p-5">
        <span className="text-4xl" aria-hidden="true">
          {category.icon}
        </span>
        <div>
          <h1 className="text-2xl font-bold leading-8">{category.nameBn}</h1>
          <p className="text-sm">
            {toBn(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>
      <ProductExplorer products={products} boxed />
    </div>
  );
}
