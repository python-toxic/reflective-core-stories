import express from 'express';
import auth from '../middleware/auth.js';
import JournalEntry from '../models/JournalEntry.js';

const router = express.Router();

// POST create a journal entry
router.post('/', auth, async (req, res) => {
  try {
    const { journalText, mood, energy, emotionTag, sleep, keyInsight } = req.body;
    if (!journalText || energy == null || !emotionTag || !sleep) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }
    const entry = new JournalEntry({
      user: req.userId,
      journalText,
      mood: mood || 'neutral', // fallback to 'neutral' if not provided
      energy,
      emotionTag,
      sleep,
      keyInsight: keyInsight || ''
    });
    await entry.save();
    res.status(201).json({ message: 'Entry saved successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to save entry.' });
  }
});

// GET analytics data
router.get('/summary', auth, async (req, res) => {
  try {
    const entries = await JournalEntry.find({ user: req.userId }).sort({ createdAt: 1 });

    if (!entries.length) return res.json({
      avgEnergy: 0, avgSleep: 0, dominantEmotionTag: 'None', entryCount: 0,
      wordCloud: [], memorableMoments: [], keyInsights: [], emotionTagBreakdown: [],
      timeSeries: []
    });

    const avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

    const avgEnergy = parseFloat(avg(entries.map(e => e.energy)).toFixed(1));
    const avgSleep = parseFloat(avg(entries.map(e => parseFloat(e.sleep))).toFixed(1));
    const emotionTagCount = {};
    const wordFreq = {};
    const memorableMoments = [];
    const timeSeries = [];

    entries.forEach(e => {
      // Count emotion tags
      emotionTagCount[e.emotionTag] = (emotionTagCount[e.emotionTag] || 0) + 1;

      // Word frequency
      e.journalText.split(/\s+/).forEach(w => {
        const word = w.toLowerCase().replace(/[^\w]/g, '');
        if (word.length > 3) wordFreq[word] = (wordFreq[word] || 0) + 1;
      });

      // Memorable moments
      if (e.journalText.length > 60) {
        memorableMoments.push({
          snippet: e.journalText.slice(0, 120) + '...',
          date: new Date(e.createdAt).toDateString(),
          emotionTag: e.emotionTag
        });
      }

      // Time series for chart
      timeSeries.push({
        date: new Date(e.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        energy: e.energy,
        sleep: parseFloat(e.sleep),
        emotionTag: e.emotionTag
      });
    });

    // Dominant emotion tag
    const dominantEmotionTag = Object.entries(emotionTagCount).sort((a, b) => b[1] - a[1])[0][0];

    // Pie chart data for emotion tags
    const emotionTagBreakdown = Object.entries(emotionTagCount)
      .map(([tag, count], idx) => ({
        name: tag.charAt(0).toUpperCase() + tag.slice(1),
        value: count,
        colorIdx: idx
      }));

    // Only include words used 3+ times in word cloud
    const wordCloud = Object.entries(wordFreq)
      .filter(([_, freq]) => freq >= 3)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([word, freq], idx) => ({
        word,
        size: ['text-xl', 'text-2xl', 'text-3xl', 'text-4xl'][Math.min(3, Math.floor(freq / 3))],
        color: idx % 2 === 0 ? 'text-navy' : 'text-gold'
      }));

    // Collect key insights (e.g., last 10 non-empty)
    const keyInsights = entries
      .filter(e => e.keyInsight && e.keyInsight.trim().length > 0)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 10)
      .map(e => ({
        keyInsight: e.keyInsight,
        date: new Date(e.createdAt).toDateString()
      }));

    res.json({
      avgEnergy,
      avgSleep,
      dominantEmotionTag,
      entryCount: entries.length,
      wordCloud,
      memorableMoments,
      keyInsights,
      emotionTagBreakdown,
      timeSeries
    });

  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
});

// GET all journal entries for the user
router.get('/all', auth, async (req, res) => {
  try {
    const entries = await JournalEntry.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json({ entries });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch entries.' });
  }
});

// PUT update a journal entry
router.put('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const entry = await JournalEntry.findOneAndUpdate(
      { _id: id, user: req.userId },
      update,
      { new: true }
    );
    if (!entry) return res.status(404).json({ message: 'Entry not found.' });
    res.json({ message: 'Entry updated.', entry });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update entry.' });
  }
});

export default router;
