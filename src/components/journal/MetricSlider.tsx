import { Slider } from "@/components/ui/slider";

interface MetricSliderProps {
  label: string;
  value: number[];
  onValueChange: (value: number[]) => void;
  min: number;
  max: number;
  step: number;
}

const MetricSlider = ({
  label,
  value,
  onValueChange,
  min,
  max,
  step,
}: MetricSliderProps) => {
  return (
    <div className="glass-card p-7 rounded-3xl bg-white/60 border border-champagne/30 shadow-xl backdrop-blur-md transition-all duration-300">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-canela font-semibold text-warm-gray">{label}</h3>
        <span className="text-xl font-bold text-warm-gray/80 tracking-tight">{value[0]}</span>
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
          [&_span[role=slider]]:shadow-[0_4px_16px_rgba(0,0,0,0.15)]
          [&_span[role=slider]]:transition-transform
          [&_span[role=slider]]:duration-200
          [&_span[role=slider]]:hover:scale-110
          focus-visible:outline-none
        "
      />
    </div>
  );
};

export default MetricSlider;
