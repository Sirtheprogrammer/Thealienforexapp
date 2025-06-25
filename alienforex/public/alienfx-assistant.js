// Floating AI Assistant for Alien Forex Trading
(function(){
  // Inject styles
  const style = document.createElement('style');
  style.innerHTML = `
    #alienfx-ai-btn {
      position: fixed; bottom: 32px; right: 32px; width: 64px; height: 64px; border-radius: 50%; background: #0d0d0d;
      box-shadow: 0 0 24px #00ff99, 0 0 8px #00ff99 inset; border: 2px solid #00ff99; z-index: 9999; cursor: pointer;
      display: flex; align-items: center; justify-content: center; transition: transform 0.2s, box-shadow 0.2s;
    }
    #alienfx-ai-btn:hover { transform: scale(1.08); box-shadow: 0 0 40px #00ff99, 0 0 16px #00ff99 inset; }
    #alienfx-ai-btn img { width: 44px; height: 44px; border-radius: 50%; box-shadow: 0 0 12px #00ff99; }
    #alienfx-ai-chat {
      position: fixed; bottom: 110px; right: 32px; width: 340px; max-width: 95vw; height: 480px; max-height: 80vh;
      background: #0d0d0d; color: #00ff99; border-radius: 18px; box-shadow: 0 0 32px #00ff99, 0 0 8px #222;
      z-index: 10000; display: none; flex-direction: column; overflow: hidden; animation: alienfx-fadein 0.4s;
    }
    @keyframes alienfx-fadein { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: translateY(0);} }
    #alienfx-ai-chat.open { display: flex; }
    #alienfx-ai-header {
      background: #111; color: #00ff99; font-family: 'Orbitron', 'Share Tech Mono', monospace; font-weight: bold;
      font-size: 1.1rem; padding: 14px 18px; border-bottom: 1px solid #00ff99; display: flex; align-items: center; justify-content: space-between;
    }
    #alienfx-ai-header .close-btn { color: #00ff99; font-size: 1.3rem; cursor: pointer; border: none; background: none; transition: color 0.2s; }
    #alienfx-ai-header .close-btn:hover { color: #fff; }
    #alienfx-ai-messages { flex: 1; padding: 16px; overflow-y: auto; font-family: 'Share Tech Mono', monospace; font-size: 1rem; background: transparent; scrollbar-width: thin; scrollbar-color: #00ff99 #222; }
    #alienfx-ai-messages .msg { margin-bottom: 14px; line-height: 1.5; word-break: break-word; }
    #alienfx-ai-messages .user { text-align: right; color: #fff; }
    #alienfx-ai-messages .ai { text-align: left; color: #00ff99; }
    #alienfx-ai-inputbar { display: flex; border-top: 1px solid #00ff99; background: #111; padding: 10px; }
    #alienfx-ai-input { flex: 1; border: none; background: #181818; color: #00ff99; border-radius: 8px; padding: 8px 12px; font-size: 1rem; font-family: 'Share Tech Mono', monospace; outline: none; }
    #alienfx-ai-send { background: #00ff99; color: #0d0d0d; border: none; border-radius: 8px; margin-left: 8px; padding: 8px 16px; font-weight: bold; font-family: 'Orbitron', monospace; box-shadow: 0 0 8px #00ff99; cursor: pointer; transition: background 0.2s, color 0.2s; }
    #alienfx-ai-send:hover { background: #0d0d0d; color: #00ff99; border: 1px solid #00ff99; }
    @media (max-width: 600px) { #alienfx-ai-chat { width: 98vw; right: 1vw; } #alienfx-ai-btn { right: 16px; bottom: 16px; } }
  `;
  document.head.appendChild(style);

  // Floating Button
  const btn = document.createElement('div');
  btn.id = 'alienfx-ai-btn';
  btn.title = 'Chat with ALIENFX Assistant';
  btn.innerHTML = '<img src="https://i.ibb.co/99GDshxN/IMG-1181.jpg" alt="AI Assistant" />';
  document.body.appendChild(btn);

  // Chat UI
  const chat = document.createElement('div');
  chat.id = 'alienfx-ai-chat';
  chat.innerHTML = `
    <div id="alienfx-ai-header">
      ALIENFX Assistant 🤖
      <button class="close-btn" id="alienfx-ai-close" aria-label="Close">&times;</button>
    </div>
    <div id="alienfx-ai-messages"></div>
    <form id="alienfx-ai-inputbar" autocomplete="off">
      <input id="alienfx-ai-input" type="text" placeholder="Ask about Alien Forex..." required />
      <button id="alienfx-ai-send" type="submit">Send</button>
    </form>
  `;
  document.body.appendChild(chat);

  // Toggle logic
  btn.onclick = () => chat.classList.toggle('open');
  chat.querySelector('#alienfx-ai-close').onclick = () => chat.classList.remove('open');

  // Scroll helper
  const messages = chat.querySelector('#alienfx-ai-messages');
  function scrollToBottom() { messages.scrollTop = messages.scrollHeight; }

  // Gemini API call
  async function askGemini(question) {
    const apiKey = 'AIzaSyBaAjV0i44aT4WwCDRJKP_DA3eFNC3G8Is';
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + apiKey;
    const systemPrompt = `You are ALIENFX Assistant, a helpful AI for Alien Forex Trading. Only answer questions about Alien Forex services, prices, contact, account management, trading challenges, and prop firms. If asked about anything else, politely refuse.`;
    const body = {
      contents: [
        { role: 'user', parts: [{ text: question }] }
      ],
      safetySettings: [
        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }
      ],
      generationConfig: { stopSequences: [], temperature: 0.7 }
    };
    body.contents.unshift({ role: 'system', parts: [{ text: systemPrompt }] });
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await res.json();
    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
      return data.candidates[0].content.parts.map(p => p.text).join('\n');
    }
    return 'Sorry, I could not get a response. Please try again.';
  }

  // Chat send logic
  chat.querySelector('#alienfx-ai-inputbar').onsubmit = async (e) => {
    e.preventDefault();
    const input = chat.querySelector('#alienfx-ai-input');
    const q = input.value.trim();
    if (!q) return;
    // Show user message
    const userMsg = document.createElement('div');
    userMsg.className = 'msg user';
    userMsg.textContent = q;
    messages.appendChild(userMsg);
    input.value = '';
    scrollToBottom();
    // Show loading
    const aiMsg = document.createElement('div');
    aiMsg.className = 'msg ai';
    aiMsg.textContent = 'Thinking...';
    messages.appendChild(aiMsg);
    scrollToBottom();
    // Get AI response
    try {
      const answer = await askGemini(q);
      aiMsg.textContent = answer;
    } catch (err) {
      aiMsg.textContent = 'Sorry, there was an error. Please try again.';
    }
    scrollToBottom();
  };
})();
