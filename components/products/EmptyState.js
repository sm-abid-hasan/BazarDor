import Link from "next/link";
import { btnPrimary } from "@/components/ui/button-classes";

export default function EmptyState({
  title = "কোনো পণ্য পাওয়া যায়নি",
  message = "আপনি যে পাতাটি খুঁজছেন তা হয়তো নেই বা সরিয়ে ফেলা হয়েছে।",
}) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-base-300 bg-base-100 px-6 py-14 text-center">
      <p className="text-5xl" aria-hidden="true">
        🛒
      </p>
      <p className="mt-3 text-4xl font-bold text-primary">৪০৪</p>
      <h2 className="mt-2 text-xl font-bold">{title}</h2>
      <p className="mt-1 max-w-md text-sm text-base-content/70">{message}</p>
      <Link href="/" className={`${btnPrimary} mt-6`}>
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}
