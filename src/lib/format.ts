import type { ExperiencePeriod } from "@/types";

const monthYearFormatter = new Intl.DateTimeFormat("de-DE", {
  month: "short",
  year: "numeric",
});

export function formatMonthYear(value: string): string {
  if (value.toLowerCase() === "present" || value.toLowerCase() === "heute") {
    return "heute";
  }

  const [year, month] = value.split("-").map(Number);
  if (!year || !month) return value;

  return monthYearFormatter.format(new Date(year, month - 1));
}

export function formatPeriod(period: ExperiencePeriod): string {
  return `${formatMonthYear(period.start)} – ${formatMonthYear(period.end)}`;
}
