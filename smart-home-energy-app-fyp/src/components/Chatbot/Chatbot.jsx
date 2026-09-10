import React from "react";
import {
  ArrowUpRight,
  Bot,
  Mic,
  Plus,
  SendHorizonal,
  Sparkles,
} from "lucide-react";
import "./chatbot.css";

const quickActions = [
  "Reduce peak load",
  "Check appliances",
  "Energy forecast",
];

const messages = [
  {
    id: 1,
    sender: "assistant",
    text: "Hi! I’ve reviewed your home usage and your biggest savings opportunity is shifting heavy loads out of peak hours.",
    time: "9:41 AM",
  },
  {
    id: 2,
    sender: "user",
    text: "Can you suggest ways to lower my bill this week?",
    time: "9:42 AM",
  },
  {
    id: 3,
    sender: "assistant",
    text: "Absolutely. Running the washing machine after 10 PM and dimming unused rooms could save up to ₦500 this month.",
    time: "9:42 AM",
  },
  {
    id: 4,
    sender: "user",
    text: "Can you suggest ways to lower my bill this week?",
    time: "9:42 AM",
  },
];

function Chatbot() {
  return (
    <section className="chatbot-panel">
      <div className="chatbot-summary">
        <div className="summary-card">
          <span className="summary-label">Efficiency</span>
          <strong>84%</strong>
        </div>
        <div className="summary-card accent">
          <span className="summary-label">Next action</span>
          <strong>Shift laundry to 10 PM</strong>
        </div>
      </div>

      <div className="chatbot-quick-actions">
        {quickActions.map((action, index) => (
          <button key={index} className="quick-action" type="button">
            {action}
          </button>
        ))}
      </div>

      <div className="chatbot-body">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-message ${message.sender === "user" ? "user" : "assistant"}`}
          >
            <div className="message-bubble">
              <p>{message.text}</p>
              <span>{message.time}</span>
            </div>
          </div>
        ))}

        <div className="chat-message assistant insight-message">
          <div className="message-bubble insight-bubble">
            <div className="insight-header">
              <Sparkles size={14} />
              <span>AI insight</span>
            </div>
            <p>
              Your HVAC usage is 12% above the weekly average. A 2° thermostat
              adjustment can cut cost without affecting comfort.
            </p>
            <button type="button" className="insight-link">
              View suggestion
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="chatbot-composer">
        <button className="composer-icon" type="button" aria-label="Add item">
          <Plus size={18} />
        </button>

        <div className="composer-input-wrap">
          <input
            type="text"
            placeholder="Ask about energy usage..."
            aria-label="Chat input"
          />
        </div>

        <button
          className="composer-icon alt"
          type="button"
          aria-label="Voice input"
        >
          <Mic size={16} />
        </button>

        <button className="send-button" type="button" aria-label="Send message">
          <SendHorizonal size={16} />
        </button>
      </div>
    </section>
  );
}

export default Chatbot;
