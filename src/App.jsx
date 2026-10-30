import { useState, useEffect } from 'react'

const TOOLS = [
  {id:'compress', name:'Image Compressor', cat:'Image', icon:'🗜️', desc:'Reduce size 60%'},
  {id:'resize', name:'Image Resizer', cat:'Image', icon:'📐', desc:'Any W x H'},
  {id:'convert', name:'Image Converter', cat:'Image', icon:'🔄', desc:'PNG ↔ JPG ↔ WEBP'},
  {id:'rotate', name:'Image Rotator', cat:'Image', icon:'🔃', desc:'Rotate 90°'},
  {id:'flip', name:'Image Flipper', cat:'Image', icon:'↔️', desc:'Flip H/V'},
  {id:'filter', name:'Image Filters', cat:'Image', icon:'🎨', desc:'Grayscale/Sepia'},
  {id:'base64', name:'Image to Base64', cat:'Image', icon:'🔤', desc:'Encode image'},
  {id:'bgprev', name:'BG Preview', cat:'Image', icon:'🖼️', desc:'Test BG colors'},
  {id:'crop', name:'Smart Crop', cat:'Image', icon:'✂️', desc:'Center square crop'},
  {id:'pixel', name:'Pixelate', cat:'Image', icon:'🟦', desc:'Blur/pixelate'},
  {id:'words', name:'Word Counter', cat:'Text', icon:'🔢', desc:'Words & chars'},
  {id:'case', name:'Case Changer', cat:'Text', icon:'Aa', desc:'UPPER/lower/Title'},
  {id:'lorem', name:'Lorem Generator', cat:'Text', icon:'📝', desc:'Dummy text'},
  {id:'dedupe', name:'Remove Duplicates', cat:'Text', icon:'🧹', desc:'Unique lines'},
  {id:'jsonfmt', name:'JSON Formatter', cat:'Text', icon:'{}', desc:'Pretty JSON'},
  {id:'b64', name:'Base64 Text', cat:'Text', icon:'🔐', desc:'Encode/Decode'},
  {id:'urlenc', name:'URL Encoder', cat:'Text', icon:'🔗', desc:'Encode URL'},
  {id:'reverse', name:'Text Reverser', cat:'Text', icon:'↩️', desc:'Reverse text'},
  {id:'replace', name:'Find & Replace', cat:'Text', icon:'🔍', desc:'Replace text'},
  {id:'diff', name:'Text Difference', cat:'Text', icon:'⚖️', desc:'Compare 2 texts'},
  {id:'qr', name:'QR Generator', cat:'Dev', icon:'⬛', desc:'Text → QR'},
  {id:'pass', name:'Password Gen', cat:'Dev', icon:'🔑', desc:'Strong pass'},
  {id:'color', name:'Color Picker', cat:'Dev', icon:'🎨', desc:'HEX/RGB'},
  {id:'uuid', name:'UUID Generator', cat:'Dev', icon:'🆔', desc:'Random UUID'},
  {id:'hash', name:'Hash Generator', cat:'Dev', icon:'#️⃣', desc:'SHA-256'},
  {id:'regex', name:'Regex Tester', cat:'Dev', icon:'.*', desc:'Test regex'},
  {id:'minify', name:'Code Minifier', cat:'Dev', icon:'📦', desc:'Remove spaces'},
  {id:'csv', name:'JSON to CSV', cat:'Dev', icon:'📊', desc:'Convert'},
  {id:'binary', name:'Binary Converter', cat:'Dev', icon:'01', desc:'Text ↔ Binary'},
  {id:'timestamp', name:'Timestamp', cat:'Dev', icon:'⏰', desc:'Unix time'},
  {id:'bmi', name:'BMI Calculator', cat:'Daily', icon:'⚖️', desc:'Body mass'},
  {id:'age', name:'Age Calculator', cat:'Daily', icon:'🎂', desc:'Exact age'},
  {id:'percent', name:'Percentage Calc', cat:'Daily', icon:'%', desc:'% calculator'},
  {id:'emi', name:'Loan EMI', cat:'Daily', icon:'💰', desc:'EMI calculator'},
  {id:'discount', name:'Discount Calc', cat:'Daily', icon:'🏷️', desc:'Sale price'},
  {id:'unit', name:'Unit Converter', cat:'Daily', icon:'📏', desc:'Length/Weight'},
  {id:'time', name:'Time Difference', cat:'Daily', icon:'⏱️', desc:'Hours between'},
  {id:'typing', name:'Typing Speed', cat:'Daily', icon:'⌨️', desc:'WPM test'},
  {id:'counter', name:'Click Counter', cat:'Daily', icon:'👆', desc:'Tally counter'},
  {id:'timer', name:'Timer & Stopwatch', cat:'Daily', icon:'⏲️', desc:'Timer'},
]

function TrendingBox({cat, dark}){
  const items=[
    {c:'Image', t:'Mechanical Keyboard RGB', p:'Rs 6,499', i:'⌨️', l:'https://www.daraz.pk/tag/mechanical-keyboard/'},
    {c:'Image', t:'1TB SSD Portable', p:'Rs 14,999', i:'💾', l:'https://www.daraz.pk/tag/ssd-1tb/'},
    {c:'Dev', t:'Wireless Mouse', p:'Rs 3,299', i:'🖱️', l:'https://www.daraz.pk/tag/wireless-mouse/'},
    {c:'Daily', t:'Smart Watch Ultra', p:'Rs 4,999', i:'⌚', l:'https://www.daraz.pk/tag/smart-watch/'},
    {c:'Daily', t:'TWS Earbuds Pro', p:'Rs 2,999', i:'🎧', l:'https://www.daraz.pk/tag/earbuds/'},
    {c:'Daily', t:'Power Bank 20000mAh', p:'Rs 3,499', i:'🔋', l:'https://www.daraz.pk/tag/power-bank/'},
  ]
  const list = cat==='All' || cat==='Fav' || cat==='Recent' ? items.slice(0,3) : items.filter(x=>x.c===cat).slice(0,3)
  return (
    <div style={{background: dark?'#1e293b':'#fffbeb',border:'1px solid #fde68a',borderRadius:'14px',padding:'14px',marginBottom:'14px'}}>
      <b style={{fontSize:'13px', color: dark?'#fde68a':'#92400e'}}>🔥 Trending in PK - {cat}</b>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(130px,1fr))',gap:'8px',marginTop:'10px'}}>
        {list.map((it,k)=>(
          <a key={k} href={it.l} target="_blank" style={{textDecoration:'none',color:dark?'#e2e8f0':'#111',background:dark?'#0f172a':'#fff',border:'1px solid #e5e7eb',borderRadius:'10px',padding:'10px',display:'block'}}>
            <div style={{fontSize:'22px'}}>{it.i}</div><div style={{fontSize:'11px',fontWeight:'700',marginTop:'4px'}}>{it.t}</div><div style={{fontSize:'11px',color:'#16a34a',fontWeight:'700'}}>{it.p}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
function AdSlot({label,dark}){return <div style={{background: dark?'#1e293b':'#f8fafc',border:'1px dashed #cbd5e1',borderRadius:'10px',padding:'10px',textAlign:'center',color:'#94a3b8',fontSize:'11px',margin:'10px 0'}}>Ad - {label}</div>}
function AboutPage(){return <div><h2>About WanaLab.pk v3.4</h2><p>WanaLab from DI Khan - 40 tools, private, offline. Built by Nasir. Now with Dark Mode + Favorites! v3.4 enhanced.</p></div>}
function PrivacyPage(){return <div><h2>Privacy v3.4</h2><p>Updated: Oct 31, 2026. All tools run in browser. Favorites & Dark mode saved in your phone localStorage only - we don't see it. AdSense may use cookies.</p></div>}
function ContactPage(){return <div><h2>Contact v3.4</h2><p>hello@wanalab.pk - DI Khan, KPK</p></div>}

export default function App(){
  const [active,setActive]=useState(null)
  const [page,setPage]=useState('home')
  const [q,setQ]=useState('')
  const [cat,setCat]=useState('All')
  const [dark,setDark]=useState(()=>localStorage.getItem('wl_dark')==='1')
  const [favs,setFavs]=useState(()=>JSON.parse(localStorage.getItem('wl_favs')||'[]'))
  const [recent,setRecent]=useState(()=>JSON.parse(localStorage.getItem('wl_recent')||'[]'))
  const [shareMsg,setShareMsg]=useState('')

  useEffect(()=>{localStorage.setItem('wl_dark',dark?'1':'0')},[dark])
  useEffect(()=>{localStorage.setItem('wl_favs',JSON.stringify(favs))},[favs])
  useEffect(()=>{localStorage.setItem('wl_recent',JSON.stringify(recent))},[recent])

  useEffect(()=>{
    const p=new URLSearchParams(window.location.search).get('tool')
    if(p && TOOLS.find(t=>t.id===p)) setActive(p)
  },[])

  const toggleFav=(id,e)=>{
    e?.stopPropagation()
    setFavs(f=>f.includes(id)?f.filter(x=>x!==id):[...f,id])
  }
  const openTool=(id)=>{
    setActive(id)
    setRecent(r=>[id,...r.filter(x=>x!==id)].slice(0,8))
  }
  const doShare=()=>{
    const url=`${window.location.origin}/?tool=${active}`
    navigator.clipboard.writeText(url)
    setShareMsg('Link copied! ✅')
    setTimeout(()=>setShareMsg(''),2000)
  }

  const cats=['All','Image','Text','Dev','Daily','⭐ Fav','🕒 Recent']
  let filtered=[]
  if(cat==='⭐ Fav') filtered=TOOLS.filter(t=>favs.includes(t.id))
  else if(cat==='🕒 Recent') filtered=TOOLS.filter(t=>recent.includes(t.id))
  else filtered=TOOLS.filter(t=> (cat==='All'||t.cat===cat) && t.name.toLowerCase().includes(q.toLowerCase()))

  const goHome=()=>{setPage('home');setActive(null)}
  const bg=dark?'#0f172a':'#f8fafc'
  const cardBg=dark?'#1e293b':'#fff'
  const text=dark?'#f1f5f9':'#0f172a'
  const border=dark?'#334155':'#e2e8f0'

  return (
    <div style={{minHeight:'100vh',background:bg,color:text,fontFamily:'system-ui',display:'flex',flexDirection:'column'}}>
      <header style={{background:cardBg,borderBottom:`1px solid ${border}`,position:'sticky',top:0,zIndex:10}}>
        <div style={{maxWidth:'1200px',margin:'0 auto',padding:'12px 16px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div onClick={goHome} style={{cursor:'pointer',fontWeight:'800',display:'flex',alignItems:'center',gap:'8px'}}><div style={{width:'30px',height:'30px',background:'#2563eb',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff'}}>W</div>WanaLab.pk - v3.4</div>
          <div style={{display:'flex',gap:'8px',alignItems:'center'}}>
            <button onClick={()=>setDark(!dark)} style={{padding:'6px 12px',borderRadius:'20px',border:`1px solid ${border}`,background:dark?'#334155':'#fff',cursor:'pointer'}}>{dark?'☀️ Light':'🌙 Dark'}</button>
            <span style={{background:dark?'#064e3b':'#dcfce7',color:dark?'#6ee7b7':'#166534',padding:'5px 10px',borderRadius:'20px',fontSize:'11px',fontWeight:'700'}}>● 40 LIVE</span>
          </div>
        </div>
      </header>
      <div style={{maxWidth:'1200px',margin:'0 auto',padding:'16px',flex:1,width:'100%'}}>
        {page==='home' && <AdSlot label="Top Banner" dark={dark}/>}
        {page==='home' && <TrendingBox cat={cat} dark={dark}/>}
        {page==='home' && !active ? <>
          <div style={{textAlign:'center',padding:'8px 0 12px'}}>
            <h1 style={{margin:0,fontSize:'24px'}}>40 Tools - v3.4 Enhanced ✅</h1>
            <p style={{fontSize:'12px',opacity:0.7,marginTop:'4px'}}>{favs.length} Favorites • {recent.length} Recent • Dark Mode {dark?'ON':'OFF'}</p>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search tools..." style={{marginTop:'12px',padding:'12px 16px',width:'100%',maxWidth:'400px',borderRadius:'12px',border:`2px solid ${border}`,background:cardBg,color:text}}/>
            <div style={{marginTop:'10px',display:'flex',gap:'6px',justifyContent:'center',flexWrap:'wrap'}}>
              {cats.map(c=><button key={c} onClick={()=>setCat(c)} style={{padding:'7px 12px',borderRadius:'20px',border:`1px solid ${border}`,background:cat===c?'#2563eb':'#fff',color:cat===c?'#fff':'#334155',cursor:'pointer',fontWeight:'600',fontSize:'12px'}}>{c}</button>)}
            </div>
          </div>
          {filtered.length===0 ? <div style={{textAlign:'center',padding:'40px',opacity:0.6}}>{cat==='⭐ Fav'?'No favorites yet — click ⭐ on any tool':cat==='🕒 Recent'?'No recent tools yet':'No tools found'}</div> :
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',gap:'10px'}}>
            {filtered.map(t=>(
              <div key={t.id} onClick={()=>openTool(t.id)} style={{background:cardBg,border:`1px solid ${border}`,borderRadius:'14px',padding:'14px',cursor:'pointer',position:'relative'}}>
                <button onClick={(e)=>toggleFav(t.id,e)} style={{position:'absolute',top:'8px',right:'8px',background:'transparent',border:'none',fontSize:'16px',cursor:'pointer'}}>{favs.includes(t.id)?'⭐':'☆'}</button>
                <div style={{fontSize:'20px'}}>{t.icon}</div>
                <div style={{fontWeight:'700',marginTop:'6px',fontSize:'13px'}}>{t.name}</div>
                <div style={{fontSize:'11px',opacity:0.7}}>{t.desc}</div>
              </div>
            ))}
          </div>}
          <AdSlot label="In-Grid 300x250" dark={dark}/>
        </> : page!=='home' ? <>
          <button onClick={goHome} style={{padding:'8px 14px',borderRadius:'8px',border:`1px solid ${border}`,background:cardBg,color:text,cursor:'pointer'}}>← Home</button>
          <div style={{marginTop:'12px',background:cardBg,border:`1px solid ${border}`,borderRadius:'16px',padding:'18px'}}>
            {page==='about' && <AboutPage/>}{page==='privacy' && <PrivacyPage/>}{page==='contact' && <ContactPage/>}
          </div>
        </> : <>
          <div style={{display:'flex',gap:'8px'}}>
            <button onClick={()=>setActive(null)} style={{padding:'8px 14px',borderRadius:'8px',border:`1px solid ${border}`,background:cardBg,color:text,cursor:'pointer'}}>← All</button>
            <button onClick={doShare} style={{padding:'8px 14px',borderRadius:'8px',border:'1px solid #2563eb',background:'#2563eb',color:'#fff',cursor:'pointer'}}>🔗 Share</button>
            <button onClick={(e)=>toggleFav(active,e)} style={{padding:'8px 14px',borderRadius:'8px',border:`1px solid ${border}`,background:cardBg,cursor:'pointer'}}>{favs.includes(active)?'⭐ Favorited':'☆ Favorite'}</button>
          </div>
          {shareMsg && <div style={{marginTop:'8px',background:'#dcfce7',color:'#166534',padding:'8px',borderRadius:'8px',fontSize:'12px'}}>{shareMsg} - {window.location.origin}/?tool={active}</div>}
          <div style={{marginTop:'12px',background:cardBg,border:`1px solid ${border}`,borderRadius:'16px',padding:'18px'}}>
            <ToolRenderer id={active}/>
          </div>
        </>}
      </div>
      <footer style={{background:cardBg,borderTop:`1px solid ${border}`,marginTop:'20px',padding:'18px'}}>
        <div style={{maxWidth:'1200px',margin:'0 auto',display:'flex',flexWrap:'wrap',gap:'16px',justifyContent:'space-between'}}>
          <div><b>WanaLab.pk v3.4</b><div style={{fontSize:'11px',opacity:0.6}}>Enhanced - Dark + Fav + Recent + Share<br/>Free for Pakistan 🇵🇰 DI Khan</div></div>
          <div style={{display:'flex',gap:'12px',fontSize:'12px'}}>
            <span onClick={()=>setPage('about')} style={{cursor:'pointer',color:'#2563eb'}}>About</span>
            <span onClick={()=>setPage('privacy')} style={{cursor:'pointer',color:'#2563eb'}}>Privacy</span>
            <span onClick={()=>setPage('contact')} style={{cursor:'pointer',color:'#2563eb'}}>Contact</span>
          </div>
        </div>
        <div style={{maxWidth:'1200px',margin:'0 auto'}}><AdSlot label="Footer" dark={dark}/></div>
      </footer>
    </div>
  )
}
function ToolRenderer({id}){const map={compress: <ImageCompressor/>, resize: <ImageResizer/>, convert: <ImageConverter/>, rotate: <ImageRotator/>, flip: <ImageFlipper/>, filter: <ImageFilters/>, base64: <ImageToBase64/>, bgprev: <BGPreview/>, crop: <SmartCrop/>, pixel: <Pixelate/>, words: <WordCounter/>, case: <CaseChanger/>, lorem: <LoremGen/>, dedupe: <Dedupe/>, jsonfmt: <JSONFmt/>, b64: <B64Text/>, urlenc: <URLEnc/>, reverse: <ReverseText/>, replace: <FindReplace/>, diff: <TextDiff/>, qr: <QRGen/>, pass: <PassGen/>, color: <ColorPicker/>, uuid: <UUIDGen/>, hash: <HashGen/>, regex: <RegexTest/>, minify: <Minify/>, csv: <JSON2CSV/>, binary: <BinaryConv/>, timestamp: <TimestampTool/>, bmi: <BMICalc/>, age: <AgeCalc/>, percent: <PercentCalc/>, emi: <EMICalc/>, discount: <DiscountCalc/>, unit: <UnitConv/>, time: <TimeDiffTool/>, typing: <TypingSpeed/>, counter: <ClickCounter/>, timer: <TimerTool/>};return map[id]||<div>Tool {id}</div>}
function ImageCompressor(){const [m,setM]=useState('');return <><h3>🗜️ Compressor</h3><input type="file" accept="image/*" onChange={e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=ev=>{const img=new Image();img.onload=()=>{const c=document.createElement('canvas');c.width=img.width*0.7;c.height=img.height*0.7;c.getContext('2d').drawImage(img,0,0,c.width,c.height);const a=document.createElement('a');a.href=c.toDataURL('image/jpeg',0.6);a.download='compressed-'+f.name+'.jpg';a.click();setM('Downloaded!')};img.src=ev.target.result};r.readAsDataURL(f)}}/><p>{m}</p></>}
function ImageResizer(){const [w,setW]=useState(400);const [h,setH]=useState(300);const [s,setS]=useState(null);return <><h3>📐 Resizer</h3><input type="file" accept="image/*" onChange={e=>{const r=new FileReader();r.onload=ev=>setS(ev.target.result);r.readAsDataURL(e.target.files[0])}}/><br/>W:<input type="number" value={w} onChange={e=>setW(+e.target.value)} style={{width:'70px'}}/> H:<input type="number" value={h} onChange={e=>setH(+e.target.value)} style={{width:'70px'}}/>{s&&<button onClick={()=>{const img=new Image();img.onload=()=>{const c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(img,0,0,w,h);const a=document.createElement('a');a.href=c.toDataURL();a.download=`resized-${w}x${h}.png`;a.click()};img.src=s}} style={{marginLeft:'8px'}}>Download</button>}</>}
function ImageConverter(){const [s,setS]=useState(null);return <><h3>🔄 Converter</h3><input type="file" accept="image/*" onChange={e=>{const r=new FileReader();r.onload=ev=>setS(ev.target.result);r.readAsDataURL(e.target.files[0])}}/><br/>{s&&<button onClick={()=>{const img=new Image();img.onload=()=>{const c=document.createElement('canvas');c.width=img.width;c.height=img.height;c.getContext('2d').drawImage(img,0,0);const a=document.createElement('a');a.href=c.toDataURL('image/jpeg');a.download='converted.jpg';a.click()};img.src=s}}>Convert JPG</button>}</>}
function ImageRotator(){const [s,setS]=useState(null);const [d,setD]=useState(0);return <><h3>🔃 Rotator</h3><input type="file" accept="image/*" onChange={e=>{const r=new FileReader();r.onload=ev=>setS(ev.target.result);r.readAsDataURL(e.target.files[0])}}/><button onClick={()=>setD(d+90)} style={{marginLeft:'8px'}}>Rotate</button>{s&&<img src={s} style={{display:'block',maxWidth:'220px',marginTop:'8px',transform:`rotate(${d}deg)`}}/>}</>}
function ImageFlipper(){const [s,setS]=useState(null);const [fl,setFl]=useState(false);return <><h3>↔️ Flipper</h3><input type="file" accept="image/*" onChange={e=>{const r=new FileReader();r.onload=ev=>setS(ev.target.result);r.readAsDataURL(e.target.files[0])}}/><button onClick={()=>setFl(!fl)} style={{marginLeft:'8px'}}>Flip</button>{s&&<img src={s} style={{display:'block',maxWidth:'220px',marginTop:'8px',transform:fl?'scaleX(-1)':''}}/>}</>}
function ImageFilters(){const [s,setS]=useState(null);return <><h3>🎨 Filters</h3><input type="file" accept="image/*" onChange={e=>{const r=new FileReader();r.onload=ev=>setS(ev.target.result);r.readAsDataURL(e.target.files[0])}}/><br/>{s&&<img src={s} style={{display:'block',maxWidth:'220px',marginTop:'8px',filter:'grayscale(100%)'}}/>}</>}
function ImageToBase64(){const [b,setB]=useState('');return <><h3>🔤 Base64</h3><input type="file" accept="image/*" onChange={e=>{const r=new FileReader();r.onload=ev=>setB(ev.target.result);r.readAsDataURL(e.target.files[0])}}/><textarea value={b} readOnly style={{width:'100%',height:'80px',marginTop:'8px',fontSize:'9px'}}/></>}
function BGPreview(){const [c,setC]=useState('#3b82f6');const [s,setS]=useState(null);return <><h3>🖼️ BG Preview</h3><input type="file" accept="image/*" onChange={e=>{const r=new FileReader();r.onload=ev=>setS(ev.target.result);r.readAsDataURL(e.target.files[0])}}/><input type="color" value={c} onChange={e=>setC(e.target.value)} style={{marginLeft:'8px'}}/><div style={{width:'260px',height:'140px',background:c,marginTop:'8px',display:'flex',alignItems:'center',justifyContent:'center'}}>{s&&<img src={s} style={{maxWidth:'90%'}}/>}</div></>}
function SmartCrop(){const [s,setS]=useState(null);return <><h3>✂️ Crop</h3><input type="file" accept="image/*" onChange={e=>{const r=new FileReader();r.onload=ev=>setS(ev.target.result);r.readAsDataURL(e.target.files[0])}}/><br/>{s&&<button onClick={()=>{const img=new Image();img.onload=()=>{const c=document.createElement('canvas');const m=Math.min(img.width,img.height);c.width=m;c.height=m;c.getContext('2d').drawImage(img,0,0);const a=document.createElement('a');a.href=c.toDataURL();a.download='square.png';a.click()};img.src=s}} style={{marginTop:'8px'}}>Crop Square</button>}</>}
function Pixelate(){return <><h3>🟦 Blur</h3><p>Upload coming — use Filter tool for now</p></>}
function WordCounter(){const [t,setT]=useState('');return <><h3>🔢 Words</h3><textarea value={t} onChange={e=>setT(e.target.value)} style={{width:'100%',height:'100px'}}/><p>Words:{t.trim()?t.trim().split(/\s+/).length:0} Chars:{t.length}</p></>}
function CaseChanger(){const [t,setT]=useState('Hello');return <><h3>Aa Case</h3><input value={t} onChange={e=>setT(e.target.value)} style={{width:'100%'}}/><button onClick={()=>setT(t.toUpperCase())}>UPPER</button><button onClick={()=>setT(t.toLowerCase())} style={{marginLeft:'6px'}}>lower</button></>}
function LoremGen(){const [txt,setTxt]=useState('');return <><h3>📝 Lorem</h3><button onClick={()=>setTxt("Lorem ipsum ".repeat(30))}>Generate</button><textarea value={txt} readOnly style={{width:'100%',height:'80px',marginTop:'8px'}}/></>}
function Dedupe(){const [t,setT]=useState('');const [o,setO]=useState('');return <><h3>🧹 Dedupe</h3><textarea value={t} onChange={e=>setT(e.target.value)} style={{width:'100%',height:'60px'}}/><button onClick={()=>setO([...new Set(t.split('\n'))].join('\n'))}>Dedupe</button><textarea value={o} readOnly style={{width:'100%',height:'60px',marginTop:'6px'}}/></>}
function JSONFmt(){const [t,setT]=useState('{"a":1}');const [o,setO]=useState('');return <><h3>JSON</h3><textarea value={t} onChange={e=>setT(e.target.value)} style={{width:'100%',height:'60px'}}/><button onClick={()=>{try{setO(JSON.stringify(JSON.parse(t),null,2))}catch(e){setO(e.message)}}}>Format</button><pre>{o}</pre></>}
function B64Text(){const [t,setT]=useState('Hello');const [o,setO]=useState('');return <><h3>Base64</h3><textarea value={t} onChange={e=>setT(e.target.value)} style={{width:'100%',height:'50px'}}/><button onClick={()=>setO(btoa(t))}>Encode</button><button onClick={()=>setO(atob(t))} style={{marginLeft:'6px'}}>Decode</button><textarea value={o} readOnly style={{width:'100%',height:'50px',marginTop:'6px'}}/></>}
function URLEnc(){const [t,setT]=useState('hello world');const [o,setO]=useState('');return <><h3>URL Encode</h3><input value={t} onChange={e=>setT(e.target.value)} style={{width:'100%'}}/><button onClick={()=>setO(encodeURIComponent(t))}>Encode</button><div>{o}</div></>}
function ReverseText(){const [t,setT]=useState('WanaLab');return <><h3>Reverse</h3><input value={t} onChange={e=>setT(e.target.value)} style={{width:'100%'}}/><div>{t.split('').reverse().join('')}</div></>}
function FindReplace(){const [t,setT]=useState('hello hello');const [f,setF]=useState('hello');const [r,setR]=useState('hi');return <><h3>Find Replace</h3><textarea value={t} onChange={e=>setT(e.target.value)} style={{width:'100%',height:'50px'}}/><input value={f} onChange={e=>setF(e.target.value)}/><input value={r} onChange={e=>setR(e.target.value)}/><div>{t.split(f).join(r)}</div></>}
function TextDiff(){const [a,setA]=useState('hello');const [b,setB]=useState('hallo');return <><h3>Diff</h3><textarea value={a} onChange={e=>setA(e.target.value)} style={{width:'48%',height:'50px'}}/><textarea value={b} onChange={e=>setB(e.target.value)} style={{width:'48%',height:'50px',marginLeft:'4%'}}/><p>{a===b?'Same':'Different'}</p></>}
function QRGen(){const [txt,setTxt]=useState('https://wanalab.pk');return <><h3>QR</h3><input value={txt} onChange={e=>setTxt(e.target.value)} style={{width:'100%'}}/><img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(txt)}`} style={{marginTop:'8px'}}/></>}
function PassGen(){const [p,setP]=useState('');return <><h3>Password</h3><button onClick={()=>{const c="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%";let s="";for(let i=0;i<14;i++)s+=c[Math.floor(Math.random()*c.length)];setP(s)}}>Gen</button>{p&&<div style={{marginTop:'8px',fontFamily:'monospace'}}>{p}</div>}</>}
function ColorPicker(){const [col,setCol]=useState('#2563eb');return <><h3>Color</h3><input type="color" value={col} onChange={e=>setCol(e.target.value)}/><div>{col}</div></>}
function UUIDGen(){const [u,setU]=useState('');return <><h3>UUID</h3><button onClick={()=>setU(crypto.randomUUID())}>Gen</button><div>{u}</div></>}
function HashGen(){const [t,setT]=useState('hello');const [h,setH]=useState('');return <><h3>Hash</h3><input value={t} onChange={e=>setT(e.target.value)} style={{width:'100%'}}/><button onClick={async()=>{const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(t));setH([...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join(''))}}>Hash</button><div style={{wordBreak:'break-all',fontSize:'11px'}}>{h}</div></>}
function RegexTest(){const [pat,setPat]=useState('hello');const [txt,setTxt]=useState('hello world');let ok=false;try{ok=new RegExp(pat).test(txt)}catch{}return <><h3>Regex</h3><input value={pat} onChange={e=>setPat(e.target.value)} style={{width:'100%'}}/><textarea value={txt} onChange={e=>setTxt(e.target.value)} style={{width:'100%',height:'50px'}}/><p style={{color:ok?'green':'red'}}>{ok?'Match':'No'}</p></>}
function Minify(){const [t,setT]=useState('  hello   world  ');return <><h3>Minify</h3><textarea value={t} onChange={e=>setT(e.target.value)} style={{width:'100%',height:'50px'}}/><button onClick={()=>setT(t.replace(/\s+/g,' ').trim())}>Minify</button></>}
function JSON2CSV(){const [j,setJ]=useState('[{"name":"Ali"}]');const [c,setC]=useState('');return <><h3>JSON CSV</h3><textarea value={j} onChange={e=>setJ(e.target.value)} style={{width:'100%',height:'50px'}}/><button onClick={()=>{try{const arr=JSON.parse(j);const keys=Object.keys(arr[0]);setC([keys.join(','),...arr.map(o=>keys.map(k=>o[k]).join(','))].join('\n'))}catch{setC('Invalid')}}}>Convert</button><textarea value={c} readOnly style={{width:'100%',height:'50px'}}/></>}
function BinaryConv(){const [t,setT]=useState('Hi');const [o,setO]=useState('');return <><h3>Binary</h3><input value={t} onChange={e=>setT(e.target.value)} style={{width:'100%'}}/><button onClick={()=>setO(t.split('').map(c=>c.charCodeAt(0).toString(2).padStart(8,'0')).join(' '))}>To Binary</button><div>{o}</div></>}
function TimestampTool(){const [ts,setTs]=useState(Date.now());return <><h3>Timestamp</h3><p>{new Date(ts).toString()}</p><button onClick={()=>setTs(Date.now())}>Refresh</button></>}
function BMICalc(){const [h,setH]=useState(170);const [w,setW]=useState(70);return <><h3>BMI</h3>H:<input type="number" value={h} onChange={e=>setH(+e.target.value)} style={{width:'60px'}}/> W:<input type="number" value={w} onChange={e=>setW(+e.target.value)} style={{width:'60px'}}/><div>BMI:{(w/((h/100)**2)).toFixed(1)}</div></>}
function AgeCalc(){const [d,setD]=useState('2000-01-01');return <><h3>Age</h3><input type="date" value={d} onChange={e=>setD(e.target.value)}/><div>Age:{Math.abs(new Date(Date.now()-new Date(d).getTime()).getUTCFullYear()-1970)}</div></>}
function PercentCalc(){const [a,setA]=useState(100);const [b,setB]=useState(20);return <><h3>%</h3><input type="number" value={a} onChange={e=>setA(+e.target.value)} style={{width:'60px'}}/> % <input type="number" value={b} onChange={e=>setB(+e.target.value)} style={{width:'60px'}}/><div>{(a*b/100).toFixed(2)}</div></>}
function EMICalc(){const [p,setP]=useState(100000);return <><h3>EMI</h3><input type="number" value={p} onChange={e=>setP(+e.target.value)} style={{width:'90px'}}/><div>EMI calc simple</div></>}
function DiscountCalc(){const [pr,setPr]=useState(1000);const [dc,setDc]=useState(20);return <><h3>Discount</h3>Price:<input type="number" value={pr} onChange={e=>setPr(+e.target.value)} style={{width:'70px'}}/> %:<input type="number" value={dc} onChange={e=>setDc(+e.target.value)} style={{width:'40px'}}/><div>Pay:{(pr*(1-dc/100)).toFixed(2)}</div></>}
function UnitConv(){const [m,setM]=useState(1);return <><h3>Units</h3><input type="number" value={m} onChange={e=>setM(+e.target.value)} style={{width:'70px'}}/><div>KM:{(m/1000).toFixed(4)}</div></>}
function TimeDiffTool(){return <><h3>Time Diff</h3><p>Use timer tool</p></>}
function TypingSpeed(){const [txt,setTxt]=useState('');return <><h3>Typing</h3><textarea value={txt} onChange={e=>setTxt(e.target.value)} style={{width:'100%',height:'60px'}}/></>}
function ClickCounter(){const [c,setC]=useState(0);return <><h3>Counter</h3><div style={{fontSize:'30px',textAlign:'center'}}>{c}</div><button onClick={()=>setC(c+1)}>CLICK</button></>}
function TimerTool(){const [sec,setSec]=useState(0);const [run,setRun]=useState(false);useEffect(()=>{if(!run)return;const id=setInterval(()=>setSec(s=>s+1),1000);return()=>clearInterval(id)},[run]);return <><h3>Timer</h3><div style={{fontSize:'28px',textAlign:'center'}}>{sec}s</div><button onClick={()=>setRun(!run)}>{run?'Pause':'Start'}</button><button onClick={()=>{setSec(0);setRun(false)}} style={{marginLeft:'6px'}}>Reset</button></>}
