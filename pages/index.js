// ... (داخل دالة SovereignFullUI) ...

{/* تحديث الحقول المنهجية لتشمل الأنواع الجديدة */}
{step.fields && step.fields.map(f => (
  <div key={f.id} style={{ marginBottom: "25px" }}>
    <label style={{ display: "block", fontWeight: 900, marginBottom: "8px", fontSize: "14px", color: "#0a192f" }}>{f.label}</label>
    
    {/* 1. معالجة حقل الشعار (تصميم راقٍ) */}
    {f.type === 'file-placeholder' ? (
      <div style={{ border: "2px dashed #d4af37", padding: "20px", borderRadius: "15px", textAlign: "center", background: "#fffdf5", cursor: "pointer" }}>
        <div style={{ fontSize: "24px" }}>🖼️</div>
        <span style={{ fontSize: "12px", color: "#d4af37", fontWeight: 700 }}>اضغط لرفع شعار الجهة الصادر عنها التقرير</span>
      </div>
    ) 
    
    // 2. معالجة منتقي التاريخ الثلاثي
    : f.type === 'strategic-date' ? (
      <div style={{ display: "flex", gap: "8px" }}>
        <select style={{ flex: 1.2, padding: "12px", borderRadius: "10px", border: "1px solid #ddd", background: "#fff", fontWeight: 700 }}>
          <option>السنة</option>
          {years.map(y => <option key={y}>{y}</option>)}
        </select>
        <select style={{ flex: 1.5, padding: "12px", borderRadius: "10px", border: "1px solid #ddd", background: "#fff", fontWeight: 700 }}>
          <option>الشهر</option>
          {months.map((m, i) => <option key={i}>{m}</option>)}
        </select>
        <select style={{ flex: 1, padding: "12px", borderRadius: "10px", border: "1px solid #ddd", background: "#fff", fontWeight: 700 }}>
          <option>اليوم</option>
          {days.map(d => <option key={d}>{d}</option>)}
        </select>
      </div>
    )

    // 3. معالجة مستوى السرية
    : f.type === 'dropdown-security' ? (
      <select style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #ddd", background: "#fff", fontWeight: 700, color: "#c0392b" }}>
        <option>اختر مستوى السرية</option>
        <option value="public">عام (Public)</option>
        <option value="restricted">مقيد (Restricted)</option>
        <option value="confidential">سري (Confidential)</option>
        <option value="secret">سري للغاية (Top Secret)</option>
      </select>
    )

    // 4. الحقول النصية العادية
    : (
      <input type="text" placeholder={f.placeholder} style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #ddd", boxSizing: "border-box", fontFamily: "inherit" }} />
    )}
  </div>
))}
