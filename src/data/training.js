export const trainingData = {
  title: "تقييم الأثر التدريبي الاستراتيجي",
  reference: "Kirkpatrick Level 4 + Phillips ROI",
  steps: [
    {
      label: "بيانات الغلاف والاعتماد",
      fields: [
        { id: "p_logo", label: "شعار الجهة (رفع صوره)", type: "file-upload" }, 
        { id: "p_agency", label: "الجهة المنفذة", placeholder: "مثال: مؤسسة اليمن للنهضة" },
        { id: "p_client", label: "الجهة المستفيدة", placeholder: "مثال: وزارة الشؤون الاجتماعية" },
        { id: "p_author", label: "معد التقرير (الخبير الاستشاري)", placeholder: "اكتب الاسم واللقب العلمي" },
        { id: "p_ref", label: "الرقم المرجعي (Ref No.)", placeholder: "مثال: YF-2026-TR-001" },
        { id: "p_security", label: "درجة السرية", type: "security-dropdown" },
        { id: "p_date_custom", label: "تاريخ التقرير", type: "strategic-date" }
      ]
    },
    {
      label: "المستوى التشغيلي",
      questions: [
        { id: 1, q: "تحليل البيئة اللوجستية", hint: "تقييم التجهيزات.", example: "مثال: القاعة مجهزة بالكامل." },
        { id: 2, q: "قياس المشاركة التفاعلية", hint: "رصد الاستجابة.", example: "مثال: بلغت نسبة التفاعل 95%." }
      ]
    }
  ]
};
