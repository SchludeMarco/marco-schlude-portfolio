import { Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Certificate } from "@/types";

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <Card className="h-full">
      <CardHeader className="gap-2">
        <div className="flex items-center justify-between gap-2">
          <Award className="size-4 text-brand" />
          <Badge variant="outline">{certificate.category}</Badge>
        </div>
        <CardTitle className="text-base">{certificate.title}</CardTitle>
        <CardDescription>{certificate.issuer}</CardDescription>
      </CardHeader>
      {certificate.description && (
        <div className="px-4 text-sm text-muted-foreground">
          {certificate.description}
        </div>
      )}
    </Card>
  );
}
