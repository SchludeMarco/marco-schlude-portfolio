import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function AiDisclosureNote({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mb-6 flex max-w-2xl items-start gap-2.5 rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground",
        className
      )}
    >
      <Info className="mt-0.5 size-4 shrink-0 text-brand" />
      <p>
        Automatisiertes System gemäß Art. 50 EU AI Act: Du sprichst hier nicht
        mit Marco persönlich. Die Antworten stammen aktuell aus vordefinierten
        Daten, nicht aus einem Live-Sprachmodell. Deine Eingaben werden nicht
        gespeichert oder an Dritte übertragen.
      </p>
    </div>
  );
}
