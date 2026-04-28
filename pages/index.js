import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [report, setReport] = useState("");

  const generateReport = () => {
    const text = `
📊 تقرير استشاري سيادي

بناءً على البيانات التالية:
"${input}"

🔍 التحليل:
تم تحليل الوضع الحالي وتبين وجود فجوات تشغيلية تؤثر على الأداء.

⚠️ المخاطر:
استمرار الوضع الحالي سيؤدي إلى هدر مالي وزمني.

💡 التوصيات:
- تحسين الرقابة
- تفعيل مؤشرات الأداء
- تطبيق الأتمتة

🎯 النتيجة:
رفع الكفاءة وتقليل الهدر بنسبة ملحوظة.
`;
    setReport(text);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Cairo", direction: "rtl" }}>
      <h1>🏛️ منصة المنصور السيادية</h1>

      <textarea
        placeholder="اكتب وصف المشروع أو المشكلة..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%", height: "120px", marginBottom: "10px" }}
      />

      <button onClick={generateReport}>
        توليد التقرير
      </button>

      <pre style={{ whiteSpace: "pre-wrap", marginTop: "20px" }}>
        {report}
      </pre>

      {report && (
        <a
          href={`https://wa.me/967774575749?text=${encodeURIComponent(report)}`}
          target="_blank"
        >
          <button style={{ marginTop: "10px" }}>
            📩 اطلب التقرير عبر واتساب
          </button>
        </a>
      )}
    </div>
  );
}
