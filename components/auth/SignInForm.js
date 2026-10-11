"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import FormField from "@/components/auth/FormField";
import SocialButtons from "@/components/auth/SocialButtons";
import { btnPrimary } from "@/components/ui/button-classes";
import { signIn } from "@/lib/auth-client";
import { authErrorMessage, isValidEmail, safeRedirect } from "@/lib/auth-messages";

export default function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = safeRedirect(searchParams.get("redirect")); // where to go after login

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (searchParams.get("message") === "login-required") {
      toast.error("এই পাতা দেখতে আগে সাইন ইন করুন।", { id: "login-required" });
    }
  }, [searchParams]);

  function showError(message) {
    setError(message);
    toast.error(message);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) return showError("ইমেইল ও পাসওয়ার্ড দুটোই লিখুন।");
    if (!isValidEmail(email.trim())) return showError("সঠিক ইমেইল লিখুন।");

    setLoading(true);
    const { error: authError } = await signIn.email({
      email: email.trim(),
      password,
    });
    setLoading(false);

    if (authError) {
      return showError(authErrorMessage(authError, "ইমেইল বা পাসওয়ার্ড ভুল হয়েছে।"));
    }

  
    toast.success("সফলভাবে সাইন ইন হয়েছে!");
    router.push(redirectTo);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <FormField
        label="ইমেইল"
        id="email"
        type="email"
        value={email}
        onChange={setEmail}
        placeholder="you@example.com"
        autoComplete="email"
        disabled={loading}
      />
      <FormField
        label="পাসওয়ার্ড"
        id="password"
        type="password"
        value={password}
        onChange={setPassword}
        placeholder="আপনার পাসওয়ার্ড"
        autoComplete="current-password"
        disabled={loading}
      />

      {error && (
        <p role="alert" className="text-sm text-error">
          {error}
        </p>
      )}

      <button type="submit" className={`${btnPrimary} w-full`} disabled={loading}>
        {loading && <span className="loading loading-spinner loading-xs" />}
        সাইন ইন
      </button>

      <div className="flex items-center gap-4 text-xs">
        <span className="h-px flex-1 bg-base-300" />
        অথবা
        <span className="h-px flex-1 bg-base-300" />
      </div>

      <SocialButtons callbackURL={redirectTo} />

      <p className="text-center text-sm">
        অ্যাকাউন্ট নেই?{" "}
        <Link href="/signup" className="font-semibold text-primary hover:underline">
          সাইন আপ করুন
        </Link>
      </p>
    </form>
  );
}
