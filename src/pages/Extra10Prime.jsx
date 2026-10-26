import { useState } from "react";

// Shared Prime UI Styles
const box = "bg-white rounded-2xl p-5 shadow-sm border border-black/5";
const btn = "bg-black text-white w-full py-3 rounded-xl font-bold active:scale-[0.98]";
const input = "w-full bg-gray-100 rounded-xl p-3 outline-none border focus:border-black";

export default function Extra10Prime({ type }) {
  const [v1, setV1] = useState(""); const [v2, setV2] = useState(""); const [v3, setV3] = useState("");
  const [out, setOut] = useState("");

  // --- LOGIC ---
  const calc = () => {
    const n1 = parseFloat(v1); const n2 = parseFloat(v2); const n3 = parseFloat(v3);
    if (type === "bmi") { const h = n1/100; const bmi = (n2/(h*h)).toFixed(1); setOut(`BMI: ${bmi} - ${bmi<18.5?"Underweight":bmi<25?"Normal":bmi<30?"Overweight":"Obese"}`); }
    if (type === "emi") { const P=n1, R=n2/12/100, N=n3; const emi = (P*R*Math.pow(1+R,N))/(Math.pow(1+R,N)-1); setOut(`EMI: Rs ${emi.toFixed(0)}/month | Total: Rs ${(emi*N).toFixed(0)}`); }
    if (type === "zakat") { const amt=n1; if(amt>=135000) setOut(`Zakat: Rs ${(amt*0.025).toFixed(0)} (2.5%) | Nisab Passed`); else setOut(`No Zakat - Below Nisab Rs 135,000`); }
    if (type === "gpa") { const marks=n1; let gpa=0; if(marks>=85)gpa=4; else if(marks>=80)gpa=3.7; else if(marks>=75)gpa=3.3; else if(marks>=70)gpa=3; else if(marks>=65)gpa=2.7; else if(marks>=60)gpa=2.3; else if(marks>=50)gpa=2; else gpa=0; setOut(`GPA: ${gpa} | ${marks>=50?"Pass":"Fail"}`); }
    if (type === "marla") { const marla=n1; setOut(`${marla} Marla = ${marla*25.2929} Sq Meter = ${marla*272.25} Sq Ft | ${marla/20} Kanal`); }
    if (type === "fuel") { const dist=n1, avg=n2, price=n3; const cost=(dist/avg)*price; setOut(`Fuel: ${cost.toFixed(0)} Rs for ${dist}KM | ${ (dist/avg).toFixed(1)} Liters`); }
    if (type === "water") { const w=n1; const liters=(w*0.033).toFixed(1); setOut(`Daily Water: ${liters} Liters | ${(liters*4).toFixed(0)} Glasses`); }
    if (type === "discount") { const price=n1, disc=n2; const final=price-(price*disc/100); setOut(`Final: Rs ${final.toFixed(0)} | You Save: Rs ${(price-final).toFixed(0)}`); }
    if (type === "pregnancy") { if(!v1) return; const d=new Date(v1); d.setDate(d.getDate()+280); setOut(`Due Date: ${d.toDateString()} | ${Math.floor((new Date()-new Date(v1))/86400000)} days pregnant`); }
    if (type === "password") { const len = n1||12; const chars="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$"; let p=""; for(let i=0;i<len;i++) p+=chars[Math.floor(Math.random()*chars.length)]; setOut(p); }
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4 bg-[#f8f9fa] min-h-screen">
      <h1 className="text-2xl font-black uppercase">{type} Prime</h1>
      <div className={box + " space-y-3"}>
        {type==="pregnancy" && <input type="date" className={input} onChange={e=>setV1(e.target.value)} />}
        {type!=="pregnancy" && type!=="password" && <input className={input} type="number" placeholder="Value 1" value={v1} onChange={e=>setV1(e.target.value)} />}
        {["bmi","emi","fuel","discount"].includes(type) && <input className={input} type="number" placeholder="Value 2" value={v2} onChange={e=>setV2(e.target.value)} />}
        {["emi","fuel"].includes(type) && <input className={input} type="number" placeholder="Value 3" value={v3} onChange={e=>setV3(e.target.value)} />}
        {type==="password" && <input className={input} type="number" placeholder="Length e.g 12" value={v1} onChange={e=>setV1(e.target.value)} />}
        
        <button onClick={calc} className={btn}>Calculate — Offline</button>
        
        {out && <div className="bg-black text-white p-4 rounded-xl font-bold text-lg break-all">{out}</div>}
        <p className="text-[10px] text-gray-400 text-center uppercase">Engineered in WANA — No Upload — 100% Private</p>
      </div>
    </div>
  );
}
