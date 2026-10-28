import { useState } from 'react'

function App() {
  const tools = [
    "Image Compressor", "Image Resizer", "BG Remover", "Image to PDF",
    "PDF to Image", "Merge PDF", "Split PDF", "Compress PDF",
    "Word to PDF", "PDF to Word", "QR Generator", "Password Generator",
    "Unit Converter", "Age Calculator", "BMI Calculator", "Loan Calculator",
    "Text to Speech", "Speech to Text", "Color Picker", "Gradient Generator",
    "JSON Formatter", "HTML Minifier", "Base64 Encoder", "URL Shortener",
    "Word Counter", "Case Converter", "Lorem Generator", "Hashtag Generator",
    "Invoice Generator", "Resume Builder", "YouTube Thumbnail Downloader", "YouTube Tag Extractor",
    "Instagram Downloader", "Meta Tag Generator", "Robots.txt Generator", "Sitemap Generator",
    "Plagiarism Checker", "Grammar Checker", "Typing Test", "Wana AI Chat"
  ];

  const [search, setSearch] = useState("");

  const filtered = tools.filter(t => t.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{minHeight:'100vh', background:'#f8fafc', fontFamily:'sans-serif'}}>
      <header style={{background:'white', borderBottom:'1px solid #e2e8f0', padding:'16px'}}>
        <div style={{maxWidth:'1200px', margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <h1 style={{fontWeight:'800', fontSize:'24px', color:'#0f172a'}}>Wana<span style={{color:'#2563eb'}}>Lab</span>.pk</h1>
          <span style={{background:'#dcfce7', color:'#166534', padding:'4px 12px', borderRadius:'20px', fontSize:'12px', fontWeight:'bold'}}>40 Tools • v2.3 Restored</span>
        </div>
      </header>

      <main style={{maxWidth:'1200px', margin:'0 auto', padding:'32px 16px'}}>
        <div style={{textAlign:'center', marginBottom:'32px'}}>
          <h2 style={{fontSize:'32px', fontWeight:'800', color:'#0f172a'}}>All-in-One Tools for Wana</h2>
          <p style={{color:'#64748b', marginTop:'8px'}}>Your site is back! Now working.</p>
          <input 
            value={search}
            onChange={e=>setSearch(e.target.value)}
            placeholder="Search 40 tools..."
            style={{marginTop:'20px', padding:'12px 20px', width:'100%', maxWidth:'400px', borderRadius:'12px', border:'1px solid #cbd5e1', outline:'none'}}
          />
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:'16px'}}>
          {filtered.map((tool, i) => (
            <div key={i} style={{background:'white', padding:'20px', borderRadius:'16px', border:'1px solid #e2e8f0', boxShadow:'0 1px 3px rgba(0,0,0,0.05)', cursor:'pointer'}}>
              <div style={{width:'40px', height:'40px', background:'#eff6ff', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'12px'}}>🛠️</div>
              <h3 style={{fontWeight:'600', color:'#0f172a', fontSize:'14px'}}>{tool}</h3>
              <p style={{fontSize:'12px', color:'#94a3b8', marginTop:'4px'}}>Free • No Login</p>
            </div>
          ))}
        </div>

        <div style={{textAlign:'center', marginTop:'40px', padding:'20px', background:'#0f172a', borderRadius:'16px', color:'white'}}>
          <p>✅ Main branch fixed! White screen gone.</p>
          <p style={{fontSize:'12px', color:'#94a3b8', marginTop:'8px'}}>Next: Test Upgrade-v3.3 on separate branch. Don't edit main again.</p>
        </div>
      </main>
    </div>
  )
}

export default App
