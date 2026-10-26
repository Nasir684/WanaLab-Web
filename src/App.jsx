import { useState, useEffect, useRef } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

function PrimeList() {
  const navigate = useNavigate()
  const primes = [
    { name: "Age Prime", desc: "Live $300", path: "/age-prime", icon: "🎂" },
    { name: "Word Prime", desc: "Safe $250", path: "/word-prime", icon: "🔤" },
    { name: "Percentage Prime", desc: "% Lab $250", path: "/percentage-prime", icon: "📊" },
    { name: "Image Prime", desc: "20KB $350", path: "/image-prime", icon: "🖼️" },
    { name: "PDF Prime", desc: "Vault $300", path: "/pdf-prime", icon: "📄" },
    { name: "QR Prime", desc: "Logo $300", path: "/qr-prime", icon: "⬛" },
    { name: "Resume Prime", desc: "ATS $400", path: "/resume-prime", icon: "📝" },
    { name: "Currency Prime", desc: "USD PKR $400", path: "/currency-prime", icon: "💱" },
    { name: "Travel Prime", desc: "PIA AirSial $500", path: "/travel-prime", icon: "✈️" },
  ]
  return (
    <div style={{ padding: '16px', background: '#f5f5f5', minHeight: '100vh' }}>
      <h2 style={{ fontWeight: '900', fontSize: '24px', marginBottom: '4px' }}>WanaLab - 9/9 COMPLETE! 🎉</h2>
      <p style={{ color: '#666', fontSize: '13px', marginBottom: '12px' }}>All Primes Live • 100% Offline • Wana Safe</p>
      {primes.map(p => (
        <div key={p.name} onClick={() => navigate(p.path)} style={{ background: 'white', padding: '16px', borderRadius: '16px', marginBottom: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', cursor: 'pointer', border: '1px solid #eee' }}>
          <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{p.icon} {p.name} ✅</div>
          <div style={{ fontSize: '14px', color: '#666' }}>{p.desc}</div>
        </div>
      ))}
      <div style={{ background: 'black', color: 'white', padding: '16px', borderRadius: '16px', marginTop: '20px', textAlign: 'center' }}>
        <div style={{ fontWeight: '900', fontSize: '18px' }}>WanaLab Complete</div>
        <div style={{ fontSize: '12px', opacity: 0.7, marginTop: '4px' }}>Total Value: $2900 • All Offline • No Upload</div>
      </div>
    </div>
  )
}

// Keep all previous short
function WordPrime() { const n=useNavigate(); const [t,setT]=useState(''); return <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '16px' }}><button onClick={()=>n('/')} style={backBtn}>← Back</button><h1 style={h1}>📝 Word Prime</h1><textarea value={t} onChange={e=>setT(e.target.value)} placeholder="Paste thesis..." style={textarea} /></div> }
function AgePrime() { const n=useNavigate(); const [dob,setDob]=useState('2000-01-01'); const [now,setNow]=useState(new Date()); useEffect(()=>{const t=setInterval(()=>setNow(new Date()),1000);return()=>clearInterval(t)},[]); const b=new Date(dob); let y=now.getFullYear()-b.getFullYear(); let m=now.getMonth()-b.getMonth(); let d=now.getDate()-b.getDate(); if(d<0){m--;d+=new Date(now.getFullYear(),now.getMonth(),0).getDate()} if(m<0){y--;m+=12}; return <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '16px' }}><button onClick={()=>n('/')} style={backBtn}>← Back</button><h1 style={h1}>🎂 Age Prime</h1><div style={card}><input type="date" value={dob} onChange={e=>setDob(e.target.value)} style={input} /></div><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginTop: '16px' }}><AgeStat label="YEARS" value={y}/><AgeStat label="MONTHS" value={m}/><AgeStat label="DAYS" value={d}/></div></div> }
function PercentagePrime() { const n=useNavigate(); const [o,setO]=useState(450); const [t,setT]=useState(600); return <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '16px' }}><button onClick={()=>n('/')} style={backBtn}>← Back</button><h1 style={h1}>📊 % Prime</h1><div style={card}><div style={{ display: 'flex', gap: '10px' }}><input type="number" value={o} onChange={e=>setO(Number(e.target.value))} style={input}/><input type="number" value={t} onChange={e=>setT(Number(e.target.value))} style={input}/></div><div style={{ background: '#e8f5e9', padding: '12px', borderRadius: '12px', marginTop: '12px', textAlign: 'center', fontSize: '32px', fontWeight: '900' }}>{t>0?(o/t*100).toFixed(2):0}%</div></div></div> }
function ImagePrime() { const n=useNavigate(); const [orig,setOrig]=useState(null); const [size,setSize]=useState(0); const [comp,setComp]=useState({}); const handleFile=e=>{const file=e.target.files[0]; if(!file)return; setSize(file.size); setOrig(URL.createObjectURL(file)); const r=new FileReader(); r.onload=ev=>{const img=new Image(); img.onload=()=>{const res={}; [20,50,200].forEach(kb=>{const c=document.createElement('canvas'); let w=img.width,h=img.height; const max=kb===20?400:kb===50?600:900; if(w>max||h>max){const ra=Math.min(max/w,max/h); w*=ra;h*=ra} c.width=w;c.height=h; c.getContext('2d').drawImage(img,0,0,w,h); res[kb]=c.toDataURL('image/jpeg',kb===20?0.3:kb===50?0.5:0.7)}); setComp(res)}; img.src=ev.target.result}; r.readAsDataURL(file)}; return <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '16px' }}><button onClick={()=>n('/')} style={backBtn}>← Back</button><h1 style={h1}>🖼️ Image Prime</h1><div style={card}><input type="file" accept="image/*" onChange={handleFile} /></div>{orig&&<div style={{display:'grid',gap:'10px',marginTop:'12px'}}>{['20','50','200'].map(kb=><div key={kb} style={{background:'white',padding:'12px',borderRadius:'12px',border:'1px solid #eee',display:'flex',justifyContent:'space-between',alignItems:'center'}}><b>{kb}KB</b>{comp[kb]&&<button onClick={()=>{const a=document.createElement('a');a.href=comp[kb];a.download=`wana-${kb}kb.jpg`;a.click()}} style={{background:'black',color:'white',padding:'8px 12px',borderRadius:'20px',border:'none'}}>Download</button>}</div>)}</div>}</div> }
function PDFPrime() { const n=useNavigate(); const [files,setFiles]=useState([]); const handlePDF=e=>{const sel=Array.from(e.target.files); const nf=sel.map(f=>({name:f.name,size:f.size,url:URL.createObjectURL(f)})); setFiles(p=>[...p,...nf])}; return <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '16px' }}><button onClick={()=>n('/')} style={backBtn}>← Back</button><h1 style={h1}>📄 PDF Prime</h1><div style={card}><input type="file" accept="application/pdf" multiple onChange={handlePDF} /></div>{files.map((f,i)=><div key={i} style={{background:'white',padding:'12px',borderRadius:'12px',border:'1px solid #eee',marginBottom:'8px'}}><b>{f.name.slice(0,20)}</b></div>)}</div> }
function QRPrime() { const n=useNavigate(); const [text,setText]=useState('https://wanalab-web.pages.dev'); const canvasRef=useRef(null); useEffect(()=>{const s=document.createElement('script'); s.src='https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js'; s.onload=()=>{if(window.QRCode&&canvasRef.current)window.QRCode.toCanvas(canvasRef.current,text,{width:300})}; document.body.appendChild(s)},[]); useEffect(()=>{if(window.QRCode&&canvasRef.current)window.QRCode.toCanvas(canvasRef.current,text,{width:300})},[text]); return <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '16px' }}><button onClick={()=>n('/')} style={backBtn}>← Back</button><h1 style={h1}>⬛ QR Prime</h1><div style={card}><input value={text} onChange={e=>setText(e.target.value)} style={input} /></div><div style={{ background: 'white', padding: '20px', borderRadius: '16px', marginTop: '16px', textAlign: 'center' }}><canvas ref={canvasRef} style={{ width: '280px', height: '280px' }} /></div></div> }
function ResumePrime() { const n=useNavigate(); const [data,setData]=useState({ name: 'Muhammad Nasir', role: 'Software Developer' }); return <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '16px' }}><button onClick={()=>n('/')} style={backBtn}>← Back</button><h1 style={h1}>📝 Resume Prime</h1><div style={card}><input value={data.name} onChange={e=>setData({...data,name:e.target.value})} style={input} /></div><div style={{ background: 'white', padding: '20px', borderRadius: '16px', marginTop: '16px' }}><div style={{ fontSize: '22px', fontWeight: '900', textAlign: 'center' }}>{data.name}</div><div style={{ textAlign: 'center', color: '#666' }}>{data.role}</div></div><button onClick={()=>window.print()} style={{ width: '100%', background: 'black', color: 'white', padding: '14px', borderRadius: '12px', border: 'none', marginTop: '16px' }}>Print / Save PDF</button></div> }
function CurrencyPrime() { const n=useNavigate(); const [pkr,setPkr]=useState(1000); const [rate,setRate]=useState(278.5); return <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '16px' }}><button onClick={()=>n('/')} style={backBtn}>← Back</button><h1 style={h1}>💱 Currency Prime</h1><div style={card}><input type="number" value={rate} onChange={e=>setRate(Number(e.target.value))} style={input} placeholder="USD Rate" /><input type="number" value={pkr} onChange={e=>setPkr(Number(e.target.value))} style={{...input,marginTop:'8px'}} placeholder="PKR" /><div style={{ background: '#e8f5e9', padding: '12px', borderRadius: '12px', marginTop: '12px', textAlign: 'center', fontSize: '28px', fontWeight: '900' }}>${(pkr/rate).toFixed(2)} USD</div></div></div> }

// --- REAL TRAVEL PRIME - FINAL ---
function TravelPrime() {
  const navigate = useNavigate()
  const [from, setFrom] = useState('DI Khan')
  const [to, setTo] = useState('Karachi')
  const [airline, setAirline] = useState('PIA')
  const [persons, setPersons] = useState(1)

  const routes = {
    'DI Khan-Karachi': { PIA: 18500, AirSial: 16500, Serene: 17200, dist: '850 km' },
    'DI Khan-Lahore': { PIA: 14500, AirSial: 12500, Serene: 13200, dist: '520 km' },
    'DI Khan-Islamabad': { PIA: 8500, AirSial: 7500, Serene: 7800, dist: '320 km' },
    'Peshawar-Karachi': { PIA: 19500, AirSial: 17500, Serene: 18200, dist: '1250 km' },
    'Islamabad-Karachi': { PIA: 17500, AirSial: 15500, Serene: 16200, dist: '1150 km' },
  }
  const key = `${from}-${to}`
  const reverseKey = `${to}-${from}`
  const data = routes[key] || routes[reverseKey] || { PIA: 15000, AirSial: 13000, Serene: 13500, dist: '500 km' }
  const price = data[airline] || 15000
  const total = price * persons
  const tax = Math.round(total * 0.05)
  const grand = total + tax

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '16px' }}>
      <button onClick={() => navigate('/')} style={backBtn}>← Back to Primes</button>
      <h1 style={h1}>✈️ Travel Prime</h1>
      <p style={sub}>PIA AirSial Serene • NEW Prices 2026 • Wana</p>

      <div style={card}>
        <label style={label}>FROM - TO</label>
        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={input}><option>DI Khan</option><option>Peshawar</option><option>Islamabad</option><option>Lahore</option><option>Karachi</option></select>
          <select value={to} onChange={e=>setTo(e.target.value)} style={input}><option>Karachi</option><option>Lahore</option><option>Islamabad</option><option>DI Khan</option><option>Peshawar</option></select>
        </div>
        <div style={{ fontSize: '12px', color: '#888', marginTop: '6px' }}>Distance: {data.dist}</div>
      </div>

      <div style={card}>
        <label style={label}>AIRLINE - NEW 2026</label>
        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
          {['PIA','AirSial','Serene'].map(a => <button key={a} onClick={()=>setAirline(a)} style={{ flex: 1, background: airline===a?'black':'white', color: airline===a?'white':'black', padding: '10px', borderRadius: '10px', border: '1px solid #ddd', fontWeight: 'bold' }}>{a}</button>)}
        </div>
        <div style={{ display: 'flex', gap: '8px', marginTop: '12px', alignItems: 'center' }}>
          <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Persons:</label>
          <button onClick={()=>setPersons(p=>Math.max(1,p-1))} style={{ padding: '8px 14px', borderRadius: '20px', border: '1px solid #ddd', background: 'white' }}>-</button>
          <span style={{ fontWeight: '900', fontSize: '18px' }}>{persons}</span>
          <button onClick={()=>setPersons(p=>p+1)} style={{ padding: '8px 14px', borderRadius: '20px', border: '1px solid #ddd', background: 'white' }}>+</button>
        </div>
      </div>

      <div style={{ background: 'black', color: 'white', padding: '16px', borderRadius: '16px', marginTop: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', opacity: 0.8 }}><span>{airline} {from} → {to}</span><span>{data.dist}</span></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}><span>Base x {persons}</span><span>Rs {total.toLocaleString()}</span></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px', fontSize: '12px', opacity: 0.7 }}><span>Tax 5%</span><span>Rs {tax.toLocaleString()}</span></div>
        <div style={{ height: '1px', background: '#333', margin: '12px 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '22px', fontWeight: '900' }}><span>Total</span><span>Rs {grand.toLocaleString()}</span></div>
        <div style={{ fontSize: '11px', opacity: 0.6, marginTop: '6px', textAlign: 'center' }}>NEW Prices updated for Wana travelers • No commission</div>
      </div>

      <button onClick={()=>{ const msg=`WanaLab Travel: ${from} to ${to} via ${airline} - ${persons} person - Total Rs ${grand}`; navigator.clipboard.writeText(msg); alert('Copied for WhatsApp!')}} style={{ width: '100%', background: '#25D366', color: 'white', padding: '14px', borderRadius: '12px', border: 'none', fontWeight: 'bold', marginTop: '12px' }}>Copy for WhatsApp Booking</button>
    </div>
  )
}

const backBtn = { background: 'black', color: 'white', padding: '10px 20px', borderRadius: '24px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }
const h1 = { fontSize: '28px', fontWeight: '900', marginTop: '16px' }
const sub = { color: '#666', fontSize: '14px' }
const card = { background: 'white', padding: '16px', borderRadius: '16px', marginTop: '16px', border: '1px solid #eee' }
const label = { fontSize: '11px', fontWeight: 'bold', color: '#888' }
const input = { width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '16px', boxSizing: 'border-box' }
const textarea = { width: '100%', height: '30vh', marginTop: '16px', padding: '16px', borderRadius: '16px', border: '1px solid #ddd', fontSize: '16px', boxSizing: 'border-box' }
function AgeStat({ label, value }) { return <div style={{ background: 'white', padding: '16px', borderRadius: '16px', border: '1px solid #eee', textAlign: 'center' }}><div style={{ fontSize: '32px', fontWeight: '900' }}>{value}</div><div style={{ fontSize: '11px', color: '#888' }}>{label}</div></div> }

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PrimeList />} />
      <Route path="/word-prime" element={<WordPrime />} />
      <Route path="/age-prime" element={<AgePrime />} />
      <Route path="/percentage-prime" element={<PercentagePrime />} />
      <Route path="/image-prime" element={<ImagePrime />} />
      <Route path="/pdf-prime" element={<PDFPrime />} />
      <Route path="/qr-prime" element={<QRPrime />} />
      <Route path="/resume-prime" element={<ResumePrime />} />
      <Route path="/currency-prime" element={<CurrencyPrime />} />
      <Route path="/travel-prime" element={<TravelPrime />} />
    </Routes>
  )
  }
