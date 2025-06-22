import React from "react";

// Example icon components (replace with your own or use a library)
const MoodIcon = () => <span className="inline-block w-6 h-6 rounded-full bg-brand-navy/80 mr-2" />;
const SleepIcon = () => <span className="inline-block w-6 h-6 rounded-full bg-brand-crimson/80 mr-2" />;
const EnergyIcon = () => <span className="inline-block w-6 h-6 rounded-full bg-brand-navy/40 mr-2" />;

const ReflectPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F5DC] flex flex-col items-center py-12 px-4 font-sans">
      {/* Weekly Insight Summary */}
      <div className="w-full max-w-4xl mb-12">
        <div className="w-full glass-card rounded-3xl shadow-xl p-10 flex flex-col gap-6 transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-brand-crimson/30">
          <h2 className="font-canela text-3xl md:text-4xl text-brand-navy mb-2">
            “You’ve been mostly calm and energized this week.”
          </h2>
          <div className="flex flex-row gap-8 justify-start items-center">
            <div className="flex items-center gap-2 text-lg font-medium text-brand-navy">
              <MoodIcon />
              Mood Avg: <span className="font-bold text-2xl ml-1">7.2</span>
            </div>
            <div className="flex items-center gap-2 text-lg font-medium text-brand-navy">
              <SleepIcon />
              Sleep Avg: <span className="font-bold text-2xl ml-1">7.1h</span>
            </div>
            <div className="flex items-center gap-2 text-lg font-medium text-brand-navy">
              <EnergyIcon />
              Peak Energy: <span className="font-bold text-2xl ml-1">Friday</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Mood vs Sleep Graph */}
        <div className="glass-card rounded-3xl shadow-xl p-8 flex flex-col gap-6">
          <h3 className="font-canela text-2xl text-brand-navy mb-2">Mood vs Sleep</h3>
          {/* Replace below with your chart component */}
          <div className="h-64 w-full flex items-center justify-center">
            {/* Chart placeholder */}
            <svg width="100%" height="100%" viewBox="0 0 400 200">
              {/* Mood line (navy) */}
              <polyline
                fill="none"
                stroke="#0F0860"
                strokeWidth="3"
                points="10,150 60,120 110,100 160,80 210,90 260,110 310,130 390,140"
                style={{ filter: "drop-shadow(0 2px 8px #0F086033)" }}
              />
              {/* Sleep line (crimson) */}
              <polyline
                fill="none"
                stroke="#B50039"
                strokeWidth="3"
                strokeDasharray="6,4"
                points="10,170 60,140 110,120 160,100 210,110 260,130 310,150 390,160"
                style={{ filter: "drop-shadow(0 2px 8px #B5003933)" }}
              />
            </svg>
          </div>
          <div className="text-right text-sm text-brand-navy/60 italic">Hover for details</div>
        </div>

        {/* Energy Trend Line */}
        <div className="glass-card rounded-3xl shadow-xl p-8 flex flex-col gap-6">
          <h3 className="font-canela text-2xl text-brand-navy mb-2">Energy Trend</h3>
          {/* Replace below with your chart component */}
          <div className="h-64 w-full flex items-center justify-center">
            {/* Chart placeholder */}
            <svg width="100%" height="100%" viewBox="0 0 400 200">
              <polyline
                fill="url(#beigeGradient)"
                stroke="#0F0860"
                strokeWidth="3"
                points="10,180 60,160 110,140 160,120 210,130 260,150 310,170 390,180"
                style={{ filter: "drop-shadow(0 2px 8px #0F086033)" }}
              />
              <defs>
                <linearGradient id="beigeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F5F5DC" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#F5F5DC" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-right text-sm text-brand-navy/60 italic">Hover for details</div>
        </div>
      </div>

      {/* Reflection Themes */}
      <div className="w-full max-w-4xl mt-16">
        <div className="glass-card rounded-3xl shadow-xl p-10 flex flex-col gap-6 relative overflow-hidden">
          {/* Artistic background shapes */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg width="100%" height="100%">
              <ellipse cx="80%" cy="20%" rx="120" ry="40" fill="#B5003922" />
              <ellipse cx="20%" cy="80%" rx="100" ry="30" fill="#0F086022" />
            </svg>
          </div>
          <h3 className="font-canela text-2xl text-brand-navy mb-2 relative z-10">
            Your reflections circled around…
          </h3>
          <div className="flex flex-row gap-4 flex-wrap relative z-10">
            <span className="px-5 py-2 rounded-full bg-brand-navy/10 text-brand-navy font-semibold text-lg">Workload</span>
            <span className="px-5 py-2 rounded-full bg-brand-crimson/10 text-brand-crimson font-semibold text-lg">Uncertainty</span>
            <span className="px-5 py-2 rounded-full bg-brand-navy/10 text-brand-navy font-semibold text-lg">Hope</span>
          </div>
          <div className="mt-4 text-brand-navy/60 italic text-lg relative z-10">
            <span>“I feel tired lately”</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReflectPage;

/* 
  Add this to your global CSS (e.g., index.css or a component CSS module):

  .glass-card {
    background: rgba(255,255,255,0.35);
    backdrop-filter: blur(18px) saturate(1.2);
    -webkit-backdrop-filter: blur(18px) saturate(1.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
    border: 1px solid rgba(255,255,255,0.18);
  }
*/
