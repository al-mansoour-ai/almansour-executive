export default function Home() {

  function generate() {
    let text = document.getElementById("text").value;

    document.getElementById("out").innerText =
      "📄 تقرير ذكي:\n\n" +
      "تم تحليل النشاط التالي:\n" + text +
      "\n\n🧠 النظام: Next.js AI Report Engine";
  }

  return (
    <div style={{
      fontFamily:"Arial",
      direction:"rtl",
      background:"#0f172a",
      minHeight:"100vh",
      padding:"50px",
      color:"white"
    }}>

      <div style={{
        maxWidth:"600px",
        margin:"auto",
        background:"white",
        color:"black",
        padding:"20px",
        borderRadius:"15px"
      }}>

        <h2>🧠 AI Report System</h2>

        <input id="text"
          placeholder="اكتب النشاط"
          style={{width:"100%",padding:"10px",margin:"10px 0"}}
        />

        <button
          onClick={generate}
          style={{
            width:"100%",
            padding:"12px",
            background:"#2563eb",
            color:"white",
            border:"none",
            borderRadius:"10px"
          }}
        >
          توليد تقرير
        </button>

        <pre id="out" style={{marginTop:"15px"}}></pre>

      </div>

    </div>
  );
}
