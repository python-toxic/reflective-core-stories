// src/components/MoodRating.tsx

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Smile, Circle, BrainCircuit } from "lucide-react"; // More semantic icons
import clsx from 'clsx'; // Utility for conditional classes

// Updated moods array with better icons and a dedicated highlight color
const moods = [
    { value: 'joyful', icon: Smile, label: "Joyful", color: "text-green-500", highlightColor: "bg-green-500/20" },
    { value: 'neutral', icon: Circle, label: "Neutral", color: "text-amber-500", highlightColor: "bg-amber-500/20" },
    { value: 'reflective', icon: BrainCircuit, label: "Reflective", color: "text-sky-500", highlightColor: "bg-sky-500/20" }
];

interface MoodRatingProps {
    value: string;
    onValueChange: (value: string) => void;
}

const MoodRating = ({ value, onValueChange }: MoodRatingProps) => {
    return (
        <div className="bg-white/30 p-8 rounded-2xl shadow-sm border border-white/10">
            <h3 className="text-xl font-serif text-neutral-800 mb-1">Mood</h3>
            <p className="text-sm text-neutral-500 mb-6">Select the emotion that best matches how you feel right now.</p>
            
            <RadioGroup 
                value={value} 
                onValueChange={onValueChange} 
                className="flex justify-around items-center"
            >
                {moods.map(mood => {
                    const isSelected = value === mood.value;
                    return (
                        <div key={mood.value} className="flex flex-col items-center">
                            {/* Hidden radio button for state management and accessibility */}
                            <RadioGroupItem value={mood.value} id={mood.value} className="sr-only" />

                            {/* Label acts as the visible, clickable element */}
                            <Label 
                                htmlFor={mood.value} 
                                className="cursor-pointer group flex flex-col items-center space-y-3 p-2 rounded-lg"
                                title={`Feeling ${mood.label}`}
                            >
                                {/* Background container for better visual feedback */}
                                <div className={clsx(
                                    'p-4 rounded-xl transition-all duration-300 ease-in-out',
                                    'group-hover:bg-neutral-200/50 group-hover:scale-105',
                                    'group-focus-within:ring-2 group-focus-within:ring-blue-500', // Keyboard focus
                                    isSelected && `${mood.highlightColor} scale-110`
                                )}>
                                    <mood.icon 
                                        className={clsx(
                                            'h-12 w-12 transition-colors duration-300',
                                            isSelected ? mood.color : 'text-neutral-400 group-hover:text-neutral-600'
                                        )}
                                        strokeWidth={isSelected ? 2 : 1.5}
                                        fill={isSelected ? "currentColor" : "none"}
                                    />
                                </div>

                                <span className={clsx(
                                    'text-sm font-medium transition-colors duration-300',
                                    isSelected ? `${mood.color} font-bold` : 'text-neutral-500 group-hover:text-neutral-700'
                                )}>
                                    {mood.label}
                                </span>
                            </Label>
                        </div>
                    );
                })}
            </RadioGroup>
        </div>
    );
};

export default MoodRating;