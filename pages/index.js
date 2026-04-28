import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { trainingData } from '../src/data/training'; 

export default function SovereignFinalLevel() {
  const [activeTab, setActiveTab] = useState('platform');
  const [currentStep, setCurrentStep] = useState(0);
  const [generatedCode, setGeneratedCode] = useState(''); // لتوليد الأكواد في الإدارة

  // 🛡️ نظام البصمة الرقمية البسيط
  useEffect(() => {
    const fingerprint = localStorage.getItem('sovereign_device_id');
    if (!fingerprint) {
      localStorage.setItem('sovereign_device_id', 'DEV-' + Math.random().toString(36).substr(2, 9).toUpperCase());
    }
  }, []);

  const years = Array.from({ length: 30 }, (_, i) => 2026 - i);
  const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const step = trainingData.steps[currentStep];

  // دالة توليد أكواد الباقات (للإدارة)
  const generateVIPCode = (pkg) => {
    const code = `${pkg.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setGeneratedCode(code);
  };

  return (
    <div dir="rtl" style={{ backgroundColor: "#f0f2f5", minHeight: "100vh", fontFamily: "'Cairo', sans-serif", paddingBottom: "110px" }}>
      <Head>
        <title>منصة المنصور - النظام المتكامل</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ background: "#0a192f", color: "white", padding: "25px", textAlign: "center", borderBottom: "4px solid #d4af37", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 900, margin: 0 }}>🏛️ منصة المنصور الاستراتيجية</h2>
      </div>

      <main style={{ maxWidth: "600px", margin: "20px auto", padding: "0 15px" }}>
        
        {/* قسم الإدارة: توليد الأكواد */}
        {activeTab === 'admin' && (
          <div style={{ background: "white", borderRadius: "20px", padding: "30px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontWeight: 900, color: "#0a192f" }}>⚙️ لوحة تحكم الإدارة</h3>
            <p style={{ fontSize: "14px", color: "#666" }}>توليد أكواد التفعيل للعملاء:</p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
              <button onClick={() => generateVIPCode('Free')} style={{ flex: 1, padding: "10px", background: "#eee", borderRadius: "10px", fontWeight: 700 }}>مجانية</button>
              <button onClick={() => generateVIPCode('Pro')} style={{ flex: 1, padding: "10px", background: "#d4af37", color: "white", borderRadius: "10px", fontWeight: 700 }}>احترافية</button>
              <button onClick={() => generateVIPCode('Corp')} style={{ flex: 1, padding: "10px", background: "#0a192f", color: "white", borderRadius: "10px", fontWeight: 700 }}>مؤسسية</button>
            </div>
            {generatedCode && (
              <div style={{ padding: "20px", background: "#f8f9fa", border: "2px dashed #0a192f", borderRadius: "15px", textAlign: "center" }}>
                <span style={{ fontSize: "12px" }}>كود التفعيل الجديد:</span>
                <div style={{ fontSize: "24px", fontWeight: 900, color: "#d4af37" }}>{generatedCode}</div>
              </div>
            )}
          </div>
        )}

        {/* قسم المنصة */}
        {activeTab === 'platform' && (
          <div style={{ background: "white", borderRadius: "20px", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <div style={{ display: "flex", overflowX: "auto", gap: "10px", marginBottom: "25px", paddingBottom: "10px" }}>
              {trainingData.steps.map((s, i) => (
                <div key={i} style={{ minWidth: "80px", textAlign: "center", fontSize: "10px", fontWeight: 900, color: i === currentStep ? "#0a192f" : "#adb5bd" }}>
                  {i+1}. {s.label.split(' ')[0]}
                  {i === currentStep && <div style={{ height: "3px", background: "#d4af37", marginTop: "5px" }}></div>}
                </div>
              ))}
            </div>

            <h3 style={{ color: "#0a192f", fontWeight: 900, marginBottom: "20px" }}>{step.label}</h3>

            {step.fields && step.fields.map(f => (
              <div key={f.id} style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontWeight: 700, marginBottom: "8px", fontSize: "14px" }}>{f.label}</label>
                {f.type === 'file-upload' ? (
                  <div style={{ border: "2px dashed #d4af37", padding: "15px", borderRadius: "12px", textAlign: "center", background: "#fffdf5" }}>
                    <input type="file" style={{ opacity: 0, position: "absolute", width: "100%", cursor: "pointer" }} />
                    <span style={{ fontSize: "12px", color: "#d4af37", fontWeight: 900 }}>📤 رفع الشعار</span>
                  </div>
                ) : f.type === 'strategic-date' ? (
                  <div style={{ display: "flex", gap: "5px" }}>
                    <select style={{ flex: 1, padding: "10px", borderRadius: "10px", border: "1px solid #ddd" }}><option>السنة</option>{years.map(y => <option key={y}>{y}</option>)}</select>
                    <select style={{ flex: 1.2, padding: "10px", borderRadius: "10px", border: "1px solid #ddd" }}><option>الشهر</option>{months.map(m => <option key={m}>{m}</option>)}</select>
                    <select style={{ flex: 1, padding: "10px", borderRadius: "10px", border: "1px solid #ddd" }}><option>اليوم</option>{days.map(d => <option key={d}>{d}</option>)}</select>
                  </div>
                ) : (
                  <input type="text" placeholder={f.placeholder} style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #ddd", boxSizing: "border-box" }} />
                )}
              </div>
            ))}

            {step.questions && step.questions.map(q => (
              <div key={q.id} style={{ marginBottom: "25px" }}>
                <label style={{ display: "block", fontWeight: 900, fontSize: "15px", marginBottom: "8px" }}>{q.id}. {q.q}</label>
                <div style={{ background: "#fff9db", padding: "10px", borderRadius: "8px", borderRight: "4px solid #fab005", fontSize: "12px" }}>
                  <b>💡 إرشاد:</b> {q.hint}<br/><i>{q.example}</i>
                </div>
                <textarea rows="3" style={{ width: "100%", padding: "14px", marginTop: "10px", borderRadius: "10px", border: "1px solid #eee" }}></textarea>
              </div>
            ))}

            <div style={{ display: "flex", gap: "10px", marginTop: "30px" }}>
              {currentStep > 0 && <button onClick={() => setCurrentStep(currentStep - 1)} style={{ flex: 1, padding: "15px", borderRadius: "12px", background: "white", border: "1px solid #ddd", fontWeight: 700 }}>السابق</button>}
              <button onClick={() => currentStep < trainingData.steps.length - 1 ? setCurrentStep(currentStep + 1) : null} style={{ flex: 2, padding: "15px", borderRadius: "12px", background: "#0a192f", color: "white", fontWeight: 900 }}>
                {currentStep < trainingData.steps.length - 1 ? "التالي" : "توليد التقرير النهائي 📄"}
              </button>
            </div>
          </div>
        )}
      </main>

      {/* زر الواتساب العائم */}
      <a href="https://wa.me/967XXXXXXXXX" target="_blank" style={{ position: "fixed", bottom: "100px", left: "20px", width: "60px", height: "60px", background: "#25d366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 5px 15px rgba(0,0,0,0.2)", zIndex: 1001, textDecoration: "none" }}>
        <span style={{ fontSize: "30px" }}>💬</span>
      </a>

      {/* الشريط السفلي */}
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
