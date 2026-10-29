import { useState } from 'react'

export default function App(){
  const [active,setActive]=useState(null)
  const [q,setQ]=useState("")
  const tools=["Image Compressor","Image Resizer","BG Remover","Image to PDF","PDF to Image","Merge PDF","Split PDF","Compress PDF","Word to PDF","PDF to Word","QR Generator","Password Generator","Unit Converter","Age Calculator","BMI Calculator","Loan Calculator","Text to Speech","Speech to Text","Color Picker","Gradient Generator","JSON Formatter","HTML Minifier","Base64 Encoder","URL Shortener","Word Counter","Case Converter","Lorem Generator","Hashtag Generator","Invoice Generator","Resume Builder","YouTube Thumbnail Downloader","YouTube Tag Extractor","Instagram Downloader","Meta Tag Generator","Robots.txt Generator","Sitemap Generator","Plagiarism Checker","Grammar Checker","Typing Test","Wana AI Chat"]
  
  const Compressor=()=>{
    const [out,setOut]=useState(null)
    return (<div style={{background:'#fff',padding:'20px',borderRadius:'12px'}}><h2>Image Compressor - LIVE</h2><input type="file" accept="image/*" onChange={(e)=>{
      const f=e.target.files[0]; const r=new FileReader();
      r.onload=(ev)=>{ const im=new Image(); im.onload=()=>{
        const c=document.createElement('canvas'); c.width=im.width*0.5; c.height=im.height*0.5;
        c.getContext('2d').drawImage(im,0,0,c.width,c.height); setOut(c.toDataURL('image/jpeg',0.5))
      }; im.src=ev.target.result; }; r.readAsDataURL(f);
    }}/>{out&&<><br/><img src={out} width="200"/><br/><a href={out} download="c.jpg" style={{background:'blue',color:'white',padding:'8px',borderRadius:'6px',textDecoration:'none'}}>Download</a></>}</div>)
  }

  const list=tools.filter(t=>t.toLowerCase().includes(q.toLowerCase()))
  
  return(
    <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'system-ui'}}>
      <header style={{background:'#fff',padding:'14px',display:'flex',justifyContent:'space-between',maxWidth:'1200px',margin:'0 auto'}}>
        <b onClick={()=>setActive(null)}>WanaLab.pk</b>
        <span style={{background:'#dcfce7',padding:'4px 10px',borderRadius:'20px',fontSize:'12px'}}>CHECK: If you see this text, new code is LIVE</span>
      </header>
      <main style={{maxWidth:'1200px',margin:'0 auto',padding:'20px'}}>
        {!active ? <>
          <h1 style={{textAlign:'center'}}>40 Tools - TEST</h1>
          <div style={{textAlign:'center'}}><input value={q} onChange={e=>setQ(e.target.value)} placeholder="search" style={{padding:'10px',width:'300px',borderRadius:'8px',border:'1px solid #ccc'}}/></div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',gap:'10px',marginTop:'20px'}}>
            {list.map((t,i)=><div key={i} onClick={()=>setActive(t)} style={{background:'#fff',padding:'14px',borderRadius:'10px',border:'1px solid #ddd',cursor:'pointer'}}>{t} {t==="Image Compressor"&&"✅ LIVE"}</div>)}
          </div>
        </> : <>
          <button onClick={()=>setActive(null)} style={{marginBottom:'10px'}}>← Back</button>
          {active==="Image Compressor" ? <Compressor/> : <div style={{background:'#fff',padding:'20px'}}><h2>{active}</h2><p>Coming soon</p></div>}
        </>}
      </main>
    </div>
  )
}
