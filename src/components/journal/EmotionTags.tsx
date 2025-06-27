import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const emotions = [
  "Joyful", "Grateful", "Sad", "Angry", "Anxious", "Calm", "Hopeful", "Lonely",
  "Inspired", "Tired", "Excited", "Content", "Frustrated", "Overwhelmed", "Peaceful", "Proud"
];

interface EmotionTagsProps {
  value: string;
  onValueChange: (value: string) => void;
}

const EmotionTags = ({ value, onValueChange }: EmotionTagsProps) => {
  return (
    <div className="w-full max-w-full glass-card p-3 sm:p-4 rounded-2xl bg-white/60 border border-champagne/30 shadow-lg backdrop-blur-md">
      <h3 className="text-sm sm:text-base font-canela font-semibold text-warm-gray mb-2 sm:mb-3">Emotion Tag</h3>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-full bg-transparent border-0 border-b border-champagne/50
           focus:ring-0 focus:border-blush-gold
           text-warm-gray/80 placeholder:text-warm-gray/40
           px-2 py-2 text-sm rounded-md transition-all duration-200 h-8 sm:h-9">
          <SelectValue placeholder="Select emotion..." />
        </SelectTrigger>
        <SelectContent className="bg-ivory/95 backdrop-blur-sm border border-champagne/50 shadow-md rounded-xl max-h-[200px] overflow-y-auto">
          {emotions.map(emotion => (
            <SelectItem
              key={emotion}
              value={emotion.toLowerCase()}
              className="focus:bg-champagne/30 focus:text-warm-gray font-medium rounded-lg px-3 py-1.5 text-sm transition-all cursor-pointer"
            >
              {emotion}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default EmotionTags;