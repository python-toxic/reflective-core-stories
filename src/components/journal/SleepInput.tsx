import { Input } from "@/components/ui/input";

interface SleepInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SleepInput = ({ value, onChange }: SleepInputProps) => {
  return (
    <div className="w-full max-w-full glass-card p-3 sm:p-4 rounded-2xl bg-white/60 border border-champagne/30 shadow-lg backdrop-blur-md transition-all duration-300">
      <h3 className="text-sm sm:text-base font-canela font-semibold text-warm-gray mb-2 sm:mb-3">Sleep</h3>
      <div className="relative">
        <Input
          type="text"
          inputMode="decimal"
          pattern="[0-9]*\.?[0-9]*"
          value={value}
          onChange={onChange}
          className="w-full bg-transparent border-0 border-b-2 border-champagne/50 
            focus:ring-0 focus:border-blush-gold 
            text-center text-2xl sm:text-3xl font-bold text-warm-gray/80 
            placeholder:text-warm-gray/30 p-2 h-auto tracking-tight pr-12"
          placeholder="7.5"
          maxLength={4}
        />
        <span className="absolute right-2 bottom-2 text-warm-gray/50 text-xs sm:text-sm font-canela">hours</span>
      </div>
    </div>
  );
};

export default SleepInput;