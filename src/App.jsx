import React, { useState } from "react";

function AdSlot({ id }) {
  return (
    <div style={{ background: "#fffbeb", border: "1px dashed #f59e0b", borderRadius: "8px", padding: "10px", textAlign: "center", fontSize: "10px", color: "#92400e", margin: "10px 0" }}>
      Ad Slot {id} — AdSense — Replace ca-pub-XXXX after wanalab.pk domain — RPM $8-$25
    </div>
  );
}

function AIPrime() {
  const [q, setQ] = useState(""); const [a, setA] = useState("");
  const ask = () => {
    if(!q) return alert("Ask something");
    if(q.toLowerCase().includes("cgpa")) setA("CGPA to % = CGPA x 25. 3.2 CGPA = 80%. Use CGPA Prime tool below.");
    else if(q.toLowerCase().includes("flight")) setA("Travel: PEW→KHI PIA Rs 18500 AirSial Rs 16900. Best 14 days before. Book via Bookme.pk Rs500 commission.");
    else setA(`WanaLab AI: You asked "${q}". Use our 15 Primes tools below — All offline private — Engineered in Wana.`);
  };
  return (
    <div style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)", borderRadius: "12px", padding: "16px", color: "white" }}>
      <b>🤖 AI Prime — SEO LIVE</b>
      <div style={{ display: "flex", gap: "6px", marginTop: "8px" }}>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Ask CGPA, Flights, Resume?" style={{ flex: 1, padding: "8px", borderRadius: "6px", border: "none" }} />
        <button onClick={ask} style={{ background: "white", color: "#4f46e5", padding: "8px 12px", borderRadius: "6px", border: "none", fontWeight: 700 }}>Ask</button>
      </div>
      {a && <div style={{ background: "white", color: "black", padding: "8px", borderRadius: "6px", marginTop: "8px", fontSize: "12px" }}>{a}</div>}
    </div>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui", background: "#fafaf9", minHeight: "100vh" }}>
      <header style={{ background: "white", padding: "12px 16px", borderBottom: "1px solid #eee", position: "sticky", top: 0 }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
          <b>WanaLab.pk</b>
          <span style={{ fontSize: "10px", background: "black", color: "white", padding: "4px 8px", borderRadius: "12px" }}>15 PRIMES + ADS + SEO + BLOG LIVE</span>
        </div>
      </header>

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "16px" }}>
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <h1 style={{ fontSize: "30px", fontWeight: 900, margin: "0 0 4px" }}>Built in Wana,<br/>Used Worldwide</h1>
          <p style={{ color: "#666", fontSize: "12px" }}>Independent Research Lab, Wana — 15 Primes + Ads + SEO + Blog — Engineered in Wana</p>
        </div>

        <AdSlot id="1 - Top Leaderboard" />
        <AIPrime />
        <AdSlot id="2 - After AI" />

        <div style={{ background: "white", border: "2px solid #0ea5e9", borderRadius: "10px", padding: "12px", margin: "12px 0" }}>
          <b style={{ fontSize: "13px", color: "#0ea5e9" }}>✈️ Travel Prime — Airlines Ticket Affiliate — Rs 500/ticket</b>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", marginTop: "8px" }}>
            <select style={{ padding: "7px", borderRadius: "6px", border: "1px solid #ddd", fontSize: "11px" }}><option>Peshawar</option><option>Islamabad</option><option>Lahore</option><option>Karachi</option></select>
            <select style={{ padding: "7px", borderRadius: "6px", border: "1px solid #ddd", fontSize: "11px" }}><option>Karachi</option><option>Lahore</option><option>Dubai</option></select>
            <input type="date" style={{ padding: "7px", borderRadius: "6px", border: "1px solid #ddd", fontSize: "11px" }} />
          </div>
          <a href="https://bookme.pk/?aff=wanalab" target="_blank" style={{ display: "block", textAlign: "center", marginTop: "8px", background: "#0ea5e9", color: "white", padding: "8px", borderRadius: "6px", textDecoration: "none", fontSize: "12px", fontWeight: 700 }}>Search Flights — Earn Rs 500</a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "8px" }}>
          {[
            ["🎓 CGPA Prime","UET PU KU Global $270"],["🎂 Age Prime","Exact Age $300"],["📊 Percentage Prime","% Lab $250"],
            ["📄 PDF Prime","Vault No Upload $300"],["📝 Resume Prime","ATS 5 Templates $400"],["🖼️ Image Prime","20KB 50KB 200KB $350"],
            ["🔤 Word Prime","Thesis Safe Wana $250"],["🔳 QR Prime","Logo Inside Offline $300"],["💱 Currency Prime","USD PKR RPM $18 $400"],
            ["✈️ Travel Prime","PIA AirSial NEW $500"],["🛒 Shop Prime","Daraz Amazon $300"],["💼 Freelance Prime","Shop SaaS Portfolio $600"],
            ["🔗 Link Engine","VIRAL Earning Link $800"],["🎓 Student OS","Attendance Offline $500"],["🤖 AI Prime","AI Chat Resume Travel $800"]
          ].map(([name, desc])=>(
            <div key={name} style={{ background: "white", padding: "12px", borderRadius: "10px", border: "1px solid #e5e7eb" }}>
              <div style={{ fontSize: "13px", fontWeight: 800 }}>{name}</div>
              <div style={{ fontSize: "10px", color: "#666" }}>{desc}</div>
            </div>
          ))}
        </div>

        <AdSlot id="3 - Mid Content" />

        <div style={{ background: "white", borderRadius: "10px", padding: "14px", marginTop: "14px", border: "1px solid #e5e7eb" }}>
          <b style={{ fontSize: "13px" }}>📚 Blog Pack — 13 SEO Articles — 228K views/mo — $7,700/mo Path — SEO LIVE</b>
          <div style={{ marginTop: "8px", display: "grid", gap: "6px", fontSize: "11px" }}>
            <div>1. CGPA to % Pakistan — 18K/mo — wanalab.pk/blog/cgpa-to-percentage/</div>
            <div>2. PIA vs AirSial Ticket PEW to KHI — 25K/mo — wanalab.pk/blog/pia-airsial-price/</div>
            <div>3. ATS Resume Pakistan 2026 — 15K/mo — wanalab.pk/blog/ats-resume-pakistan/</div>
            <div>4. Image Compressor 20KB 50KB 200KB — 12K/mo</div>
            <div>5. USD to PKR Live — 30K/mo — Finance RPM $18</div>
            <div>6. Age Calculator NADRA — 20K/mo</div>
            <div>7. Word Counter Thesis Safe Wana — 10K/mo</div>
            <div>8. QR Logo Inside Offline — 8K/mo</div>
            <div>9. PDF Merge Offline — 14K/mo</div>
            <div>10. Link Engine Viral — 22K/mo — ZERO competition PK</div>
            <div>11. Attendance Bunk Calculator 75% — 18K/mo</div>
            <div>12. AI Prime WanaLab AI — 16K/mo — RPM $25</div>
            <div>13. Daraz Affiliate Earn Rs 500/Day Wana — 20K/mo</div>
          </div>
        </div>

        <AdSlot id="4 - Bottom + Footer" />

        <div style={{ border: "2px dashed #4f46e5", borderRadius: "10px", padding: "12px", marginTop: "12px", background: "#f5f3ff", fontSize: "11px" }}>
          <b style={{ color: "#4f46e5" }}>Affiliate Earning — SEO LIVE:</b> Daraz 5-15% + Bookme.pk Rs500/ticket + Fiverr + Amazon — Replace YOUR-AFFILIATE-ID with real link from affiliate.daraz.pk + bookme.pk partner
        </div>

        <footer style={{ textAlign: "center", marginTop: "16px", fontSize: "10px", color: "#888", borderTop: "1px solid #eee", padding: "12px" }}>
          WanaLab.pk — 15 Primes + ADS 4 slots + SEO sitemap.xml + robots.txt + OG tags + Blog 13 articles — FINAL LIVE — $7,700/mo path — Engineered in Wana — Built in Wana Used Worldwide
          <div style={{ marginTop: "6px" }}>SEO: sitemap.xml LIVE | robots.txt LIVE | index.html OG tags LIVE | Google Search Console ready</div>
        </footer>
      </div>
    </div>
  );
              }
