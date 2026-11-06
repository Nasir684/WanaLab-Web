// WanaLab v6.4 FINAL MERGED - toolTitles.js + Smart Geo Affiliates - 64 Tools
// Founder Nasir Khan - Wana, South Waziristan - Nov 6 2026 - SEO LOCKED
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

// SMART GEO HOOK
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

// OLD TYPE -> NEW SLUG MAPPER - FIXES TITLE CONFLICT
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
  return (<div style={{maxWidth:800, margin:'0 auto', padding:'32px 20px'}}><h1 style={{fontSize:28,fontWeight:700}}>{title}</h1><div style={{marginTop:16, background:'#fff', border:'1px solid #f1f5f9', borderRadius:16, padding:20, fontSize:14, lineHeight:'1.7', whiteSpace:'pre-wrap'}}>{content}</div><Link to="/" style={{display:'inline-block', marginTop:16, color:'#6366f1'}}>← Back</Link></div>)
}

function TopAffiliateBar(){
  const geo = useGeo()
  return(
    <div style={{background:'#0f172a', color:'#fff', padding:'8px 10px', fontSize:'12px', position:'sticky', top:0, zIndex:30}}>
      <div style={{maxWidth:1200, margin:'0 auto', display:'flex', gap:8, justifyContent:'center', flexWrap:'wrap', alignItems:'center'}}>
        <span style={{opacity:0.6, fontSize:11}}>📍 {geo.loading ? '...' : geo.city} • Deals:</span>
        <a href={getAviaLink(geo.from,'DXB')} target="_blank" rel="noopener" style={{color:'#fff', textDecoration:'none', background:'#1e293b', padding:'4px 10px', borderRadius:999}}>✈️ {geo.from}→DXB</a>
        <a href={getBookingLink(geo.city)} target="_blank" rel="noopener" style={{color:'#fff', textDecoration:'none', background:'#1e293b', padding:'4px 10px', borderRadius:999}}>🏨 {geo.city}</a>
        <a href={getAmazonLink()} target="_blank" rel="noopener" style={{color:'#0f172a', background:'#fbbf24', padding:'4px 10px', borderRadius:999, fontWeight:700, textDecoration:'none'}}>Amazon 🔥</a>
      </div>
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

        {/* SMART AFFILIATE INSIDE TOOL + SEO TITLE FROM toolTitles.js */}
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
      <Route path="/about" element={<StaticPage title="About - Wana Based Global Built" content="WanaLab by Nasir Khan, Wana, South Waziristan. 64 tools free." />} />
      <Route path="/privacy" element={<StaticPage title="Privacy" content="No upload, all in browser. Private." />} />
      <Route path="/terms" element={<StaticPage title="Terms" content="Terms for WanaLab.org" />} />
      <Route path="/contact" element={<StaticPage title="Contact" content="nasir@wanalab.org - Wana" />} />
    </Routes>
    </div>
  )
}

export default function App(){
  return (<BrowserRouter><Layout /></BrowserRouter>)
  }
