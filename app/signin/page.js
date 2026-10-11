import { Suspense } from "react";
import { redirect } from "next/navigation";
import AuthShell, { FormSkeleton } from "@/components/auth/AuthShell";
import SignInForm from "@/components/auth/SignInForm";
import { getSession } from "@/lib/session";

export const metadata = { title: "সাইন ইন — বাজার দর" };

export default async function SignInPage() {
  const session = await getSession();
  if (session) redirect("/");

  return (
    <AuthShell
      title="সাইন ইন"
      subtitle="বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে সাইন ইন করুন।"
    >
      <Suspense fallback={<FormSkeleton fields={2} />}>
        <SignInForm />
      </Suspense>
    </AuthShell>
  );
}
