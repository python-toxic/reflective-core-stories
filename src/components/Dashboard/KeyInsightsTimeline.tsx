import { Card, CardContent } from "@/components/ui/card";

interface KeyInsightsTimelineProps {
  keyInsights: any[];
}

const KeyInsightsTimeline = ({ keyInsights }: KeyInsightsTimelineProps) => (
  <Card className="glass-card rounded-3xl bg-white/60 border border-champagne/30 shadow-xl backdrop-blur-md transition-all duration-300">
    <CardContent className="p-8">
      <h2 className="font-canela text-xl font-bold mb-2 text-navy">Key Insights Timeline</h2>
      <div
        className="flex flex-col gap-4 max-h-72 overflow-y-auto pr-2"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(0,0,0,0.08) transparent'
        }}
      >
        {keyInsights && keyInsights.length > 0 ? (
          keyInsights.map((insight: any, idx: number) => (
            <div key={idx} className="bg-champagne/30 rounded-xl p-4 shadow-inner">
              <p className="text-sm text-warm-gray/80">{insight.date}</p>
              <p className="font-medium mt-1 text-navy">"{insight.keyInsight || 'No insight added.'}"</p>
            </div>
          ))
        ) : (
          <span className="text-gray-400">No insights yet.</span>
        )}
      </div>
      <style>{`
        .max-h-72::-webkit-scrollbar {
          width: 8px;
          background: transparent;
        }
        .max-h-72::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.08);
          border-radius: 8px;
        }
      `}</style>
    </CardContent>
  </Card>
);

export default KeyInsightsTimeline;
