import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Extra10Prime from "./pages/Extra10Prime";

// --- Your Existing Primes (Keep your existing imports if different names) ---
import AgePrime from "./pages/AgePrime";
import WordPrime from "./pages/WordPrime";
import ImagePrime from "./pages/ImagePrime";
import PdfPrime from "./pages/PdfPrime";
import QrPrime from "./pages/QrPrime";
import ResumePrime from "./pages/ResumePrime";
import CurrencyPrime from "./pages/CurrencyPrime";
import PercentPrime from "./pages/PercentPrime";
import TravelPrime from "./pages/TravelPrime";

// Sports
import SportsHub from "./pages/SportsHub";
import PslPrime from "./pages/PslPrime";
import IplPrime from "./pages/IplPrime";
import EplPrime from "./pages/EplPrime";

// Home Component
function Home() {
  const tools = [
    // Original 9 Prime
    { name: "Age Prime", link: "/age-prime", desc: "Exact age live seconds", cat: "Prime" },
    { name: "Word Prime", link: "/word-prime", desc: "Thesis safe counter", cat: "Prime" },
    { name: "Percent Prime", link: "/percent-prime", desc: "% Calculator", cat: "Prime" },
    { name: "Image Prime", link: "/image-prime", desc: "Compress to 20KB", cat: "Prime" },
    { name: "PDF Prime", link: "/pdf-prime", desc: "Offline PDF Vault", cat: "Prime" },
    { name: "QR Prime", link: "/qr-prime", desc: "QR Generator Offline", cat: "Prime" },
    { name: "Resume Prime", link: "/resume-prime", desc: "Resume Builder", cat: "Prime" },
    { name: "Currency Prime", link: "/currency-prime", desc: "USD to PKR", cat: "Prime" },
    { name: "Travel Prime", link: "/travel-prime", desc: "Distance & Time", cat: "Prime" },

    // New 10 Prime - Added Today
    { name: "BMI Prime", link: "/bmi-prime", desc: "Body Mass Index", cat: "Health" },
    { name: "EMI Prime", link: "/emi-prime", desc: "Loan Monthly EMI", cat: "Finance" },
    { name: "Zakat Prime", link: "/zakat-prime", desc: "Islamic 2.5% Zakat", cat: "Islamic" },
    { name: "GPA Prime", link: "/gpa-prime", desc: "Gomal University GPA", cat: "Education" },
    { name: "Marla Prime", link: "/marla-prime", desc: "Marla to Kanal/M²", cat: "Local" },
    { name: "Fuel Prime", link: "/fuel-prime", desc: "Wana to DIK Fuel Cost", cat: "Local" },
    { name: "Water Prime", link: "/water-prime", desc: "Daily Water Intake", cat: "Health" },
    { name: "Discount Prime", link: "/discount-prime", desc: "Bazaar Discount", cat: "Finance" },
    { name: "Pregnancy Prime", link: "/pregnancy-prime", desc: "Due Date Calculator", cat: "Health" },
    { name: "Password Prime", link: "/password-prime", desc: "Strong Password Gen", cat: "Utility" },

    // Sports
    { name: "Sports Hub", link: "/sports", desc: "PSL IPL EPL Live", cat: "Sports" },
    { name: "PSL Prime", link: "/sports/psl", desc: "PSL 2026 Live Table", cat: "Sports" },
  ];

  return (
    <div className="max-w-md mx-auto p-4 bg-[#f8f9fa] min-h-screen">
      <div className="bg-black text-white p-6 rounded-[24px] mb-4">
        <h1 className="text-3xl font-black tracking-tight">WanaLab</h1>
        <p className="text-xs opacity-70 mt-1 tracking-widest uppercase">Independent Research Lab, WANA</p>
        <p className="text-[11px] mt-3 bg-white/10 inline-block px-3 py-1 rounded-full">19 Tools • 100% Offline • Engineered in WANA</p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {tools.map((t) => (
          <Link key={t.link} to={t.link} className="bg-white p-4 rounded-2xl border border-black/5 flex justify-between items-center active:scale-[0.98] shadow-sm">
            <div>
              <p className="font-bold text-[15px]">{t.name}</p>
              <p className="text-[11px] text-gray-500">{t.desc}</p>
            </div>
            <span className="text-[9px] bg-black text-white px-2 py-1 rounded-full uppercase">{t.cat}</span>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8 pb-4">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">wanalab-web.pages.dev • No Upload • Private</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Original 9 */}
        <Route path="/age-prime" element={<AgePrime />} />
        <Route path="/word-prime" element={<WordPrime />} />
        <Route path="/percent-prime" element={<PercentPrime />} />
        <Route path="/image-prime" element={<ImagePrime />} />
        <Route path="/pdf-prime" element={<PdfPrime />} />
        <Route path="/qr-prime" element={<QrPrime />} />
        <Route path="/resume-prime" element={<ResumePrime />} />
        <Route path="/currency-prime" element={<CurrencyPrime />} />
        <Route path="/travel-prime" element={<TravelPrime />} />

        {/* New 10 */}
        <Route path="/bmi-prime" element={<Extra10Prime type="bmi" />} />
        <Route path="/emi-prime" element={<Extra10Prime type="emi" />} />
        <Route path="/fuel-prime" element={<Extra10Prime type="fuel" />} />
        <Route path="/zakat-prime" element={<Extra10Prime type="zakat" />} />
        <Route path="/gpa-prime" element={<Extra10Prime type="gpa" />} />
        <Route path="/marla-prime" element={<Extra10Prime type="marla" />} />
        <Route path="/water-prime" element={<Extra10Prime type="water" />} />
        <Route path="/discount-prime" element={<Extra10Prime type="discount" />} />
        <Route path="/pregnancy-prime" element={<Extra10Prime type="pregnancy" />} />
        <Route path="/password-prime" element={<Extra10Prime type="password" />} />

        {/* Sports */}
        <Route path="/sports" element={<SportsHub />} />
        <Route path="/sports/psl" element={<PslPrime />} />
        <Route path="/sports/ipl" element={<IplPrime />} />
        <Route path="/sports/epl" element={<EplPrime />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
