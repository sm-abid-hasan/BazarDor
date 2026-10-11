import { CHANGE_STYLES } from "@/lib/change-style";
import { formatPercent } from "@/lib/format";

export default function PriceBadge({ dir, pct, className = "" }) {
  const style = CHANGE_STYLES[dir] || CHANGE_STYLES.flat;
  const label =
    dir === "up" ? "দাম বেড়েছে" : dir === "down" ? "দাম কমেছে" : "দাম অপরিবর্তিত";

  return (
    <span
      title={label}
      className={`inline-flex h-6 items-center gap-1 rounded-full bg-base-200 px-2 text-xs font-semibold ${style.text} ${className}`}
    >
      <span aria-hidden="true">{style.arrow}</span>
      <span>{formatPercent(pct)}</span>
      <span className="sr-only">{label}</span>
    </span>
  );
}
