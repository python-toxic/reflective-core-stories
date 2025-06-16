
import { Textarea } from "@/components/ui/textarea";

interface JournalInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const JournalInput = ({ value, onChange }: JournalInputProps) => {
    return (
        <div className="relative h-full">
            <Textarea 
                placeholder="Write your thoughts, feelings, and reflections..."
                value={value}
                onChange={onChange}
                className="w-full h-full min-h-[400px] lg:min-h-[600px] bg-ivory/50 border-champagne/30 rounded-2xl shadow-xl shadow-blush-gold/20 backdrop-blur-sm p-8 text-lg text-warm-gray resize-none focus:ring-1 focus:ring-blush-gold/80 focus:border-blush-gold/80 placeholder:text-warm-gray/40 font-canela leading-relaxed"
            />
        </div>
    )
}

export default JournalInput;
