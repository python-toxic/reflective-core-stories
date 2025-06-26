import { Card, CardContent } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface TrendsChartProps {
  data: any[];
}

const TrendsChart = ({ data }: TrendsChartProps) => (
  <Card className="glass-card rounded-3xl bg-white/60 border border-champagne/30 shadow-xl backdrop-blur-md transition-all duration-300 lg:col-span-2">
    <CardContent className="p-8">
      <h2 className="font-canela text-xl font-bold mb-2 text-navy">Energy & Sleep Trends</h2>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data.length ? data : [{ date: '', energy: 0, sleep: 0 }]}>
          <defs>
            <linearGradient id="energyColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FD6585" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FD6585" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="sleepColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#A6E3E9" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#A6E3E9" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Area type="monotone" dataKey="energy" stroke="#FD6585" fill="url(#energyColor)" name="Energy" />
          <Area type="monotone" dataKey="sleep" stroke="#A6E3E9" fill="url(#sleepColor)" name="Sleep" />
        </AreaChart>
      </ResponsiveContainer>
      <p className="text-xs text-center mt-2 text-navy/70">Track your energy and sleep patterns over time.</p>
    </CardContent>
  </Card>
);

export default TrendsChart;
