import React, { useState } from 'react';
import JournalNavbar from '@/components/layout/JournalNavbar';
import { Card, CardContent } from '@/components/ui/card';
import ChatArea from '@/components/companion/ChatArea';
import ChatInput from '@/components/companion/ChatInput';
import PromptSuggestions from '@/components/companion/PromptSuggestions';
import inwardAlways from '@/components/layout/inward-always.png';

type Message = {
  from: 'ai' | 'user';
  text: string;
};

const AICompanion = () => {
  const [messages, setMessages] = useState<Message[]>(
    [
      { from: 'ai', text: 'Hello! How are you feeling today?' },
    ]
  );
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
    // Simulate AI response
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: 'ai', text: "I'm here for you. Let's talk more about that." },
      ]);
    }, 800);
  };

  const prompts = [
    'Help me reflect on today.',
    'Give me a quote to lift my mood.',
    'What should I focus on this week?',
    'How can I improve my mental health?',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <JournalNavbar />
      <div className="flex-1 flex items-center justify-center px-4 sm:px-10 lg:px-32 pt-20">
        <div className="flex items-center justify-center gap-12 animate-fade-in-up">
          {/* Chat Card */}
          <Card className="w-[1000px] h-[750px] rounded-2xl bg-white/40 border border-champagne/30 shadow-[0_12px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-md transition-shadow duration-300 ease-out flex flex-col relative overflow-hidden">
            <CardContent className="flex flex-col h-full pt-12 px-8">
              {/* Header with Badge */}
              <div className="flex flex-col items-center mb-6 relative">
                <div className="relative w-full flex flex-col items-center">
                  <h1
                    className="text-3xl font-canela font-bold text-gray-800 tracking-tight"
                    style={{ 
                      color: "hsl(var(--brand-crimson-dark))",
                      textShadow: "0 4px 12px rgba(0,0,0,0.25)"
                    }}
                  >
                    Your AI Companion
                  </h1>
                  <p className="text-base font-canela font-medium text-brand-navy text-center mt-3">
                    Here to talk, support, and uplift your mood.
                  </p>
                </div>
              </div>

              {/* Chat Container */}
              <div className="flex-1 flex flex-col min-h-0">
                <ChatArea messages={messages} />
                <ChatInput
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onSend={handleSend}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
              </div>
            </CardContent>
          </Card>

          <PromptSuggestions prompts={prompts} onPromptClick={setInput} />
        </div>
      </div>
    </div>
  );
};

export default AICompanion;
