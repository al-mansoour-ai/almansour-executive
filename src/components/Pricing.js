import React from 'react';

export default function PricingSection() {
  const plans = [
    { title: "مجانية", price: "0$", desc: "1 تقرير استراتيجي", color: "#95a5a6" },
    { title: "احترافية", price: "50$", desc: "10 تقارير + دعم AI", color: "#d4af37" },
    { title: "مؤسسية", price: "200$", desc: "تقارير لامحدودة", color: "#0a192f" }
  ];

  return (
    <div style={{ display: "flex", gap: "12px", marginBottom: "30px" }}>
      {plans.map((plan, i) => (
        <div key={i} style={{ 
          flex: 1, 
          background: "white", 
          padding: "18px", 
          borderRadius: "15px", 
          textAlign: "center", 
          border: `2px solid ${plan.color}`, 
          boxShadow: "0 6px 15px rgba(0,0,0,0.05)" 
        }}>
          <div style={{ fontWeight: 900, color: plan.color, fontSize: "13px" }}>{plan.title}</div>
          <div style={{ fontSize: "24px", fontWeight: 900, margin: "8px 0", color: "#0a192f" }}>{plan.price}</div>
          <div style={{ fontSize: "10px", color: "#7f8c8d", fontWeight: 700 }}>{plan.desc}</div>
        </div>
      ))}
    </div>
  );
}
