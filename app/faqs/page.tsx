"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function FaqPage() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is Easy UI 100% free and open-source?</AccordionTrigger>
          <AccordionContent>
            Yes, all our templates are completely free and open-source.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I use the Easy UI templates?</AccordionTrigger>
          <AccordionContent>
            Browse and select a template, download it, or clone it from our GitHub repository, and start using it.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What tech stack are these templates built with and how?</AccordionTrigger>
          <AccordionContent>
          Our templates are built with Next.js, React, MagicUI, ShadCNUI, Tailwind CSS, and Framer Motion, ensuring a modern, responsive, and seamless user experience.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  