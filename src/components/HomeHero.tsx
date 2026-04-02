"use client";

import { useState } from "react";
import TemplateStrip from "@/components/TemplateStrip";
import ClientGridCollageWrapper from "@/components/ClientGridCollageWrapper";

interface Template {
  rows: number;
  cols: number;
  aspectW: number;
  aspectH: number;
  gap: number;
}

export default function HomeHero() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | undefined>(undefined);

  return (
    <>
      {/* Template quick-select strip */}
      <div className="pb-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2.5">
            Pick a template to get started
          </p>
          <TemplateStrip
            onSelect={(t) => setSelectedTemplate({ ...t })}
          />
        </div>
      </div>

      {/* Collage tool */}
      <div className="pt-2 pb-8">
        <ClientGridCollageWrapper initialTemplate={selectedTemplate} />
      </div>
    </>
  );
}
