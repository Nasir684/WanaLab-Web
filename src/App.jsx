import React, { useState } from "react";

const cities = ["Peshawar (PEW)", "Islamabad (ISB)", "Lahore (LHE)", "Karachi (KHI)", "Wana", "Dubai (DXB)", "Jeddah", "Riyadh"];

function AIPrime() {
  const [q, setQ] = useState(""); const [ans, setAns] = useState("");
  const ask = () => {
    if(!q) return;
    const low = q.toLowerCase();
    if(low.includes("cgpa")) setAns("CGPA to %: % = CGPA x 25 (4.0 scale). 3.2 CGPA = 80%. Use CGPA Prime → Enter grades → PDF. Affiliate: Laptop for UET via Daraz 5-15%.");
    else if(low.includes("flight") || low.includes("ticket") || low.includes("pia")) setAns("Travel Prime: PEW→KHI PIA Rs 18,500, AirSial Rs 16,900. Best book 14 days before Tuesday. Book via Bookme.pk — Earn Rs 500/ticket. Compare in Travel Prime.");
    else if(low.includes("resume")) setAns("Resume Prime AI: 5 ATS templates Pak format 2026. Paste details → Generate → PDF offline private. Keywords: BSc, UET, Excel. Buy printer via Daraz.");
    else setAns(`WanaLab AI (Engineered in Wana): You asked "${q}". Open Primes: CGPA, PDF Vault No Upload, Travel Prime, Shop Daraz Affiliate. All offline private. Try: CGPA, Flights, Resume.`);
  };
  return (
    <div style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)", borderRadius: "16px", padding: "18px", marginBottom: "14px", color: "white" }}>
      <h3 style={{ margin: 0, fontSize: "15px" }}>🤖 AI Prime — WanaLab AI — RPM $25 — LOCKED</h3>
      <p style={{ fontSize: "11px", opacity: 0.9, margin: "4px 0 0" }}>Ask CGPA, Flights, Resume — AI answers + leads to tool + affiliate — Offline templates (free API ready)</p>
      <div style={{ display: "flex", gap: "6px", marginTop: "10px" }}>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Ask: CGPA UET? Best flight PEW to KHI? ATS Resume?" style={{ flex: 1, padding: "9px", borderRadius: "7px", border: "none", color: "#111", fontSize: "13px" }} />
        <button onClick={ask} style={{ background: "white", color: "#4f46e5", padding: "9px 14px", borderRadius: "7px", border: "none", fontWeight: 800, fontSize: "12px" }}>Ask AI</button>
      </div>
      {ans && <div style={{ background: "white", color: "#111", padding: "10px", borderRadius: "7px", marginTop: "8px", fontSize: "12px" }}>{ans}</div>}
    </div>
  )
}

function TravelPrimeTool() {
  const [from, setFrom] = useState("Peshawar (PEW)"); const [to, setTo] = useState("Karachi (KHI)"); const [date, setDate] = useState(""); const [searched, setSearched] = useState(false);
  return (
    <div style={{ background: "white", border: "2px solid #0ea5e9", borderRadius: "14px", padding: "14px", marginBottom: "14px" }}>
      <h3 style={{ margin: 0, color: "#0ea5e9", fontSize: "13px" }}>✈️ Travel Prime — Airlines Ticket — Rs 500/ticket affiliate</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", marginTop: "8px" }}>
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ddd", fontSize: "11px" }}>{cities.map(c=> <option key={c}>{c}</option>)}</select>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ddd", fontSize: "11px" }}>{cities.map(c=> <option key={c}>{c}</option>)}</select>
        <input type="date" value={date} onChange={e=>setDate(e.target.value)} style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ddd", fontSize: "11px" }} />
      </div>
      <button onClick={()=>{if(!date){alert("Select date");return;} setSearched(true)}} style={{ width: "100%", marginTop: "8px", background: "#0ea5e9", color: "white", padding: "8px", borderRadius: "6px", border: "none", fontWeight: 700, fontSize: "12px" }}>Search {from} → {to}</button>
      {searched && <div style={{ marginTop: "8px", fontSize: "11px", display: "grid", gap: "4px" }}>
        <div style={{ background: "#f0f9ff", padding: "6px", borderRadius: "6px" }}>PIA Rs 18,500 <a href="https://bookme.pk/?aff=wanalab" target="_blank" style={{ float: "right", background: "#16a34a", color: "white", padding: "3px 6px", borderRadius: "4px", textDecoration: "none" }}>Book Earn Rs500</a></div>
        <div style={{ background: "#fefce8", padding: "6px", borderRadius: "6px" }}>AirSial Rs 16,900 — Best Price</div>
      </div>}
    </div>
  )
}

function BlogPack() {
  const blogs = [
    { title: "CGPA to % Pakistan UET PU KU — Formula 2026", slug: "cgpa-to-percentage-pakistan", views: "18K", desc: "% = CGPA x 25 — 3.2 CGPA = 80% — Use CGPA Prime offline" },
    { title: "PIA vs AirSial Ticket Price PEW to KHI 2026 — Best Time to Book", slug: "pia-airsial-price", views: "25K", desc: "PIA Rs 18.5k vs AirSial Rs 16.9k — Book 14 days before — Bookme.pk Rs500/ticket" },
    { title: "ATS Resume Pakistan 2026 — 5 Templates — No Upload Private", slug: "ats-resume-pakistan", views: "15K", desc: "75% resumes fail ATS — Use Resume Prime offline private PDF" },
    { title: "Image Compressor Exact 20KB 50KB 200KB — Govt Jobs", slug: "image-compressor-20kb", views: "12K", desc: "FPSC PPSC NTS need exact KB — Image Prime offline no upload" },
    { title: "USD to PKR Live Today 100 500 USD Calculator", slug: "usd-to-pkr-live", views: "30K", desc: "1 USD = Rs 278.5 — Currency Prime RPM $18" },
    { title: "Age Calculator Exact for NADRA School", slug: "age-calculator-exact", views: "20K", desc: "Years Months Days exact — Age Prime offline" },
    { title: "Word Counter Thesis Safe in Wana — No Upload", slug: "word-counter-thesis", views: "10K", desc: "Thesis 10k words count offline — Word Prime private" },
    { title: "QR with Logo Inside Offline — Shop Banner", slug: "qr-generator-logo", views: "8K", desc: "QR with shop logo inside offline — QR Prime" },
    { title: "PDF Merge Split Compress Offline Private", slug: "pdf-tools-offline", views: "14K", desc: "Merge PDFs for jobs — PDF Vault no upload private" },
    { title: "Link Engine — Daraz Link to Earning Link Viral", slug: "link-engine-viral", views: "22K", desc: "Any Daraz link → wanalab.pk/l/xxx → Share WhatsApp → 5-15% earning" },
    { title: "Attendance Bunk Calculator — How Many Bunks Left for 75%?", slug: "attendance-bunk", views: "18K", desc: "Formula inside — Student OS offline" },
    { title: "AI Prime — AI for Resume Flight CGPA — WanaLab AI", slug: "ai-prime-wanalab", views: "16K", desc: "Ask AI CGPA, Flights, Resume — RPM $25 highest" },
    { title: "Daraz Affiliate Earn Rs 500/Day from Wana — 15 Primes", slug: "daraz-affiliate-wana", views: "20K", desc: "15 Primes = 15 earning sources — Rs + $ — WanaLab" },
  ];
  return (
    <div style={{ background: "white", borderRadius: "14px", padding: "16px", marginTop: "14px", border: "1px solid #e5e7eb" }}>
      <h2 style={{ margin: "0 0 4px", fontSize: "15px" }}>📚 Blog Pack — 13 SEO Articles — 228K Views/mo — $7,700/mo Path</h2>
      <p style={{ fontSize: "11px", color: "#666", margin: "0 0 10px" }}>Each article = Google search → Tool + 4 AdSense + affiliate — SEO Pack Live</p>
      <div style={{ display: "grid", gap: "8px" }}>
        {blogs.map(b=>(
          <div key={b.slug} style={{ border: "1px solid #f3f4f6", padding: "10px", borderRadius: "8px", display: "flex", justifyContent: "space-between", gap: "8px" }}>
            <div style={{ flex: 1 }}><div style={{ fontSize: "12px", fontWeight: 700 }}>{b.title}</div><div style={{ fontSize: "10px", color: "#666", marginTop: "2px" }}>{b.desc} — wanalab.pk/blog/{b.slug}/</div></div>
            <div style={{ fontSize: "9px", background: "#dcfce7", padding: "3px 6px", borderRadius: "5px", height: "fit-content" }}>{b.views}/mo</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const primes = [
  { name: "CGPA Prime", desc: "Global UET PU KU", price: "$270", icon: "🎓" },
  { name: "Age Prime", desc: "Exact Age", price: "$300", icon: "🎂" },
  { name: "Percentage Prime", desc: "% Lab Global", price: "$250", icon: "📊" },
  { name: "PDF Prime", desc: "Vault No Upload", price: "$300", icon: "📄" },
  { name: "Resume Prime", desc: "ATS 5 Templates", price: "$400", icon: "📝" },
  { name: "Image Prime", desc: "KB 20KB 50KB 200KB", price: "$350", icon: "🖼️" },
  { name: "Word Prime", desc: "Doc Vault Thesis", price: "$250", icon: "🔤" },
  { name: "QR Prime", desc: "Logo Inside Offline", price: "$300", icon: "🔳" },
  { name: "Currency Prime", desc: "USD PKR RPM $18", price: "$400", icon: "💱" },
  { name: "Travel Prime", desc: "PIA AirSial Airlines", price: "$500", icon: "✈️", new: true },
  { name: "Shop Prime", desc: "Daraz Amazon Shop", price: "$300", icon: "🛒", new: true },
  { name: "Freelance Prime", desc: "Shop SaaS Portfolio", price: "$600", icon: "💼", new: true },
  { name: "Link Engine", desc: "VIRAL Earning Link", price: "$800", icon: "🔗", new: true },
  { name: "Student OS", desc: "Attendance Offline", price: "$500", icon: "🎓", new: true },
  { name: "AI Prime", desc: "AI Chat + Resume + Travel", price: "$800", icon: "🤖", new: true, ai: true },
];

export default function App() {
  return (
    <div style={{ fontFamily: "Inter, system-ui", background: "#fafaf9", minHeight: "100vh" }}>
      <header style={{ background: "white", borderBottom: "1px solid #e5e7eb", padding: "12px 16px", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 900, fontSize: "18px" }}>WanaLab<span style={{ color: "#4f46e5" }}>.pk</span></div>
          <div style={{ fontSize: "9px", background: "#111", color: "white", padding: "5px 8px", borderRadius: "20px" }}>15 PRIMES + SEO + BLOG — FINAL LIVE</div>
        </div>
      </header>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "14px" }}>
        <div style={{ textAlign: "center", marginBottom: "14px" }}>
          <h1 style={{ fontSize: "30px", fontWeight: 900, margin: "0 0 4px" }}>Built in Wana,<br/>Used Worldwide</h1>
          <p style={{ color: "#666", fontSize: "12px" }}>15 Primes = Tools + Sports + Shop + Travel + Freelance + Link Engine + Student OS + AI — SEO Pack Live — 13 Blogs — $7,700/mo Path</p>
        </div>
        <AIPrime />
        <TravelPrimeTool />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "8px" }}>
          {primes.map((p,i) => (
            <div key={i} style={{ background: p.ai ? "linear-gradient(135deg,#f5f3ff,#ede9fe)" : "white", border: p.new ? "2px solid #4f46e5" : "1px solid #e5e7eb", borderRadius: "10px", padding: "12px" }}>
              <div style={{ fontSize: "18px" }}>{p.icon} {p.new && <span style={{ fontSize: "8px", background: p.ai ? "#7c3aed" : "#0ea5e9", color: "white", padding: "2px 4px", borderRadius: "3px" }}>{p.ai ? "AI SEO LIVE" : "EXTRA"}</span>}</div>
              <h3 style={{ margin: "4px 0 1px", fontSize: "13px", fontWeight: 800 }}>{p.name}</h3>
              <p style={{ margin: 0, color: "#666", fontSize: "10px" }}>{p.desc}</p>
              <div style={{ marginTop: "5px", fontSize: "9px", background: "#f3f4f6", display: "inline-block", padding: "2px 5px", borderRadius: "4px" }}>{p.price}/mo</div>
            </div>
          ))}
        </div>
        <BlogPack />
        <div style={{ border: "2px dashed #4f46e5", borderRadius: "10px", padding: "12px", marginTop: "14px", background: "#f5f3ff", fontSize: "11px" }}>
          <b style={{ color: "#4f46e5" }}>Affiliate Earning — All 15 Primes — SEO Live</b> — Daraz 5-15% + Amazon $ + Bookme.pk Rs500/ticket + Fiverr + AdSense 4 slots/page = 60+ slots — sitemap.xml + robots.txt + OG tags LIVE — wanalab.pk
        </div>
        <footer style={{ textAlign: "center", marginTop: "18px", color: "#888", fontSize: "9px", borderTop: "1px solid #e5e7eb", padding: "14px" }}>
          WanaLab.pk — Independent Research Lab, Wana — 15 Primes Final Empire — AI + SEO + Blog Pack LIVE — Engineered in Wana — $7,700/mo path — Built in Wana, Used Worldwide
        </footer>
      </div>
    </div>
  );
      }
