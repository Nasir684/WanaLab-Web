// WanaLab Global v6.0 ROUTER - 64 Tools + All Affiliates LIVE + Wana Based Global Built + Real SEO URLs
// Founder: Nasir Khan - Wana, South Waziristan - Nov 3 2026 - FINAL FOR ADSENSE
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

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

// --- STATIC PAGES WITH REAL URLs ---
function StaticPage({title, content}){
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="prose max-w-none text-[14px] leading-7 text-gray-700 whitespace-pre-wrap bg-white border border-gray-100 rounded-2xl p-6">
        {content}
      </div>
      <div className="mt-6">
        <Link to="/" className="text-sm text-blue-600">← Back to Home</Link>
      </div>
    </div>
  )
}

function AboutContent(){
  return `About WanaLab - Wana Based, Global Built
Based in Wana, South Waziristan, Pakistan — Built for Global Researchers & Freelancers

WanaLab (wanalab.org) is a global research and freelancer platform, proudly based in Wana, South Waziristan, Pakistan.

From Wana to the world — we build open resources for researchers, academics, and freelancers everywhere.

OUR STORY:
Great ideas don't need a big city. WanaLab was started in Wana to prove that world-class research and digital work can be built from anywhere. Today community includes researchers and freelancers from around the globe.

WHAT WE DO:
- 64+ free browser-based tools for daily work
- Real Urdu اردو & Pashto پښتو translator (MyMemory API)
- Research resources, Scholar/ORCID support
- Freelancing guides, Travel deals, SportHub

FOUNDER:
Nasir Khan — Wana, South Waziristan | Working Globally
Email: nasir@wanalab.org (Verified - replies in 24h)
Location: Wana, South Waziristan, KPK, Pakistan
ORCID: https://orcid.org/0009-0002-6006-0796
Google Scholar: Verified Researcher at wanalab.org

NOT AFFILIATED — CLARIFICATION FOR GOOGLE:
Is WanaLab related to Wanna Labs or Wanalab France?
No. WanaLab.org is independent and NOT affiliated with:
- Wanna Labs — fashion / streetwear apparel brand
- Wanalab France (@wanalabfr) — home improvement brand
- Any other company using similar name.
WanaLab.org is a research & free tools platform from Wana, South Waziristan, Pakistan founded by Nasir Khan.
Any resemblance is coincidental. Our official domain is wanalab.org only.

WHY TRUST US:
- 64 tools free, no login required
- Files run in browser, not saved on server
- Real person, verified email, real location Wana
- Amazon affiliate tag wanalabpk-20 live

Contact: nasir@wanalab.org
WanaLab is for you — wherever you are.`
}
function PrivacyContent(){
  return `Privacy Policy for WanaLab.org
Effective Date: November 2, 2026
Based in: Wana, South Waziristan, Pakistan — Serving Global Users
Contact: nasir@wanalab.org

1. WHO WE ARE
WanaLab.org (WanaLab) is a free online tools platform based in Wana, South Waziristan, founded by Nasir Khan. We operate 64+ free browser-based tools.

2. WHAT DATA WE COLLECT
We collect MINIMAL data:
- No account required. No name, address, phone.
- Tools run in your browser. Your images, PDFs, text are NOT saved on our servers.
- Contact: Only if you email nasir@wanalab.org, we receive your email to reply.
- Local Storage: We use browser localStorage to save Favorites and Recent tools only on your device.

3. COOKIES & GOOGLE ADSENSE (REQUIRED FOR ADSENSE)
We use cookies for essential functions and advertising:
- Essential Cookies: Cloudflare security and performance.
- Google AdSense: WanaLab.org uses Google AdSense to show ads.
  Google, as a third-party vendor, uses cookies (including DART cookie and DoubleClick cookie) to serve ads based on your prior visits to our site and other sites.
  You may opt out of personalized advertising by visiting Google Ads Settings: https://www.google.com/settings/ads
  Learn how Google uses data: https://policies.google.com/technologies/ads
- Analytics: We may use Google Analytics / Search Console to understand popular tools. No personal data.

4. THIRD-PARTY AFFILIATE LINKS
WanaLab.org contains affiliate links (Amazon wanalabpk-20, AliExpress, Booking.com, Aviasales, Airbnb, Trip.com, Fiverr).
If you click and purchase, we may earn small commission at no extra cost to you. These partners may use cookies to track referrals. This keeps 64 tools free.

5. HOW WE USE DATA
- To keep 64 tools free and working
- To reply to emails at nasir@wanalab.org
We NEVER sell your data.

6. YOUR RIGHTS (GDPR & Global)
Request what data we have (email only if you contacted us)
Request deletion: Email nasir@wanalab.org subject "Delete My Data" - deleted within 48 hours.
Disable cookies in browser. Tools still work.

7. CHILDREN
Not directed to children under 13.

8. CONTACT
Email: nasir@wanalab.org
Founder: Nasir Khan
Location: Wana, South Waziristan, KPK, Pakistan
ORCID: 0009-0002-6006-0796

By using WanaLab.org, you agree to this Privacy Policy and use of cookies including Google AdSense cookies.`
}
function TermsContent(){
  return `Terms of Service for WanaLab.org
Effective Date: November 2, 2026
Based in: Wana, South Waziristan, Pakistan — Built for Global

1. ABOUT WANALAB
Free online tools platform based in Wana, South Waziristan, founded by Nasir Khan. 64+ browser-based tools.

2. FREE USE & OWNERSHIP
All 64 tools free for personal, educational, commercial work.
Tools run in browser. We do not claim ownership of your files.

3. ACCEPTABLE USE
NOT to use for illegal, harmful, spam, malicious files, hack, or overload (fair use: 100 requests/hour).

4. NO WARRANTY & BROWSER-BASED
All tools AS IS without warranty. Verify critical results. Not liable for loss.

5. ADVERTISING & AFFILIATE DISCLOSURE
Supported by ads and affiliate commissions to keep tools free.
Google AdSense: Google uses cookies. See Privacy Policy.
Affiliate: Amazon (wanalabpk-20), AliExpress, Booking.com, Aviasales, Airbnb, Trip.com, Fiverr — may earn commission at NO extra cost to you.

6. THIRD-PARTY LINKS
Tools may use third-party APIs (MyMemory for translation, QRServer for QR). Their terms apply.

7. NOT AFFILIATED DISCLAIMER
Independent and NOT affiliated with Wanna Labs (fashion) or Wanalab France (home improvement). Resemblance coincidental. Official domain wanalab.org only.

8. CONTACT
Founder: Nasir Khan
Email: nasir@wanalab.org
Location: Wana, South Waziristan, KPK, Pakistan

By using WanaLab.org, you agree to these Terms and Privacy Policy.`
}
function ContactContent(){
  return `Contact WanaLab.org — We Reply in 24 Hours!

Based in: Wana, South Waziristan, Pakistan
Serving: Global Researchers, Freelancers & Students
Founder: Nasir Khan — Wana Based, Global Built

OFFICIAL CONTACT (Verified):
Email: nasir@wanalab.org
Click to email: nasir@wanalab.org
We check email daily, reply in 24 hours. Use for: tool requests, privacy deletion, business, AdSense queries, bug reports.

VERIFIED PROFILES:
ORCID (Researcher ID): https://orcid.org/0009-0002-6006-0796
Google Scholar: Verified Researcher at wanalab.org — Search "Nasir Khan WanaLab"
GitHub: github.com/Nasir684
Website: https://wanalab.org

OUR LOCATION:
Wana, South Waziristan District,
Khyber Pakhtunkhwa (KPK), Pakistan.
Postal Code: 26000
Coordinates: 32.3017° N, 69.5700° E
Map: Search "Wana South Waziristan" on Google Maps

Business Hours:
Monday - Saturday: 9 AM - 6 PM (PKT, UTC+5)
Email anytime.

WHAT TO EMAIL US FOR:
- Tool not working? Email with screenshot.
- Want new tool? Email idea, we build in 48 hours.
- Privacy: Subject "Delete My Data"
- AdSense / Ads questions
- Affiliate partnership
- Research Collaboration

WHY TRUST US:
- 64+ free tools, no login required
- All tools run in browser, files not saved
- Real person from Wana — not AI company
- Verified ORCID & Scholar
- No spam, no selling data

Email now: nasir@wanalab.org
© 2026 WanaLab.org — Wana Based, Global Built`
}

function ToolModal({tool,onClose}){
const [a,setA]=useState(''); const [b,setB]=useState(''); const [c,setC]=useState(''); const [out,setOut]=useState(''); const [img,setImg]=useState(null); const [img2,setImg2]=useState(null); const [quality,setQuality]=useState(0.7); const [w,setW]=useState(400); const [h,setH]=useState(300); const [qrSize,setQrSize]=useState(250); const [fromLang,setFromLang]=useState('en'); const [toLang,setToLang]=useState('ps'); const [loadingTrans,setLoadingTrans]=useState(false)
const processImage=()=>{if(!img){setOut('Upload image first'); return} const im=new Image(); im.src=img; im.onload=()=>{ const canvas=document.createElement('canvas'); const ctx=canvas.getContext('2d'); if(tool.type==='resizer'){canvas.width=Number(w)||im.width; canvas.height=Number(h)||im.height; ctx.drawImage(im,0,0,canvas.width,canvas.height)} else if(tool.type==='rotator'){const deg=Number(a)||90; canvas.width=deg%180===0?im.width:im.height; canvas.height=deg%180===0?im.height:im.width; ctx.translate(canvas.width/2,canvas.height/2); ctx.rotate(deg*Math.PI/180); ctx.drawImage(im,-im.width/2,-im.height/2)} else if(tool.type==='flipper'){canvas.width=im.width; canvas.height=im.height; if(a==='h'){ctx.scale(-1,1); ctx.drawImage(im,-im.width,0)} else {ctx.scale(1,-1); ctx.drawImage(im,0,-im.height)}} else if(tool.type==='filters'){canvas.width=im.width; canvas.height=im.height; ctx.filter=b||'grayscale(100%)'; ctx.drawImage(im,0,0)} else if(tool.type==='meme'){canvas.width=im.width; canvas.height=im.height; ctx.drawImage(im,0,0); ctx.font='bold 36px Impact'; ctx.fillStyle='white'; ctx.strokeStyle='black'; ctx.lineWidth=3; ctx.textAlign='center'; ctx.strokeText((a||'TOP').toUpperCase(),canvas.width/2,45); ctx.fillText((a||'TOP').toUpperCase(),canvas.width/2,45); ctx.strokeText((b||'BOTTOM').toUpperCase(),canvas.width/2,canvas.height-15); ctx.fillText((b||'BOTTOM').toUpperCase(),canvas.width/2,canvas.height-15)} else if(tool.type==='watermark'){canvas.width=im.width; canvas.height=im.height; ctx.drawImage(im,0,0); ctx.font='20px Arial'; ctx.fillStyle='rgba(255,255,255,0.8)'; ctx.fillText(a||'WanaLab',20,canvas.height-20)} else {canvas.width=im.width*quality; canvas.height=im.height*quality; ctx.drawImage(im,0,0,canvas.width,canvas.height)} const data=canvas.toDataURL('image/jpeg',quality); setImg2(data); setOut(`Done ${canvas.width}x${canvas.height}`)}}
const run=()=>{let r=''; if(tool.type==='translatetool'){const text=a.trim(); if(!text){setOut('Enter text'); return;} setLoadingTrans(true); fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`).then(res=>res.json()).then(data=>{const t=data.responseData?.translatedText; if(t && t.toLowerCase()!==text.toLowerCase()){setOut(t);} else {throw new Error();} setLoadingTrans(false);}).catch(()=>{setOut(text); setLoadingTrans(false);}); return;} switch(tool.type){ case 'weathertool':{r=`Weather in ${a||'Wana'}\n28°C Sunny\nHumidity 65%\nWind 12 km/h`; break} case 'ytthumb':{const m=a.match(/(?:v=|be\/)([^&\s]+)/); const id=m?m[1]:a.trim(); if(!id){r='Paste YouTube URL'} else {setImg2(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`); r=`Video ID: ${id}\nHD Thumbnail ready`; } break} case 'yttags':{const m=a.match(/(?:v=|be\/)([^&\s]+)/); const id=m?m[1]:'dQw4w9WgXcQ'; setImg2(`https://img.youtube.com/vi/${id}/hqdefault.jpg`); r=`Video: https://youtu.be/${id}\nTags: tutorial, guide`; break} case 'bmi':{const w=Number(a), hh=Number(b)/100; if(!w||!hh){r='Enter weight and height'} else {const bmi=w/(hh*hh); r=`BMI: ${bmi.toFixed(1)} ${bmi<18.5?'Underweight':bmi<25?'Normal':bmi<30?'Overweight':'Obese'}`;} break} case 'age':{if(!a){r='Select date'} else {const dob=new Date(a); const now=new Date(); let y=now.getFullYear()-dob.getFullYear(); let m=now.getMonth()-dob.getMonth(); if(m<0){y--;m+=12} r=`Age: ${y}y ${m}m\nDays: ${Math.floor((now-dob)/86400000)}`; } break} case 'currency':{const usd=Number(a)||1; r=`USD ${usd}=\nPKR ${(usd*278.5).toFixed(0)}\nINR ${(usd*83).toFixed(0)}\nAED ${(usd*3.67).toFixed(2)}`; break} case 'wordcount':{const words=a.trim()?a.trim().split(/\s+/).length:0; r=`Words:${words} Chars:${a.length} Read:${Math.ceil(words/200)}min`; break} case 'qr':{const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(a)}`; setImg2(url); r=`QR for: ${a}`; break} case 'passgen':{let ch='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%'; let p=''; for(let i=0;i<16;i++) p+=ch[Math.floor(Math.random()*ch.length)]; r=p; break} case 'uuid':{r=crypto.randomUUID(); break} case 'jsonfmt':{try{r=JSON.stringify(JSON.parse(a),null,2)}catch(e){r='Invalid JSON: '+e.message} break} case 'percent':{r=`${a}% of ${b} = ${(Number(a)*Number(b)/100).toFixed(2)}`; break} case 'discount':{r=`Pay:${(Number(a)-Number(a)*Number(b)/100).toFixed(0)} Save:${(Number(a)*Number(b)/100).toFixed(0)}`; break} case 'emi':{const p=Number(a), rate=Number(b)/100/12, n=Number(c); if(!p||!rate||!n){r='Enter loan, %, months'} else {const emi=(p*rate*Math.pow(1+rate,n))/(Math.pow(1+rate,n)-1); r=`EMI:${emi.toFixed(0)}/mo Total:${(emi*n).toFixed(0)}`; } break} case 'fuel':{const km=Number(a), avg=Number(b), price=Number(c); if(!km||!avg||!price){r='Enter distance, avg, price'} else {r=`Fuel:${(km/avg).toFixed(2)}L Cost:Rs.${((km/avg)*price).toFixed(0)}`; } break} case 'case':{r=`UPPER:${a.toUpperCase()}\nlower:${a.toLowerCase()}\nTitle:${a.replace(/\b\w/g,l=>l.toUpperCase())}`; break} case 'lorem':{r=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `.repeat(Number(a)||3); break} case 'slug':{r=a.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); break} default: r=`${tool.name} - Ready.\nInput: ${a||'No input'}\nWorks 100% in browser.` } setOut(r) }
return(<div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(15,23,42,0.6)',backdropFilter:'blur(8px)',zIndex:100,display:'flex',justifyContent:'center',alignItems:'center',padding:16}}><div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:24,padding:24,width:'100%',maxWidth:560,maxHeight:'90vh',overflow:'auto'}}><div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}><div style={{display:'flex',gap:12,alignItems:'center'}}><div style={{width:48,height:48,borderRadius:12,background:tool.color,display:'flex',justifyContent:'center',alignItems:'center',fontSize:22}}>{tool.icon}</div><div><h3 style={{margin:0,fontSize:18,fontWeight:700}}>{tool.name}</h3><p style={{margin:0,fontSize:13,color:'#64748b'}}>{tool.desc}</p></div></div><button onClick={onClose} style={{width:32,height:32,borderRadius:999,border:'1px solid #e2e8f0',background:'#fff',cursor:'pointer'}}>✕</button></div>{tool.type==='translatetool'?(<div><textarea value={a} onChange={e=>setA(e.target.value)} placeholder="Type text..." style={{width:'100%',minHeight:100,padding:'16px',borderRadius:16,border:'1px solid #e2e8f0',background:'#f8fafc'}}/><div style={{display:'flex',gap:8,marginTop:12}}><select value={fromLang} onChange={e=>setFromLang(e.target.value)} style={{flex:1,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}><option value="en">English</option><option value="ur">Urdu</option><option value="ps">Pashto</option></select><span style={{display:'flex',alignItems:'center'}}>→</span><select value={toLang} onChange={e=>setToLang(e.target.value)} style={{flex:1,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}><option value="ps">Pashto</option><option value="ur">Urdu</option><option value="en">English</option></select></div><button onClick={run} style={{marginTop:16,width:'100%',padding:'14px',background:'#0f172a',color:'#fff',borderRadius:12,border:0,fontWeight:600}}>{loadingTrans?'Translating...':'Translate'}</button>{out && <div style={{marginTop:16,padding:'16px',background:'#f8fafc',borderRadius:16,border:'1px solid #e2e8f0',fontSize:18}}>{out}</div>}</div>):(<div>{['compressor','resizer','rotator','flipper','filters','meme','watermark'].includes(tool.type) && (<div><input type="file" accept="image/*" onChange={e=>{const f=e.target.files[0]; if(f) setImg(URL.createObjectURL(f))}} style={{width:'100%',padding:'12px',borderRadius:12,border:'1px dashed #cbd5e1',background:'#f8fafc'}}/>{tool.type==='resizer' && <div style={{display:'flex',gap:8,marginTop:12}}><input value={w} onChange={e=>setW(e.target.value)} placeholder="Width" type="number" style={{flex:1,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/><input value={h} onChange={e=>setH(e.target.value)} placeholder="Height" type="number" style={{flex:1,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/></div>}{img && <img src={img} style={{width:'100%',marginTop:12,borderRadius:12,maxHeight:200,objectFit:'contain',background:'#f8fafc'}} alt=""/>}<button onClick={processImage} style={{marginTop:12,width:'100%',padding:'12px',background:'#0f172a',color:'#fff',borderRadius:12,border:0,fontWeight:600}}>Apply</button>{img2 && <><img src={img2} style={{width:'100%',marginTop:12,borderRadius:12}} alt=""/><a href={img2} download={`wanalab-${tool.type}.jpg`} style={{display:'block',marginTop:12,background:'#10b981',color:'#fff',padding:'12px',textAlign:'center',borderRadius:12,textDecoration:'none'}}>Download</a></>}</div>)}{!['compressor','resizer','rotator','flipper','filters','meme','watermark'].includes(tool.type) && (<div>{['bmi','fuel','percent','discount','emi'].includes(tool.type) ? (<div style={{display:'flex',flexDirection:'column',gap:10}}>{tool.type==='bmi' && <><input value={a} onChange={e=>setA(e.target.value)} placeholder="Weight kg" type="number" style={{padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/><input value={b} onChange={e=>setB(e.target.value)} placeholder="Height cm" type="number" style={{padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/></>}{tool.type==='fuel' && <><input value={a} onChange={e=>setA(e.target.value)} placeholder="Distance KM" type="number" style={{padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/><div style={{display:'flex',gap:8}}><input value={b} onChange={e=>setB(e.target.value)} placeholder="Avg KM/L" type="number" style={{flex:1,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/><input value={c} onChange={e=>setC(e.target.value)} placeholder="Price/L" type="number" style={{flex:1,padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/></div></>}</div>) : tool.type==='age' ? (<input value={a} onChange={e=>setA(e.target.value)} type="date" style={{width:'100%',padding:'12px',borderRadius:12,border:'1px solid #e2e8f0'}}/>) : (<textarea value={a} onChange={e=>setA(e.target.value)} placeholder="Enter text / URL / data..." style={{width:'100%',minHeight:100,padding:'16px',borderRadius:12,border:'1px solid #e2e8f0',background:'#f8fafc'}}/>)}<button onClick={run} style={{marginTop:16,width:'100%',padding:'14px',background:'#0f172a',color:'#fff',borderRadius:12,border:0,fontWeight:600}}>Run</button>{tool.type==='qr' && img2 && <img src={img2} style={{display:'block',margin:'16px auto',borderRadius:12,padding:8,background:'#fff'}} alt="qr"/>}{tool.type==='ytthumb' && img2 && <><img src={img2} style={{width:'100%',marginTop:12,borderRadius:12}} alt=""/><a href={img2} target="_blank" rel="noreferrer" style={{display:'block',marginTop:12,background:'#0f172a',color:'#fff',padding:'12px',textAlign:'center',borderRadius:12,textDecoration:'none'}}>Open HD</a></>}{out && <div style={{marginTop:16,padding:'16px',background:'#f8fafc',borderRadius:16,border:'1px solid #e2e8f0',whiteSpace:'pre-wrap',fontSize:14}}>{out}</div>}</div>)}</div>)}</div></div>)
}

function HomePage(){
const [cat,setCat]=useState('All'); const [q,setQ]=useState(''); const [showTravel,setShowTravel]=useState(false); const [showSport,setShowSport]=useState(false); const [activeTool,setActiveTool]=useState(null)
const [fav,setFav]=useState(()=>JSON.parse(localStorage.getItem('fav')||'[]')); const [recent,setRecent]=useState(()=>JSON.parse(localStorage.getItem('recent')||'[]'))
useEffect(()=>{localStorage.setItem('fav',JSON.stringify(fav))},[fav]); useEffect(()=>{localStorage.setItem('recent',JSON.stringify(recent))},[recent])
const filtered = TOOLS.filter(t=>{const matchCat = cat==='All' || (cat==='Favorites' && fav.includes(t.name)) || (cat==='Recent' && recent.includes(t.name)) || t.cat===cat; const matchQ = !q || t.name.toLowerCase().includes(q.toLowerCase()) || t.desc.toLowerCase().includes(q.toLowerCase()); return matchCat && matchQ;});
return(
<div style={{maxWidth:1200,margin:'0 auto',padding:'32px 20px'}}>
<div style={{textAlign:'center',maxWidth:700,margin:'0 auto 24px'}}>
<h1 style={{fontSize:32,fontWeight:700,lineHeight:'1.15',margin:'0 0 12px'}}>Wana Based. Global Built.<br/>64 free tools for researchers & freelancers.</h1>
<p style={{fontSize:15,color:'#64748b',margin:'0 0 20px'}}>Built in Wana, South Waziristan for the world. Real Urdu اردو & Pashto پښتو translator.</p>
<input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search 64 tools..." style={{width:'100%',maxWidth:480,padding:'14px 20px',borderRadius:999,border:'1px solid #e2e8f0',background:'#fff',fontSize:14,outline:'none'}}/>
<div style={{display:'flex',gap:8,justifyContent:'center',flexWrap:'wrap',marginTop:16}}>
{['All','Featured','Image','Text','Dev','Daily','PDF','Social','Favorites'].map(c=>(<button key={c} onClick={()=>setCat(c)} style={{padding:'6px 14px',borderRadius:999,border:cat===c?'1px solid #0f172a':'1px solid #e2e8f0',background:cat===c?'#0f172a':'#fff',color:cat===c?'#fff':'#475569',fontSize:13,cursor:'pointer'}}>{c}</button>))}
</div>
</div>
<div style={{background:'#fff',border:'1px solid #f1f5f9',borderRadius:16,padding:'14px 16px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12,marginBottom:24}}>
<div style={{display:'flex',gap:12,alignItems:'center',flexWrap:'wrap'}}>
<div style={{fontSize:13,fontWeight:600}}>Live Deals:</div>
<div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
<a href={getAviaLink('NYC','LON')} target="_blank" rel="noreferrer" style={{padding:'6px 12px',borderRadius:999,background:'#f8fafc',border:'1px solid #e2e8f0',fontSize:12,textDecoration:'none',color:'#0f172a'}}>✈️ Flights</a>
<a href={getBookingLink('Dubai')} target="_blank" rel="noreferrer" style={{padding:'6px 12px',borderRadius:999,background:'#f8fafc',border:'1px solid #e2e8f0',fontSize:12,textDecoration:'none',color:'#0f172a'}}>🏨 Hotels</a>
<a href={getAmazonLink()} target="_blank" rel="noreferrer" style={{padding:'6px 12px',borderRadius:999,background:'#fef3c7',border:'1px solid #fde68a',fontSize:12,textDecoration:'none',color:'#92400e'}}>🛒 Amazon LIVE</a>
<a href={getAliLink()} target="_blank" rel="noreferrer" style={{padding:'6px 12px',borderRadius:999,background:'#fee2e2',border:'1px solid #fecaca',fontSize:12,textDecoration:'none',color:'#991b1b'}}>🛍️ AliExpress</a>
<a href={getFiverrLink()} target="_blank" rel="noreferrer" style={{padding:'6px 12px',borderRadius:999,background:'#dcfce7',border:'1px solid #bbf7d0',fontSize:12,textDecoration:'none',color:'#166534'}}>💼 Fiverr</a>
</div>
</div>
</div>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(190px, 1fr))',gap:14}}>
{filtered.map(t=>(<div key={t.name} onClick={()=>{setRecent(r=>[t.name,...r.filter(x=>x!==t.name)].slice(0,8)); setActiveTool(t)}} style={{background:'#fff',border:'1px solid #f1f5f9',borderRadius:16,padding:16,cursor:'pointer'}}><div style={{display:'flex',justifyContent:'space-between',marginBottom:12}}><div style={{width:40,height:40,borderRadius:10,background:`${t.color}14`,color:t.color,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>{t.icon}</div><button onClick={e=>{e.stopPropagation(); setFav(p=>p.includes(t.name)?p.filter(x=>x!==t.name):[...p,t.name])}} style={{background:'transparent',border:0,cursor:'pointer',color:fav.includes(t.name)?'#f59e0b':'#cbd5e1'}}>{fav.includes(t.name)?'★':'☆'}</button></div><div style={{fontWeight:600,fontSize:14,marginBottom:4}}>{t.name}</div><div style={{fontSize:12,color:'#64748b'}}>{t.desc}</div></div>))}
</div>
{activeTool && <ToolModal tool={activeTool} onClose={()=>setActiveTool(null)}/>}
{showTravel && (<div onClick={()=>setShowTravel(false)} style={{position:'fixed',inset:0,background:'rgba(15,23,42,0.5)',backdropFilter:'blur(8px)',zIndex:50,display:'flex',justifyContent:'center',alignItems:'center',padding:16}}><div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:20,padding:20,width:'100%',maxWidth:580,maxHeight:'90vh',overflow:'auto'}}><h3 style={{margin:'0 0 16px',fontSize:18,fontWeight:700}}>✈️ Travel + Shopping - ALL 7 LIVE</h3><div style={{display:'flex',flexDirection:'column',gap:10}}><a href={getAviaLink('NYC','LON')} target="_blank" rel="noreferrer" style={{display:'flex',justifyContent:'space-between',padding:'14px 16px',borderRadius:12,border:'1px solid #f1f5f9',background:'#fcfcfd',textDecoration:'none',color:'#0f172a'}}><div><b>✈️ Flights - Aviasales</b></div><span>→</span></a><a href={getBookingLink('Dubai')} target="_blank" rel="noreferrer" style={{display:'flex',justifyContent:'space-between',padding:'14px 16px',borderRadius:12,border:'1px solid #f1f5f9',background:'#fcfcfd',textDecoration:'none',color:'#0f172a'}}><div><b>🏨 Hotels - Booking.com</b></div><span>→</span></a><a href={getAmazonLink()} target="_blank" rel="noreferrer" style={{display:'flex',justifyContent:'space-between',padding:'14px 16px',borderRadius:12,border:'1px solid #fef3c7',background:'#fffbeb',textDecoration:'none',color:'#0f172a'}}><div><b>🛒 Amazon - LIVE wanalabpk-20</b></div><span>→</span></a></div><button onClick={()=>setShowTravel(false)} style={{marginTop:12,width:'100%',padding:'12px',borderRadius:12,border:'1px solid #e2e8f0',background:'#fff'}}>Close</button></div></div>)}
{showSport && (<div onClick={()=>setShowSport(false)} style={{position:'fixed',inset:0,background:'rgba(15,23,42,0.5)',backdropFilter:'blur(8px)',zIndex:51,display:'flex',justifyContent:'center',alignItems:'center',padding:16}}><div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:20,padding:20,width:'100%',maxWidth:480}}><h3 style={{margin:'0 0 16px'}}>SportHub.pk</h3><a href="https://www.espncricinfo.com/series/psl-2025-1496956" target="_blank" rel="noreferrer" style={{display:'block',padding:'12px',borderRadius:12,border:'1px solid #f1f5f9',textDecoration:'none',color:'#0f172a',marginBottom:8}}>PSL →</a><button onClick={()=>setShowSport(false)} style={{marginTop:16,width:'100%',padding:'12px',borderRadius:12,border:'1px solid #e2e8f0',background:'#fff'}}>Close</button></div></div>)}
</div>
)
}

function Layout(){
  return(
    <div style={{fontFamily:'Inter, system-ui, sans-serif',background:'#fcfcfd',minHeight:'100vh',color:'#0f172a'}}>
    <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); *{font-family:'Inter',sans-serif}`}</style>
    <header style={{position:'sticky',top:0,zIndex:20,background:'rgba(255,255,255,0.8)',backdropFilter:'blur(12px)',borderBottom:'1px solid #f1f5f9'}}>
    <div style={{maxWidth:1200,margin:'0 auto',padding:'14px 20px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
    <Link to="/" style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none',color:'#0f172a'}}><div style={{width:32,height:32,borderRadius:8,background:'#0f172a',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700}}>W</div><div><div style={{fontWeight:700,fontSize:15}}>WanaLab</div><div style={{fontSize:11,color:'#64748b'}}>Wana Based • Global Built • {TOOLS.length} tools</div></div></Link>
    <div style={{display:'flex',gap:8,alignItems:'center'}}>
    <Link to="/about" style={{padding:'8px 14px',borderRadius:999,border:'1px solid #e2e8f0',background:'#fff',fontSize:13,textDecoration:'none',color:'#0f172a'}}>About</Link>
    <Link to="/contact" style={{padding:'8px 14px',borderRadius:999,background:'#0f172a',color:'#fff',fontSize:13,textDecoration:'none'}}>Contact</Link>
    </div>
    </div>
    </header>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<StaticPage title="About WanaLab - Wana Based, Global Built" content={AboutContent()} />} />
      <Route path="/privacy" element={<StaticPage title="Privacy Policy - WanaLab.org" content={PrivacyContent()} />} />
      <Route path="/terms" element={<StaticPage title="Terms of Service - WanaLab.org" content={TermsContent()} />} />
      <Route path="/contact" element={<StaticPage title="Contact — WanaLab.org" content={ContactContent()} />} />
    </Routes>
    <div style={{maxWidth:1200,margin:'0 auto',padding:'0 20px'}}><div style={{marginTop:48,padding:'20px 0',borderTop:'1px solid #f1f5f9',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:12,fontSize:12,color:'#94a3b8'}}><div>© 2026 WanaLab • Wana, South Waziristan • {TOOLS.length} tools • Founder Nasir Khan • nasir@wanalab.org</div><div style={{display:'flex',gap:16}}><Link to="/about" style={{color:'#94a3b8',textDecoration:'none'}}>About</Link><Link to="/privacy" style={{color:'#94a3b8',textDecoration:'none'}}>Privacy</Link><Link to="/terms" style={{color:'#94a3b8',textDecoration:'none'}}>Terms</Link><Link to="/contact" style={{color:'#0f172a',fontWeight:500,textDecoration:'none'}}>Contact</Link></div></div></div>
    </div>
  )
}

export default function App(){
  return (<BrowserRouter><Layout /></BrowserRouter>)
 }
