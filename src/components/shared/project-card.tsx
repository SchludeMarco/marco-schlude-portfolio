import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <Card className="h-full transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:ring-foreground/20">
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg">{project.title}</CardTitle>
            {project.featured && <Badge>Highlight</Badge>}
          </div>
          <CardDescription>{project.shortDescription}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between pt-2">
            <span className="text-xs text-muted-foreground">
              {project.duration ?? project.category}
            </span>
            <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
