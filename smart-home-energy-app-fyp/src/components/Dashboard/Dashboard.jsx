import React from "react";
import { Banknote } from "lucide-react";
import { Pie, PieChart, Cell, Tooltip, ResponsiveContainer } from "recharts";

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
  const COLORS = ["#f59e0b", "#0062b8ff"];
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
        <p className="amount-monthly ">₦12,444</p>
        <div className="saving-insight-ai">
          saving 12% <span>vs</span> last month
        </div>
      </div>
      <div className="section">
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
            <ResponsiveContainer width={165} height={165}>
              <PieChart>
                <Pie
                  data={enUsageData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={80}
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
          {/* <div className="chart-breakdown">
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
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
