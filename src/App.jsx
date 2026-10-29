import { useState } from 'react'

function Compressor(){
  const [a,setA]=useState(null);const [b,setB]=useState(null);
  const onFile=(e)=>{
    const f=e.target.files[0]; if(!f) return;
    setA(URL.createObjectURL(f));
    const r=new FileReader();
    r.onload=(ev)=>{
      const im=new Image();
      im.onload=()=>{
        const c=document.createElement('canvas'); c.width=im.width*0.6; c.height=im.height*0.6;
        c.getContext('2d').drawImage(im,0,0,c.width,c.height);
        setB(c.toDataURL('image/jpeg',0.6));
      }; im.src=ev.target.result;
    }; r.readAsDataURL(f);
  };
  return(<div style={{background:'#fff',padding:'20px',borderRadius:'16px'}}><h2>Image Compressor ✅</h2><input type="file" accept="image/*" onChange={onFile}/>{a&&<div style={{marginTop:'12px'}}><img src={a} style={{maxWidth:'180px'}}/> {b&&<><img src={b} style={{maxWidth:'180px'}}/><br/><a href={b} download="compressed.jpg" style={{background:'#2563eb',color:'#fff',padding:'8px 14px',borderRadius:'8px',textDecoration:'none'}}>Download</a></>}</div>}</div>)
}

function Resizer(){
  const [src,setSrc]=useState(null);const [w,setW]=useState(300);const [h,setH]=useState(300);const [out,setOut]=useState(null);
  const onFile=(e)=>{const f=e.target.files[0]; if(!f) return; const u=URL.createObjectURL(f); setSrc(u); const im=new Image(); im.onload=()=>{setW(im.width); setH(im.height);}; im.src=u; };
  const doResize=()=>{const im=new Image(); im.onload=()=>{const c=document.createElement('canvas'); c.width=w; c.height=h; c.getContext('2d').drawImage(im,0,0,w,h); setOut(c.toDataURL());}; im.src=src;};
  return(<div style={{background:'#fff',padding:'20px',borderRadius:'16px'}}><h2>Image Resizer ✅</h2><input type="file" accept="image/*" onChange={onFile}/>{src&&<><br/>W <input type="number" value={w} onChange={e=>setW(e.target.value)} style={{width:'70px'}}/> H <input type="number" value={h} onChange={e=>setH(e.target.value)} style={{width:'70px'}}/> <button onClick={doResize} style={{background:'#2563eb',color:'#fff',padding:'6px 12px',borderRadius:'6px',border:'none'}}>Resize</button><br/><img src={src} style={{maxWidth:'180px',marginTop:'10px'}}/>{out&&<><br/><img src={out} style={{maxWidth:'180px'}}/><br/><a href={out} download="resized.png" style={{background:'#16a34a',color:'#fff',padding:'8px 14px',borderRadius:'8px',textDecoration:'none'}}>Download</a></>}</>}</div>)
}

function BG(){
  const [out,setOut]=useState(null);
  const onFile=(e)=>{
    const f=e.target.files[0]; if(!f) return;
    const im=new Image(); im.onload=()=>{
      const c=document.createElement('canvas'); c.width=im.width; c.height=im.height;
      const x=c.getContext('2d'); x.drawImage(im,0,0);
      const d=x.getImageData(0,0,c.width,c.height);
      for(let i=0;i<d.data.length;i+=4){ if(d.data[i]>220&&d.data[i+1]>220&&d.data[i+2]>220) d.data[i+3]=0; }
      x.putImageData(d,0,0); setOut(c.toDataURL('image/png'));
    }; im.src=URL.createObjectURL(f);
  };
  return(<div style={{background:'#fff',padding:'20px',borderRadius:'16px'}}><h2>BG Remover ✅</h2><p style={{fontSize:'13px',color:'#666'}}>Removes white background to transparent</p><input type="file" accept="image/*" onChange={onFile}/>{out&&<><br/><div style={{background:'repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%) 0 0 / 20px 20px',display:'inline-block'}}><img src={out} style={{maxWidth:'250px'}}/></div><br/><a href={out} download="no-bg.png" style={{background:'#2563eb',color:'#fff',padding:'8px 14px',borderRadius:'8px',textDecoration:'none'}}>Download PNG</a></>}</div>)
}

export default function App(){
  const tools=["Image Compressor","Image Resizer","BG Remover","Image to PDF","PDF to Image","Merge PDF","Split PDF","Compress PDF","Word to PDF","PDF to Word","QR Generator","Password Generator","Unit Converter","Age Calculator","BMI Calculator","Loan Calculator","Text to Speech","Speech to Text","Color Picker","Gradient Generator","JSON Formatter","HTML Minifier","Base64 Encoder","URL Shortener","Word Counter","Case Converter","Lorem Generator","Hashtag Generator","Invoice Generator","Resume Builder","YouTube Thumbnail Downloader","YouTube Tag Extractor","Instagram Downloader","Meta Tag Generator","Robots.txt Generator","Sitemap Generator","Plagiarism Checker","Grammar Checker","Typing Test","Wana AI Chat"];
  const [q,setQ]=useState(""); const [act,setAct]=useState(null);
  const working=["Image Compressor","Image Resizer","BG Remover"];
  const list=tools.filter(t=>t.toLowerCase().includes(q.toLowerCase()));
  return(
    <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'system-ui'}}>
      <header style={{background:'#fff',padding:'14px 16px',display:'flex',justifyContent:'space-between',maxWidth:'1200px',margin:'0 auto',borderBottom:'1px solid #e2e8f0'}}>
        <b onClick={()=>setAct(null)} style={{cursor:'pointer'}}>Wana<span style={{color:'#2563eb'}}>Lab</span>.pk</b>
        <span style={{background:'#dcfce7',color:'#166534',padding:'4px 10px',borderRadius:'20px',fontSize:'12px'}}>3 Working • Factory Fixed</span>
      </header>
      <main style={{maxWidth:'1200px',margin:'0 auto',padding:'24px 16px'}}>
        {!act ? <>
          <div style={{textAlign:'center',margin:'20px 0'}}><h1>All-in-One Tools - 40 Tools</h1><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search..." style={{marginTop:'12px',padding:'10px 16px',width:'100%',maxWidth:'340px',borderRadius:'10px',border:'1px solid #cbd5e1'}}/></div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(170px,1fr))',gap:'10px'}}>{list.map((t,i)=><div key={i} onClick={()=>setAct(t)} style={{background:working.includes(t)?'#eff6ff':'#fff',padding:'14px',borderRadius:'12px',border:'1px solid',borderColor:working.includes(t)?'#2563eb':'#e2e8f0',cursor:'pointer'}}><div>{working.includes(t)?'✅':'🛠️'}</div><div style={{fontWeight:'600',fontSize:'13px',marginTop:'6px'}}>{t}</div><div style={{fontSize:'11px',color:'#888'}}>{working.includes(t)?'Working':'Soon'}</div></div>)}</div>
        </> : <>
          <button onClick={()=>setAct(null)} style={{marginBottom:'14px',padding:'6px 12px',borderRadius:'6px',border:'1px solid #ccc',background:'#fff'}}>← Back</button>
          {act==='Image Compressor'&&<Compressor/>}{act==='Image Resizer'&&<Resizer/>}{act==='BG Remover'&&<BG/>}{!working.includes(act)&&<div style={{background:'#fff',padding:'20px',borderRadius:'12px'}}><h2>{act}</h2><p>Coming next.</p></div>}
        </>}
      </main>
    </div>
  )
    }
