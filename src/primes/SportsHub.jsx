import { Link, Routes, Route, useNavigate } from "react-router-dom";
function Card({ t, d, p }) {
  const nav = useNavigate();
  return <div onClick={() => nav(p)} className="bg-white p-4 rounded-2xl border flex justify-between"><div><p className="font-bold text-[14px]">{t}</p><p className="text-[11px] opacity-60">{d}</p></div><span>→</span></div>;
}
function Hub() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-[#f6f7f8] p-3">
      <div className="bg-black text-white rounded-[28px] p-6 mb-4 flex justify-between"><h1 className="text-[20px] font-black">Sports Hub</h1><Link to="/" className="bg-white text-black px-3 py-1 rounded-full text-[11px] font-bold">Home</Link></div>
      <div className="grid gap-2">
        <Card t="PSL 2026" d="Pakistan Super League" p="/sports/psl"/><Card t="IPL 2026" d="Indian Premier League" p="/sports/ipl"/><Card t="EPL" d="Premier League Table" p="/sports/epl"/><Card t="ICC World Cup" d="ICC Live" p="/sports/icc"/>
      </div>
    </div>
  );
}
function League({ name }) { return <div className="p-4"><h2 className="font-black text-xl">{name}</h2><div className="mt-4 bg-white border p-4 rounded-xl text-sm">Live scores API integrating soon - Offline fixture list coming</div><Link to="/sports" className="mt-4 block bg-black text-white p-3 rounded-xl text-center text-sm">← Back</Link></div>; }
export default function SportsHub() {
  return <Routes><Route path="/" element={<Hub/>}/><Route path="/psl" element={<League name="PSL 2026"/>}/><Route path="/ipl" element={<League name="IPL 2026"/>}/><Route path="/epl" element={<League name="EPL Table"/>}/><Route path="/icc" element={<League name="ICC World Cup"/>}/></Routes>;
}
