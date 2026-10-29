import { useState } from 'react'

export default function App() {
  const tools = [
    "Image Compressor","Image Resizer","BG Remover","Image to PDF",
    "PDF to Image","Merge PDF","Split PDF","Compress PDF",
    "Word to PDF","PDF to Word","QR Generator","Password Generator",
    "Unit Converter","Age Calculator","BMI Calculator","Loan Calculator",
    "Text to Speech","Speech to Text","Color Picker","Gradient Generator",
    "JSON Formatter","HTML Minifier","Base64 Encoder","URL Shortener",
    "Word Counter","Case Converter","Lorem Generator","Hashtag Generator",
    "Invoice Generator","Resume Builder","YouTube Thumbnail Downloader","YouTube Tag Extractor",
    "Instagram Downloader","Meta Tag Generator","Robots.txt Generator","Sitemap Generator",
    "Plagiarism Checker","Grammar Checker","Typing Test","Wana AI Chat"
  ];
  const [q,setQ]=useState("");
  const list=tools.filter(t=>t.toLowerCase().includes(q.toLowerCase()));
  return (
    <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'system-ui'}}>
      <header style={{background:'#fff',borderBottom:'1px solid #e2e8f0',padding:'14px 16px',display:'flex',justifyContent:'space-between',maxWidth:'1200px',margin:'0 auto'}}>
        <b>Wana<span style={{color:'#2563eb'}}>Lab</span>.pk</b>
        <span style={{background:'#dcfce7',color:'#166534',padding:'4px 10px',borderRadius:'20px',fontSize:'12px'}}>40 Tools • Factory v2.3</span>
      </header>
      <main style={{maxWidth:'1200px',margin:'0 auto',padding:'24px 16px'}}>
        <div style={{textAlign:'center',margin:'24px 0'}}>
          <h1 style={{fontSize:'28px',fontWeight:'800'}}>All-in-One Tools - 40 Tools</h1>
          <p style={{color:'#64748b',marginTop:'6px'}}>Factory reset done - clean basic structure</p>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search 40 tools..." style={{marginTop:'16px',padding:'12px 18px',width:'100%',maxWidth:'380px',borderRadius:'12px',border:'1px solid #cbd5e1'}}/>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:'12px'}}>
          {list.map((t,i)=><div key={i} style={{background:'#fff',padding:'16px',borderRadius:'14px',border:'1px solid #e2e8f0'}}><div style={{fontSize:'20px'}}>🛠️</div><div style={{fontWeight:'600',fontSize:'14px',marginTop:'8px'}}>{t}</div><div style={{fontSize:'11px',color:'#94a3b8',marginTop:'4px'}}>Free • No Login</div></div>)}
        </div>
      </main>
    </div>
  )
          }
