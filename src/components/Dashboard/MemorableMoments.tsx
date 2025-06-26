import { Card, CardContent } from "@/components/ui/card";

interface MemorableMomentsProps {
  memorableMoments: any[];
}

const MemorableMoments = ({ memorableMoments }: MemorableMomentsProps) => (
  <Card className="glass-card rounded-3xl bg-white/60 border border-champagne/30 shadow-xl backdrop-blur-md transition-all duration-300">
    <CardContent className="p-8">
      <h2 className="font-canela text-xl font-bold mb-2 text-navy">Memorable Moments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {memorableMoments && memorableMoments.length > 0 ? (
          memorableMoments.map((moment: any, idx: number) => (
            <div
              key={idx}
              className="bg-ivory/80 p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">📝</span>
                <p className="font-serif font-bold text-navy">{moment.date}</p>
              </div>
              <p className="text-sm text-navy/80 italic group-hover:text-navy transition-colors duration-300">"{moment.snippet}"</p>
              <p className="text-xs text-right mt-2 text-navy/50">Emotion Tag: {moment.emotionTag}</p>
            </div>
          ))
        ) : (
          <span className="text-gray-400">No memorable moments yet.</span>
        )}
      </div>
    </CardContent>
  </Card>
);

export default MemorableMoments;
