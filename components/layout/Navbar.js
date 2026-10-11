"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BanglaDate from "@/components/layout/BanglaDate";
import UserMenu from "@/components/layout/UserMenu";
import { useSession } from "@/lib/auth-client";
import { btnGhost, btnPrimary } from "@/components/ui/button-classes";

export default function Navbar({ categories }) {
  const pathname = usePathname(); 
  const { data: session, isPending } = useSession();

  return (
    <header className="border-b border-base-300 bg-base-100">

      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-3 px-4">
        <Link href="/" className="flex min-w-0 items-center gap-2 rounded-xl">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-lg text-primary-content">
            🛒
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="text-xl font-bold">বাজার দর</span>
            <BanglaDate className="truncate text-xs font-bold text-primary" />
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          {isPending ? (
            <>
              <div className="skeleton h-9 w-16 rounded-lg sm:h-10 sm:w-20" />
              <div className="skeleton h-9 w-16 rounded-lg sm:h-10 sm:w-20" />
            </>
          ) : session ? (
            <UserMenu user={session.user} />
          ) : (
            <>
              <Link href="/signin" className={btnGhost}>
                সাইন ইন
              </Link>
              <Link href="/signup" className={btnPrimary}>
                সাইন আপ
              </Link>
            </>
          )}
        </div>
      </div>

      <nav aria-label="ক্যাটাগরি" className="border-t border-base-200">
        <ul className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 py-2">
          {categories.map((category) => {
            const href = `/category/${category.slug}`;
            const isActive = pathname === href;
            return (
              <li key={category.id} className="shrink-0">
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-flex h-8 items-center gap-1.5 rounded-lg px-3 text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-primary text-primary-content"
                      : "hover:bg-base-200"
                  }`}
                >
                  <span aria-hidden="true">{category.icon}</span>
                  {category.nameBn}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
