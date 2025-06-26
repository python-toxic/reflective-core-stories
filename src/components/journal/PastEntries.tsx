import React from 'react';
import { Button } from '@/components/ui/button';
import { X, Edit, Save, Trash2 } from 'lucide-react'; // Import Lucide icons

// Define the JournalEntry type for better type safety
interface JournalEntry {
    _id: string;
    createdAt: string;
    journalText: string;
    keyInsight: string;
    energy: number;
    sleep: string;
    emotionTag: string;
    // Add other fields as they exist in your entry data
}

interface PastEntriesProps {
  show: boolean;
  onClose: () => void;
  entries: JournalEntry[]; // Use JournalEntry type
  loading: boolean;
  editStates: { [id: string]: boolean }; // Boolean flag for edit mode
  onEdit: (id: string) => void; // Function to set edit mode
  onChange: (id: string, field: keyof JournalEntry, value: string | number) => void; // Function to handle field changes
  onSave: (entry: JournalEntry) => void; // Function to save entry
  onDelete: (id: string) => void; // Function to delete entry
}

// Helper function for emotion tag styling
const getEmotionTagStyle = (emotionTag: string) => {
    switch (emotionTag.toLowerCase()) {
        case 'angry': return 'bg-red-100 text-red-700';
        case 'grateful': return 'bg-green-100 text-green-700';
        case 'hopeful': return 'bg-blue-100 text-blue-700';
        case 'joyful': return 'bg-yellow-100 text-yellow-700';
        case 'sad': return 'bg-purple-100 text-purple-700';
        case 'anxious': return 'bg-orange-100 text-orange-700';
        case 'calm': return 'bg-teal-100 text-teal-700';
        // Add more as needed, using your theme's colors if possible
        default: return 'bg-gray-100 text-gray-700';
    }
};

const PastEntries: React.FC<PastEntriesProps> = ({
  show,
  onClose,
  entries,
  loading,
  editStates,
  onEdit,
  onChange,
  onSave,
  onDelete,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl mx-auto glass-card rounded-3xl p-10 border border-champagne/30 shadow-2xl bg-white/70 backdrop-blur-lg animate-fade-in-up">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-canela text-3xl font-bold text-brand-navy">Your Past Entries</h2>
          <button
            onClick={onClose}
            className="text-warm-gray hover:text-brand-crimson transition-colors p-2 rounded-full hover:bg-champagne/50"
            aria-label="Close"
          >
            <X className="w-6 h-6" /> {/* Lucide X icon */}
          </button>
        </div>
        {/* Scrollable List */}
        <div className="max-h-[70vh] overflow-y-auto space-y-6 pr-2 custom-scrollbar">
          {loading ? (
            <div className="text-center text-warm-gray/60 py-8 font-sans">Loading your reflections...</div>
          ) : entries.length === 0 ? (
            <div className="text-center text-warm-gray/60 py-8 font-sans">
                <p className="mb-2">No entries found yet.</p>
                <p className="text-sm">Start journaling to see your history here!</p>
            </div>
          ) : (
            entries.map(entry => {
              const isEditing = !!editStates[entry._id];
              // currentEntryData will always reflect the latest state, whether original or being edited
              const currentEntryData = entry; 

              return (
                <div
                  key={entry._id}
                  className="glass-card group relative rounded-2xl p-5 border border-champagne/20 bg-ivory/60 shadow-md transition-all duration-300 ease-out hover:shadow-lg hover:border-blush-gold/40" // Added group, hover effects
                >
                    {/* Date & Emotion Tag */}
                    <div className="flex justify-between items-center mb-3"> {/* Increased mb */}
                        <span className="font-canela font-bold text-brand-navy text-lg">
                            {new Date(entry.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </span>
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${getEmotionTagStyle(currentEntryData.emotionTag)}`}> {/* Dynamic styling */}
                            {currentEntryData.emotionTag}
                        </span>
                    </div>

                    {/* Journal Text */}
                    <div className="mb-3"> {/* Added mb */}
                        {isEditing && <label className="block text-xs font-semibold text-warm-gray/80 mb-1">Journal</label>}
                        <textarea
                            className={`w-full min-h-[50px] max-h-[120px] resize-y rounded-xl p-3 text-warm-gray font-sans transition-all duration-200 ease-in-out
                                        ${isEditing ? 'bg-ivory/40 border border-champagne/30 focus:ring-2 focus:ring-blush-gold' : 'bg-transparent border-transparent overflow-hidden line-clamp-3'}`}
                            value={currentEntryData.journalText}
                            onChange={e => onChange(entry._id, "journalText", e.target.value)}
                            readOnly={!isEditing}
                        />
                    </div>

                    {/* Key Insight */}
                    <div className="mb-3"> {/* Added mb */}
                        {isEditing && <label className="block text-xs font-semibold text-warm-gray/80 mb-1">Key Insight</label>}
                        <input
                            className={`w-full rounded-xl p-3 text-warm-gray font-sans transition-all duration-200 ease-in-out
                                        ${isEditing ? 'bg-ivory/40 border border-champagne/30 focus:ring-2 focus:ring-blush-gold' : 'bg-transparent border-transparent overflow-hidden line-clamp-1'}`}
                            value={currentEntryData.keyInsight}
                            onChange={e => onChange(entry._id, "keyInsight", e.target.value)}
                            readOnly={!isEditing}
                        />
                    </div>

                    {/* Energy & Sleep */}
                    <div className="flex gap-4 mb-4"> {/* Added mb */}
                        <div className="flex-1">
                            {isEditing && <label className="block text-xs font-semibold text-warm-gray/80 mb-1">Energy</label>}
                            <input
                                type="number"
                                className={`w-full rounded-xl p-3 text-warm-gray font-sans transition-all duration-200 ease-in-out
                                            ${isEditing ? 'bg-ivory/40 border border-champagne/30 focus:ring-2 focus:ring-blush-gold' : 'bg-transparent border-transparent'}`}
                                value={currentEntryData.energy}
                                onChange={e => onChange(entry._id, "energy", Number(e.target.value))}
                                readOnly={!isEditing}
                            />
                        </div>
                        <div className="flex-1">
                            {isEditing && <label className="block text-xs font-semibold text-warm-gray/80 mb-1">Sleep</label>}
                            <input
                                className={`w-full rounded-xl p-3 text-warm-gray font-sans transition-all duration-200 ease-in-out
                                            ${isEditing ? 'bg-ivory/40 border border-champagne/30 focus:ring-2 focus:ring-blush-gold' : 'bg-transparent border-transparent'}`}
                                value={currentEntryData.sleep}
                                onChange={e => onChange(entry._id, "sleep", e.target.value)}
                                readOnly={!isEditing}
                            />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className={`flex gap-3 justify-end pt-2 transition-opacity duration-300 ${!isEditing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}> {/* Dynamic opacity */}
                        {!isEditing ? (
                            <>
                                <Button
                                    variant="ghost"
                                    className="rounded-xl px-4 py-2 text-brand-navy border border-brand-navy/20 hover:bg-brand-navy/10 font-bold text-sm"
                                    onClick={() => onEdit(entry._id)}
                                >
                                    <Edit className="w-4 h-4 mr-2" /> Edit
                                </Button>
                                <button
                                    className="p-2 rounded-full text-brand-crimson hover:bg-brand-crimson/10 transition-colors"
                                    title="Delete Entry"
                                    onClick={() => onDelete(entry._id)}
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </>
                        ) : (
                            <>
                                <Button
                                    variant="ghost"
                                    className="rounded-xl px-4 py-2 text-brand-navy border border-brand-navy/20 hover:bg-brand-navy/10 font-bold text-sm"
                                    onClick={() => onSave(entry)}
                                >
                                    <Save className="w-4 h-4 mr-2" /> Save
                                </Button>
                                <button
                                    className="p-2 rounded-full text-brand-crimson hover:bg-brand-crimson/10 transition-colors"
                                    title="Delete Entry"
                                    onClick={() => onDelete(entry._id)}
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </>
                        )}
                    </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default PastEntries;