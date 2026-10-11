import EmptyState from "@/components/products/EmptyState";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <EmptyState
        title="পাতাটি খুঁজে পাওয়া যায়নি"
        message="আপনি যে ঠিকানাটি খুলতে চেয়েছেন সেটি ভুল অথবা এখন আর নেই।"
      />
    </div>
  );
}
