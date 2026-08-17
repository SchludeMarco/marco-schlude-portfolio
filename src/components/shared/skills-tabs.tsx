"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SkillCard } from "@/components/shared/skill-card";
import { getSkillsByCategory } from "@/data/skills";
import type { SkillCategory } from "@/types";

const categoryOrder: SkillCategory[] = [
  "ERP",
  "Datenbanken",
  "Backend",
  "Frontend",
  "KI",
  "DevOps",
];

export function SkillsTabs() {
  const shouldReduceMotion = useReducedMotion();
  const grouped = getSkillsByCategory();
  const categories = categoryOrder.filter((category) => grouped[category]?.length);

  return (
    <Tabs defaultValue={categories[0]} className="gap-6">
      <TabsList className="h-auto flex-wrap justify-start gap-1">
        {categories.map((category) => (
          <TabsTrigger key={category} value={category}>
            {category}
          </TabsTrigger>
        ))}
      </TabsList>

      {categories.map((category) => (
        <TabsContent key={category} value={category}>
          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {grouped[category].map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </motion.div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
