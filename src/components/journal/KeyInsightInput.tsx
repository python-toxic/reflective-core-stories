import React from 'react';

interface KeyInsightInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    journalText: string; // NEW: journal entry text
    onAutoSummarize: () => void; // NEW: handler for summarize button
    loading?: boolean; // NEW: loading state for summarize
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
        <div className="glass-card p-8 rounded-3xl bg-white/60 border border-champagne/30 shadow-xl backdrop-blur-md transition-all duration-300">
            {/* Header */}
            <h3 className="text-xl font-canela font-semibold text-warm-gray tracking-tight mb-3">
                Key Insight
            </h3>

            {/* Subheading */}
            <p className="text-sm text-warm-gray/60 mb-6 leading-relaxed">
                What stood out today? Reflect briefly—your thoughts matter here.
            </p>

            {/* Input */}
            <div className="relative">
                <textarea
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full min-h-[140px] p-5 pr-14 rounded-xl
                               border border-champagne/50
                               bg-ivory/60 text-warm-gray
                               placeholder:text-warm-gray/40
                               focus:outline-none focus:ring-2 focus:ring-blush-gold/50
                               transition-all duration-200 resize-y
                               shadow-inner backdrop-blur-sm"
                    rows={4}
                />

                {/* Floating icon area for AI summarize */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <button
                        type="button"
                        title="Auto-summarize"
                        className="w-8 h-8 flex items-center justify-center
                                   rounded-full bg-blush-gold/20 hover:bg-blush-gold/40
                                   transition-all duration-200 disabled:opacity-50"
                        onClick={onAutoSummarize}
                        disabled={loading || !journalText.trim()}
                    >
                        {loading ? (
                            <span className="loader w-4 h-4" />
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 text-blush-gold"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default KeyInsightInput;
