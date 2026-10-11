import Navbar from "@/components/layout/Navbar";
import { getCategories } from "@/lib/api";

export default async function Header() {
  let categories = [];
  try {
    categories = await getCategories();
  } catch (error) {
    console.error("Could not load categories:", error);
  }
  return <Navbar categories={categories} />;
}

export function HeaderSkeleton() {
  return (
    <div className="border-b border-base-300 bg-base-100">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-4">
        <div className="skeleton h-10 w-40 rounded-xl" />
        <div className="skeleton h-10 w-40 rounded-lg" />
      </div>
      <div className="border-t border-base-200">
        <div className="mx-auto flex max-w-6xl gap-2 px-4 py-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="skeleton h-8 w-16 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
