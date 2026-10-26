import { useState, useEffect, useRef } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// ==================== LOCK 2: UPDATE CHECKER ====================
function UpdateChecker() {
  const [hasUpdate, setHasUpdate] = useState(false)
  const CURRENT_VERSION = "2.1.0" // Change every deploy

  useEffect(() => {
    const saved = localStorage.getItem('wanalab_version')
    if (saved && saved !== CURRENT_VERSION) setHasUpdate(true)
    localStorage.setItem('wanalab_version', CURRENT_VERSION)
    fetch('/version.json?v=' + Date.now()).then(r=>r.json()).then(d=>{ if(d.version !== CURRENT_VERSION) setHasUpdate(true) }).catch(()=>{})
  }, [])

  if (!hasUpdate) return null
  return (
    <div style={{ background: '#000', color: '#fff', padding: '12px 16px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', border: '2px solid #25D366' }}>
      <div><div style={{ fontWeight: '800', fontSize: '13px' }}>🚀 New Update Available!</div><div style={{ fontSize: '11px', opacity: 0.7 }}>WanaLab v{CURRENT_VERSION} • New tools added</div></div>
      <button onClick={()=>window.location.reload()} style={{ background: '#25D366', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '20px', fontWeight: 'bold', fontSize: '12px' }}>Update</button>
    </div>
  )
}

// ==================== LOCK 1: AUTH BAR (Simple - No Firebase yet) ====================
function AuthBar() {
  const [user, setUser] = useState(null)
  useEffect(()=>{ const saved = localStorage.getItem('wanalab_user'); if(saved) setUser(JSON.parse(saved)) },[])
  const login = () => {
    const name = prompt("Enter your name for WanaLab (offline save):")
    if(!name) return
    const u = { name, id: Date.now() }
    localStorage.setItem('wanalab_user', JSON.stringify(u))
    setUser(u)
  }
  const logout = () => { localStorage.removeItem('wanalab_user'); setUser(null) }
  return (
    <div style={{ background: 'white', padding: '10px 16px', borderRadius: '12px', border: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
      {user ? <><span style={{ fontSize: '13px', fontWeight: '600' }}>👋 {user.name} • Wana</span><button onClick={logout} style={{ background: 'black', color: 'white', padding: '6px 12px', borderRadius: '20px', border: 'none', fontSize: '12px' }}>Logout</button></> : <><span style={{ fontSize: '13px' }}>Save your work offline</span><button onClick={login} style={{ background: 'black', color: 'white', padding: '6px 12px', borderRadius: '20px', border: 'none', fontSize: '12px' }}>Login</button></>}
    </div>
  )
}

function PrimeList() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('All')
  const [deferredPrompt, setDeferredPrompt] = useState(null)

  useEffect(() => { window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); setDeferredPrompt(e) }) }, [])

  const install = () => {
    if (deferredPrompt) deferredPrompt.prompt()
    else alert('Chrome menu (⋮) → Add to Home screen')
  }
  const shareApp = () => {
    const data = { title: 'WanaLab', text: '9 offline tools for Wana & DI Khan - Vault safe!', url: window.location.origin }
    if (navigator.share) navigator.share(data)
    else { navigator.clipboard.writeText(window.location.origin); alert('Link copied!') }
  }

  const primes = [
    { name: "Age Prime", desc: "Exact years months days live", path: "/age-prime", icon: "🎂", cat: "Life Tools" },
    { name: "Word Prime", desc: "Thesis safe offline counter", path: "/word-prime", icon: "🔤", cat: "Study" },
    { name: "Percentage Prime", desc: "Marks and percentage lab", path: "/percentage-prime", icon: "📊", cat: "Study" },
    { name: "Image Prime", desc: "Compress to 20KB 50KB 200KB", path: "/image-prime", icon: "🖼️", cat: "Files" },
    { name: "PDF Prime", desc: "Vault view no upload safe", path: "/pdf-prime", icon: "📄", cat: "Files" },
    { name: "QR Prime", desc: "QR with logo inside", path: "/qr-prime", icon: "⬛", cat: "Business" },
    { name: "Resume Prime", desc: "ATS templates clean", path: "/resume-prime", icon: "📝", cat: "Business" },
    { name: "Currency Prime", desc: "USD PKR SAR AED plus RPM", path: "/currency-prime", icon: "💱", cat: "Business" },
    { name: "Travel Prime", desc: "PIA AirSial Serene routes", path: "/travel-prime", icon: "✈️", cat: "Travel" },
  ]

  const categories = ['All', 'Study', 'Files', 'Business', 'Life Tools', 'Travel']
  const filtered = primes.filter(p => (cat==='All'||p.cat===cat) && (p.name.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase())))

  return (
    <div style={{ padding: '16px', background: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ background: 'black', color: 'white', padding: '20px', borderRadius: '20px', marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div><h1 style={{ fontWeight: '900', fontSize: '28px', margin: 0 }}>WanaLab</h1><p style={{ opacity: 0.7, fontSize: '13px', margin: '4px 0 0 0' }}>9 Primes • Offline • Vault Safe • Engineered in WANA</p></div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={shareApp} style={{ background: '#25D366', color: 'white', border: 'none', padding: '10px 12px', borderRadius: '20px', fontWeight: 'bold' }}>Share</button>
            <button onClick={install} style={{ background: 'white', color: 'black', border: 'none', padding: '10px 12px', borderRadius: '20px', fontWeight: 'bold' }}>Install</button>
          </div>
        </div>
        <div style={{ marginTop: '14px', position: 'relative' }}>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search tools..." style={{ width: '100%', padding: '12px 16px 12px 40px', borderRadius: '12px', border: 'none', fontSize: '15px', boxSizing: 'border-box' }} />
          <span style={{ position: 'absolute', left: '12px', top: '12px' }}>🔍</span>
        </div>
      </div>

      <UpdateChecker />
      <AuthBar />

      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '8px' }}>
        {categories.map(c => <button key={c} onClick={()=>setCat(c)} style={{ background: cat===c?'black':'white', color: cat===c?'white':'black', padding: '8px 16px', borderRadius: '20px', border: '1px solid #e0e0e0', fontWeight: '600', fontSize: '13px', whiteSpace: 'nowrap' }}>{c}</button>)}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {filtered.map(p => (
          <div key={p.name} onClick={() => navigate(p.path)} style={{ background: 'white', padding: '16px', borderRadius: '16px', border: '1px solid #eee', cursor: 'pointer' }}>
            <div style={{ fontSize: '28px' }}>{p.icon}</div>
            <div style={{ fontWeight: '800', fontSize: '15px', marginTop: '8px' }}>{p.name}</div>
            <div style={{ fontSize: '12px', color: '#777', marginTop: '4px' }}>{p.desc}</div>
            <div style={{ fontSize: '10px', color: '#aaa', marginTop: '8px', fontWeight: '600' }}>{p.cat}</div>
          </div>
        ))}
      </div>

      <div style={{ background: 'white', padding: '12px', borderRadius: '12px', border: '1px dashed #ddd', marginTop: '20px', textAlign: 'center', fontSize: '11px', color: '#aaa' }}>Ad Space - WanaLab Sponsored</div>

      <div style={{ background: 'white', padding: '16px', borderRadius: '16px', border: '1px solid #eee', marginTop: '16px', textAlign: 'center' }}>
        <div style={{ fontWeight: '800' }}>WanaLab.pk — Independent Research Lab, WANA</div>
        <div style={{ fontSize: '12px', color: '#777', marginTop: '4px' }}>Built in Wana, Used Worldwide • Offline • Private • No Upload</div>
      </div>
    </div>
  )
}

function WordPrime() { const n=useNavigate(); const [t,setT]=useState(''); return <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '16px' }}><button onClick={()=>n('/')} style={backBtn}>← Back</button><h1 style={h1}>Word Prime</h1><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '16px' }}><Stat label="Words" value={t.trim()?t.trim().split(/\s+/).length:0}/><Stat label="Chars" value={t.length}/></div><textarea value={t} onChange={e=>setT(e.target.value)} placeholder="Paste thesis... offline safe" style={textarea} /></div> }
function AgePrime() { const n=useNavigate(); const [dob,setDob]=useState('2000-01-01'); const [now,setNow]=useState(new Date()); useEffect(()=>{const ti=setInterval(()=>setNow(new Date()),1000);return()=>clearInterval(ti)},[]); const b=new Date(dob); let y=now.getFullYear()-b.getFullYear(); let m=now.getMonth()-b.getMonth(); let d=now.getDate()-b.getDate(); if(d<0){m--;d+=new Date(now.getFullYear(),now.getMonth(),0).getDate()} if(m<0){y--;m+=12}; return <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '16px' }}><button onClick={()=>n('/')} style={backBtn}>← Back</button><h1 style={h1}>Age Prime</h1><div style={card}><input type="date" value={dob} onChange={e=>setDob(e.target.value)} style={input} /></div><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginTop: '16px' }}><AgeStat label="YEARS" value={y}/><AgeStat label="MONTHS" value={m}/><AgeStat label="DAYS" value={d}/></div></div> }
function PercentagePrime() { const n=useNavigate(); const [o,setO]=useState(450); const [t,setT]=useState(600); return <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '16px' }}><button onClick={()=>n('/')} style={backBtn}>← Back</button><h1 style={h1}>Percentage Prime</h1><div style={card}><div style={{ display: 'flex', gap: '10px' }}><input type="number" value={o} onChange={e=>setO(Number(e.target.value))} style={input}/><input type="number" value={t} onChange={e=>setT(Number(e.target.value))} style={input}/></div><div style={{ background: '#e8f5e9', padding: '12px', borderRadius: '12px', marginTop: '12px', textAlign: 'center', fontSize: '32px', fontWeight: '900' }}>{t>0?(o/t*100).toFixed(2):0}%</div></div></div> }
function ImagePrime() { const n=useNavigate(); const [orig,setOrig]=useState(null); const [comp,setComp]=useState({}); const handleFile=e=>{const file=e.target.files[0]; if(!file)return; setOrig(URL.createObjectURL(file)); const r=new FileReader(); r.onload=ev=>{const img=new Image(); img.onload=()=>{const res={}; [20,50,200].forEach(kb=>{const c=document.createElement('canvas'); let w=img.width,h=img.height; const max=kb===20?400:kb===50?600:900; if(w>max||h>max){const ra=Math.min(max/w,max/h); w*=ra;h*=ra} c.width=w;c.height=h; c.getContext('2d').drawImage(img,0,0,w,h); res[kb]=c.toDataURL('image/jpeg',kb===20?0.3:kb===50?0.5:0.7)}); setComp(res)}; img.src=ev.target.result}; r.readAsDataURL(file)}; return <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '16px' }}><button onClick={()=>n('/')} style={backBtn}>← Back</button><h1 style={h1}>Image Prime</h1><div style={card}><input type="file" accept="image/*" onChange={handleFile} /></div>{orig&&<div style={{display:'grid',gap:'10px',marginTop:'12px'}}>{['20','50','200'].map(kb=><div key={kb} style={{background:'white',padding:'12px',borderRadius:'12px',border:'1px solid #eee',display:'flex',justifyContent:'space-between',alignItems:'center'}}><b>{kb}KB</b>{comp[kb]&&<button onClick={()=>{const a=document.createElement('a');a.href=comp[kb];a.download=`wana-${kb}kb.jpg`;a.click()}} style={{background:'black',color:'white',padding:'8px 12px',borderRadius:'20px',border:'none'}}>Download</button>}</div>)}</div>}</div> }
function PDFPrime() { const n=useNavigate(); const [files,setFiles]=useState([]); const [preview,setPreview]=useState(null); const handlePDF=e=>{const sel=Array.from(e.target.files); const nf=sel.map(f=>({name:f.name,size:f.size,url:URL.createObjectURL(f)})); setFiles(p=>[...p,...nf])}; return <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '16px' }}><button onClick={()=>n('/')} style={backBtn}>← Back</button><h1 style={h1}>PDF Prime</h1><div style={card}><input type="file" accept="application/pdf" multiple onChange={handlePDF} /></div>{files.map((f,i)=><div key={i} style={{background:'white',padding:'12px',borderRadius:'12px',border:'1px solid #eee',marginBottom:'8px',display:'flex',justifyContent:'space-between'}}><b style={{fontSize:'14px'}}>{f.name.slice(0,25)}</b><button onClick={()=>setPreview(f)} style={{background:'#e3f2fd',color:'#1976d2',padding:'8px 12px',borderRadius:'20px',border:'none'}}>View</button></div>)}{preview&&<iframe src={preview.url} style={{width:'100%',height:'60vh',border:'none',borderRadius:'12px',marginTop:'8px'}} />}</div> }
function QRPrime() { const n=useNavigate(); const [text,setText]=useState('https://wanalab-web.pages.dev'); const [logo,setLogo]=useState(null); const canvasRef=useRef(null); useEffect(()=>{const s=document.createElement('script'); s.src='https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js'; s.onload=()=>draw(); document.body.appendChild(s)},[]); useEffect(()=>{draw()},[text,logo]); const draw=()=>{if(!canvasRef.current||!window.QRCode)return; window.QRCode.toCanvas(canvasRef.current,text||'WanaLab',{width:300,margin:2},()=>{if(logo){const ctx=canvasRef.current.getContext('2d'); const img=new Image(); img.onload=()=>{const size=60; const x=(canvasRef.current.width-size)/2; const y=(canvasRef.current.height-size)/2; ctx.fillStyle='white'; ctx.fillRect(x-4,y-4,size+8,size+8); ctx.drawImage(img,x,y,size,size)}; img.src=logo}})}; return <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '16px' }}><button onClick={()=>n('/')} style={backBtn}>← Back</button><h1 style={h1}>QR Prime</h1><div style={card}><input value={text} onChange={e=>setText(e.target.value)} style={input} /></div><div style={card}><input type="file" accept="image/*" onChange={e=>setLogo(URL.createObjectURL(e.target.files[0]))} /></div><div style={{ background: 'white', padding: '20px', borderRadius: '16px', marginTop: '16px', textAlign: 'center' }}><canvas ref={canvasRef} style={{ width: '280px', height: '280px' }} /><button onClick={()=>{const a=document.createElement('a'); a.href=canvasRef.current.toDataURL(); a.download='wana-qr.png'; a.click()}} style={{ background: 'black', color: 'white', padding: '10px 20px', borderRadius: '20px', border: 'none', marginTop: '12px' }}>Download</button></div></div> }
function ResumePrime() { const n=useNavigate(); const [data,setData]=useState({ name: 'Muhammad Nasir', role: 'Software Developer' }); return <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '16px' }}><button onClick={()=>n('/')} style={backBtn}>← Back</button><h1 style={h1}>Resume Prime</h1><div style={card}><input value={data.name} onChange={e=>setData({...data,name:e.target.value})} style={input} /></div><div style={{ background: 'white', padding: '20px', borderRadius: '16px', marginTop: '16px' }}><div style={{ fontSize: '22px', fontWeight: '900', textAlign: 'center' }}>{data.name}</div><div style={{ textAlign: 'center', color: '#666' }}>{data.role}</div></div><button onClick={()=>window.print()} style={{ width: '100%', background: 'black', color: 'white', padding: '14px', borderRadius: '12px', border: 'none', marginTop: '16px' }}>Print / Save PDF</button></div> }
function CurrencyPrime() { const n=useNavigate(); const [pkr,setPkr]=useState(1000); const [rate,setRate]=useState(278.5); return <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '16px' }}><button onClick={()=>n('/')} style={backBtn}>← Back</button><h1 style={h1}>Currency Prime</h1><div style={card}><input type="number" value={rate} onChange={e=>setRate(Number(e.target.value))} style={input} /><input type="number" value={pkr} onChange={e=>setPkr(Number(e.target.value))} style={{...input,marginTop:'8px'}} /><div style={{ background: '#e8f5e9', padding: '12px', borderRadius: '12px', marginTop: '12px', textAlign: 'center', fontSize: '28px', fontWeight: '900' }}>${(pkr/rate).toFixed(2)} USD</div></div></div> }
function TravelPrime() { const n=useNavigate(); const [from,setFrom]=useState('DI Khan'); const [to,setTo]=useState('Karachi'); const [airline,setAirline]=useState('PIA'); const [persons,setPersons]=useState(1); const routes={'DI Khan-Karachi':{PIA:18500,AirSial:16500,Serene:17200,dist:'850 km'},'DI Khan-Lahore':{PIA:14500,AirSial:12500,Serene:13200,dist:'520 km'}}; const key=`${from}-${to}`; const rev=`${to}-${from}`; const data=routes[key]||routes[rev]||{PIA:15000,AirSial:13000,Serene:13500,dist:'500 km'}; const price=data[airline]||15000; const total=price*persons; return <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '16px' }}><button onClick={()=>n('/')} style={backBtn}>← Back</button><h1 style={h1}>Travel Prime</h1><div style={card}><div style={{ display: 'flex', gap: '8px' }}><select value={from} onChange={e=>setFrom(e.target.value)} style={input}><option>DI Khan</option><option>Karachi</option><option>Lahore</option></select><select value={to} onChange={e=>setTo(e.target.value)} style={input}><option>Karachi</option><option>Lahore</option><option>DI Khan</option></select></div><div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>{['PIA','AirSial','Serene'].map(a=><button key={a} onClick={()=>setAirline(a)} style={{ flex: 1, background: airline===a?'black':'white', color: airline===a?'white':'black', padding: '10px', borderRadius: '10px', border: '1px solid #ddd', fontWeight: 'bold' }}>{a}</button>)}</div></div><div style={{ background: 'black', color: 'white', padding: '16px', borderRadius: '16px', marginTop: '16px' }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><span>{airline} {from} → {to}</span><span>Rs {total.toLocaleString()}</span></div></div></div> }

const backBtn = { background: 'black', color: 'white', padding: '10px 20px', borderRadius: '24px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }
const h1 = { fontSize: '28px', fontWeight: '900', marginTop: '16px' }
const card = { background: 'white', padding: '16px', borderRadius: '16px', marginTop: '16px', border: '1px solid #eee' }
const input = { width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '16px', boxSizing: 'border-box' }
const textarea = { width: '100%', height: '30vh', marginTop: '16px', padding: '16px', borderRadius: '16px', border: '1px solid #ddd', fontSize: '16px', boxSizing: 'border-box' }
function Stat({ label, value }) { return <div style={{ background: 'white', padding: '12px', borderRadius: '12px', border: '1px solid #eee', textAlign: 'center' }}><div style={{ fontSize: '22px', fontWeight: '800' }}>{value}</div><div style={{ fontSize: '11px', color: '#888' }}>{label}</div></div> }
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
