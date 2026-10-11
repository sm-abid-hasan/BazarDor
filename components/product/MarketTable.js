import { formatTaka } from "@/lib/format";

export default function MarketTable({ stats }) {
  if (!stats) return null;

  const headClass = "px-4 py-3 text-sm font-bold";

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">বাজারভিত্তিক আজকের দাম</h2>

      <div className="overflow-x-auto rounded-2xl border border-base-300 bg-base-100">
        <table className="w-full min-w-[620px] text-left text-sm">
          <thead>
            <tr>
              <th className={headClass}>বাজার</th>
              <th className={headClass}>বিভাগ</th>
              <th className={`${headClass} text-right`}>সর্বনিম্ন</th>
              <th className={`${headClass} text-right`}>সর্বাধিক</th>
              <th className={`${headClass} text-right`}>গড়</th>
            </tr>
          </thead>
          <tbody>
            {stats.rows.map((row, index) => {
              const emphasis = row.market === stats.cheapestMarket;
              return (
                <tr
                  key={`${row.market}-${index}`}
                  className={`${index % 2 === 1 ? "bg-base-200" : ""} ${
                    emphasis ? "font-semibold" : ""
                  }`}
                >
                  <td className="px-4 py-3">{row.market}</td>
                  <td className="px-4 py-3">{row.division}</td>
                  <td className="px-4 py-3 text-right">{formatTaka(row.min)}</td>
                  <td className="px-4 py-3 text-right">{formatTaka(row.max)}</td>
                  <td className="px-4 py-3 text-right font-semibold">
                    {formatTaka(row.avg)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
