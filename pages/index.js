import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { reportTracks } from '../src/data/reports';

export default function AlMansourUltimatePlatform() {
  const [activeTab, setActiveTab] = useState('platform');
  const [selectedTrack, setSelectedTrack] = useState('training_impact');
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isReportingMode, setIsReportingMode] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const savedEmail = localStorage.getItem('user_email');
    if (savedEmail) { setUserEmail(savedEmail); setIsLoggedIn(true); }
  }, []);

  [span_14](start_span)// محرك الذكاء الاصطناعي لتحسين الصياغة[span_14](end_span)
  const enhanceAI = (id) => {
    const raw = formData[id] || "";
    setFormData({ ...formData, [id]: `[صياغة استراتيجية]: بناءً على المعايير الدولية، أظهرت البيانات أن ${raw} تعكس كفاءة عالية في الأداء الاستراتيجي.` });
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
        <div style={{ background: "white", padding: "40px", borderRadius: "30px", width: "90%", maxWidth: "420px", textAlign: "center" }}>
          <h1 style={{ color: "#0a192f", fontWeight: 900 }}>🏛️ بوابة المنصور</h1>
          <form onSubmit={handleLogin}>
            <input name="email" type="email" required placeholder="البريد الإلكتروني" style={{ width: "100%", padding: "16px", borderRadius: "15px", border: "1px solid #ddd", marginBottom: "20px", fontFamily: "'Cairo'" }} />
            <button style={{ width: "100%", padding: "16px", background: "#d4af37", color: "white", borderRadius: "15px", border: "none", fontWeight: 900, cursor: "pointer" }}>دخول آمن 🛡️</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", fontFamily: "'Cairo', sans-serif", paddingBottom: "110px" }}>
      <Head><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" /></Head>
      <style>{`* { font-family: 'Cairo', sans-serif !important; color: #2d3436; } @media print { .no-print { display: none !important; } }`}</style>

      [span_15](start_span){/* الهيدر السيادي[span_15](end_span) */}
      <div className="no-print" style={{ background: "#0a192f", color: "white", padding: "20px", textAlign: "center", borderBottom: "5px solid #d4af37" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 900, margin: 0, color: "white" }}>🏛️ منصة المنصور الاستراتيجية</h2>
      </div>

      <main style={{ maxWidth: "700px", margin: "25px auto", padding: "0 15px" }}>
        
        [span_16](start_span){/* اختيار نوع التقرير[span_16](end_span) */}
        {activeTab === 'platform' && currentStep === 0 && (
          <div style={{ background: "white", padding: "30px", borderRadius: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            [span_17](start_span)<h3 style={{ fontWeight: 900, color: "#0a192f" }}>📋 اختر نوع التقرير الاستراتيجي[span_17](end_span)</h3>
            <select value={selectedTrack} onChange={(e) => setSelectedTrack(e.target.value)} style={{ width: "100%", padding: "15px", borderRadius: "15px", border: "2px solid #d4af37", marginTop: "15px", fontWeight: 700 }}>
              [span_18](start_span)<option value="training_impact">تقييم أثر التدريب (Kirkpatrick)[span_18](end_span)</option>
              [span_19](start_span)<option value="field_visit">تقرير النزول الميداني الفني[span_19](end_span)</option>
            </select>
            <button onClick={() => setCurrentStep(1)} style={{ width: "100%", padding: "18px", background: "#0a192f", color: "white", borderRadius: "15px", marginTop: "20px", fontWeight: 900 }}>ابدأ الآن 🚀</button>
          </div>
        )}

        [span_20](start_span){/* الأسئلة الذكية والمعاينة الحية[span_20](end_span) */}
        {activeTab === 'platform' && currentStep === 1 && (
          <div style={{ background: "white", padding: "30px", borderRadius: "25px" }}>
             <h3 style={{ color: "#d4af37", fontWeight: 900 }}>{reportTracks[selectedTrack].title}</h3>
             {reportTracks[selectedTrack].questions.map(q => (
               <div key={q.id} style={{ marginBottom: "30px" }}>
                 <label style={{ fontWeight: 900, display: "block", marginBottom: "10px" }}>{q.q}</label>
                 <div style={{ background: "#fffdf5", padding: "10px", borderRadius: "10px", fontSize: "12px", borderRight: "4px solid #d4af37", marginBottom: "10px" }}>
                   💡 مثال: {q.example}
                 </div>
                 <textarea value={formData[q.id] || ''} onChange={(e) => setFormData({...formData, [q.id]: e.target.value})} rows="4" style={{ width: "100%", padding: "15px", borderRadius: "15px", border: "1px solid #ddd" }}></textarea>
                 [span_21](start_span)<button onClick={() => enhanceAI(q.id)} style={{ marginTop: "10px", background: "none", border: "1px solid #d4af37", color: "#d4af37", padding: "5px 15px", borderRadius: "20px", fontSize: "11px", fontWeight: 900 }}>🪄 تحسين الصياغة بـ AI[span_21](end_span)</button>
               </div>
             ))}
             <button onClick={() => setIsReportingMode(true)} style={{ width: "100%", padding: "18px", background: "#d4af37", color: "#0a192f", borderRadius: "15px", fontWeight: 900 }}>توليد التقرير النهائي 📄</button>
          </div>
        )}

        [span_22](start_span){/* نظام الباقات (Pricing)[span_22](end_span) */}
        {activeTab === 'pricing' && (
          <div style={{ background: "white", padding: "30px", borderRadius: "25px" }}>
             [span_23](start_span)<h3 style={{ fontWeight: 900, textAlign: "center" }}>💰 نظام الاشتراكات المتدرج[span_23](end_span)</h3>
             <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
               <thead>
                 <tr style={{ background: "#f8f9fa" }}>
                   [span_24](start_span)<th style={{ padding: "10px", border: "1px solid #eee" }}>الميزة[span_24](end_span)</th>
                   [span_25](start_span)<th style={{ padding: "10px", border: "1px solid #eee" }}>مجاني[span_25](end_span)</th>
                   [span_26](start_span)<th style={{ padding: "10px", border: "1px solid #eee" }}>احترافي[span_26](end_span)</th>
                 </tr>
               </thead>
               <tbody>
                 [span_27](start_span)<tr><td style={{ padding: "10px", border: "1px solid #eee" }}>السعر[span_27](end_span)</td><td style={{ padding: "10px" }}>$0</td><td style={{ padding: "10px" }}>$29</td></tr>
                 [span_28](start_span)<tr><td style={{ padding: "10px", border: "1px solid #eee" }}>تحسين AI[span_28](end_span)</td><td style={{ padding: "10px" }}>❌</td><td style={{ padding: "10px" }}>✅</td></tr>
               </tbody>
             </table>
          </div>
        )}
      </main>

      [span_29](start_span){/* زر الواتساب وتذييل التنقل[span_29](end_span) */}
      <a href="https://wa.me/967774575749" target="_blank" className="no-print" style={{ position: "fixed", bottom: "100px", left: "25px", width: "65px", height: "65px", background: "#25d366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999 }}><span style={{ color: "white", fontSize: "30px" }}>💬</span></a>
      
      <nav className="no-print" style={{ position: "fixed", bottom: 0, width: "100%", height: "85px", background: "white", display: "flex", borderTop: "2px solid #eee", zIndex: 1000 }}>
        <button onClick={() => setActiveTab('platform')} style={{ flex: 1, border: "none", background: "none", color: activeTab === 'platform' ? "#0a192f" : "#adb5bd" }}><div style={{ fontSize: "22px" }}>🏠</div><div style={{ fontSize: "12px", fontWeight: 900 }}>المنصة</div></button>
        <button onClick={() => setActiveTab('pricing')} style={{ flex: 1, border: "none", background: "none", color: activeTab === 'pricing' ? "#0a192f" : "#adb5bd" }}><div style={{ fontSize: "22px" }}>💳</div><div style={{ fontSize: "12px", fontWeight: 900 }}>الباقات</div></button>
        [span_30](start_span){userEmail === 'almansoourd@gmail.com' && <button style={{ flex: 1, border: "none", background: "none", color: "#d4af37" }}><div style={{ fontSize: "22px" }}>⚙️</div><div style={{ fontSize: "12px", fontWeight: 900 }}>الإدارة[span_30](end_span)</div></button>}
      </nav>
    </div>
  );
}
