"use client";

import { btnPrimary } from "@/components/ui/button-classes";

export default function GlobalError({ reset }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <div className="flex flex-col items-center rounded-2xl border border-base-300 bg-base-100 px-6 py-14 text-center">
        <p className="text-5xl" aria-hidden="true">
          ⚠️
        </p>
        <h2 className="mt-3 text-xl font-bold">কিছু একটা সমস্যা হয়েছে</h2>
        <p className="mt-1 max-w-md text-sm text-base-content/70">
          ডেটা লোড করা যায়নি। ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করুন।
        </p>
        <button type="button" onClick={() => reset()} className={`${btnPrimary} mt-6`}>
          আবার চেষ্টা করুন
        </button>
      </div>
    </div>
  );
}
