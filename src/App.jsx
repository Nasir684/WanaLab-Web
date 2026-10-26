import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Extra10Prime from "./pages/Extra10Prime";
import Extra21Prime from "./pages/Extra21Prime";

// --- Original 9 Primes ---
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

// + NEW: Dashboard
import Dashboard from "./pages/Dashboard";

// Home - 40 Tools Global + Founder
function Home() {
  const tools = [
    // 9 Original Prime
    { name: "Age Prime", link: "/age-prime", desc: "Exact age live seconds", cat: "Prime" },
    { name: "Word Prime", link: "/word-prime", desc: "Thesis safe counter", cat: "Prime" },
    { name: "Percent Prime", link: "/percent-prime", desc: "% Calculator", cat: "Prime" },
    { name: "Image Prime", link: "/image-prime", desc: "Compress to 20KB", cat: "Prime" },
    { name: "PDF Prime", link: "/pdf-prime", desc: "Offline PDF Vault", cat: "Prime" },
    { name: "QR Prime", link: "/qr-prime", desc: "QR Generator Offline", cat: "Prime" },
    { name: "Resume Prime", link: "/resume-prime", desc: "Resume Builder", cat: "Prime" },
    { name: "Currency Prime", link: "/currency-prime", desc: "Currency Converter", cat: "Prime" },
    { name: "Travel Prime", link: "/travel-prime", desc: "Distance & Time", cat: "Prime" },

    // 10 Global New
    { name: "BMI Prime", link: "/bmi-prime", desc: "Body Mass Index", cat: "Health" },
    { name: "EMI Prime", link: "/emi-prime", desc: "Loan EMI Calculator", cat: "Finance" },
    { name: "Zakat Prime", link: "/zakat-prime", desc: "Islamic 2.5% Zakat", cat: "Islamic" },
    { name: "GPA Prime", link: "/gpa-prime", desc: "GPA 4.0 Calculator", cat: "Education" },
    { name: "Area Prime", link: "/marla-prime", desc: "Area Unit Converter", cat: "Utility" },
    { name: "Fuel Prime", link: "/fuel-prime", desc: "Fuel Cost Calculator", cat: "Utility" },
    { name: "Water Prime", link: "/water-prime", desc: "Daily Water Intake", cat: "Health" },
    { name: "Discount Prime", link: "/discount-prime", desc: "Discount Calculator", cat: "Finance" },
    { name: "Pregnancy Prime", link: "/pregnancy-prime", desc: "Due Date Calculator", cat: "Health" },
    { name: "Password Prime", link: "/password-prime", desc: "Strong Password Gen", cat: "Utility" },

    // 21 More - Total 40
    { name: "Profit Margin Prime", link: "/profit-prime", desc: "Profit & Margin", cat: "Finance" },
    { name: "Tip Prime", link: "/tip-prime", desc: "Tip Calculator", cat: "Finance" },
    { name: "Salary Prime", link: "/salary-prime", desc: "Monthly to Hourly", cat: "Finance" },
    { name: "Tax Prime", link: "/tax-prime", desc: "Tax Calculator", cat: "Finance" },
    { name: "Gold Prime", link: "/gold-prime", desc: "Gold Price Value", cat: "Finance" },
    { name: "Unit Prime", link: "/unit-prime", desc: "KG to LB / KM to Mile", cat: "Utility" },
    { name: "Speed Prime", link: "/speed-prime", desc: "KM to MPH", cat: "Utility" },
    { name: "Electric Prime", link: "/electric-prime", desc: "Bill Calculator", cat: "Utility" },
    { name: "Grade Prime", link: "/grade-prime", desc: "Marks to %", cat: "Education" },
    { name: "Date Diff Prime", link: "/datediff-prime", desc: "Days Between Dates", cat: "Utility" },
    { name: "Time Zone Prime", link: "/timezone-prime", desc: "UTC Converter", cat: "Utility" },
    { name: "BP Log Prime", link: "/bp-prime", desc: "Blood Pressure Log", cat: "Health" },
    { name: "Heart Rate Prime", link: "/heartrate-prime", desc: "Max HR Zones", cat: "Health" },
    { name: "Step Prime", link: "/step-prime", desc: "Steps to KM", cat: "Health" },
    { name: "Body Fat Prime", link: "/bodyfat-prime", desc: "Body Fat % Est.", cat: "Health" },
    { name: "Age Gap Prime", link: "/agegap-prime", desc: "Age Gap Calculator", cat: "Prime" },
    { name: "Invoice Prime", link: "/invoice-prime", desc: "Invoice Generator", cat: "Finance" },
    { name: "Calorie Prime", link: "/calorie-prime", desc: "BMR Calories", cat: "Health" },
    { name: "Interest Prime", link: "/interest-prime", desc: "Simple Interest", cat: "Finance" },
    { name: "Ratio Prime", link: "/ratio-prime", desc: "Ratio Calculator", cat: "Education" },
    { name: "Random Prime", link: "/random-prime", desc: "Random Number", cat: "Utility" },

    // Sports Hub
    { name: "Sports Hub", link: "/sports", desc: "PSL IPL EPL Live", cat: "Sports" },
  ];

  return (
    <div className="max-w-md mx-auto p-4 bg-[#f8f9fa] min-h-screen">
      <div className="bg-black text-white p-6 rounded-[24px] mb-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-black tracking-tight">WanaLab</h1>
            <p className="text-xs opacity-70 mt-1 tracking-widest uppercase">Independent Research Lab • Privacy First</p>
          </div>
          <Link to="/dashboard" className="bg-white text-black text-[10px] font-bold px-3 py-1.5 rounded-full">Dashboard</Link>
        </div>
        <p className="text-[11px] mt-3 bg-white/10 inline-block px-3 py-1 rounded-full">40 Tools • 100% Offline • Global</p>
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

      {/* Founder & Developer Section */}
      <div className="bg-black text-white rounded-[24px] p-5 mt-6">
        <p className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Founder & Developer</p>
        <div className="flex gap-3 items-center mt-3">
          <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-black">NK</div>
          <div>
            <p className="font-bold text-[16px]">Nasir Khan</p>
            <p className="text-[11px] opacity-70">Founder & Developer • WanaLab</p>
          </div>
        </div>
        <p className="text-[11px] opacity-60 mt-3 leading-relaxed">Privacy-first tools engineered for global users. 40+ offline utilities, zero data collection, built with independent research.</p>
        <Link to="/dashboard" className="mt-3 inline-block bg-white text-black text-[11px] font-bold px-4 py-2 rounded-full">View Dashboard</Link>
      </div>

      <div className="text-center mt-6 pb-4">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">© 2026 WanaLab • Nasir Khan • wanalab-web.pages.dev • Private • Global</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
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

        {/* New 10 - Global */}
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

        {/* 21 More - Total 40 */}
        <Route path="/profit-prime" element={<Extra21Prime type="profit" />} />
        <Route path="/tip-prime" element={<Extra21Prime type="tip" />} />
        <Route path="/salary-prime" element={<Extra21Prime type="salary" />} />
        <Route path="/tax-prime" element={<Extra21Prime type="tax" />} />
        <Route path="/gold-prime" element={<Extra21Prime type="gold" />} />
        <Route path="/unit-prime" element={<Extra21Prime type="unit" />} />
        <Route path="/speed-prime" element={<Extra21Prime type="speed" />} />
        <Route path="/electric-prime" element={<Extra21Prime type="electric" />} />
        <Route path="/grade-prime" element={<Extra21Prime type="grade" />} />
        <Route path="/datediff-prime" element={<Extra21Prime type="datediff" />} />
        <Route path="/timezone-prime" element={<Extra21Prime type="timezone" />} />
        <Route path="/bp-prime" element={<Extra21Prime type="bpressure" />} />
        <Route path="/heartrate-prime" element={<Extra21Prime type="heartrate" />} />
        <Route path="/step-prime" element={<Extra21Prime type="step" />} />
        <Route path="/bodyfat-prime" element={<Extra21Prime type="bodyfat" />} />
        <Route path="/agegap-prime" element={<Extra21Prime type="agegap" />} />
        <Route path="/invoice-prime" element={<Extra21Prime type="invoice" />} />
        <Route path="/calorie-prime" element={<Extra21Prime type="calorie" />} />
        <Route path="/interest-prime" element={<Extra21Prime type="interest" />} />
        <Route path="/ratio-prime" element={<Extra21Prime type="ratio" />} />
        <Route path="/random-prime" element={<Extra21Prime type="random" />} />

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
