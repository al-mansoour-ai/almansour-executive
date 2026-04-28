import React, { useState } from 'react';
import Head from 'next/head';
// استدعاء البيانات والمكونات التي أنشأتها في الخطوات السابقة
import { trainingData } from '../src/data/training'; 
import PricingSection from '../src/components/Pricing';

export default function SovereignPlatform() {
  const [activeTab, setActiveTab] = useState('platform');

  return (
    <div dir="rtl" style={{ backgroundColor: "#f4f7f6", minHeight: "100vh", fontFamily: "'Cairo', sans-serif", textAlign: "right", paddingBottom: "80px" }}>
      <Head>
        <title>منصة المنصور الاستراتيجية</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      {/* الهيدر التنفيذي السيادي */}
      <div style={{ background: "linear-gradient(135deg, #0a192f 0%, #1a3c6d 100%)", color: "white", padding: "45px 20px", textAlign: "center", borderBottom: "6px solid #d4af37", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}>
        <h1 style={{ fontSize: "26px", fontWeight: 900, margin: 0 }}>🏛️ منصة المنصور الاستراتيجية</h1>
        <p style={{ color: "#d4af37", marginTop: "10px", fontWeight: 700, fontSize: "14px" }}>نظام الأتمتة المنهجية للتقارير الدولية</p>
      </div>

      <div style={{ maxWidth: "780px", margin: "-25px auto 20px auto", padding: "0 20px" }}>
        
        {activeTab === 'platform' && (
          <>
            {/* استدعاء وحدة الباقات */}
            <PricingSection />

            {/* عرض النموذج المنهجي من ملف التدريب */}
            <div style={{ background: "white", borderRadius: "20px", padding: "35px", borderTop: "10px solid #0a192f", boxShadow: "0 15px 45px rgba(0,0,0,0.1)" }}>
              <h2 style={{ color: "#0a192f", fontWeight: 900, fontSize: "22px", marginBottom: "10px" }}>🎓 {trainingData.title}</h2>
              <p style={{ fontSize: "12px", color: "#d4af37", fontWeight: 700, marginBottom: "30px", borderBottom: "1px solid #f1f2f6", paddingBottom: "15px" }}>
                المرجع العلمي: {trainingData.reference}
              </p>
              
              {trainingData.questions.map((item) => (
                <div key={item.id} style={{ marginBottom: "40px" }}>
                  <label style={{ fontWeight: 900, color: "#0a192f", display: "block", fontSize: "17px", marginBottom: "10px" }}>
                    {item.id}. {item.q}
                  </label>
                  <div style={{ color: "#7f8c8d", fontSize: "13px", marginBottom: "15px", background: "#f8f9fa", padding: "12px", borderRadius: "8px", borderRight: "4px solid #ced4da" }}>
                    <b>💡 إرشاد استشاري ثابت:</b> {item.hint}
                  </div>
                  <textarea 
                    style={{ width: "100%", padding: "18px", borderRadius: "12px", border: "2px solid #eee", fontSize: "16px", fontFamily: "inherit", boxSizing: "border-box", background: "#fdfdfd" }} 
                    rows="4" 
                    placeholder="ادخل التحليلات والبيانات الفنية هنا..."
                  ></textarea>
                </div>
              ))}

              <button style={{ backgroundColor: "#0a192f", color: "white", padding: "22px", borderRadius: "15px", width: "100%", fontWeight: 900, fontSize: "20px", border: "2px solid #d4af37", cursor: "pointer", boxShadow: "0 10px 20px rgba(10,25,47,0.2)" }}>
                توليد الوثيقة السيادية النهائية 📄
              </button>
            </div>
          </>
        )}
      </div>

      {/* الشريط السفلي الأنيق */}
      <nav style={{ position: "fixed", bottom: 0, width: "100%", background: "#0a192f", height: "65px", display: "flex", borderTop: "4px solid #d4af37", zIndex: 1000 }}>
        <button onClick={() => setActiveTab('platform')} style={{ flex: 1, border: "none", background: "none", color: activeTab === 'platform' ? '#d4af37' : 'white', fontWeight: 900, fontSize: "15px", cursor: "pointer" }}>🏠 المنصة</button>
        <button style={{ flex: 1, border: "none", background: "none", color: "white", opacity: 0.5, fontWeight: 900, fontSize: "15px" }}>⚙️ الإدارة</button>
      </nav>
    </div>
  );
}
