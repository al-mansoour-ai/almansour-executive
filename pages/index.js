import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { trainingData } from '../src/data/training'; 
import PricingSection from '../src/components/Pricing'; // استعادة ملف الباقات

export default function SovereignDistributedSystem() {
  const [activeTab, setActiveTab] = useState('platform');
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');

  // 🛡️ البصمة الرقمية والتحقق من الجلسة
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

  const step = trainingData.steps[currentStep];

  // 🚪 بوابة الدخول (لتفعيل البصمة والربح)
  if (!isLoggedIn) {
    return (
      <div dir="rtl" style={{ background: "#0a192f", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ background: "white", padding: "40px", borderRadius: "20px", textAlign: "center", width: "90%", maxWidth: "400px" }}>
          <h2 style={{ fontWeight: 900 }}>🏛️ دخول المنصة</h2>
          <form onSubmit={handleLogin}>
            <input name="email" type="email" required placeholder="البريد الإلكتروني" style={{ width: "100%", padding: "15px", marginBottom: "20px", borderRadius: "10px", border: "1px solid #ddd" }} />
            <button style={{ width: "100%", padding: "15px", background: "#d4af37", color: "white", borderRadius: "10px", border: "none", fontWeight: 900 }}>دخول آمن</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", fontFamily: "'Cairo', sans-serif", paddingBottom: "110px" }}>
      <Head><title>منصة المنصور - النظام الموزع</title></Head>

      {/* الهيدر */}
      <div style={{ background: "#0a192f", color: "white", padding: "20px", textAlign: "center", borderBottom: "4px solid #d4af37" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 900, margin: 0 }}>🏛️ منصة المنصور الاستراتيجية</h2>
      </div>

      <main style={{ maxWidth: "600px", margin: "20px auto", padding: "0 15px" }}>
        {/* التبديل بين الملفات (Components) */}
        {activeTab === 'pricing' && <PricingSection />}

        {activeTab === 'admin' && userEmail === 'almansoourd@gmail.com' && (
          <div style={{ background: "white", borderRadius: "20px", padding: "30px" }}>
            <h3 style={{ fontWeight: 900 }}>⚙️ محرك الأكواد السيادي</h3>
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <button onClick={() => setGeneratedCode(`PRO-${Math.floor(1000+Math.random()*9000)}`)} style={{ flex: 1, padding: "15px", background: "#d4af37", color: "white", borderRadius: "10px", border: "none" }}>باقة PRO</button>
            </div>
            {generatedCode && <div style={{ marginTop: "20px", fontSize: "24px", textAlign: "center", fontWeight: 900, color: "#16a34a" }}>{generatedCode}</div>}
          </div>
        )}

        {activeTab === 'platform' && (
          <div style={{ background: "white", borderRadius: "20px", padding: "25px" }}>
            {/* عرض الأسئلة الـ 12 الموزعة على Steps */}
            <h3 style={{ fontWeight: 900, color: "#0a192f" }}>{step.label}</h3>
            {step.questions && step.questions.map(q => (
              <div key={q.id} style={{ marginBottom: "20px" }}>
                <label style={{ fontWeight: 900 }}>{q.id}. {q.q}</label>
                <textarea rows="3" style={{ width: "100%", padding: "12px", marginTop: "8px", borderRadius: "10px", border: "1px solid #eee" }}></textarea>
              </div>
            ))}
            <button onClick={() => currentStep < 3 && setCurrentStep(currentStep + 1)} style={{ width: "100%", padding: "18px", background: "#0a192f", color: "white", borderRadius: "12px", border: "none", fontWeight: 900 }}>التالي 🚀</button>
          </div>
        )}
      </main>

      {/* 💬 زر الواتساب الثابت */}
      <a href="https://wa.me/967774575749" target="_blank" style={{ position: "fixed", bottom: "100px", left: "20px", width: "65px", height: "65px", background: "#25d366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 20px rgba(0,0,0,0.2)", zIndex: 9999 }}>
        <span style={{ fontSize: "35px", color: "white" }}>💬</span>
      </a>

      {/* الشريط السفلي */}
      <nav style={{ position: "fixed", bottom: 0, width: "100%", height: "80px", background: "white", display: "flex", borderTop: "1px solid #eee" }}>
        <button onClick={() => setActiveTab('platform')} style={{ flex: 1, border: "none", background: "none" }}>🏠<br/>المنصة</button>
        <button onClick={() => setActiveTab('pricing')} style={{ flex: 1, border: "none", background: "none" }}>💳<br/>الباقات</button>
        {userEmail === 'almansoourd@gmail.com' && <button onClick={() => setActiveTab('admin')} style={{ flex: 1, border: "none", background: "none", color: "#d4af37" }}>⚙️<br/>الإدارة</button>}
      </nav>
    </div>
  );
}
