import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";

// --- 9 Primes ---
import AgePrime from "./primes/AgePrime";
import WordPrime from "./primes/WordPrime";
import ImagePrime from "./primes/ImagePrime";
import PdfPrime from "./primes/PdfPrime";
import QrPrime from "./primes/QrPrime";
import ResumePrime from "./primes/ResumePrime";
import CurrencyPrime from "./primes/CurrencyPrime";
import PercentPrime from "./primes/PercentPrime";
import TravelPrime from "./primes/TravelPrime";

// --- 31 More Tools ---
import Extra10Prime from "./primes/Extra10Prime";
import Extra21Prime from "./primes/Extra21Prime";
import Dashboard from "./primes/Dashboard";
import SportsHub from "./primes/SportsHub";

class Safe extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return <div className="p-10 text-center"><p className="font-bold">⚠️ This tool is under maintenance</p><Link to="/" className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-full text-sm">Back to Home</Link></div>;
    return this.props.children;
  }
}

function Home() {
  const cats = [
    { title: "9 PRIMES - Core Lab", tools: [
      { n: "Age Prime", l: "/age-prime", d: "Live age seconds" },
      { n: "Word Prime", l: "/word-prime", d: "Thesis safe counter" },
      { n: "Image Prime", l: "/image-prime", d: "Compress 20KB" },
      { n: "PDF Prime", l: "/pdf-prime", d: "Offline PDF Vault" },
      { n: "QR Prime", l: "/qr-prime", d: "QR Offline" },
      { n: "Resume Prime", l: "/resume-prime", d: "ATS Resume" },
      { n: "Currency Prime", l: "/currency-prime", d: "Live Currency" },
      { n: "Percent Prime", l: "/percent-prime", d: "% Calculator" },
      { n: "Travel Prime", l: "/travel-prime", d: "Distance + Fuel" },
    ]},
    { title: "EXTRA 10 - Daily Tools", tools: [
      { n: "All 10 Tools Hub", l: "/extra10", d: "BMI, EMI, GPA, Loan, etc" },
    ]},
    { title: "EXTRA 21 - Pro Tools", tools: [
      { n: "All 21 Tools Hub", l: "/extra21", d: "21 Advanced Tools" },
    ]},
    { title: "SPECIAL HUBS", tools: [
      { n: "Dashboard", l: "/dashboard", d: "Your Analytics" },
      { n: "Sports Hub", l: "/sports", d: "PSL, IPL, EPL, ICC Live" },
    ]},
  ];
  return (
    <div className="max-w-md mx-auto min-h-screen bg-[#f6f7f8] p-3">
      <div className="bg-black text-white rounded-[28px] p-6 mb-4">
        <h1 className="text-[28px] font-black">WanaLab</h1>
        <p className="text-[11px] opacity-60">40 Tools • Privacy First • Independent Research Lab</p>
        <div className="mt-3 flex gap-2"><span className="text-[10px] bg-white text-black px-3 py-1 rounded-full font-bold">● 40 TOOLS LIVE</span><span className="text-[10px] bg-white/20 px-3 py-1 rounded-full">v2.0</span></div>
      </div>
      {cats.map(sec => (
        <div key={sec.title} className="mb-5">
          <p className="text-[11px] font-black tracking-widest opacity-40 mb-2 px-1">{sec.title}</p>
          <div className="grid gap-2.5">
            {sec.tools.map(t => (
              <Link key={t.l} to={t.l} className="bg-white rounded-2xl p-4 border flex justify-between items-center shadow-sm">
                <div><p className="font-bold text-[14px]">{t.n}</p><p className="text-[11px] text-gray-500">{t.d}</p></div>
                <span className="text-[10px]">→</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
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
