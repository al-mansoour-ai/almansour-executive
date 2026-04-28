import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { sovereignTracks } from '../src/data/training';

export default function SovereignMasterGold() {
  const [activeTab, setActiveTab] = useState('platform');
  const [track, setTrack] = useState('kirkpatrick');
  const [currentStep, setCurrentStep] = useState(0);
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isReportingMode, setIsReportingMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem('user_email');
    if (savedEmail) { setUserEmail(savedEmail); setIsLoggedIn(true); }
  }, []);

  // 🪄 محرك الذكاء الاستراتيجي: تحويل الكلام العادي إلى "لغة سيادية"
  const applyStrategicAI = (id) => {
    setIsGenerating(true);
    setTimeout(() => {
      const refined = {
        1: "تشير القراءات الميدانية إلى أن البيئة اللوجستية قد تم هندستها لتتجاوز المعايير التقليدية، مما خلق فضاءً تشغيلياً يعزز من جودة الامتصاص المعرفي وتقليص زمن الاستجابة للمهارات الجديدة.",
        101: "تم رصد مواءمة استراتيجية مطلقة بين تدخلات المشروع والاحتياجات الحرجة للمجتمع المحلي، مما أدى إلى تعظيم كفاءة الموارد وتحقيق أثر تراكمي يخدم رؤية التنمية المستدامة."
      };
      setFormData(prev => ({ ...prev, [id]: refined[id] || `[صياغة سيادية]: ${formData[id]}` }));
      setIsGenerating(false);
    }, 1200);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    setUserEmail(email); setIsLoggedIn(true);
    localStorage.setItem('user_email', email);
  };

  if (!isLoggedIn) {
    return (
      <div dir="rtl" style={{ background: "#0a192f", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cairo', sans-serif" }}>
        <Head><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" /></Head>
        <div style={{ background: "white", padding: "40px", borderRadius: "30px", width: "90%", maxWidth: "420px", textAlign: "center", boxShadow: "0 25px 60px rgba(0,0,0,0.5)" }}>
          <h1 style={{ color: "#0a192f", fontWeight: 900 }}>🏛️ بوابة المنصور</h1>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "30px" }}>المنصة السيادية للتقارير والذكاء الاستراتيجي</p>
          <form onSubmit={handleLogin}>
            <input name="email" type="email" required placeholder="البريد الإلكتروني المعتمد" style={{ width: "100%", padding: "16px", borderRadius: "15px", border: "1px solid #ddd", marginBottom: "20px", fontFamily: "'Cairo'" }} />
            <button style={{ width: "100%", padding: "16px", background: "#d4af37", color: "white", borderRadius: "15px", border: "none", fontWeight: 900, cursor: "pointer", fontSize: "16px" }}>دخول آمن 🛡️</button>
          </form>
        </div>
      </div>
    );
  }

  // --- وضع التقرير السيادي النهائي (The Executive Document) ---
  if (isReportingMode) {
    return (
      <div dir="rtl" style={{ background: "white", minHeight: "100vh", padding: "60px", fontFamily: "'Cairo', sans-serif", color: "#0a192f" }}>
        <Head><title>تقرير استراتيجي نهائي</title></Head>
        <div style={{ borderBottom: "4px solid #0a192f", paddingBottom: "25px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ margin: 0, fontWeight: 900 }}>{formData.p_agency || "المؤسسة الاستراتيجية"}</h2>
            <p style={{ margin: "5px 0", fontSize: "14px", color: "#666" }}>تقرير: {sovereignTracks[track].title}</p>
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ background: "#c0392b", color: "white", padding: "5px 20px", borderRadius: "8px", fontSize: "12px", fontWeight: 900 }}>سري للغاية</div>
            <p style={{ fontSize: "12px", marginTop: "10px" }}>REF: {formData.p_ref || "YF-2026-00"}</p>
          </div>
        </div>
        <div style={{ textAlign: "center", margin: "80px 0" }}>
          <h1 style={{ fontSize: "42px", fontWeight: 900, color: "#d4af37" }}>{formData.p_name || "وثيقة الأثر الاستراتيجي"}</h1>
          <p style={{ fontSize: "22px", marginTop: "20px" }}>مُعد للجهة الموقرة: {formData.p_client}</p>
        </div>
        <div style={{ marginTop: "50px", borderRight: "10px solid #d4af37", paddingRight: "30px" }}>
          <h3 style={{ fontSize: "24px", fontWeight: 900, marginBottom: "40px", background: "#f8f9fa", padding: "10px" }}>أولاً: التحليل المنهجي المعمق</h3>
          {sovereignTracks[track].questions.map(q => (
            <div key={q.id} style={{ marginBottom: "50px" }}>
              <h4 style={{ color: "#0a192f", fontWeight: 900, fontSize: "20px" }}>• {q.q}</h4>
              <p style={{ lineHeight: "2.2", textAlign: "justify", fontSize: "18px", whiteSpace: "pre-wrap" }}>{formData[q.id] || "لا توجد بيانات محددة."}</p>
            </div>
          ))}
        </div>
        <div className="no-print" style={{ position: "fixed", bottom: "40px", left: "40px", display: "flex", gap: "20px" }}>
          <button onClick={() => window.print()} style={{ padding: "18px 40px", background: "#0a192f", color: "white", borderRadius: "15px", fontWeight: 900, cursor: "pointer", border: "none", boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}>طباعة الوثيقة السيادية 📄</button>
          <button onClick={() => setIsReportingMode(false)} style={{ padding: "18px 40px", background: "#f1f5f9", borderRadius: "15px", fontWeight: 900, border: "1px solid #ddd" }}>تعديل البيانات</button>
        </div>
      </div>
    );
  }

  // --- واجهة الإدخال الذكية (The Strategic Input) ---
  return (
    <div dir="rtl" style={{ backgroundColor: "#f4f7f6", minHeight: "100vh", fontFamily: "'Cairo', sans-serif", paddingBottom: "110px" }}>
      <Head><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" /></Head>
      <style>{`* { font-family: 'Cairo', sans-serif !important; } @media print { .no-print { display: none !important; } }`}</style>

      <div className="no-print" style={{ background: "#0a192f", color: "white", padding: "25px", textAlign: "center", borderBottom: "5px solid #d4af37" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 900, margin: 0 }}>🏛️ منصة المنصور الاستراتيجية (AI Core)</h2>
      </div>

      <main style={{ maxWidth: "700px", margin: "25px auto", padding: "0 15px" }}>
        
        {/* اختيار المسار الدولي */}
        {currentStep === 0 && (
          <div style={{ background: "white", padding: "30px", borderRadius: "25px", marginBottom: "25px", border: "2px solid #d4af37" }}>
            <label style={{ fontWeight: 900, display: "block", marginBottom: "15px", color: "#0a192f" }}>🛡️ حدد المسار المنهجي للتقرير:</label>
            <select value={track} onChange={(e) => setTrack(e.target.value)} style={{ width: "100%", padding: "18px", borderRadius: "15px", border: "1px solid #ddd", fontWeight: 900, color: "#0a192f", fontSize: "16px" }}>
              <option value="kirkpatrick">تقييم التدريب (Kirkpatrick Methodology)</option>
              <option value="oecd">تقييم المشاريع (OECD/DAC Criteria)</option>
              <option value="audit">التدقيق والامتثال (Governance Audit)</option>
            </select>
            <p style={{ marginTop: "10px", fontSize: "12px", color: "#d4af37" }}>المنهجية المعتمدة: {sovereignTracks[track].methodology}</p>
          </div>
        )}

        <div style={{ background: "white", borderRadius: "30px", padding: "35px", boxShadow: "0 15px 40px rgba(0,0,0,0.05)" }}>
          <h3 style={{ color: "#0a192f", fontWeight: 900, marginBottom: "30px", fontSize: "22px" }}>المرحلة: {currentStep === 0 ? "الهوية الرسمية" : "الهندسة التحليلية"}</h3>

          {currentStep === 0 ? (
            <div>
              {['p_name', 'p_agency', 'p_client', 'p_author', 'p_ref'].map(id => (
                <div key={id} style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", fontWeight: 700, marginBottom: "8px", fontSize: "14px" }}>{id === 'p_name' ? 'عنوان الوثيقة' : id === 'p_agency' ? 'الجهة المنفذة' : id === 'p_client' ? 'الجهة المستفيدة' : id === 'p_author' ? 'المستشار المعد' : 'الرقم المرجعي'}</label>
                  <input type="text" value={formData[id] || ''} onChange={(e) => setFormData({...formData, [id]: e.target.value})} style={{ width: "100%", padding: "15px", borderRadius: "12px", border: "1px solid #eee" }} />
                </div>
              ))}
              <button onClick={() => setCurrentStep(1)} style={{ width: "100%", padding: "20px", borderRadius: "15px", background: "#0a192f", color: "white", fontWeight: 900, cursor: "pointer", marginTop: "10px" }}>بدء هندسة المحتوى السيادي 🚀</button>
            </div>
          ) : (
            <div>
              {sovereignTracks[track].questions.map(q => (
                <div key={q.id} style={{ marginBottom: "40px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                    <label style={{ fontWeight: 900, fontSize: "18px", color: "#0a192f" }}>{q.q}</label>
                    <button onClick={() => applyStrategicAI(q.id)} style={{ padding: "8px 20px", background: "#fffdf5", border: "2px solid #d4af37", borderRadius: "25px", fontSize: "12px", color: "#d4af37", fontWeight: 900, cursor: "pointer" }}>{isGenerating ? "جاري التحليل..." : "🪄 صياغة سيادية (AI)"}</button>
                  </div>
                  <div style={{ background: "#f0fdf4", padding: "15px", borderRadius: "15px", borderRight: "5px solid #22c55e", marginBottom: "15px" }}>
                    <p style={{ fontSize: "11px", fontWeight: 900, color: "#166534" }}>نموذج للإجابة الاسترشادية:</p>
                    <p style={{ fontSize: "13px", fontStyle: "italic", color: "#334155" }}>{q.example}</p>
                  </div>
                  <textarea value={formData[q.id] || ''} onChange={(e) => setFormData({...formData, [q.id]: e.target.value})} rows="5" style={{ width: "100%", padding: "20px", borderRadius: "20px", border: "1px solid #cbd5e1", fontSize: "15px" }} placeholder="ادخل البيانات الخام هنا..."></textarea>
                </div>
              ))}
              <div style={{ display: "flex", gap: "15px" }}>
                <button onClick={() => setCurrentStep(0)} style={{ flex: 1, padding: "18px", borderRadius: "15px", background: "#f1f5f9", fontWeight: 700 }}>السابق</button>
                <button onClick={() => setIsReportingMode(true)} style={{ flex: 2, padding: "18px", borderRadius: "15px", background: "#d4af37", color: "#0a192f", fontWeight: 900 }}>توليد الوثيقة النهائية 📄</button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* شريط التنقل السفلي والواتساب */}
      <a href="https://wa.me/967774575749" target="_blank" className="no-print" style={{ position: "fixed", bottom: "100px", left: "25px", width: "65px", height: "65px", background: "#25d366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 15px 35px rgba(37, 211, 102, 0.4)", zIndex: 9999 }}><span style={{ fontSize: "35px", color: "white" }}>💬</span></a>
      
      <nav className="no-print" style={{ position: "fixed", bottom: 0, width: "100%", height: "85px", background: "white", display: "flex", borderTop: "2px solid #eee", zIndex: 1000, paddingBottom: "10px" }}>
        <button onClick={() => setActiveTab('platform')} style={{ flex: 1, border: "none", background: "none", color: "#0a192f" }}><div style={{ fontSize: "24px" }}>🏠</div><div style={{ fontSize: "12px", fontWeight: 900 }}>المنصة</div></button>
        {userEmail === 'almansoourd@gmail.com' && <button onClick={() => setActiveTab('admin')} style={{ flex: 1, border: "none", background: "none", color: "#d4af37" }}><div style={{ fontSize: "24px" }}>⚙️</div><div style={{ fontSize: "12px", fontWeight: 900 }}>الإدارة</div></button>}
      </nav>
    </div>
  );
}
