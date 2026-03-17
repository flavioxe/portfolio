"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type Accordion05Item = {
  id: string;
  title: string;
  subtitle?: string;
  meta?: string;
  content: string | string[];
  allowTitleWrap?: boolean;
};

const defaultItems: Accordion05Item[] = [
  {
    id: "1",
    title: "Who am I?",
    content:
      "I’m Ali Imam — a designer and creative developer focused on building digital experiences that are minimal, meaningful, and timeless.",
  },
  {
    id: "2",
    title: "What do I design?",
    content:
      "I create clean, functional interfaces, brand systems, and digital products. My work blends simplicity with clarity and usability.",
  },
  {
    id: "3",
    title: "My design approach",
    content:
      "For me, design isn’t just visuals — it’s how something feels and works. I focus on clarity, detail, and storytelling in every project.",
  },
];

type Accordion05Props = {
  items?: Accordion05Item[];
  defaultValue?: string;
  compactTitles?: boolean;
};

export function Accordion05({
  items = defaultItems,
  defaultValue,
  compactTitles = false,
}: Accordion05Props) {
  const selected = defaultValue ?? items[0]?.id;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" defaultValue={selected} collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="last:border-b border-subtle">
            <AccordionTrigger className="group text-left pl-0 md:pl-2 text-foreground hover:no-underline cursor-pointer [&>svg]:hidden">
              <div className="flex w-full items-start gap-4 md:gap-6">
                <p className="text-xs text-muted mt-1 min-w-20">{item.meta ?? item.id}</p>
                <div className="flex flex-1 flex-col md:flex-row md:items-baseline md:gap-2 min-w-0">
                  <h3
                    className={cn(
                      "uppercase tracking-tight",
                      item.allowTitleWrap
                        ? "leading-tight whitespace-normal break-words"
                        : "leading-none whitespace-nowrap truncate",
                      compactTitles ? "text-xl md:text-3xl" : "text-2xl md:text-4xl"
                    )}
                  >
                    {item.title}
                  </h3>
                  {item.subtitle ? (
                    <span className="text-[9px] md:text-[10px] text-muted font-mono uppercase tracking-wide whitespace-pre-line leading-tight">
                      {item.subtitle}
                    </span>
                  ) : null}
                </div>
                <PlusIcon className="h-4 w-4 mt-1 shrink-0 text-muted transition-transform duration-200 group-data-[state=open]:rotate-45" />
              </div>
            </AccordionTrigger>

            <AccordionContent className="text-muted pb-6 pl-24 md:pl-28">
              {Array.isArray(item.content) ? (
                <ul className="list-disc pl-4 space-y-2">
                  {item.content.map((line, idx) => (
                    <li key={cn(item.id, String(idx))}>{line}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.content}</p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}