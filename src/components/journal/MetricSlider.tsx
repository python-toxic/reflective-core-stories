import { Slider } from "@/components/ui/slider";

interface MetricSliderProps {
  label: string;
  value: number[];
  onValueChange: (value: number[]) => void;
  min: number;
  max: number;
  step: number;
}

const MetricSlider = ({ label, value, onValueChange, min, max, step }: MetricSliderProps) => {
    return (
        <div
            className="p-6 rounded-3xl bg-white/40 border border-champagne/30 
            shadow-[0_12px_32px_rgba(0,0,0,0.3)] 
            hover:shadow-[0_16px_40px_rgba(0,0,0,0.45)] 
            backdrop-blur-md 
            transition-shadow duration-300 ease-out"
        >
            <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-lg font-canela font-bold text-warm-gray">{label}</h3>
                <span className="font-canela text-2xl text-warm-gray/80 font-bold">{value[0]}</span>
            </div>

            <Slider
                value={value}
                onValueChange={onValueChange}
                min={min}
                max={max}
                step={step}
                className="
                    [&_.bg-primary]:bg-gradient-to-r 
                    [&_.bg-primary]:from-champagne 
                    [&_.bg-primary]:to-blush-gold 
                    [&_span[role=slider]]:bg-warm-gray 
                    [&_span[role=slider]]:border 
                    [&_span[role=slider]]:border-warm-gray/30 
                    [&_span[role=slider]]:shadow-[0_6px_20px_rgba(0,0,0,0.9)] 
                    [&_span[role=slider]]:transition-all 
                    [&_span[role=slider]]:duration-300 
                    [&_span[role=slider]]:hover:scale-110"
            />
        </div>
    );
};

export default MetricSlider;
