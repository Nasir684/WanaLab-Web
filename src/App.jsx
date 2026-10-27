import { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

function Card({ title, desc, path }) {
  const nav = useNavigate();
  return <div onClick={() => nav(path)} className="bg-white rounded-2xl p-4 border flex justify-between cursor-pointer"><div><p className="font-bold text-[13px]">{title}</p><p className="text-[10px] text-gray-500">{desc}</p></div><span className="text-[10px]">→</span></div>;
}

function Wrap({ title, children }) {
  return <div className="p-4"><h2 className="font-black text-xl">{title}</h2><div className="mt-4">{children}</div><Link to="/extra21" className="mt-6 block text-center bg-black text-white p-3 rounded-xl text-sm">← Back to 21 Hub</Link></div>;
}

// 21 Tools - Simple & Fast
function Tip(){ const [b,setB]=useState(1000); const [t,setT]=useState(10); return <Wrap title="Tip Calculator"><input value={b} onChange={e=>setB(e.target.value)} className="w-full border p-3 rounded-xl"/><input value={t} onChange={e=>setT(e.target.value)} className="w-full border p-3 rounded-xl mt-2"/><div className="mt-4 bg-black text-white p-4 rounded-xl">Tip: {(b*t/100).toFixed(0)} | Total: {(+b + b*t/100).toFixed(0)}</div></Wrap> }
function Discount(){ const [p,setP]=useState(1000); const [d,setD]=useState(20); return <Wrap title="Discount"><input value={p} onChange={e=>setP(e.target.value)} className="w-full border p-3 rounded-xl"/><input value={d} onChange={e=>setD(e.target.value)} className="w-full border p-3 rounded-xl mt-2"/><div className="mt-4 bg-black text-white p-4 rounded-xl">Pay: {(p-p*d/100).toFixed(0)}</div></Wrap> }
function RandomNum(){ const [n,setN]=useState(50); const [o,setO]=useState(0); return <Wrap title="Random Number"><button onClick={()=>setO(Math.floor(Math.random()*n))} className="w-full bg-black text-white p-3 rounded-xl">Generate 0-{n}</button><div className="mt-4 bg-white border p-8 rounded-xl text-4xl font-black text-center">{o}</div><input value={n} onChange={e=>setN(e.target.value)} className="w-full border p-3 rounded-xl mt-4"/></Wrap> }
function Coin(){ const [c,setC]=useState("Head"); return <Wrap title="Coin Flip"><button onClick={()=>setC(Math.random()>0.5?"Head":"Tail")} className="w-full bg-black text-white p-4 rounded-xl text-xl">{c}</button></Wrap> }
function Dice(){ const [d,setD]=useState(1); return <Wrap title="Dice Roller"><button onClick={()=>setD(Math.floor(Math.random()*6)+1)} className="w-full bg-black text-white p-8 rounded-xl text-6xl">{d}</button></Wrap> }
function Lorem(){ const [l,setL]=useState("Lorem ipsum dolor sit amet..."); return <Wrap title="Lorem Ipsum"><button onClick={()=>setL("Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(5))} className="w-full bg-black text-white p-3 rounded-xl">Generate</button><div className="mt-4 bg-white border p-3 rounded-xl text-sm">{l}</div></Wrap> }
function UrlEnc(){ const [a,setA]=useState("https://wanalab"); return <Wrap title="URL Encoder"><textarea value={a} onChange={e=>setA(e.target.value)} className="w-full border p-3 rounded-xl"/><div className="mt-2 p-3 bg-white border rounded text-[11px] break-all">{encodeURIComponent(a)}</div></Wrap> }
function Hash(){ const [s,setS]=useState("WanaLab"); return <Wrap title="Simple Hash"><input value={s} onChange={e=>setS(e.target.value)} className="w-full border p-3 rounded-xl"/><div className="mt-2 p-3 bg-white border rounded font-mono text-[11px]">{s.split("").reduce((a,b)=>a+b.charCodeAt(0),0)} | Length: {s.length}</div></Wrap> }
function CharCount(){ const [t,setT]=useState(""); return <Wrap title="Character Counter"><textarea value={t} onChange={e=>setT(e.target.value)} className="w-full border p-3 rounded-xl h-32"/><div className="mt-2 grid grid-cols-3 gap-2 text-[11px]"><div className="bg-white border p-2 rounded">Chars: {t.length}</div><div className="bg-white border p-2 rounded">Words: {t.split(/\s+/).filter(Boolean).length}</div><div className="bg-white border p-2 rounded">Lines: {t.split("\n").length}</div></div></Wrap> }
function ReadTime(){ const [t,setT]=useState("Write article here..."); return <Wrap title="Reading Time"><textarea value={t} onChange={e=>setT(e.target.value)} className="w-full border p-3 rounded-xl h-32"/><div className="mt-2 bg-black text-white p-3 rounded-xl">{Math.ceil(t.split(/\s+/).length/200)} min read</div></Wrap> }
function Salary(){ const [m,setM]=useState(50000); return <Wrap title="Salary Yearly"><input value={m} onChange={e=>setM(e.target.value)} className="w-full border p-3 rounded-xl"/><div className="mt-4 bg-black text-white p-4 rounded-xl">Yearly: {(m*12).toLocaleString()} | Daily: {(m/30).toFixed(0)}</div></Wrap> }
function Fuel(){ const [km,setKm]=useState(100); const [avg,setAvg]=useState(12); const [price,setPrice]=useState(280); return <Wrap title="Fuel Cost"><input value={km} onChange={e=>setKm(e.target.value)} className="w-full border p-3 rounded-xl" placeholder="KM"/><input value={avg} onChange={e=>setAvg(e.target.value)} className="w-full border p-3 rounded-xl mt-2" placeholder="Avg KM/L"/><input value={price} onChange={e=>setPrice(e.target.value)} className="w-full border p-3 rounded-xl mt-2" placeholder="Price"/><div className="mt-4 bg-black text-white p-4 rounded-xl">Cost: {(km/avg*price).toFixed(0)} PKR</div></Wrap> }
function Speed(){ const [kh,setKh]=useState(100); return <Wrap title="Speed Converter"><input value={kh} onChange={e=>setKh(e.target.value)} className="w-full border p-3 rounded-xl"/><div className="mt-4 bg-white border p-3 rounded-xl">{(kh*0.621371).toFixed(2)} mph | {(kh*1000/3600).toFixed(2)} m/s</div></Wrap> }
function TimeConv(){ const [h,setH]=useState(24); return <Wrap title="Time Converter"><input value={h} onChange={e=>setH(e.target.value)} className="w-full border p-3 rounded-xl"/><div className="mt-4 grid gap-2 text-sm"><div className="bg-white border p-2 rounded">{h*60} Minutes</div><div className="bg-white border p-2 rounded">{h*3600} Seconds</div></div></Wrap> }
function DateDiff(){ const [d1,setD1]=useState("2024-01-01"); const [d2,setD2]=useState("2026-01-01"); const diff=Math.ceil((new Date(d2)-new Date(d1))/86400000); return <Wrap title="Date Difference"><input type="date" value={d1} onChange={e=>setD1(e.target.value)} className="w-full border p-3 rounded-xl"/><input type="date" value={d2} onChange={e=>setD2(e.target.value)} className="w-full border p-3 rounded-xl mt-2"/><div className="mt-4 bg-black text-white p-4 rounded-xl">{diff} days</div></Wrap> }
function Invoice(){ const [amt,setAmt]=useState(5000); return <Wrap title="Invoice + Tax"><input value={amt} onChange={e=>setAmt(e.target.value)} className="w-full border p-3 rounded-xl"/><div className="mt-4 bg-white border p-3 rounded-xl">Sub: {amt}<br/>Tax 17%: {(amt*0.17).toFixed(0)}<br/><b>Total: {(amt*1.17).toFixed(0)}</b></div></Wrap> }
function SimpleCalc(){ const [a,setA]=useState(10); const [b,setB]=useState(5); return <Wrap title="Simple Calculator"><input value={a} onChange={e=>setA(Number(e.target.value))} type="number" className="w-full border p-3 rounded-xl"/><input value={b} onChange={e=>setB(Number(e.target.value))} type="number" className="w-full border p-3 rounded-xl mt-2"/><div className="mt-4 grid grid-cols-2 gap-2"><div className="bg-white border p-2 rounded">+ {(+a)+(+b)}</div><div className="bg-white border p-2 rounded">- {a-b}</div><div className="bg-white border p-2 rounded">× {a*b}</div><div className="bg-white border p-2 rounded">÷ {(a/b).toFixed(2)}</div></div></Wrap> }
function Countdown(){ const [days,setDays]=useState(30); return <Wrap title="Countdown"><input value={days} onChange={e=>setDays(e.target.value)} className="w-full border p-3 rounded-xl"/><div className="mt-4 bg-black text-white p-4 rounded-xl">{days*24} Hours | {days*1440} Mins left</div></Wrap> }
function StopwatchView(){ const [s,setS]=useState(0); return <Wrap title="Stopwatch Sim"><button onClick={()=>setS(s+1)} className="w-full bg-black text-white p-8 rounded-xl text-4xl">{s}s</button><button onClick={()=>setS(0)} className="mt-2 w-full border p-2 rounded-xl">Reset</button></Wrap> }
function AgeDiff(){ const [y,setY]=useState(2000); return <Wrap title="Age Difference"><input value={y} onChange={e=>setY(e.target.value)} className="w-full border p-3 rounded-xl"/><div className="mt-4 bg-black text-white p-4 rounded-xl">{2026-y} years old in 2026</div></Wrap> }
function Timezone(){ return <Wrap title="Pakistan Timezones"><div className="bg-white border p-3 rounded-xl">PKT: Asia/Karachi UTC+5<br/>IST: UTC+5:30<br/>GST: UTC+4 (Dubai)<br/>Now PK: {new Date().toLocaleString()}</div></Wrap> }

function Hub() {
  const tools = [
    ["Tip Calculator","Restaurant tip","/extra21/tip"], ["Discount","Sale price","/extra21/discount"], ["Random Number","Lottery RNG","/extra21/random"],
    ["Coin Flip","Head/Tail","/extra21/coin"], ["Dice Roller","Ludo dice","/extra21/dice"], ["Lorem Ipsum","Dummy text","/extra21/lorem"],
    ["URL Encoder","Encode URL","/extra21/url"], ["Hash / Length","Simple hash","/extra21/hash"], ["Char Counter","Chars Words","/extra21/chars"],
    ["Reading Time","Blog time","/extra21/readtime"], ["Salary Calculator","Monthly to yearly","/extra21/salary"], ["Fuel Cost","PK fuel calc","/extra21/fuel"],
    ["Speed Conv","KMH to MPH","/extra21/speed"], ["Time Conv","Hours to sec","/extra21/timeconv"], ["Date Diff","Days between","/extra21/datediff"],
    ["Invoice + Tax","17% GST","/extra21/invoice"], ["Simple Calc","+ - × ÷","/extra21/calc"], ["Countdown","Days to hours","/extra21/countdown"],
    ["Stopwatch","Timer","/extra21/stopwatch"], ["Age Diff","Age from year","/extra21/agediff"], ["Timezones","PK IST GST","/extra21/timezone"],
  ];
  return (
    <div className="max-w-md mx-auto min-h-screen bg-[#f6f7f8] p-3">
      <div className="bg-black text-white rounded-[28px] p-6 mb-4 flex justify-between"><div><h1 className="text-[22px] font-black">Extra 21 Hub</h1><p className="text-[11px] opacity-60">21 Pro Tools • Offline First</p></div><Link to="/" className="bg-white text-black h-fit px-3 py-1 rounded-full text-[11px] font-bold">Home</Link></div>
      <div className="grid gap-2">{tools.map(([t,d,p])=><Card key={p} title={t} desc={d} path={p}/>)}</div>
    </div>
  );
}

export default function Extra21Prime() {
  return (
    <Routes>
      <Route path="/" element={<Hub/>}/>
      <Route path="/tip" element={<Tip/>}/><Route path="/discount" element={<Discount/>}/><Route path="/random" element={<RandomNum/>}/>
      <Route path="/coin" element={<Coin/>}/><Route path="/dice" element={<Dice/>}/><Route path="/lorem" element={<Lorem/>}/>
      <Route path="/url" element={<UrlEnc/>}/><Route path="/hash" element={<Hash/>}/><Route path="/chars" element={<CharCount/>}/>
      <Route path="/readtime" element={<ReadTime/>}/><Route path="/salary" element={<Salary/>}/><Route path="/fuel" element={<Fuel/>}/>
      <Route path="/speed" element={<Speed/>}/><Route path="/timeconv" element={<TimeConv/>}/><Route path="/datediff" element={<DateDiff/>}/>
      <Route path="/invoice" element={<Invoice/>}/><Route path="/calc" element={<SimpleCalc/>}/><Route path="/countdown" element={<Countdown/>}/>
      <Route path="/stopwatch" element={<StopwatchView/>}/><Route path="/agediff" element={<AgeDiff/>}/><Route path="/timezone" element={<Timezone/>}/>
    </Routes>
  );
  }
