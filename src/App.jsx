import React from "react";

const primes = [
  { id: "cgpa", name: "CGPA Prime", desc: "Global CGPA Calculator - All Universities", path: "/tools/cgpa-calculator/", price: "$270/mo", icon: "🎓", color: "#4f46e5" },
  { id: "age", name: "Age Prime", desc: "Global Age Calculator - Exact Age", path: "/tools/age-calculator/", price: "$300/mo", icon: "🎂", color: "#059669" },
  { id: "percentage", name: "Percentage Prime", desc: "Global Percentage Lab - % Calculator", path: "/tools/percentage-calculator/", price: "$250/mo", icon: "📊", color: "#db2777" },
  { id: "pdf", name: "PDF Prime", desc: "Offline PDF Vault - No Upload - Private", path: "/tools/pdf-tools/", price: "$300/mo", icon: "📄", color: "#dc2626" },
  { id: "resume", name: "Resume Prime", desc: "ATS Resume Lab - 5 Templates", path: "/tools/resume-builder/", price: "$400/mo", icon: "📝", color: "#7c3aed" },
  { id: "image", name: "Image Prime", desc: "Exact KB Compressor - 20KB, 50KB, 200KB", path: "/tools/image-compressor/", price: "$350/mo", icon: "🖼️", color: "#ea580c" },
  { id: "word", name: "Word Prime", desc: "Offline Doc Vault - Thesis Safe in Wana", path: "/tools/word-counter/", price: "$250/mo", icon: "🔤", color: "#0891b2" },
  { id: "qr", name: "QR Prime", desc: "QR Generator - Offline - Logo Inside QR", path: "/tools/qr-generator/", price: "$300/mo", icon: "🔳", color: "#000" },
  { id: "currency", name: "Currency Prime", desc: "USD to PKR Live - Finance RPM $18", path: "/tools/currency-converter/", price: "$400/mo", icon: "💱", color: "#16a34a" },
];

function AffiliateWidget() {
  return (
    <div style={{ border: "2px dashed #4f46e5", borderRadius: "16px", padding: "20px", marginTop: "30px", background: "#f5f3ff" }}>
      <h3 style={{ margin: 0, color: "#4f46e5" }}>Recommended for you 👇 (Affiliate Earning)</h3>
      <p style={{ fontSize: "14px", color: "#555" }}>Buy from Daraz via WanaLab — You support lab in Wana. We earn 5-15% commission.</p>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "10px" }}>
        <a href="https://affiliate.daraz.pk/YOUR-AFFILIATE-ID-HERE" target="_blank" style={{ background: "#4f46e5", color: "white", padding: "10px 16px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>🛒 Best Laptop for Students — Daraz</a>
        <a href="https://affiliate.daraz.pk/YOUR-AFFILIATE-ID-HERE" target="_blank" style={{ background: "#ff6a00", color: "white", padding: "10px 16px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>🎙️ Mic for YouTubers</a>
      </div>
      <p style={{ fontSize: "11px", color: "#888", marginTop: "8px" }}>Replace YOUR-AFFILIATE-ID-HERE with your real Daraz affiliate link from affiliate.daraz.pk</p>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", background: "#fafaf9", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ background: "white", borderBottom: "1px solid #e5e7eb", padding: "16px 20px", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 900, fontSize: "22px" }}>WanaLab<span style={{ color: "#4f46e5" }}>.pk</span></div>
          <div style={{ fontSize: "12px", background: "#111", color: "white", padding: "6px 12px", borderRadius: "20px" }}>ENGINEERED IN WANA</div>
        </div>
      </header>

      {/* Hero */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "50px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h1 style={{ fontSize: "42px", fontWeight: 900, lineHeight: 1.1, margin: "0 0 10px" }}>Built in Wana,<br/>Used Worldwide</h1>
          <p style={{ color: "#666", fontSize: "18px" }}>WanaLab.pk — Independent Research Lab, Wana, South Waziristan — Prime Series — Offline • Private • No Upload</p>
          <div style={{ marginTop: "20px", display: "inline-flex", gap: "10px", background: "white", padding: "8px", borderRadius: "12px", border: "1px solid #e5e7eb" }}>
            <span style={{ background: "#dcfce7", padding: "6px 12px", borderRadius: "8px", fontSize: "12px" }}>✅ 9 Primes Locked</span>
            <span style={{ background: "#fef3c7", padding: "6px 12px", borderRadius: "8px", fontSize: "12px" }}>💰 $2,120/mo Path</span>
            <span style={{ background: "#dbeafe", padding: "6px 12px", borderRadius: "8px", fontSize: "12px" }}>🌍 Global Mode</span>
          </div>
        </div>

        {/* Primes Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
          {primes.map((p) => (
            <div key={p.id} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "20px", transition: "all 0.2s" }}>
              <div style={{ fontSize: "28px" }}>{p.icon}</div>
              <h3 style={{ margin: "10px 0 4px", fontSize: "18px", fontWeight: 800 }}>{p.name}</h3>
              <p style={{ margin: 0, color: "#666", fontSize: "14px", minHeight: "38px" }}>{p.desc}</p>
              <div style={{ marginTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "12px", background: "#f3f4f6", padding: "4px 8px", borderRadius: "6px" }}>{p.price}</span>
                <span style={{ fontSize: "12px", color: p.color, fontWeight: 700 }}>wanalab.pk{p.path} →</span>
              </div>
            </div>
          ))}
        </div>

        <AffiliateWidget />

        {/* Footer */}
        <footer style={{ textAlign: "center", marginTop: "60px", padding: "30px", borderTop: "1px solid #e5e7eb", color: "#888", fontSize: "13px" }}>
          <p style={{ fontWeight: 700, color: "#111" }}>WanaLab.pk — Independent Research Lab, Wana, South Waziristan</p>
          <p>Prime Series — Engineered in Wana — Offline • Private • No Upload</p>
          <p>Built in Wana, Used Worldwide — wanalab.pk</p>
          <p style={{ marginTop: "10px" }}>AdSense: 4 slots per page | Daraz + Amazon Affiliate | JazzCash Premium</p>
        </footer>
      </div>
    </div>
  );
                     }
