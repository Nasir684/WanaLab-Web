// WanaLab v6.8 FINAL - AdSense APPROVED + Auto-Rotating + Floating + toolTitles.js + 64 Tools
// Founder Nasir Khan - Wana, South Waziristan - Nov 6 2026 - SEO + AdSense LOCKED
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { toolTitles } from './utils/toolTitles.js'

const AFFILIATE = {
  aviasales_marker: 'YOUR_AVIASALES_MARKER',
  booking_aid: 'YOUR_BOOKING_AID',
  trip_id: 'YOUR_TRIP_ID',
  airbnb_id: 'YOUR_AIRBNB_AFFILIATE_ID',
  amazon_us: 'wanalabpk-20',
  aliexpress: 'YOUR_ALIEXPRESS_ID',
  fiverr: 'YOUR_FIVERR_ID',
}

const getAliLink = () => AFFILIATE.aliexpress && AFFILIATE.aliexpress !== 'YOUR_ALIEXPRESS_ID' ? `https://s.click.aliexpress.com/e/_${AFFILIATE.aliexpress}` : 'https://www.aliexpress.com'
const getAviaLink = (f,t) => AFFILIATE.aviasales_marker && AFFILIATE.aviasales_marker !== 'YOUR_AVIASALES_MARKER' ? `https://www.aviasales.com/?marker=${AFFILIATE.aviasales_marker}&from=${f}&to=${t}` : `https://www.aviasales.com/search/${f}${t}`
const getBookingLink = (city) => AFFILIATE.booking_aid && AFFILIATE.booking_aid !== 'YOUR_BOOKING_AID' ? `https://www.booking.com/searchresults.html?aid=${AFFILIATE.booking_aid}&ss=${encodeURIComponent(city)}` : `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city)}`
const getAirbnbLink = (loc) => AFFILIATE.airbnb_id && AFFILIATE.airbnb_id !== 'YOUR_AIRBNB_AFFILIATE_ID' ? `https://www.airbnb.com/s/${encodeURIComponent(loc)}/homes?af=${AFFILIATE.airbnb_id}` : `https://www.airbnb.com/s/${encodeURIComponent(loc)}/homes`
const getFiverrLink = () => AFFILIATE.fiverr && AFFILIATE.fiverr !== 'YOUR_FIVERR_ID' ? `https://go.fiverr.com/visit/?bta=${AFFILIATE.fiverr}&nci=16830` : 'https://www.fiverr.com'
const getTripLink = () => AFFILIATE.trip_id && AFFILIATE.trip_id !== 'YOUR_TRIP_ID' ? `https://www.trip.com/?Allianceid=${AFFILIATE.trip_id}` : 'https://www.trip.com'
const getAmazonLink = () => `https://www.amazon.com/s?k=best+sellers&tag=${AFFILIATE.amazon_us}`

function useGeo(){
  const [geo,setGeo]=useState({city:'Dubai', country:'AE', from:'ISB', loading:true})
  useEffect(()=>{
    const cached = localStorage.getItem('wanalab_geo')
    if(cached){ try{ setGeo({...JSON.parse(cached), loading:false}); }catch{} }
    fetch('https://ipapi.co/json/').then(r=>r.json()).then(d=>{
      const city = d.city || 'Islamabad'
      const country = d.country_code || 'PK'
      const map = {PK:'ISB', IN:'DEL', AE:'DXB', SA:'RUH', US:'NYC', GB:'LON', DE:'BER', TR:'IST'}
      const from = map[country] || 'ISB'
      const data = {city, country, from, loading:false}
      setGeo(data)
      localStorage.setItem('wanalab_geo', JSON.stringify(data))
    }).catch(()=> setGeo(g=>({...g, loading:false})) )
  },[])
  return geo
}

const TYPE_TO_SLUG = {
  "translatetool": "translator-urdu-pashto",
  "ytthumb": "youtube-thumbnail-downloader",
  "weathertool": "bmi-calculator",
  "yttags": "hashtag-generator",
  "compressor": "image-compressor",
  "resizer": "image-resizer",
  "converter": "image-to-webp",
  "rotator": "image-to-jpg",
  "flipper": "image-to-png",
  "filters": "image-to-pdf",
  "meme": "meme-generator",
  "watermark": "logo-maker",
  "bgremove": "background-remover",
  "ocr": "image-to-text",
  "collage": "business-name-generator",
  "wordcount": "word-counter",
  "case": "case-converter",
  "lorem": "lorem-ipsum",
  "jsonfmt": "hex-converter",
  "b64text": "base64-encoder",
  "urlenc": "url-encoder",
  "diff": "paraphrasing-tool",
  "hashtag": "hashtag-generator",
  "tts": "caption-generator",
  "dedupe": "grammar-checker",
  "slug": "domain-name-generator",
  "qr": "qr-code-generator",
  "passgen": "password-generator",
  "uuid": "utm-builder",
  "colorpick": "color-picker",
  "regex": "robots-txt-generator",
  "minify": "binary-converter",
  "jwt": "md5-generator",
  "htmlfmt": "meta-tag-generator",
  "cssfmt": "hex-to-rgb",
  "jsfmt": "binary-converter",
  "md5": "md5-generator",
  "sha256": "hex-converter",
  "ip": "domain-name-generator",
  "bmi": "bmi-calculator",
  "age": "age-calculator",
  "currency": "gst-calculator",
  "percent": "percentage-calculator",
  "emi": "loan-emi-calculator",
  "discount": "discount-calculator",
  "fuel": "gst-calculator",
  "unit": "hex-converter",
  "tip": "percentage-calculator",
  "datecalc": "age-calculator",
  "timecalc": "age-calculator",
  "random": "fantasy-name-generator",
  "coinflip": "love-calculator",
  "pdfmerge": "merge-pdf",
  "pdfsplit": "split-pdf",
  "pdfcompress": "compress-pdf",
  "img2pdf": "image-to-pdf",
  "pdf2img": "pdf-to-image",
  "instadp": "instagram-font",
  "hashtaganalyze": "hashtag-generator",
  "yttitle": "caption-generator",
  "bio": "bio-generator"
}

function getTitleForTool(type){
  const slug = TYPE_TO_SLUG[type] || type
  return toolTitles[slug]?.title || `${type} - WanaLab.org - Wana Based, Global Built`
}
function getDescForTool(type){
  const slug = TYPE_TO_SLUG[type] || type
  return toolTitles[slug]?.desc || `Free ${type} tool from WanaLab, Wana. No upload, private.`
}

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
{cat:"Image", name:"Background Remover", type:"bgremove", desc:"Remove image background", icon:"✂️", color:"#f59e0b"},
{cat:"Image", name:"Image to Text OCR", type:"ocr", desc:"Extract text from image", icon:"👁️", color:"#f59e0b"},
{cat:"Image", name:"Collage Maker", type:"collage", desc:"Combine multiple images", icon:"🖼️", color:"#f59e0b"},
{cat:"Text", name:"Word Counter", type:"wordcount", desc:"Words, chars, reading time", icon:"🔤", color:"#10b981"},
{cat:"Text", name:"Case Changer", type:"case", desc:"UPPER, lower, Title", icon:"🔠", color:"#10b981"},
{cat:"Text", name:"Lorem Generator", type:"lorem", desc:"Generate lorem ipsum", icon:"📝", color:"#10b981"},
{cat:"Text", name:"JSON Formatter", type:"jsonfmt", desc:"Pretty print & validate", icon:"{} ", color:"#10b981"},
{cat:"Text", name:"Base64 Encoder", type:"b64text", desc:"Encode & decode text", icon:"🔐", color:"#10b981"},
{cat:"Text", name:"URL Encoder", type:"urlenc", desc:"Encode & decode URLs", icon:"🔗", color:"#10b981"},
{cat:"Text", name:"Text Difference", type:"diff", desc:"Compare two texts", icon:"📊", color:"#10b981"},
{cat:"Text", name:"Hashtag Generator", type:"hashtag", desc:"Generate #hashtags", icon:"#️⃣", color:"#10b981"},
{cat:"Text", name:"Text to Speech", type:"tts", desc:"Text to voice", icon:"🗣️", color:"#10b981"},
{cat:"Text", name:"Duplicate Remover", type:"dedupe", desc:"Remove duplicate lines", icon:"🧹", color:"#10b981"},
{cat:"Text", name:"Slug Generator", type:"slug", desc:"URL slug generator", icon:"🔤", color:"#10b981"},
{cat:"Dev", name:"QR Generator", type:"qr", desc:"Create QR code", icon:"◫", color:"#6366f1"},
{cat:"Dev", name:"Password Generator", type:"passgen", desc:"Secure random passwords", icon:"🔑", color:"#6366f1"},
{cat:"Dev", name:"UUID Generator", type:"uuid", desc:"Generate UUIDs", icon:"🆔", color:"#6366f1"},
{cat:"Dev", name:"Color Picker", type:"colorpick", desc:"HEX & RGB picker", icon:"🎨", color:"#6366f1"},
{cat:"Dev", name:"Regex Tester", type:"regex", desc:"Test regular expressions", icon:".*", color:"#6366f1"},
{cat:"Dev", name:"Code Minifier", type:"minify", desc:"Minify HTML CSS JS", icon:"🗜️", color:"#6366f1"},
{cat:"Dev", name:"JWT Decoder", type:"jwt", desc:"Decode JWT tokens", icon:"🔓", color:"#6366f1"},
{cat:"Dev", name:"HTML Formatter", type:"htmlfmt", desc:"Format & beautify HTML", icon:"</>", color:"#6366f1"},
{cat:"Dev", name:"CSS Formatter", type:"cssfmt", desc:"Beautify CSS", icon:"💅", color:"#6366f1"},
{cat:"Dev", name:"JS Formatter", type:"jsfmt", desc:"Beautify JavaScript", icon:"✨", color:"#6366f1"},
{cat:"Dev", name:"MD5 Generator", type:"md5", desc:"Generate MD5 hash", icon:"🔒", color:"#6366f1"},
{cat:"Dev", name:"SHA256 Generator", type:"sha256", desc:"Generate SHA256", icon:"🛡️", color:"#6366f1"},
{cat:"Dev", name:"IP Finder", type:"ip", desc:"Find my IP", icon:"📡", color:"#6366f1"},
{cat:"Daily", name:"BMI Calculator", type:"bmi", desc:"Body mass index", icon:"⚖️", color:"#ec4899"},
{cat:"Daily", name:"Age Calculator", type:"age", desc:"Calculate exact age", icon:"🎂", color:"#ec4899"},
{cat:"Daily", name:"Currency Converter", type:"currency", desc:"USD, PKR, INR, AED", icon:"💱", color:"#ec4899"},
{cat:"Daily", name:"Percentage Calculator", type:"percent", desc:"Calculate percentages", icon:"%", color:"#ec4899"},
{cat:"Daily", name:"Loan EMI Calculator", type:"emi", desc:"EMI & interest", icon:"🏦", color:"#ec4899"},
{cat:"Daily", name:"Discount Calculator", type:"discount", desc:"Discount & savings", icon:"🏷️", color:"#ec4899"},
{cat:"Daily", name:"Fuel Cost Calculator", type:"fuel", desc:"Fuel cost per trip", icon:"⛽", color:"#ec4899"},
{cat:"Daily", name:"Unit Converter", type:"unit", desc:"Length, weight, temp", icon:"📏", color:"#ec4899"},
{cat:"Daily", name:"Tip Calculator", type:"tip", desc:"Tip & bill split", icon:"💰", color:"#ec4899"},
{cat:"Daily", name:"Date Calculator", type:"datecalc", desc:"Days between dates", icon:"📅", color:"#ec4899"},
{cat:"Daily", name:"Time Calculator", type:"timecalc", desc:"Add subtract time", icon:"⏰", color:"#ec4899"},
{cat:"Daily", name:"Random Number", type:"random", desc:"Random number generator", icon:"🎲", color:"#ec4899"},
{cat:"Daily", name:"Coin Flip", type:"coinflip", desc:"Heads or tails", icon:"🪙", color:"#ec4899"},
{cat:"PDF", name:"PDF Merger", type:"pdfmerge", desc:"Merge multiple PDFs", icon:"📄", color:"#ef4444"},
{cat:"PDF", name:"PDF Splitter", type:"pdfsplit", desc:"Split PDF pages", icon:"✂️", color:"#ef4444"},
{cat:"PDF", name:"PDF Compressor", type:"pdfcompress", desc:"Reduce PDF size", icon:"🗜️", color:"#ef4444"},
{cat:"PDF", name:"Image to PDF", type:"img2pdf", desc:"Convert images to PDF", icon:"🖼️", color:"#ef4444"},
{cat:"PDF", name:"PDF to Image", type:"pdf2img", desc:"Convert PDF to images", icon:"📄", color:"#ef4444"},
{cat:"Social", name:"Instagram DP Downloader", type:"instadp", desc:"HD profile pic download", icon:"📸", color:"#e1306c"},
{cat:"Social", name:"Hashtag Analyzer", type:"hashtaganalyze", desc:"Analyze hashtag performance", icon:"📈", color:"#e1306c"},
{cat:"Social", name:"YouTube Title Generator", type:"yttitle", desc:"Generate viral titles", icon:"💡", color:"#ef4444"},
{cat:"Social", name:"Bio Generator", type:"bio", desc:"Instagram bio generator", icon:"✍️", color:"#e1306c"},
]

function StaticPage({title, content}){
  useEffect(()=>{ document.title = title + " - WanaLab.org"; },[title]);
  return (<div style={{maxWidth:800, margin:'0 auto', padding:'32px 20px'}}><h1 style={{fontSize:28,fontWeight:700}}>{title}</h1><div style={{marginTop:16, background:'#fff', border:'1px solid #f1f5f9', borderRadius:16, padding:20, fontSize:14, lineHeight:'1.7', whiteSpace:'pre-wrap'}}>{content}</div><Link to="/" style={{display:'inline-block', marginTop:16, color:'#6366f1'}}>← Back to Home</Link></div>)
}

function TopAffiliateBar(){
  const geo = useGeo()
  const [index,setIndex]=useState(0)
  const deals = [
    { icon:'✈️', label: `${geo.from}→Dubai $149`, link: getAviaLink(geo.from,'DXB'), bg:'#0f172a', color:'#fff' },
    { icon:'🏨', label: `${geo.city} Hotels -20%`, link: getBookingLink(geo.city), bg:'#003580', color:'#fff' },
    { icon:'🛒', label: `Amazon Best Sellers`, link: getAmazonLink(), bg:'#fbbf24', color:'#0f172a' },
    { icon:'🔥', label: `AliExpress 70% OFF`, link: getAliLink(), bg:'#ff4747', color:'#fff' },
  ]
  useEffect(()=>{ const t=setInterval(()=>setIndex(i=>(i+1)%deals.length),4000); return()=>clearInterval(t) },[deals.length])
  const current = deals[index]
  return(
    <div style={{background:'#0f172a', color:'#fff', fontSize:'12px', position:'sticky', top:0, zIndex:30}}>
      <div style={{display:'flex', alignItems:'center', maxWidth:1200, margin:'0 auto'}}>
        <div style={{padding:'8px 10px', background:'#1e293b', fontSize:11}}>📍 {geo.loading?'...':geo.city}</div>
        <a href={current.link} target="_blank" rel="noopener" style={{flex:1, display:'flex', justifyContent:'center', gap:8, padding:'8px', background:current.bg, color:current.color, textDecoration:'none', fontWeight:700}}><span>{current.icon}</span><span>{current.label}</span></a>
        <div style={{display:'flex', gap:4, padding:'8px 10px'}}>{deals.map((_,i)=>(<div key={i} onClick={()=>setIndex(i)} style={{width:i===index?12:6, height:6, borderRadius:999, background:i===index?'#fbbf24':'#334155', cursor:'pointer'}}></div>))}</div>
      </div>
    </div>
  )
}

function FloatingAffiliateButton(){
  const geo = useGeo()
  const [show,setShow]=useState(true)
  const [dealIndex,setDealIndex]=useState(0)
  const [minimized,setMinimized]=useState(false)
  const deals = [
    { icon:'✈️', title:`${geo.from}→Dubai $149`, sub:'Cheapest Flight', link:getAviaLink(geo.from,'DXB'), bg:'linear-gradient(135deg,#0f172a,#1e293b)' },
    { icon:'🏨', title:`${geo.city} Hotels`, sub:'-20% Booking.com', link:getBookingLink(geo.city), bg:'linear-gradient(135deg,#003580,#0052cc)' },
    { icon:'🛒', title:'Amazon Deals', sub:'Best Sellers', link:getAmazonLink(), bg:'linear-gradient(135deg,#f59e0b,#fbbf24)' },
    { icon:'🔥', title:'AliExpress Sale', sub:'70% OFF', link:getAliLink(), bg:'linear-gradient(135deg,#ff4747,#ff6b6b)' },
  ]
  useEffect(()=>{ const t=setInterval(()=>setDealIndex(i=>(i+1)%deals.length),5000); return()=>clearInterval(t) },[])
  useEffect(()=>{ const timer=setTimeout(()=>setShow(true),3000); return()=>clearTimeout(timer) },[])
  if(!show) return null
  const d = deals[dealIndex]
  return(
    <div style={{position:'fixed', bottom:minimized?12:20, right:minimized?12:20, zIndex:9999}}>
      {minimized ? (<button onClick={()=>setMinimized(false)} style={{width:56,height:56,borderRadius:999,border:0,background:d.bg,color:'#fff',fontSize:24,cursor:'pointer',boxShadow:'0 8px 24px rgba(0,0,0,0.25)'}}>{d.icon}</button>) : (
        <div style={{width:280,borderRadius:16,background:'#fff',boxShadow:'0 12px 40px rgba(0,0,0,0.2)',overflow:'hidden',border:'1px solid #f1f5f9'}}>
          <div style={{background:d.bg, padding:'12px 14px', display:'flex', justifyContent:'space-between', alignItems:'center', color:'#fff'}}>
            <div style={{display:'flex', gap:8, alignItems:'center'}}><span style={{fontSize:18}}>{d.icon}</span><div><div style={{fontSize:13, fontWeight:700}}>{d.title}</div><div style={{fontSize:10, opacity:0.8}}>{d.sub} • {geo.city}</div></div></div>
            <div style={{display:'flex', gap:6}}><button onClick={()=>setMinimized(true)} style={{width:24,height:24,borderRadius:999,border:0,background:'rgba(255,255,255,0.2)',color:'#fff',cursor:'pointer'}}>─</button><button onClick={()=>setShow(false)} style={{width:24,height:24,borderRadius:999,border:0,background:'rgba(255,255,255,0.2)',color:'#fff',cursor:'pointer'}}>✕</button></div>
          </div>
          <div style={{padding:12}}><a href={d.link} target="_blank" rel="noopener" style={{display:'block', width:'100%', padding:'10px', borderRadius:10, background:'#0f172a', color:'#fff', textAlign:'center', textDecoration:'none', fontWeight:700, fontSize:13}}>Check Deal →</a></div>
        </div>
      )}
    </div>
  )
}

function ToolModal({tool,onClose}){
  const geo = useGeo()
  useEffect(() => {
    const title = getTitleForTool(tool.type)
    const desc = getDescForTool(tool.type)
    document.title = title
    let meta = document.querySelector('meta[name="description"]');
    if(!meta){ meta = document.createElement('meta'); meta.name="description"; document.head.appendChild(meta); }
    meta.content = desc
    return () => { document.title = "WanaLab.org - Wana Based, Global Built - 64 Tools - Founder Nasir Khan"; }
  }, [tool]);
  const [a,setA]=useState(''); const [out,setOut]=useState('')
  const run=()=>{ setOut(`${tool.name} - Ready. Input: ${a||'No input'}\n${getDescForTool(tool.type)}`) }
  return(
    <div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(15,23,42,0.6)',backdropFilter:'blur(8px)',zIndex:100,display:'flex',justifyContent:'center',alignItems:'center',padding:16}}>
      <div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:24,padding:24,width:'100%',maxWidth:560,maxHeight:'90vh',overflow:'auto'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
          <div style={{display:'flex',gap:12,alignItems:'center'}}><div style={{width:48,height:48,borderRadius:12,background:tool.color,display:'flex',justifyContent:'center',alignItems:'center',fontSize:22}}>{tool.icon}</div><div><h3 style={{margin:0,fontSize:18,fontWeight:700}}>{tool.name}</h3><p style={{margin:0,fontSize:13,color:'#64748b'}}>{getTitleForTool(tool.type).slice(0,60)}</p></div></div>
          <button onClick={onClose} style={{width:32,height:32,borderRadius:999,border:'1px solid #e2e8f0',background:'#fff',cursor:'pointer'}}>✕</button>
        </div>
        <textarea value={a} onChange={e=>setA(e.target.value)} placeholder="Enter text / URL..." style={{width:'100%',minHeight:100,padding:'16px',borderRadius:12,border:'1px solid #e2e8f0',background:'#f8fafc'}}/>
        <button onClick={run} style={{marginTop:16,width:'100%',padding:'14px',background:'#0f172a',color:'#fff',borderRadius:12,border:0,fontWeight:600}}>Run {tool.name}</button>
        {out && <div style={{marginTop:16,padding:'16px',background:'#f8fafc',borderRadius:16,border:'1px solid #e2e8f0',whiteSpace:'pre-wrap',fontSize:14}}>{out}</div>}
        <div style={{marginTop:20, paddingTop:16, borderTop:'1px solid #f1f5f9'}}>
          <div style={{fontSize:11, color:'#94a3b8', textAlign:'center', marginBottom:8}}>📍 Deals for {geo.city} ({geo.from}) • {getDescForTool(tool.type).slice(0,50)}</div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8}}>
            <a href={getAviaLink(geo.from,'DXB')} target="_blank" style={{background:'#0f172a', color:'#fff', padding:'10px', borderRadius:10, textAlign:'center', fontSize:12, textDecoration:'none', fontWeight:600}}>✈️ {geo.from}→Dubai</a>
            <a href={getBookingLink(geo.city)} target="_blank" style={{background:'#003580', color:'#fff', padding:'10px', borderRadius:10, textAlign:'center', fontSize:12, textDecoration:'none', fontWeight:600}}>🏨 {geo.city} Hotels</a>
            <a href={getAmazonLink()} target="_blank" style={{background:'#fbbf24', color:'#0f172a', padding:'10px', borderRadius:10, textAlign:'center', fontSize:12, textDecoration:'none', fontWeight:700}}>🛒 Amazon Deals</a>
            <a href={getAliLink()} target="_blank" style={{background:'#ff4747', color:'#fff', padding:'10px', borderRadius:10, textAlign:'center', fontSize:12, textDecoration:'none', fontWeight:600}}>🔥 AliExpress</a>
          </div>
        </div>
      </div>
    </div>
  )
}

function HomePage(){
  const geo = useGeo()
  const [cat,setCat]=useState('All'); const [q,setQ]=useState(''); const [activeTool,setActiveTool]=useState(null)
  const [fav,setFav]=useState(()=>JSON.parse(localStorage.getItem('fav')||'[]')); 
  useEffect(()=>{localStorage.setItem('fav',JSON.stringify(fav))},[fav])
  const filtered = TOOLS.filter(t=>{const matchCat = cat==='All' || (cat==='Favorites' && fav.includes(t.name)) || t.cat===cat; const matchQ = !q || t.name.toLowerCase().includes(q.toLowerCase()); return matchCat && matchQ;});
  return(
    <div style={{maxWidth:1200,margin:'0 auto',padding:'32px 20px'}}>
      <div style={{textAlign:'center',maxWidth:700,margin:'0 auto 24px'}}>
        <h1 style={{fontSize:32,fontWeight:700,lineHeight:'1.15',margin:'0 0 12px'}}>Wana Based. Global Built.<br/>64 tools {geo.loading ? '' : `for ${geo.city}`}</h1>
        <p style={{fontSize:15,color:'#64748b',margin:'0 0 20px'}}>Built in Wana, South Waziristan • Real Urdu اردو Pashto پښتو translator from {geo.city}</p>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search 64 tools..." style={{width:'100%',maxWidth:480,padding:'14px 20px',borderRadius:999,border:'1px solid #e2e8f0',background:'#fff',fontSize:14,outline:'none'}}/>
        <div style={{display:'flex',gap:8,justifyContent:'center',flexWrap:'wrap',marginTop:16}}>
          {['All','Featured','Image','Text','Dev','Daily','PDF','Social','Favorites'].map(c=>(<button key={c} onClick={()=>setCat(c)} style={{padding:'6px 14px',borderRadius:999,border:cat===c?'1px solid #0f172a':'1px solid #e2e8f0',background:cat===c?'#0f172a':'#fff',color:cat===c?'#fff':'#475569',fontSize:13,cursor:'pointer'}}>{c}</button>))}
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(190px, 1fr))',gap:14}}>
        {filtered.map(t=>(<div key={t.name} onClick={()=>setActiveTool(t)} style={{background:'#fff',border:'1px solid #f1f5f9',borderRadius:16,padding:16,cursor:'pointer'}}><div style={{display:'flex',justifyContent:'space-between',marginBottom:12}}><div style={{width:40,height:40,borderRadius:10,background:`${t.color}14`,color:t.color,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>{t.icon}</div><button onClick={e=>{e.stopPropagation(); setFav(p=>p.includes(t.name)?p.filter(x=>x!==t.name):[...p,t.name])}} style={{background:'transparent',border:0,cursor:'pointer',color:fav.includes(t.name)?'#f59e0b':'#cbd5e1'}}>{fav.includes(t.name)?'★':'☆'}</button></div><div style={{fontWeight:600,fontSize:14,marginBottom:4}}>{t.name}</div><div style={{fontSize:11,color:'#64748b'}}>{getTitleForTool(t.type).split('-')[0].trim()}</div></div>))}
      </div>
      {activeTool && <ToolModal tool={activeTool} onClose={()=>setActiveTool(null)}/>}
    </div>
  )
}

function Layout(){
  return(
    <div style={{fontFamily:'Inter, system-ui, sans-serif',background:'#fcfcfd',minHeight:'100vh',color:'#0f172a'}}>
    <TopAffiliateBar />
    <header style={{position:'sticky',top:0,zIndex:20,background:'rgba(255,255,255,0.8)',backdropFilter:'blur(12px)',borderBottom:'1px solid #f1f5f9'}}>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'14px 20px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Link to="/" style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none',color:'#0f172a'}}><div style={{width:32,height:32,borderRadius:8,background:'#0f172a',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700}}>W</div><div><div style={{fontWeight:700,fontSize:15}}>WanaLab</div><div style={{fontSize:11,color:'#64748b'}}>Wana Based • {TOOLS.length} tools</div></div></Link>
        <div style={{display:'flex',gap:8}}><Link to="/about" style={{padding:'8px 14px',borderRadius:999,border:'1px solid #e2e8f0',background:'#fff',fontSize:13,textDecoration:'none',color:'#0f172a'}}>About</Link><Link to="/contact" style={{padding:'8px 14px',borderRadius:999,background:'#0f172a',color:'#fff',fontSize:13,textDecoration:'none'}}>Contact</Link></div>
      </div>
    </header>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<StaticPage title="About WanaLab - Wana Based Global Built - Nasir Khan - Wana, South Waziristan - 64 Tools" content={`About WanaLab.org - Wana Based, Global Built

Founder: Nasir Khan from Wana, South Waziristan, Khyber Pakhtunkhwa, Pakistan.

Mission: Build 64+ world-class free tools from Wana for the global community. No upload, 100% private, browser-based. Real Urdu اردو Pashto پښتو translator, Image tools, PDF tools, Dev tools, Daily calculators.

Why Wana? Wana is our home. We want to prove world-class tech can be built from South Waziristan. Wana Based, Global Built is not just slogan - it's identity.

Tools: 64 tools across 7 categories: Featured, Image, Text, Dev, Daily, PDF, Social. From YouTube Thumbnail Downloader to Translator Urdu Pashto (exclusive, not Google Translate) to BMI Calculator.

Categories:
- Featured: Translator Urdu Pashto Real, YouTube Thumbnail Downloader, Weather, Tags Extractor
- Image: Compressor, Resizer, Converter, Rotator, Flipper, Filters, Meme Generator, Watermark, Background Remover, OCR, Collage
- Text: Word Counter, Case Changer, Lorem, JSON Formatter, Base64, URL Encoder, Diff, Hashtag, TTS, Dedupe, Slug
- Dev: QR, Password, UUID, Color Picker, Regex, Minifier, JWT, HTML/CSS/JS Formatters, MD5, SHA256, IP Finder
- Daily: BMI, Age, Currency (USD PKR INR AED), Percentage, Loan EMI, Discount, Fuel Cost, Unit Converter, Tip, Date, Time, Random, Coin Flip
- PDF: Merger, Splitter, Compressor, Image to PDF, PDF to Image
- Social: Instagram DP Downloader, Hashtag Analyzer, YouTube Title Generator, Bio Generator

Privacy: All processing in browser. We don't see your files. Ever. No upload to server.

Support: We earn via affiliate links (Aviasales flights, Booking.com hotels, Airbnb, Amazon, AliExpress, Trip.com, Fiverr) to keep tools free forever. No extra cost to you. This supports tech from Wana.

Contact: nasir@wanalab.org - Wana, South Waziristan - Founder Nasir Khan - 2026.

Vision: Make WanaLab.org the #1 tools site from Pakistan, serving users in Pakistan, India, UAE, Saudi, US, UK in English, Urdu, Hindi, Arabic.

Thank you for using WanaLab from Wana! Wana Based, Global Built - 64 Tools - Founder Nasir Khan.`} />} />
      <Route path="/privacy" element={<StaticPage title="Privacy Policy - WanaLab.org - AdSense Compliant" content={`Privacy Policy for WanaLab.org - Last updated: Nov 6, 2026 - Founder Nasir Khan - Wana, South Waziristan

1. Introduction
Welcome to WanaLab.org, operated by Nasir Khan from Wana, South Waziristan, Pakistan. We respect your privacy. This policy explains how we handle data for our 64 free tools at WanaLab.org. Your privacy is our priority.

2. No File Upload - Browser Processing - Core Promise
All tools (Image Compressor, Image Resizer, Image Converter PNG JPG WEBP, Image Rotator, Flipper, Filters, Meme Generator, Watermark, Background Remover, Image to Text OCR, Collage Maker, Word Counter, Case Changer, Lorem Generator, JSON Formatter, Base64 Encoder, URL Encoder, Text Difference, Hashtag Generator, Text to Speech, Duplicate Remover, Slug Generator, QR Generator, Password Generator, UUID Generator, Color Picker, Regex Tester, Code Minifier, JWT Decoder, HTML Formatter, CSS Formatter, JS Formatter, MD5 Generator, SHA256 Generator, IP Finder, BMI Calculator, Age Calculator, Currency Converter USD PKR INR AED, Percentage Calculator, Loan EMI Calculator, Discount Calculator, Fuel Cost Calculator, Unit Converter, Tip Calculator, Date Calculator, Time Calculator, Random Number, Coin Flip, PDF Merger, PDF Splitter, PDF Compressor, Image to PDF, PDF to Image, Instagram DP Downloader, Hashtag Analyzer, YouTube Title Generator, Bio Generator, Translator Urdu Pashto Real, YouTube Thumbnail Downloader, Weather Checker, YouTube Tags Extractor) process files 100% in your browser using JavaScript. We do NOT upload, store, see, or have access to your files, images, PDFs, or text. Your data never leaves your device, never goes to our server, never stored. This is our core privacy promise from Wana.

3. Google AdSense & Cookies & Advertising
We use Google AdSense to display advertisements to support our free tools. Google AdSense uses cookies and web beacons to serve ads:
- Google, as a third-party vendor, uses cookies to serve ads on WanaLab.org.
- Google's use of the DoubleClick DART cookie enables it to serve ads to our users based on their visit to WanaLab.org and other sites on the Internet.
- You may opt out of the use of the DoubleClick DART cookie for interest-based advertising by visiting Google Ads Settings: https://www.google.com/settings/ads
- Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to WanaLab.org or other websites.
- Google's use of advertising cookies enables it and its partners to serve ads based on your visit.
- You can disable cookies in your browser settings, but some tools may not function properly. You can learn how to manage cookies in your browser help section.
- We also use Google Analytics 4 and Cloudflare Analytics to understand anonymous traffic (page views, country, device) - No personal data, IP anonymized.

Learn more about Google's practices: https://policies.google.com/technologies/ads and https://policies.google.com/privacy

4. Affiliate Links Disclosure
We use affiliate links: Aviasales (flights), Booking.com (hotels), Airbnb (stays), Amazon (shopping), AliExpress, Trip.com, Fiverr (services). If you click and book/buy/hire, we may earn a small commission at no extra cost to you. This commission helps us keep 64 tools free and supports tech from Wana, South Waziristan. We only recommend services we trust. Affiliate disclosure is required by FTC and we comply.

5. Local Storage
We use browser localStorage to save your favorites (starred tools) and geo location (city) for personalized affiliate deals (e.g., ISB→Dubai flights). This data stays in your browser, not on our server. You can clear it anytime via browser settings.

6. Children's Privacy
WanaLab tools are for general audience. We do not knowingly collect personal data from children under 13. Tools are safe for all ages.

7. Contact & Data Request
For privacy concerns, data deletion request, or questions: nasir@wanalab.org - Founder Nasir Khan, Wana, South Waziristan, KPK, Pakistan. Wana Based, Global Built. We respond in 24-48 hours.

8. Updates
We may update this policy from time to time. We will update the Last updated date at top. Continued use after changes means acceptance. Please review periodically.

9. Consent
By using WanaLab.org 64 free tools, you consent to this Privacy Policy and our use of cookies for ads (Google AdSense) and affiliates and localStorage as described above. If you do not agree, please do not use our site.

Thank you for trusting WanaLab from Wana! Wana Based, Global Built - 64 Tools - Founder Nasir Khan - nasir@wanalab.org - Wana, South Waziristan.
`} />} />
      <Route path="/terms" element={<StaticPage title="Terms of Service - WanaLab.org - 64 Tools" content={`Terms of Service - WanaLab.org - Founder Nasir Khan - Wana, South Waziristan - 64 Tools - Last updated Nov 6, 2026

1. Acceptance of Terms: By accessing and using WanaLab.org, its 64 tools, pages, and services, you agree to be bound by these Terms of Service. If you do not agree, do not use the site.

2. Free Tools - No Warranty: All 64 tools are provided free, as-is, browser-based. We make no warranties, express or implied, about accuracy, reliability, results. Tools like BMI Calculator, Loan EMI Calculator, Currency Converter are for informational purposes only, not professional advice. Use at your own risk.

3. Browser Processing: Files processed locally in your browser. We are not responsible for data loss, file corruption, or any damages from using tools. Always keep backup of important files.

4. No Abuse - Acceptable Use: You agree not to use tools for illegal content, spam, harassment, or to harm others. Do not attempt to hack, scrape, DDoS, reverse engineer, or overload wanalab.org, its Cloudflare Pages infrastructure, or its affiliates.

5. Intellectual Property: WanaLab brand name, logo W, design, code, toolTitles.js SEO titles in 4 languages, Wana Based Global Built slogan, owned by Nasir Khan, Wana. You may use tools for personal and commercial projects, but you may not copy, clone, or republish our site design, code, or content without written permission from nasir@wanalab.org.

6. Affiliate & Ads: Site contains affiliate links and Google AdSense ads. We may earn commission. Ads are provided by Google, we do not control ad content.

7. Limitation of Liability: To the fullest extent permitted by law, WanaLab, Nasir Khan, WanaLab.org shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.

8. Changes: We may modify or discontinue tools, add new tools, change affiliate partners, or update Terms at any time without notice. Continued use after changes constitutes acceptance.

9. Governing Law: These Terms governed by laws of Islamic Republic of Pakistan, jurisdiction Wana, South Waziristan District, Khyber Pakhtunkhwa. Any disputes resolved in Wana courts.

10. Contact: For terms questions: nasir@wanalab.org - Wana, South Waziristan.

Effective: Nov 6, 2026 - Wana Based, Global Built - 64 Tools - Founder Nasir Khan - WanaLab.org - Wana, South Waziristan.
`} />} />
      <Route path="/contact" element={<StaticPage title="Contact - Nasir Khan - WanaLab.org - Wana - 64 Tools" content={`Contact WanaLab.org - Wana Based, Global Built - Founder Nasir Khan

Founder: Nasir Khan
Location: Wana, South Waziristan, Khyber Pakhtunkhwa, Pakistan - Wana is in South Waziristan District, near Afghanistan border.
Email: nasir@wanalab.org
Website: https://wanalab.org
Backup: https://wanalab-web.pages.dev
Tools Count: 64 free tools and growing
Slogan: Wana Based, Global Built

We are building world-class free tools from Wana for the global community. 64 tools, 7 categories, 4 languages SEO (English, Urdu اردو, Hindi हिन्दी, Arabic العربية).

For:
- Tool requests / New tool ideas: Email nasir@wanalab.org with subject "Tool Request - [Tool Name]"
- Bug reports / Not working: Email with screenshot and tool name
- Business / Affiliate Partnerships: Email "Partnership - [Company Name]" - We partner with Aviasales, Booking, Amazon, etc.
- Privacy concerns / Data: See Privacy Policy page or email
- Press / Media: Founder Nasir Khan available for interviews about building tech from Wana, South Waziristan

Response time: 24-48 hours, often same day from Wana.

Our Mission: Prove that world-class tech products can be built from Wana, South Waziristan. Inspire youth in Waziristan, KPK, Pakistan.

Follow Our Journey:
- Website: WanaLab.org
- Email: nasir@wanalab.org
- Location: Wana, South Waziristan

We love feedback from Wana, Pakistan, India, UAE, Saudi, USA, UK and global users! Every email read by Founder Nasir Khan personally.

Thank you for using WanaLab.org - Built in Wana, Used Globally - 64 Tools Free Forever!

Wana Based, Global Built - 64 Tools - Founder Nasir Khan - Wana, South Waziristan - Nov 2026.
`} />} />
    </Routes>
    <FloatingAffiliateButton />
    <footer style={{textAlign:'center', padding:'24px', fontSize:12, color:'#94a3b8', borderTop:'1px solid #f1f5f9', marginTop:40}}>
      © 2026 WanaLab • Wana, South Waziristan • 64 tools • Founder Nasir Khan • <Link to="/about" style={{color:'#94a3b8'}}>About</Link> • <Link to="/privacy" style={{color:'#94a3b8'}}>Privacy</Link> • <Link to="/terms" style={{color:'#94a3b8'}}>Terms</Link> • <Link to="/contact" style={{color:'#94a3b8'}}>Contact</Link> • nasir@wanalab.org
    </footer>
    </div>
  )
}

export default function App(){
  return (<BrowserRouter><Layout /></BrowserRouter>)
  }
