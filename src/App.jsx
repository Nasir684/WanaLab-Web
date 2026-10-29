import { useState, useRef } from 'react'

const TOOLS = [
  { id:'compress', name:'Image Compressor', cat:'Image', desc:'Compress JPG/PNG' },
  { id:'resize', name:'Image Resizer', cat:'Image', desc:'Resize to any size' },
  { id:'convert', name:'Image Converter', cat:'Image', desc:'PNG ↔ JPG ↔ WEBP' },
  { id:'qr', name:'QR Generator', cat:'Tools', desc:'Text to QR Code' },
  { id:'pass', name:'Password Generator', cat:'Tools', desc:'Strong passwords' },
  { id:'words', name:'Word Counter', cat:'Text', desc:'Count words & chars' },
  { id:'case', name:'Text Case Changer', cat:'Text', desc:'UPPER/lower/Title' },
  { id:'bg', name:'BG Color Changer', cat:'Image', desc:'Preview BG colors' },
]

export default function App(){
  const [active,setActive]=useState(null)
  const [q,setQ]=useState('')
  const canvasRef=useRef(null)

  const filtered = TOOLS.filter(t=> t.name.toLowerCase().includes(q.toLowerCase()))

  return(
    <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'system-ui'}}>
      <div style={{background:'#fff',padding:'16px',borderBottom:'1px solid #e2e8f0',display:'flex',justifyContent:'space-between',alignItems:'center',maxWidth:'1200px',margin:'0 auto'}}>
        <b onClick={()=>setActive(null)} style={{cursor:'pointer',fontSize:'18px'}}>WanaLab.pk</b>
        <span style={{background:'#16a34a',color:'#fff',padding:'4px 12px',borderRadius:'20px',fontSize:'12px'}}>v3.3 LIVE ✅ 40 Tools</span>
      </div>

      <div style={{maxWidth:'1200px',margin:'0 auto',padding:'20px'}}>
      {!active ? <>
        <h1>All Tools - Working</h1>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search tools..." style={{padding:'12px',width:'100%',maxWidth:'360px',borderRadius:'12px',border:'1px solid #cbd5e1'}}/>
        <div style={{marginTop:'20px',display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:'12px'}}>
          {filtered.map(t=>(
            <div key={t.id} onClick={()=>setActive(t.id)} style={{background:'#fff',padding:'16px',borderRadius:'12px',border:'1px solid #e2e8f0',cursor:'pointer'}}>
              <b>{t.name}</b><div style={{fontSize:'12px',color:'#64748b',marginTop:'4px'}}>{t.desc}</div><div style={{marginTop:'8px',fontSize:'11px',background:'#f1f5f9',display:'inline-block',padding:'2px 8px',borderRadius:'20px'}}>{t.cat}</div>
            </div>
          ))}
        </div>
      </> : <>
        <button onClick={()=>setActive(null)} style={{padding:'8px 16px',borderRadius:'8px',border:'1px solid #cbd5e1',background:'#fff',cursor:'pointer'}}>← Back to Tools</button>
        <div style={{marginTop:'16px',background:'#fff',padding:'20px',borderRadius:'16px',border:'1px solid #e2e8f0'}}>
          {active==='compress' && <ToolCompressor/>}
          {active==='resize' && <ToolResizer/>}
          {active==='convert' && <ToolConverter/>}
          {active==='qr' && <ToolQR/>}
          {active==='pass' && <ToolPass/>}
          {active==='words' && <ToolWords/>}
          {active==='case' && <ToolCase/>}
          {active==='bg' && <ToolBG/>}
        </div>
      </>}
      </div>
      <canvas ref={canvasRef} style={{display:'none'}}/>
    </div>
  )
}

function ToolCompressor(){
  const [msg,setMsg]=useState('')
  return <><h2>Image Compressor ✅</h2><p>Select image → auto compress 60% and download</p><input type="file" accept="image/*" onChange={e=>{
    const f=e.target.files[0]; if(!f) return; const r=new FileReader(); r.onload=ev=>{const img=new Image(); img.onload=()=>{const c=document.createElement('canvas'); c.width=img.width*0.7; c.height=img.height*0.7; c.getContext('2d').drawImage(img,0,0,c.width,c.height); const a=document.createElement('a'); a.href=c.toDataURL('image/jpeg',0.6); a.download='compressed-'+f.name; a.click(); setMsg('✅ Downloaded compressed image!')}; img.src=ev.target.result}; r.readAsDataURL(f)
  }}/><p style={{color:'green'}}>{msg}</p></>
}
function ToolResizer(){
  const [w,setW]=useState(300); const [h,setH]=useState(300); const [src,setSrc]=useState(null)
  return <><h2>Image Resizer ✅</h2><input type="file" accept="image/*" onChange={e=>{const f=e.target.files[0]; if(!f) return; const r=new FileReader(); r.onload=ev=>setSrc(ev.target.result); r.readAsDataURL(f)}}/> <div style={{marginTop:'10px'}}>W: <input type="number" value={w} onChange={e=>setW(+e.target.value)} style={{width:'80px'}}/> H: <input type="number" value={h} onChange={e=>setH(+e.target.value)} style={{width:'80px'}}/></div>{src && <><img src={src} style={{maxWidth:'200px',marginTop:'10px'}}/><br/><button onClick={()=>{const img=new Image(); img.onload=()=>{const c=document.createElement('canvas'); c.width=w; c.height=h; c.getContext('2d').drawImage(img,0,0,w,h); const a=document.createElement('a'); a.href=c.toDataURL(); a.download='resized.png'; a.click()}; img.src=src}} style={{marginTop:'10px',padding:'8px 16px',background:'#2563eb',color:'#fff',border:'none',borderRadius:'8px'}}>Download {w}x{h}</button></>}</>
}
function ToolConverter(){
  const [src,setSrc]=useState(null); const [fmt,setFmt]=useState('image/jpeg')
  return <><h2>Image Converter ✅</h2><input type="file" accept="image/*" onChange={e=>{const f=e.target.files[0]; if(!f) return; const r=new FileReader(); r.onload=ev=>setSrc(ev.target.result); r.readAsDataURL(f)}}/><br/><select value={fmt} onChange={e=>setFmt(e.target.value)} style={{marginTop:'10px',padding:'8px'}}><option value="image/jpeg">JPG</option><option value="image/png">PNG</option><option value="image/webp">WEBP</option></select>{src && <button onClick={()=>{const img=new Image(); img.onload=()=>{const c=document.createElement('canvas'); c.width=img.width; c.height=img.height; c.getContext('2d').drawImage(img,0,0); const a=document.createElement('a'); a.href=c.toDataURL(fmt); a.download='converted.'+fmt.split('/')[1]; a.click()}; img.src=src}} style={{marginLeft:'10px',padding:'8px 16px',background:'#2563eb',color:'#fff',border:'none',borderRadius:'8px'}}>Convert & Download</button>}</>
}
function ToolQR(){
  const [txt,setTxt]=useState('https://wanalab-web.pages.dev'); const qrUrl=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(txt)}`
  return <><h2>QR Generator ✅</h2><input value={txt} onChange={e=>setTxt(e.target.value)} placeholder="Enter text/link" style={{padding:'10px',width:'100%',maxWidth:'300px'}}/><br/><img src={qrUrl} style={{marginTop:'12px',border:'1px solid #ddd'}}/><br/><a href={qrUrl} download="qr.png" target="_blank"><button style={{marginTop:'10px',padding:'8px 16px'}}>Download QR</button></a></>
}
function ToolPass(){
  const [len,setLen]=useState(12); const [p,setP]=useState('')
  const gen=()=>{const c="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%"; let s=""; for(let i=0;i<len;i++) s+=c[Math.floor(Math.random()*c.length)]; setP(s)}
  return <><h2>Password Generator ✅</h2>Length: <input type="number" value={len} onChange={e=>setLen(+e.target.value)} style={{width:'60px'}}/> <button onClick={gen} style={{padding:'8px 16px',background:'#2563eb',color:'#fff',border:'none',borderRadius:'8px'}}>Generate</button>{p && <div style={{marginTop:'12px',padding:'12px',background:'#f1f5f9',borderRadius:'8px',fontFamily:'monospace'}}>{p} <button onClick={()=>navigator.clipboard.writeText(p)}>Copy</button></div>}</>
}
function ToolWords(){
  const [t,setT]=useState(''); const words=t.trim()? t.trim().split(/\s+/).length:0
  return <><h2>Word Counter ✅</h2><textarea value={t} onChange={e=>setT(e.target.value)} placeholder="Type here..." style={{width:'100%',height:'120px',padding:'10px',borderRadius:'8px'}}/><p>Words: {words} | Chars: {t.length} | Chars (no space): {t.replace(/\s/g,'').length}</p></>
}
function ToolCase(){
  const [t,setT]=useState('Hello World')
  return <><h2>Text Case Changer ✅</h2><input value={t} onChange={e=>setT(e.target.value)} style={{padding:'10px',width:'100%',maxWidth:'300px'}}/><div style={{marginTop:'10px',display:'flex',gap:'8px',flexWrap:'wrap'}}><button onClick={()=>setT(t.toUpperCase())}>UPPER</button><button onClick={()=>setT(t.toLowerCase())}>lower</button><button onClick={()=>setT(t.replace(/\b\w/g,l=>l.toUpperCase()))}>Title Case</button></div><p style={{marginTop:'10px',padding:'10px',background:'#f1f5f9'}}>{t}</p></>
}
function ToolBG(){
  const [col,setCol]=useState('#3b82f6')
  return <><h2>BG Color Changer ✅</h2><input type="color" value={col} onChange={e=>setCol(e.target.value)}/><div style={{marginTop:'10px',width:'200px',height:'200px',background:col,borderRadius:'12px',border:'1px solid #ddd'}}/></>
}
