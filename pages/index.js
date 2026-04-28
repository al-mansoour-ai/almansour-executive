import React, { useState } from 'react';
import Head from 'next/head';
import { trainingData } from '../src/data/training'; 
import PricingSection from '../src/components/Pricing';

export default function SovereignFinalUI() {
  const [activeTab, setActiveTab] = useState('platform');
  const [currentStep, setCurrentStep] = useState(0);

  // مصفوفات التاريخ الذكية لسرعة الاختيار
  const years = Array.from({ length: 40 }, (_, i) => 2026 - i);
  const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div dir="rtl" style={{ backgroundColor: "#f0f2f5", minHeight: "100vh", fontFamily: "'Cairo', sans-serif", paddingBottom: "100px" }}>
      <Head>
        <title>منصة المنصور الاستراتيجية</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ background: "#0a192f", color: "white", padding: "30px 20px", textAlign: "center", borderBottom: "4px solid #d4af37" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 900, margin: 0 }}>🏛️ منصة المنصور الاستراتيجية</h2>
      </div>

      <div style={{ maxWidth: "600px", margin: "20px auto", padding: "0 20px" }}>
        {activeTab === 'pricing' && <PricingSection />}

        {activeTab === 'platform' && (
          <div style={{ background: "white", borderRadius: "20px", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            
            {/* مؤشر المراحل المنهجية */}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px", background: "#f8f9fa", padding: "10px", borderRadius: "10px" }}>
              {trainingData.steps.map((s, i) => (
                <div key={i} style={{ fontSize: "10px", fontWeight: 900, color: i === currentStep ? "#0a192f" : "#adb5bd" }}>
                  {i + 1}. {s.label}
                </div>
              ))}
            </div>

            <h3 style={{ color: "#0a192f", fontWeight: 900, marginBottom: "20px" }}>{trainingData.steps[currentStep].label}</h3>

            {/* الحقول الذكية - معالجة خاصة للتاريخ لضمان عدم ظهور الروزنامة */}
            {trainingData.steps[currentStep].fields && trainingData.steps[currentStep].fields.map(f => (
              <div key={f.id} style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontWeight: 700, marginBottom: "8px", fontSize: "14px" }}>{f.label}</label>
                
                {(f.id === 'p_date' || f.type === 'strategic-date') ? (
                  <div style={{ display: "flex", gap: "8px" }}>
                    <select style={{ flex: 1.2, padding: "12px", borderRadius: "10px", border: "2px solid #eee", fontSize: "14px", fontWeight: 700, background: "#fff" }}>
                      <option>السنة</option>
                      {years.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                    <select style={{ flex: 1.5, padding: "12px", borderRadius: "10px", border: "2px solid #eee", fontSize: "14px", fontWeight: 700, background: "#fff" }}>
                      <option>الشهر</option>
                      {months.map((m, i) => <option key={i} value={i+1}>{m}</option>)}
                    </select>
                    <select style={{ flex: 1, padding: "12px", borderRadius: "10px", border: "2px solid #eee", fontSize: "14px", fontWeight: 700, background: "#fff" }}>
                      <option>اليوم</option>
                      {days.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                ) : (
                  <input type="text" placeholder={f.placeholder} style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "2px solid #eee", boxSizing: "border-box", fontSize: "14px" }} />
                )}
              </div>
            ))}

            {/* الأسئلة والمنهجية */}
            {trainingData.steps[currentStep].questions && trainingData.steps[currentStep].questions.map(q => (
              <div key={q.id} style={{ marginBottom: "30px" }}>
                <label style={{ display: "block", fontWeight: 900, fontSize: "16px", marginBottom: "10px" }}>{q.id}. {q.q}</label>
                <div style={{ background: "#fff9db", padding: "12px", borderRadius: "8px", borderRight: "4px solid #fab005", marginBottom: "12px", fontSize: "12px" }}>
                  <b>💡 إرشاد استشاري:</b> {q.hint}<br/>
                  <i style={{ color: "#2f9e44", display: "block", marginTop: "5px" }}>{q.example}</i>
                </div>
                <textarea rows="4" style={{ width: "100%", padding: "15px", borderRadius: "10px", border: "2px solid #eee", boxSizing: "border-box" }} placeholder="ادخل التحليلات والبيانات الفنية هنا..."></textarea>
              </div>
            ))}

            {/* أزرار التحكم في الرحلة الاستشارية */}
            <div style={{ display: "flex", gap: "12px", marginTop: "40px" }}>
              {currentStep > 0 && (
                <button onClick={() => setCurrentStep(currentStep - 1)} style={{ flex: 1, padding: "15px", borderRadius: "12px", border: "1px solid #ddd", background: "white", fontWeight: 700 }}>السابق</button>
              )}
              <button onClick={() => currentStep < trainingData.steps.length - 1 ? setCurrentStep(currentStep + 1) : null} style={{ flex: 2, padding: "15px", borderRadius: "12px", background: "#0a192f", color: "white", fontWeight: 900, border: "none" }}>
                {currentStep < trainingData.steps.length - 1 ? "التالي" : "توليد التقرير السيادي 📄"}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ناف بار - تصميم نظيف وعالمي */}
      <nav style={{ position: "fixed", bottom: 0, width: "100%", height: "70px", background: "white", display: "flex", borderTop: "1px solid #eee", zIndex: 1000 }}>
        {[ {id: 'platform', l: 'المنصة', i: '🏠'}, {id: 'pricing', l: 'الباقات', i: '💳'}, {id: 'admin', l: 'الإدارة', i: '⚙️'} ].map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{ flex: 1, border: "none", background: "none", color: activeTab === tab.id ? "#0a192f" : "#adb5bd" }}>
            <div style={{ fontSize: "20px" }}>{tab.i}</div>
            <div style={{ fontSize: "12px", fontWeight: 900 }}>{tab.l}</div>
          </button>
        ))}
      </nav>
    </div>
  );
}
