function start(){
document.getElementById("questions").innerHTML = `
<p>📍 الموقع</p>
<input id="q1">

<p>🎯 الهدف</p>
<input id="q2">

<p>📝 الملاحظات</p>
<textarea id="q3"></textarea>
`;
}

function generate(){

let text = document.getElementById("input").value;

let q1 = document.getElementById("q1").value;
let q2 = document.getElementById("q2").value;
let q3 = document.getElementById("q3").value;

let prompt = `
ACT AS PROFESSIONAL CONSULTANT

النشاط: ${text}
الموقع: ${q1}
الهدف: ${q2}
الملاحظات: ${q3}

اكتب تقرير احترافي كامل وفق معايير المنظمات الدولية
`;

document.getElementById("output").innerText = prompt;

}
