import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function SovereignFinalSuccess() {
  const [activeTab, setActiveTab] = useState('platform');
  const [currentStep, setCurrentStep] = useState(0);
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [isClient, setIsClient] = useState(false);

  // 12 سؤالاً منهجياً مع أمثلة استشارية واضحة جداً
  const trainingData = {
    steps: [
      {
        label: "بيانات الغلاف والاعتماد",
        fields: [
          { id: "p_logo", label: "شعار الجهة الصادرة", type: "file-upload" },
          { id: "p_agency", label: "الجهة المنفذة للتقرير", placeholder: "مثال: مؤسسة اليمن للنهضة" },
          { id: "p_client", label: "الجهة المستفيدة", placeholder: "مثال: وزارة الشؤون الاجتماعية" },
          { id: "p_author", label: "معد التقرير (المستشار)", placeholder: "الاسم واللقب العلمي" },
          { id: "p_ref", label: "الرقم المرجعي (Ref No.)", placeholder: "مثال: YF-2026-TR-001" },
          { id: "p_date", label: "تاريخ الإصدار", type: "strategic-date" },
          { id: "p_security", label: "درجة السرية", type: "security-dropdown" }
        ]
      },
      {
        label: "الاستجابة والتعلم (L1 & L2)",
        questions: [
          { id: 1, q: "تحليل البيئة اللوجستية والمحتوى", hint: "تقييم التجهيزات.", example: "تم توفير بيئة تدريبية ذكية بمواصفات دولية، كما أن المادة العلمية غطت 95% من الاحتياجات الفعلية." },
          { id: 2, q: "قياس المشاركة التفاعلية", hint: "رصد الاستجابة.", example: "أظهر المشاركون ارتباطاً مهنياً عالياً، حيث بلغت نسبة المشاركة الفعالة 100%." },
          { id: 3, q: "تحليل الفجوة المعرفية", hint: "الفارق المعرفي قبل وبعد.", example: "ارتفع مؤشر المعرفة التخصصية من 30% قبلياً إلى 85% بعدياً." },
          { id: 4, q: "إتقان المهارات المستهدفة", hint: "التمكن الفعلي.", example: "تمكن 90% من المتدربين من بناء مصفوفة المخاطر الاستراتيجية بدقة." }
        ]
      },
      {
        label: "السلوك والأثر (L3 & L4)",
        questions: [
          { id: 5, q: "انعكاس التدريب على العمل", hint: "تغير السلوك الوظيفي.", example: "لوحظ تطبيق نظام المراسلات الموحد وتفعيل بروتوكولات إدارة الأزمات." },
          { id: 6, q: "تحديات تطبيق المخرجات", hint: "العوائق الميدانية.", example: "نقص الأدوات التقنية اللازمة للتطبيق الفوري في بعض الفروع." },
          { id: 7, q: "قياس الأثر على KPIs", hint: "التحسن الكمي.", example: "انخفاض زمن معالجة الطلبات بنسبة 15% وتحسن جودة المخرجات الإدارية." },
          { id: 8, q: "المحاذاة الاستراتيجية", hint: "الربط بالرؤية.", example: "المساهمة المباشرة في تحقيق هدف التحول الرقمي للمؤسسة." }
        ]
      },
      {
        label: "العائد المالي والخلاصة",
        questions: [
          { id: 9, q: "تحليل العائد المالي (ROI)", hint: "الوفر مقابل التكلفة.", example: "القيمة النقدية للوقت الموفر بفضل الأتمتة تعادل 2.5 ضعف تكلفة التدريب." },
          { id: 10, q: "الأثر غير الملموس", hint: "السمعة والروح المعنوية.", example: "تحسن التناغم بين أعضاء الفريق وارتفاع مؤشر الرضا الوظيفي." },
          { id: 11, q: "توصيات التطوير", hint: "لضمان الاستدامة.", example: "عقد جلسات متابعة شهرية لمدة 3 أشهر لضمان استقرار التطبيق الميداني." },
          { id: 12, q: "الخلاصة الاستشارية", hint: "التقييم الفلسفي.", example: "البرنامج حقق أهدافه بامتياز ويُوصى بتعميم المنهجية على بقية الإدارات." }
        ]
      }
    ]
  };

  useEffect(() => {
    setIsClient(true);
    const savedEmail = localStorage.getItem('user_email');
    if (savedEmail) { setUserEmail(savedEmail); setIsLoggedIn(true); }
  }, []);

  if (!isClient) return null;

  const years = Array.from({ length: 30 }, (_, i) => 2026 - i);
  const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    setUserEmail(email);
    setIsLoggedIn(true);
    localStorage.setItem('user_email', email);
  };

  const currentData = trainingData.steps[currentStep];

  if (!isLoggedIn) {
    return (
      <div dir="rtl" style={{ background: "#0a192f", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cairo', sans-serif" }}>
        <Head><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" /></Head>
        <div style={{ background: "white", padding: "40px", borderRadius: "20px", width: "90%", maxWidth: "400px", textAlign: "center" }}>
          <h2 style={{ fontWeight: 900, color: "#0a192f" }}>🏛️ بوابة المنصور</h2>
          <form onSubmit={handleLogin}>
            <input name="email" type="email" required placeholder="البريد الإلكتروني" style={{ width: "100%", padding: "15px", borderRadius: "10px", border: "1px solid #ddd", marginBottom: "20px", fontFamily: "'Cairo'" }} />
            <button style={{ width: "100%", padding: "15px", background: "#d4af37", color: "white", borderRadius: "10px", border: "none", fontWeight: 900, fontFamily: "'Cairo'", cursor: "pointer" }}>دخول آمن</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" style={{ backgroundColor: "#f8fafc", minHeight: "100vh", fontFamily: "'Cairo', sans-serif", paddingBottom: "110px" }}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
        * { font-family: 'Cairo', sans-serif !important; }
        @media print { .no-print { display: none !important; } .print-only { display: block !important; } }
      `}</style>

      {/* Header */}
      <div className="no-print" style={{ background: "#0a192f", color: "white", padding: "25px", textAlign: "center", borderBottom: "4px solid #d4af37" }}>
        <h2 style={{ fontSize: "18px", fontWeight: 900, margin: 0 }}>🏛️ منصة المنصور الاستراتيجية</h2>
      </div>

      <main style={{ maxWidth: "600px", margin: "20px auto", padding: "0 15px" }}>
        
        {/* الباقات */}
        {activeTab === 'pricing' && (
          <div style={{ background: "white", borderRadius: "20px", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontWeight: 900, textAlign: "center" }}>💰 باقات الخدمة السيادية</h3>
            <div style={{ marginTop: "20px" }}>
              <div style={{ padding: "15px", border: "1px solid #eee", borderRadius: "10px", marginBottom: "10px" }}><b>مجانية:</b> 1 تقرير استراتيجي (0$)</div>
              <div style={{ padding: "15px", border: "2px solid #d4af37", borderRadius: "10px", marginBottom: "10px" }}><b>احترافية:</b> 10 تقارير + دعم AI (50$)</div>
              <div style={{ padding: "15px", background: "#0a192f", color: "white", borderRadius: "10px" }}><b>مؤسسية:</b> تقارير لا محدودة (200$)</div>
            </div>
          </div>
        )}

        {/* الإدارة المخفية */}
        {activeTab === 'admin' && userEmail === 'almansoourd@gmail.com' && (
          <div style={{ background: "white", borderRadius: "20px", padding: "30px" }}>
            <h3 style={{ fontWeight: 900 }}>⚙️ محرك الأكواد</h3>
            <button onClick={() => setGeneratedCode(`PRO-${Math.floor(1000+Math.random()*9000)}`)} style={{ width: "100%", padding: "15px", background: "#d4af37", color: "white", border: "none", borderRadius: "10px", fontWeight: 900 }}>توليد كود تفعيل</button>
            {generatedCode && <div style={{ marginTop: "20px", fontSize: "24px", textAlign: "center", fontWeight: 900, color: "#16a34a", border: "2px dashed #16a34a", padding: "10px" }}>{generatedCode}</div>}
          </div>
        )}

        {/* المنصة */}
        {activeTab === 'platform' && (
          <div style={{ background: "white", borderRadius: "20px", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h3 style={{ color: "#0a192f", fontWeight: 900, marginBottom: "20px" }}>{currentData.label}</h3>

            {currentData.fields && currentData.fields.map(f => (
              <div key={f.id} style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontWeight: 700, marginBottom: "8px", fontSize: "14px" }}>{f.label}</label>
                {f.type === 'file-upload' ? (
                  <div style={{ border: "2px dashed #d4af37", padding: "15px", borderRadius: "12px", textAlign: "center", background: "#fffdf5" }}>
                    <span style={{ fontSize: "12px", color: "#d4af37", fontWeight: 900 }}>📤 رفع الشعار</span>
                  </div>
                ) : f.type === 'strategic-date' ? (
                  <div style={{ display: "flex", gap: "5px" }}>
                    <select style={{ flex: 1, padding: "10px", borderRadius: "10px", border: "1px solid #ddd" }}><option>السنة</option>{years.map(y => <option key={y}>{y}</option>)}</select>
                    <select style={{ flex: 1.2, padding: "10px", borderRadius: "10px", border: "1px solid #ddd" }}><option>الشهر</option>{months.map(m => <option key={m}>{m}</option>)}</select>
                    <select style={{ flex: 1, padding: "10px", borderRadius: "10px", border: "1px solid #ddd" }}><option>اليوم</option>{days.map(d => <option key={d}>{d}</option>)}</select>
                  </div>
                ) : f.type === 'security-dropdown' ? (
                  <select style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #ddd", color: "#c0392b", fontWeight: 900 }}>
                    <option>--- حدد السرية ---</option>
                    <option>📄 عام (Public)</option><option>🔒 مقيد (Restricted)</option><option>🛑 سري (Confidential)</option><option>💎 سري للغاية (Top Secret)</option>
                  </select>
                ) : (
                  <input type="text" placeholder={f.placeholder} style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #ddd" }} />
                )}
              </div>
            ))}

            {currentData.questions && currentData.questions.map(q => (
              <div key={q.id} style={{ marginBottom: "30px" }}>
                <label style={{ display: "block", fontWeight: 900, fontSize: "16px", marginBottom: "10px" }}>{q.id}. {q.q}</label>
                <div style={{ background: "#f0fdf4", padding: "15px", borderRadius: "12px", borderRight: "5px solid #22c55e", marginBottom: "12px" }}>
                   <div style={{ fontSize: "11px", color: "#166534", fontWeight: 900 }}>💡 مثال تطبيقي استرشادي:</div>
                   <div style={{ fontSize: "13px", color: "#1e293b", lineHeight: "1.6", fontStyle: "italic" }}>{q.example}</div>
                </div>
                <textarea rows="4" style={{ width: "100%", padding: "15px", borderRadius: "12px", border: "1px solid #cbd5e1" }} placeholder="ادخل التحليل الاستراتيجي هنا..."></textarea>
              </div>
            ))}

            <div className="no-print" style={{ display: "flex", gap: "12px", marginTop: "40px" }}>
              {currentStep > 0 && <button onClick={() => setCurrentStep(currentStep - 1)} style={{ flex: 1, padding: "15px", borderRadius: "12px", background: "#f1f5f9", fontWeight: 700, border: "none" }}>السابق</button>}
              {currentStep < 3 ? (
                <button onClick={() => setCurrentStep(currentStep + 1)} style={{ flex: 2, padding: "15px", borderRadius: "12px", background: "#0a192f", color: "white", fontWeight: 900 }}>التالي 🚀</button>
              ) : (
                <button onClick={() => window.print()} style={{ flex: 2, padding: "15px", borderRadius: "12px", background: "#d4af37", color: "#0a192f", fontWeight: 900 }}>توليد التقرير 📄</button>
              )}
            </div>
          </div>
        )}
      </main>

      {/* زر الواتساب */}
      <a href="https://wa.me/967774575749" target="_blank" className="no-print" style={{ position: "fixed", bottom: "100px", left: "20px", width: "65px", height: "65px", background: "#25d366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 25px rgba(0,0,0,0.3)", zIndex: 9999 }}>
        <span style={{ fontSize: "35px", color: "white" }}>💬</span>
      </a>

      {/* Navbar */}
      <nav className="no-print" style={{ position: "fixed", bottom: 0, width: "100%", height: "80px", background: "white", display: "flex", borderTop: "2px solid #eee", zIndex: 1000 }}>
        <button onClick={() => setActiveTab('platform')} style={{ flex: 1, border: "none", background: "none", color: activeTab === 'platform' ? "#0a192f" : "#adb5bd", fontWeight: 900 }}>🏠<br/>المنصة</button>
        <button onClick={() => setActiveTab('pricing')} style={{ flex: 1, border: "none", background: "none", color: activeTab === 'pricing' ? "#0a192f" : "#adb5bd", fontWeight: 900 }}>💳<br/>الباقات</button>
        {userEmail === 'almansoourd@gmail.com' && <button onClick={() => setActiveTab('admin')} style={{ flex: 1, border: "none", background: "none", color: "#d4af37", fontWeight: 900 }}>⚙️<br/>الإدارة</button>}
      </nav>
    </div>
  );
}
