import { Suspense } from "react";
import { Hind_Siliguri } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header, { HeaderSkeleton } from "@/components/layout/Header";
import Ticker, { TickerSkeleton } from "@/components/layout/Ticker";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind",
  display: "swap",
});

export const metadata = {
  title: "বাজার দর — আজকের দামের তালিকা",
  description:
    "চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার আজকের দাম, বাজারভিত্তিক তুলনা ও দামের পরিবর্তন এক জায়গায়।",
  keywords: ["বাজার দর", "আজকের দাম", "ঢাকা বাজার", "মূল্য তালিকা", "BazarDor"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" data-theme="bazar" className={hindSiliguri.variable}>
      <body className="flex min-h-screen flex-col bg-base-200 font-sans text-base-content antialiased">
        <Suspense fallback={<HeaderSkeleton />}>
          <Header />
        </Suspense>
        <Suspense fallback={<TickerSkeleton />}>
          <Ticker />
        </Suspense>

        <main className="flex-1 pb-12">{children}</main>

        <Footer />

        <Toaster
          position="top-center"
          toastOptions={{
            style: { fontFamily: "var(--font-hind), system-ui, sans-serif" },
          }}
        />
      </body>
    </html>
  );
}
