
import React, { useState } from 'react';
import JournalInput from '@/components/journal/JournalInput';
import MoodRating from '@/components/journal/MoodRating';
import MetricSlider from '@/components/journal/MetricSlider';
import SleepInput from '@/components/journal/SleepInput';
import { Button } from '@/components/ui/button';
import AppNavbar from '@/components/layout/AppNavbar';
import EmotionTags from '@/components/journal/EmotionTags';
import { Check } from 'lucide-react';

const JournalPage = () => {
    const [journalText, setJournalText] = useState("");
    const [mood, setMood] = useState("neutral");
    const [energy, setEnergy] = useState([5]);
    const [emotionTag, setEmotionTag] = useState("grateful");
    const [sleep, setSleep] = useState("7.5");
    const [isFocused, setIsFocused] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSave = async () => {
        setIsLoading(true);
        console.log({
            journalText,
            mood,
            energy: energy[0],
            emotionTag,
            sleep
        });
        
        // Simulate save delay
        setTimeout(() => {
            setIsLoading(false);
            setIsSaved(true);
            
            // Reset after 3 seconds
            setTimeout(() => {
                setIsSaved(false);
            }, 3000);
        }, 500);
    }

    return (
        <>
            <AppNavbar />
            <main className="relative min-h-screen bg-ivory text-warm-gray font-sans flex items-center justify-center p-4 sm:p-8 overflow-hidden pt-24">
                {/* Vignette & decorative elements */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-blush-gold/10 via-transparent to-champagne/10" />
                <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 15vw 5vw hsl(var(--ivory))' }}></div>
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-champagne/20 rounded-full filter blur-3xl opacity-50 animate-pulse" />
                <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blush-gold/20 rounded-full filter blur-3xl opacity-50 animate-pulse [animation-delay:-4s]" />

                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                    {/* Journal Input Column */}
                    <div className="lg:col-span-2 w-full h-full animate-fade-in-up">
                        <JournalInput 
                            value={journalText} 
                            onChange={(e) => setJournalText(e.target.value)}
                            isFocused={isFocused}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        />
                    </div>

                    {/* Metrics Column */}
                    <div className={`w-full space-y-10 transition-opacity duration-500 ${isFocused ? 'opacity-50' : 'opacity-100'}`}>
                        <div className="animate-stagger-fade-in [animation-delay:200ms]">
                            <MoodRating value={mood} onValueChange={setMood} />
                        </div>
                        
                        <div className="animate-stagger-fade-in [animation-delay:400ms]">
                            <MetricSlider 
                                label="Energy" 
                                value={energy} 
                                onValueChange={setEnergy}
                                min={0} max={10} step={1}
                            />
                        </div>
                        
                        <div className="animate-stagger-fade-in [animation-delay:600ms]">
                            <EmotionTags value={emotionTag} onValueChange={setEmotionTag} />
                        </div>
                        
                        <div className="animate-stagger-fade-in [animation-delay:800ms]">
                            <SleepInput value={sleep} onChange={(e) => setSleep(e.target.value)} />
                        </div>
                        
                        <div className="animate-stagger-fade-in [animation-delay:1000ms]">
                            <Button 
                                onClick={handleSave}
                                disabled={isLoading || isSaved}
                                className={`w-full text-lg bg-brand-navy text-ivory hover:bg-brand-navy/90 transition-all duration-300 shadow-xl shadow-blush-gold/30 !mt-12 h-16 font-canela tracking-wide ${
                                    isLoading ? 'animate-press-down' : 'hover:animate-lift hover:shadow-2xl hover:shadow-blush-gold/40'
                                }`}
                            >
                                {isSaved ? (
                                    <span className="flex items-center space-x-3">
                                        <Check className="h-5 w-5 animate-checkmark" />
                                        <span>Saved</span>
                                    </span>
                                ) : isLoading ? (
                                    "Saving..."
                                ) : (
                                    "Save Entry"
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default JournalPage;
