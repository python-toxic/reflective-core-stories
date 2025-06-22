import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

const ChatInput = ({ value, onChange, onSend, onKeyDown }: ChatInputProps) => {
  return (
    <div className="flex items-center gap-3 mt-6 py-2 bg-transparent">
      <Input
        type="text"
        placeholder="Type your thoughts..."
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="flex-1 h-12 text-lg font-canela rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.18)] focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <Button 
        onClick={onSend}
        className="h-12 px-6 text-lg font-canela rounded-full bg-brand-crimson hover:bg-brand-crimson-dark text-white shadow-lg transition-all duration-300">
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
