import React, { useState } from "react";
import { Home, Monitor, Zap, BarChart2, User, Bell } from "lucide-react";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      <div className="page-header">
        <h1>Smart Home Energy AI</h1>
        <Bell size={23} color="var(--accent)" />
      </div>
      {activeTab === "home" && <div>Home Content</div>}
      {activeTab === "devices" && <div>Devices Content</div>}
      {activeTab === "insights" && <div>Insights Content</div>}
      {activeTab === "chatbot" && <div>Chatbot Content</div>}
      <nav className="bottom-nav">
        <button
          className={`nav-item ${activeTab === "home" ? "active" : ""}`}
          onClick={() => setActiveTab("home")}
        >
          <Home size={20} color="var(--accent)" />
          Home
        </button>

        <button
          className={`nav-item ${activeTab === "devices" ? "active" : ""}`}
          onClick={() => setActiveTab("devices")}
        >
          <Monitor size={20} color="var(--accent)" />
          Devices
        </button>

        <button
          className={`nav-item ${activeTab === "insights" ? "active" : ""}`}
          onClick={() => setActiveTab("insights")}
        >
          <Zap size={20} color="var(--accent)" />
          Insights
        </button>

        <button
          className={`nav-item ${activeTab === "chatbot" ? "active" : ""}`}
          onClick={() => setActiveTab("chatbot")}
        >
          <User size={20} color="var(--accent)" />
          Chatbot
        </button>
      </nav>
    </div>
  );
}

export default App;
