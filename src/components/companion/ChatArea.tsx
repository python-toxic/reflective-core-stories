import React, { useEffect, useRef } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import inwardAlways from '@/components/layout/inward-always.png';

interface Message {
  from: 'ai' | 'user';
  text: string;
}

interface ChatAreaProps {
  messages: Message[];
}

const ChatArea = ({ messages }: ChatAreaProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <ScrollArea 
      className="flex-1 min-h-0 rounded-xl border border-champagne/30 bg-white/10 shadow-inner relative overflow-hidden backdrop-blur-lg"
    >
      {/* Background with gradient and vignette */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15] z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(80,0,20,0.2))',
          boxShadow: 'inset 0 0 15vw 5vw rgba(0,0,0,0.5)',
        }}
      />
      
      <div className="space-y-10 p-10 relative z-10">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={cn(
              "flex animate-in fade-in slide-in-from-bottom duration-300",
              msg.from === "user" ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "max-w-[80%] p-8 rounded-2xl font-canela text-xl leading-relaxed font-medium",
                "transition-all duration-300 ease-in-out",
                "border border-gradient-to-r from-champagne to-blush-gold",
                msg.from === "ai" 
                  ? "bg-white/90 text-warm-gray rounded-tl-sm shadow-[0_10px_40px_rgba(0,0,0,0.12)]" 
                  : "bg-blue-50/90 text-warm-gray rounded-tr-sm shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
              )}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
};
// const ChatArea = ({ messages }: ChatAreaProps) => {
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   return (
//     <ScrollArea 
//       className="flex-1 min-h-0 rounded-xl border border-champagne/30 bg-white/20 shadow-inner relative overflow-hidden"
//     >
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 pointer-events-none opacity-[0.15] z-0"
//         style={{
//           backgroundImage: `url(${inwardAlways})`,
//           backgroundSize: '85% auto',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           filter: 'brightness(1.4) contrast(0.9) saturate(1.2)',
//           transform: 'scale(1.05)',
//         }}
//       />
      
//       <div className="space-y-10 p-10 relative z-10">
//         {messages.map((msg, idx) => (
//           <div
//             key={idx}
//             className={cn(
//               "flex animate-in fade-in slide-in-from-bottom duration-300",
//               msg.from === "user" ? "justify-end" : "justify-start"
//             )}
//           >
//             <div
//               className={cn(
//                 "max-w-[80%] p-8 rounded-2xl font-canela text-xl leading-relaxed font-medium",
//                 "transition-all duration-300 ease-in-out",
//                 "border border-champagne/20",
//                 msg.from === "ai" 
//                   ? "bg-white/90 text-warm-gray rounded-tl-sm shadow-[0_10px_40px_rgba(0,0,0,0.12)]" 
//                   : "bg-blue-50/90 text-warm-gray rounded-tr-sm shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
//               )}
//             >
//               {msg.text}
//             </div>
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>
//     </ScrollArea>
//   );
// };

export default ChatArea;
