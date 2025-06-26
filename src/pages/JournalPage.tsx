import React, { useState, useEffect } from 'react';
import JournalInput from '@/components/journal/JournalInput';
// REMOVED: import MoodRating from '@/components/journal/MoodRating'; // No longer needed
import KeyInsightInput from '@/components/journal/KeyInsightInput'; // NEW: Import the new component
import MetricSlider from '@/components/journal/MetricSlider';
import SleepInput from '@/components/journal/SleepInput';
import { Button } from '@/components/ui/button';
import JournalNavbar from '@/components/layout/JournalNavbar';
import EmotionTags from '@/components/journal/EmotionTags';
import axios from "axios";
import PastEntries from '@/components/journal/PastEntries';

const JournalPage = () => {
    const [journalText, setJournalText] = useState("");
    // REMOVED: const [mood, setMood] = useState("neutral"); // Mood state removed
    const [keyInsight, setKeyInsight] = useState(""); // NEW: Key Insight state
    const [energy, setEnergy] = useState([5]);
    const [emotionTag, setEmotionTag] = useState("grateful");
    const [sleep, setSleep] = useState("7.5");
    const [showEntries, setShowEntries] = useState(false);
    const [entries, setEntries] = useState<any[]>([]);
    const [loadingEntries, setLoadingEntries] = useState(false);
    const [editStates, setEditStates] = useState<{ [id: string]: boolean }>({});
    const [error, setError] = useState<string | null>(null);
    const [keyInsightLoading, setKeyInsightLoading] = useState(false); // NEW: loading state for summarize

    // Fetch entries from backend when modal opens
    useEffect(() => {
        if (showEntries) {
            const fetchEntries = async () => {
                setLoadingEntries(true);
                try {
                    const token = localStorage.getItem("token");
                    const res = await axios.get("/api/journal/all", {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    setEntries(res.data.entries || []);
                } catch (err) {
                    setEntries([]);
                } finally {
                    setLoadingEntries(false);
                }
            };
            fetchEntries();
        }
    }, [showEntries]);

    // Handle field changes for editing
    const handleEntryChange = (id: string, field: string, value: string | number) => {
        setEntries(prev =>
            prev.map(e =>
                e._id === id ? { ...e, [field]: value } : e
            )
        );
    };

    // Save handler (update entry in backend)
    const handleEntrySave = async (entry: any) => {
        try {
            const token = localStorage.getItem("token");
            await axios.put(`/api/journal/${entry._id}`, entry, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setEditStates(prev => ({ ...prev, [entry._id]: false }));
        } catch (err) {
            // Optionally show error
        }
    };

    // Delete handler (remove entry from backend and UI)
    const handleEntryDelete = async (entryId: string) => {
        if (!window.confirm('Are you sure you want to delete this entry?')) return;
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`/api/journal/${entryId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setEntries(prev => prev.filter(e => e._id !== entryId));
        } catch (err) {
            alert('Failed to delete entry.');
        }
    };

    // Handler for AI summarize
    const handleAutoSummarize = async () => {
        setKeyInsightLoading(true);
        try {
            // Replace with your local AI endpoint
           const res = await axios.post('/api/ai/summarize', { text: journalText });
            setKeyInsight(res.data.summary);
        } catch (err) {
            alert('Failed to summarize.');
        } finally {
            setKeyInsightLoading(false);
        }
    };

    const isFormValid =
        journalText.trim() !== "" &&
        keyInsight.trim() !== "" &&
        energy[0] !== null &&
        energy[0] !== undefined &&
        emotionTag.trim() !== "" &&
        sleep.trim() !== "";

    const handleSave = async () => {
        setError(null);
        if (!isFormValid) {
            setError("Please fill in all required fields before saving.");
            return;
        }
        try {
            const token = localStorage.getItem("token");
            await axios.post(
                "/api/journal",
                {
                    journalText,
                    keyInsight,
                    energy: energy[0],
                    emotionTag,
                    sleep
                },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            // Optionally show success message or redirect
            alert("Journal entry saved!");
            // Clear form fields after successful save (optional)
            setJournalText("");
            setKeyInsight("");
            setEnergy([5]);
            setEmotionTag("grateful");
            setSleep("7.5");

        } catch (err) {
            // Handle error (show message)
            alert("Failed to save entry.");
            console.error(err);
        }
    }

    return (
        <>
            <JournalNavbar />
            {/* Floating Past Entries Button */}
            <button
                className="fixed left-8 top-1/2 z-40 transform -translate-y-1/2 glass-card rounded-full p-4 shadow-xl border border-champagne/30 bg-white/60 backdrop-blur-lg hover:scale-105 transition"
                onClick={() => setShowEntries(true)}
                title="Show Past Entries"
            >
                <span className="text-2xl">📜</span>
            </button>

            {/* Overlay Modal for Past Entries */}
            <PastEntries
                show={showEntries}
                onClose={() => setShowEntries(false)}
                entries={entries}
                loading={loadingEntries}
                editStates={editStates}
                onEdit={id => setEditStates(prev => ({ ...prev, [id]: true }))}
                onChange={handleEntryChange}
                onSave={handleEntrySave}
                onDelete={handleEntryDelete}
            />

            <main className="relative min-h-screen bg-brand-beige text-warm-gray font-canela flex items-center justify-center p-4 sm:p-8 overflow-hidden pt-24">
                {/* Vignette & decorative elements */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-blush-gold/10 via-transparent to-champagne/10" />
                <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 15vw 5vw hsl(var(--ivory))' }}></div>
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-champagne/20 rounded-full filter blur-3xl opacity-50 animate-pulse" />
                <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blush-gold/20 rounded-full filter blur-3xl opacity-50 animate-pulse [animation-delay:-4s]" />

                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start animate-fade-in-up">
                    {/* Journal Input Column */}
                    <div className="lg:col-span-2 w-full h-full">
                        <JournalInput value={journalText} onChange={(e) => setJournalText(e.target.value)} />
                    </div>

                    {/* Metrics Column */}
                    <div className="w-full space-y-8">
                        {/* REPLACED: <MoodRating value={mood} onValueChange={setMood} /> */}
                        <KeyInsightInput
                            value={keyInsight}
                            onChange={(e) => setKeyInsight(e.target.value)}
                            journalText={journalText}
                            onAutoSummarize={handleAutoSummarize}
                            loading={keyInsightLoading}
                        /> {/* NEW: Key Insight Input */}
                        <MetricSlider 
                            label="Energy" 
                            value={energy} 
                            onValueChange={setEnergy}
                            min={0} max={10} step={1}
                        />
                        <EmotionTags value={emotionTag} onValueChange={setEmotionTag} />
                        <SleepInput value={sleep} onChange={(e) => setSleep(e.target.value)} />
                        
                        {error && (
                            <div className="text-red-600 font-semibold text-center mb-2">{error}</div>
                        )}
                        <Button 
                          onClick={handleSave}
                          className="w-full text-lg font-canela font-bold bg-brand-navy text-ivory 
                              hover:bg-brand-navy/90 
                              transition-shadow duration-300 ease-out 
                              shadow-[0_12px_32px_rgba(0,0,0,0.35)] 
                              hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] 
                              focus-visible:shadow-[0_0_0_3px_rgba(255,215,160,0.5)] 
                              !mt-12 h-14 rounded-2xl"
                          disabled={!isFormValid}
                        >
                          Save Entry
                        </Button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default JournalPage;