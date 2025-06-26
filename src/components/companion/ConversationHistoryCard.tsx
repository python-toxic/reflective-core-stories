// src/components/companion/ConversationHistoryCard.tsx

import React from 'react';
import { ChevronRight } from 'lucide-react'; // Icon for navigation

interface Conversation {
    id: string;
    title: string;
    date: string;
    time: string;
    snippet: string;
}

interface ConversationHistoryCardProps {
    conversation: Conversation;
    onClick: () => void;
}

const ConversationHistoryCard = ({ conversation, onClick }: ConversationHistoryCardProps) => {
    return (
        <div
            className="glass-card p-6 rounded-2xl bg-ivory/60 border border-champagne/40 cursor-pointer
                       flex items-center justify-between space-x-4
                       hover:bg-ivory/80 hover:border-blush-gold/60 transition-all duration-300 ease-in-out
                       shadow-sm hover:shadow-md" // Subtle shadow on hover
            onClick={onClick}
            role="button"
            tabIndex={0} // Make it keyboard focusable
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onClick();
                }
            }}
        >
            <div className="flex-grow">
                <h4 className="text-xl font-canela font-bold text-brand-navy mb-1 leading-tight">
                    {conversation.title}
                </h4>
                <p className="text-sm text-warm-gray/60 mb-2">
                    {conversation.date} at {conversation.time}
                </p>
                <p className="text-base text-warm-gray/80 line-clamp-2"> {/* Limit snippet to 2 lines */}
                    {conversation.snippet}
                </p>
            </div>
            <ChevronRight className="h-6 w-6 text-warm-gray/50 group-hover:text-blush-gold transition-colors" />
        </div>
    );
};

export default ConversationHistoryCard;