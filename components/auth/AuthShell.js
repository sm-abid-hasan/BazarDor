import Link from "next/link";

export default function AuthShell({ title, subtitle, children }) {
  return (
    <div className="mx-auto flex max-w-md flex-col gap-6 px-4 py-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold leading-8">{title}</h1>
        <p className="text-sm">{subtitle}</p>
      </header>

      <div className="rounded-2xl border border-base-300 bg-base-100 p-6">
        {children}
      </div>

      <Link href="/" className="text-sm hover:text-primary">
        ← হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}


export function FormSkeleton({ fields = 2 }) {
  return (
    <div className="space-y-4" aria-busy="true">
      {Array.from({ length: fields }).map((_, i) => (
        <div key={i} className="space-y-2">
          <div className="skeleton h-4 w-20 rounded" />
          <div className="skeleton h-10 w-full rounded-lg" />
        </div>
      ))}
      <div className="skeleton h-10 w-full rounded-lg" />
    </div>
  );
}
