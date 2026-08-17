import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Skill } from "@/types";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Card className="h-full">
      <CardHeader className="gap-1">
        <div className="flex items-center justify-between gap-2">
          <CardTitle>{skill.name}</CardTitle>
          <span className="text-xs whitespace-nowrap text-muted-foreground">
            {skill.experienceYears} {skill.experienceYears === 1 ? "Jahr" : "Jahre"}
          </span>
        </div>
        <p className="text-xs text-muted-foreground">{skill.level}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">{skill.description}</p>
        <Progress value={(skill.levelScore / 5) * 100} />
      </CardContent>
    </Card>
  );
}
