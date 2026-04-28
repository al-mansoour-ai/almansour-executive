// ... داخل حلقة الحقول (fields.map) في ملف index.js ...

{f.type === 'file-upload' ? (
  <div style={{ position: 'relative', marginBottom: '15px' }}>
    <label style={{ display: "block", fontWeight: 700, marginBottom: "8px", fontSize: "14px" }}>{f.label}</label>
    <div style={{ border: "2px dashed #d4af37", padding: "20px", borderRadius: "12px", textAlign: "center", background: "#f8f9fa" }}>
      <input type="file" style={{ opacity: 0, position: 'absolute', width: '100%', height: '80px', cursor: 'pointer' }} />
      <div style={{ fontSize: "24px" }}>📤</div>
      <span style={{ fontSize: "12px", color: "#0a192f", fontWeight: 900 }}>اضغط لرفع الشعار الرسمي (PNG/JPG)</span>
    </div>
  </div>
) : f.type === 'security-dropdown' ? (
  <div style={{ marginBottom: "15px" }}>
    <label style={{ display: "block", fontWeight: 700, marginBottom: "8px", fontSize: "14px" }}>{f.label}</label>
    <select style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #ddd", background: "#fff", fontWeight: 700, color: "#c0392b" }}>
      <option>--- حدد مستوى السرية ---</option>
      <option value="public">📄 عام (Public)</option>
      <option value="restricted">🔒 مقيد (Restricted)</option>
      <option value="confidential">🛑 سري (Confidential)</option>
      <option value="secret">💎 سري للغاية (Top Secret)</option>
    </select>
  </div>
) : (
  // الحقول الأخرى (النص، التاريخ الاستراتيجي) كما هي في الأكواد السابقة
)}
