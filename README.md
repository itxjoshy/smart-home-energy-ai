# smart-home-energy-ai
AI-powered smart home energy management app for West African households
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

- **Frontend** — React + TypeScript
- **Backend** — Firebase Cloud Functions
- **Database** — Firebase Firestore (real-time)
- **Smart plug data** — Tuya API (mock data generator included for dev)
- **ML** — TensorFlow.js for usage prediction
- **Recommendations** — LLM API for natural language suggestions
- **Deployment** — Vercel + Firebase Hosting

---

## How it works

```
smart plugs → data pipeline → firestore → tfjs model → llm → dashboard
```

The TensorFlow.js model learns your usage patterns over time and predicts what your consumption will look like over the next day or week. That data gets sent to an LLM which turns it into actual recommendations — not just "use less electricity" but "your freezer is running at full power between 2am and 6am when the NEPA supply is most stable, consider adjusting your generator schedule."

---

## Features

- Per-device real-time consumption monitoring
- NEPA grid vs generator tracking (separate)
- Daily and weekly usage predictions
- Natural language savings recommendations in Naira
- Works on 3G and intermittent connections
- Mobile responsive

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
cp .env.example .env
# add your Firebase and LLM API keys to .env
npm run dev
```

For smart plug integration you need a Tuya developer account. If you just want to run it locally there's a mock data generator in `/src/services/mockData.ts` that simulates realistic Nigerian household usage patterns — load shedding schedules included.

---

## Project structure

```
src/
├── components/
│   ├── Dashboard/        — main energy overview
│   ├── DeviceList/       — per-device breakdown
│   ├── Charts/           — usage visualisation
│   └── AIAssistant/      — recommendations chat
├── services/
│   ├── firebase.ts       — firestore integration
│   ├── smartplug.ts      — tuya api + mock data
│   ├── prediction.ts     — tensorflow.js model
│   └── llm.ts            — llm api calls
├── models/               — trained tfjs model files
└── hooks/                — custom react hooks
functions/                — firebase cloud functions
```

---

## Status

This is my final year project at Mewar International University. Currently in active development — started September 2026, submitting April 2027.

Milestones:
- [x] Architecture and planning
- [x] Firebase setup and data structure
- [ ] Smart plug integration + mock data generator
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
