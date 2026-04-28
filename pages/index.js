import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { trainingData } from '../src/data/training'; 

export default function AlMansourProfessional() {
  const [activeTab, setActiveTab] = useState('platform');
  const [currentStep, setCurrentStep] = useState(0);
  const [generatedCode, setGeneratedCode] = useState('');
  const [userEmail, setUserEmail] = useState(''); // بريد المستخدم الحالي
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [deviceId, setDeviceId] = useState('');

  // 🛡️ 1. نظام البصمة الرقمية
  useEffect(() => {
    let id = localStorage.getItem('almansour_device_id');
    if (!id) {
      id = 'MS-' + Math.random().toString(36).substr(2, 9).toUpperCase();
      localStorage.setItem('almansour_device_id', id);
    }
    setDeviceId(id);
    
    // التحقق من جلسة الدخول السابقة
    const savedEmail = localStorage.getItem('user_email');
    if (savedEmail) {
      setUserEmail(savedEmail);
      setIsLoggedIn(true);
    }
  }, []);

  // 🔐 دالة الدخول (الربح والضمان)
  const handleLogin = (e) => {
    e.preventDefault();
    const emailInput = e.target.email.value;
    if (emailInput.includes('@')) {
      setUserEmail(emailInput);
      setIsLoggedIn(true);
      localStorage.setItem('user_email', emailInput);
    }
  };

  // ⚙️ محرك توليد الأكواد
  const generateVipCode = (prefix) => {
    const code = `${prefix}-${Math.floor(1000 + Math.random() * 9000)}`;
    setGeneratedCode(code);
  };

  const step = trainingData.steps[currentStep];

  // إذا لم يسجل الدخول، تظهر له بوابة الدخول أولاً (لضمان الربح والبصمة)
  if (!isLoggedIn) {
    return (
      <div dir="rtl" style={{ backgroundColor: "#0a192f", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cairo', sans-serif" }}>
        <div style={{ background: "white", padding: "40px", borderRadius: "20px", width: "90%", maxWidth: "400px", textAlign: "center" }}>
          <h2 style={{ color: "#0a192f", fontWeight: 900 }}>🏛️ بوابة الدخول</h2>
          <p style={{ fontSize: "12px", color: "#666" }}>يرجى إدخال بريدك الإلكتروني لتفعيل البصمة الرقمية وحماية بياناتك.</p>
          <form onSubmit={handleLogin}>
            <input name="email" type="email" required placeholder="بريدك الإلكتروني" style={{ width: "100%", padding: "15px", borderRadius: "10px", border: "1px solid #ddd", marginBottom: "20px" }} />
            <button type="submit" style={{ width: "100%", padding: "15px", background: "#d4af37", color: "white", border: "none", borderRadius: "10px", fontWeight: 900 }}>دخول آمن 🛡️</button>
          </form>
          <div style={{ marginTop: "20px", fontSize: "10px", color: "#ccc" }}>ID: {deviceId}</div>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" style={{ backgroundColor: "#f4f7f6", minHeight: "100vh", fontFamily: "'Cairo', sans-serif", paddingBottom: "120px" }}>
      <Head>
        <title>منصة المنصور الاستراتيجية</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ background: "#0a192f", color: "white", padding: "20px", textAlign: "center", borderBottom: "4px solid #d4af37" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 900, margin: 0 }}>🏛️ منصة المنصور الاستراتيجية</h2>
        <div style={{ fontSize: "11px", color: "#d4af37" }}>مرحباً بك: {userEmail}</div>
      </div>

      <main style={{ maxWidth: "600px", margin: "20px auto", padding: "0 15px" }}>
        
        {/* صفحة الإدارة: تظهر فقط لبريدك الشخصي */}
        {activeTab === 'admin' && userEmail === 'almansoourd@gmail.com' && (
          <div style={{ background: "white", borderRadius: "20px", padding: "30px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
            <h3 style={{ fontWeight: 900 }}>⚙️ إدارة التراخيص السيادية</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "20px" }}>
              <button onClick={() => generateVipCode('PRO')} style={{ padding: "15px", background: "#d4af37", color: "white", borderRadius: "10px", border: "none" }}>كود احترافي</button>
              <button onClick={() => generateVipCode('CORP')} style={{ padding: "15px", background: "#0a192f", color: "white", borderRadius: "10px", border: "none" }}>كود مؤسسي</button>
            </div>
            {generatedCode && (
              <div style={{ marginTop: "20px", padding: "15px", background: "#f0fdf4", border: "2px dashed #22c55e", borderRadius: "10px", textAlign: "center" }}>
                <div style={{ fontSize: "24px", fontWeight: 900, color: "#16a34a" }}>{generatedCode}</div>
              </div>
            )}
          </div>
        )}

        {/* قسم المنصة */}
        {activeTab === 'platform' && (
          <div style={{ background: "white", borderRadius: "20px", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <div style={{ display: "flex", overflowX: "auto", gap: "10px", marginBottom: "25px" }}>
              {trainingData.steps.map((s, i) => (
                <div key={i} style={{ minWidth: "100px", textAlign: "center", fontSize: "10px", fontWeight: 900, color: i === currentStep ? "#0a192f" : "#adb5bd" }}>
                  {i+1}. {s.label}
                  {i === currentStep && <div style={{ height: "3px", background: "#d4af37", marginTop: "5px" }}></div>}
                </div>
              ))}
            </div>

            <h3 style={{ color: "#0a192f", fontWeight: 900, marginBottom: "20px" }}>{step.label}</h3>

            {/* الحقول والأسئلة (كما هي في النسخ السابقة) */}
            {step.fields && step.fields.map(f => (
              <div key={f.id} style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontWeight: 700, fontSize: "14px" }}>{f.label}</label>
                <input type="text" placeholder={f.placeholder} style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #ddd" }} />
              </div>
            ))}
            {step.questions && step.questions.map(q => (
              <div key={q.id} style={{ marginBottom: "25px" }}>
                <label style={{ display: "block", fontWeight: 900 }}>{q.id}. {q.q}</label>
                <textarea rows="3" style={{ width: "100%", padding: "14px", marginTop: "10px", borderRadius: "10px", border: "1px solid #eee" }}></textarea>
              </div>
            ))}

            <button onClick={() => currentStep < trainingData.steps.length - 1 ? setCurrentStep(currentStep + 1) : null} style={{ width: "100%", padding: "18px", borderRadius: "12px", background: "#0a192f", color: "white", fontWeight: 900, border: "none" }}>
              التالي 🚀
            </button>
          </div>
        )}
      </main>

      {/* 💬 زر الواتساب (تم تحديث الرقم) */}
      <a href="https://wa.me/967774575749" target="_blank" rel="noopener noreferrer" style={{ position: "fixed", bottom: "100px", left: "20px", width: "65px", height: "65px", background: "#25d366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 25px rgba(0,0,0,0.3)", zIndex: 9999 }}>
        <span style={{ fontSize: "35px", color: "white" }}>💬</span>
      </a>

      {/* شريط التنقل السفلي الذكي */}
      <nav style={{ position: "fixed", bottom: 0, width: "100%", height: "80px", background: "white", display: "flex", borderTop: "2px solid #eee", zIndex: 1000 }}>
        <button onClick={() => setActiveTab('platform')} style={{ flex: 1, border: "none", background: "none", color: activeTab === 'platform' ? "#0a192f" : "#adb5bd" }}>
          <div style={{ fontSize: "24px" }}>🏠</div><div style={{ fontSize: "12px", fontWeight: 900 }}>المنصة</div>
        </button>
        
        {/* زر الإدارة: لا يظهر إلا للمستشار المنصور */}
        {userEmail === 'almansoourd@gmail.com' && (
          <button onClick={() => setActiveTab('admin')} style={{ flex: 1, border: "none", background: "none", color: activeTab === 'admin' ? "#d4af37" : "#adb5bd" }}>
            <div style={{ fontSize: "24px" }}>⚙️</div><div style={{ fontSize: "12px", fontWeight: 900 }}>الإدارة</div>
          </button>
        )}

        <button onClick={() => { setIsLoggedIn(false); localStorage.removeItem('user_email'); }} style={{ flex: 1, border: "none", background: "none", color: "#e74c3c" }}>
          <div style={{ fontSize: "24px" }}>🚪</div><div style={{ fontSize: "12px", fontWeight: 900 }}>خروج</div>
        </button>
      </nav>
    </div>
  );
}
