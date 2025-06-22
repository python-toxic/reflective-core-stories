import React from 'react';
import { Card } from "@/components/ui/card";

interface PromptSuggestionsProps {
  prompts: string[];
  onPromptClick: (prompt: string) => void;
}

const PromptSuggestions = ({ prompts, onPromptClick }: PromptSuggestionsProps) => {
  return (
    <Card className="w-80 shrink-0 rounded-2xl bg-white/60 border border-champagne/30 shadow-[0_12px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-md transition-shadow duration-300 ease-out p-5 space-y-4">
      <h2
        className="text-2xl font-canela font-bold text-gray-800 mb-2"
        style={{ 
          color: "hsl(var(--brand-crimson-dark))",
          textShadow: "0 4px 12px rgba(0,0,0,0.25)"
        }}>
        Try These Prompts
      </h2>
      <ul className="space-y-3 animate-fade-in">
        {prompts.map((prompt, idx) => (
          <li
            key={idx}
            onClick={() => onPromptClick(prompt)}
            className="text-sm text-gray-700 bg-white/70 rounded-lg px-3 py-2 shadow transition-transform duration-300 hover:scale-[1.02] hover:shadow-md cursor-pointer"
          >
            {prompt}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default PromptSuggestions;
