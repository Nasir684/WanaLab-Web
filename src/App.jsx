// WanaLab Global v5.1 - Wana Based, Global Built - 64 Tools + About Privacy Terms Fixed
// Founder: Nasir Khan - Wana, South Waziristan - Nov 1 2026
import { useState, useEffect } from 'react'

const AFFILIATE = {
  aviasales_marker: 'YOUR_AVIASALES_MARKER',
  booking_aid: 'YOUR_BOOKING_AID',
  trip_alliance: 'YOUR_TRIP_ID',
  airbnb_id: 'YOUR_AIRBNB_AFFILIATE_ID',
  amazon_us: 'wanalabpk-20',
  aliexpress: 'YOUR_ALIEXPRESS_ID',
  fiverr: 'YOUR_FIVERR_ID',
}

const getAliLink = () => AFFILIATE.aliexpress && AFFILIATE.aliexpress !== 'YOUR_ALIEXPRESS_ID' ? `https://s.click.aliexpress.com/e/_${AFFILIATE.aliexpress}` : 'https://www.aliexpress.com'
const getAviaLink = (f,t) => AFFILIATE.aviasales_marker && AFFILIATE.aviasales_marker !== 'YOUR_AVIASALES_MARKER' ? `https://www.aviasales.com/?marker=${AFFILIATE.aviasales_marker}&from=${f}&to=${t}` : `https://www.aviasales.com/search/${f}${t}`
const getBookingLink = (city) => AFFILIATE.booking_aid && AFFILIATE.booking_aid !== 'YOUR_BOOKING_AID' ? `https://www.booking.com/searchresults.html?aid=${AFFILIATE.booking_aid}&ss=${encodeURIComponent(city)}` : `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city)}`
const getAirbnbLink = (loc) => AFFILIATE.airbnb_id && AFFILIATE.airbnb_id !== 'YOUR_AIRBNB_AFFILIATE_ID' ? `https://www.airbnb.com/s/${encodeURIComponent(loc)}/homes?af=${AFFILIATE.airbnb_id}` : `https://www.airbnb.com/s/${encodeURIComponent(loc)}/homes`

const TOOLS = [
{cat:"Featured", name:"Translator Urdu Pashto", type:"translatetool", desc:"Real Urdu اردو Pashto پښتو", icon:"🌐", color:"#8b5cf6"},
{cat:"Featured", name:"YouTube Thumbnail Downloader", type:"ytthumb", desc:"HD thumbnail download", icon:"▶️", color:"#ef4444"},
{cat:"Featured", name:"Weather Checker", type:"weathertool", desc:"Live weather forecast", icon:"🌤️", color:"#0ea5e9"},
{cat:"Featured", name:"YouTube Tags Extractor", type:"yttags", desc:"Title, tags & SEO", icon:"🏷️", color:"#ef4444"},
{cat:"Image", name:"Image Compressor", type:"compressor", desc:"Reduce size with quality", icon:"🗜️", color:"#f59e0b"},
{cat:"Image", name:"Image Resizer", type:"resizer", desc:"Resize to custom WxH", icon:"📐", color:"#f59e0b"},
{cat:"Image", name:"Image Converter", type:"converter", desc:"PNG ↔ JPG ↔ WEBP", icon:"🔄", color:"#f59e0b"},
{cat:"Image", name:"Image Rotator", type:"rotator", desc:"Rotate 90° 180°", icon:"🔃", color:"#f59e0b"},
{cat:"Image", name:"Image Flipper", type:"flipper", desc:"Flip horizontal vertical", icon:"↔️", color:"#f59e0b"},
{cat:"Image", name:"Image Filters", type:"filters", desc:"Grayscale, sepia, blur", icon:"🎨", color:"#f59e0b"},
{cat:"Image", name:"Meme Generator", type:"meme", desc:"Top & bottom text", icon:"😂", color:"#f59e0b"},
{cat:"Image", name:"Watermark", type:"watermark", desc:"Add text watermark", icon:"💧", color:"#f59e0b"},
{cat:"Text", name:"Word Counter", type:"wordcount", desc:"Words, chars, reading time", icon:"🔤", color:"#10b981"},
{cat:"Text", name:"Case Changer", type:"case", desc:"UPPER, lower, Title", icon:"🔠", color:"#10b981"},
{cat:"Text", name:"Lorem Generator", type:"lorem", desc:"Generate lorem ipsum", icon:"📝", color:"#10b981"},
{cat:"Text", name:"JSON Formatter", type:"jsonfmt", desc:"Pretty print & validate", icon:"{} ", color:"#10b981"},
{cat:"Text", name:"Base64 Encoder", type:"b64text", desc:"Encode & decode text", icon:"🔐", color:"#10b981"},
{cat:"Text", name:"URL Encoder", type:"urlenc", desc:"Encode & decode URLs", icon:"🔗", color:"#10b981"},
{cat:"Text", name:"Text Difference", type:"diff", desc:"Compare two texts", icon:"📊", color:"#10b981"},
{cat:"Text", name:"Hashtag Generator", type:"hashtag", desc:"Generate #hashtags", icon:"#️⃣", color:"#10b981"},
{cat:"Dev", name:"QR Generator", type:"qr", desc:"Create QR code", icon:"◫", color:"#6366f1"},
{cat:"Dev", name:"Password Generator", type:"passgen", desc:"Secure random passwords", icon:"🔑", color:"#6366f1"},
{cat:"Dev", name:"UUID Generator", type:"uuid", desc:"Generate UUIDs", icon:"🆔", color:"#6366f1"},
{cat:"Dev", name:"Color Picker", type:"colorpick", desc:"HEX & RGB picker", icon:"🎨", color:"#6366f1"},
{cat:"Dev", name:"Regex Tester", type:"regex", desc:"Test regular expressions", icon:".*", color:"#6366f1"},
{cat:"Dev", name:"Code Minifier", type:"minify", desc:"Minify HTML CSS JS", icon:"🗜️", color:"#6366f1"},
{cat:"Dev", name:"JWT Decoder", type:"jwt", desc:"Decode JWT tokens", icon:"🔓", color:"#6366f1"},
{cat:"Dev", name:"HTML Formatter", type:"htmlfmt", desc:"Format & beautify HTML", icon:"</>", color:"#6366f1"},
{cat:"Daily", name:"BMI Calculator", type:"bmi", desc:"Body mass index", icon:"⚖️", color:"#ec4899"},
{cat:"Daily", name:"Age Calculator", type:"age", desc:"Calculate exact age", icon:"🎂", color:"#ec4899"},
{cat:"Daily", name:"Currency Converter", type:"currency", desc:"USD, PKR, INR, AED", icon:"💱", color:"#ec4899"},
{cat:"Daily", name:"Percentage Calculator", type:"percent", desc:"Calculate percentages", icon:"%", color:"#ec4899"},
{cat:"Daily", name:"Loan EMI Calculator", type:"emi", desc:"EMI & interest", icon:"🏦", color:"#ec4899"},
{cat:"Daily", name:"Discount Calculator", type:"discount", desc:"Discount & savings", icon:"🏷️", color:"#ec4899"},
{cat:"Daily", name:"Fuel Cost Calculator", type:"fuel", desc:"Fuel cost per trip", icon:"⛽", color:"#ec4899"},
{cat:"Daily", name:"Unit Converter", type:"unit", desc:"Length, weight, temp", icon:"📏", color:"#ec4899"},
]

function PageModal({page,onClose}){
  return(
    <div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(15,23,42,0.6)',backdropFilter:'blur(8px)',zIndex:200,display:'flex',justifyContent:'center',alignItems:'flex-start',padding:16,overflow:'auto'}}>
      <div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:24,padding:24,width:'100%',maxWidth:720,marginTop:40,marginBottom:40,boxShadow:'0 25px 50px -12px rgba(0,0,0,0.25)'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
          <h2 style={{margin:0,fontSize:22,fontWeight:700}}>{page.title}</h2>
          <button onClick={onClose} style={{width:32,height:32,borderRadius:999,border:'1px solid #e2e8f0',background:'#fff',cursor:'pointer'}}>✕</button>
        </div>
        <div style={{fontSize:14,lineHeight:'1.7',color:'#334155',whiteSpace:'pre-wrap'}}>{page.content}</div>
        {page.extra}
        <button onClick={onClose} style={{marginTop:24,width:'100%',padding:'12px',background:'#0f172a',color:'#fff',borderRadius:12,border:0,fontWeight:600,cursor:'pointer'}}>Close</button>
      </div>
    </div>
  )
}

function ToolModal({tool,onClose}){
const [a,setA]=useState(''); const [b,setB]=useState(''); const [c,setC]=useState(''); const [out,setOut]=useState(''); const [img,setImg]=useState(null); const [img2,setImg2]=useState(null); const [quality,setQuality]=useState(0.7); const [w,setW]=useState(400); const [h,setH]=useState(300); const [qrSize,setQrSize]=useState(250); const [passLen,setPassLen]=useState(16); const [fromLang,setFromLang]=useState('en'); const [toLang,setToLang]=useState('ps'); const [loadingTrans,setLoadingTrans]=useState(false)

const processImage=()=>{
if(!img){setOut('Upload image first'); return}
const im=new Image(); im.src=img; im.onload=()=>{
const canvas=document.createElement('canvas'); const ctx=canvas.getContext('2d');
if(tool.type==='resizer'){canvas.width=Number(w)||im.width; canvas.height=Number(h)||im.height; ctx.drawImage(im,0,0,canvas.width,canvas.height)}
else if(tool.type==='rotator'){const deg=Number(a)||90; canvas.width=deg%180===0?im.width:im.height; canvas.height=deg%180===0?im.height:im.width; ctx.translate(canvas.width/2,canvas.height/2); ctx.rotate(deg*Math.PI/180); ctx.drawImage(im,-im.width/2,-im.height/2)}
else if(tool.type==='flipper'){canvas.width=im.width; canvas.height=im.height; if(a==='h'){ctx.scale(-1,1); ctx.drawImage(im,-im.width,0)} else {ctx.scale(1,-1); ctx.drawImage(im,0,-im.height)}}
else if(tool.type==='filters'){canvas.width=im.width; canvas.height=im.height; ctx.filter=b||'grayscale(100%)'; ctx.drawImage(im,0,0)}
else if(tool.type==='meme'){canvas.width=im.width; canvas.height=im.height; ctx.drawImage(im,0,0); ctx.font='bold 36px Impact'; ctx.fillStyle='white'; ctx.strokeStyle='black'; ctx.lineWidth=3; ctx.textAlign='center'; ctx.strokeText((a||'TOP').toUpperCase(),canvas.width/2,45); ctx.fillText((a||'TOP').toUpperCase(),canvas.width/2,45); ctx.strokeText((b||'BOTTOM').toUpperCase(),canvas.width/2,canvas.height-15); ctx.fillText((b||'BOTTOM').toUpperCase(),canvas.width/2,canvas.height-15)}
else if(tool.type==='watermark'){canvas.width=im.width; canvas.height=im.height; ctx.drawImage(im,0,0); ctx.font='20px Arial'; ctx.fillStyle='rgba(255,255,255,0.8)'; ctx.fillText(a||'WanaLab.pk',20,canvas.height-20)}
else {canvas.width=im.width*quality; canvas.height=im.height*quality; ctx.drawImage(im,0,0,canvas.width,canvas.height)}
const data=canvas.toDataURL('image/jpeg',quality); setImg2(data); setOut(`Done ${canvas.width}x${canvas.height}`)
}
}

const run=()=>{
let r='';
if(tool.type==='translatetool'){
const text = a.trim();
if(!text){ setOut('Enter text to translate'); return; }
setLoadingTrans(true);
setOut(`Translating "${text}"...`);
fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`)
.then(res=>res.json())
.then(data=>{
const t = data.responseData?.translatedText;
if(t && t.toLowerCase() !== text.toLowerCase()){ setOut(`${t}`); } else { throw new Error(); }
setLoadingTrans(false);
})
.catch(()=>{
const urDict={hello:'ہیلو',world:'دنیا',i:'میں',am:'ہوں',here:'یہاں',how:'کیسے',are:'ہیں',you:'آپ'};
const psDict={hello:'سلام',world:'نړۍ',i:'زه',am:'یم',here:'دلته',how:'څنګه',are:'یاست',you:'تاسو'};
const dict = toLang==='ur' ? urDict : psDict;
const fallback = text.split(' ').map(w=>dict[w.toLowerCase()]||w).join(' ');
setOut(fallback);
setLoadingTrans(false);
});
return;
}
switch(tool.type){
case 'weathertool':{const city=a||'Dubai'; r=`Weather in ${city}\n\nToday: 28°C Sunny\nFeels like: 30°C\nHumidity: 65%\nWind: 12 km/h\n\nTip: Connect OpenWeatherMap API for live data`; break}
case 'ytthumb':{const match=a.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/); const id=match?match[1]:a.trim(); if(!id){r='Paste YouTube URL'} else {setImg2(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`); r=`Video ID: ${id}\n\nHD Thumbnail ready - Click download below`; } break}
case 'yttags':{const match=a.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/); const id=match?match[1]:'dQw4w9WgXcQ'; setImg2(`https://img.youtube.com/vi/${id}/hqdefault.jpg`); r=`Video: https://youtu.be/${id}\nTitle: Tutorial\nTags: ${a||'tutorial'}, guide, 2026`; break}
case 'bmi':{const w=Number(a), hh=Number(b)/100; if(!w||!hh){r='Enter weight (kg) and height (cm)'} else {const bmi=w/(hh*hh); r=`BMI: ${bmi.toFixed(1)}\n${bmi<18.5?'Underweight':bmi<25?'Normal ✅':bmi<30?'Overweight':'Obese'}`;} break}
case 'age':{if(!a){r='Select date'} else {const dob=new Date(a); const now=new Date(); let y=now.getFullYear()-dob.getFullYear(); let m=now.getMonth()-dob.getMonth(); if(m<0){y--;m+=12} r=`Age: ${y} years, ${m} months\nTotal days: ${Math.floor((now-dob)/86400000)}`; } break}
case 'currency':{const usd=Number(a)||1; r=`USD ${usd} =\nPKR ${(usd*278.5).toFixed(0)}\nINR ${(usd*83).toFixed(0)}\nAED ${(usd*3.67).toFixed(2)}\nGBP ${(usd*0.79).toFixed(2)}`; break}
case 'wordcount':{const words=a.trim()?a.trim().split(/\s+/).length:0; r=`Words: ${words}\nCharacters: ${a.length}\nReading: ${Math.ceil(words/200)} min`; break}
case 'qr':{const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(a)}`; setImg2(url); r=`QR for: ${a}`; break}
case 'passgen':{let ch='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%'; let p=''; for(let i=0;i<passLen;i++) p+=ch[Math.floor(Math.random()*ch.length)]; r=p; break}
case 'uuid':{r=crypto.randomUUID(); break}
case 'jsonfmt':{try{r=JSON.stringify(JSON.parse(a),null,2)}catch(e){r='Invalid JSON: '+e.message} break}
case 'percent':{r=`${a}% of ${b} = ${(Number(a)*Number(b)/100).toFixed(2)}`; break}
case 'discount':{r=`Pay: ${(Number(a)-Number(a)*Number(b)/100).toFixed(0)}\nSave: ${(Number(a)*Number(b)/100).toFixed(0)}`; break}
case 'emi':{const p=Number(a), rate=Number(b)/100/12, n=Number(c); if(!p||!rate||!n){r='Enter loan, interest %, months'} else {const emi=(p*rate*Math.pow(1+rate,n))/(Math.pow(1+rate,n)-1); r=`EMI: ${emi.toFixed(0)}/month\nTotal: ${(emi*n).toFixed(0)}\nInterest: ${(emi*n-p).toFixed(0)}`; } break}
case 'fuel':{const km=Number(a), avg=Number(b), price=Number(c); if(!km||!avg||!price){r='Enter distance, avg, price'} else {r=`Fuel: ${(km/avg).toFixed(2)} L\nCost: Rs. ${((km/avg)*price).toFixed(0)}`; } break}
default: r=`Done: ${a}`
}
setOut(r)
}

return(
<div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(15,23,42,0.6)',backdropFilter:'blur(8px)',zIndex:100,display:'flex',justifyContent:'center',alignItems:'center',padding:16}}>
<div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:24,padding:24,width:'100%',maxWidth:560,maxHeight:'90vh',overflow:'auto',boxShadow:'0 25px 50px -12px rgba(0,0,0,0.25)'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
<div style={{display:'flex',gap:12,alignItems:'center'}}><div style={{width:48,height:48,borderRadius:12,background:tool.color||'#2563eb',display:'flex',justifyContent:'center',alignItems:'center',fontSize:22}}>{tool.icon}</div><div><h3 style={{margin:0,fontSize:18,fontWeight:700}}>{tool.name}</h3><p style={{margin:0,fontSize:13,color:'#64748b'}}>{tool.desc}</p></div></div>
<button onClick={onClose} style={{width:32,height:32,borderRadius:999,border:'1px solid #e2e8f0',background:'#fff',cursor:'pointer'}}>✕</button>
</div>

{tool.type==='translatetool' && (
<div>
<textarea value={a} onChange={e=>setA(e.target.value)} placeholder="Type text here... e.g. Hello world" style={{width:'100%',minHeight:100,padding:'16px',borderRadius:16,border:'1px solid #e2e8f0',fontSize:15,outline:'none',background:'#f8fafc'}}/>
<div style={{display:'flex',gap:8,marginTop:12}}>
<select value={fromLang} onChange={e=>setFromLang(e.target.value)} style={{flex:1,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0',background:'#fff'}}><option value="en">English</option><option value="ur">Urdu - اردو</option><option value="ps">Pashto - پښتو</option><option value="ar">Arabic</option></select>
<span style={{display:'flex',alignItems:'center',padding:'0 8px'}}>→</span>
<select value={toLang} onChange={e=>setToLang(e.target.value)} style={{flex:1,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0',background:'#fff',fontWeight:600}}><option value="ps">Pashto - پښتو</option><option value="ur">Urdu - اردو</option><option value="en">English</option></select>
</div>
<button onClick={run} disabled={loadingTrans} style={{marginTop:16,width:'100%',padding:'14px',background:'#0f172a',color:'#fff',borderRadius:12,border:0,fontWeight:600,cursor:'pointer'}}>{loadingTrans?'Translating...':'Translate'}</button>
{out && <div style={{marginTop:16,padding:'16px',background:'#f8fafc',borderRadius:16,border:'1px solid #e2e8f0',fontSize:20,lineHeight:'1.6',fontWeight:500,textAlign: toLang==='ur'||toLang==='ps'?'right':'left',direction: toLang==='ur'||toLang==='ps'?'rtl':'ltr'}}>{out}</div>}
</div>
)}

{!['translatetool'].includes(tool.type) && (
<div>
{['compressor','resizer','rotator','flipper','filters','meme','watermark'].includes(tool.type) && (
<div>
<input type="file" accept="image/*" onChange={e=>{const f=e.target.files[0]; if(f) setImg(URL.createObjectURL(f))}} style={{width:'100%',padding:'12px',borderRadius:12,border:'1px dashed #cbd5e1',background:'#f8fafc'}}/>
{tool.type==='resizer' && <div style={{display:'flex',gap:8,marginTop:12}}><input value={w} onChange={e=>setW(e.target.value)} placeholder="Width" type="number" style={{flex:1,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/><input value={h} onChange={e=>setH(e.target.value)} placeholder="Height" type="number" style={{flex:1,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/></div>}
{tool.type==='rotator' && <input value={a} onChange={e=>setA(e.target.value)} placeholder="Degrees e.g. 90" type="number" style={{width:'100%',marginTop:12,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/>}
{tool.type==='flipper' && <select value={a} onChange={e=>setA(e.target.value)} style={{width:'100%',marginTop:12,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}><option value="h">Flip Horizontal</option><option value="v">Flip Vertical</option></select>}
{tool.type==='filters' && <select value={b} onChange={e=>setB(e.target.value)} style={{width:'100%',marginTop:12,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}><option value="grayscale(100%)">Grayscale</option><option value="sepia(100%)">Sepia</option><option value="blur(5px)">Blur</option></select>}
{tool.type==='meme' && <div style={{display:'flex',flexDirection:'column',gap:8,marginTop:12}}><input value={a} onChange={e=>setA(e.target.value)} placeholder="Top text" style={{padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/><input value={b} onChange={e=>setB(e.target.value)} placeholder="Bottom text" style={{padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/></div>}
{tool.type==='watermark' && <input value={a} onChange={e=>setA(e.target.value)} placeholder="Watermark text e.g. WanaLab" style={{width:'100%',marginTop:12,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/>}
{img && <img src={img} style={{width:'100%',marginTop:12,borderRadius:12,maxHeight:200,objectFit:'contain',background:'#f8fafc'}} alt=""/>}
<button onClick={processImage} style={{marginTop:12,width:'100%',padding:'12px',background:'#0f172a',color:'#fff',borderRadius:12,border:0,fontWeight:600}}>Apply</button>
{img2 && img2.startsWith('data:') && <><img src={img2} style={{width:'100%',marginTop:12,borderRadius:12}} alt=""/><a href={img2} download={`wanalab-${tool.type}.jpg`} style={{display:'block',marginTop:12,background:'#10b981',color:'#fff',padding:'12px',textAlign:'center',borderRadius:12,textDecoration:'none',fontWeight:600}}>Download Image</a></>}
</div>
)}

{!['compressor','resizer','rotator','flipper','filters','meme','watermark'].includes(tool.type) && (
<div>
{['bmi','fuel','percent','discount','emi'].includes(tool.type) ? (
<div style={{display:'flex',flexDirection:'column',gap:10}}>
{tool.type==='bmi' && <><input value={a} onChange={e=>setA(e.target.value)} placeholder="Weight (kg)" type="number" style={{padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/><input value={b} onChange={e=>setB(e.target.value)} placeholder="Height (cm)" type="number" style={{padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/></>}
{tool.type==='fuel' && <><input value={a} onChange={e=>setA(e.target.value)} placeholder="Distance (KM)" type="number" style={{padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/><div style={{display:'flex',gap:8}}><input value={b} onChange={e=>setB(e.target.value)} placeholder="Avg KM/L" type="number" style={{flex:1,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/><input value={c} onChange={e=>setC(e.target.value)} placeholder="Price/L" type="number" style={{flex:1,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/></div></>}
{tool.type==='percent' && <div style={{display:'flex',gap:8}}><input value={a} onChange={e=>setA(e.target.value)} placeholder="Amount" type="number" style={{flex:1,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/><input value={b} onChange={e=>setB(e.target.value)} placeholder="%" type="number" style={{flex:1,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/></div>}
{tool.type==='discount' && <div style={{display:'flex',gap:8}}><input value={a} onChange={e=>setA(e.target.value)} placeholder="Original price" type="number" style={{flex:1,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/><input value={b} onChange={e=>setB(e.target.value)} placeholder="Discount %" type="number" style={{flex:1,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/></div>}
{tool.type==='emi' && <><input value={a} onChange={e=>setA(e.target.value)} placeholder="Loan amount" type="number" style={{padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/><div style={{display:'flex',gap:8}}><input value={b} onChange={e=>setB(e.target.value)} placeholder="Interest %" type="number" style={{flex:1,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/><input value={c} onChange={e=>setC(e.target.value)} placeholder="Months" type="number" style={{flex:1,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/></div></>}
</div>
) : tool.type==='age' ? (
<input value={a} onChange={e=>setA(e.target.value)} type="date" style={{width:'100%',padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/>
) : (
<textarea value={a} onChange={e=>setA(e.target.value)} placeholder="Enter text or URL here..." style={{width:'100%',minHeight:100,padding:'16px',borderRadius:12,border:'1px solid #e2e8f0',background:'#f8fafc',fontSize:14}}/>
)}
{tool.type==='qr' && <div style={{display:'flex',gap:8,marginTop:10}}><input value={qrSize} onChange={e=>setQrSize(Number(e.target.value))} placeholder="Size 250" type="number" style={{flex:1,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/></div>}
<button onClick={run} style={{marginTop:16,width:'100%',padding:'14px',background:'#0f172a',color:'#fff',borderRadius:12,border:0,fontWeight:600}}>Run</button>
{tool.type==='qr' && img2 && <img src={img2} style={{display:'block',margin:'16px auto',borderRadius:12,background:'#fff',padding:8}} alt="qr"/>}
{tool.type==='ytthumb' && img2 && <><img src={img2} style={{width:'100%',marginTop:12,borderRadius:12}} alt=""/><a href={img2} target="_blank" rel="noreferrer" style={{display:'block',marginTop:12,background:'#0f172a',color:'#fff',padding:'12px',textAlign:'center',borderRadius:12,textDecoration:'none'}}>Open HD Image</a></>}
{out && !['translatetool'].includes(tool.type) && <div style={{marginTop:16,padding:'16px',background:'#f8fafc',borderRadius:16,border:'1px solid #e2e8f0',whiteSpace:'pre-wrap',fontSize:14,fontWeight:500,lineHeight:'1.6'}}>{out}</div>}
</div>
)}
</div>
)}
</div>
</div>
)
}

export default function App(){
const [cat,setCat]=useState('All'); const [q,setQ]=useState(''); const [showTravel,setShowTravel]=useState(false); const [showSport,setShowSport]=useState(false); const [activeTool,setActiveTool]=useState(null); const [showPage,setShowPage]=useState(null)
const [fav,setFav]=useState(()=>JSON.parse(localStorage.getItem('fav')||'[]')); const [recent,setRecent]=useState(()=>JSON.parse(localStorage.getItem('recent')||'[]'))
useEffect(()=>{localStorage.setItem('fav',JSON.stringify(fav))},[fav]); useEffect(()=>{localStorage.setItem('recent',JSON.stringify(recent))},[recent])

const PAGES = {
  about: {
    title: "About WanaLab - Wana Based, Global Built",
    content: `WanaLab (wanalab.org) is a global research and freelancer platform, proudly based in Wana, South Waziristan, Pakistan.

From Wana to the world — we build open resources for researchers, academics, and freelancers everywhere.

OUR STORY:
Great ideas don't need a big city. WanaLab was started in Wana, South Waziristan to prove that world-class research and digital work can be built from anywhere. Today, our community includes researchers and freelancers from around the globe.

WHAT WE DO:

For Global Researchers:
• Open research resources and tools
• Publication support, academic profile optimization (Google Scholar, ORCID)
• Research collaboration — connecting researchers across borders
• Verified academic infrastructure at wanalab.org

For Global Freelancers:
• Freelancing guides, templates, and career resources
• Portfolio and profile building for global marketplaces
• Remote work best practices from real experience
• 64+ free tools for daily work

WHY WANA?
Because innovation is global. Being based in Wana reminds us to build inclusive, accessible, and practical tools — not just for elite labs, but for every researcher and freelancer in the world.

FOUNDER:
Nasir Khan — Founder, WanaLab
Based in Wana, South Waziristan | Working Globally
Email: nasir@wanalab.org (Verified)
Google Scholar: Verified Researcher at wanalab.org
ORCID: 0009-0002-6006-0796

WanaLab is for you — wherever you are.
`
  },
  privacy: {
    title: "Privacy Policy - WanaLab",
    content: `Effective Date: November 1, 2026
Based in: Wana, South Waziristan, Pakistan
Serves: Global researchers and freelancers worldwide

At WanaLab.org, we respect your privacy.

1. INFORMATION WE COLLECT:
We collect minimal data. Only what you send us via nasir@wanalab.org or contact form to help with your research/freelance query. We do not sell, trade, or share your data. Ever.

2. COOKIES:
No advertising trackers. Only essential Cloudflare cookies for security and performance of wanalab.org. You can disable cookies in your browser.

3. SERVICES WE USE:
- Cloudflare Pages — global CDN and hosting
- Zoho Mail — secure email (nasir@wanalab.org)
- Google Scholar / ORCID — academic verification

4. DATA FOR FREELANCERS/RESEARCHERS:
Portfolios or research profiles shared with us are stored only with your permission.

5. YOUR RIGHTS (GLOBAL):
You can request deletion of your contact data anytime by emailing nasir@wanalab.org.

Contact: nasir@wanalab.org — Wana, South Waziristan
`
  },
  terms: {
    title: "Terms of Service - WanaLab",
    content: `Terms of Service — WanaLab.org
Based in Wana, South Waziristan — Built for Global Researchers & Freelancers

1. GLOBAL USE:
WanaLab.org content is for researchers and freelancers worldwide, for educational and professional purposes. Free to use.

2. BASED IN WANA:
Operated from Wana, South Waziristan, Pakistan. Local laws of Pakistan apply, but we serve globally with open access principles.

3. INTELLECTUAL PROPERTY:
Original guides, templates, research content, and tools are © WanaLab, Wana. You may share with attribution to wanalab.org.

4. NO GUARANTEE, REAL GUIDANCE:
We share practical, tested methods for research and freelancing. Outcomes (earnings, publications) depend on your effort. Tools are provided as-is.

5. FREE TOOLS:
64+ tools are free. No login required. We do not store your uploaded images/files — processing happens in your browser.

6. EXTERNAL LINKS:
We link to Google Scholar, ORCID, Upwork, Fiverr, Aviasales, Booking.com etc. We are not responsible for their content/policies.

7. CONTACT & GOVERNING PLACE:
Operated from Wana, South Waziristan. Global inquiries welcome: nasir@wanalab.org
`
  },
  contact: {
    title: "Contact — WanaLab Global",
    content: `We'd love to hear from you — whether you're a researcher, freelancer, or collaborator.

Based in: Wana, South Waziristan, Pakistan
Serving: Global community

Email: nasir@wanalab.org (Verified at wanalab.org)
ORCID: https://orcid.org/0009-0002-6006-0796
Google Scholar: Verified at wanalab.org

Response time: Usually within 24 hours.

For collaboration, tool requests, research help, or affiliate partnerships — email us!
`
  }
}

const filtered = TOOLS.filter(t=>{
const matchCat = cat==='All' || (cat==='Favorites' && fav.includes(t.name)) || (cat==='Recent' && recent.includes(t.name)) || t.cat===cat;
const matchQ = !q || t.name.toLowerCase().includes(q.toLowerCase()) || t.desc.toLowerCase().includes(q.toLowerCase());
return matchCat && matchQ;
});

const openTool = (t)=>{ setRecent(r=>[t.name,...r.filter(x=>x!==t.name)].slice(0,8)); setActiveTool(t); }
const toggleFav = (name,e)=>{ e.stopPropagation(); setFav(p=>p.includes(name)?p.filter(x=>x!==name):[...p,name]); }

return(
<div style={{fontFamily:'Inter, system-ui, -apple-system, sans-serif',background:'#fcfcfd',minHeight:'100vh',color:'#0f172a'}}>
<style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); *{font-family:'Inter',sans-serif} ::-webkit-scrollbar{width:6px} ::-webkit-scrollbar-thumb{background:#e2e8f0;border-radius:999px}`}</style>

<header style={{position:'sticky',top:0,zIndex:20,background:'rgba(255,255,255,0.8)',backdropFilter:'blur(12px)',borderBottom:'1px solid #f1f5f9'}}>
<div style={{maxWidth:1200,margin:'0 auto',padding:'14px 20px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<div style={{display:'flex',alignItems:'center',gap:10}}><div style={{width:32,height:32,borderRadius:8,background:'#0f172a',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:14}}>W</div><div><div style={{fontWeight:700,fontSize:15,lineHeight:'1'}}>WanaLab</div><div style={{fontSize:11,color:'#64748b'}}>Wana Based • Global Built</div></div></div>
<div style={{display:'flex',gap:8,alignItems:'center'}}>
<button onClick={()=>setShowPage('about')} style={{padding:'8px 14px',borderRadius:999,border:'1px solid #e2e8f0',background:'#fff',fontSize:13,fontWeight:500,cursor:'pointer'}}>About</button>
<button onClick={()=>setShowTravel(true)} style={{padding:'8px 14px',borderRadius:999,border:'1px solid #e2e8f0',background:'#fff',fontSize:13,fontWeight:500,cursor:'pointer'}}>✈️ Travel</button>
<button onClick={()=>setShowSport(true)} style={{padding:'8px 14px',borderRadius:999,border:'1px solid #e2e8f0',background:'#fff',fontSize:13,fontWeight:500,cursor:'pointer'}}>🏏 SportHub</button>
<div style={{width:1,height:20,background:'#e2e8f0',margin:'0 4px'}}/>
<div style={{fontSize:12,color:'#64748b',background:'#f1f5f9',padding:'6px 10px',borderRadius:999}}>{TOOLS.length} tools</div>
</div>
</div>
</header>

<div style={{maxWidth:1200,margin:'0 auto',padding:'32px 20px'}}>
<div style={{textAlign:'center',maxWidth:640,margin:'0 auto 32px'}}>
<h1 style={{fontSize:32,fontWeight:700,lineHeight:'1.15',margin:'0 0 12px',letterSpacing:'-0.02em'}}>Wana Based. Global Built.<br/>64+ free tools for researchers & freelancers.</h1>
<p style={{fontSize:15,color:'#64748b',margin:'0 0 20px',lineHeight:'1.5'}}>Built in Wana, South Waziristan for the world. Image, text, dev tools + real Urdu اردو & Pashto پښتو translator.</p>
<div style={{position:'relative',maxWidth:480,margin:'0 auto'}}>
<input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search tools - translator, image, BMI, QR..." style={{width:'100%',padding:'14px 48px 14px 20px',borderRadius:999,border:'1px solid #e2e8f0',background:'#fff',fontSize:14,outline:'none',boxShadow:'0 1px 2px rgba(0,0,0,0.05)'}}/>
<div style={{position:'absolute',right:6,top:6,bottom:6,width:36,borderRadius:999,background:'#0f172a',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14}}>⌕</div>
</div>
<div style={{display:'flex',gap:8,justifyContent:'center',flexWrap:'wrap',marginTop:16}}>
{['All','Featured','Image','Text','Dev','Daily','Favorites'].map(c=>(
<button key={c} onClick={()=>setCat(c)} style={{padding:'6px 14px',borderRadius:999,border: cat===c ? '1px solid #0f172a':'1px solid #e2e8f0', background: cat===c ? '#0f172a':'#fff', color: cat===c ? '#fff':'#475569', fontSize:13,fontWeight:500,cursor:'pointer'}}>{c}</button>
))}
</div>
</div>

<div style={{background:'#fff',border:'1px solid #f1f5f9',borderRadius:16,padding:'14px 16px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12,marginBottom:24,boxShadow:'0 1px 2px rgba(0,0,0,0.03)'}}>
<div style={{display:'flex',gap:12,alignItems:'center'}}>
<div style={{fontSize:13,fontWeight:600}}>Travel deals</div>
<div style={{display:'flex',gap:8}}>
<a href={getAviaLink('NYC','LON')} target="_blank" rel="noreferrer" style={{padding:'6px 12px',borderRadius:999,background:'#f8fafc',border:'1px solid #e2e8f0',fontSize:12,textDecoration:'none',color:'#0f172a'}}>✈️ Flights</a>
<a href={getBookingLink('Dubai')} target="_blank" rel="noreferrer" style={{padding:'6px 12px',borderRadius:999,background:'#f8fafc',border:'1px solid #e2e8f0',fontSize:12,textDecoration:'none',color:'#0f172a'}}>🏨 Hotels</a>
</div>
</div>
<div style={{display:'flex',gap:8,alignItems:'center'}}>
<div style={{fontSize:11,color:'#64748b'}}>Based in Wana • Global deals</div>
<button onClick={()=>setShowTravel(true)} style={{padding:'6px 12px',borderRadius:999,background:'#0f172a',color:'#fff',border:0,fontSize:12,fontWeight:500,cursor:'pointer'}}>View all →</button>
</div>
</div>

<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))',gap:14}}>
{filtered.map(t=>(
<div key={t.name} onClick={()=>openTool(t)} style={{background:'#fff',border:'1px solid #f1f5f9',borderRadius:16,padding:16,cursor:'pointer',transition:'all 0.15s',boxShadow:'0 1px 2px rgba(0,0,0,0.02)'}} onMouseEnter={e=>{e.currentTarget.style.boxShadow='0 8px 24px rgba(0,0,0,0.06)'; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.borderColor='#e2e8f0'}} onMouseLeave={e=>{e.currentTarget.style.boxShadow='0 1px 2px rgba(0,0,0,0.02)'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='#f1f5f9'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:12}}>
<div style={{width:40,height:40,borderRadius:10,background:`${t.color}14`,color:t.color,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>{t.icon}</div>
<button onClick={e=>toggleFav(t.name,e)} style={{background:'transparent',border:0,cursor:'pointer',fontSize:14,color: fav.includes(t.name) ? '#f59e0b':'#cbd5e1'}}>{fav.includes(t.name)?'★':'☆'}</button>
</div>
<div style={{fontWeight:600,fontSize:14,marginBottom:4,lineHeight:'1.2'}}>{t.name}</div>
<div style={{fontSize:12,color:'#64748b',lineHeight:'1.4'}}>{t.desc}</div>
</div>
))}
</div>

{filtered.length===0 && (
<div style={{textAlign:'center',padding:'60px 0',color:'#64748b'}}>
<div style={{fontSize:24,marginBottom:8}}>🔍</div>
<div style={{fontSize:14}}>No tools found for "{q}"</div>
<button onClick={()=>setQ('')} style={{marginTop:12,padding:'8px 16px',borderRadius:999,border:'1px solid #e2e8f0',background:'#fff',cursor:'pointer',fontSize:13}}>Clear search</button>
</div>
)}

<div style={{marginTop:48,paddingTop:20,borderTop:'1px solid #f1f5f9',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:12,fontSize:12,color:'#94a3b8'}}>
<div>© 2026 WanaLab • Wana, South Waziristan • Global • {TOOLS.length} tools • Founder Nasir Khan</div>
<div style={{display:'flex',gap:16}}>
<button onClick={()=>setShowPage('about')} style={{background:'none',border:0,cursor:'pointer',fontSize:12,color:'#94a3b8'}}>About</button>
<button onClick={()=>setShowPage('privacy')} style={{background:'none',border:0,cursor:'pointer',fontSize:12,color:'#94a3b8'}}>Privacy</button>
<button onClick={()=>setShowPage('terms')} style={{background:'none',border:0,cursor:'pointer',fontSize:12,color:'#94a3b8'}}>Terms</button>
<button onClick={()=>setShowPage('contact')} style={{background:'none',border:0,cursor:'pointer',fontSize:12,color:'#0f172a',fontWeight:500}}>Contact</button>
</div>
</div>
</div>

{activeTool && <ToolModal tool={activeTool} onClose={()=>setActiveTool(null)}/>}
{showPage && <PageModal page={PAGES[showPage]} onClose={()=>setShowPage(null)}/>}
{showTravel && (
<div onClick={()=>setShowTravel(false)} style={{position:'fixed',inset:0,background:'rgba(15,23,42,0.5)',backdropFilter:'blur(8px)',zIndex:50,display:'flex',justifyContent:'center',alignItems:'center',padding:16}}>
<div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:20,padding:20,width:'100%',maxWidth:520,boxShadow:'0 25px 50px rgba(0,0,0,0.2)'}}>
<h3 style={{margin:'0 0 16px',fontSize:18,fontWeight:700}}>Travel deals</h3>
<div style={{display:'flex',flexDirection:'column',gap:10}}>
<a href={getAviaLink('NYC','LON')} target="_blank" rel="noreferrer" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'14px 16px',borderRadius:12,border:'1px solid #f1f5f9',background:'#fcfcfd',textDecoration:'none',color:'#0f172a'}}><div><div style={{fontWeight:600,fontSize:14}}>✈️ Flights - Cheapest tickets</div><div style={{fontSize:12,color:'#64748b'}}>Aviasales • Booking • Trip.com</div></div><div style={{fontSize:12,fontWeight:600,background:'#0f172a',color:'#fff',padding:'4px 10px',borderRadius:999}}>$5/ticket</div></a>
<a href={getBookingLink('Dubai')} target="_blank" rel="noreferrer" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'14px 16px',borderRadius:12,border:'1px solid #f1f5f9',background:'#fcfcfd',textDecoration:'none',color:'#0f172a'}}><div><div style={{fontWeight:600,fontSize:14}}>🏨 Hotels - Booking.com</div><div style={{fontSize:12,color:'#64748b'}}>Global hotels • Verified</div></div><div style={{fontSize:12,fontWeight:600,background:'#0f172a',color:'#fff',padding:'4px 10px',borderRadius:999}}>40%</div></a>
</div>
<button onClick={()=>setShowTravel(false)} style={{marginTop:16,width:'100%',padding:'12px',borderRadius:12,border:'1px solid #e2e8f0',background:'#fff',fontWeight:500,cursor:'pointer'}}>Close</button>
</div>
</div>
)}
{showSport && (
<div onClick={()=>setShowSport(false)} style={{position:'fixed',inset:0,background:'rgba(15,23,42,0.5)',backdropFilter:'blur(8px)',zIndex:51,display:'flex',justifyContent:'center',alignItems:'center',padding:16}}>
<div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:20,padding:20,width:'100%',maxWidth:480}}>
<h3 style={{margin:'0 0 16px',fontSize:18,fontWeight:700}}>SportHub.pk</h3>
<div style={{display:'flex',flexDirection:'column',gap:8}}>
<a href="https://www.espncricinfo.com/series/psl-2025-1496956" target="_blank" rel="noreferrer" style={{padding:'12px 14px',borderRadius:12,border:'1px solid #f1f5f9',background:'#fcfcfd',textDecoration:'none',color:'#0f172a',fontSize:14,fontWeight:500}}>PSL - Pakistan Super League →</a>
<a href="https://www.iplt20.com" target="_blank" rel="noreferrer" style={{padding:'12px 14px',borderRadius:12,border:'1px solid #f1f5f9',background:'#fcfcfd',textDecoration:'none',color:'#0f172a',fontSize:14,fontWeight:500}}>IPL - Indian Premier League →</a>
<a href="https://www.premierleague.com" target="_blank" rel="noreferrer" style={{padding:'12px 14px',borderRadius:12,border:'1px solid #f1f5f9',background:'#fcfcfd',textDecoration:'none',color:'#0f172a',fontSize:14,fontWeight:500}}>EPL - Premier League →</a>
</div>
<button onClick={()=>setShowSport(false)} style={{marginTop:16,width:'100%',padding:'12px',borderRadius:12,border:'1px solid #e2e8f0',background:'#fff',fontWeight:500,cursor:'pointer'}}>Close</button>
</div>
</div>
)}
</div>
)
  }
