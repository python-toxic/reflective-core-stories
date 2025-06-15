
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Smile, Meh, Frown } from "lucide-react";

const moods = [
    { value: 'happy', icon: Smile, color: "text-emerald-500" },
    { value: 'neutral', icon: Meh, color: "text-amber-500" },
    { value: 'sad', icon: Frown, color: "text-sky-500" }
];

interface MoodRatingProps {
  value: string;
  onValueChange: (value: string) => void;
}

const MoodRating = ({ value, onValueChange }: MoodRatingProps) => {
    return (
        <div className="p-6 rounded-2xl bg-ivory/50 border-champagne/30 shadow-xl shadow-blush-gold/20 backdrop-blur-sm">
            <h3 className="text-lg font-serif text-warm-gray mb-4">Mood</h3>
            <RadioGroup value={value} onValueChange={onValueChange} className="flex justify-around items-center pt-2">
                {moods.map(mood => (
                    <div key={mood.value} className="flex flex-col items-center space-y-2">
                        <RadioGroupItem value={mood.value} id={mood.value} className="sr-only" />
                        <Label htmlFor={mood.value} className="cursor-pointer">
                            <mood.icon className={`h-10 w-10 transition-all duration-300 ease-out ${value === mood.value ? `${mood.color} scale-125 drop-shadow-lg` : 'text-warm-gray/30 hover:text-warm-gray/60 hover:scale-110'}`} strokeWidth={1.5} />
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}

export default MoodRating;
