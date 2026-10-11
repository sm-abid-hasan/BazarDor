"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Avatar from "@/components/ui/Avatar";
import { signOut } from "@/lib/auth-client";

export default function UserMenu({ user }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    function handleEscape(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  async function handleSignOut() {
    setOpen(false);
    const { error } = await signOut();
    if (error) {
      toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
      return;
    }
    toast.success("সফলভাবে সাইন আউট হয়েছে");
    router.push("/");
    router.refresh();
  }

  const itemClass =
    "block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-base-200";

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="ব্যবহারকারী মেনু"
        className="rounded-2xl transition-opacity hover:opacity-90"
      >
        <Avatar user={user} className="h-9 w-9 text-base sm:h-10 sm:w-10" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-64 rounded-2xl border border-base-300 bg-base-100 p-2 shadow-lg"
        >
          <div className="border-b border-base-200 px-3 pb-2 pt-1">
            <p className="truncate text-sm font-semibold">{user.name}</p>
            <p className="truncate text-xs text-base-content/70">{user.email}</p>
          </div>

          <div className="pt-1">
            <Link href="/profile" role="menuitem" className={itemClass} onClick={() => setOpen(false)}>
              আমার প্রোফাইল
            </Link>
            <Link href="/profile/update" role="menuitem" className={itemClass} onClick={() => setOpen(false)}>
              তথ্য আপডেট করুন
            </Link>
            <button
              type="button"
              role="menuitem"
              onClick={handleSignOut}
              className={`${itemClass} text-error hover:bg-error/10`}
            >
              সাইন আউট
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
