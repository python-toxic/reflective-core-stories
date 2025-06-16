
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
        <div className="p-8 rounded-2xl bg-ivory/60 border border-champagne/40 shadow-lg shadow-blush-gold/25 backdrop-blur-md">
            <div className="flex justify-between items-baseline mb-6">
                <h3 className="text-xl font-canela text-warm-gray tracking-wide">{label}</h3>
                <span className="font-sans text-3xl text-warm-gray/80 font-bold tracking-wider">{value[0]}</span>
            </div>
            <div className="pt-2">
                <Slider
                    value={value}
                    onValueChange={onValueChange}
                    min={min}
                    max={max}
                    step={step}
                    className="[&_.bg-primary]:bg-gradient-to-r [&_.bg-primary]:from-champagne [&_.bg-primary]:to-blush-gold [&_span[role=slider]]:bg-warm-gray [&_span[role=slider]]:border-warm-gray/30 [&_span[role=slider]]:w-6 [&_span[role=slider]]:h-6 [&_span[role=slider]]:shadow-lg [&_span[role=slider]]:hover:shadow-xl [&_span[role=slider]]:hover:scale-110 [&_span[role=slider]]:transition-all [&_span[role=slider]]:duration-200 [&_.bg-secondary]:h-3 [&_.bg-secondary]:rounded-full"
                />
            </div>
        </div>
    )
}

export default MetricSlider;
