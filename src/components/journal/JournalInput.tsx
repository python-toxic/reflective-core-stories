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
                className="w-full h-full min-h-[400px] lg:min-h-[600px] 
                    bg-ivory/40 
                    border border-champagne/30 
                    rounded-3xl 
                    shadow-[0_12px_32px_rgba(0,0,0,0.35)] 
                    hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] 
                    focus:shadow-[0_0_0_3px_rgba(255,215,160,0.5)] 
                    backdrop-blur-md 
                    p-8 text-lg text-warm-gray resize-none 
                    focus:ring-0 
                    placeholder:text-warm-gray/40 
                    font-canela leading-relaxed 
                    transition-shadow duration-300 ease-out"
            />
        </div>
    )
}

export default JournalInput;
