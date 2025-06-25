import React, { useState, useRef, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

const assistantStyle = {
  position: 'fixed', bottom: 32, right: 32, width: 64, height: 64, borderRadius: '50%', background: '#0d0d0d',
  boxShadow: '0 0 24px #00ff99, 0 0 8px #00ff99 inset', border: '2px solid #00ff99', zIndex: 9999, cursor: 'pointer',
  display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s, box-shadow 0.2s'
};
const assistantImg = {
  width: 44, height: 44, borderRadius: '50%', boxShadow: '0 0 12px #00ff99'
};
const chatStyle = {
  position: 'fixed', bottom: 110, right: 32, width: 340, maxWidth: '95vw', height: 480, maxHeight: '80vh',
  background: '#0d0d0d', color: '#00ff99', borderRadius: 18, boxShadow: '0 0 32px #00ff99, 0 0 8px #222',
  zIndex: 10000, display: 'flex', flexDirection: 'column', overflow: 'hidden', animation: 'alienfx-fadein 0.4s'
};
const headerStyle = {
  background: '#111', color: '#00ff99', fontFamily: 'Orbitron, Share Tech Mono, monospace', fontWeight: 'bold',
  fontSize: '1.1rem', padding: '14px 18px', borderBottom: '1px solid #00ff99', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
};
const closeBtnStyle = {
  color: '#00ff99', fontSize: '1.3rem', cursor: 'pointer', border: 'none', background: 'none', transition: 'color 0.2s'
};
const messagesStyle = {
  flex: 1, padding: 16, overflowY: 'auto', fontFamily: 'Share Tech Mono, monospace', fontSize: '1rem', background: 'transparent'
};
const inputBarStyle = {
  display: 'flex', borderTop: '1px solid #00ff99', background: '#111', padding: 10
};
const inputStyle = {
  flex: 1, border: 'none', background: '#181818', color: '#00ff99', borderRadius: 8, padding: '8px 12px', fontSize: '1rem', fontFamily: 'Share Tech Mono, monospace', outline: 'none'
};
const sendBtnStyle = {
  background: '#00ff99', color: '#0d0d0d', border: 'none', borderRadius: 8, marginLeft: 8, padding: '8px 16px', fontWeight: 'bold', fontFamily: 'Orbitron, monospace', boxShadow: '0 0 8px #00ff99', cursor: 'pointer', transition: 'background 0.2s, color 0.2s'
};

export default function AlienAIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'Hi! I am ALIENFX Assistant 🤖. Ask me anything about Alien Forex Trading.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const querySnapshot = await getDocs(collection(db, 'services'));
      const servicesData = querySnapshot.docs.map(doc => doc.data());
      setServices(servicesData);
    };
    fetchServices();
  }, []);

  const scrollToBottom = () => {
    if (messagesEndRef.current) messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to bottom on new message
  useEffect(scrollToBottom, [messages, open]);

  async function askGemini(question) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    const servicesInfo = services.map(s => `${s.title} (${s.price}): ${s.desc}`).join('\n');
    const systemPrompt = `You are ALIENFX Assistant, a helpful AI for Alien Forex Trading. Here are the available services:\n${servicesInfo}\n\nOnly answer questions about Alien Forex services, prices, contact, account management, trading challenges, and prop firms. If asked about anything else, politely refuse.`;
    
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: `${systemPrompt}\n\n${question}` }] }],
        safetySettings: [{ category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }],
        generationConfig: { temperature: 0.7 }
      })
    });

    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not get a response. Please try again.';
  }

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const answer = await askGemini(input);
      setMessages(prev => [...prev, { from: 'ai', text: answer }]);
    } catch (error) {
      console.error("Error fetching from Gemini:", error);
      setMessages(prev => [...prev, { from: 'ai', text: 'Sorry, there was an error. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  const assistantButton = (
    <div
      style={{ ...assistantStyle, ...(open ? { boxShadow: '0 0 40px #00ff99, 0 0 16px #00ff99 inset', transform: 'scale(1.08)' } : {}) }}
      onClick={() => setOpen(true)}
      title="Chat with ALIENFX Assistant"
    >
      <img src="https://i.ibb.co/99GDshxN/IMG-1181.jpg" alt="AI Assistant" style={assistantImg} />
    </div>
  );

  const chatWindow = (
    <div style={chatStyle}>
      <div style={headerStyle}>
        ALIENFX Assistant 🤖
        <button style={closeBtnStyle} onClick={() => setOpen(false)} aria-label="Close">&times;</button>
      </div>
      <div style={messagesStyle}>
        {messages.map((msg, i) => (
          <div key={i} className={`msg ${msg.from}`} style={{ textAlign: msg.from === 'user' ? 'right' : 'left', color: msg.from === 'user' ? '#fff' : '#00ff99', marginBottom: 14 }}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form style={inputBarStyle} onSubmit={handleSend} autoComplete="off">
        <input
          style={inputStyle}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask about Alien Forex..."
          disabled={loading}
        />
        <button style={sendBtnStyle} type="submit" disabled={loading}>{loading ? '...' : 'Send'}</button>
      </form>
    </div>
  );

  return (
    <>
      {assistantButton}
      {open && chatWindow}
      <style>{`
        @keyframes alienfx-fadein { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: translateY(0);} }
        .msg.user { text-align: right; }
        .msg.ai { text-align: left; }
        @media (max-width: 600px) {
          .alienfx-ai-chat { width: 98vw !important; right: 1vw !important; }
        }
      `}</style>
    </>
  );
}
