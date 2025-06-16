
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Circle, Triangle, Square } from "lucide-react";

const moods = [
    { value: 'happy', icon: Circle, color: "text-emerald-500", label: "Joyful" },
    { value: 'neutral', icon: Triangle, color: "text-amber-500", label: "Neutral" },
    { value: 'sad', icon: Square, color: "text-sky-500", label: "Reflective" }
];

interface MoodRatingProps {
  value: string;
  onValueChange: (value: string) => void;
}

const MoodRating = ({ value, onValueChange }: MoodRatingProps) => {
    return (
        <div className="p-8 rounded-2xl bg-ivory/60 border border-champagne/40 shadow-lg shadow-blush-gold/25 backdrop-blur-md">
            <h3 className="text-xl font-canela text-warm-gray mb-6 tracking-wide">Mood</h3>
            <RadioGroup value={value} onValueChange={onValueChange} className="flex justify-around items-center pt-4">
                {moods.map(mood => (
                    <div key={mood.value} className="flex flex-col items-center space-y-3">
                        <RadioGroupItem value={mood.value} id={mood.value} className="sr-only" />
                        <Label htmlFor={mood.value} className="cursor-pointer group">
                            <mood.icon 
                                className={`h-12 w-12 transition-all duration-300 ease-out ${
                                    value === mood.value 
                                        ? `${mood.color} scale-110 drop-shadow-lg animate-gentle-bounce` 
                                        : 'text-warm-gray/30 hover:text-warm-gray/60 hover:scale-110 group-hover:drop-shadow-md'
                                }`} 
                                strokeWidth={value === mood.value ? 2.5 : 1.5}
                                fill={value === mood.value ? "currentColor" : "none"}
                            />
                        </Label>
                        <span className={`text-xs font-canela tracking-wide transition-colors duration-300 ${
                            value === mood.value ? mood.color : 'text-warm-gray/50'
                        }`}>
                            {mood.label}
                        </span>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}

export default MoodRating;
