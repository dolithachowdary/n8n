import { useState, useEffect, useRef } from "react";
import "./App.css";

const WEBHOOK_URL = "https://dolitha.app.n8n.cloud/webhook-test/api";

function App() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! How can I help you today?",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput("");

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setLoading(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userText,
          timestamp: Date.now(),
        }),
      });

      const text = await response.text();

      setMessages(prev => [
        ...prev,
        {
          sender: "bot",
          text
        }
      ]);

      // Handle array or object response from n8n
      let replyText = "No response received.";
      if (data) {
        const item = Array.isArray(data) ? data[0] : data;
        if (typeof item === "string") {
          replyText = item;
        } else if (item) {
          replyText = item.reply || item.output || item.response || item.text || item.message || JSON.stringify(item);
        }
      }

      setMessages((prev) => [...prev, { sender: "bot", text: replyText }]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="chat-card">
        {/* Header */}
        <div className="header">
          <div className="header-info">
            <h2>HealthCheck Pro</h2>
            <div className="status-indicator">
              <span className="pulse-dot"></span>
              <span>Online</span>
            </div>
          </div>
        </div>

        {/* Chat window */}
        <div className="messages-window">
          {messages.map((msg, index) => (
            <div key={index} className={`message-wrapper ${msg.sender}`}>
              <div className="avatar">
                {msg.sender === "bot" ? "🤖" : "👤"}
              </div>
              <div className="message-bubble">
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="message-wrapper bot loading">
              <div className="avatar">🤖</div>
              <div className="message-bubble typing-bubble">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input area */}
        <div className="input-area">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={loading}
          />
          <button onClick={handleSend} disabled={loading || !input.trim()}>
            {loading ? (
              <span className="spinner"></span>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;