import React, { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Lightbulb, Camera, Mic } from "lucide-react"; // Added Camera and Mic icons

const PROMPTS = [
	"What made you smile today?",
	"Describe a challenge you overcame.",
	"What are you grateful for right now?",
	"How did you take care of yourself today?",
	"What is one thing you learned?",
	"Who inspired you today?",
	"What would you like to improve tomorrow?",
];

interface JournalInputProps {
	value: string;
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const JournalInput = ({ value, onChange }: JournalInputProps) => {
	const [promptIdx, setPromptIdx] = useState(0);
	const [showCopied, setShowCopied] = useState(false);
	const charCount = value.length;

	// Rotate prompt every 7 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setPromptIdx((idx) => (idx + 1) % PROMPTS.length);
		}, 7000);
		return () => clearInterval(interval);
	}, []);

	// Copy prompt to textarea
	const handlePromptClick = () => {
		onChange({ target: { value: PROMPTS[promptIdx] } } as React.ChangeEvent<HTMLTextAreaElement>);
		setShowCopied(true);
		setTimeout(() => setShowCopied(false), 1200);
	};

	return (
		// Added flex-col and h-full to make the card a flex container that fills its parent height
		<div className="relative w-full h-full flex flex-col glass-card rounded-2xl p-4 sm:p-6 animate-fade-in-up transition-all duration-500">
			{/* Prompt suggestion */}
			<div className="flex items-center gap-2 mb-3 cursor-pointer group select-none" onClick={handlePromptClick} title="Click to use this prompt">
				<Lightbulb className="w-4 h-4 text-blush-gold group-hover:scale-110 transition-transform flex-shrink-0" />
				<span className="text-warm-gray/70 text-xs sm:text-sm font-medium group-hover:text-blush-gold transition-colors truncate">{PROMPTS[promptIdx]}</span>
				{showCopied && <span className="ml-2 text-xs text-green-600 animate-fade-in flex-shrink-0">Added!</span>}
			</div>
			
			{/* Textarea Container - now flex-1 to take remaining height */}
			<div className="relative flex-1"> 
				<Textarea
					placeholder="Write your thoughts, feelings, and reflections..."
					value={value}
					onChange={onChange}
					// Removed fixed height classes (h-[...]) and added h-full to fill flex-1 parent
					className="w-full h-full 
						bg-ivory/40 
						border border-champagne/30 
						rounded-2xl 
						text-sm sm:text-base lg:text-lg text-warm-gray resize-none 
						focus:ring-0 focus:border-blush-gold/60
						placeholder:text-warm-gray/40 
						font-canela leading-relaxed
						p-3 sm:p-4
						scrollbar-thin scrollbar-track-transparent scrollbar-thumb-champagne/30"
					aria-label="Journal entry textarea"
					title="Write your journal entry here"
					maxLength={2000}
				/>
				
				{/* Character count */}
				<div className="absolute bottom-2 right-3 text-xs text-warm-gray/50 select-none bg-ivory/80 rounded px-2 py-1">
					{charCount} / 2000
				</div>
			</div>

            {/* Bottom-Left Icons - Refined for clarity and luxury */}
            <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                <button className="p-2 rounded-full bg-ivory/60 border border-champagne/30 text-warm-gray/70 hover:text-brand-navy hover:bg-ivory/80 transition-all duration-200 shadow-sm" title="Add Image">
                    <Camera className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-ivory/60 border border-champagne/30 text-warm-gray/70 hover:text-brand-navy hover:bg-ivory/80 transition-all duration-200 shadow-sm" title="Add Voice Note">
                    <Mic className="w-5 h-5" />
                </button>
            </div>
		</div>
	);
};

export default JournalInput;