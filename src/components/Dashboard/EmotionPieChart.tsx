import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface EmotionPieChartProps {
  data: any[];
  colors: string[];
}

const EmotionPieChart = ({ data, colors }: EmotionPieChartProps) => (
  <Card className="glass-card rounded-3xl bg-white/60 border border-champagne/30 shadow-xl backdrop-blur-md transition-all duration-300">
    <CardContent className="p-8">
      <h2 className="font-canela text-xl font-bold mb-2 text-navy">Emotion Tag Breakdown</h2>
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={60}
            label={({ name, percent }) => `${name} (${Math.round(percent * 100)}%)`}
          >
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={colors[entry.colorIdx % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-xs text-center mt-2 text-navy/70">Your most frequent emotion tags this period.</p>
    </CardContent>
  </Card>
);

export default EmotionPieChart;
