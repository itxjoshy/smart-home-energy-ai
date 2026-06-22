import React from "react";
import "./devicelist.css";
const filters = ["highest consumption", "by room", "by device"];
const devices = [
  {
    icon: "❄️",
    live: true,
    device: "living room ac",
    room: "living room",
    powerDraw: 1.2,
    cost: 250,
    monthProj: 7500,
  },
  {
    icon: "🧊",
    live: true,
    device: "kitchen fridge",
    room: "kitchen",
    powerDraw: 0.15,
    cost: 80,
    monthProj: 2400,
  },
  {
    icon: "🛏️",
    live: false,
    device: "bedroom heater",
    room: "bedroom",
    powerDraw: 1.8,
    cost: 400,
    monthProj: 12000,
  },
  {
    icon: "🍳",
    live: true,
    device: "electric oven",
    room: "kitchen",
    powerDraw: 2.4,
    cost: 600,
    monthProj: 18000,
  },
  {
    icon: "🔌",
    live: false,
    device: "garage ev charger",
    room: "garage",
    powerDraw: 7.0,
    cost: 1500,
    monthProj: 45000,
  },
];
function DeviceList() {
  return (
    <section
      style={{
        padding: "0 16px",
      }}
    >
      <div className="input">
        <input type="text" placeholder="Search by devices" />
        <div className="filter-section">
          {filters.map((item, _i) => (
            <button key={_i}>{item}</button>
          ))}
        </div>
      </div>
      <div className="device-section section">
        {devices.map((item, _i) => (
          <div className="device-card card">
            <div className="card-hdr">
              <div className="icon">{item.icon}</div>
              <div
                className="live"
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: "50%",
                  background: item.live ? "var(--accent-dim)" : "gray",
                }}
              ></div>
            </div>
            <div className="device-info">
              <p className="device-name">{item.device}</p>
              <p className="device-room">{item.room}</p>
            </div>
            <div className="analytics">
              <div className="power-drw">
                <div className="current-drw">
                  <p>current draw</p>
                  <h3>{item.powerDraw} kW</h3>
                </div>
              </div>
              <div className="daily-cost">
                <p>daily cost</p>
                <h3>N{item.cost}</h3>
              </div>
            </div>
            <div className="month-prj">
              <p>monthly projection</p>
              <h3>N{item.monthProj.toLocaleString()}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DeviceList;
