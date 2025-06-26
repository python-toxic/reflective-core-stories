import express from 'express';
import axios from 'axios';
const router = express.Router();

router.post('/chat', async (req, res) => {
  try {
    const { messages } = req.body; // [{role: 'user', content: '...'}, ...]
    const response =await axios.post('http://127.0.0.1:11434/api/chat', { 
      model: 'llama3',
      messages,
      stream: false
    });
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'AI server error.' });
  }
});

// Add summarization endpoint for frontend
router.post('/summarize', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: 'No text provided' });
    // Use the local AI model to generate a key insight (not just a summary)
    const aiResponse = await axios.post('http://127.0.0.1:11434/api/chat', {
      model: 'llama3',
      messages: [
        { role: 'system', content: 'You are a journaling assistant. Read the following journal entry and extract a single, actionable key insight or personal lesson that the user could write for themselves. Respond in the first person, as if the user is reflecting on their own experience. Be concise and insightful.' },
        { role: 'user', content: text }
      ],
      stream: false
    });
    const summary = aiResponse.data.choices?.[0]?.message?.content || aiResponse.data.message?.content || aiResponse.data.summary || 'No key insight generated.';
    res.json({ summary });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Summarization error.' });
  }
});

export default router;
