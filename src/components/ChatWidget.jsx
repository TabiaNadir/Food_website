import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("http://localhost:5000/health-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input })
      });

      const data = await response.json();
      console.log("👀 Received from server:", data);

      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
      setInput("");
    } catch (err) {
      console.error("❌ Chat error:", err);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="w-80 h-96 bg-white shadow-xl rounded-xl p-4 flex flex-col">
          <div className="flex-1 overflow-y-auto mb-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`text-sm ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <p className="mb-1">
                  {msg.sender === "user" ? "🧍‍♀️" : "🤖"} {msg.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded px-2 py-1"
              placeholder="Describe your issue..."
            />
            <button
              onClick={sendMessage}
              className="bg-green-950 text-white px-3 py-1 rounded"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-green-600 text-white p-3 rounded-full shadow-lg"
        >
          💬
        </button>
      )}
    </div>
  );
}
