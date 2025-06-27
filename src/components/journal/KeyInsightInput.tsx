import React from 'react';

interface KeyInsightInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    journalText: string;
    onAutoSummarize: () => void;
    loading?: boolean;
}

const KeyInsightInput = ({
    value,
    onChange,
    placeholder = "Capture the most important insight from today...",
    journalText,
    onAutoSummarize,
    loading = false,
}: KeyInsightInputProps) => {
    return (
        <div className="w-full max-w-full glass-card p-4 sm:p-6 rounded-2xl bg-white/60 border border-champagne/30 shadow-lg backdrop-blur-md transition-all duration-300">
            {/* Header */}
            <h3 className="text-lg sm:text-xl font-canela font-semibold text-warm-gray tracking-tight mb-2">
                Key Insight
            </h3>

            {/* Subheading */}
            <p className="text-xs sm:text-sm text-warm-gray/60 mb-4 leading-relaxed">
                What stood out today? Reflect briefly—your thoughts matter here.
            </p>

            {/* Input */}
            <div className="relative">
                <textarea
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full min-h-[80px] max-h-[120px] p-3 pr-12 rounded-xl
                               border border-champagne/50
                               bg-ivory/60 text-warm-gray text-sm sm:text-base
                               placeholder:text-warm-gray/40
                               focus:outline-none focus:ring-2 focus:ring-blush-gold/50
                               transition-all duration-200 resize-none
                               shadow-inner backdrop-blur-sm
                               scrollbar-thin scrollbar-track-transparent scrollbar-thumb-champagne/30"
                    rows={3}
                    maxLength={300}
                />

                {/* Auto-summarize button */}
                <div className="absolute bottom-2 right-2 flex items-center gap-2">
                    <button
                        type="button"
                        title="Auto-summarize from journal"
                        className="w-7 h-7 flex items-center justify-center
                                   rounded-full bg-blush-gold/20 hover:bg-blush-gold/40
                                   transition-all duration-200 disabled:opacity-50
                                   disabled:cursor-not-allowed"
                        onClick={onAutoSummarize}
                        disabled={loading || !journalText.trim()}
                    >
                        {loading ? (
                            <div className="w-3 h-3 border-2 border-blush-gold border-t-transparent rounded-full animate-spin" />
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" 
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-3 h-3 text-blush-gold"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default KeyInsightInput;