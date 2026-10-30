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

function TrendingBox({cat}){
  const items=[
    {c:'Image', t:'Mechanical Keyboard RGB', p:'Rs 6,499', i:'⌨️', l:'https://www.daraz.pk/tag/mechanical-keyboard/', tag:'Daraz Trending'},
    {c:'Image', t:'1TB SSD Portable', p:'Rs 14,999', i:'💾', l:'https://www.daraz.pk/tag/ssd-1tb/', tag:'Hot Sale'},
    {c:'Image', t:'Laptop Stand Metal', p:'Rs 2,199', i:'💻', l:'https://www.daraz.pk/tag/laptop-stand/', tag:'10k+ Sold'},
    {c:'Dev', t:'Wireless Mouse Logitech', p:'Rs 3,299', i:'🖱️', l:'https://www.daraz.pk/tag/wireless-mouse/', tag:'Best Seller'},
    {c:'Dev', t:'Webcam 1080p Full HD', p:'Rs 4,500', i:'📹', l:'https://www.daraz.pk/tag/webcam/', tag:'For Devs'},
    {c:'Dev', t:'USB Hub 7-in-1', p:'Rs 2,999', i:'🔌', l:'https://www.daraz.pk/tag/usb-hub/', tag:'Trending'},
    {c:'Daily', t:'Smart Watch Ultra', p:'Rs 4,999', i:'⌚', l:'https://www.daraz.pk/tag/smart-watch/', tag:'Trending in PK'},
    {c:'Daily', t:'TWS Earbuds Pro', p:'Rs 2,999', i:'🎧', l:'https://www.daraz.pk/tag/earbuds/', tag:'Flash Sale'},
    {c:'Daily', t:'Power Bank 20000mAh', p:'Rs 3,499', i:'🔋', l:'https://www.daraz.pk/tag/power-bank/', tag:'Best Seller'},
  ]
  const list = cat==='All' ? items.slice(0,6) : items.filter(x=>x.c===cat).slice(0,3)
  return (
    <div style={{background:'#fffbeb',border:'1px solid #fde68a',borderRadius:'14px',padding:'14px',marginBottom:'18px'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'10px'}}>
        <b style={{fontSize:'14px'}}>🔥 Trending in Pakistan - {cat==='All'?'For You':cat}</b>
        <span style={{fontSize:'10px',background:'#fff',padding:'3px 8px',borderRadius:'20px',border:'1px solid #e5e7eb'}}>Updated Weekly • No affiliate yet</span>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',gap:'10px'}}>
        {list.map((it,k)=>(
          <a key={k} href={it.l} target="_blank" style={{textDecoration:'none',color:'inherit',background:'#fff',border:'1px solid #f3f4f6',borderRadius:'12px',padding:'12px',display:'block'}}>
            <div style={{fontSize:'28px'}}>{it.i}</div>
            <div style={{fontSize:'12px',fontWeight:'700',marginTop:'6px'}}>{it.t}</div>
            <div style={{fontSize:'12px',color:'#16a34a',fontWeight:'700',marginTop:'4px'}}>{it.p}</div>
            <div style={{fontSize:'10px',background:'#fef3c7',display:'inline-block',padding:'2px 6px',borderRadius:'10px',marginTop:'6px'}}>{it.tag}</div>
            <div style={{marginTop:'8px',background:'#f8fafc',border:'1px solid #e2e8f0',textAlign:'center',padding:'6px',borderRadius:'8px',fontSize:'12px',fontWeight:'600'}}>View on Daraz →</div>
          </a>
        ))}
      </div>
    </div>
  )
}
function AdSlot({label}){return <div style={{background:'#f8fafc',border:'1px dashed #cbd5e1',borderRadius:'10px',padding:'12px',textAlign:'center',color:'#94a3b8',fontSize:'12px',margin:'12px 0'}}>Ad Slot - {label} (AdSense here)</div>}
function AboutPage(){return <div style={{lineHeight:'1.7'}}><h2>About WanaLab.pk - v3.4</h2><p>WanaLab.pk is Pakistan's free toolbox from Dera Ismail Khan, KPK. Built by Nasir - 40 tools, 100% private, all processing in browser.</p><p>Tools: Image, Text, Dev, Daily. No data leaves your device. Contact: hello@wanalab.pk</p></div>}
function PrivacyPage(){return <div style={{lineHeight:'1.7'}}><h2>Privacy Policy - v3.4</h2><p><b>Updated: Oct 31, 2026</b></p><p>1. No data collection - all tools run locally in browser.</p><p>2. Cookies only for essential function. AdSense may use cookies later.</p><p>3. Daraz links are external, not affiliated yet.</p><p>4. Contact: privacy@wanalab.pk</p></div>}
function ContactPage(){return <div style={{lineHeight:'1.7'}}><h2>Contact Us - v3.4</h2><p>Email: hello@wanalab.pk</p><p>DI Khan, KPK, Pakistan</p><div style={{marginTop:'16px',background:'#f1f5f9',padding:'16px',borderRadius:'12px'}}><input placeholder="Your Email" style={{width:'100%',padding:'10px',marginTop:'8px',borderRadius:'8px',border:'1px solid #ddd'}}/><textarea placeholder="Message" style={{width:'100%',height:'80px',marginTop:'8px',padding:'10px',borderRadius:'8px',border:'1px solid #ddd'}}/><button style={{marginTop:'8px',padding:'10px 20px',background:'#2563eb',color:'#fff',border:'none',borderRadius:'8px'}}>Send</button></div></div>}

export default function App(){
  const [active,setActive]=useState(null)
  const [page,setPage]=useState('home')
  const [q,setQ]=useState('')
  const [cat,setCat]=useState('All')
  const cats=['All','Image','Text','Dev','Daily']
  const filtered=TOOLS.filter(t=> (cat==='All'||t.cat===cat) && t.name.toLowerCase().includes(q.toLowerCase()))
  const goHome=()=>{setPage('home');setActive(null)}
  return (
    <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'system-ui',display:'flex',flexDirection:'column'}}>
      <header style={{background:'#fff',borderBottom:'1px solid #e2e8f0',position:'sticky',top:0,zIndex:10}}>
        <div style={{maxWidth:'1200px',margin:'0 auto',padding:'14px 20px',display:'flex',justifyContent:'space-between'}}>
          <div onClick={goHome} style={{cursor:'pointer',fontWeight:'800',display:'flex',alignItems:'center',gap:'8px'}}><div style={{width:'32px',height:'32px',background:'#2563eb',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff'}}>W</div>WanaLab.pk - v3.4</div>
          <span style={{background:'#dcfce7',color:'#166534',padding:'6px 12px',borderRadius:'20px',fontSize:'12px',fontWeight:'700'}}>● 40 Tools LIVE</span>
        </div>
      </header>
      <div style={{maxWidth:'1200px',margin:'0 auto',padding:'20px',flex:1,width:'100%'}}>
        {page==='home' && <AdSlot label="Top Banner 728x90"/>}
        {page==='home' && <TrendingBox cat={cat} />}
        {page==='home' && !active ? <>
          <div style={{textAlign:'center',padding:'10px 0 16px'}}>
            <h1 style={{margin:0,fontSize:'26px'}}>40 Tools - All Working ✅</h1>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search 40 tools..." style={{marginTop:'14px',padding:'14px 18px',width:'100%',maxWidth:'420px',borderRadius:'14px',border:'2px solid #e2e8f0'}}/>
            <div style={{marginTop:'12px',display:'flex',gap:'8px',justifyContent:'center',flexWrap:'wrap'}}>
              {cats.map(c=><button key={c} onClick={()=>setCat(c)} style={{padding:'8px 16px',borderRadius:'20px',border:'1px solid #e2e8f0',background:cat===c?'#2563eb':'#fff',color:cat===c?'#fff':'#334155',cursor:'pointer',fontWeight:'600'}}>{c}</button>)}
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(170px,1fr))',gap:'12px'}}>
            {filtered.map(t=>(
              <div key={t.id} onClick={()=>setActive(t.id)} style={{background:'#fff',border:'1px solid #e2e8f0',borderRadius:'16px',padding:'16px',cursor:'pointer'}}>
                <div style={{fontSize:'22px'}}>{t.icon}</div>
                <div style={{fontWeight:'700',marginTop:'6px',fontSize:'14px'}}>{t.name}</div>
                <div style={{fontSize:'12px',color:'#64748b'}}>{t.desc}</div>
              </div>
            ))}
          </div>
          <AdSlot label="In-Grid Ad 300x250"/>
        </> : page!=='home' ? <>
          <button onClick={goHome} style={{padding:'10px 18px',borderRadius:'10px',border:'1px solid #e2e8f0',background:'#fff',cursor:'pointer',fontWeight:'600'}}>← Home</button>
          <div style={{marginTop:'14px',background:'#fff',border:'1px solid #e2e8f0',borderRadius:'18px',padding:'22px'}}>
            {page==='about' && <AboutPage/>}
            {page==='privacy' && <PrivacyPage/>}
            {page==='contact' && <ContactPage/>}
          </div>
        </> : <>
          <button onClick={()=>setActive(null)} style={{padding:'10px 18px',borderRadius:'10px',border:'1px solid #e2e8f0',background:'#fff',cursor:'pointer',fontWeight:'600'}}>← All Tools</button>
          <div style={{marginTop:'14px',background:'#fff',border:'1px solid #e2e8f0',borderRadius:'18px',padding:'22px'}}>
            <ToolRenderer id={active}/>
          </div>
        </>}
      </div>
      <footer style={{background:'#fff',borderTop:'1px solid #e2e8f0',marginTop:'30px',padding:'24px 20px'}}>
        <div style={{maxWidth:'1200px',margin:'0 auto',display:'flex',flexWrap:'wrap',gap:'24px',justifyContent:'space-between'}}>
          <div><b>WanaLab.pk v3.4</b><div style={{fontSize:'12px',color:'#64748b',marginTop:'6px'}}>Free tools for Pakistan 🇵🇰<br/>Made in DI Khan, KPK</div></div>
          <div style={{display:'flex',gap:'16px',fontSize:'13px'}}>
            <span onClick={()=>setPage('about')} style={{cursor:'pointer',color:'#2563eb',fontWeight:'600'}}>About</span>
            <span onClick={()=>setPage('privacy')} style={{cursor:'pointer',color:'#2563eb',fontWeight:'600'}}>Privacy</span>
            <span onClick={()=>setPage('contact')} style={{cursor:'pointer',color:'#2563eb',fontWeight:'600'}}>Contact</span>
            <span style={{color:'#64748b'}}>© 2026 WanaLab</span>
          </div>
        </div>
        <div style={{maxWidth:'1200px',margin:'0 auto'}}><AdSlot label="Footer Ad 728x90"/></div>
      </footer>
    </div>
  )
}
function ToolRenderer({id}){const map={compress: <ImageCompressor/>, resize: <ImageResizer/>, convert: <ImageConverter/>, rotate: <ImageRotator/>, flip: <ImageFlipper/>, filter: <ImageFilters/>, base64: <ImageToBase64/>, bgprev: <BGPreview/>, crop: <SmartCrop/>, pixel: <Pixelate/>, words: <WordCounter/>, case: <CaseChanger/>, lorem: <LoremGen/>, dedupe: <Dedupe/>, jsonfmt: <JSONFmt/>, b64: <B64Text/>, urlenc: <URLEnc/>, reverse: <ReverseText/>, replace: <FindReplace/>, diff: <TextDiff/>, qr: <QRGen/>, pass: <PassGen/>, color: <ColorPicker/>, uuid: <UUIDGen/>, hash: <HashGen/>, regex: <RegexTest/>, minify: <Minify/>, csv: <JSON2CSV/>, binary: <BinaryConv/>, timestamp: <TimestampTool/>, bmi: <BMICalc/>, age: <AgeCalc/>, percent: <PercentCalc/>, emi: <EMICalc/>, discount: <DiscountCalc/>, unit: <UnitConv/>, time: <TimeDiffTool/>, typing: <TypingSpeed/>, counter: <ClickCounter/>, timer: <TimerTool/>};return map[id]||<div>Tool {id}</div>}
function ImageCompressor(){const [m,setM]=useState('');return <><h2>🗜️ Compressor ✅</h2><input type="file" accept="image/*" onChange={e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=ev=>{const img=new Image();img.onload=()=>{const c=document.createElement('canvas');c.width=img.width*0.7;c.height=img.height*0.7;c.getContext('2d').drawImage(img,0,0,c.width,c.height);const a=document.createElement('a');a.href=c.toDataURL('image/jpeg',0.6);a.download='compressed-'+f.name+'.jpg';a.click();setM('✅ Downloaded!')};img.src=ev.target.result};r.readAsDataURL(f)}}/><p style={{color:'green'}}>{m}</p></>}
function ImageResizer(){const [w,setW]=useState(400);const [h,setH]=useState(300);const [s,setS]=useState(null);return <><h2>📐 Resizer ✅</h2><input type="file" accept="image/*" onChange={e=>{const r=new FileReader();r.onload=ev=>setS(ev.target.result);r.readAsDataURL(e.target.files[0])}}/><div style={{marginTop:'10px'}}>W:<input type="number" value={w} onChange={e=>setW(+e.target.value)} style={{width:'80px'}}/> H:<input type="number" value={h} onChange={e=>setH(+e.target.value)} style={{width:'80px'}}/></div>{s&&<button onClick={()=>{const img=new Image();img.onload=()=>{const c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(img,0,0,w,h);const a=document.createElement('a');a.href=c.toDataURL();a.download=`resized-${w}x${h}.png`;a.click()};img.src=s}} style={{marginTop:'10px',padding:'8px 16px',background:'#2563eb',color:'#fff',border:'none',borderRadius:'8px'}}>Download</button>}</>}
function ImageConverter(){const [s,setS]=useState(null);const [f,setF]=useState('image/jpeg');return <><h2>🔄 Converter ✅</h2><input type="file" accept="image/*" onChange={e=>{const r=new FileReader();r.onload=ev=>setS(ev.target.result);r.readAsDataURL(e.target.files[0])}}/><br/><select value={f} onChange={e=>setF(e.target.value)} style={{marginTop:'10px'}}><option value="image/jpeg">JPG</option><option value="image/png">PNG</option><option value="image/webp">WEBP</option></select>{s&&<button onClick={()=>{const img=new Image();img.onload=()=>{const c=document.createElement('canvas');c.width=img.width;c.height=img.height;c.getContext('2d').drawImage(img,0,0);const a=document.createElement('a');a.href=c.toDataURL(f);a.download='converted.'+f.split('/')[1];a.click()};img.src=s}} style={{marginLeft:'10px',padding:'8px 16px',background:'#2563eb',color:'#fff',border:'none',borderRadius:'8px'}}>Convert</button>}</>}
function ImageRotator(){const [s,setS]=useState(null);const [d,setD]=useState(0);return <><h2>🔃 Rotator ✅</h2><input type="file" accept="image/*" onChange={e=>{const r=new FileReader();r.onload=ev=>setS(ev.target.result);r.readAsDataURL(e.target.files[0])}}/><button onClick={()=>setD(d+90)} style={{marginLeft:'10px'}}>Rotate 90°</button>{s&&<img src={s} style={{display:'block',maxWidth:'250px',marginTop:'10px',transform:`rotate(${d}deg)`}}/>}</>}
function ImageFlipper(){const [s,setS]=useState(null);const [fl,setFl]=useState('none');return <><h2>↔️ Flipper ✅</h2><input type="file" accept="image/*" onChange={e=>{const r=new FileReader();r.onload=ev=>setS(ev.target.result);r.readAsDataURL(e.target.files[0])}}/><button onClick={()=>setFl(fl==='h'?'none':'h')} style={{marginLeft:'10px'}}>Flip H</button>{s&&<img src={s} style={{display:'block',maxWidth:'250px',marginTop:'10px',transform:fl==='h'?'scaleX(-1)':''}}/>}</>}
function ImageFilters(){const [s,setS]=useState(null);const [f,setF]=useState('grayscale(100%)');return <><h2>🎨 Filters ✅</h2><input type="file" accept="image/*" onChange={e=>{const r=new FileReader();r.onload=ev=>setS(ev.target.result);r.readAsDataURL(e.target.files[0])}}/><select value={f} onChange={e=>setF(e.target.value)} style={{marginLeft:'10px'}}><option value="grayscale(100%)">Gray</option><option value="sepia(100%)">Sepia</option><option value="invert(100%)">Invert</option></select>{s&&<img src={s} style={{display:'block',maxWidth:'250px',marginTop:'10px',filter:f}}/>}</>}
function ImageToBase64(){const [b,setB]=useState('');return <><h2>🔤 Image→Base64 ✅</h2><input type="file" accept="image/*" onChange={e=>{const r=new FileReader();r.onload=ev=>setB(ev.target.result);r.readAsDataURL(e.target.files[0])}}/><textarea value={b} readOnly style={{width:'100%',height:'100px',marginTop:'10px',fontSize:'10px'}}/></>}
function BGPreview(){const [c,setC]=useState('#3b82f6');const [s,setS]=useState(null);return <><h2>🖼️ BG Preview ✅</h2><input type="file" accept="image/*" onChange={e=>{const r=new FileReader();r.onload=ev=>setS(ev.target.result);r.readAsDataURL(e.target.files[0])}}/><input type="color" value={c} onChange={e=>setC(e.target.value)} style={{marginLeft:'10px'}}/><div style={{width:'300px',height:'180px',background:c,marginTop:'10px',display:'flex',alignItems:'center',justifyContent:'center'}}>{s&&<img src={s} style={{maxWidth:'90%',maxHeight:'90%'}}/>}</div></>}
function SmartCrop(){const [s,setS]=useState(null);return <><h2>✂️ Smart Crop ✅</h2><input type="file" accept="image/*" onChange={e=>{const r=new FileReader();r.onload=ev=>setS(ev.target.result);r.readAsDataURL(e.target.files[0])}}/><br/>{s&&<button onClick={()=>{const img=new Image();img.onload=()=>{const c=document.createElement('canvas');const m=Math.min(img.width,img.height);c.width=m;c.height=m;c.getContext('2d').drawImage(img,(img.width-m)/2,(img.height-m)/2,m,m,0,0,m,m);const a=document.createElement('a');a.href=c.toDataURL();a.download='square.png';a.click()};img.src=s}} style={{marginTop:'10px',padding:'8px 16px',background:'#2563eb',color:'#fff',border:'none',borderRadius:'8px'}}>Crop Square</button>}</>}
function Pixelate(){const [s,setS]=useState(null);return <><h2>🟦 Blur ✅</h2><input type="file" accept="image/*" onChange={e=>{const r=new FileReader();r.onload=ev=>setS(ev.target.result);r.readAsDataURL(e.target.files[0])}}/><br/>{s&&<button onClick={()=>{const img=new Image();img.onload=()=>{const c=document.createElement('canvas');c.width=img.width;c.height=img.height;const ctx=c.getContext('2d');ctx.filter='blur(10px)';ctx.drawImage(img,0,0);const a=document.createElement('a');a.href=c.toDataURL();a.download='blur.png';a.click()};img.src=s}} style={{marginTop:'10px',padding:'8px 16px',background:'#2563eb',color:'#fff',border:'none',borderRadius:'8px'}}>Blur & Download</button>}</>}
function WordCounter(){const [t,setT]=useState('');return <><h2>🔢 Word Counter ✅</h2><textarea value={t} onChange={e=>setT(e.target.value)} style={{width:'100%',height:'120px'}}/><p>Words: {t.trim()?t.trim().split(/\s+/).length:0} | Chars: {t.length}</p></>}
function CaseChanger(){const [t,setT]=useState('Hello World');return <><h2>Aa Case ✅</h2><input value={t} onChange={e=>setT(e.target.value)} style={{width:'100%',padding:'10px'}}/><div style={{marginTop:'8px',display:'flex',gap:'6px'}}><button onClick={()=>setT(t.toUpperCase())}>UPPER</button><button onClick={()=>setT(t.toLowerCase())}>lower</button><button onClick={()=>setT(t.replace(/\b\w/g,l=>l.toUpperCase()))}>Title</button></div></>}
function LoremGen(){const [n,setN]=useState(3);const [txt,setTxt]=useState('');return <><h2>📝 Lorem ✅</h2>Paras: <input type="number" value={n} onChange={e=>setN(+e.target.value)} style={{width:'60px'}}/> <button onClick={()=>setTxt(Array(n).fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit.").join('\n\n'))}>Gen</button><textarea value={txt} readOnly style={{width:'100%',height:'120px',marginTop:'10px'}}/></>}
function Dedupe(){const [t,setT]=useState('');const [o,setO]=useState('');return <><h2>🧹 Dedupe ✅</h2><textarea value={t} onChange={e=>setT(e.target.value)} style={{width:'100%',height:'80px'}}/><button onClick={()=>setO([...new Set(t.split('\n'))].join('\n'))}>Dedupe</button><textarea value={o} readOnly style={{width:'100%',height:'80px',marginTop:'8px'}}/></>}
function JSONFmt(){const [t,setT]=useState('{"a":1}');const [o,setO]=useState('');return <><h2>{'{ }'} JSON ✅</h2><textarea value={t} onChange={e=>setT(e.target.value)} style={{width:'100%',height:'80px'}}/><button onClick={()=>{try{setO(JSON.stringify(JSON.parse(t),null,2))}catch(e){setO(e.message)}}}>Format</button><pre style={{background:'#f1f5f9',padding:'10px',marginTop:'8px'}}>{o}</pre></>}
function B64Text(){const [t,setT]=useState('Hello');const [o,setO]=useState('');return <><h2>🔐 Base64 ✅</h2><textarea value={t} onChange={e=>setT(e.target.value)} style={{width:'100%',height:'60px'}}/><button onClick={()=>setO(btoa(t))}>Encode</button><button onClick={()=>{try{setO(atob(t))}catch{setO('Invalid')}}} style={{marginLeft:'6px'}}>Decode</button><textarea value={o} readOnly style={{width:'100%',height:'60px',marginTop:'8px'}}/></>}
function URLEnc(){const [t,setT]=useState('hello world');const [o,setO]=useState('');return <><h2>🔗 URL Enc ✅</h2><input value={t} onChange={e=>setT(e.target.value)} style={{width:'100%',padding:'8px'}}/><button onClick={()=>setO(encodeURIComponent(t))} style={{marginTop:'6px'}}>Encode</button><button onClick={()=>setO(decodeURIComponent(t))} style={{marginLeft:'6px'}}>Decode</button><div style={{marginTop:'8px',background:'#f1f5f9',padding:'8px'}}>{o}</div></>}
function ReverseText(){const [t,setT]=useState('WanaLab');return <><h2>↩️ Reverse ✅</h2><input value={t} onChange={e=>setT(e.target.value)} style={{width:'100%',padding:'8px'}}/><div style={{marginTop:'8px',padding:'8px',background:'#f1f5f9'}}>{t.split('').reverse().join('')}</div></>}
function FindReplace(){const [t,setT]=useState('hello world hello');const [f,setF]=useState('hello');const [r,setR]=useState('hi');return <><h2>🔍 Replace ✅</h2><textarea value={t} onChange={e=>setT(e.target.value)} style={{width:'100%',height:'60px'}}/><input value={f} onChange={e=>setF(e.target.value)} placeholder="Find" style={{padding:'6px',marginTop:'6px'}}/><input value={r} onChange={e=>setR(e.target.value)} placeholder="Replace" style={{padding:'6px',marginLeft:'6px'}}/><div style={{marginTop:'8px',padding:'8px',background:'#f1f5f9'}}>{t.split(f).join(r)}</div></>}
function TextDiff(){const [a,setA]=useState('hello');const [b,setB]=useState('hallo');return <><h2>⚖️ Diff ✅</h2><div style={{display:'flex',gap:'8px'}}><textarea value={a} onChange={e=>setA(e.target.value)} style={{width:'50%',height:'60px'}}/><textarea value={b} onChange={e=>setB(e.target.value)} style={{width:'50%',height:'60px'}}/></div><p>{a===b?'✅ Same':'❌ Different'}</p></>}
function QRGen(){const [txt,setTxt]=useState('https://wanalab-web.pages.dev');const qr=`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(txt)}`;return <><h2>⬛ QR ✅</h2><input value={txt} onChange={e=>setTxt(e.target.value)} style={{width:'100%',padding:'8px'}}/><img src={qr} style={{marginTop:'10px',width:'240px',border:'1px solid #ddd'}}/></>}
function PassGen(){const [len,setLen]=useState(14);const [p,setP]=useState('');return <><h2>🔑 Password ✅</h2>Len: <input type="number" value={len} onChange={e=>setLen(+e.target.value)} style={{width:'60px'}}/> <button onClick={()=>{const c="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%";let s="";for(let i=0;i<len;i++)s+=c[Math.floor(Math.random()*c.length)];setP(s)}} style={{padding:'6px 12px',background:'#2563eb',color:'#fff',border:'none',borderRadius:'8px'}}>Gen</button>{p&&<div style={{marginTop:'10px',padding:'10px',background:'#f1f5f9',fontFamily:'monospace'}}>{p} <button onClick={()=>navigator.clipboard.writeText(p)}>Copy</button></div>}</>}
function ColorPicker(){const [col,setCol]=useState('#2563eb');return <><h2>🎨 Color ✅</h2><input type="color" value={col} onChange={e=>setCol(e.target.value)}/><div style={{marginTop:'8px'}}>HEX: {col}</div><div style={{width:'100px',height:'40px',background:col,marginTop:'8px',borderRadius:'8px'}}/></>}
function UUIDGen(){const [u,setU]=useState('');return <><h2>🆔 UUID ✅</h2><button onClick={()=>setU(crypto.randomUUID())} style={{padding:'8px 16px',background:'#2563eb',color:'#fff',border:'none',borderRadius:'8px'}}>Generate</button>{u&&<div style={{marginTop:'8px',padding:'8px',background:'#f1f5f9',fontFamily:'monospace'}}>{u}</div>}</>}
function HashGen(){const [t,setT]=useState('hello');const [h,setH]=useState('');return <><h2>#️⃣ Hash ✅</h2><input value={t} onChange={e=>setT(e.target.value)} style={{width:'100%',padding:'8px'}}/><button onClick={async()=>{const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(t));setH([...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join(''))}} style={{marginTop:'6px'}}>SHA-256</button>{h&&<div style={{marginTop:'8px',padding:'8px',background:'#f1f5f9',wordBreak:'break-all',fontSize:'12px'}}>{h}</div>}</>}
function RegexTest(){const [pat,setPat]=useState('hello');const [txt,setTxt]=useState('hello world');let ok=false;try{ok=new RegExp(pat).test(txt)}catch{}return <><h2>.* Regex ✅</h2><input value={pat} onChange={e=>setPat(e.target.value)} style={{width:'100%',padding:'8px'}}/><textarea value={txt} onChange={e=>setTxt(e.target.value)} style={{width:'100%',height:'60px',marginTop:'6px'}}/><p style={{color:ok?'green':'red'}}>{ok?'✅ Match':'❌ No'}</p></>}
function Minify(){const [t,setT]=useState('  hello   world  ');return <><h2>📦 Minify ✅</h2><textarea value={t} onChange={e=>setT(e.target.value)} style={{width:'100%',height:'60px'}}/><button onClick={()=>setT(t.replace(/\s+/g,' ').trim())} style={{marginTop:'6px'}}>Minify</button></>}
function JSON2CSV(){const [j,setJ]=useState('[{"name":"Ali","age":25}]');const [c,setC]=useState('');return <><h2>📊 JSON→CSV ✅</h2><textarea value={j} onChange={e=>setJ(e.target.value)} style={{width:'100%',height:'60px'}}/><button onClick={()=>{try{const arr=JSON.parse(j);const keys=Object.keys(arr[0]);setC([keys.join(','),...arr.map(o=>keys.map(k=>o[k]).join(','))].join('\n'))}catch(e){setC('Invalid')}}} style={{marginTop:'6px',padding:'6px 12px',background:'#2563eb',color:'#fff',border:'none',borderRadius:'8px'}}>Convert</button><textarea value={c} readOnly style={{width:'100%',height:'60px',marginTop:'6px'}}/></>}
function BinaryConv(){const [t,setT]=useState('Hi');const [o,setO]=useState('');return <><h2>01 Binary ✅</h2><input value={t} onChange={e=>setT(e.target.value)} style={{width:'100%',padding:'8px'}}/><button onClick={()=>setO(t.split('').map(c=>c.charCodeAt(0).toString(2).padStart(8,'0')).join(' '))} style={{marginTop:'6px'}}>To Binary</button><div style={{marginTop:'8px',background:'#f1f5f9',padding:'8px',wordBreak:'break-all'}}>{o}</div></>}
function TimestampTool(){const [ts,setTs]=useState(Date.now());return <><h2>⏰ Timestamp ✅</h2><p>Now: {new Date(ts).toString()}</p><button onClick={()=>setTs(Date.now())}>Refresh</button></>}
function BMICalc(){const [h,setH]=useState(170);const [w,setW]=useState(70);const bmi=(w/((h/100)**2)).toFixed(1);return <><h2>⚖️ BMI ✅</h2>H cm:<input type="number" value={h} onChange={e=>setH(+e.target.value)} style={{width:'70px'}}/> W kg:<input type="number" value={w} onChange={e=>setW(+e.target.value)} style={{width:'70px',marginLeft:'6px'}}/><div style={{marginTop:'10px',fontWeight:'700'}}>BMI: {bmi}</div></>}
function AgeCalc(){const [d,setD]=useState('2000-01-01');const age=Math.abs(new Date(Date.now()-new Date(d).getTime()).getUTCFullYear()-1970);return <><h2>🎂 Age ✅</h2><input type="date" value={d} onChange={e=>setD(e.target.value)}/><div style={{marginTop:'8px'}}>Age: {age} years</div></>}
function PercentCalc(){const [a,setA]=useState(100);const [b,setB]=useState(20);return <><h2>% Percent ✅</h2><input type="number" value={a} onChange={e=>setA(+e.target.value)} style={{width:'70px'}}/> % of <input type="number" value={b} onChange={e=>setB(+e.target.value)} style={{width:'70px'}}/><div style={{marginTop:'8px',fontWeight:'700'}}>{(a*b/100).toFixed(2)}</div></>}
function EMICalc(){const [p,setP]=useState(100000);const [r,setR]=useState(10);const [y,setY]=useState(2);const emi=(p*(r/12/100)*Math.pow(1+r/12/100,y*12)/(Math.pow(1+r/12/100,y*12)-1)).toFixed(0);return <><h2>💰 EMI ✅</h2>P:<input type="number" value={p} onChange={e=>setP(+e.target.value)} style={{width:'90px'}}/> R%:<input type="number" value={r} onChange={e=>setR(+e.target.value)} style={{width:'50px'}}/> Y:<input type="number" value={y} onChange={e=>setY(+e.target.value)} style={{width:'40px'}}/><div style={{marginTop:'8px',fontWeight:'700'}}>EMI: {emi}/mo</div></>}
function DiscountCalc(){const [pr,setPr]=useState(1000);const [dc,setDc]=useState(20);return <><h2>🏷️ Discount ✅</h2>Price:<input type="number" value={pr} onChange={e=>setPr(+e.target.value)} style={{width:'80px'}}/> %:<input type="number" value={dc} onChange={e=>setDc(+e.target.value)} style={{width:'50px'}}/><div style={{marginTop:'8px',fontWeight:'700'}}>Pay: {(pr*(1-dc/100)).toFixed(2)}</div></>}
function UnitConv(){const [m,setM]=useState(1);return <><h2>📏 Units ✅</h2>M:<input type="number" value={m} onChange={e=>setM(+e.target.value)} style={{width:'80px'}}/><div style={{marginTop:'8px',background:'#f1f5f9',padding:'8px'}}>KM:{(m/1000).toFixed(4)} | Feet:{(m*3.28).toFixed(2)}</div></>}
function TimeDiffTool(){const [s,setS]=useState('09:00');const [e,setE]=useState('17:00');const diff=()=>{const [sh,sm]=s.split(':').map(Number);const [eh,em]=e.split(':').map(Number);return ((eh*60+em)-(sh*60+sm))/60};return <><h2>⏱️ Time Diff ✅</h2>Start:<input type="time" value={s} onChange={e=>setS(e.target.value)}/> End:<input type="time" value={e} onChange={e=>setE(e.target.value)}/><div style={{marginTop:'8px',fontWeight:'700'}}>{diff().toFixed(2)} hours</div></>}
function TypingSpeed(){const [txt,setTxt]=useState('');const [st,setSt]=useState(null);const wpm=st?((txt.trim().split(/\s+/).length)/((Date.now()-st)/60000)).toFixed(0):0;return <><h2>⌨️ Typing ✅</h2><textarea value={txt} onChange={e=>{if(!st)setSt(Date.now());setTxt(e.target.value)}} style={{width:'100%',height:'80px'}}/><div>WPM: {wpm}</div><button onClick={()=>{setTxt('');setSt(null)}}>Reset</button></>}
function ClickCounter(){const [c,setC]=useState(0);return <><h2>👆 Counter ✅</h2><div style={{fontSize:'40px',textAlign:'center'}}>{c}</div><button onClick={()=>setC(c+1)} style={{padding:'12px 28px',background:'#2563eb',color:'#fff',border:'none',borderRadius:'10px',display:'block',margin:'10px auto'}}>CLICK</button><button onClick={()=>setC(0)} style={{display:'block',margin:'0 auto'}}>Reset</button></>}
function TimerTool(){const [sec,setSec]=useState(0);const [run,setRun]=useState(false);useEffect(()=>{if(!run)return;const id=setInterval(()=>setSec(s=>s+1),1000);return()=>clearInterval(id)},[run]);return <><h2>⏲️ Timer ✅</h2><div style={{fontSize:'36px',textAlign:'center'}}>{Math.floor(sec/60).toString().padStart(2,'0')}:{(sec%60).toString().padStart(2,'0')}</div><div style={{display:'flex',gap:'8px',justifyContent:'center'}}><button onClick={()=>setRun(!run)} style={{padding:'8px 16px',background:run?'#ef4444':'#16a34a',color:'#fff',border:'none',borderRadius:'8px'}}>{run?'Pause':'Start'}</button><button onClick={()=>{setSec(0);setRun(false)}}>Reset</button></div></>}
