"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
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
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  // shouldReduceMotion differs between SSR and the client's first render
  // (see Reveal/StaggerGroup) — only honor it once mounted, so hydration
  // sees the same animated markup the server sent.
  const reduceMotion = mounted && shouldReduceMotion;
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
            initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
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
