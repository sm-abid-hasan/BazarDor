import Link from "next/link";
import Avatar from "@/components/ui/Avatar";
import FormField from "@/components/auth/FormField";
import SignOutButton from "@/components/profile/SignOutButton";
import { btnPrimary } from "@/components/ui/button-classes";
import { requireSession } from "@/lib/session";

export const metadata = { title: "আমার প্রোফাইল — বাজার দর" };

export default async function ProfilePage() {
  const { user } = await requireSession("/profile");

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-6">
      <header>
        <h1 className="text-2xl font-bold leading-8">আমার প্রোফাইল</h1>
        <p className="text-sm">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
      </header>
      <section className="flex flex-col gap-4 rounded-2xl border border-base-300 bg-base-100 p-6 sm:flex-row sm:items-center">
        <Avatar user={user} className="h-20 w-20 text-3xl" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-xl font-semibold leading-7">{user.name}</p>
          <p className="truncate text-base">{user.email}</p>
        </div>
        <SignOutButton />
      </section>

      <section className="space-y-3 rounded-2xl border border-base-300 bg-base-100 p-6">
        <h2 className="text-lg font-semibold">তথ্য</h2>
        <div className="space-y-4">
          <FormField label="নাম" id="name" value={user.name} readOnly />
          <FormField label="ইমেইল" id="email" value={user.email} readOnly />
          <Link href="/profile/update" className={`${btnPrimary} w-full`}>
            আপডেট
          </Link>
        </div>
      </section>
    </div>
  );
}
