"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { btnDanger } from "@/components/ui/button-classes";
import { signOut } from "@/lib/auth-client";

export default function SignOutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSignOut() {
    setLoading(true);
    const { error } = await signOut();
    setLoading(false);

    if (error) {
      toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
      return;
    }
    toast.success("সফলভাবে সাইন আউট হয়েছে");
    router.push("/");
    router.refresh();
  }

  return (
    <button type="button" onClick={handleSignOut} disabled={loading} className={btnDanger}>
      {loading ? <span className="loading loading-spinner loading-xs" /> : "↩"}
      সাইন আউট
    </button>
  );
}
