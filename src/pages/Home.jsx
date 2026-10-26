import { Link } from "react-router-dom";

export default function Home() {
  const tools = [
    // Original 9 Prime
    { name: "Age Prime", link: "/age-prime", desc: "Exact age live seconds", cat: "Prime" },
    { name: "Word Prime", link: "/word-prime", desc: "Thesis safe counter", cat: "Prime" },
    { name: "Percent Prime", link: "/percent-prime", desc: "% Calculator", cat: "Prime" },
    { name: "Image Prime", link: "/image-prime", desc: "Compress to 20KB", cat: "Prime" },
    { name: "PDF Prime", link: "/pdf-prime", desc: "Offline PDF Vault", cat: "Prime" },
    { name: "QR Prime", link: "/qr-prime", desc: "QR Generator Offline", cat: "Prime" },
    { name: "Resume Prime", link: "/resume-prime", desc: "Resume Builder", cat: "Prime" },
    { name: "Currency Prime", link: "/currency-prime", desc: "Currency Converter", cat: "Prime" },
    { name: "Travel Prime", link: "/travel-prime", desc: "Distance & Time", cat: "Prime" },

    // New 10 Global
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

    // Sports
    { name: "Sports Hub", link: "/sports", desc: "PSL IPL EPL Live", cat: "Sports" },
    { name: "PSL Prime", link: "/sports/psl", desc: "PSL 2026 Live Table", cat: "Sports" },
  ];

  return (
    <div className="max-w-md mx-auto p-4 bg-[#f8f9fa] min-h-screen">
      <div className="bg-black text-white p-6 rounded-[24px] mb-4">
        <h1 className="text-3xl font-black tracking-tight">WanaLab</h1>
        <p className="text-xs opacity-70 mt-1 tracking-widest uppercase">Independent Research Lab • Privacy First</p>
        <p className="text-[11px] mt-3 bg-white/10 inline-block px-3 py-1 rounded-full">19 Tools • 100% Offline • Global</p>
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
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">wanalab-web.pages.dev • No Upload • Private • Global</p>
      </div>
    </div>
  );
}
