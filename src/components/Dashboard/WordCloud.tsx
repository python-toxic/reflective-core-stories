import { Card, CardContent } from "@/components/ui/card";

interface WordCloudProps {
  wordCloud: any[];
}

const WordCloud = ({ wordCloud }: WordCloudProps) => (
  <Card className="glass-card rounded-3xl bg-white/60 border border-champagne/30 shadow-xl backdrop-blur-md transition-all duration-300">
    <CardContent className="p-8">
      <h2 className="font-canela text-xl font-bold mb-2 text-navy">Your Word Cloud</h2>
      <div className="flex flex-wrap gap-2 items-center min-h-[80px]">
        {wordCloud && wordCloud.length > 0 ? (
          wordCloud.map((item: any) => (
            <span
              key={item.word}
              className={`${item.size} ${item.color} font-serif font-bold`}
            >
              {item.word}
            </span>
          ))
        ) : (
          <span className="text-gray-400">No word cloud data yet.</span>
        )}
      </div>
      <p className="text-xs text-center mt-2 text-navy/70">Most used words in your reflections.</p>
    </CardContent>
  </Card>
);

export default WordCloud;
