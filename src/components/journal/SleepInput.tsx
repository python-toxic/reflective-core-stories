
import { Input } from "@/components/ui/input";

interface SleepInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SleepInput = ({ value, onChange }: SleepInputProps) => {
    return (
        <div className="p-8 rounded-2xl bg-ivory/60 border border-champagne/40 shadow-lg shadow-blush-gold/25 backdrop-blur-md">
            <h3 className="text-xl font-canela text-warm-gray mb-6 tracking-wide">Sleep</h3>
            <div className="relative mt-4">
                <Input 
                    type="text"
                    value={value}
                    onChange={onChange}
                    className="w-full bg-transparent border-0 border-b-2 border-champagne/50 focus:ring-0 focus:border-blush-gold text-center text-4xl font-bold text-warm-gray/80 placeholder:text-warm-gray/30 p-3 h-auto tracking-wider transition-all duration-300"
                />
                <span className="absolute right-3 bottom-4 text-warm-gray/50 text-sm font-canela tracking-wide">hours</span>
            </div>
        </div>
    );
};

export default SleepInput;
