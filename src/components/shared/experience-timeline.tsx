"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { formatPeriod } from "@/lib/format";
import type { Experience } from "@/types";

const easeOut = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  // shouldReduceMotion differs between SSR and the client's first render
  // (see Reveal/StaggerGroup) — only honor it once mounted, so hydration
  // sees the same animated markup the server sent.
  const reduceMotion = mounted && shouldReduceMotion;

  return (
    <motion.ol
      className="flex flex-col gap-10"
      variants={reduceMotion ? undefined : containerVariants}
      initial={reduceMotion ? undefined : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{ once: true, margin: "-60px" }}
    >
      {experiences.map((experience) => (
        <motion.li
          key={experience.id}
          className="relative border-l border-border pl-6"
          variants={reduceMotion ? undefined : itemVariants}
        >
          <span className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-brand" />

          <p className="text-xs text-muted-foreground">
            {formatPeriod(experience.period)}
          </p>
          <h3 className="mt-1 text-lg font-medium">{experience.role}</h3>
          <p className="text-sm text-muted-foreground">
            {experience.company}
            {experience.location ? ` · ${experience.location}` : ""}
          </p>

          <p className="mt-3 text-sm">{experience.summary}</p>

          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {experience.tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>

          {experience.technologies && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {experience.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </motion.li>
      ))}
    </motion.ol>
  );
}
