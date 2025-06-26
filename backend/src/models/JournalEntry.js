import mongoose from 'mongoose';

const journalEntrySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  journalText: { type: String, required: true },
  mood: { type: String, required: true },
  energy: { type: Number, required: true },
  emotionTag: { type: String, required: true },
  sleep: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  keyInsight: { type: String, default: '' }
});

export default mongoose.model('JournalEntry', journalEntrySchema);
