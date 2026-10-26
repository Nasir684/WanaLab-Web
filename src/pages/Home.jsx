import { Link } from "react-router-dom";

export default function Home() {
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

    // Sports
    { name: "Sports Hub", link: "/sports", desc: "PSL IPL EPL Live", cat: "Sports" },
  ];

  return (
    <div className="max-w-md mx-auto p-4 bg-[#f8f9fa] min-h-screen">
      <div className="bg-black text-white p-6 rounded-[24px] mb-4">
        <h1 className="text-3xl font-black tracking-tight">WanaLab</h1>
        <p className="text-xs opacity-70 mt-1 tracking-widest uppercase">Independent Research Lab • Privacy First</p>
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

      <div className="text-center mt-8 pb-4">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">wanalab-web.pages.dev • No Upload • Private • Global • 40 Tools</p>
      </div>
    </div>
  );
              }
