"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import FormField from "@/components/auth/FormField";
import SocialButtons from "@/components/auth/SocialButtons";
import { btnPrimary } from "@/components/ui/button-classes";
import { signUp } from "@/lib/auth-client";
import { authErrorMessage, isValidEmail } from "@/lib/auth-messages";

export default function SignUpForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function showError(message) {
    setError(message);
    toast.error(message);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    if (!name.trim()) return showError("আপনার নাম লিখুন।");
    if (!email.trim()) return showError("আপনার ইমেইল লিখুন।");
    if (!isValidEmail(email.trim())) return showError("সঠিক ইমেইল লিখুন।");
    if (password.length < 8) return showError("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।");


    setLoading(true);
    const { error: authError } = await signUp.email({
      name: name.trim(),
      email: email.trim(),
      password,
    });
    setLoading(false);

    if (authError) {
      return showError(authErrorMessage(authError, "অ্যাকাউন্ট তৈরি করা যায়নি।"));
    }

    toast.success("অ্যাকাউন্ট তৈরি হয়েছে! এখন সাইন ইন করুন।");
    router.push("/signin");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <FormField
        label="নাম"
        id="name"
        value={name}
        onChange={setName}
        placeholder="আপনার নাম"
        autoComplete="name"
        disabled={loading}
      />
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
        placeholder="কমপক্ষে ৮ অক্ষর"
        autoComplete="new-password"
        disabled={loading}
      />

      {error && (
        <p role="alert" className="text-sm text-error">
          {error}
        </p>
      )}

      <button type="submit" className={`${btnPrimary} w-full`} disabled={loading}>
        {loading && <span className="loading loading-spinner loading-xs" />}
        অ্যাকাউন্ট তৈরি করুন
      </button>

      <div className="flex items-center gap-4 text-xs">
        <span className="h-px flex-1 bg-base-300" />
        অথবা
        <span className="h-px flex-1 bg-base-300" />
      </div>

      <SocialButtons callbackURL="/" />

      <p className="text-center text-sm">
        অ্যাকাউন্ট আছে?{" "}
        <Link href="/signin" className="font-semibold text-primary hover:underline">
          সাইন ইন করুন
        </Link>
      </p>
    </form>
  );
}
