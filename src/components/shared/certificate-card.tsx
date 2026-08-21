import Link from "next/link";
import { Award, ArrowUpRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Certificate } from "@/types";

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <Link href={`/certificates/${certificate.id}`} className="group block h-full">
      <Card className="h-full transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:ring-foreground/20">
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
        <div className="mt-auto flex justify-end px-4 pb-4">
          <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </Card>
    </Link>
  );
}
