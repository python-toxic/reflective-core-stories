
import { Input } from "@/components/ui/input";

interface SleepInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SleepInput = ({ value, onChange }: SleepInputProps) => {
    return (
        <div className="p-6 rounded-2xl bg-ivory/50 border-champagne/30 shadow-xl shadow-blush-gold/20 backdrop-blur-sm">
            <h3 className="text-lg font-serif text-warm-gray mb-4">Sleep</h3>
            <div className="relative mt-2">
                <Input 
                    type="text"
                    value={value}
                    onChange={onChange}
                    className="w-full bg-transparent border-0 border-b-2 border-champagne/50 focus:ring-0 focus:border-blush-gold text-center text-4xl font-bold text-warm-gray/80 placeholder:text-warm-gray/30 p-2 h-auto"
                />
                <span className="absolute right-2 bottom-3 text-warm-gray/50 text-sm">hours</span>
            </div>
        </div>
    );
};
export default SleepInput;
