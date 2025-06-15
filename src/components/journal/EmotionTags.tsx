
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const emotions = ["Joyful", "Grateful", "Sad", "Angry", "Anxious", "Calm", "Hopeful", "Lonely", "Inspired", "Tired", "Excited", "Content", "Frustrated", "Overwhelmed", "Peaceful", "Proud"];

interface EmotionTagsProps {
    value: string;
    onValueChange: (value: string) => void;
}

const EmotionTags = ({ value, onValueChange }: EmotionTagsProps) => {
    return (
        <div className="p-6 rounded-2xl bg-ivory/60 border border-champagne/40 shadow-lg shadow-blush-gold/25 backdrop-blur-md">
            <h3 className="text-lg font-serif text-warm-gray mb-4">Emotion Tag</h3>
            <Select value={value} onValueChange={onValueChange}>
                <SelectTrigger className="w-full bg-transparent border-0 border-b-2 border-champagne/50 focus:ring-0 focus:border-blush-gold text-warm-gray/80 placeholder:text-warm-gray/40">
                    <SelectValue placeholder="Select an emotion..." />
                </SelectTrigger>
                <SelectContent className="bg-ivory/95 backdrop-blur-sm border-champagne/50">
                    {emotions.map(emotion => (
                        <SelectItem 
                            key={emotion} 
                            value={emotion.toLowerCase()} 
                            className="focus:bg-champagne/50 cursor-pointer"
                        >
                            {emotion}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

export default EmotionTags;
