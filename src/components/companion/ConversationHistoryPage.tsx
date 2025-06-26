// src/pages/ConversationHistoryPage.tsx

import React from 'react';
import JournalNavbar from '@/components/layout/JournalNavbar';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component
import ConversationHistoryCard from '@/components/companion/ConversationHistoryCard'; // New component
import { useRouter } from 'next/router'; // Or your routing library

// Mock data for demonstration. In a real app, this would come from an API.
const mockConversations = [
    {
        id: 'conv1',
        title: 'Reflecting on a Challenging Day',
        date: 'October 26, 2023',
        time: '10:30 AM',
        snippet: 'Discussed overcoming a difficult work situation and finding resilience...',
        // In a real app, you'd store the full conversation content here or fetch it on click
    },
    {
        id: 'conv2',
        title: 'Exploring Gratitude and Small Joys',
        date: 'October 25, 2023',
        time: '03:15 PM',
        snippet: 'Focused on appreciating daily blessings and positive moments...',
    },
    {
        id: 'conv3',
        title: 'Navigating Uncertainty with Calm',
        date: 'October 24, 2023',
        time: '09:00 AM',
        snippet: 'Talked about strategies for managing anxiety about the future...',
    },
    {
        id: 'conv4',
        title: 'Setting Intentions for the Week Ahead',
        date: 'October 23, 2023',
        time: '07:45 PM',
        snippet: 'Planned actionable steps for personal growth and well-being...',
    },
];

const ConversationHistoryPage = () => {
    const router = useRouter();

    const handleStartNewConversation = () => {
        router.push('/companion'); // Navigate back to the main AI Companion chat page
    };

    return (
        <>
            <JournalNavbar />
            <main className="relative min-h-screen bg-ivory text-warm-gray font-canela flex items-center justify-center p-4 sm:p-8 overflow-hidden pt-24">
                {/* Vignette & decorative elements - consistent with other pages */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-blush-gold/10 via-transparent to-champagne/10" />
                <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 15vw 5vw hsl(var(--ivory))' }}></div>
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-champagne/20 rounded-full filter blur-3xl opacity-50 animate-pulse" />
                <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blush-gold/20 rounded-full filter blur-3xl opacity-50 animate-pulse [animation-delay:-4s]" />

                <div className="w-full max-w-4xl mx-auto animate-fade-in-up"> {/* Adjusted max-width for history list */}
                    <div className="glass-card p-8 rounded-2xl bg-ivory/60 border border-champagne/40 shadow-lg">
                        <h2 className="text-3xl font-canela font-bold text-brand-navy mb-6 text-center">Your Past Reflections</h2>
                        <p className="text-md text-warm-gray/80 mb-8 text-center">
                            Revisit your conversations with your AI Companion.
                        </p>

                        {mockConversations.length > 0 ? (
                            <div className="space-y-6">
                                {mockConversations.map(conv => (
                                    <ConversationHistoryCard
                                        key={conv.id}
                                        conversation={conv}
                                        onClick={() => router.push(`/companion/${conv.id}`)} // Example: navigate to a specific chat view
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-lg text-warm-gray/70 mb-6">No past conversations yet. Start your journey!</p>
                                <Button
                                    onClick={handleStartNewConversation}
                                    className="text-lg font-canela font-bold bg-brand-navy text-ivory
                                        hover:bg-brand-navy/90
                                        transition-shadow duration-300 ease-out
                                        shadow-[0_12px_32px_rgba(0,0,0,0.35)]
                                        hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)]
                                        focus-visible:shadow-[0_0_0_3px_rgba(255,215,160,0.5)]
                                        h-14 rounded-2xl px-8"
                                >
                                    Start Your First Conversation
                                </Button>
                            </div>
                        )}

                        {mockConversations.length > 0 && (
                            <div className="mt-12 text-center">
                                <Button
                                    onClick={handleStartNewConversation}
                                    className="text-lg font-canela font-bold bg-brand-navy text-ivory
                                        hover:bg-brand-navy/90
                                        transition-shadow duration-300 ease-out
                                        shadow-[0_12px_32px_rgba(0,0,0,0.35)]
                                        hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)]
                                        focus-visible:shadow-[0_0_0_3px_rgba(255,215,160,0.5)]
                                        h-14 rounded-2xl px-8"
                                >
                                    Start New Conversation
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};

export default ConversationHistoryPage;