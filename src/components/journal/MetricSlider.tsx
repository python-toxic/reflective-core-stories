
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
        <div className="p-6 rounded-2xl bg-ivory/60 border border-champagne/40 shadow-lg shadow-blush-gold/25 backdrop-blur-md">
            <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-lg font-serif text-warm-gray">{label}</h3>
                <span className="font-sans text-2xl text-warm-gray/80 font-bold">{value[0]}</span>
            </div>
            <Slider
                value={value}
                onValueChange={onValueChange}
                min={min}
                max={max}
                step={step}
                className="[&_.bg-primary]:bg-gradient-to-r [&_.bg-primary]:from-champagne [&_.bg-primary]:to-blush-gold [&_span[role=slider]]:bg-warm-gray [&_span[role=slider]]:border-warm-gray/30"
            />
        </div>
    )
}
export default MetricSlider;
