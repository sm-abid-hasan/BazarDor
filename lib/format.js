import { BN_MONTHS, BN_WEEKDAYS } from "@/lib/constants";

const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function toBn(value) {
  return String(value).replace(/\d/g, (digit) => BN_DIGITS[Number(digit)]);
}

export function formatNumber(value) {
  const num = Number(value);
  const isWhole = Number.isInteger(num);
  const text = num.toLocaleString("en-US", {
    minimumFractionDigits: isWhole ? 0 : 2,
    maximumFractionDigits: 2,
  });
  return toBn(text);
}

export function formatTaka(value) {
  return `${formatNumber(value)} টাকা`;
}

export function formatPercent(value) {
  return `${toBn(Number(value).toFixed(1))}%`;
}

const UNIT_LABELS = {
  kg: "কেজি",
  kilogram: "কেজি",
  liter: "লিটার",
  litre: "লিটার",
  l: "লিটার",
  ltr: "লিটার",
  dozen: "ডজন",
  doz: "ডজন",
  piece: "পিস",
  pieces: "পিস",
  pcs: "পিস",
  pc: "পিস",
};

export function unitLabel(unit) {
  const key = String(unit || "").toLowerCase().trim();
  return UNIT_LABELS[key] || unit || "";
}

export function perUnit(unit) {
  return `প্রতি ${unitLabel(unit)}`;
}

export function banglaDate(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Dhaka",
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).formatToParts(date);

  const get = (type) => parts.find((p) => p.type === type)?.value;
  const weekday = BN_WEEKDAYS[get("weekday")];
  const month = BN_MONTHS[Number(get("month")) - 1];

  return `${weekday}, ${toBn(get("day"))} ${month}, ${toBn(get("year"))}`;
}
