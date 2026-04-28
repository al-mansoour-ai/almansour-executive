import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { trainingData } from '../src/data/training'; 

export default function SovereignFinalV4() {
  const [activeTab, setActiveTab] = useState('platform');
  const [currentStep, setCurrentStep] = useState(0);
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem('user_email');
    if (savedEmail) { setUserEmail(savedEmail); setIsLoggedIn(true); }
  }, []);

  // 📄 محرك توليد التقرير (الطباعة)
  const handlePrint = () => {
    window.print();
  };

  const years = Array.from({ length: 30 }, (_, i) => 2026 - i);
  const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const step = trainingData.steps[currentStep];

  if (!isLoggedIn) {
    return (
      <div dir="rtl" style={{ background: "#0a192f", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cairo', sans-serif" }}>
        <div style={{ background: "white", padding: "40px", borderRadius: "20px", width: "90%", maxWidth: "400px", textAlign: "center" }}>
          <h2 style={{ fontWeight: 900, color: "#0a192f" }}>🏛️ بوابة المنصور</h2>
          <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); localStorage.setItem('user_email', e.target.email.value); setUserEmail(e.target.email.value); }}>
            <input name="email" type="email" required placeholder="البريد الإلكتروني" style={{ width: "100%", padding: "15px", borderRadius: "10px", border: "1px solid #ddd", marginBottom: "20px", fontFamily: "'Cairo', sans-serif" }} />
            <button style={{ width: "100%", padding: "15px", background: "#d4af37", color: "white", borderRadius: "10px", border: "none", fontWeight: 900, fontFamily: "'Cairo', sans-serif", cursor: "pointer" }}>دخول آمن</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" style={{ backgroundColor: "#f4f7f6", minHeight: "100vh", fontFamily: "'Cairo', sans-serif", paddingBottom: "110px" }}>
      <Head>
        <title>منصة المنصور الاستراتيجية</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <style>{`@media print { nav, button, .no-print { display: none !important; } .print-area { display: block !important; } }`}</style>

      <div className="no-print" style={{ background: "#0a192f", color: "white", padding: "25px", textAlign: "center", borderBottom: "4px solid #d4af37" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 900, margin: 0 }}>🏛️ منصة المنصور الاستراتيجية</h2>
      </div>

      <main style={{ maxWidth: "600px", margin: "20px auto", padding: "0 15px" }}>
        {activeTab === 'platform' && (
          <div style={{ background: "white", borderRadius: "20px", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h3 style={{ color: "#0a192f", fontWeight: 900, marginBottom: "25px", borderBottom: "2px solid #f8f9fa", paddingBottom: "10px" }}>{step.label}</h3>

            {/* الحقول الذكية */}
            {step.fields && step.fields.map(f => (
              <div key={f.id} style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontWeight: 700, marginBottom: "8px", fontSize: "14px", color: "#0a192f" }}>{f.label}</label>
                {f.type === 'file-upload' ? (
                  <div style={{ border: "2px dashed #d4af37", padding: "15px", borderRadius: "12px", textAlign: "center", background: "#fffdf5" }}>
                    <span style={{ fontSize: "12px", color: "#d4af37", fontWeight: 900 }}>📤 اضغط لرفع الشعار الرسمي</span>
                  </div>
                ) : f.type === 'strategic-date' ? (
                  <div style={{ display: "flex", gap: "5px" }}>
                    <select style={{ flex: 1, padding: "12px", borderRadius: "10px", border: "1px solid #ddd", fontFamily: "'Cairo'" }}><option>السنة</option>{years.map(y => <option key={y}>{y}</option>)}</select>
                    <select style={{ flex: 1.2, padding: "12px", borderRadius: "10px", border: "1px solid #ddd", fontFamily: "'Cairo'" }}><option>الشهر</option>{months.map(m => <option key={m}>{m}</option>)}</select>
                    <select style={{ flex: 1, padding: "12px", borderRadius: "10px", border: "1px solid #ddd", fontFamily: "'Cairo'" }}><option>اليوم</option>{days.map(d => <option key={d}>{d}</option>)}</select>
                  </div>
                ) : (
                  <input type="text" placeholder={f.placeholder} style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #ddd", fontFamily: "'Cairo'" }} />
                )}
              </div>
            ))}

            {/* الأسئلة بوضوح فائق */}
            {step.questions && step.questions.map(q => (
              <div key={q.id} style={{ marginBottom: "30px" }}>
                <label style={{ display: "block", fontWeight: 900, fontSize: "16px", color: "#0a192f", marginBottom: "10px" }}>{q.id}. {q.q}</label>
                
                {/* صندوق المثال المطور */}
                <div style={{ background: "#f0fdf4", padding: "15px", borderRadius: "12px", borderRight: "5px solid #22c55e", marginBottom: "12px" }}>
                   <div style={{ fontSize: "11px", color: "#166534", fontWeight: 900, marginBottom: "5px" }}>💡 مثال تطبيقي استرشادي:</div>
                   <div style={{ fontSize: "13px", color: "#1e293b", lineHeight: "1.6", fontStyle: "italic" }}>{q.example}</div>
                </div>

                <textarea rows="4" style={{ width: "100%", padding: "15px", borderRadius: "12px", border: "1px solid #cbd5e1", fontFamily: "'Cairo'", fontSize: "14px" }} placeholder="ادخل التحليل الاستراتيجي هنا..."></textarea>
              </div>
            ))}

            <div className="no-print" style={{ display: "flex", gap: "12px", marginTop: "40px" }}>
              {currentStep > 0 && <button onClick={() => setCurrentStep(currentStep - 1)} style={{ flex: 1, padding: "15px", borderRadius: "12px", background: "#f1f5f9", fontWeight: 700, border: "none", fontFamily: "'Cairo'" }}>السابق</button>}
              
              {currentStep < 3 ? (
                <button onClick={() => setCurrentStep(currentStep + 1)} style={{ flex: 2, padding: "15px", borderRadius: "12px", background: "#0a192f", color: "white", fontWeight: 900, border: "none", fontFamily: "'Cairo'" }}>التالي 🚀</button>
              ) : (
                <button onClick={handlePrint} style={{ flex: 2, padding: "15px", borderRadius: "12px", background: "#d4af37", color: "#0a192f", fontWeight: 900, border: "none", fontFamily: "'Cairo'" }}>توليد التقرير النهائي 📄</button>
              )}
            </div>
          </div>
        )}
      </main>

      {/* زر الواتساب الثابت */}
      <a href="https://wa.me/967774575749" target="_blank" className="no-print" style={{ position: "fixed", bottom: "100px", left: "20px", width: "60px", height: "60px", background: "#25d366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 20px rgba(0,0,0,0.2)", zIndex: 9999 }}>
        <span style={{ fontSize: "30px" }}>💬</span>
      </a>

      {/* شريط التنقل السفلي */}
      <nav className="no-print" style={{ position: "fixed", bottom: 0, width: "100%", height: "80px", background: "white", display: "flex", borderTop: "2px solid #eee", zIndex: 1000, paddingBottom: "10px" }}>
        <button onClick={() => setActiveTab('platform')} style={{ flex: 1, border: "none", background: "none", color: activeTab === 'platform' ? "#0a192f" : "#adb5bd", fontFamily: "'Cairo'", fontWeight: 900 }}>🏠<br/>المنصة</button>
        <button onClick={() => setActiveTab('pricing')} style={{ flex: 1, border: "none", background: "none", color: activeTab === 'pricing' ? "#0a192f" : "#adb5bd", fontFamily: "'Cairo'", fontWeight: 900 }}>💳<br/>الباقات</button>
        {userEmail === 'almansoourd@gmail.com' && <button onClick={() => setActiveTab('admin')} style={{ flex: 1, border: "none", background: "none", color: "#d4af37", fontFamily: "'Cairo'", fontWeight: 900 }}>⚙️<br/>الإدارة</button>}
      </nav>
    </div>
  );
}
