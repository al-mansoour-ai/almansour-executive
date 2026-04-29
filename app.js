function generate(){

let text = document.getElementById("input").value;

let prompt = `
### SYSTEM MODE: STRATEGIC CONSULTANT

Analyze the following field input and generate a full professional report aligned with NGO and M&E international standards.

INPUT:
${text}

OUTPUT REQUIREMENTS:
- Executive Summary
- Objectives
- Field Observations
- Risk Analysis
- Recommendations
- Strategic Conclusion

Use formal Arabic.
`;

document.getElementById("output").innerText = prompt;
document.getElementById("result").classList.remove("hidden");

}

function copy(){
let text = document.getElementById("output").innerText;
navigator.clipboard.writeText(text);
alert("تم النسخ 🚀");
}
