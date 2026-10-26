import React, { useState } from "react";

const cities = ["Peshawar (PEW)", "Islamabad (ISB)", "Lahore (LHE)", "Karachi (KHI)", "Wana", "Dubai (DXB)", "Jeddah", "Riyadh"];

function AIPrime() {
  const [q, setQ] = useState(""); const [ans, setAns] = useState("");
  const ask = () => {
    if(!q) return;
    const low = q.toLowerCase();
    if(low.includes("cgpa")) setAns("CGPA = (Total Grade Points / Total Credit Hours). For UET: Use 4.0 scale. Example: 3.5 CGPA = 87.5%. Open CGPA Prime → Enter grades → Get result + PDF. Affiliate: Buy Laptop for UET students via Daraz.");
    else if(low.includes("flight") || low.includes("ticket")) setAns("Travel Prime: Search Peshawar→Karachi, Select date, Compare PIA (Rs 18,500) vs AirSial (Rs 16,900). Book via Bookme.pk affiliate — Earn Rs 500/ticket. Best time to book: 2 weeks before.");
    else if(low.includes("resume")) setAns("Resume Prime AI: Paste your details → AI generates ATS resume in 5 templates (Pak format 2026). Offline, private, no upload. Download PDF. Affiliate: Printer + Paper for students.");
    else setAns(`WanaLab AI (Engineered in Wana): You asked "${q}". Use our Primes: CGPA for students, Age %, PDF Vault (no upload), Travel Prime for tickets, Shop for Daraz affiliate. All tools offline + private. Ask about CGPA, Flights, Resume.`);
  }
  return (
    <div style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)", borderRadius: "16px", padding: "20px", marginBottom: "16px", color: "white" }}>
      <h3 style={{ margin: 0 }}>🤖 AI Prime — WanaLab AI — NEW — RPM $25</h3>
      <p style={{ fontSize: "12px", opacity: 0.9, margin: "6px 0 0" }}>Ask anything: CGPA, Flights, Resume, Tools — AI answers + leads to tool + affiliate — 100% offline templates (free API ready)</p>
      <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Ask: How to calculate CGPA in UET? Best flight PEW to KHI?" style={{ flex: 1, padding: "10px", borderRadius: "8px", border: "none", color: "#111" }} />
        <button onClick={ask} style={{ background: "white", color: "#4f46e5", padding: "10px 16px", borderRadius: "8px", border: "none", fontWeight: 800 }}>Ask AI</button>
      </div>
      {ans && <div style={{ background: "white", color: "#111", padding: "12px", borderRadius: "8px", marginTop: "10px", fontSize: "13px" }}>{ans}</div>}
      <div style={{ marginTop: "10px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
        <span onClick={()=>{setQ("How to calculate CGPA");}} style={{ background: "rgba(255,255,255,0.2)", padding: "4px 8px", borderRadius: "6px", fontSize: "11px", cursor: "pointer" }}>CGPA?</span>
        <span onClick={()=>{setQ("Best flight Peshawar to Karachi");}} style={{ background: "rgba(255,255,255,0.2)", padding: "4px 8px", borderRadius: "6px", fontSize: "11px", cursor: "pointer" }}>Flights?</span>
        <span onClick={()=>{setQ("Make ATS resume");}} style={{ background: "rgba(255,255,255,0.2)", padding: "4px 8px", borderRadius: "6px", fontSize: "11px", cursor: "pointer" }}>Resume AI?</span>
      </div>
    </div>
  )
}

function TravelPrimeTool() {
  const [from, setFrom] = useState("Peshawar (PEW)"); const [to, setTo] = useState("Karachi (KHI)"); const [date, setDate] = useState(""); const [searched, setSearched] = useState(false);
  return (
    <div style={{ background: "white", border: "2px solid #0ea5e9", borderRadius: "16px", padding: "16px", marginBottom: "16px" }}>
      <h3 style={{ margin: 0, color: "#0ea5e9", fontSize: "14px" }}>✈️ Travel Prime — Airlines Ticket — Rs 500/ticket affiliate</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", marginTop: "10px" }}>
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ddd", fontSize: "12px" }}>{cities.map(c=> <option key={c}>{c}</option>)}</select>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ddd", fontSize: "12px" }}>{cities.map(c=> <option key={c}>{c}</option>)}</select>
        <input type="date" value={date} onChange={e=>setDate(e.target.value)} style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ddd", fontSize: "12px" }} />
      </div>
      <button onClick={()=>{if(!date){alert("Select date");return;} setSearched(true)}} style={{ width: "100%", marginTop: "8px", background: "#0ea5e9", color: "white", padding: "8px", borderRadius: "6px", border: "none", fontWeight: 700, fontSize: "12px" }}>Search {from} → {to}</button>
      {searched && <div style={{ marginTop: "8px", fontSize: "12px" }}><div style={{ background: "#f0f9ff", padding: "6px", borderRadius: "6px" }}>PIA Rs 18,500 <a href="https://bookme.pk/?aff=wanalab" target="_blank" style={{ float: "right", background: "#16a34a", color: "white", padding: "3px 6px", borderRadius: "4px", textDecoration: "none" }}>Book Earn</a></div></div>}
    </div>
  )
}

const primes = [
  { name: "CGPA Prime", desc: "Global CGPA UET PU KU", price: "$270", icon: "🎓" },
  { name: "Age Prime", desc: "Exact Age Calculator", price: "$300", icon: "🎂" },
  { name: "Percentage Prime", desc: "% Lab Global", price: "$250", icon: "📊" },
  { name: "PDF Prime", desc: "Vault No Upload Private", price: "$300", icon: "📄" },
  { name: "Resume Prime", desc: "ATS 5 Templates Pak", price: "$400", icon: "📝" },
  { name: "Image Prime", desc: "KB Compressor 20KB 50KB", price: "$350", icon: "🖼️" },
  { name: "Word Prime", desc: "Doc Vault Thesis Wana", price: "$250", icon: "🔤" },
  { name: "QR Prime", desc: "QR Logo Inside Offline", price: "$300", icon: "🔳" },
  { name: "Currency Prime", desc: "USD PKR Live RPM $18", price: "$400", icon: "💱" },
  { name: "Travel Prime", desc: "Airlines PIA AirSial NEW", price: "$500", icon: "✈️", new: true },
  { name: "Shop Prime", desc: "Daraz Amazon Shop", price: "$300", icon: "🛒", new: true },
  { name: "Freelance Prime", desc: "Shop SaaS Portfolio", price: "$600", icon: "💼", new: true },
  { name: "Link Engine", desc: "VIRAL Any Link → Earning", price: "$800", icon: "🔗", new: true },
  { name: "Student OS", desc: "CGPA Attendance Offline", price: "$500", icon: "🎓", new: true },
  { name: "AI Prime", desc: "AI Chat + AI Resume + AI Travel NEW", price: "$800", icon: "🤖", new: true, ai: true },
];

export default function App() {
  return (
    <div style={{ fontFamily: "Inter, system-ui", background: "#fafaf9", minHeight: "100vh" }}>
      <header style={{ background: "white", borderBottom: "1px solid #e5e7eb", padding: "12px 16px", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 900, fontSize: "18px" }}>WanaLab<span style={{ color: "#4f46e5" }}>.pk</span></div>
          <div style={{ fontSize: "9px", background: "#111", color: "white", padding: "5px 8px", borderRadius: "20px" }}>15 PRIMES FINAL — AI LOCKED</div>
        </div>
      </header>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "16px" }}>
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <h1 style={{ fontSize: "32px", fontWeight: 900, margin: "0 0 6px" }}>Built in Wana,<br/>Used Worldwide</h1>
          <p style={{ color: "#666", fontSize: "13px" }}>15 Primes = Tools + Sports + Shop + Travel + Freelance + Link Engine + Student OS + AI — Rs + $</p>
        </div>

        <AIPrime />
        <TravelPrimeTool />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "10px" }}>
          {primes.map((p,i) => (
            <div key={i} style={{ background: p.ai ? "linear-gradient(135deg,#f5f3ff,#ede9fe)" : "white", border: p.new ? "2px solid #4f46e5" : "1px solid #e5e7eb", borderRadius: "12px", padding: "14px" }}>
              <div style={{ fontSize: "20px" }}>{p.icon} {p.new && <span style={{ fontSize: "8px", background: p.ai ? "#7c3aed" : "#0ea5e9", color: "white", padding: "2px 4px", borderRadius: "4px" }}>{p.ai ? "AI" : "EXTRA"}</span>}</div>
              <h3 style={{ margin: "4px 0 2px", fontSize: "14px", fontWeight: 800 }}>{p.name}</h3>
              <p style={{ margin: 0, color: "#666", fontSize: "11px" }}>{p.desc}</p>
              <div style={{ marginTop: "6px", fontSize: "10px", background: "#f3f4f6", display: "inline-block", padding: "2px 6px", borderRadius: "4px" }}>{p.price}/mo path</div>
            </div>
          ))}
        </div>

        <div style={{ border: "2px dashed #4f46e5", borderRadius: "12px", padding: "14px", marginTop: "16px", background: "#f5f3ff", fontSize: "12px" }}>
          <b style={{ color: "#4f46e5" }}>Affiliate Earning — All 15 Primes</b> — Daraz 5-15% + Amazon $ + Bookme.pk Rs 500/ticket + Fiverr + AdSense 4 slots
        </div>

        <footer style={{ textAlign: "center", marginTop: "20px", color: "#888", fontSize: "10px", borderTop: "1px solid #e5e7eb", padding: "16px" }}>
          WanaLab.pk — Independent Research Lab, Wana — 15 Primes Final Empire — AI Locked — Engineered in Wana — $6,520/mo path
        </footer>
      </div>
    </div>
  );
                     }
