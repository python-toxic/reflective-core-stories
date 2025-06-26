import React, { useRef } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  disabled?: boolean;
}

const ChatInput = ({ value, onChange, onSend, onKeyDown, disabled }: ChatInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input after send
  React.useEffect(() => {
    if (!disabled && inputRef.current) {
      inputRef.current.focus();
    }
  }, [disabled]);

  return (
    <div className="flex items-center gap-3 mt-6 py-2 bg-transparent">
      <Input
        ref={inputRef}
        type="text"
        placeholder="Type your thoughts..."
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
        className="flex-1 h-12 text-lg font-canela rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.18)] focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <Button 
        onClick={onSend}
        disabled={disabled}
        className="h-12 px-6 text-lg font-canela rounded-full bg-brand-crimson hover:bg-brand-crimson-dark text-white shadow-lg transition-all duration-300">
        {disabled ? '...' : 'Send'}
      </Button>
    </div>
  );
};

export default ChatInput;
