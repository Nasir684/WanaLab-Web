import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";

// 9 Primes
import AgePrime from "./primes/AgePrime";
import WordPrime from "./primes/WordPrime";
import ImagePrime from "./primes/ImagePrime";
import PdfPrime from "./primes/PdfPrime";
import QrPrime from "./primes/QrPrime";
import ResumePrime from "./primes/ResumePrime";
import CurrencyPrime from "./primes/CurrencyPrime";
import PercentPrime from "./primes/PercentPrime";
import TravelPrime from "./primes/TravelPrime";

// 10 + 21 + 2 Hubs = 40 Total
import Extra10Prime from "./primes/Extra10Prime";
import Extra21Prime from "./primes/Extra21Prime";
import Dashboard from "./primes/Dashboard";
import SportsHub from "./primes/SportsHub";

class Safe extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return <div className="p-10 text-center"><p className="font-bold">⚠️ Tool fixing</p><Link to="/" className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-full text-sm">Home</Link></div>;
    return this.props.children;
  }
}

function Home() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-[#f6f7f8] p-3">
      <div className="bg-black text-white rounded-[28px] p-6 mb-4">
        <h1 className="text-[30px] font-black tracking-tight">WanaLab</h1>
        <p className="text-[11px] opacity-60 -mt-1">40 Tools • Privacy First • Independent Lab</p>
        <div className="mt-3 flex gap-2">
          <span className="text-[10px] bg-white text-black px-3 py-1 rounded-full font-black animate-pulse">● 40 TOOLS LIVE</span>
          <span className="text-[10px] bg-white/20 px-3 py-1 rounded-full">v2.1 • Green Build</span>
        </div>
      </div>

      <p className="text-[11px] font-black tracking-widest opacity-40 mb-2 px-1">9 PRIMES — CORE LAB</p>
      <div className="grid gap-2.5 mb-5">
        {[
          ["Age Prime","/age-prime"],["Word Prime","/word-prime"],["Image Prime","/image-prime"],
          ["PDF Prime","/pdf-prime"],["QR Prime","/qr-prime"],["Resume Prime","/resume-prime"],
          ["Currency Prime","/currency-prime"],["Percent Prime","/percent-prime"],["Travel Prime","/travel-prime"],
        ].map(([n,l])=><Link key={l} to={l} className="bg-white rounded-2xl p-4 border flex justify-between items-center shadow-sm"><span className="font-bold text-[14px]">{n}</span><span className="text-[10px]">→</span></Link>)}
      </div>

      <p className="text-[11px] font-black tracking-widest opacity-40 mb-2 px-1">EXTRA 10 — DAILY TOOLS</p>
      <Link to="/extra10" className="bg-white rounded-2xl p-4 border flex justify-between items-center shadow-sm mb-5">
        <div><p className="font-bold text-[14px]">10 Tools Hub</p><p className="text-[11px] text-gray-500">BMI, EMI, GPA, Password, JSON, Color, etc</p></div><span className="bg-black text-white text-[10px] px-2 py-1 rounded-full">10 IN 1</span>
      </Link>

      <p className="text-[11px] font-black tracking-widest opacity-40 mb-2 px-1">EXTRA 21 — PRO TOOLS</p>
      <Link to="/extra21" className="bg-white rounded-2xl p-4 border flex justify-between items-center shadow-sm mb-5">
        <div><p className="font-bold text-[14px]">21 Tools Hub</p><p className="text-[11px] text-gray-500">Tip, Discount, Random, Coin, Dice, Salary, Fuel...</p></div><span className="bg-black text-white text-[10px] px-2 py-1 rounded-full">21 IN 1</span>
      </Link>

      <p className="text-[11px] font-black tracking-widest opacity-40 mb-2 px-1">SPECIAL HUBS</p>
      <div className="grid grid-cols-2 gap-2.5">
        <Link to="/dashboard" className="bg-white rounded-2xl p-4 border shadow-sm"><p className="font-bold text-[14px]">Dashboard</p><p className="text-[11px] text-gray-500">Analytics</p></Link>
        <Link to="/sports" className="bg-white rounded-2xl p-4 border shadow-sm"><p className="font-bold text-[14px]">Sports Hub</p><p className="text-[11px] text-gray-500">PSL • IPL • EPL • ICC</p></Link>
      </div>

      <div className="mt-6 text-center text-[10px] opacity-30 pb-6">Nasir • WanaLab • D.I.Khan • 40 Tools Green Build</div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/age-prime" element={<Safe><AgePrime /></Safe>} />
        <Route path="/word-prime" element={<Safe><WordPrime /></Safe>} />
        <Route path="/image-prime" element={<Safe><ImagePrime /></Safe>} />
        <Route path="/pdf-prime" element={<Safe><PdfPrime /></Safe>} />
        <Route path="/qr-prime" element={<Safe><QrPrime /></Safe>} />
        <Route path="/resume-prime" element={<Safe><ResumePrime /></Safe>} />
        <Route path="/currency-prime" element={<Safe><CurrencyPrime /></Safe>} />
        <Route path="/percent-prime" element={<Safe><PercentPrime /></Safe>} />
        <Route path="/travel-prime" element={<Safe><TravelPrime /></Safe>} />
        
        <Route path="/extra10/*" element={<Safe><Extra10Prime /></Safe>} />
        <Route path="/extra21/*" element={<Safe><Extra21Prime /></Safe>} />
        <Route path="/dashboard" element={<Safe><Dashboard /></Safe>} />
        <Route path="/sports/*" element={<Safe><SportsHub /></Safe>} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
