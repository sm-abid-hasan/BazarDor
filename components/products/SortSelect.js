import { ChevronDownIcon } from "@/components/ui/Icons";

export const SORT_OPTIONS = [
  { value: "default", label: "ডিফল্ট" },
  { value: "asc", label: "দাম: কম থেকে বেশি" },
  { value: "desc", label: "দাম: বেশি থেকে কম" },
];

export default function SortSelect({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort-select" className="text-sm">
        সাজান
      </label>
      <div className="relative">
        <select
          id="sort-select"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-8 cursor-pointer appearance-none rounded-lg border border-base-content bg-base-100 py-0 pl-3 pr-8 text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-2.5 w-2.5 -translate-y-1/2" />
      </div>
    </div>
  );
}
