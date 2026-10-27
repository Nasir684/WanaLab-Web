import { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

function ToolCard({ title, desc, path }) {
  const nav = useNavigate();
  return (
    <div onClick={() => nav(path)} className="bg-white rounded-2xl p-4 border flex justify-between items-center cursor-pointer active:scale-[0.98]">
      <div><p className="font-bold text-[14px]">{title}</p><p className="text-[11px] text-gray-500">{desc}</p></div>
      <span>→</span>
    </div>
  );
}

// --- 10 Mini Tools ---
function Gpa() {
  const [g, setG] = useState("3.5"); const [t, setT] = useState("4");
  const perc = (parseFloat(g)/parseFloat(t)*100||0).toFixed(1);
  return <div className="p-4"><h2 className="font-black text-xl">GPA to %</h2><input value={g} onChange={e=>setG(e.target.value)} className="mt-4 w-full border p-3 rounded-xl" placeholder="GPA"/><input value={t} onChange={e=>setT(e.target.value)} className="mt-2 w-full border p-3 rounded-xl" placeholder="Scale (4)"/><div className="mt-4 bg-black text-white p-4 rounded-xl text-2xl font-black">{perc}%</div></div>
}
function Bmi() {
  const [h,setH]=useState(170); const [w,setW]=useState(70);
  const bmi = (w/((h/100)*(h/100))).toFixed(1);
  return <div className="p-4"><h2 className="font-black text-xl">BMI Calculator</h2><input type="number" value={h} onChange={e=>setH(e.target.value)} className="mt-4 w-full border p-3 rounded-xl" placeholder="Height cm"/><input type="number" value={w} onChange={e=>setW(e.target.value)} className="mt-2 w-full border p-3 rounded-xl" placeholder="Weight kg"/><div className="mt-4 bg-black text-white p-4 rounded-xl text-2xl font-black">{bmi}</div></div>
}
function Loan() {
  const [p,setP]=useState(1000000); const [r,setR]=useState(12); const [n,setN]=useState(12);
  const emi = (p*(r/12/100)*Math.pow(1+r/12/100,n))/(Math.pow(1+r/12/100,n)-1);
  return <div className="p-4"><h2 className="font-black text-xl">Loan EMI</h2><input value={p} onChange={e=>setP(e.target.value)} className="mt-4 w-full border p-3 rounded-xl"/><input value={r} onChange={e=>setR(e.target.value)} className="mt-2 w-full border p-3 rounded-xl" placeholder="Rate %"/><input value={n} onChange={e=>setN(e.target.value)} className="mt-2 w-full border p-3 rounded-xl" placeholder="Months"/><div className="mt-4 bg-black text-white p-4 rounded-xl">PKR {emi.toFixed(0)}/mo</div></div>
}
function Unit() {
  const [km,setKm]=useState(1); return <div className="p-4"><h2 className="font-black text-xl">KM → Miles</h2><input value={km} onChange={e=>setKm(e.target.value)} className="mt-4 w-full border p-3 rounded-xl"/><div className="mt-4 bg-black text-white p-4 rounded-xl">{(km*0.621371).toFixed(3)} miles</div></div>
}
function Pass() {
  const [len,setLen]=useState(12); const [out,setOut]=useState("");
  const gen=()=>{ const c="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#"; let s=""; for(let i=0;i<len;i++) s+=c[Math.floor(Math.random()*c.length)]; setOut(s); };
  return <div className="p-4"><h2 className="font-black text-xl">Password Gen</h2><button onClick={gen} className="mt-4 w-full bg-black text-white p-3 rounded-xl">Generate</button><div className="mt-4 p-4 bg-white border rounded-xl break-all font-mono">{out}</div></div>
}
function TextCase() {
  const [txt,setTxt]=useState("WanaLab"); return <div className="p-4"><h2 className="font-black text-xl">Text Case</h2><textarea value={txt} onChange={e=>setTxt(e.target.value)} className="mt-4 w-full border p-3 rounded-xl"/><div className="mt-2 grid gap-2"><div className="p-2 bg-white border rounded">{txt.toUpperCase()}</div><div className="p-2 bg-white border rounded">{txt.toLowerCase()}</div></div></div>
}
function B64() {
  const [a,setA]=useState("hello"); const [b,setB]=useState(btoa("hello"));
  return <div className="p-4"><h2 className="font-black text-xl">Base64</h2><textarea value={a} onChange={e=>{setA(e.target.value); try{setB(btoa(e.target.value))}catch{}}} className="mt-4 w-full border p-3 rounded-xl"/><textarea value={b} readOnly className="mt-2 w-full border p-3 rounded-xl bg-gray-50"/></div>
}
function Color() {
  const [c,setC]=useState("#000000"); return <div className="p-4"><h2 className="font-black text-xl">Color Picker</h2><input type="color" value={c} onChange={e=>setC(e.target.value)} className="mt-4 h-20 w-full"/><div className="mt-2 p-4 bg-white border rounded-xl font-mono">{c}</div></div>
}
function Json() {
  const [j,setJ]=useState('{"name":"WanaLab"}'); const [o,setO]=useState('{\n  "name": "WanaLab"\n}');
  const fmt=()=>{ try{setO(JSON.stringify(JSON.parse(j),null,2))}catch(e){setO("Invalid JSON")} };
  return <div className="p-4"><h2 className="font-black text-xl">JSON Formatter</h2><textarea value={j} onChange={e=>setJ(e.target.value)} className="mt-4 w-full border p-3 rounded-xl h-24"/><button onClick={fmt} className="mt-2 w-full bg-black text-white p-3 rounded-xl">Format</button><pre className="mt-2 p-3 bg-white border rounded-xl text-[12px] overflow-auto">{o}</pre></div>
}
function PercentTool() {
  const [x,setX]=useState(50); const [y,setY]=useState(200); return <div className="p-4"><h2 className="font-black text-xl">% Calculator</h2><input value={x} onChange={e=>setX(e.target.value)} className="mt-4 w-full border p-3 rounded-xl" placeholder="%"/><input value={y} onChange={e=>setY(e.target.value)} className="mt-2 w-full border p-3 rounded-xl" placeholder="of"/><div className="mt-4 bg-black text-white p-4 rounded-xl">{(x/100*y).toFixed(2)}</div></div>
}

function Hub() {
  const list = [
    { title: "GPA → %", desc: "University GPA converter", path: "/extra10/gpa" },
    { title: "BMI Calculator", desc: "Health BMI", path: "/extra10/bmi" },
    { title: "Loan EMI", desc: "Monthly installment", path: "/extra10/loan" },
    { title: "Unit Converter", desc: "KM to Miles", path: "/extra10/unit" },
    { title: "Password Generator", desc: "Strong passwords", path: "/extra10/password" },
    { title: "Text Case", desc: "UPPER lower", path: "/extra10/textcase" },
    { title: "Base64", desc: "Encode / Decode", path: "/extra10/base64" },
    { title: "Color Picker", desc: "HEX + RGB", path: "/extra10/color" },
    { title: "JSON Formatter", desc: "Beautify JSON", path: "/extra10/json" },
    { title: "Percent Calc", desc: "Fast %", path: "/extra10/percent" },
  ];
  return (
    <div className="max-w-md mx-auto min-h-screen bg-[#f6f7f8] p-3">
      <div className="bg-black text-white rounded-[28px] p-6 mb-4 flex justify-between">
        <div><h1 className="text-[22px] font-black">Extra 10 Hub</h1><p className="text-[11px] opacity-60">10 Daily Tools • Offline</p></div>
        <Link to="/" className="bg-white text-black h-fit px-3 py-1 rounded-full text-[11px] font-bold">Home</Link>
      </div>
      <div className="grid gap-2.5">{list.map(i=><ToolCard key={i.path} {...i}/>)}</div>
    </div>
  );
}

export default function Extra10Prime() {
  return (
    <Routes>
      <Route path="/" element={<Hub />} />
      <Route path="/gpa" element={<><Link to="/extra10" className="p-3 block text-sm">← Back</Link><Gpa /></>} />
      <Route path="/bmi" element={<><Link to="/extra10" className="p-3 block text-sm">← Back</Link><Bmi /></>} />
      <Route path="/loan" element={<><Link to="/extra10" className="p-3 block text-sm">← Back</Link><Loan /></>} />
      <Route path="/unit" element={<><Link to="/extra10" className="p-3 block text-sm">← Back</Link><Unit /></>} />
      <Route path="/password" element={<><Link to="/extra10" className="p-3 block text-sm">← Back</Link><Pass /></>} />
      <Route path="/textcase" element={<><Link to="/extra10" className="p-3 block text-sm">← Back</Link><TextCase /></>} />
      <Route path="/base64" element={<><Link to="/extra10" className="p-3 block text-sm">← Back</Link><B64 /></>} />
      <Route path="/color" element={<><Link to="/extra10" className="p-3 block text-sm">← Back</Link><Color /></>} />
      <Route path="/json" element={<><Link to="/extra10" className="p-3 block text-sm">← Back</Link><Json /></>} />
      <Route path="/percent" element={<><Link to="/extra10" className="p-3 block text-sm">← Back</Link><PercentTool /></>} />
    </Routes>
  );
    }
