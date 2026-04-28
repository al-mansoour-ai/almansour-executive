export const trainingData = {
  title: "تقييم الأثر التدريبي الاستراتيجي",
  reference: "Kirkpatrick Level 4",
  steps: [
    {
      label: "بيانات الغلاف والهوية",
      fields: [
        { id: "p_logo", label: "شعار المؤسسة", type: "file-placeholder" }, // حقل الشعار
        { id: "p_name", label: "عنوان البرنامج الاستراتيجي", placeholder: "مثال: القيادة الرقمية والتحول المؤسسي" },
        { id: "p_client", label: "الجهة المستفيدة (Client)", placeholder: "مثال: وزارة التخطيط والتعاون الدولي" },
        { id: "p_ref", label: "رقم المرجع (Ref No.)", placeholder: "مثال: YF-2026-TR-001" },
        { id: "p_date_custom", label: "تاريخ التقرير", type: "strategic-date" },
        { id: "p_security", label: "تصنيف السرية", type: "dropdown-security" } // حقل السرية
      ]
    },
    {
      label: "الأسئلة العلمية",
      questions: [
        { id: 1, q: "تحليل البيئة اللوجستية", hint: "تقييم التجهيزات.", example: "مثال: القاعة مجهزة بالكامل." }
      ]
    }
  ]
};
