import React, { useState } from 'react';
import Head from 'next/head';
import { trainingData } from '../src/data/training'; 
import PricingSection from '../src/components/Pricing';

export default function SovereignEvolution() {
  const [activeTab, setActiveTab] = useState('platform'); // platform, pricing, admin
  const [currentStep, setCurrentStep] = useState(0); // 0: Cover, 1: Data, 2: Analysis

  return (
    <div dir="rtl" style={{ backgroundColor: "#f0f2f5", minHeight: "100vh", fontFamily: "'Cairo', sans-serif", paddingBottom: "100px" }}>
      <Head>
        <title>منصة المنصور الاستراتيجية</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>

      {/* الهيدر السيادي */}
      <div style={{ background: "#0a192f", color: "white", padding: "30px 20px", textAlign: "center", borderBottom: "4px solid #d4af37" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 900, margin: 0 }}>🏛️ منصة المنصور الاستراتيجية</h2>
      </div>

      <div style={{ maxWidth: "600px", margin: "20px auto", padding: "0 20px" }}>
        
        {activeTab === 'pricing' && <PricingSection />}

        {activeTab === 'platform' && (
          <div style={{ background: "white", borderRadius: "20px", padding: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            
            {/* مؤشر الخطوات */}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px", borderBottom: "1px solid #eee", paddingBottom: "15px" }}>
              <span style={{ fontWeight: 900, color: currentStep === 0 ? "#d4af37" : "#ccc" }}>1. الغلاف</span>
              <span style={{ fontWeight: 900, color: currentStep === 1 ? "#d4af37" : "#ccc" }}>2. البيانات</span>
              <span style={{ fontWeight: 900, color: currentStep === 2 ? "#d4af37" : "#ccc" }}>3. التحليل</span>
            </div>

            {/* محتوى الخطوة 0: صفحة الغلاف */}
            {currentStep === 0 && (
              <div>
                <h3 style={{ color: "#0a192f" }}>📁 بيانات غلاف التقرير</h3>
                <input style={{ width: "100%", padding: "15px", marginBottom: "15px", borderRadius: "10px", border: "1px solid #ddd" }} placeholder="اسم المشروع / البرنامج" />
                <input style={{ width: "100%", padding: "15px", marginBottom: "15px", borderRadius: "10px", border: "1px solid #ddd" }} placeholder="تاريخ التقرير" />
                <button onClick={() => setCurrentStep(1)} style={{ width: "100%", background: "#0a192f", color: "white", padding: "15px", borderRadius: "10px", fontWeight: 900 }}>التالي: البدء بالأسئلة</button>
              </div>
            )}

            {/* محتوى الخطوة 1: الأسئلة مع الأمثلة */}
            {currentStep === 1 && (
              <div>
                <h3 style={{ color: "#0a192f" }}>📝 الأسئلة المنهجية</h3>
                {trainingData.questions.slice(0, 4).map((q) => (
                  <div key={q.id} style={{ marginBottom: "25px" }}>
                    <label style={{ fontWeight: 900, display: "block", marginBottom: "8px" }}>{q.id}. {q.q}</label>
                    <div style={{ fontSize: "11px", color: "#7f8c8d", background: "#f8f9fa", padding: "10px", borderRadius: "8px", borderRight: "4px solid #d4af37" }}>
                      <b>💡 إرشاد:</b> {q.hint}<br/>
                      <i style={{ color: "#27ae60" }}>{q.example}</i>
                    </div>
                    <textarea style={{ width: "100%", padding: "12px", marginTop: "10px", borderRadius: "8px", border: "1px solid #eee" }} rows="3" placeholder="اكتب هنا..."></textarea>
                  </div>
                ))}
                <div style={{ display: "flex", gap: "10px" }}>
                  <button onClick={() => setCurrentStep(0)} style={{ flex: 1, background: "#eee", padding: "15px", borderRadius: "10px" }}>السابق</button>
                  <button onClick={() => setCurrentStep(2)} style={{ flex: 2, background: "#0a192f", color: "white", padding: "15px", borderRadius: "10px" }}>التالي</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* الشريط السفلي المستوحى من واتساب */}
      <nav style={{ position: "fixed", bottom: 0, width: "100%", background: "#ffffff", height: "70px", display: "flex", alignItems: "center", borderTop: "1px solid #e0e0e0", boxShadow: "0 -2px 10px rgba(0,0,0,0.05)" }}>
        <button onClick={() => setActiveTab('platform')} style={{ flex: 1, border: "none", background: "none", color: activeTab === 'platform' ? '#075e54' : '#54656f', fontSize: "14px", fontWeight: 700 }}>
          <div style={{ fontSize: "20px" }}>🏠</div>المنصة
        </button>
        <button onClick={() => setActiveTab('pricing')} style={{ flex: 1, border: "none", background: "none", color: activeTab === 'pricing' ? '#075e54' : '#54656f', fontSize: "14px", fontWeight: 700 }}>
          <div style={{ fontSize: "20px" }}>💰</div>الباقات
        </button>
        <button onClick={() => setActiveTab('admin')} style={{ flex: 1, border: "none", background: "none", color: activeTab === 'admin' ? '#075e54' : '#54656f', fontSize: "14px", fontWeight: 700 }}>
          <div style={{ fontSize: "20px" }}>⚙️</div>الإدارة
        </button>
      </nav>
    </div>
  );
}
