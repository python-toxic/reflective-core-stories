import { Input } from "@/components/ui/input";

interface SleepInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SleepInput = ({ value, onChange }: SleepInputProps) => {
  return (
    <div className="glass-card p-7 rounded-3xl bg-white/60 border border-champagne/30 shadow-xl backdrop-blur-md transition-all duration-300">
      <h3 className="text-lg font-canela font-semibold text-warm-gray mb-4">Sleep</h3>
      <div className="relative">
        <Input
          type="text"
          inputMode="decimal"
          pattern="[0-9]*"
          value={value}
          onChange={onChange}
          className="w-full bg-transparent border-0 border-b-2 border-champagne/50 
            focus:ring-0 focus:border-blush-gold 
            text-center text-4xl font-bold text-warm-gray/80 
            placeholder:text-warm-gray/30 p-2 h-auto tracking-tight"
          placeholder="e.g. 7.5"
        />
        <span className="absolute right-4 bottom-3 text-warm-gray/50 text-sm font-canela">hours</span>
      </div>
    </div>
  );
};

export default SleepInput;
