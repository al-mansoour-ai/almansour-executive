import React, { useState } from 'react';
import Head from 'next/head';
import { trainingData } from '../src/data/training'; 
import PricingSection from '../src/components/Pricing';

export default function SovereignModularUI() {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeTab, setActiveTab] = useState('platform');

  // مصفوفات التاريخ الذكية
  const years = Array.from({ length: 30 }, (_, i) => 2026 - i);
  const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const step = trainingData.steps[currentStep];

  return (
    <div dir="rtl" style={{ backgroundColor: "#f4f7f6", minHeight: "100vh", fontFamily: "'Cairo', sans-serif", paddingBottom: "90px" }}>
      <Head>
        <title>المنصور - المنهجية الموزعة</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ background: "#0a192f", color: "white", padding: "25px", textAlign: "center", borderBottom: "4px solid #d4af37" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 900, margin: 0 }}>🏛️ منصة المنصور الاستراتيجية</h2>
      </div>

      <main style={{ maxWidth: "600px", margin: "20px auto", padding: "0 15px" }}>
        {activeTab === 'pricing' && <PricingSection />}

        {activeTab === 'platform' && (
          <div style={{ background: "white", borderRadius: "20px", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            
            {/* نظام المراحل */}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px", background: "#f8f9fa", padding: "10px", borderRadius: "10px" }}>
              {trainingData.steps.map((s, i) => (
                <div key={i} style={{ fontSize: "11px", fontWeight: 900, color: i === currentStep ? "#0a192f" : "#adb5bd" }}>{i+1}. {s.label}</div>
              ))}
            </div>

            <h3 style={{ color: "#0a192f", fontWeight: 900, marginBottom: "20px" }}>{step.label}</h3>

            {/* الحقول الذكية */}
            {step.fields && step.fields.map(f => (
              <div key={f.id} style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontWeight: 700, marginBottom: "8px", fontSize: "14px" }}>{f.label}</label>
                {f.type === 'strategic-date' ? (
                  <div style={{ display: "flex", gap: "8px" }}>
                    <select style={{ flex: 1.2, padding: "12px", borderRadius: "10px", border: "1px solid #ddd", background: "white" }}>
                      <option>السنة</option>
                      {years.map(y => <option key={y}>{y}</option>)}
                    </select>
                    <select style={{ flex: 1.5, padding: "12px", borderRadius: "10px", border: "1px solid #ddd", background: "white" }}>
                      <option>الشهر</option>
                      {months.map((m, i) => <option key={i}>{m}</option>)}
                    </select>
                    <select style={{ flex: 1, padding: "12px", borderRadius: "10px", border: "1px solid #ddd", background: "white" }}>
                      <option>اليوم</option>
                      {days.map(d => <option key={d}>{d}</option>)}
                    </select>
                  </div>
                ) : (
                  <input type="text" placeholder={f.placeholder} style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #ddd", boxSizing: "border-box" }} />
                )}
              </div>
            ))}

            {/* الأسئلة */}
            {step.questions && step.questions.map(q => (
              <div key={q.id} style={{ marginBottom: "25px" }}>
                <label style={{ display: "block", fontWeight: 900, fontSize: "16px", marginBottom: "8px" }}>{q.id}. {q.q}</label>
                <div style={{ background: "#fff9db", padding: "10px", borderRadius: "8px", borderRight: "4px solid #fab005", fontSize: "12px" }}>
                  <b>💡 إرشاد:</b> {q.hint}<br/><i>{q.example}</i>
                </div>
                <textarea rows="3" style={{ width: "100%", padding: "14px", marginTop: "10px", borderRadius: "10px", border: "1px solid #eee" }}></textarea>
              </div>
            ))}

            <div style={{ display: "flex", gap: "10px", marginTop: "30px" }}>
              {currentStep > 0 && <button onClick={() => setCurrentStep(0)} style={{ flex: 1, padding: "15px", borderRadius: "12px", background: "white", border: "1px solid #ddd" }}>السابق</button>}
              <button onClick={() => currentStep < trainingData.steps.length - 1 ? setCurrentStep(currentStep + 1) : null} style={{ flex: 2, padding: "15px", borderRadius: "12px", background: "#0a192f", color: "white", fontWeight: 900, border: "none" }}>
                {currentStep < trainingData.steps.length - 1 ? "التالي" : "توليد التقرير 📄"}
              </button>
            </div>
          </div>
        )}
      </main>

      <nav style={{ position: "fixed", bottom: 0, width: "100%", height: "75px", background: "white", display: "flex", borderTop: "1px solid #eee" }}>
        {[ {id: 'platform', l: 'المنصة', i: '🏠'}, {id: 'pricing', l: 'الباقات', i: '💳'} ].map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{ flex: 1, border: "none", background: "none", color: activeTab === tab.id ? "#0a192f" : "#adb5bd" }}>
            <div style={{ fontSize: "20px" }}>{tab.i}</div>
            <div style={{ fontSize: "12px", fontWeight: 900 }}>{tab.l}</div>
          </button>
        ))}
      </nav>
    </div>
  );
}
