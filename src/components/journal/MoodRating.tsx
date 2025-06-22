import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Smile, Meh, CloudRain } from "lucide-react";

const moods = [
    { value: 'happy', icon: Smile, color: "text-[#50fa7b]/90", label: "Joyful" },
    { value: 'neutral', icon: Meh, color: "text-[#ffcc70]/90", label: "Neutral" },
    { value: 'sad', icon: CloudRain, color: "text-[#7bdff2]/90", label: "Reflective" }
];

interface MoodRatingProps {
    value: string;
    onValueChange: (value: string) => void;
}

const MoodRating = ({ value, onValueChange }: MoodRatingProps) => {
    return (
        <div className="p-10 rounded-3xl bg-white/30 border border-white/10 
            shadow-[0_10px_35px_rgba(0,0,0,0.25)] 
            hover:shadow-[0_14px_45px_rgba(0,0,0,0.35)] 
            backdrop-blur-[6px] 
            transition-all duration-300"
        >
            <h3 className="text-2xl font-canela font-bold text-neutral-800/80 mb-2 tracking-wide">Mood</h3>
            <p className="text-sm text-neutral-500 mb-6 tracking-wide">Select the emotion that best matches how you feel right now.</p>
            
            <RadioGroup 
                value={value} 
                onValueChange={onValueChange} 
                className="flex justify-around items-center pt-2"
            >
                {moods.map(mood => (
                    <div key={mood.value} className="flex flex-col items-center space-y-2 group">
                        <RadioGroupItem value={mood.value} id={mood.value} className="sr-only" />
                        
                        <Label 
                            htmlFor={mood.value} 
                            className="cursor-pointer group flex flex-col items-center"
                            title={`Feeling ${mood.label.toLowerCase()}`}
                        >
                            <mood.icon 
                                className={`h-14 w-14 transition-[transform,shadow,fill] duration-300 ease-in-out 
                                    ${value === mood.value 
                                        ? `${mood.color} scale-110 drop-shadow-[0_8px_20px_rgba(0,0,0,0.4)] ring-2 ring-offset-2 ring-white/20` 
                                        : 'text-neutral-400 hover:text-neutral-600 hover:scale-105 group-hover:drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)]'
                                }`} 
                                strokeWidth={value === mood.value ? 2.5 : 1.5}
                                fill={value === mood.value ? "currentColor" : "none"}
                            />
                            <span className={`mt-2 text-sm font-serif tracking-wide transition-colors duration-300 ${
                                value === mood.value 
                                    ? `${mood.color} font-semibold` 
                                    : 'text-neutral-500 group-hover:text-neutral-700'
                            }`}>
                                {mood.label}
                            </span>
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
};

export default MoodRating;
