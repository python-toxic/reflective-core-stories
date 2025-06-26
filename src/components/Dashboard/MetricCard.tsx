import { Card } from "@/components/ui/card";

interface MetricCardProps {
  label: string;
  value: string | number;
  unit?: string;
  icon?: string;
}

const MetricCard = ({ label, value, unit = '', icon = '' }: MetricCardProps) => {
  console.log('MetricCard value:', value); // Debug: log the value prop
  const isInvalid = value === null || value === undefined || value === '' || value === '--';
  const displayValue = isInvalid ? '--' : value;
  return (
    <Card className="glass-card rounded-3xl bg-white/70 border border-champagne/30 shadow-xl backdrop-blur-md flex flex-col items-center justify-center p-8 transition-all duration-300">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-2xl font-bold text-brand-navy">
        {displayValue} <span className="text-lg font-normal">{unit}</span>
      </div>
      <div className="text-sm text-warm-gray/70 mt-1">{label}</div>
    </Card>
  );
};

export default MetricCard;
