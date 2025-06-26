import React, { useState } from 'react';
import JournalNavbar from '@/components/layout/JournalNavbar';
import { Card, CardContent } from '@/components/ui/card';
import ChatArea from '@/components/companion/ChatArea';
import ChatInput from '@/components/companion/ChatInput';
import PromptSuggestions from '@/components/companion/PromptSuggestions';
import inwardAlways from '@/components/layout/inward-always.png';
import axios from 'axios';

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
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage: Message = { from: 'user', text: input };
    setMessages((prev: Message[]) => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    try {
      // Build message history for LLM
      const history = [
        { role: 'system', content: 'You are a compassionate AI counselor. Respond with empathy and support.' },
        ...messages.map((m) => ({ role: m.from === 'user' ? 'user' : 'assistant', content: m.text })),
        { role: 'user', content: input },
      ];
      const res = await axios.post('/api/ai/chat', { messages: history });
      const aiText = res.data.message?.content || res.data.message || 'Sorry, I could not respond.';
      setMessages((prev: Message[]) => [...prev, { from: 'ai', text: aiText }]);
    } catch (err) {
      setMessages((prev: Message[]) => [...prev, { from: 'ai', text: 'Sorry, there was an error connecting to the AI.' }]);
    } finally {
      setLoading(false);
    }
  };

  const prompts = [
    'Help me reflect on today.',
    'Give me a quote to lift my mood.',
    'What should I focus on this week?',
    'How can I improve my mental health?',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-beige">
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
                  disabled={loading}
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