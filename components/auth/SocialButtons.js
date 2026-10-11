"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { GitHubIcon, GoogleIcon } from "@/components/ui/Icons";
import { btnSocial } from "@/components/ui/button-classes";
import { signIn } from "@/lib/auth-client";

export default function SocialButtons({ callbackURL = "/" }) {
  const [loadingProvider, setLoadingProvider] = useState(null);

  async function handleSocialLogin(provider, name) {
    setLoadingProvider(provider);
    const { error } = await signIn.social({ provider, callbackURL });

    if (error) {
      toast.error(`${name} দিয়ে সাইন ইন করা যায়নি। আবার চেষ্টা করুন।`);
      setLoadingProvider(null);
    }
  }

  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <button
        type="button"
        className="flex flex-col w-full items-center justify-center rounded-md border border-base-300 bg-base-100 px-2 py-2 font-medium shadow-sm transition-colors hover:bg-base-200"
        disabled={loadingProvider !== null}
        onClick={() => handleSocialLogin("google", "Google")}
      >
        {loadingProvider === "google" ? (
          <span className="loading loading-spinner loading-xs" />
        ) : (
          <GoogleIcon className="h-4 w-4" />
        )}
        Google দিয়ে চালিয়ে যান
      </button>

      <button
        type="button"
        className="flex flex-col w-full items-center justify-center rounded-md border border-base-300 bg-base-100 px-2 py-2 font-medium shadow-sm transition-colors hover:bg-base-200"
        disabled={loadingProvider !== null}
        onClick={() => handleSocialLogin("github", "GitHub")}
      >
        {loadingProvider === "github" ? (
          <span className="loading loading-spinner loading-xs" />
        ) : (
          <GitHubIcon className="h-4 w-4" />
        )}
        GitHub দিয়ে চালিয়ে যান
      </button>
    </div>
  );
}
