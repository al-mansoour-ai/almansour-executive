export const trainingData = {
  title: "تقييم الأثر التدريبي الاستراتيجي",
  reference: "Kirkpatrick Level 4 + Phillips ROI",
  steps: [
    {
      label: "بيانات الغلاف والاعتماد",
      fields: [
        { id: "p_logo", label: "شعار الجهة الصادرة", type: "file-upload" }, 
        { id: "p_name", label: "عنوان البرنامج / المشروع", placeholder: "مثال: مهارات التخطيط الاستراتيجي" },
        { id: "p_client", label: "الجهة المستفيدة (Prepared For)", placeholder: "اسم المنظمة أو المؤسسة" },
        { id: "p_author", label: "معد التقرير (Prepared By)", placeholder: "اسم المستشار أو الخبير" },
        { id: "p_ref", label: "الرقم المرجعي السيادي (Ref No.)", placeholder: "مثال: TR-2026-001" },
        { id: "p_security", label: "درجة السرية والخصوصية", type: "security-dropdown" },
        { id: "p_date_custom", label: "تاريخ الإصدار", type: "strategic-date" },
        { id: "p_location", label: "النطاق الجغرافي", placeholder: "مثال: صنعاء، اليمن" }
      ]
    },
    {
      label: "المستوى التشغيلي",
      questions: [
        { id: 1, q: "تحليل البيئة اللوجستية", hint: "تقييم التجهيزات.", example: "مثال: القاعة مجهزة بالكامل." }
      ]
    }
  ]
};
