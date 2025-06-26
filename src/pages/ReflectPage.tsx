'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import JournalNavbar from '@/components/layout/JournalNavbar';
import axios from 'axios';
// Import dashboard components
import MetricCard from '@/components/Dashboard/MetricCard';
import TrendsChart from '@/components/Dashboard/TrendsChart';
import EmotionPieChart from '@/components/Dashboard/EmotionPieChart';
import WordCloud from '@/components/Dashboard/WordCloud';
import KeyInsightsTimeline from '@/components/Dashboard/KeyInsightsTimeline';
import MemorableMoments from '@/components/Dashboard/MemorableMoments';

// Define COLORS for EmotionPieChart
const COLORS = ['#FFD3B5', '#FD6585', '#A6E3E9', '#FFB6B9', '#C1CEFE', '#F7E7CE', '#B50039', '#544F4C'];

export default function ReflectPage() {
  const [summary, setSummary] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/journal/summary', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setSummary(res.data);
      } catch {
        setSummary(null);
      } finally {
        setLoading(false);
      }
    };
    fetchSummary();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fefdf8]">
        <span className="text-lg text-gray-500">Loading...</span>
      </div>
    );
  }

  if (!summary) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fefdf8]">
        <span className="text-lg text-red-500">No data available.</span>
      </div>
    );
  }

  return (
    <div className="bg-brand-beige min-h-screen font-sans text-navy">
      <JournalNavbar />
      <main className="px-2 md:px-8 lg:px-16 py-10 pt-28">
        {/* --- Page Header --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4"
        >
          <div>
            <h1 className="font-canela text-4xl md:text-5xl font-bold tracking-tight drop-shadow-sm">Your Health Patterns</h1>
            <p className="text-warm-gray/70 mt-2 text-base md:text-lg">
              Visualize your well-being, spot trends, and reflect on your journey.
            </p>
          </div>
        </motion.div>

        {/* --- Metrics Cards --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <MetricCard label="Avg. Energy" value={summary.avgEnergy ?? '--'} unit="/10" icon="⚡" />
          <MetricCard label="Avg. Sleep" value={summary.avgSleep ?? '--'} unit="hrs" icon="🛌" />
          <MetricCard label="Top Emotion Tag" value={summary.dominantEmotionTag ?? '-'} icon="💬" />
          <MetricCard label="Entries" value={summary.entryCount ?? 0} icon="📖" />
        </div>

        {/* --- Trends & Breakdown --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <TrendsChart data={summary.timeSeries || []} />
          <EmotionPieChart data={summary.emotionTagBreakdown || []} colors={COLORS} />
        </div>

        {/* --- Word Cloud & Insights --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <WordCloud wordCloud={summary.wordCloud || []} />
          <KeyInsightsTimeline keyInsights={summary.keyInsights || []} />
        </div>

        {/* --- Memorable Moments --- */}
        <MemorableMoments memorableMoments={summary.memorableMoments || []} />
      </main>
    </div>
  );
}
