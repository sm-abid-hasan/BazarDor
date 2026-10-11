import Image from "next/image";
import BanglaDate from "@/components/layout/BanglaDate";
import { btnPrimary } from "@/components/ui/button-classes";
import { ALL_PRODUCTS_ID } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="overflow-hidden rounded-3xl border border-base-300 bg-base-100">
      <div className="flex flex-col items-center gap-6 px-4 py-8 sm:px-8 md:flex-row md:justify-between md:gap-8 md:py-10">
        <div className="flex max-w-xl flex-col items-start gap-2">

          <span className="inline-flex h-8 items-center rounded-full bg-primary/15 px-3 text-sm font-bold text-primary">
            <BanglaDate />
          </span>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            আজকের বাজারের দাম এক নজরে
          </h1>
          <p className="pb-2 text-base leading-6">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার আজকের দাম, বাজারভিত্তিক তুলনা ও
            দামের পরিবর্তন এক জায়গায়।
          </p>

          <a href={`#${ALL_PRODUCTS_ID}`} className={btnPrimary}>
            সব পণ্য দেখুন
          </a>
        </div>

        <Image
          src="/bazar-hero.png"
          alt="তাজা বাজারের ঝুড়ি"
          width={315}
          height={263}
          priority
          className="h-auto w-64 shrink-0 sm:w-72 md:w-80"
        />
      </div>
    </section>
  );
}
