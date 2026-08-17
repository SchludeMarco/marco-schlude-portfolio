import { Badge } from "@/components/ui/badge";
import type { Availability } from "@/types";
import { cn } from "@/lib/utils";

const statusDot: Record<Availability["status"], string> = {
  verfuegbar: "bg-emerald-500",
  "auf-anfrage": "bg-brand",
  "nicht-verfuegbar": "bg-muted-foreground",
};

export function AvailabilityBadge({ availability }: { availability: Availability }) {
  return (
    <Badge variant="outline" className="gap-1.5 py-1">
      <span className={cn("size-1.5 rounded-full", statusDot[availability.status])} />
      {availability.label}
    </Badge>
  );
}
