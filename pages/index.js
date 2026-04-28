import React, { useState } from 'react';
import Head from 'next/head';
import { trainingData } from '../src/data/training'; 
import PricingSection from '../src/components/Pricing';

export default function SovereignFinalV3() {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeTab, setActiveTab] = useState('platform');

  const years = Array.from({ length: 30 }, (_, i) => 2026 - i);
  const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const step = trainingData.steps[currentStep];

  return (
    <div dir="rtl" style={{ backgroundColor: "#f4f7f6", minHeight: "100vh", fontFamily: "'Cairo', sans-serif", paddingBottom: "100px" }}>
      <Head>
        <title>منصة المنصور - الإصدار السيادي</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ background: "#0a192f", color: "white", padding: "25px", textAlign: "center", borderBottom: "4px solid #d4af37" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 900, margin: 0 }}>🏛️ منصة المنصور الاستراتيجية</h2>
      </div>

      <main style={{ maxWidth: "600px", margin: "20px auto", padding: "0 15px" }}>
        {activeTab === 'pricing' && <PricingSection />}
        {activeTab === 'admin' && <div style={{textAlign:'center', padding:'50px'}}>⚙️ ركن الإدارة قيد التفعيل...</div>}

        {activeTab === 'platform' && (
          <div style={{ background: "white", borderRadius: "20px", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px", background: "#f8f9fa", padding: "10px", borderRadius: "10px" }}>
              {trainingData.steps.map((s, i) => (
                <div key={i} style={{ fontSize: "11px", fontWeight: 900, color: i === currentStep ? "#0a192f" : "#adb5bd" }}>{i+1}. {s.label}</div>
              ))}
            </div>

            <h3 style={{ color: "#0a192f", fontWeight: 900, marginBottom: "25px" }}>{step.label}</h3>

            {step.fields && step.fields.map(f => (
              <div key={f.id} style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontWeight: 700, marginBottom: "8px", fontSize: "14px", color: "#0a192f" }}>{f.label}</label>
                
                {f.type === 'file-upload' ? (
                  <div style={{ border: "2px dashed #d4af37", padding: "15px", borderRadius: "12px", textAlign: "center", background: "#fffdf5", position: 'relative' }}>
                    <input type="file" style={{ opacity: 0, position: 'absolute', width: '100%', height: '50px', cursor: 'pointer' }} />
                    <span style={{ fontSize: "12px", color: "#d4af37", fontWeight: 900 }}>📤 اضغط لرفع الشعار الرسمي</span>
                  </div>
                ) : f.type === 'security-dropdown' ? (
                  <select style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #ddd", background: "#fff", fontWeight: 700, color: "#c0392b" }}>
                    <option>--- حدد السرية ---</option>
                    <option>📄 عام (Public)</option>
                    <option>🔒 مقيد (Restricted)</option>
                    <option>🛑 سري (Confidential)</option>
                    <option>💎 سري للغاية (Top Secret)</option>
                  </select>
                ) : f.type === 'strategic-date' ? (
                  <div style={{ display: "flex", gap: "8px" }}>
                    <select style={{ flex: 1.2, padding: "12px", borderRadius: "10px", border: "1px solid #ddd", background: "#fff", fontWeight: 700 }}>
                      <option>السنة</option>
                      {years.map(y => <option key={y}>{y}</option>)}
                    </select>
                    <select style={{ flex: 1.5, padding: "12px", borderRadius: "10px", border: "1px solid #ddd", background: "#fff", fontWeight: 700 }}>
                      <option>الشهر</option>
                      {months.map((m, i) => <option key={i}>{m}</option>)}
                    </select>
                    <select style={{ flex: 1, padding: "12px", borderRadius: "10px", border: "1px solid #ddd", background: "#fff", fontWeight: 700 }}>
                      <option>اليوم</option>
                      {days.map(d => <option key={d}>{d}</option>)}
                    </select>
                  </div>
                ) : (
                  <input type="text" placeholder={f.placeholder} style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #ddd", boxSizing: "border-box", fontFamily: "inherit" }} />
                )}
              </div>
            ))}

            {step.questions && step.questions.map(q => (
              <div key={q.id} style={{ marginBottom: "25px" }}>
                <label style={{ display: "block", fontWeight: 900, fontSize: "16px", marginBottom: "8px" }}>{q.id}. {q.q}</label>
                <div style={{ background: "#fff9db", padding: "10px", borderRadius: "8px", borderRight: "4px solid #fab005", fontSize: "12px" }}>
                  <b>💡 إرشاد:</b> {q.hint}<br/><i>{q.example}</i>
                </div>
                <textarea rows="3" style={{ width: "100%", padding: "14px", marginTop: "10px", borderRadius: "10px", border: "1px solid #eee", fontFamily: "inherit" }}></textarea>
              </div>
            ))}

            <div style={{ display: "flex", gap: "10px", marginTop: "30px" }}>
              {currentStep > 0 && <button onClick={() => setCurrentStep(0)} style={{ flex: 1, padding: "15px", borderRadius: "12px", background: "white", border: "1px solid #ddd", fontWeight: 700 }}>السابق</button>}
              <button onClick={() => currentStep < trainingData.steps.length - 1 ? setCurrentStep(currentStep + 1) : null} style={{ flex: 2, padding: "15px", borderRadius: "12px", background: "#0a192f", color: "white", fontWeight: 900, border: "none" }}>
                {currentStep < trainingData.steps.length - 1 ? "التالي" : "توليد التقرير 📄"}
              </button>
            </div>
          </div>
        )}
      </main>

      <nav style={{ position: "fixed", bottom: 0, width: "100%", height: "80px", background: "white", display: "flex", borderTop: "1px solid #eee", zIndex: 1000, paddingBottom: "10px" }}>
        {[ {id: 'platform', l: 'المنصة', i: '🏠'}, {id: 'pricing', l: 'الباقات', i: '💳'}, {id: 'admin', l: 'الإدارة', i: '⚙️'} ].map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{ flex: 1, border: "none", background: "none", color: activeTab === tab.id ? "#0a192f" : "#adb5bd" }}>
            <div style={{ fontSize: "24px" }}>{tab.i}</div>
            <div style={{ fontSize: "12px", fontWeight: 900 }}>{tab.l}</div>
          </button>
        ))}
      </nav>
    </div>
  );
}
