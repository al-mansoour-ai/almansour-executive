import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { trainingData } from '../src/data/training'; 

export default function AlMansourSovereignPlatform() {
  const [activeTab, setActiveTab] = useState('platform');
  const [currentStep, setCurrentStep] = useState(0);
  const [generatedCode, setGeneratedCode] = useState('');
  const [deviceId, setDeviceId] = useState('');

  // 🛡️ 1. محرك البصمة الرقمية (توليد معرف فريد للجهاز)
  useEffect(() => {
    let id = localStorage.getItem('almansour_device_id');
    if (!id) {
      id = 'MS-' + Math.random().toString(36).substr(2, 9).toUpperCase();
      localStorage.setItem('almansour_device_id', id);
    }
    setDeviceId(id);
  }, []);

  // ⚙️ 2. محرك توليد الأكواد (للحسابات الاحترافية والمؤسسية)
  const generateVipCode = (prefix) => {
    const timestamp = Date.now().toString().slice(-4);
    const random = Math.floor(1000 + Math.random() * 9000);
    const code = `${prefix}-${timestamp}-${random}`;
    setGeneratedCode(code);
  };

  const years = Array.from({ length: 30 }, (_, i) => 2026 - i);
  const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const step = trainingData.steps[currentStep];

  return (
    <div dir="rtl" style={{ backgroundColor: "#f4f7f6", minHeight: "100vh", fontFamily: "'Cairo', sans-serif", paddingBottom: "120px" }}>
      <Head>
        <title>منصة المنصور الاستراتيجية</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      {/* الهيدر السيادي */}
      <div style={{ background: "#0a192f", color: "white", padding: "20px", textAlign: "center", borderBottom: "4px solid #d4af37", boxShadow: "0 4px 15px rgba(0,0,0,0.3)" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 900, margin: 0 }}>🏛️ منصة المنصور الاستراتيجية</h2>
        <div style={{ fontSize: "10px", color: "#d4af37", marginTop: "5px" }}>البصمة الرقمية للجهاز: {deviceId}</div>
      </div>

      <main style={{ maxWidth: "600px", margin: "20px auto", padding: "0 15px" }}>
        
        {/* صفحة الإدارة: توليد الأكواد */}
        {activeTab === 'admin' && (
          <div style={{ background: "white", borderRadius: "20px", padding: "30px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
            <h3 style={{ fontWeight: 900, color: "#0a192f", borderBottom: "2px solid #eee", paddingBottom: "10px" }}>⚙️ لوحة تحكم التراخيص</h3>
            <p style={{ fontSize: "13px", color: "#666", marginBottom: "20px" }}>اختر نوع الباقة لتوليد كود تفعيل فريد للعميل:</p>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
              <button onClick={() => generateVipCode('PRO')} style={{ padding: "15px", background: "#d4af37", color: "white", border: "none", borderRadius: "10px", fontWeight: 900, cursor: "pointer" }}>باقة احترافية</button>
              <button onClick={() => generateVipCode('CORP')} style={{ padding: "15px", background: "#0a192f", color: "white", border: "none", borderRadius: "10px", fontWeight: 900, cursor: "pointer" }}>باقة مؤسسية</button>
            </div>

            {generatedCode && (
              <div style={{ padding: "20px", background: "#f0fdf4", border: "2px dashed #22c55e", borderRadius: "15px", textAlign: "center" }}>
                <span style={{ fontSize: "12px", color: "#166534" }}>الكود المستخرج بنجاح:</span>
                <div style={{ fontSize: "22px", fontWeight: 900, color: "#16a34a", letterSpacing: "2px", margin: "10px 0" }}>{generatedCode}</div>
                <button onClick={() => navigator.clipboard.writeText(generatedCode)} style={{ fontSize: "11px", background: "#eee", border: "none", padding: "5px 10px", borderRadius: "5px" }}>نسخ الكود</button>
              </div>
            )}
          </div>
        )}

        {/* قسم المنصة والأسئلة الـ 12 */}
        {activeTab === 'platform' && (
          <div style={{ background: "white", borderRadius: "20px", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            {/* مؤشر الخطوات التتابعي */}
            <div style={{ display: "flex", overflowX: "auto", gap: "10px", marginBottom: "25px", paddingBottom: "10px" }}>
              {trainingData.steps.map((s, i) => (
                <div key={i} style={{ minWidth: "100px", textAlign: "center", fontSize: "10px", fontWeight: 900, color: i === currentStep ? "#0a192f" : "#adb5bd" }}>
                  {i+1}. {s.label}
                  {i === currentStep && <div style={{ height: "3px", background: "#d4af37", marginTop: "5px" }}></div>}
                </div>
              ))}
            </div>

            <h3 style={{ color: "#0a192f", fontWeight: 900, marginBottom: "20px" }}>{step.label}</h3>

            {/* الحقول الذكية */}
            {step.fields && step.fields.map(f => (
              <div key={f.id} style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontWeight: 700, marginBottom: "8px", fontSize: "14px" }}>{f.label}</label>
                {f.type === 'file-upload' ? (
                  <div style={{ border: "2px dashed #d4af37", padding: "15px", borderRadius: "12px", textAlign: "center", background: "#fffdf5" }}>
                    <input type="file" style={{ position: "absolute", opacity: 0, cursor: "pointer" }} />
                    <span style={{ fontSize: "12px", color: "#d4af37", fontWeight: 900 }}>📤 رفع الشعار الرسمي</span>
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

            {/* الأسئلة المنهجية */}
            {step.questions && step.questions.map(q => (
              <div key={q.id} style={{ marginBottom: "25px" }}>
                <label style={{ display: "block", fontWeight: 900, fontSize: "15px", marginBottom: "8px" }}>{q.id}. {q.q}</label>
                <div style={{ background: "#fff9db", padding: "10px", borderRadius: "8px", borderRight: "4px solid #fab005", fontSize: "12px" }}>
                  <b>💡 إرشاد:</b> {q.hint}<br/><i>{q.example}</i>
                </div>
                <textarea rows="3" style={{ width: "100%", padding: "14px", marginTop: "10px", borderRadius: "10px", border: "1px solid #eee" }} placeholder="ادخل التحليل هنا..."></textarea>
              </div>
            ))}

            {/* أزرار التحكم */}
            <div style={{ display: "flex", gap: "10px", marginTop: "30px" }}>
              {currentStep > 0 && <button onClick={() => setCurrentStep(currentStep - 1)} style={{ flex: 1, padding: "15px", borderRadius: "12px", background: "white", border: "1px solid #ddd", fontWeight: 700 }}>السابق</button>}
              <button onClick={() => currentStep < trainingData.steps.length - 1 ? setCurrentStep(currentStep + 1) : null} style={{ flex: 2, padding: "15px", borderRadius: "12px", background: "#0a192f", color: "white", fontWeight: 900, border: "none" }}>
                {currentStep < trainingData.steps.length - 1 ? "التالي" : "توليد الوثيقة السيادية 📄"}
              </button>
            </div>
          </div>
        )}
      </main>

      {/* 💬 زر الواتساب العائم (تم إصلاح الربط والظهور) */}
      <a 
        href="https://wa.me/967770000000" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ position: "fixed", bottom: "100px", right: "20px", width: "60px", height: "60px", background: "#25d366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px rgba(0,0,0,0.3)", zIndex: 9999, textDecoration: "none" }}
      >
        <span style={{ color: "white", fontSize: "30px" }}>💬</span>
      </a>

      {/* 📱 شريط التنقل السفلي */}
      <nav style={{ position: "fixed", bottom: 0, width: "100%", height: "80px", background: "white", display: "flex", borderTop: "2px solid #eee", zIndex: 1000, paddingBottom: "10px" }}>
        {[ 
          {id: 'platform', l: 'المنصة', i: '🏠'}, 
          {id: 'admin', l: 'الإدارة', i: '⚙️'} 
        ].map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{ flex: 1, border: "none", background: "none", color: activeTab === tab.id ? "#0a192f" : "#adb5bd", cursor: "pointer" }}>
            <div style={{ fontSize: "24px" }}>{tab.i}</div>
            <div style={{ fontSize: "12px", fontWeight: 900 }}>{tab.l}</div>
            {activeTab === tab.id && <div style={{ width: "20px", height: "3px", background: "#d4af37", margin: "4px auto", borderRadius: "5px" }}></div>}
          </button>
        ))}
      </nav>
    </div>
  );
}
