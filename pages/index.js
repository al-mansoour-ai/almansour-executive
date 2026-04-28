import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { trainingData } from '../src/data/training'; 
import PricingSection from '../src/components/Pricing'; 

export default function SovereignMasterSystem() {
  const [activeTab, setActiveTab] = useState('platform');
  const [currentStep, setCurrentStep] = useState(0);
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');

  // 🛡️ البصمة الرقمية والتحقق من الهوية
  useEffect(() => {
    const savedEmail = localStorage.getItem('user_email');
    if (savedEmail) { 
      setUserEmail(savedEmail); 
      setIsLoggedIn(true); 
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    setUserEmail(email);
    setIsLoggedIn(true);
    localStorage.setItem('user_email', email);
  };

  const years = Array.from({ length: 30 }, (_, i) => 2026 - i);
  const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const step = trainingData.steps[currentStep];

  if (!isLoggedIn) {
    return (
      <div dir="rtl" style={{ background: "#0a192f", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cairo', sans-serif" }}>
        <div style={{ background: "white", padding: "40px", borderRadius: "20px", width: "90%", maxWidth: "400px", textAlign: "center", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
          <h2 style={{ color: "#0a192f", fontWeight: 900 }}>🏛️ بوابة المنصور السيادية</h2>
          <form onSubmit={handleLogin} style={{ marginTop: "20px" }}>
            <input name="email" type="email" required placeholder="أدخل البريد الإلكتروني المعتمد" style={{ width: "100%", padding: "15px", borderRadius: "10px", border: "1px solid #ddd", marginBottom: "20px" }} />
            <button style={{ width: "100%", padding: "15px", background: "#d4af37", color: "white", borderRadius: "10px", border: "none", fontWeight: 900, cursor: "pointer" }}>دخول آمن 🛡️</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" style={{ backgroundColor: "#f4f7f6", minHeight: "100vh", fontFamily: "'Cairo', sans-serif", paddingBottom: "110px" }}>
      <Head><title>منصة المنصور الاستراتيجية</title></Head>

      <div style={{ background: "#0a192f", color: "white", padding: "25px", textAlign: "center", borderBottom: "4px solid #d4af37", position: "sticky", top: 0, zIndex: 100 }}>
        <h2 style={{ fontSize: "18px", fontWeight: 900, margin: 0 }}>🏛️ منصة المنصور الاستراتيجية</h2>
        <div style={{ fontSize: "10px", color: "#d4af37" }}>المستخدم النشط: {userEmail}</div>
      </div>

      <main style={{ maxWidth: "600px", margin: "20px auto", padding: "0 15px" }}>
        {activeTab === 'pricing' && <PricingSection />}

        {activeTab === 'admin' && userEmail === 'almansoourd@gmail.com' && (
          <div style={{ background: "white", borderRadius: "20px", padding: "30px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
            <h3 style={{ fontWeight: 900 }}>⚙️ إدارة التراخيص السيادية</h3>
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <button onClick={() => setGeneratedCode(`PRO-${Math.floor(1000+Math.random()*9000)}`)} style={{ flex: 1, padding: "15px", background: "#d4af37", color: "white", borderRadius: "10px", border: "none", fontWeight: 900 }}>توليد كود PRO</button>
            </div>
            {generatedCode && <div style={{ marginTop: "20px", padding: "20px", background: "#f0fdf4", borderRadius: "10px", textAlign: "center", fontSize: "24px", fontWeight: 900, color: "#16a34a", border: "2px dashed #22c55e" }}>{generatedCode}</div>}
          </div>
        )}

        {activeTab === 'platform' && (
          <div style={{ background: "white", borderRadius: "20px", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <div style={{ display: "flex", overflowX: "auto", gap: "10px", marginBottom: "25px", paddingBottom: "10px" }}>
              {trainingData.steps.map((s, i) => (
                <div key={i} style={{ minWidth: "100px", textAlign: "center", fontSize: "10px", fontWeight: 900, color: i === currentStep ? "#0a192f" : "#adb5bd" }}>
                  {i+1}. {s.label.split(' ')[0]}
                  {i === currentStep && <div style={{ height: "3px", background: "#d4af37", marginTop: "5px" }}></div>}
                </div>
              ))}
            </div>

            <h3 style={{ color: "#0a192f", fontWeight: 900, marginBottom: "20px" }}>{step.label}</h3>

            {/* الحقول الذكية (الغلاف الكامل) */}
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
                    <select style={{ flex: 1, padding: "12px", borderRadius: "10px", border: "1px solid #ddd" }}><option>السنة</option>{years.map(y => <option key={y}>{y}</option>)}</select>
                    <select style={{ flex: 1.2, padding: "12px", borderRadius: "10px", border: "1px solid #ddd" }}><option>الشهر</option>{months.map(m => <option key={m}>{m}</option>)}</select>
                    <select style={{ flex: 1, padding: "12px", borderRadius: "10px", border: "1px solid #ddd" }}><option>اليوم</option>{days.map(d => <option key={d}>{d}</option>)}</select>
                  </div>
                ) : f.type === 'security-dropdown' ? (
                  <select style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #ddd", color: "#c0392b", fontWeight: 700 }}>
                    <option>--- حدد السرية ---</option>
                    <option>📄 عام (Public)</option><option>🔒 مقيد (Restricted)</option><option>🛑 سري (Confidential)</option><option>💎 سري للغاية (Top Secret)</option>
                  </select>
                ) : (
                  <input type="text" placeholder={f.placeholder} style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #ddd" }} />
                )}
              </div>
            ))}

            {/* الأسئلة الـ 12 */}
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
                {currentStep < trainingData.steps.length - 1 ? "التالي 🚀" : "توليد الوثيقة السيادية 📄"}
              </button>
            </div>
          </div>
        )}
      </main>

      {/* 💬 زر الواتساب (ثابت وفعال) */}
      <a href="https://wa.me/967774575749" target="_blank" rel="noopener noreferrer" style={{ position: "fixed", bottom: "100px", left: "20px", width: "65px", height: "65px", background: "#25d366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 25px rgba(0,0,0,0.3)", zIndex: 9999 }}>
        <span style={{ fontSize: "35px", color: "white" }}>💬</span>
      </a>

      {/* 📱 الشريط السفلي */}
      <nav style={{ position: "fixed", bottom: 0, width: "100%", height: "80px", background: "white", display: "flex", borderTop: "2px solid #eee", zIndex: 1000, paddingBottom: "10px" }}>
        <button onClick={() => setActiveTab('platform')} style={{ flex: 1, border: "none", background: "none", color: activeTab === 'platform' ? "#0a192f" : "#adb5bd" }}>
          <div style={{ fontSize: "24px" }}>🏠</div><div style={{ fontSize: "12px", fontWeight: 900 }}>المنصة</div>
        </button>
        <button onClick={() => setActiveTab('pricing')} style={{ flex: 1, border: "none", background: "none", color: activeTab === 'pricing' ? "#0a192f" : "#adb5bd" }}>
          <div style={{ fontSize: "24px" }}>💳</div><div style={{ fontSize: "12px", fontWeight: 900 }}>الباقات</div>
        </button>
        {userEmail === 'almansoourd@gmail.com' && (
          <button onClick={() => setActiveTab('admin')} style={{ flex: 1, border: "none", background: "none", color: "#d4af37" }}>
            <div style={{ fontSize: "24px" }}>⚙️</div><div style={{ fontSize: "12px", fontWeight: 900 }}>الإدارة</div>
          </button>
        )}
      </nav>
    </div>
  );
}
