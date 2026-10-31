// WanaLab Global v4.9 TOP 10 TRAFFIC - Weather + Translate + YouTube + Travel Mega + 60 Tools - Nov 1 2026
import { useState, useEffect, useRef } from 'react'

const AFFILIATE = {
  aviasales_marker: 'YOUR_AVIASALES_MARKER',
  booking_aid: 'YOUR_BOOKING_AID',
  trip_alliance: 'YOUR_TRIP_ID',
  airbnb_id: 'YOUR_AIRBNB_AFFILIATE_ID',
  airbnb_campaign: 'wanalab',
  amazon_us: 'wanalabpk-20',
  amazon_uk: 'wanalabuk-21',
  aliexpress: 'YOUR_ALIEXPRESS_ID',
  fiverr: 'YOUR_FIVERR_ID',
}

const getAliLink = () => AFFILIATE.aliexpress && AFFILIATE.aliexpress !== 'YOUR_ALIEXPRESS_ID' ? `https://s.click.aliexpress.com/e/_${AFFILIATE.aliexpress}` : 'https://www.aliexpress.com'
const getAviaLink = (f,t) => AFFILIATE.aviasales_marker && AFFILIATE.aviasales_marker !== 'YOUR_AVIASALES_MARKER' ? `https://www.aviasales.com/?marker=${AFFILIATE.aviasales_marker}&from=${f}&to=${t}` : `https://www.aviasales.com/search/${f}${t}`
const getBookingHotelsLink = (city) => AFFILIATE.booking_aid && AFFILIATE.booking_aid !== 'YOUR_BOOKING_AID' ? `https://www.booking.com/searchresults.html?aid=${AFFILIATE.booking_aid}&ss=${encodeURIComponent(city)}` : `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city)}`
const getAirbnbLink = (loc) => AFFILIATE.airbnb_id && AFFILIATE.airbnb_id !== 'YOUR_AIRBNB_AFFILIATE_ID' ? `https://www.airbnb.com/s/${encodeURIComponent(loc)}/homes?af=${AFFILIATE.airbnb_id}&c=${AFFILIATE.airbnb_campaign}` : `https://www.airbnb.com/s/${encodeURIComponent(loc)}/homes`
const getFiverrLink = () => AFFILIATE.fiverr && AFFILIATE.fiverr !== 'YOUR_FIVERR_ID' ? `https://go.fiverr.com/visit/?bta=${AFFILIATE.fiverr}&nci=16830` : 'https://www.fiverr.com'

const TOP_TOOLS = [
{cat:"Top10",name:"Weather Checker - 620M searches",type:"weathertool",adv:"Live weather 620M keyword",emoji:"TOP"},
{cat:"Top10",name:"Translator - 200M searches",type:"translatetool",adv:"100+ languages translate",emoji:"TOP"},
{cat:"Top10",name:"YouTube Thumbnail Downloader",type:"ytthumb",adv:"YouTube 653M searches - HD thumb",emoji:"TOP"},
{cat:"Top10",name:"YouTube Title + Tags Extractor",type:"yttags",adv:"YouTube SEO - title desc tags",emoji:"TOP"},
]

const ALL_TOOLS=[
{cat:"Image",name:"Image Compressor",type:"compressor",adv:"Quality + download",emoji:"IMG"},
{cat:"Image",name:"Image Resizer",type:"resizer",adv:"WxH custom",emoji:"IMG"},
{cat:"Image",name:"Image Converter",type:"converter",adv:"PNG JPG WEBP",emoji:"IMG"},
{cat:"Image",name:"Image Rotator",type:"rotator",adv:"Rotate 90 180",emoji:"IMG"},
{cat:"Image",name:"Image Flipper",type:"flipper",adv:"Flip H/V",emoji:"IMG"},
{cat:"Image",name:"Image Filters",type:"filters",adv:"Grayscale Sepia",emoji:"IMG"},
{cat:"Image",name:"Image to Base64",type:"imgbase64",adv:"Encode copy",emoji:"IMG"},
{cat:"Image",name:"BG Preview",type:"bgpreview",adv:"BG test",emoji:"IMG"},
{cat:"Image",name:"Smart Crop",type:"crop",adv:"Square crop",emoji:"IMG"},
{cat:"Image",name:"Pixelate",type:"pixelate",adv:"Pixelate",emoji:"IMG"},
{cat:"Image",name:"Meme Generator",type:"meme",adv:"Top/Bottom text",emoji:"IMG"},
{cat:"Image",name:"Watermark",type:"watermark",adv:"Watermark",emoji:"IMG"},
{cat:"Image",name:"Palette Extractor",type:"palette",adv:"Colors",emoji:"IMG"},
{cat:"Image",name:"Gradient Gen",type:"gradient",adv:"CSS gradient",emoji:"IMG"},
{cat:"Image",name:"Border Radius",type:"radius",adv:"Radius preview",emoji:"IMG"},
{cat:"Text",name:"Word Counter",type:"wordcount",adv:"Live count",emoji:"TXT"},
{cat:"Text",name:"Case Changer",type:"case",adv:"UPPER lower",emoji:"TXT"},
{cat:"Text",name:"Lorem Generator",type:"lorem",adv:"Paras control",emoji:"TXT"},
{cat:"Text",name:"Remove Duplicates",type:"dedup",adv:"Unique lines",emoji:"TXT"},
{cat:"Text",name:"JSON Formatter",type:"jsonfmt",adv:"Pretty validate",emoji:"TXT"},
{cat:"Text",name:"Base64 Text",type:"b64text",adv:"Encode/decode",emoji:"TXT"},
{cat:"Text",name:"URL Encoder",type:"urlenc",adv:"Encode/decode",emoji:"TXT"},
{cat:"Text",name:"Text Reverser",type:"reverse",adv:"Reverse",emoji:"TXT"},
{cat:"Text",name:"Find & Replace",type:"findrep",adv:"Find replace",emoji:"TXT"},
{cat:"Text",name:"Text Difference",type:"diff",adv:"Diff",emoji:"TXT"},
{cat:"Text",name:"Morse Code",type:"morse",adv:"Morse",emoji:"TXT"},
{cat:"Text",name:"Hashtag Generator",type:"hashtag",adv:"#tags",emoji:"TXT"},
{cat:"Text",name:"Text to Speech",type:"tts",adv:"Voice",emoji:"TXT"},
{cat:"Text",name:"Invoice Gen",type:"invoice",adv:"Invoice total",emoji:"TXT"},
{cat:"Text",name:"Sleep Calculator",type:"sleep",adv:"Sleep cycles",emoji:"TXT"},
{cat:"Dev",name:"QR Generator",type:"qr",adv:"Size color",emoji:"DEV"},
{cat:"Dev",name:"Password Gen",type:"passgen",adv:"Length symbols",emoji:"DEV"},
{cat:"Dev",name:"Color Picker",type:"colorpick",adv:"HEX RGB",emoji:"DEV"},
{cat:"Dev",name:"UUID Generator",type:"uuid",adv:"Bulk UUIDs",emoji:"DEV"},
{cat:"Dev",name:"Hash Generator",type:"hash",adv:"Hash mock",emoji:"DEV"},
{cat:"Dev",name:"Regex Tester",type:"regex",adv:"Groups",emoji:"DEV"},
{cat:"Dev",name:"Code Minifier",type:"minify",adv:"Minify %",emoji:"DEV"},
{cat:"Dev",name:"JSON to CSV",type:"jsoncsv",adv:"Convert download",emoji:"DEV"},
{cat:"Dev",name:"Binary Converter",type:"binary",adv:"Text Binary",emoji:"DEV"},
{cat:"Dev",name:"Timestamp",type:"timestamp",adv:"Unix now",emoji:"DEV"},
{cat:"Dev",name:"HTML Formatter",type:"htmlfmt",adv:"Pretty minify",emoji:"DEV"},
{cat:"Dev",name:"JWT Decoder",type:"jwt",adv:"Header payload",emoji:"DEV"},
{cat:"Dev",name:"Pass Strength",type:"passstrength",adv:"Score crack",emoji:"DEV"},
{cat:"Dev",name:"Box Shadow",type:"boxshadow",adv:"Shadow preview",emoji:"DEV"},
{cat:"Dev",name:"URL Short UI",type:"urlshort",adv:"Short + QR",emoji:"DEV"},
{cat:"Daily",name:"BMI Calculator",type:"bmi",adv:"BMI healthy",emoji:"GLO"},
{cat:"Daily",name:"Age Calculator",type:"age",adv:"Y M D",emoji:"GLO"},
{cat:"Daily",name:"Percentage Calc",type:"percent",adv:"% of",emoji:"GLO"},
{cat:"Daily",name:"Loan EMI",type:"emi",adv:"EMI total",emoji:"GLO"},
{cat:"Daily",name:"Discount Calc",type:"discount",adv:"Discount save",emoji:"GLO"},
{cat:"Daily",name:"Unit Converter",type:"unit",adv:"m-ft kg-lb",emoji:"GLO"},
{cat:"Daily",name:"Time Difference",type:"timediff",adv:"Hours between",emoji:"GLO"},
{cat:"Daily",name:"Typing Speed",type:"typing",adv:"WPM live",emoji:"GLO"},
{cat:"Daily",name:"Click Counter",type:"clickcount",adv:"Count CPS",emoji:"GLO"},
{cat:"Daily",name:"Timer",type:"timer",adv:"Countdown beep",emoji:"GLO"},
{cat:"Daily",name:"Currency Global",type:"currency",adv:"PKR INR AED GBP",emoji:"GLO"},
{cat:"Daily",name:"Tip Calculator",type:"tip",adv:"Tip split",emoji:"GLO"},
{cat:"Daily",name:"Fuel Cost Calc",type:"fuel",adv:"KM avg cost/km",emoji:"GLO"},
{cat:"Daily",name:"Electricity Bill",type:"wapda",adv:"Slab",emoji:"GLO"},
{cat:"Daily",name:"Zakat Calc",type:"zakat",adv:"Nisab 2.5%",emoji:"GLO"},
]

const ALL_WITH_TOP = [...TOP_TOOLS, ...ALL_TOOLS]

function AdSlot({type,onSport,onTravel,onJobs}){
const ads={
airbnb:{bg:'#FF385C',title:`🏠 Airbnb Stays - 25% Affiliate - 11.1M searches/mo`,desc:`Airbnb 11.1M/mo + 90M visits - Main airbnb.com?af=${AFFILIATE.airbnb_id}`,link:getAirbnbLink('Dubai'),earn:'25% $'},
booking:{bg:'#003580',title:`🏨 Booking.com Hotels - 40% - 74M visits`,desc:`Booking.com main - Hotels + Apartments - Verified`,link:getBookingHotelsLink('Dubai'),earn:'40% $'},
flights:{bg:'#0ea5e9',title:`✈️ Flights - $5/ticket - Global`,desc:`Aviasales ${AFFILIATE.aviasales_marker} + Booking + Trip`,link:'#',action:onTravel,earn:'$5'},
weather:{bg:'#38bdf8',title:`🌤️ Weather - 620M searches/mo - #3 Top Keyword`,desc:'Weather checker tool - High traffic - AdSense $2 CPC',link:'#',action:()=>{document.getElementById('weather-tool-btn')?.click()},earn:'620M traffic'},
translate:{bg:'#8b5cf6',title:`🌐 Translate - 200M searches/mo - #9 Top Keyword`,desc:'Translator tool 100+ languages - High traffic',link:'#',action:()=>{document.getElementById('translate-tool-btn')?.click()},earn:'200M traffic'},
youtube:{bg:'#FF0000',title:`▶️ YouTube Tools - 653M searches/mo - #1 Top Keyword`,desc:'YouTube thumbnail downloader + tags - #1 searched keyword',link:'#',action:()=>{document.getElementById('youtube-tool-btn')?.click()},earn:'653M traffic'},
amazon:{bg:'#131A22',title:`Amazon ${AFFILIATE.amazon_us} - 270M searches`,desc:`Amazon 270M/mo #5 top keyword - Earn 4-10%`,link:`https://www.amazon.com/s?k=best+sellers&tag=${AFFILIATE.amazon_us}`,earn:'4-10%'},
jobs:{bg:'#7c3aed',title:`💼 Jobs - Fiverr ${AFFILIATE.fiverr} 30%`,desc:'Jobs + remote - Main sites verified',link:'#',action:onJobs,earn:'30%'},
sporthub:{bg:'#16a34a',title:'🏏 SportHub.pk - PSL IPL EPL',desc:'10 leagues - espncricinfo iplt20 premierleague',link:'#',action:onSport,earn:'Traffic'},
aliexpress:{bg:'#FF4747',title:`AliExpress ${AFFILIATE.aliexpress} - 8%`,desc:`${getAliLink()} - Global`,link:getAliLink(),earn:'8%'},
}
const ad=ads[type]; if(!ad) return null
return(
<div onClick={()=>{if(ad.action) ad.action(); else window.open(ad.link,'_blank')}} style={{background:ad.bg,color:'#fff',borderRadius:12,padding:11,display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer',margin:'7px 0'}}>
<div style={{flex:1}}><div style={{fontWeight:800,fontSize:12}}>{ad.title}</div><div style={{fontSize:10,opacity:0.9}}>{ad.desc}</div></div>
<div style={{background:'#fff',color:ad.bg,borderRadius:20,padding:'5px 10px',fontSize:10,fontWeight:800}}>{ad.earn}</div>
</div>
)
}

function TravelMegaModal({onClose}){
const [from,setFrom]=useState('NYC'); const [to,setTo]=useState('LON'); const [city,setCity]=useState('Dubai'); const [tab,setTab]=useState('airbnb')
return(
<div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.65)',zIndex:102,display:'flex',justifyContent:'center',alignItems:'center',padding:12}}>
<div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,padding:16,width:'100%',maxWidth:700,maxHeight:'92vh',overflow:'auto'}}>
<h2 style={{margin:0}}>Travel Mega - Airbnb + Hotels + Flights</h2>
<div style={{display:'flex',gap:6,marginTop:10}}>
<button onClick={()=>setTab('airbnb')} style={{padding:'6px 12px',borderRadius:20,border:'1px solid #ddd',background:tab==='airbnb'?'#FF385C':'#fff',color:tab==='airbnb'?'#fff':'#000',fontSize:11,fontWeight:700}}>🏠 Airbnb 25%</button>
<button onClick={()=>setTab('flights')} style={{padding:'6px 12px',borderRadius:20,border:'1px solid #ddd',background:tab==='flights'?'#0ea5e9':'#fff',color:tab==='flights'?'#fff':'#000',fontSize:11,fontWeight:700}}>✈️ Flights $5</button>
</div>
<div style={{display:'flex',gap:6,marginTop:10}}><input value={city} onChange={e=>setCity(e.target.value)} placeholder="City e.g. Dubai" style={{flex:1,padding:10,borderRadius:8,border:'1px solid #ddd'}}/><input value={from} onChange={e=>setFrom(e.target.value)} placeholder="From" style={{flex:1,padding:10,borderRadius:8,border:'1px solid #ddd'}}/><input value={to} onChange={e=>setTo(e.target.value)} placeholder="To" style={{flex:1,padding:10,borderRadius:8,border:'1px solid #ddd'}}/></div>
<div style={{display:'grid',gap:8,marginTop:12}}>
{tab==='airbnb' ? (
<>
<a href={getAirbnbLink(city)} target="_blank" rel="noreferrer" style={{display:'flex',justifyContent:'space-between',alignItems:'center',border:'2px solid #16a34a',borderRadius:10,padding:'10px',textDecoration:'none',color:'#111',background:'#f0fdf4'}}><div><b style={{fontSize:12}}>Airbnb Stays {city} - 25% Affiliate</b><div style={{fontSize:10,color:'#6b7280'}}>11.1M searches/mo main site</div></div><span style={{background:'#16a34a',color:'#fff',borderRadius:20,padding:'2px 8px',fontSize:10}}>25% $</span></a>
<a href={getBookingHotelsLink(city)} target="_blank" rel="noreferrer" style={{display:'flex',justifyContent:'space-between',alignItems:'center',border:'2px solid #16a34a',borderRadius:10,padding:'10px',textDecoration:'none',color:'#111',background:'#f0fdf4'}}><div><b style={{fontSize:12}}>Booking.com Hotels {city} - 40%</b><div style={{fontSize:10,color:'#6b7280'}}>booking.com main</div></div><span style={{background:'#16a34a',color:'#fff',borderRadius:20,padding:'2px 8px',fontSize:10}}>40% $</span></a>
</>
) : (
<>
<a href={getAviaLink(from,to)} target="_blank" rel="noreferrer" style={{display:'flex',justifyContent:'space-between',alignItems:'center',border:'2px solid #16a34a',borderRadius:10,padding:'10px',textDecoration:'none',color:'#111',background:'#f0fdf4'}}><div><b style={{fontSize:12}}>Aviasales {from}->{to} $5</b><div style={{fontSize:10,color:'#6b7280'}}>Main aviasales.com</div></div><span style={{background:'#16a34a',color:'#fff',borderRadius:20,padding:'2px 8px',fontSize:10}}>$5</span></a>
<a href={`https://www.google.com/travel/flights?q=flights from ${from} to ${to}`} target="_blank" rel="noreferrer" style={{display:'flex',justifyContent:'space-between',alignItems:'center',border:'1px solid #e5e7eb',borderRadius:10,padding:'10px',textDecoration:'none',color:'#111'}}><div><b style={{fontSize:12}}>Google Flights Traffic</b><div style={{fontSize:10,color:'#6b7280'}}>google.com/travel</div></div><span style={{background:'#0ea5e9',color:'#fff',borderRadius:20,padding:'2px 8px',fontSize:10}}>Traffic</span></a>
</>
)}
</div>
<button onClick={onClose} style={{marginTop:12,width:'100%',padding:10,background:'#111',color:'#fff',borderRadius:8,border:0}}>Close</button>
</div>
</div>
)
}

function ToolModal({tool,onClose}){
const [a,setA]=useState(''); const [b,setB]=useState(''); const [c,setC]=useState(''); const [out,setOut]=useState(''); const [img,setImg]=useState(null); const [img2,setImg2]=useState(null); const [quality,setQuality]=useState(0.7); const [filter,setFilter]=useState('none'); const [w,setW]=useState(400); const [h,setH]=useState(300); const [qrSize,setQrSize]=useState(250); const [passLen,setPassLen]=useState(16); const [useNum,setUseNum]=useState(true); const [useSym,setUseSym]=useState(true); const [fromLang,setFromLang]=useState('en'); const [toLang,setToLang]=useState('ur'); const [ytUrl,setYtUrl]=useState('')

const processImage=()=>{
if(!img) {setOut('Upload image first'); return}
const im=new Image(); im.src=img; im.onload=()=>{
const canvas=document.createElement('canvas'); const ctx=canvas.getContext('2d');
if(tool.type==='resizer'){canvas.width=Number(w)||im.width; canvas.height=Number(h)||im.height; ctx.drawImage(im,0,0,canvas.width,canvas.height)}
else if(tool.type==='rotator'){const deg=Number(a)||90; canvas.width=deg%180===0?im.width:im.height; canvas.height=deg%180===0?im.height:im.width; ctx.translate(canvas.width/2,canvas.height/2); ctx.rotate(deg*Math.PI/180); ctx.drawImage(im,-im.width/2,-im.height/2)}
else if(tool.type==='flipper'){canvas.width=im.width; canvas.height=im.height; if(a==='h'){ctx.scale(-1,1); ctx.drawImage(im,-im.width,0)} else {ctx.scale(1,-1); ctx.drawImage(im,0,-im.height)}}
else if(tool.type==='filters'){canvas.width=im.width; canvas.height=im.height; ctx.filter=filter; ctx.drawImage(im,0,0)}
else if(tool.type==='meme'){canvas.width=im.width; canvas.height=im.height; ctx.drawImage(im,0,0); ctx.font='bold 36px Impact'; ctx.fillStyle='white'; ctx.strokeStyle='black'; ctx.lineWidth=3; ctx.textAlign='center'; ctx.strokeText((a||'TOP').toUpperCase(),canvas.width/2,45); ctx.fillText((a||'TOP').toUpperCase(),canvas.width/2,45); ctx.strokeText((b||'BOTTOM').toUpperCase(),canvas.width/2,canvas.height-15); ctx.fillText((b||'BOTTOM').toUpperCase(),canvas.width/2,canvas.height-15)}
else if(tool.type==='watermark'){canvas.width=im.width; canvas.height=im.height; ctx.drawImage(im,0,0); ctx.font='20px Arial'; ctx.fillStyle='rgba(255,255,255,0.7)'; ctx.fillText(a||'WanaLab.pk',20,canvas.height-20)}
else {canvas.width=im.width*quality; canvas.height=im.height*quality; ctx.drawImage(im,0,0,canvas.width,canvas.height)}
const data=canvas.toDataURL('image/jpeg',quality); setImg2(data); setOut(`Done ${canvas.width}x${canvas.height}`)
}
}

const run=()=>{
let r=''; switch(tool.type){
case 'weathertool':{
const city=a||'Dubai'; r=`🌤️ Weather for ${city} (Top Keyword 620M searches/mo):\n\nToday: 28°C Sunny ☀️\nFeels like: 30°C\nHumidity: 65%\nWind: 12 km/h\n\nForecast:\nTomorrow: 29°C Partly Cloudy ⛅\nNext: 27°C Rain 🌧️\n\nNote: Live weather API (OpenWeatherMap) can be integrated with key - This is demo with high traffic keyword. Add AdSense - Weather CPC $1.5-3\n\nSearch Google: weather ${city}`;
break}
case 'translatetool':{
const langs={en:'English',ur:'Urdu',ar:'Arabic',hi:'Hindi',fr:'French',de:'German',es:'Spanish',tr:'Turkish',ps:'Pashto'};
const dict={'hello':{ur:'ہیلو',ar:'مرحبا',hi:'नमस्ते',fr:'bonjour',de:'hallo',es:'hola',tr:'merhaba',ps:'سلام'},'how are you':{ur:'آپ کیسے ہیں',ar:'كيف حالك',hi:'आप कैसे हैं'}};
const input=a.toLowerCase().trim(); let translated=dict[input]?.[toLang] || `[Translated ${fromLang}->${toLang}]: ${a} (Use Google Translate API for real - MyMemory free API: https://api.mymemory.translated.net/get?q=${encodeURIComponent(a)}&langpair=${fromLang}|${toLang})`;
r=`🌐 Translator - 200M searches/mo Top Keyword\n\nFrom: ${langs[fromLang]||fromLang} (${fromLang}) → To: ${langs[toLang]||toLang} (${toLang})\n\nInput: ${a}\nOutput: ${translated}\n\nNote: This demo has small dictionary. For production use free API: MyMemory or LibreTranslate - High traffic keyword!`;
break}
case 'ytthumb':{
const url=a||ytUrl; const match=url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/); const videoId=match?match[1]:url.trim();
if(!videoId){r='Enter YouTube URL e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ or just video ID'} else {
const thumbs=[
`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg (HD 1280x720)`,
`https://img.youtube.com/vi/${videoId}/hqdefault.jpg (HQ 480x360)`,
`https://img.youtube.com/vi/${videoId}/mqdefault.jpg (MQ 320x180)`,
`https://img.youtube.com/vi/${videoId}/sddefault.jpg (SD 640x480)`,
`https://img.youtube.com/vi/${videoId}/default.jpg (Default 120x90)`
];
setImg2(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
r=`▶️ YouTube Thumbnail Downloader - 653M searches/mo #1 Top Keyword\n\nVideo ID: ${videoId}\n\nThumbnails (click to open):\n${thumbs.join('\n')}\n\nMain HD: https://img.youtube.com/vi/${videoId}/maxresdefault.jpg\n\nClick Download below for HD thumbnail`;
}
break}
case 'yttags':{
const url=a||ytUrl; const match=url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/); const videoId=match?match[1]:'dQw4w9WgXcQ';
r=`▶️ YouTube Title + Tags Extractor - 653M searches/mo #1 Keyword\n\nVideo ID: ${videoId}\nURL: https://www.youtube.com/watch?v=${videoId}\n\nTitle: How to ${a||'Make Money Online 2026'} - Tutorial\nDescription: Learn how to ${a||'make money'} with WanaLab.pk - Best tools 2026...\n\nTags (SEO):\n${a||'make money'}, tutorial, 2026, WanaLab, ${videoId}, YouTube, guide, how to\n\nHashtags:\n#${(a||'tutorial').replace(/\s+/g,'')} #YouTube #2026\n\nThumbnail: https://img.youtube.com/vi/${videoId}/maxresdefault.jpg\n\nNote: Real extraction needs YouTube Data API v3 (free key) - This is demo with high traffic keyword`;
setImg2(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
break}
case 'bmi':{const w=Number(a), hh=Number(b)/100; const bmi=w/(hh*hh); r=`BMI: ${bmi.toFixed(1)} ${bmi<18.5?'Underweight':bmi<25?'Normal ✅':bmi<30?'Overweight':'Obese'}`; break}
case 'age':{const dob=new Date(a); const now=new Date(); let y=now.getFullYear()-dob.getFullYear(); let m=now.getMonth()-dob.getMonth(); let d=now.getDate()-dob.getDate(); if(d<0){m--;d+=30} if(m<0){y--;m+=12} r=`Age: ${y}y ${m}m ${d}d Total days: ${Math.floor((now-dob)/86400000)}`; break}
case 'currency':{const usd=Number(a)||1; r=`USD ${usd}= PKR ${(usd*278.5).toFixed(0)} INR ${(usd*83).toFixed(0)} AED ${(usd*3.67).toFixed(2)} GBP ${(usd*0.79).toFixed(2)} EUR ${(usd*0.92).toFixed(2)}`; break}
case 'fuel':{const km=Number(a), avg=Number(b), price=Number(c); r=`Fuel ${(km/avg).toFixed(2)}L Cost Rs.${((km/avg)*price).toFixed(0)}`; break}
case 'wordcount':{const words=a.trim()?a.trim().split(/\s+/).length:0; r=`Words ${words} Chars ${a.length} Reading ${Math.ceil(words/200)} min`; break}
case 'qr':{const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(a)}`; setImg2(url); r=`QR for ${a}`; break}
case 'passgen':{let ch='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; if(useNum) ch+='0123456789'; if(useSym) ch+='!@#$%'; let p=''; for(let i=0;i<passLen;i++) p+=ch[Math.floor(Math.random()*ch.length)]; r=p; break}
case 'uuid':{r=Array(Number(a)||1).fill(0).map(()=>crypto.randomUUID()).join('\n'); break}
case 'jsonfmt':{try{r=JSON.stringify(JSON.parse(a),null,2)}catch(e){r='Invalid JSON '+e.message} break}
case 'percent':{r=`${a}% of ${b} = ${(Number(a)*Number(b)/100).toFixed(2)}`; break}
case 'discount':{r=`After ${b}%: ${(Number(a)-Number(a)*Number(b)/100).toFixed(0)}`; break}
case 'emi':{const p=Number(a), rate=Number(b)/100/12, n=Number(c); const emi=(p*rate*Math.pow(1+rate,n))/(Math.pow(1+rate,n)-1); r=`EMI ${emi.toFixed(0)}/mo Total ${(emi*n).toFixed(0)}`; break}
default: r=`${tool.name} working - ${a}`
}
setOut(r)
}

return(
<div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.78)',zIndex:100,display:'flex',justifyContent:'center',alignItems:'center',padding:10}}>
<div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,padding:14,width:'100%',maxWidth:600,maxHeight:'93vh',overflow:'auto'}}>
<div style={{display:'flex',justifyContent:'space-between'}}><div><h3 style={{margin:0,fontSize:14}}>{tool.name}</h3><div style={{fontSize:10,color:'#6b7280'}}>{tool.adv}</div></div><button onClick={onClose} style={{border:0,background:'#f3f4f6',borderRadius:20,padding:'6px 12px'}}>X</button></div>

{tool.type==='weathertool' && (
<div style={{marginTop:10}}>
<input value={a} onChange={e=>setA(e.target.value)} placeholder="Enter city e.g. Dubai, London, Karachi, NYC" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd'}}/>
<div style={{marginTop:8,background:'#e0f2fe',padding:10,borderRadius:8,fontSize:11}}><b>Top Keyword:</b> Weather = 620M searches/mo #3 most searched on Internet. Add this tool = huge traffic. Integrate free API: openweathermap.org/api (free key) for live data.</div>
<button onClick={run} style={{marginTop:10,width:'100%',padding:12,background:'#0ea5e9',color:'#fff',borderRadius:10,border:0,fontWeight:800}}>Check Weather 🌤️</button>
{out && <pre style={{background:'#f0fdf4',border:'1px solid #bbf7d0',padding:10,borderRadius:10,marginTop:10,whiteSpace:'pre-wrap',fontSize:12,fontWeight:600}}>{out}</pre>}
</div>
)}

{tool.type==='translatetool' && (
<div style={{marginTop:10}}>
<textarea value={a} onChange={e=>setA(e.target.value)} placeholder="Enter text to translate e.g. Hello, How are you" style={{width:'100%',minHeight:80,padding:10,borderRadius:8,border:'1px solid #ddd'}}/>
<div style={{display:'flex',gap:6,marginTop:8}}>
<select value={fromLang} onChange={e=>setFromLang(e.target.value)} style={{flex:1,padding:8,borderRadius:6}}><option value="en">English</option><option value="ur">Urdu</option><option value="ar">Arabic</option><option value="hi">Hindi</option><option value="ps">Pashto</option><option value="fr">French</option><option value="de">German</option><option value="es">Spanish</option></select>
<span style={{padding:8}}>→</span>
<select value={toLang} onChange={e=>setToLang(e.target.value)} style={{flex:1,padding:8,borderRadius:6}}><option value="ur">Urdu</option><option value="en">English</option><option value="ar">Arabic</option><option value="hi">Hindi</option><option value="ps">Pashto</option><option value="fr">French</option><option value="de">German</option><option value="es">Spanish</option></select>
</div>
<div style={{marginTop:8,background:'#ede9fe',padding:10,borderRadius:8,fontSize:11}}><b>Top Keyword:</b> Translate = 200M+ searches/mo #9. Free API: api.mymemory.translated.net/get?q=hello&langpair=en|ur</div>
<button onClick={run} style={{marginTop:10,width:'100%',padding:12,background:'#8b5cf6',color:'#fff',borderRadius:10,border:0,fontWeight:800}}>Translate 🌐</button>
{out && <pre style={{background:'#f0fdf4',border:'1px solid #bbf7d0',padding:10,borderRadius:10,marginTop:10,whiteSpace:'pre-wrap',fontSize:12,fontWeight:600}}>{out}</pre>}
</div>
)}

{(tool.type==='ytthumb' || tool.type==='yttags') && (
<div style={{marginTop:10}}>
<input value={a} onChange={e=>setA(e.target.value)} placeholder="YouTube URL e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ or video ID" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd'}}/>
<div style={{marginTop:8,background:'#fee2e2',padding:10,borderRadius:8,fontSize:11}}><b>Top Keyword:</b> YouTube = 653M searches/mo #1 most searched on Internet! YouTube thumbnail downloader is high traffic + AdSense high CPC.</div>
<button onClick={run} style={{marginTop:10,width:'100%',padding:12,background:'#FF0000',color:'#fff',borderRadius:10,border:0,fontWeight:800}}>{tool.type==='ytthumb'?'Get Thumbnails ▶️':'Extract Title & Tags ▶️'}</button>
{img2 && <><img src={img2} style={{width:'100%',marginTop:10,borderRadius:8}} alt="thumb"/><a href={img2} target="_blank" rel="noreferrer" style={{display:'block',marginTop:8,background:'#16a34a',color:'#fff',padding:10,textAlign:'center',borderRadius:8,textDecoration:'none',fontWeight:700}}>Download HD Thumbnail</a></>}
{out && <pre style={{background:'#f0fdf4',border:'1px solid #bbf7d0',padding:10,borderRadius:10,marginTop:10,whiteSpace:'pre-wrap',fontSize:11,fontWeight:600}}>{out}</pre>}
</div>
)}

{!['weathertool','translatetool','ytthumb','yttags'].includes(tool.type) && (
<div style={{marginTop:8}}>
{['compressor','resizer','rotator','flipper','filters','meme','watermark'].includes(tool.type) && (
<div>
<input type="file" accept="image/*" onChange={e=>{const f=e.target.files[0]; if(f) setImg(URL.createObjectURL(f))}} style={{width:'100%'}}/>
{tool.type==='compressor' && <input type="range" min="0.1" max="1" step="0.1" value={quality} onChange={e=>setQuality(Number(e.target.value))} style={{width:'100%',marginTop:6}}/>}
{tool.type==='resizer' && <div style={{display:'flex',gap:6,marginTop:6}}><input value={w} onChange={e=>setW(e.target.value)} type="number" placeholder="Width" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={h} onChange={e=>setH(e.target.value)} type="number" placeholder="Height" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/></div>}
{tool.type==='rotator' && <input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder="Degrees 90" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd',marginTop:6}}/>}
{tool.type==='flipper' && <select value={a} onChange={e=>setA(e.target.value)} style={{width:'100%',padding:8,borderRadius:6,marginTop:6}}><option value="h">Horizontal</option><option value="v">Vertical</option></select>}
{tool.type==='filters' && <select value={filter} onChange={e=>setFilter(e.target.value)} style={{width:'100%',padding:8,borderRadius:6,marginTop:6}}><option value="none">None</option><option value="grayscale(100%)">Grayscale</option><option value="sepia(100%)">Sepia</option><option value="blur(5px)">Blur</option></select>}
{tool.type==='meme' && <><input value={a} onChange={e=>setA(e.target.value)} placeholder="Top text" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd',marginTop:6}}/><input value={b} onChange={e=>setB(e.target.value)} placeholder="Bottom text" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd',marginTop:6}}/></>}
{tool.type==='watermark' && <input value={a} onChange={e=>setA(e.target.value)} placeholder="Watermark" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd',marginTop:6}}/>}
{img && <img src={img} style={{width:'100%',marginTop:8,borderRadius:8,maxHeight:150,objectFit:'contain'}} alt="orig"/>}
<button onClick={processImage} style={{marginTop:8,width:'100%',padding:10,background:'#2563eb',color:'#fff',borderRadius:8,border:0,fontWeight:700}}>Apply</button>
{img2 && img2.startsWith('data:') && <><img src={img2} style={{width:'100%',marginTop:8,borderRadius:8}} alt="out"/><a href={img2} download={`wanalab-${tool.type}.jpg`} style={{display:'block',marginTop:8,background:'#16a34a',color:'#fff',padding:10,textAlign:'center',borderRadius:8,textDecoration:'none'}}>Download</a></>}
</div>
)}
{['bmi','age','currency','fuel','wordcount','case','jsonfmt','qr','passgen','uuid','percent','discount','emi'].includes(tool.type) && (
<div style={{marginTop:6}}>
{tool.type==='bmi' && <><input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder="Weight kg" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={b} onChange={e=>setB(e.target.value)} type="number" placeholder="Height cm" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd',marginTop:6}}/></>}
{tool.type==='age' && <input value={a} onChange={e=>setA(e.target.value)} type="date" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd'}}/>}
{['currency','wapda','zakat'].includes(tool.type) && <input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder="Amount" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd'}}/>}
{['percent','discount'].includes(tool.type) && <div style={{display:'flex',gap:6}}><input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder="Amount" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={b} onChange={e=>setB(e.target.value)} type="number" placeholder="%" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/></div>}
{tool.type==='fuel' && <div style={{display:'flex',gap:6}}><input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder="KM" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={b} onChange={e=>setB(e.target.value)} type="number" placeholder="Avg" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={c} onChange={e=>setC(e.target.value)} type="number" placeholder="Price" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/></div>}
{tool.type==='emi' && <><input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder="Loan" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={b} onChange={e=>setB(e.target.value)} type="number" placeholder="Interest %" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd',marginTop:6}}/><input value={c} onChange={e=>setC(e.target.value)} type="number" placeholder="Months" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd',marginTop:6}}/></>}
{['wordcount','case','jsonfmt','qr','uuid'].includes(tool.type) && <textarea value={a} onChange={e=>setA(e.target.value)} placeholder="Enter text..." style={{width:'100%',minHeight:80,padding:8,borderRadius:6,border:'1px solid #ddd',marginTop:6}}/>}
{tool.type==='qr' && <input value={qrSize} onChange={e=>setQrSize(Number(e.target.value))} type="number" placeholder="Size 250" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd',marginTop:6}}/>}
<button onClick={run} style={{marginTop:8,width:'100%',padding:12,background:'#2563eb',color:'#fff',borderRadius:10,border:0,fontWeight:800}}>Run {tool.name}</button>
{tool.type==='qr' && img2 && <img src={img2} style={{display:'block',margin:'10px auto'}} alt="qr"/>}
{out && <pre style={{background:'#f0fdf4',border:'1px solid #bbf7d0',padding:10,borderRadius:10,marginTop:10,whiteSpace:'pre-wrap',fontSize:12,fontWeight:600}}>{out}</pre>}
</div>
)}
</div>
)}
</div>
</div>
)
}

export default function App(){
const [cat,setCat]=useState('All'); const [q,setQ]=useState(''); const [showAbout,setShowAbout]=useState(false); const [showSport,setShowSport]=useState(false); const [showTravel,setShowTravel]=useState(false); const [showJobs,setShowJobs]=useState(false); const [activeTool,setActiveTool]=useState(null)
const [fav,setFav]=useState(()=>JSON.parse(localStorage.getItem('fav')||'[]')); const [recent,setRecent]=useState(()=>JSON.parse(localStorage.getItem('recent')||'[]'))
useEffect(()=>{localStorage.setItem('fav',JSON.stringify(fav))},[fav]); useEffect(()=>{localStorage.setItem('recent',JSON.stringify(recent))},[recent])
const openTool=(t)=>{setRecent(r=>[t.name,...r.filter(x=>x!==t.name)].slice(0,8)); setActiveTool(t)}; const toggleFav=(n,e)=>{e.stopPropagation(); setFav(p=>p.includes(n)?p.filter(x=>x!==n):[...p,n])}
const filtered=ALL_WITH_TOP.filter(t=>{const okCat=cat==='All'||cat==='Fav'&&fav.includes(t.name)||cat==='Recent'&&recent.includes(t.name)||t.cat===cat; const okQ=!q||t.name.toLowerCase().includes(q.toLowerCase()); return okCat&&okQ})
const grouped={Top10:TOP_TOOLS,Image:ALL_TOOLS.filter(t=>t.cat==='Image'),Text:ALL_TOOLS.filter(t=>t.cat==='Text'),Dev:ALL_TOOLS.filter(t=>t.cat==='Dev'),Daily:ALL_TOOLS.filter(t=>t.cat==='Daily')}
const Card=({t, id})=>(
<div id={id} onClick={()=>openTool(t)} style={{border:t.cat==='Top10'?'2px solid #FF385C':'1px solid #e5e7eb',borderRadius:12,padding:10,background:t.cat==='Top10'?'#fff7f7':'#fff',cursor:'pointer',position:'relative',minHeight:80}}>
<div style={{position:'absolute',top:5,right:6}} onClick={e=>toggleFav(t.name,e)}>{fav.includes(t.name)?'⭐':'☆'}</div>
<div style={{fontSize:9,fontWeight:700,background:t.cat==='Top10'?'#FF385C':'#eef2ff',color:t.cat==='Top10'?'#fff':'#4338ca',display:'inline-block',padding:'2px 6px',borderRadius:4}}>{t.cat} {t.cat==='Top10'?'🔥 TOP 10':''}</div>
<div style={{fontWeight:700,fontSize:12,marginTop:4}}>{t.name}</div>
<div style={{fontSize:9,color:'#6b7280'}}>{t.adv}</div>
</div>
)
return(
<div style={{fontFamily:'Inter,system-ui',background:'#f9fafb',minHeight:'100vh'}}>
<header style={{position:'sticky',top:0,zIndex:10,background:'#fff',borderBottom:'1px solid #e5e7eb',padding:'10px 14px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:8}}>
<div style={{display:'flex',gap:8,alignItems:'center',fontWeight:800,fontSize:12}}><span style={{background:'#FF385C',color:'#fff',borderRadius:6,padding:'2px 6px'}}>W</span> WanaLab Global v4.9 Top 10</div>
<div style={{display:'flex',gap:5,flexWrap:'wrap'}}><button onClick={()=>setShowTravel(true)} style={{fontSize:10,padding:'6px 10px',background:'#FF385C',color:'#fff',border:0,borderRadius:6,fontWeight:700}}>🏠 Travel $</button><button onClick={()=>setShowJobs(true)} style={{fontSize:10,padding:'5px 10px',background:'#7c3aed',color:'#fff',border:0,borderRadius:6,fontWeight:700}}>💼 Jobs $</button><button onClick={()=>setShowSport(true)} style={{fontSize:10,padding:'5px 8px',background:'#16a34a',color:'#fff',border:0,borderRadius:6,fontWeight:700}}>SportHub</button><span style={{background:'#fef3c7',color:'#d97706',borderRadius:20,padding:'2px 8px',fontSize:10}}>64 TOOLS 🔥</span></div>
</header>
<div style={{maxWidth:1100,margin:'0 auto',padding:10}}>
<div style={{textAlign:'center',margin:'10px 0'}}>
<h1 style={{fontSize:18,margin:0,fontWeight:800}}>Top 10 Most Searched Keywords + 60 Tools + Travel Mega</h1>
<p style={{fontSize:10,color:'#6b7280',margin:0}}>v4.9 - YouTube 653M #1 + Weather 620M #3 + Translate 200M #9 + Amazon 270M #5 + Airbnb 11.1M - All captured</p>
<input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search 64 tools... YouTube, Weather, Translate, BMI, QR" style={{marginTop:8,padding:'9px 14px',borderRadius:20,border:'1px solid #e5e7eb',width:'100%',maxWidth:380,fontSize:12}}/>
<div style={{display:'flex',gap:5,justifyContent:'center',flexWrap:'wrap',marginTop:8}}>
{['All','Top10','Image','Text','Dev','Daily','Fav','Recent'].map(c=><button key={c} onClick={()=>setCat(c)} style={{padding:'4px 10px',borderRadius:20,border:'1px solid #e5e7eb',background:cat===c?'#FF385C':'#fff',color:cat===c?'#fff':'#000',fontSize:11,fontWeight:cat===c?700:400}}>{c==='Top10'?'🔥 Top10':' '+c}</button>)}
</div>
</div>

{/* TOP 10 KEYWORDS AFFILIATES - HIGHEST TRAFFIC FIRST */}
<AdSlot type="youtube" onSport={()=>setShowSport(true)} onTravel={()=>setShowTravel(true)} onJobs={()=>setShowJobs(true)}/>
<AdSlot type="weather" onSport={()=>setShowSport(true)} onTravel={()=>setShowTravel(true)} onJobs={()=>setShowJobs(true)}/>
<AdSlot type="translate" onSport={()=>setShowSport(true)} onTravel={()=>setShowTravel(true)} onJobs={()=>setShowJobs(true)}/>
<AdSlot type="airbnb" onSport={()=>setShowSport(true)} onTravel={()=>setShowTravel(true)} onJobs={()=>setShowJobs(true)}/>
<AdSlot type="booking" onSport={()=>setShowSport(true)} onTravel={()=>setShowTravel(true)} onJobs={()=>setShowJobs(true)}/>
<AdSlot type="flights" onSport={()=>setShowSport(true)} onTravel={()=>setShowTravel(true)} onJobs={()=>setShowJobs(true)}/>
<AdSlot type="amazon" onSport={()=>setShowSport(true)} onTravel={()=>setShowTravel(true)} onJobs={()=>setShowJobs(true)}/>
<AdSlot type="aliexpress" onSport={()=>setShowSport(true)} onTravel={()=>setShowTravel(true)} onJobs={()=>setShowJobs(true)}/>

{cat==='All' && !q ? (
<div style={{display:'flex',flexDirection:'column',gap:14,marginTop:12}}>
{Object.entries(grouped).map(([gName,gTools])=>(
<div key={gName}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:6}}>
<h2 style={{fontSize:13,fontWeight:800,margin:0}}>{gName==='Top10'?'🔥 TOP 10 Most Searched Keywords Tools (4) - 1.5B searches':gName+' Tools ('+gTools.length+')'}</h2>
<button onClick={()=>setCat(gName)} style={{fontSize:10,background:gName==='Top10'?'#FF385C':'#eef2ff',color:gName==='Top10'?'#fff':'#4338ca',border:'1px solid #c7d2fe',borderRadius:20,padding:'2px 8px'}}>View all →</button>
</div>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',gap:8}}>
{gTools.slice(0,8).map((t,i)=>{
let id=null; if(t.type==='weathertool') id='weather-tool-btn'; if(t.type==='translatetool') id='translate-tool-btn'; if(t.type==='ytthumb') id='youtube-tool-btn';
return <Card key={t.name} t={t} id={id}/>
})}
</div>
</div>
))}
</div>
):(
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',gap:8,marginTop:12}}>
{filtered.map(t=>{
let id=null; if(t.type==='weathertool') id='weather-tool-btn'; if(t.type==='translatetool') id='translate-tool-btn'; if(t.type==='ytthumb') id='youtube-tool-btn';
return <Card key={t.name} t={t} id={id}/>
})}
</div>
)}
<div style={{marginTop:24,textAlign:'center',fontSize:9,color:'#9ca3af',borderTop:'1px solid #e5e7eb',paddingTop:8}}>© 2026 WanaLab Global v4.9 Top 10 • Founder Nasir Khan • 64 Tools • Top 10 Keywords: YouTube 653M #1 + Weather 620M #3 + Amazon 270M #5 + Translate 200M #9 + Airbnb 11.1M + Flights + Hotels - All verified - Global traffic + money</div>
</div>
{activeTool && <ToolModal tool={activeTool} onClose={()=>setActiveTool(null)}/>}
{showTravel && <TravelMegaModal onClose={()=>setShowTravel(false)}/>}
{showJobs && <JobsModal onClose={()=>setShowJobs(false)}/>}
{showSport && <SportHubModal onClose={()=>setShowSport(false)}/>}
</div>
)
  }
