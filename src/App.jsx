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

// Error Boundary - if one Prime crashes, it shows error, not white page
class Safe extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return <div style={{padding:20}}>⚠️ This tool is fixing, go back to Home. <Link to="/">Home</Link></div>;
    }
    return this.props.children;
  }
}

function Home() {
  const tools = [
    { n: "Age Prime", l: "/age-prime", d: "Exact age + live seconds", c: "Prime", hot: true },
    { n: "Word Prime", l: "/word-prime", d: "Thesis safe word counter", c: "Prime", hot: true },
    { n: "Image Prime", l: "/image-prime", d: "Compress to 20KB", c: "Prime", hot: true },
    { n: "PDF Prime", l: "/pdf-prime", d: "Offline PDF Vault", c: "Prime" },
    { n: "QR Prime", l: "/qr-prime", d: "QR Generator Offline", c: "Prime" },
    { n: "Resume Prime", l: "/resume-prime", d: "ATSL Resume Builder", c: "Prime" },
    { n: "Currency Prime", l: "/currency-prime", d: "Live Currency", c: "Prime" },
    { n: "Percent Prime", l: "/percent-prime", d: "% Calculator", c: "Prime" },
    { n: "Travel Prime", l: "/travel-prime", d: "Distance & Fuel Cost", c: "Prime" },
  ];
  return (
    <div className="max-w-md mx-auto min-h-screen bg-[#f6f7f8] p-3">
      <div className="bg-black text-white rounded-[28px] p-6 mb-4">
        <h1 className="text-[28px] font-black leading-none">WanaLab</h1>
        <p className="text-[11px] opacity-60 mt-2">Independent Research Lab • Privacy First • 100% Offline</p>
        <div className="mt-4 flex gap-2">
          <span className="text-[10px] bg-white text-black px-3 py-1 rounded-full font-bold">● 9 PRIMES LIVE</span>
          <span className="text-[10px] bg-white/20 px-3 py-1 rounded-full">Pakistan First Lab</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {tools.map(t => (
          <Link key={t.l} to={t.l} className="bg-white rounded-2xl p-4 border border-black/5 flex justify-between items-center shadow-sm active:scale-[0.98]">
            <div>
              <p className="font-bold text-[15px]">{t.n} {t.hot ? "🔥" : ""}</p>
              <p className="text-[11px] text-gray-500 mt-0.5">{t.d}</p>
            </div>
            <span className="text-[9px] bg-black text-white px-2.5 py-1 rounded-full">{t.c}</span>
          </Link>
        ))}
      </div>
      <p className="text-center text-[10px] text-gray-400 mt-6 pb-6">WanaLab v1.1 • 9 Primes • Built by Nasir in Wana</p>
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
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
