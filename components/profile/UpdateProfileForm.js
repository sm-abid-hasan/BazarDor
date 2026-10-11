"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import FormField from "@/components/auth/FormField";
import { btnPrimary } from "@/components/ui/button-classes";
import { updateUser } from "@/lib/auth-client";

export default function UpdateProfileForm({ currentName }) {
  const router = useRouter();
  const [name, setName] = useState(currentName);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!name.trim()) {
      const message = "নাম খালি রাখা যাবে না।";
      setError(message);
      toast.error(message);
      return;
    }

    setLoading(true);
    const { error: updateError } = await updateUser({ name: name.trim() });
    setLoading(false);

    if (updateError) {
      const message = "তথ্য আপডেট করা যায়নি। আবার চেষ্টা করুন।";
      setError(message);
      toast.error(message);
      return;
    }

    toast.success("তথ্য সফলভাবে আপডেট হয়েছে!");
    router.push("/profile");
    router.refresh();
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

      {error && (
        <p role="alert" className="text-sm text-error">
          {error}
        </p>
      )}

      <button type="submit" className={`${btnPrimary} w-full`} disabled={loading}>
        {loading && <span className="loading loading-spinner loading-xs" />}
        তথ্য আপডেট করুন
      </button>
    </form>
  );
}
