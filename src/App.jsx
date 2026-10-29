import { useState } from 'react'

function ImageCompressor() {
  const [img, setImg] = useState(null);
  const [out, setOut] = useState(null);
  const handle = (e) => {
    const file = e.target.files[0]; if(!file) return;
    setImg(URL.createObjectURL(file));
    const reader = new FileReader();
    reader.onload = (ev) => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = image.width * 0.6; canvas.height = image.height * 0.6;
        canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
        setOut(canvas.toDataURL('image/jpeg', 0.6));
      }; image.src = ev.target.result;
    }; reader.readAsDataURL(file);
  };
  return (
    <div style={{background:'#fff', padding:'20px', borderRadius:'16px', border:'1px solid #e2e8f0'}}>
      <h2 style={{fontWeight:'800'}}>Image Compressor</h2>
      <input type="file" accept="image/*" onChange={handle} style={{margin:'16px 0'}}/>
      {img && <div style={{display:'flex', gap:'12px', flexWrap:'wrap'}}><div><p>Original</p><img src={img} style={{maxWidth:'200px'}}/></div>{out && <div><p>Compressed</p><img src={out} style={{maxWidth:'200px'}}/><br/><a href={out} download="compressed.jpg" style={{display:'inline-block', marginTop:'8px', background:'#2563eb', color:'#fff', padding:'8px 16px', borderRadius:'8px', textDecoration:'none'}}>Download</a></div>}</div>}
    </div>
  )
}

function ImageResizer() {
  const [img, setImg] = useState(null);
  const [w, setW] = useState(300);
  const [h, setH] = useState(300);
  const [out, setOut] = useState(null);
  const handle = (e) => {
    const file = e.target.files[0]; if(!file) return;
    const url = URL.createObjectURL(file);
    setImg(url);
    const im = new Image(); im.onload = () => { setW(im.width); setH(im.height); }; im.src = url;
  };
  const resize = () => {
    const image = new Image(); image.onload = () => {
      const canvas = document.createElement('canvas'); canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(image, 0,0,w,h); setOut(canvas.toDataURL('image/png'));
    }; image.src = img;
  };
  return (
    <div style={{background:'#fff', padding:'20px', borderRadius:'16px', border:'1px solid #e2e8f0'}}>
      <h2 style={{fontWeight:'800'}}>Image Resizer - Working</h2>
      <input type="file" accept="image/*" onChange={handle} style={{margin:'16px 0'}}/>
      {img && <>
        <div style={{display:'flex', gap:'10px', alignItems:'center', margin:'12px 0'}}>
          Width: <input type="number" value={w} onChange={e=>setW(e.target.value)} style={{width:'80px', padding:'6px', border:'1px solid #ccc', borderRadius:'6px'}}/>
          Height: <input type="number" value={h} onChange={e=>setH(e.target.value)} style={{width:'80px', padding:'6px', border:'1px solid #ccc', borderRadius:'6px'}}/>
          <button onClick={resize} style={{background:'#2563eb', color:'#fff', padding:'8px 14px', borderRadius:'8px', border:'none'}}>Resize</button>
        </div>
        <img src={img} style={{maxWidth:'200px'}}/>
        {out && <div style={{marginTop:'12px'}}><p>Resized {w}x{h}</p><img src={out} style={{maxWidth:'200px', border:'1px solid #ddd'}}/><br/><a href={out} download="resized.png" style={{display:'inline-block', marginTop:'8px', background:'#16a34a', color:'#fff', padding:'8px 16px', borderRadius:'8px', textDecoration:'none'}}>Download</a></div>}
      </>}
    </div>
  )
}

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
  const [q,setQ]=useState(""); const [active,setActive]=useState(null);
  const list=tools.filter(t=>t.toLowerCase().includes(q.toLowerCase()));
  const isWorking = (t) => ["Image Compressor","Image Resizer"].includes(t);
  return (
    <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'system-ui'}}>
      <header style={{background:'#fff',borderBottom:'1px solid #e2e8f0',padding:'14px 16px',display:'flex',justifyContent:'space-between',maxWidth:'1200px',margin:'0 auto'}}>
        <b onClick={()=>setActive(null)} style={{cursor:'pointer'}}>Wana<span style={{color:'#2563eb'}}>Lab</span>.pk</b>
        <span style={{background:'#dcfce7',color:'#166534',padding:'4px 10px',borderRadius:'20px',fontSize:'12px'}}>40 Tools • 2 Working</span>
      </header>
      <main style={{maxWidth:'1200px',margin:'0 auto',padding:'24px 16px'}}>
        {!active ? (
          <>
            <div style={{textAlign:'center',margin:'24px 0'}}>
              <h1 style={{fontSize:'28px',fontWeight:'800'}}>All-in-One Tools - 40 Tools</h1>
              <p style={{color:'#64748b'}}>2 tools working, 38 coming</p>
              <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search 40 tools..." style={{marginTop:'16px',padding:'12px 18px',width:'100%',maxWidth:'380px',borderRadius:'12px',border:'1px solid #cbd5e1'}}/>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:'12px'}}>
              {list.map((t,i)=><div key={i} onClick={()=>setActive(t)} style={{background:'#fff',padding:'16px',borderRadius:'14px',border:'1px solid', cursor:'pointer', backgroundColor: isWorking(t) ? '#eff6ff' : '#fff', borderColor: isWorking(t) ? '#2563eb' : '#e2e8f0'}}><div style={{fontSize:'20px'}}>{isWorking(t) ? '✅' : '🛠️'}</div><div style={{fontWeight:'600',fontSize:'14px',marginTop:'8px'}}>{t}</div><div style={{fontSize:'11px',color:'#94a3b8',marginTop:'4px'}}>{isWorking(t) ? 'Working' : 'Coming soon'}</div></div>)}
            </div>
          </>
        ) : (
          <>
            <button onClick={()=>setActive(null)} style={{marginBottom:'16px', padding:'8px 16px', borderRadius:'8px', border:'1px solid #cbd5e1', background:'#fff', cursor:'pointer'}}>← Back</button>
            {active === 'Image Compressor' && <ImageCompressor/>}
            {active === 'Image Resizer' && <ImageResizer/>}
            {!isWorking(active) && <div style={{background:'#fff', padding:'20px', borderRadius:'16px'}}><h2>{active}</h2><p>Coming in next update.</p></div>}
          </>
        )}
      </main>
    </div>
  )
                                                                        }
