import React from "react";
import { Banknote } from "lucide-react";
import {
  Pie,
  PieChart,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
} from "recharts";

import "./dashboard.css";
function Dashboard() {
  const cardData = [
    {
      tag: "current load",
      value: "150 W",
    },
    {
      tag: "rate",
      value: "₦0.12 / Hr",
    },
    {
      tag: "devices",
      value: "5",
    },
  ];
  const moneyEst = [
    {
      tag: "est.bill",
      value: "₦3,000",
    },
    {
      tag: "savings opp.",
      value: "₦500",
    },
  ];
  const enUsageData = [
    { name: "NEPA", value: 70 },
    { name: "Generator", value: 30 },
  ];

  const peakIndex = 6;
  const energyData = [
    { time: "12AM", value: 0.3 },
    { time: "", value: 0.25 },
    { time: "", value: 0.35 },
    { time: "6AM", value: 0.55 },
    { time: "", value: 0.8 },
    { time: "12PM", value: 1.1 },
    { time: "", value: 1.2 }, // peak
    { time: "", value: 0.9 },
    { time: "6PM", value: 0.6 },
    { time: "", value: 0.42 },
    { time: "", value: 0.3 },
    { time: "NOW", value: 0.35 },
  ];
  const COLORS = ["#f59e0b", "#0062b8ff"];

  const aiRecommendations = [
    {
      id: 1,
      title: "Reduce usage during peak hours",
      Vtag: "high priority",
      tag: "priority",
      description:
        "Try to use heavy appliances during off-peak hours to save on energy costs.",
    },
    {
      id: 2,
      title: "Consider energy-efficient appliances",
      Vtag: "savings alert",
      tag: "savings",
      description:
        "Upgrading to energy-efficient appliances can significantly reduce your energy consumption.",
    },
    {
      id: 3,
      title: "Monitor your energy usage",
      Vtag: "warning",
      tag: "warning",
      description:
        "Keep track of your energy consumption patterns to identify areas for improvement.",
    },
  ];

  return (
    <section
      style={{
        padding: " 0 var(--space-md) 0 var(--space-md)",
      }}
    >
      <div className="card section">
        <div className="tag">
          {" "}
          <div className="indicator"></div>live status
        </div>
        <div className="card-content">
          {cardData.map((item, index) => (
            <div className="card-item" key={index}>
              <div className="card-hdr">{item.tag}</div>
              <div className="card-body">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="card section"
        style={{
          position: "relative",
        }}
      >
        <Banknote
          size={70}
          opacity={0.1}
          style={{
            position: "absolute",
            top: 10,
            right: 20,
          }}
        />
        <h2
          style={{
            fontSize: ".9rem",
            fontWeight: "bold",
            opacity: 0.5,
            textTransform: "uppercase",
          }}
        >
          current monthly spend
        </h2>
        <p className="amount-monthly ">₦12,445</p>
        <div className="saving-insight-ai">
          saving 12% <span>vs</span> last month
        </div>
      </div>
      <div className="section savings-section">
        {moneyEst.map((item, index) => (
          <div className="card est-savings" key={index}>
            <h3>{item.tag}</h3>
            <p
              className="amount-medium"
              style={{ color: index === 1 ? "orange" : "inherit" }}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
      <div className="card section energy-efficiency">
        <div className="card-body">
          <div className="text">
            <h3>energy efficiency score</h3>
            <p>your home is more efficient than 80% of homes in your area.</p>
          </div>
          <div className="percentage-count">84%</div>
        </div>
      </div>
      <div className="card section source-breakdown">
        <h3>energy source breakdown</h3>
        <div className="card-body">
          <div
            className="pie-wrapper"
            style={{
              position: "relative",
              width: "max-content",
            }}
          >
            <ResponsiveContainer width={120} height={120}>
              <PieChart>
                <Pie
                  data={enUsageData}
                  cx="50%"
                  cy="50%"
                  innerRadius={42}
                  outerRadius={52}
                  paddingAngle={0}
                  dataKey="value"
                >
                  {enUsageData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      stroke="none"
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <div
              className="text"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textTransform: "uppercase",
                textAlign: "center",
                fontSize: ".7rem",
                fontWeight: "bold",
              }}
            >
              total <br /> 100%
            </div>
          </div>
          <div className="chart-breakdown">
            <div className="chart-item">
              <div
                className="chart-color"
                style={{ backgroundColor: COLORS[0] }}
              ></div>
              <div className="chart-label">NEPA</div>
              <div className="chart-value">70%</div>
            </div>
            <div className="chart-item">
              <div
                className="chart-color"
                style={{ backgroundColor: COLORS[1] }}
              ></div>
              <div className="chart-label">Generator</div>
              <div className="chart-value">30%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card section usage-trend">
        <div className="hdr">
          <h3>energy usage trend</h3>
          <div className="peak-metrics">peak: 1.2kW</div>
        </div>
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={energyData}>
            <XAxis
              padding={{ left: 0 }}
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#ffffffff",
                fontSize: 12,
              }}
            />

            <Bar dataKey="value" radius={[2, 2, 0, 0]} barSize={20}>
              {energyData.map((_, index) => (
                <Cell
                  key={index}
                  fill={index === peakIndex ? "#4FC16A" : "#3C7F4A"}
                  fillOpacity={index === peakIndex ? 1 : 0.85}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="section ai-recommendations">
        <div className="hdr">
          <h3>ai recommendations</h3>
          <button>view all</button>
        </div>
        <div className="section-body">
          {aiRecommendations.map((item) => (
            <div key={item.id} className={`recommendation ${item.tag}`}>
              <div className={`visible-tag ${item.tag}`}>{item.Vtag}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
