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
    <div className="w-full max-w-full glass-card p-4 sm:p-6 rounded-2xl bg-white/60 border border-champagne/30 shadow-lg backdrop-blur-md transition-all duration-300">
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <h3 className="text-sm sm:text-lg font-canela font-semibold text-warm-gray">{label}</h3>
        <span className="text-lg sm:text-xl font-bold text-warm-gray/80 tracking-tight min-w-[2rem] text-right">{value[0]}</span>
      </div>
      <div className="px-1">
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
            [&_span[role=slider]]:w-5
            [&_span[role=slider]]:h-5
            focus-visible:outline-none
          "
        />
      </div>
      {/* Scale indicators */}
      <div className="flex justify-between mt-2 px-1">
        <span className="text-xs text-warm-gray/50">{min}</span>
        <span className="text-xs text-warm-gray/50">{Math.floor((min + max) / 2)}</span>
        <span className="text-xs text-warm-gray/50">{max}</span>
      </div>
    </div>
  );
};

export default MetricSlider;