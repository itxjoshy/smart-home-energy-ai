# smart-home-energy-ai

Energy is expensive in Nigeria. Like, genuinely expensive — and most people have no idea where it's all going. You get your NEPA bill at the end of the month and it's just a number. No breakdown. No context. No way to know if the AC is killing you or if it's the freezer you leave running all night.

I built this to fix that.

---

## What it does

Connects to your smart plugs, watches your power usage over time, and tells you what's actually eating your electricity — and what you can do about it. The suggestions come out in plain English, calculated in Naira, and it works fine on a bad connection.

It also tracks your NEPA supply separately from your generator. Because in Nigeria those are two very different things and pretending otherwise doesn't help anyone.

---

## Why I built it

I'm from Abuja. I've watched my family pay high electricity bills for years without understanding why. Every month the bill arrives and every month it's a surprise. I wanted to build something that gives ordinary households actual visibility — not charts for the sake of charts, but information that helps you make a decision.

Most energy apps are built for the UK or US. This one isn't.

---

## Stack

- **Frontend** — React + JavaScript (Vite)
- **Styling** — CSS
- **Backend** — Firebase Cloud Functions
- **Database** — Firebase Firestore (real-time)
- **Smart plug data** — Mock data generator (simulates Nigerian household usage patterns)
- **ML** — TensorFlow.js for usage prediction
- **Recommendations** — LLM API for natural language suggestions
- **Deployment** — Vercel

---

## How it works

```
mock data generator → data pipeline → firestore → tfjs model → llm → dashboard
```

The mock data generator simulates realistic Nigerian household power consumption — NEPA load shedding schedules, generator switching, and appliance patterns included. The TensorFlow.js model learns usage patterns over time and predicts what consumption will look like over the next day or week. That data gets sent to an LLM which turns it into actual recommendations — not just "use less electricity" but specific, actionable suggestions calculated in Naira.

---

## Features

- Per-device real-time consumption monitoring
- NEPA grid vs generator tracking (separate)
- Daily and weekly usage predictions
- Natural language savings recommendations in Naira
- Works on 3G and intermittent connections
- Mobile-first design

Things I'm still building:

- Anomaly detection for unusual spikes
- Multi-device household profiles
- PDF report export

---

## Running it locally

```bash
git clone https://github.com/itxjoshy/smart-home-energy-ai.git
cd smart-home-energy-ai
npm install
cp .env.example .env.local
# add your Firebase and LLM API keys to .env.local
npm run dev
```

The mock data generator in `/src/services/mockData.js` runs out of the box with no external dependencies — no smart plug hardware or API account needed to develop locally.

---

## Project structure

```
src/
├── App.jsx                   — root component and routing
├── App.css                   — app-level styles
├── index.css                 — global styles and CSS variables
├── main.jsx                  — entry point
├── assets/                   — images and static files
└── components/
    ├── Dashboard/
    │   ├── Dashboard.jsx     — main energy overview
    │   └── Dashboard.css
    ├── DeviceList/
    │   ├── DeviceList.jsx    — per-device consumption breakdown
    │   └── DeviceList.css
    ├── Charts/
    │   ├── Charts.jsx        — usage visualisation
    │   └── Charts.css
    └── AIAssistant/
        ├── AIAssistant.jsx   — LLM recommendations chat
        └── AIAssistant.css
```

---

## Services

```
src/services/
├── firebase.js       — firestore integration
├── mockData.js       — Nigerian household data generator
├── prediction.js     — tensorflow.js model
└── llm.js            — llm api calls
```

---

## Status

This is my final year project at Mewar International University. Currently in active development — started June 2026, submitting April 2027.

Milestones:

- [x] Architecture and planning
- [x] Vite + React project setup
- [x] Firebase project initialised
- [ ] Mock data generator
- [ ] Real-time dashboard
- [ ] TensorFlow.js prediction model
- [ ] LLM recommendations layer
- [ ] Evaluation and testing

---

## Evaluation

Part of what makes this more than just a project is measuring whether it actually works. I'm building a formal evaluation against 20+ simulated household profiles — tracking prediction accuracy (MAE on 7-day forecasts), recommendation relevance, and response latency. Results will be in `/evaluation/results.md` when done.

---

## License

MIT — use it, adapt it, build on it.

---

Built by [Josiah Audu](https://audujosiahdev.vercel.app) — josiahaudu2012@gmail.com
