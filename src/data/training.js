export const trainingData = {
  title: "تقييم الأثر التدريبي الاستراتيجي",
  reference: "Kirkpatrick Level 4 + Phillips ROI",
  steps: [
    {
      label: "بيانات الغلاف والاعتماد",
      fields: [
        { id: "p_logo", label: "شعار الجهة الصادرة", type: "file-upload" }, 
        { id: "p_name", label: "عنوان البرنامج الاستراتيجي", placeholder: "مثال: دبلوم القيادة التنفيذية" },
        { id: "p_client", label: "الجهة المستفيدة (Prepared For)", placeholder: "اسم المنظمة أو المؤسسة" },
        { id: "p_author", label: "معد التقرير (Prepared By)", placeholder: "اسم المستشار المستقل" },
        { id: "p_ref", label: "الرقم المرجعي (Ref No.)", placeholder: "مثال: YF-2026-TR-001" },
        { id: "p_security", label: "درجة السرية", type: "security-dropdown" },
        { id: "p_date_custom", label: "تاريخ الإصدار", type: "strategic-date" },
        { id: "p_location", label: "النطاق الجغرافي", placeholder: "مثال: صنعاء، اليمن" }
      ]
    },
    {
      label: "المستوى التشغيلي",
      questions: [
        { id: 1, q: "تحليل البيئة اللوجستية والمحتوى", hint: "تقييم التجهيزات والمادة العلمية.", example: "مثال: القاعة مجهزة بالكامل والمادة شاملة." },
        { id: 2, q: "قياس المشاركة التفاعلية", hint: "رصد مستوى الاستجابة.", example: "مثال: بلغت نسبة التفاعل 95%." }
      ]
    }
  ]
};
