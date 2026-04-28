import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function AlMansourSovereignV5() {
  const [activeTab, setActiveTab] = useState('platform');
  const [currentStep, setCurrentStep] = useState(0);
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');

  // المنهجية الكاملة (12 سؤالاً) بأمثلة استشارية واضحة جداً
  const trainingData = {
    steps: [
      {
        label: "بيانات الغلاف والاعتماد",
        fields: [
          { id: "p_logo", label: "شعار الجهة الصادرة", type: "file-upload" },
          { id: "p_name", label: "عنوان البرنامج الاستراتيجي", placeholder: "مثال: دبلوم القيادة التنفيذية" },
          { id: "p_agency", label: "الجهة المنفذة للتقرير", placeholder: "مثال: مؤسسة اليمن للنهضة" },
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
        label: "السلوك والأثر الإداري (L3 & L4)",
        questions: [
          { id: 5, q: "انعكاس التدريب على بيئة العمل", hint: "تغير السلوك الوظيفي.", example: "لوحظ تطبيق نظام المراسلات الموحد وتفعيل بروتوكولات إدارة الأزمات المتفق عليها." },
          { id: 6, q: "تحديات تطبيق المخرجات", hint: "العوائق الميدانية.", example: "نقص الأدوات التقنية اللازمة للتطبيق الفوري في بعض الفروع الإقليمية." },
          { id: 7, q: "قياس الأثر على مؤشرات الأداء (KPIs)", hint: "التحسن الكمي.", example: "انخفاض زمن معالجة الطلبات بنسبة 15% وتحسن ملحوظ في جودة المخرجات الإدارية." },
          { id: 8, q: "المحاذاة الاستراتيجية", hint: "الربط بالرؤية.", example: "المساهمة المباشرة في تحقيق هدف التحول الرقمي ضمن رؤية المؤسسة 2026." }
        ]
      },
      {
        label: "العائد المالي والخلاصة (ROI)",
        questions: [
          { id: 9, q: "تحليل العائد المالي (ROI)", hint: "الوفر مقابل التكلفة.", example: "القيمة النقدية للوقت الموفر بفضل الأتمتة تعادل 2.5 ضعف التكاليف التشغيلية للبرنامج." },
          { id: 10, q: "الأثر غير الملموس", hint: "السمعة والروح المعنوية.", example: "تحسن التناغم بين أعضاء الفريق وارتفاع مؤشر الولاء المؤسسي بنسبة 20%." },
          { id: 11, q: "توصيات التطوير والاستدامة", hint: "لضمان استمرار الأثر.", example: "عقد جلسات مراجعة ربع سنوية لضمان استقرار التطبيق الميداني للمهارات الجديدة." },
          { id: 12, q: "الخلاصة الاستشارية النهائية", hint: "التقييم الفلسفي.", example: "البرنامج حقق أهدافه الاستراتيجية بامتياز ويُوصى بتعميم المنهجية على كافة المستويات القيادية." }
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
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
        </Head>
        <div style={{ background: "white", padding: "40px", borderRadius: "25px", width: "90%", maxWidth: "400px", textAlign: "center", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
          <h2 style={{ fontWeight: 900, color: "#0a192f", marginBottom: "10px" }}>🏛️ بوابة المنصور</h2>
          <p style={{ fontSize: "13px", color: "#666", marginBottom: "25px" }}>المنصة السيادية للتقارير الاستراتيجية</p>
          <form onSubmit={handleLogin}>
            <input name="email" type="email" required placeholder="البريد الإلكتروني المعتمد" style={{ width: "100%", padding: "15px", borderRadius: "12px", border: "1px solid #ddd", marginBottom: "20px", fontFamily: "'Cairo'" }} />
            <button style={{ width: "100%", padding: "15px", background: "#d4af37", color: "white", borderRadius: "12px", border: "none", fontWeight: 900, fontFamily: "'Cairo'", cursor: "pointer" }}>دخول آمن 🛡️</button>
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
        @media print { 
          .no-print { display: none !important; } 
          body { background: white !important; }
          .print-container { width: 100% !important; margin: 0 !important; padding: 20px !important; box-shadow: none !important; }
        }
      `}</style>

      {/* Header */}
      <div className="no-print" style={{ background: "#0a192f", color: "white", padding: "25px", textAlign: "center", borderBottom: "4px solid #d4af37", position: "sticky", top: 0, zIndex: 100 }}>
        <h2 style={{ fontSize: "18px", fontWeight: 900, margin: 0 }}>🏛️ منصة المنصور الاستراتيجية</h2>
      </div>

      <main style={{ maxWidth: "600px", margin: "20px auto", padding: "0 15px" }}>
        
        {/* قسم الباقات */}
        {activeTab === 'pricing' && (
          <div style={{ background: "white", borderRadius: "20px", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontWeight: 900, textAlign: "center", color: "#0a192f" }}>💰 باقات الخدمة السيادية</h3>
            <div style={{ marginTop: "20px" }}>
              <div style={{ padding: "15px", border: "1px solid #eee", borderRadius: "12px", marginBottom: "10px", display: "flex", justifyContent: "space-between" }}><span>مجانية</span><b>0$</b></div>
              <div style={{ padding: "15px", border: "2px solid #d4af37", borderRadius: "12px", marginBottom: "10px", display: "flex", justifyContent: "space-between", background: "#fffdf5" }}><span>احترافية</span><b>50$</b></div>
              <div style={{ padding: "15px", background: "#0a192f", color: "white", borderRadius: "12px", display: "flex", justifyContent: "space-between" }}><span>مؤسسية</span><b>200$</b></div>
            </div>
          </div>
        )}

        {/* قسم الإدارة */}
        {activeTab === 'admin' && userEmail === 'almansoourd@gmail.com' && (
          <div style={{ background: "white", borderRadius: "20px", padding: "30px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
            <h3 style={{ fontWeight: 900, color: "#0a192f" }}>⚙️ محرك التراخيص</h3>
            <button onClick={() => setGeneratedCode(`VIP-${Math.floor(1000+Math.random()*9000)}`)} style={{ width: "100%", padding: "15px", background: "#d4af37", color: "white", border: "none", borderRadius: "12px", fontWeight: 900, marginTop: "20px" }}>توليد كود تفعيل جديد</button>
            {generatedCode && <div style={{ marginTop: "20px", fontSize: "28px", textAlign: "center", fontWeight: 900, color: "#16a34a", border: "2px dashed #16a34a", padding: "15px", borderRadius: "15px", background: "#f0fdf4" }}>{generatedCode}</div>}
          </div>
        )}

        {/* قسم المنصة والأسئلة */}
        {activeTab === 'platform' && (
          <div className="print-container" style={{ background: "white", borderRadius: "20px", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <div className="no-print" style={{ display: "flex", overflowX: "auto", gap: "10px", marginBottom: "25px", paddingBottom: "10px" }}>
              {trainingData.steps.map((s, i) => (
                <div key={i} style={{ minWidth: "100px", textAlign: "center", fontSize: "10px", fontWeight: 900, color: i === currentStep ? "#0a192f" : "#adb5bd" }}>
                  {i+1}. {s.label}
                  {i === currentStep && <div style={{ height: "3px", background: "#d4af37", marginTop: "5px" }}></div>}
                </div>
              ))}
            </div>

            <h3 style={{ color: "#0a192f", fontWeight: 900, marginBottom: "25px", borderBottom: "1px solid #f1f5f9", paddingBottom: "10px" }}>{currentData.label}</h3>

            {/* الحقول الذكية (الغلاف) */}
            {currentData.fields && currentData.fields.map(f => (
              <div key={f.id} style={{ marginBottom: "22px" }}>
                <label style={{ display: "block", fontWeight: 700, marginBottom: "8px", fontSize: "14px", color: "#334155" }}>{f.label}</label>
                {f.type === 'file-upload' ? (
                  <div style={{ border: "2px dashed #d4af37", padding: "20px", borderRadius: "15px", textAlign: "center", background: "#fffdf5" }}>
                    <span style={{ fontSize: "13px", color: "#d4af37", fontWeight: 900 }}>📤 اضغط لرفع الشعار الرسمي المؤسسي</span>
                  </div>
                ) : f.type === 'strategic-date' ? (
                  <div style={{ display: "flex", gap: "8px" }}>
                    <select style={{ flex: 1, padding: "12px", borderRadius: "12px", border: "1px solid #cbd5e1", background: "white" }}><option>السنة</option>{years.map(y => <option key={y}>{y}</option>)}</select>
                    <select style={{ flex: 1.2, padding: "12px", borderRadius: "12px", border: "1px solid #cbd5e1", background: "white" }}><option>الشهر</option>{months.map(m => <option key={m}>{m}</option>)}</select>
                    <select style={{ flex: 1, padding: "12px", borderRadius: "12px", border: "1px solid #cbd5e1", background: "white" }}><option>اليوم</option>{days.map(d => <option key={d}>{d}</option>)}</select>
                  </div>
                ) : f.type === 'security-dropdown' ? (
                  <select style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid #cbd5e1", color: "#c0392b", fontWeight: 900, background: "white" }}>
                    <option>--- حدد درجة السرية ---</option>
                    <option>📄 عام (Public)</option><option>🔒 مقيد (Restricted)</option><option>🛑 سري (Confidential)</option><option>💎 سري للغاية (Top Secret)</option>
                  </select>
                ) : (
                  <input type="text" placeholder={f.placeholder} style={{ width: "100%", padding: "15px", borderRadius: "12px", border: "1px solid #cbd5e1", boxSizing: "border-box" }} />
                )}
              </div>
            ))}

            {/* الأسئلة بوضوح فائق */}
            {currentData.questions && currentData.questions.map(q => (
              <div key={q.id} style={{ marginBottom: "35px" }}>
                <label style={{ display: "block", fontWeight: 900, fontSize: "16px", color: "#0f172a", marginBottom: "12px" }}>{q.id}. {q.q}</label>
                
                {/* صندوق المثال الاستشاري المطور */}
                <div style={{ background: "#f0fdf4", padding: "18px", borderRadius: "15px", borderRight: "6px solid #22c55e", marginBottom: "15px", boxShadow: "0 2px 10px rgba(34, 197, 94, 0.05)" }}>
                   <div style={{ fontSize: "12px", color: "#166534", fontWeight: 900, marginBottom: "6px" }}>💡 نموذج للإجابة الاسترشادية:</div>
                   <div style={{ fontSize: "14px", color: "#334155", lineHeight: "1.7", fontStyle: "italic" }}>{q.example}</div>
                </div>

                <textarea rows="5" style={{ width: "100%", padding: "18px", borderRadius: "15px", border: "1px solid #cbd5e1", fontSize: "15px", lineHeight: "1.6", boxSizing: "border-box" }} placeholder="ادخل التحليل الفني والبيانات هنا..."></textarea>
              </div>
            ))}

            <div className="no-print" style={{ display: "flex", gap: "12px", marginTop: "40px" }}>
              {currentStep > 0 && <button onClick={() => setCurrentStep(currentStep - 1)} style={{ flex: 1, padding: "18px", borderRadius: "15px", background: "#f1f5f9", fontWeight: 700, border: "none", cursor: "pointer" }}>السابق</button>}
              {currentStep < 3 ? (
                <button onClick={() => setCurrentStep(currentStep + 1)} style={{ flex: 2, padding: "18px", borderRadius: "15px", background: "#0a192f", color: "white", fontWeight: 900, border: "none", cursor: "pointer" }}>التالي 🚀</button>
              ) : (
                <button onClick={() => window.print()} style={{ flex: 2, padding: "18px", borderRadius: "15px", background: "#d4af37", color: "#0a192f", fontWeight: 900, border: "none", cursor:
