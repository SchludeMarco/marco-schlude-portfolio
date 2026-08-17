"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send } from "lucide-react";
import { askMarcoEntries, findAskMarcoAnswer } from "@/data/ask-marco";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function AskMarcoClient() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [asked, setAsked] = useState(false);

  function ask(question: string) {
    if (!question.trim()) return;
    const match = findAskMarcoAnswer(question);
    setAnswer(
      match?.answer ??
        "Dazu habe ich noch keine Antwort. Frag mich gern etwas zu ERP, KI, Skills, Projekten, Zertifikaten oder Verfügbarkeit."
    );
    setAsked(true);
  }

  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <div className="flex gap-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && ask(query)}
          placeholder="z.B. 'Welche ERP-Erfahrung hat Marco?'"
        />
        <Button onClick={() => ask(query)} aria-label="Frage stellen">
          <Send className="size-4" />
        </Button>
      </div>

      <AnimatePresence mode="wait">
        {asked && (
          <motion.div
            key={answer}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card>
              <CardContent className="flex items-start gap-3">
                <Bot className="mt-0.5 size-4 shrink-0 text-brand" />
                <p className="text-sm">{answer}</p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <p className="text-sm text-muted-foreground">Beispiel-Fragen:</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {askMarcoEntries.map((entry) => (
            <li key={entry.id}>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setQuery(entry.question);
                  ask(entry.question);
                }}
              >
                {entry.question}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
