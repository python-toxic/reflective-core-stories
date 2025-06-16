
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const emotions = ["Joyful", "Grateful", "Sad", "Angry", "Anxious", "Calm", "Hopeful", "Lonely", "Inspired", "Tired", "Excited", "Content", "Frustrated", "Overwhelmed", "Peaceful", "Proud"];

interface EmotionTagsProps {
    value: string;
    onValueChange: (value: string) => void;
}

const EmotionTags = ({ value, onValueChange }: EmotionTagsProps) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const selectedEmotion = emotions.find(emotion => emotion.toLowerCase() === value) || "Select an emotion...";

    return (
        <div className="p-8 rounded-2xl bg-ivory/60 border border-champagne/40 shadow-lg shadow-blush-gold/25 backdrop-blur-md relative">
            <h3 className="text-xl font-canela text-warm-gray mb-6 tracking-wide">Emotion Tag</h3>
            
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full bg-transparent border-0 border-b-2 border-champagne/50 focus:border-blush-gold text-warm-gray/80 placeholder:text-warm-gray/40 py-3 px-2 text-left flex items-center justify-between transition-all duration-300 hover:border-blush-gold/70"
                >
                    <span className="font-sans tracking-wide">{selectedEmotion}</span>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-ivory/95 backdrop-blur-sm border border-champagne/50 rounded-lg shadow-xl shadow-blush-gold/20 z-50 max-h-60 overflow-y-auto animate-slow-pop-up">
                        {emotions.map(emotion => (
                            <button
                                key={emotion}
                                onClick={() => {
                                    onValueChange(emotion.toLowerCase());
                                    setIsOpen(false);
                                }}
                                className="w-full px-4 py-3 text-left hover:bg-champagne/50 cursor-pointer transition-all duration-200 font-sans tracking-wide text-warm-gray/80 hover:text-warm-gray flex items-center justify-between"
                            >
                                {emotion}
                                {emotion.toLowerCase() === value && (
                                    <Check className="h-4 w-4 text-blush-gold" />
                                )}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default EmotionTags;
