import Link from "next/link";
import AuthShell from "@/components/auth/AuthShell";
import UpdateProfileForm from "@/components/profile/UpdateProfileForm";
import { requireSession } from "@/lib/session";

export const metadata = { title: "তথ্য আপডেট — বাজার দর" };

export default async function UpdateProfilePage() {
  const { user } = await requireSession("/profile/update");

  return (
    <AuthShell
      title="তথ্য আপডেট করুন"
      subtitle="আপনার নাম পরিবর্তন করে নিচের বাটনে ক্লিক করুন।"
    >
      <UpdateProfileForm currentName={user.name} />
      <p className="mt-4 text-center text-sm">
        <Link href="/profile" className="hover:text-primary">
          ← প্রোফাইলে ফিরে যান
        </Link>
      </p>
    </AuthShell>
  );
}
