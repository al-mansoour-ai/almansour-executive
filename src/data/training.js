export const trainingData = {
  title: "تقييم الأثر التدريبي الاستراتيجي",
  reference: "Kirkpatrick Level 4",
  steps: [
    {
      label: "بيانات الغلاف",
      fields: [
        { id: "p_name", label: "اسم البرنامج التدريبي", placeholder: "مثال: القيادة الرقمية" },
        { id: "p_date_custom", label: "تاريخ التقرير (اختيار سريع)", type: "strategic-date" }, 
        { id: "p_location", label: "مقر الانعقاد", placeholder: "مثال: صنعاء - قاعة السفير" }
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
