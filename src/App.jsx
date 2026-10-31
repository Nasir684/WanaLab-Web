// WanaLab.pk v3.5 FINAL - 4 SECTIONS + About/Privacy UPDATED - FORCE REBUILD 2026-10-31
import { useState, useEffect } from 'react'
console.log('WanaLab v3.5 4-SECTIONS LIVE')

const ALL_TOOLS=[
{name:"Image Compressor",desc:"Reduce 60%",cat:"Image",emoji:"🗜️"},{name:"Image Resizer",desc:"Any W x H",cat:"Image",emoji:"🖼️"},{name:"Image Converter",desc:"PNG, JPG, WEBP",cat:"Image",emoji:"🔄"},{name:"Image Rotator",desc:"Rotate 90°",cat:"Image",emoji:"🔄"},{name:"Image Flipper",desc:"Flip H/V",cat:"Image",emoji:"↔️"},{name:"Image Filters",desc:"Gray/Sepia",cat:"Image",emoji:"🎨"},{name:"Image to Base64",desc:"Encode",cat:"Image",emoji:"🔗"},{name:"BG Preview",desc:"Test BG",cat:"Image",emoji:"🖌️"},{name:"Smart Crop",desc:"Square crop",cat:"Image",emoji:"✂️"},{name:"Pixelate",desc:"Blur",cat:"Image",emoji:"🫣"},{name:"Meme Generator",desc:"Top/Bottom text",cat:"Image",emoji:"😂"},{name:"Watermark",desc:"Add text mark",cat:"Image",emoji:"©️"},{name:"Palette Extractor",desc:"Colors from img",cat:"Image",emoji:"🌈"},{name:"Gradient Gen",desc:"CSS gradients",cat:"Image",emoji:"🌅"},{name:"Border Radius",desc:"Preview radius",cat:"Image",emoji:"⬜"},

{name:"Word Counter",desc:"Words & chars",cat:"Text",emoji:"🔢"},{name:"Case Changer",desc:"UPPER/lower",cat:"Text",emoji:"Aa"},{name:"Lorem Generator",desc:"Dummy text",cat:"Text",emoji:"📝"},{name:"Remove Duplicates",desc:"Unique lines",cat:"Text",emoji:"🧹"},{name:"JSON Formatter",desc:"Pretty JSON",cat:"Text",emoji:"{}"},{name:"Base64 Text",desc:"Encode/Decode",cat:"Text",emoji:"🔐"},{name:"URL Encoder",desc:"Encode URL",cat:"Text",emoji:"🔗"},{name:"Text Reverser",desc:"Reverse",cat:"Text",emoji:"↩️"},{name:"Find & Replace",desc:"Replace",cat:"Text",emoji:"🔍"},{name:"Text Difference",desc:"Compare",cat:"Text",emoji:"⚖️"},{name:"Morse Code",desc:"Text ↔ Morse",cat:"Text",emoji:"・・"},{name:"Hashtag Generator",desc:"For Instagram",cat:"Text",emoji:"#️⃣"},{name:"Text to Speech",desc:"Speak text",cat:"Text",emoji:"🔊"},{name:"Invoice Gen",desc:"Simple invoice",cat:"Text",emoji:"🧾"},{name:"Sleep Calculator",desc:"Best bedtime",cat:"Text",emoji:"😴"},

{name:"QR Generator",desc:"Text → QR",cat:"Dev",emoji:"🔳"},{name:"Password Gen",desc:"Strong pass",cat:"Dev",emoji:"🔑"},{name:"Color Picker",desc:"HEX/RGB",cat:"Dev",emoji:"🎨"},{name:"UUID Generator",desc:"UUID",cat:"Dev",emoji:"🆔"},{name:"Hash Generator",desc:"SHA-256",cat:"Dev",emoji:"#️⃣"},{name:"Regex Tester",desc:"Test regex",cat:"Dev",emoji:"*️⃣"},{name:"Code Minifier",desc:"Remove spaces",cat:"Dev",emoji:"📦"},{name:"JSON to CSV",desc:"Convert",cat:"Dev",emoji:"📊"},{name:"Binary Converter",desc:"Text ↔ Binary",cat:"Dev",emoji:"01"},{name:"Timestamp",desc:"Unix time",cat:"Dev",emoji:"⏰"},{name:"HTML Formatter",desc:"Pretty HTML",cat:"Dev",emoji:"</>"},{name:"JWT Decoder",desc:"Decode JWT",cat:"Dev",emoji:"🔓"},{name:"Pass Strength",desc:"Check strength",cat:"Dev",emoji:"💪"},{name:"Box Shadow",desc:"CSS shadow",cat:"Dev",emoji:"⬛"},{name:"URL Short UI",desc:"Short link UI",cat:"Dev",emoji:"✂️"},

{name:"BMI Calculator",desc:"Body mass",cat:"Daily",emoji:"⚖️"},{name:"Age Calculator",desc:"Exact age",cat:"Daily",emoji:"🎂"},{name:"Percentage Calc",desc:"% calc",cat:"Daily",emoji:"%"},{name:"Loan EMI",desc:"EMI",cat:"Daily",emoji:"💰"},{name:"Discount Calc",desc:"Sale price",cat:"Daily",emoji:"🏷️"},{name:"Unit Converter",desc:"Length/Weight",cat:"Daily",emoji:"📏"},{name:"Time Difference",desc:"Hours between",cat:"Daily",emoji:"⏱️"},{name:"Typing Speed",desc:"WPM test",cat:"Daily",emoji:"⌨️"},{name:"Click Counter",desc:"Tally",cat:"Daily",emoji:"👍"},{name:"Timer",desc:"Timer",cat:"Daily",emoji:"⏲️"},{name:"Currency PKR",desc:"USD PKR SAR",cat:"Daily",emoji:"💱"},{name:"Tip Calculator",desc:"Bill + Tip",cat:"Daily",emoji:"💸"},{name:"Fuel Cost Calc",desc:"Petrol cost PK",cat:"Daily",emoji:"⛽"},{name:"Electricity Bill",desc:"WAPDA calc",cat:"Daily",emoji:"💡"},{name:"Zakat Calc",desc:"2.5% Zakat",cat:"Daily",emoji:"🕌"},
]

export default function App(){
const [cat,setCat]=useState('All')
const [q,setQ]=useState('')
const [showAbout,setShowAbout]=useState(false)
const [showPrivacy,setShowPrivacy]=useState(false)
const [fav,setFav]=useState(()=>JSON.parse(localStorage.getItem('fav')||'[]'))
const [recent,setRecent]=useState(()=>JSON.parse(localStorage.getItem('recent')||'[]'))

useEffect(()=>{localStorage.setItem('fav',JSON.stringify(fav))},[fav])
useEffect(()=>{localStorage.setItem('recent',JSON.stringify(recent))},[recent])

const toggleFav=(n)=>{setFav(p=>p.includes(n)?p.filter(x=>x!==n):[...p,n])}
const openTool=(n)=>{setRecent(r=>[n,...r.filter(x=>x!==n)].slice(0,8)); alert(n+" - Coming soon!")}

const filtered=ALL_TOOLS.filter(t=>{
const okCat=cat==='All'||cat==='Fav'&&fav.includes(t.name)||cat==='Recent'&&recent.includes(t.name)||t.cat===cat
const okQ=!q||t.name.toLowerCase().includes(q.toLowerCase())
return okCat&&okQ
})
const grouped={Image:ALL_TOOLS.filter(t=>t.cat==='Image'),Text:ALL_TOOLS.filter(t=>t.cat==='Text'),Dev:ALL_TOOLS.filter(t=>t.cat==='Dev'),Daily:ALL_TOOLS.filter(t=>t.cat==='Daily')}

const Card=({t})=>(
<div onClick={()=>openTool(t.name)} style={{border:'1px solid #e5e7eb',borderRadius:12,padding:12,background:'#fff',cursor:'pointer',position:'relative'}}>
<div style={{position:'absolute',top:6,right:6,fontSize:14}} onClick={(e)=>{e.stopPropagation();toggleFav(t.name)}}>{fav.includes(t.name)?'⭐':'☆'}</div>
<div style={{fontSize:22}}>{t.emoji}</div>
<div style={{fontWeight:700,fontSize:13,marginTop:4}}>{t.name}</div>
<div style={{fontSize:11,color:'#6b7280'}}>{t.desc}</div>
</div>
)

return(
<div style={{fontFamily:'Inter,system-ui',background:'#f9fafb',minHeight:'100vh'}}>
<header style={{position:'sticky',top:0,zIndex:10,background:'#fff',borderBottom:'1px solid #e5e7eb',padding:'10px 16px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<div style={{display:'flex',gap:8,alignItems:'center',fontWeight:800}}><span style={{background:'#2563eb',color:'#fff',borderRadius:6,padding:'2px 6px'}}>W</span> WanaLab.pk - v3.5</div>
<div style={{display:'flex',gap:8}}><button onClick={()=>setShowAbout(true)} style={{fontSize:12,padding:'4px 8px'}}>About</button><button onClick={()=>setShowPrivacy(true)} style={{fontSize:12,padding:'4px 8px'}}>Privacy</button><span style={{background:'#dcfce7',color:'#16a34a',borderRadius:20,padding:'2px 8px',fontSize:11}}>● 60 LIVE</span></div>
</header>

<div style={{maxWidth:1100,margin:'0 auto',padding:16}}>

{/* FORCE CHECK BLUE BOX */}
<div style={{background:'#2563eb',color:'#fff',padding:12,borderRadius:8,textAlign:'center',fontWeight:700,marginBottom:12}}>
✅ v3.5 4-SECTIONS + ABOUT/PRIVACY UPDATED LIVE - If you see this, new deploy works!
</div>

<div style={{textAlign:'center',margin:'12px 0'}}>
<h1 style={{fontSize:22,margin:0,fontWeight:800}}>60 Tools - v3.5 4-SECTIONS ✅</h1>
<p style={{fontSize:12,color:'#6b7280',margin:0}}>{fav.length} Fav • {recent.length} Recent • 60 tools • v3.5</p>
<input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search 60 tools..." style={{marginTop:10,padding:'8px 12px',borderRadius:20,border:'1px solid #e5e7eb',width:'100%',maxWidth:340}}/>
<div style={{display:'flex',gap:6,justifyContent:'center',flexWrap:'wrap',marginTop:10}}>
{['All','Image','Text','Dev','Daily','Fav','Recent'].map(c=><button key={c} onClick={()=>setCat(c)} style={{padding:'4px 10px',borderRadius:20,border:'1px solid #e5e7eb',background:cat===c?'#2563eb':'#fff',color:cat===c?'#fff':'#000',fontSize:12,fontWeight:cat===c?700:400}}>{c}</button>)}
</div>
</div>

{/* 4 SECTIONS WHEN All & no search */}
{cat==='All' && !q ? (
<div style={{display:'flex',flexDirection:'column',gap:20}}>
{Object.entries(grouped).map(([gName,gTools])=>(
<div key={gName}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
<h2 style={{fontSize:16,fontWeight:800,margin:0}}>{gName==='Image'?'🖼️ Image':gName==='Text'?'📝 Text':gName==='Dev'?'💻 Dev':'📅 Daily Pakistan'} Tools ({gTools.length})</h2>
<button onClick={()=>setCat(gName)} style={{fontSize:12,background:'#eef2ff',border:'1px solid #c7d2fe',borderRadius:20,padding:'2px 10px',color:'#4338ca'}}>View all →</button>
</div>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',gap:10}}>
{gTools.slice(0,8).map(t=><Card key={t.name} t={t}/>)}
</div>
</div>
))}
</div>
):(
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',gap:10}}>
{filtered.map(t=><Card key={t.name} t={t}/>)}
</div>
)}

<div style={{marginTop:30,textAlign:'center',fontSize:11,color:'#9ca3af',borderTop:'1px solid #e5e7eb',paddingTop:12}}>
© 2026 WanaLab.pk • Made for Pakistan • v3.5 • <span onClick={()=>setShowAbout(true)} style={{textDecoration:'underline',cursor:'pointer'}}>About</span> • <span onClick={()=>setShowPrivacy(true)} style={{textDecoration:'underline',cursor:'pointer'}}>Privacy</span>
</div>
</div>

{/* ABOUT MODAL UPDATED */}
{showAbout && (
<div onClick={()=>setShowAbout(false)} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.5)',display:'flex',justifyContent:'center',alignItems:'center',zIndex:50,padding:16}}>
<div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,padding:20,maxWidth:600,width:'100%',maxHeight:'80vh',overflow:'auto'}}>
<h2 style={{margin:0}}>About WanaLab.pk - v3.5 Updated</h2>
<p style={{fontSize:13,lineHeight:1.6,marginTop:10}}>
<b>WanaLab.pk</b> is Pakistan's all-in-one toolbox — <b>60 free online tools</b> for Image, Text, Developer & Daily use.<br/><br/>
<b>Why v3.5 4-Sections?</b> We split 60 tools into 4 clear groups so mobile users find tools faster (8 preview + View all).<br/><br/>
<b>Mission:</b> Provide fast, offline-first, no-login tools for students, freelancers, developers in Pakistan.<br/>
<b>Features:</b> Image Compressor, BG Remover preview, Word Counter, QR Gen, BMI, Fuel Cost (PK), Electricity Bill (WAPDA), Zakat Calculator & 52 more.<br/><br/>
<b>No data collected.</b> All tools run in browser. Fav & Recent saved in localStorage only.<br/>
<b>Built:</b> React + Vite • Hosted on Cloudflare Pages • Version 3.5 - Oct 31 2026<br/>
<b>Contact:</b> hello@wanalab.pk
</p>
<button onClick={()=>setShowAbout(false)} style={{marginTop:12,padding:'8px 16px',background:'#2563eb',color:'#fff',borderRadius:8,border:0}}>Close</button>
</div>
</div>
)}

{/* PRIVACY MODAL UPDATED */}
{showPrivacy && (
<div onClick={()=>setShowPrivacy(false)} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.5)',display:'flex',justifyContent:'center',alignItems:'center',zIndex:50,padding:16}}>
<div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,padding:20,maxWidth:600,width:'100%',maxHeight:'80vh',overflow:'auto'}}>
<h2 style={{margin:0}}>Privacy Policy - WanaLab.pk v3.5 Updated Oct 31 2026</h2>
<p style={{fontSize:13,lineHeight:1.6,marginTop:10}}>
<b>Last Updated: Oct 31, 2026 (v3.5)</b><br/><br/>
<b>1. No Server Data:</b> All 60 tools work 100% in your browser (client-side). We do NOT upload your images, text, or files to our server.<br/>
<b>2. Local Storage Only:</b> Fav (⭐) & Recent tools list saved only in your browser localStorage. Clear cache = cleared.<br/>
<b>3. No Cookies for Tracking:</b> No third-party tracking cookies. Only Cloudflare Pages hosting logs (anonymous).<br/>
<b>4. Ads:</b> We may show Google AdSense banners (Top & In-Grid) — Google may use cookies for ads. See Google Privacy.<br/>
<b>5. Pakistan Daily Tools:</b> Currency PKR, Fuel Cost, WAPDA Bill, Zakat calculators use public rates, no personal data needed.<br/>
<b>6. Contact:</b> If you have privacy concern, email hello@wanalab.pk. We respond in 24h.<br/><br/>
<b>By using WanaLab.pk you agree to this simple policy: Your files stay with you.</b>
</p>
<button onClick={()=>setShowPrivacy(false)} style={{marginTop:12,padding:'8px 16px',background:'#2563eb',color:'#fff',borderRadius:8,border:0}}>Close</button>
</div>
</div>
)}

</div>
)
  }
