import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// --- ONLY 9 Primes that are 100% safe ---
import AgePrime from "./primes/AgePrime";
import WordPrime from "./primes/WordPrime";
import ImagePrime from "./primes/ImagePrime";
import PdfPrime from "./primes/PdfPrime";
import QrPrime from "./primes/QrPrime";
import ResumePrime from "./primes/ResumePrime";
import CurrencyPrime from "./primes/CurrencyPrime";
import PercentPrime from "./primes/PercentPrime";
import TravelPrime from "./primes/TravelPrime";

function Home() {
  const tools = [
    { name: "Age Prime", link: "/age-prime", desc: "Exact age live seconds", cat: "Prime" },
    { name: "Word Prime", link: "/word-prime", desc: "Thesis safe counter", cat: "Prime" },
    { name: "Percent Prime", link: "/percent-prime", desc: "% Calculator", cat: "Prime" },
    { name: "Image Prime", link: "/image-prime", desc: "Compress to 20KB", cat: "Prime" },
    { name: "PDF Prime", link: "/pdf-prime", desc: "Offline PDF Vault", cat: "Prime" },
    { name: "QR Prime", link: "/qr-prime", desc: "QR Generator Offline", cat: "Prime" },
    { name: "Resume Prime", link: "/resume-prime", desc: "Resume Builder", cat: "Prime" },
    { name: "Currency Prime", link: "/currency-prime", desc: "Currency Converter", cat: "Prime" },
    { name: "Travel Prime", link: "/travel-prime", desc: "Distance & Time", cat: "Prime" },
    { name: "BMI Prime", link: "/bmi-prime", desc: "Coming Soon", cat: "Health" },
    { name: "EMI Prime", link: "/emi-prime", desc: "Coming Soon", cat: "Finance" },
    { name: "Sports Hub", link: "/sports", desc: "Coming Soon", cat: "Sports" },
  ];
  return (
    <div className="max-w-md mx-auto p-4 bg-[#f8f9fa] min-h-screen">
      <div className="bg-black text-white p-6 rounded-[24px] mb-4">
        <h1 className="text-3xl font-black">WanaLab</h1>
        <p className="text-xs opacity-70 mt-1">Independent Research Lab • Privacy First • 40 Tools</p>
        <p className="text-[11px] mt-3 bg-white/20 inline-block px-3 py-1 rounded-full">✅ LIVE NOW</p>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {tools.map((t) => (
          <Link key={t.link} to={t.link} className="bg-white p-4 rounded-2xl border flex justify-between items-center shadow-sm">
            <div><p className="font-bold">{t.name}</p><p className="text-[11px] text-gray-500">{t.desc}</p></div>
            <span className="text-[9px] bg-black text-white px-2 py-1 rounded-full">{t.cat}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/age-prime" element={<AgePrime />} />
        <Route path="/word-prime" element={<WordPrime />} />
        <Route path="/image-prime" element={<ImagePrime />} />
        <Route path="/pdf-prime" element={<PdfPrime />} />
        <Route path="/qr-prime" element={<QrPrime />} />
        <Route path="/resume-prime" element={<ResumePrime />} />
        <Route path="/currency-prime" element={<CurrencyPrime />} />
        <Route path="/percent-prime" element={<PercentPrime />} />
        <Route path="/travel-prime" element={<TravelPrime />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
        }
