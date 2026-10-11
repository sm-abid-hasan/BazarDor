import { formatTaka } from "@/lib/format";

function StatCard({ label, value, caption, valueClass = "" }) {
  return (
    <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
      <p className="text-xs">{label}</p>
      <p className={`text-2xl font-bold leading-8 ${valueClass}`}>{value}</p>
      <p className="text-xs">{caption}</p>
    </div>
  );
}

function CompareCard({ label, value }) {
  return (
    <div className="rounded-2xl bg-base-200 p-3">
      <p className="text-xs">{label}</p>
      <p className="text-lg font-bold leading-7">{formatTaka(value)}</p>
    </div>
  );
}

export default function PriceSummary({ stats, product }) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">দামের সারসংক্ষেপ</h2>

      {stats ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <StatCard
            label="সর্বনিম্ন দাম"
            value={formatTaka(stats.min.value)}
            caption={`সবচেয়ে কম দামের বাজার: ${stats.min.market}`}
            valueClass="text-success"
          />
          <StatCard
            label="সর্বোচ্চ দাম"
            value={formatTaka(stats.max.value)}
            caption={`সবচেয়ে বেশি দামের বাজার: ${stats.max.market}`}
            valueClass="text-error"
          />
          <StatCard
            label="গড় দাম"
            value={formatTaka(stats.average)}
            caption="সব বাজারের গড়"
            valueClass="text-primary"
          />
        </div>
      ) : (
        <p className="text-sm">এই পণ্যের বাজারভিত্তিক দাম এখনো পাওয়া যায়নি।</p>
      )}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <CompareCard label="গতকালের দাম" value={product.yesterday} />
        <CompareCard label="গত সপ্তাহের দাম" value={product.lastWeek} />
        <CompareCard label="গত মাসের দাম" value={product.lastMonth} />
      </div>
    </div>
  );
}
