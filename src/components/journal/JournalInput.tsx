import React, { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Lightbulb } from "lucide-react";

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
		<div className="relative h-full glass-card rounded-2xl p-8 animate-fade-in-up transition-all duration-500">
			{/* Prompt suggestion */}
			<div className="flex items-center gap-2 mb-4 cursor-pointer group select-none" onClick={handlePromptClick} title="Click to use this prompt">
				<Lightbulb className="w-5 h-5 text-blush-gold group-hover:scale-110 transition-transform" />
				<span className="text-warm-gray/70 text-sm font-medium group-hover:text-blush-gold transition-colors">{PROMPTS[promptIdx]}</span>
				{showCopied && <span className="ml-2 text-xs text-green-600 animate-fade-in">Prompt added!</span>}
			</div>
			<Textarea
				placeholder="Write your thoughts, feelings, and reflections..."
				value={value}
				onChange={onChange}
				className="w-full h-full min-h-[400px] lg:min-h-[600px] 
            bg-ivory/40 
            border border-champagne/30 
            rounded-3xl 
            text-lg text-warm-gray resize-none 
            focus:ring-0 
            placeholder:text-warm-gray/40 
            font-canela leading-relaxed"
				aria-label="Journal entry textarea"
				title="Write your journal entry here"
			/>
			{/* Character count */}
			<div className="absolute bottom-6 right-10 text-xs text-warm-gray/50 select-none">
				{charCount} / 1000
			</div>
		</div>
	);
};

export default JournalInput;