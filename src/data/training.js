export const reportTracks = {
  [span_3](start_span)// المسار 1: الرقابة والامتثال[span_3](end_span)
  field_visit: {
    title: "تقرير النزول الميداني الفني",
    category: "الرقابة والامتثال",
    questions: [
      [span_4](start_span){ id: 1, q: "نسبة الإنجاز الفعلي مقابل المخطط", type: "number", weight: "20%", example: "المخطط 50%، المنفذ 30%[span_4](end_span)" },
      [span_5](start_span){ id: 2, q: "أسباب الانحرافات الرئيسية", type: "text", weight: "15%", example: "تأخر توريد المواد، نقص العمالة[span_5](end_span)" },
      [span_6](start_span){ id: 3, q: "الالتزام بمعايير السلامة (HSE)", type: "text", weight: "25%", example: "80% التزام، 20% مخالفات[span_6](end_span)" }
    ]
  },
  [span_7](start_span)// المسار 2: الأثر والتقييم[span_7](end_span)
  training_impact: {
    title: "تقرير تقييم أثر التدريب (Kirkpatrick)",
    category: "الأثر والتقييم",
    questions: [
      [span_8](start_span){ id: 10, q: "مستوى رضا المتدربين (1-10)", type: "number", weight: "10%", example: "9/10[span_8](end_span)" },
      [span_9](start_span){ id: 11, q: "نسبة اكتساب المعرفة", type: "number", weight: "20%", example: "تحسن الاختبار 45%[span_9](end_span)" },
      [span_10](start_span){ id: 12, q: "تطبيق المهارات المكتسبة", type: "text", weight: "30%", example: "تم تطبيق نظام الأتمتة الجديد[span_10](end_span)" }
    ]
  }
  [span_11](start_span)// يمكن إضافة بقية الأنواع الثمانية هنا بنفس الهيكل[span_11](end_span)
};
