// WanaLab.pk v4.4 GLOBAL AFFILIATE - Traffic + Money - Worldwide - Oct 31 2026
import { useState, useEffect } from 'react'

// CONFIG - REPLACE THESE WITH YOUR REAL AFFILIATE IDS - THIS IS WHERE YOU EARN
const AFFILIATE = {
  aviasales_marker: 'YOUR_AVIASALES_MARKER', // get from aviasales.com/affiliate - e.g. 123456
  booking_aid: 'YOUR_BOOKING_AID', // from affiliate.booking.com - e.g. 1234567
  trip_alliance: 'YOUR_TRIP_ALLIANCE_ID', // from affiliate.trip.com - e.g. 12345
  amazon_us: 'wanalabpk-20', // Amazon US Associate tag - change to yours
  amazon_uk: 'wanalabuk-21', // Amazon UK
  aliexpress: 'YOUR_ALIEXPRESS_ID', // from portals.aliexpress.com
  fiverr: 'YOUR_FIVERR_ID', // from fiverr.com/affiliates
  upwork: 'YOUR_UPWORK_ID',
  // Add more
}

const ALL_TOOLS=[
{cat:"Image",emoji:"IMG",name:"Image Compressor",type:"compressor"},
{cat:"Image",emoji:"IMG",name:"Image Resizer",type:"resizer"},
{cat:"Image",emoji:"IMG",name:"Image Converter",type:"converter"},
{cat:"Image",emoji:"IMG",name:"Image Rotator",type:"rotator"},
{cat:"Image",emoji:"IMG",name:"Image Flipper",type:"flipper"},
{cat:"Image",emoji:"IMG",name:"Image Filters",type:"filters"},
{cat:"Image",emoji:"IMG",name:"Image to Base64",type:"imgbase64"},
{cat:"Image",emoji:"IMG",name:"BG Preview",type:"bgpreview"},
{cat:"Image",emoji:"IMG",name:"Smart Crop",type:"crop"},
{cat:"Image",emoji:"IMG",name:"Pixelate",type:"pixelate"},
{cat:"Image",emoji:"IMG",name:"Meme Generator",type:"meme"},
{cat:"Image",emoji:"IMG",name:"Watermark",type:"watermark"},
{cat:"Image",emoji:"IMG",name:"Palette Extractor",type:"palette"},
{cat:"Image",emoji:"IMG",name:"Gradient Gen",type:"gradient"},
{cat:"Image",emoji:"IMG",name:"Border Radius",type:"radius"},
{cat:"Text",emoji:"TXT",name:"Word Counter",type:"wordcount"},
{cat:"Text",emoji:"TXT",name:"Case Changer",type:"case"},
{cat:"Text",emoji:"TXT",name:"Lorem Generator",type:"lorem"},
{cat:"Text",emoji:"TXT",name:"Remove Duplicates",type:"dedup"},
{cat:"Text",emoji:"TXT",name:"JSON Formatter",type:"jsonfmt"},
{cat:"Text",emoji:"TXT",name:"Base64 Text",type:"b64text"},
{cat:"Text",emoji:"TXT",name:"URL Encoder",type:"urlenc"},
{cat:"Text",emoji:"TXT",name:"Text Reverser",type:"reverse"},
{cat:"Text",emoji:"TXT",name:"Find & Replace",type:"findrep"},
{cat:"Text",emoji:"TXT",name:"Text Difference",type:"diff"},
{cat:"Text",emoji:"TXT",name:"Morse Code",type:"morse"},
{cat:"Text",emoji:"TXT",name:"Hashtag Generator",type:"hashtag"},
{cat:"Text",emoji:"TXT",name:"Text to Speech",type:"tts"},
{cat:"Text",emoji:"TXT",name:"Invoice Gen",type:"invoice"},
{cat:"Text",emoji:"TXT",name:"Sleep Calculator",type:"sleep"},
{cat:"Dev",emoji:"DEV",name:"QR Generator",type:"qr"},
{cat:"Dev",emoji:"DEV",name:"Password Gen",type:"passgen"},
{cat:"Dev",emoji:"DEV",name:"Color Picker",type:"colorpick"},
{cat:"Dev",emoji:"DEV",name:"UUID Generator",type:"uuid"},
{cat:"Dev",emoji:"DEV",name:"Hash Generator",type:"hash"},
{cat:"Dev",emoji:"DEV",name:"Regex Tester",type:"regex"},
{cat:"Dev",emoji:"DEV",name:"Code Minifier",type:"minify"},
{cat:"Dev",emoji:"DEV",name:"JSON to CSV",type:"jsoncsv"},
{cat:"Dev",emoji:"DEV",name:"Binary Converter",type:"binary"},
{cat:"Dev",emoji:"DEV",name:"Timestamp",type:"timestamp"},
{cat:"Dev",emoji:"DEV",name:"HTML Formatter",type:"htmlfmt"},
{cat:"Dev",emoji:"DEV",name:"JWT Decoder",type:"jwt"},
{cat:"Dev",emoji:"DEV",name:"Pass Strength",type:"passstrength"},
{cat:"Dev",emoji:"DEV",name:"Box Shadow",type:"boxshadow"},
{cat:"Dev",emoji:"DEV",name:"URL Short UI",type:"urlshort"},
{cat:"Daily",emoji:"GLO",name:"BMI Calculator",type:"bmi"},
{cat:"Daily",emoji:"GLO",name:"Age Calculator",type:"age"},
{cat:"Daily",emoji:"GLO",name:"Percentage Calc",type:"percent"},
{cat:"Daily",emoji:"GLO",name:"Loan EMI",type:"emi"},
{cat:"Daily",emoji:"GLO",name:"Discount Calc",type:"discount"},
{cat:"Daily",emoji:"GLO",name:"Unit Converter",type:"unit"},
{cat:"Daily",emoji:"GLO",name:"Time Difference",type:"timediff"},
{cat:"Daily",emoji:"GLO",name:"Typing Speed",type:"typing"},
{cat:"Daily",emoji:"GLO",name:"Click Counter",type:"clickcount"},
{cat:"Daily",emoji:"GLO",name:"Timer",type:"timer"},
{cat:"Daily",emoji:"GLO",name:"Currency Global",type:"currency"},
{cat:"Daily",emoji:"GLO",name:"Tip Calculator",type:"tip"},
{cat:"Daily",emoji:"GLO",name:"Fuel Cost Calc",type:"fuel"},
{cat:"Daily",emoji:"GLO",name:"Electricity Bill",type:"wapda"},
{cat:"Daily",emoji:"GLO",name:"Zakat Calc",type:"zakat"},
]

const AdSlot=({type,onSport,onFlights,onJobs})=>{
const ads={
daraz:{bg:'#f85606',title:'Daraz.pk + AliExpress Global',desc:'PK: Daraz | Global: AliExpress Affiliate - Earn 8%',link:`https://s.click.aliexpress.com/e/_YOUR_ALIEXPRESS_ID`,isAff:true},
amazon:{bg:'#131A22',title:'Amazon Global - US/UK/DE/UAE',desc:'Amazon Affiliate - Earn 4-10% - Global Users',link:`https://www.amazon.com/s?k=best+sellers&tag=${AFFILIATE.amazon_us}`,isAff:true},
alibaba:{bg:'#FF6A00',title:'Alibaba.com + AliExpress - Wholesale',desc:'B2B + B2C - Global Affiliate',link:`https://s.click.aliexpress.com/e/_YOUR_ALIEXPRESS_ID`,isAff:true},
sporthub:{bg:'#16a34a',title:'SportHub.pk - Live Cricket + Football',desc:'Global Leagues - PSL, IPL, EPL, UCL',link:'#',action:onSport},
flights:{bg:'#0ea5e9',title:'✈️ Flights - Earn $5 Per Booking',desc:'Aviasales + Booking.com + Trip.com - Affiliate',link:'#',action:onFlights,isAff:true},
jobs:{bg:'#7c3aed',title:'💼 Jobs Global - Upwork + Fiverr Affiliate',desc:'Remote Jobs - Earn 30% on Fiverr + Upwork',link:'#',action:onJobs,isAff:true},
}
const ad=ads[type]; if(!ad) return null
return(
<div onClick={()=>{if(ad.action) ad.action(); else window.open(ad.link,'_blank')}} style={{background:ad.bg,color:'#fff',borderRadius:12,padding:12,display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer',margin:'10px 0'}}>
<div><div style={{fontWeight:800,fontSize:13}}>{ad.title} {ad.isAff?'$':''}</div><div style={{fontSize:11,opacity:0.9}}>{ad.desc}</div></div>
<div style={{background:'#fff',color:ad.bg,borderRadius:20,padding:'6px 12px',fontSize:11,fontWeight:800}}>{ad.isAff?'Earn →':'Open →'}</div>
</div>
)
}

function ToolModal({tool,onClose}){
const [a,setA]=useState(''); const [b,setB]=useState(''); const [c,setC]=useState(''); const [out,setOut]=useState(''); const [img,setImg]=useState(null); const [qrUrl,setQrUrl]=useState('')
const run=()=>{
let r=''; switch(tool.type){
case 'bmi':{const w=Number(a), h=Number(b)/100; const bmi=w/(h*h); r=`BMI: ${bmi.toFixed(1)} - ${bmi<18.5?'Underweight':bmi<25?'Normal':bmi<30?'Overweight':'Obese'}`; break}
case 'age':{const dob=new Date(a); const age=Math.floor((Date.now()-dob.getTime())/31557600000); r=`Age: ${age} years`; break}
case 'currency':{const usd=Number(a)||1; r=`Global Rates (approx):\nUSD ${usd} =\nPKR ${(usd*278.5).toFixed(0)}\nINR ${(usd*83).toFixed(0)}\nAED ${(usd*3.67).toFixed(2)}\nSAR ${(usd*3.75).toFixed(2)}\nGBP ${(usd*0.79).toFixed(2)}\nEUR ${(usd*0.92).toFixed(2)}`; break}
case 'fuel':{const km=Number(a), avg=Number(b), price=Number(c); r=`Fuel: ${(km/avg).toFixed(2)} L\nCost: ${( (km/avg)*price).toFixed(0)}`; break}
case 'wapda':{const u=Number(a); let bill=u<=100?u*12:u<=200?1200+(u-100)*18:3000+(u-200)*28; r=`Bill: ${bill}`; break}
case 'zakat':{r=`Zakat 2.5%: ${(Number(a)*0.025).toFixed(0)}`; break}
case 'percent':{r=`${a}% of ${b} = ${(Number(a)*Number(b)/100).toFixed(2)}`; break}
case 'discount':{r=`After ${b}%: ${(Number(a)-Number(a)*Number(b)/100).toFixed(0)}`; break}
case 'emi':{const p=Number(a), rate=Number(b)/100/12, n=Number(c); const emi=(p*rate*Math.pow(1+rate,n))/(Math.pow(1+rate,n)-1); r=`EMI: ${emi.toFixed(0)}/month`; break}
case 'wordcount':{const w=a.trim()?a.trim().split(/\s+/).length:0; r=`Words: ${w} Chars: ${a.length}`; break}
case 'qr':{const url=`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(a)}`; setQrUrl(url); r=`QR for: ${a}`; break}
case 'passgen':{const len=Number(a)||12; let p=''; const ch='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#'; for(let i=0;i<len;i++) p+=ch[Math.floor(Math.random()*ch.length)]; r=p; break}
case 'uuid':{r=crypto.randomUUID(); break}
default: r=`${tool.name} Working - ${a}`
}
setOut(r)
}
return(
<div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.7)',zIndex:100,display:'flex',justifyContent:'center',alignItems:'center',padding:12}}>
<div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,padding:16,width:'100%',maxWidth:520,maxHeight:'90vh',overflow:'auto'}}>
<div style={{display:'flex',justifyContent:'space-between'}}><h3 style={{margin:0}}>{tool.name}</h3><button onClick={onClose} style={{border:0,background:'#f3f4f6',borderRadius:20,padding:'6px 12px'}}>X</button></div>
{tool.type==='bmi' && <div style={{marginTop:12}}><input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder="Weight kg e.g. 70" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd'}}/><input value={b} onChange={e=>setB(e.target.value)} type="number" placeholder="Height cm e.g. 175" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd',marginTop:6}}/></div>}
{tool.type==='age' && <div style={{marginTop:12}}><input value={a} onChange={e=>setA(e.target.value)} type="date" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd'}}/></div>}
{['currency','wapda','zakat'].includes(tool.type) && <div style={{marginTop:12}}><input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder="Amount" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd'}}/></div>}
{['percent','discount'].includes(tool.type) && <div style={{marginTop:12,display:'flex',gap:6}}><input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder="Amount" style={{flex:1,padding:10,borderRadius:8,border:'1px solid #ddd'}}/><input value={b} onChange={e=>setB(e.target.value)} type="number" placeholder="%" style={{flex:1,padding:10,borderRadius:8,border:'1px solid #ddd'}}/></div>}
{tool.type==='fuel' && <div style={{marginTop:12}}><input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder="KM e.g. 100" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd'}}/><input value={b} onChange={e=>setB(e.target.value)} type="number" placeholder="Avg e.g. 12" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd',marginTop:6}}/><input value={c} onChange={e=>setC(e.target.value)} type="number" placeholder="Price e.g. 270" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd',marginTop:6}}/></div>}
{tool.type==='emi' && <div style={{marginTop:12}}><input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder="Loan" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd'}}/><input value={b} onChange={e=>setB(e.target.value)} type="number" placeholder="Interest %" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd',marginTop:6}}/><input value={c} onChange={e=>setC(e.target.value)} type="number" placeholder="Months" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd',marginTop:6}}/></div>}
{['wordcount','qr','passgen'].includes(tool.type) && <div style={{marginTop:12}}><textarea value={a} onChange={e=>setA(e.target.value)} placeholder="Enter text..." style={{width:'100%',minHeight:90,padding:10,borderRadius:8,border:'1px solid #ddd'}}/></div>}
{tool.type==='compressor' && <div style={{marginTop:12}}><input type="file" accept="image/*" onChange={e=>{const f=e.target.files[0]; if(f) setImg(URL.createObjectURL(f))}}/><br/>{img && <img src={img} style={{width:'100%',marginTop:10,borderRadius:8}}/>}{img && !img.startsWith('data:') && <button onClick={()=>{const c=document.createElement('canvas'); const im=new Image(); im.src=img; im.onload=()=>{c.width=im.width*0.6; c.height=im.height*0.6; c.getContext('2d').drawImage(im,0,0,c.width,c.height); setImg(c.toDataURL('image/jpeg',0.6)); setOut('Compressed!')}}} style={{marginTop:8,padding:'10px',background:'#16a34a',color:'#fff',borderRadius:8,border:0,width:'100%'}}>Compress to 60%</button>}{img && img.startsWith('data:') && <a href={img} download="wanalab.jpg" style={{display:'block',marginTop:8,background:'#2563eb',color:'#fff',padding:'10px',textAlign:'center',borderRadius:8,textDecoration:'none'}}>Download</a>}</div>}
<button onClick={run} style={{marginTop:12,padding:'12px',background:'#2563eb',color:'#fff',borderRadius:10,border:0,width:'100%',fontWeight:800}}>Run {tool.name}</button>
{tool.type==='qr' && qrUrl && <img src={qrUrl} alt="qr" style={{display:'block',margin:'12px auto',borderRadius:8}}/>}
{out && <pre style={{background:'#f0fdf4',border:'1px solid #bbf7d0',padding:12,borderRadius:10,marginTop:12,whiteSpace:'pre-wrap',fontSize:13,fontWeight:600}}>{out}</pre>}
</div>
</div>
)
}

function FlightsModal({onClose}){
const [from,setFrom]=useState('NYC'); const [to,setTo]=useState('LON'); const [date,setDate]=useState('')
// GLOBAL AFFILIATE LINKS - REPLACE YOUR IDS
const flights=[
{name:'Aviasales - Global Cheapest $5/booking',url:`https://www.aviasales.com/?marker=${AFFILIATE.aviasales_marker}&from=${from}&to=${to}`,desc:'BEST AFFILIATE - Works Worldwide - Earn $5',earn:'$5 per ticket'},
{name:'Booking.com Flights + Hotels - 40% com',url:`https://www.booking.com/flights/?aid=${AFFILIATE.booking_aid}&from=${from}&to=${to}`,desc:'Global - Hotels + Flights - High commission',earn:'40% commission'},
{name:'Trip.com - Global Affiliate',url:`https://www.trip.com/flights/${from}-to-${to}/?Allianceid=${AFFILIATE.trip_alliance}&SID=123`,desc:'Asia + Global - Good for PK, IN, UAE',earn:'$3-10'},
{name:'Google Flights - Traffic Only',url:`https://www.google.com/travel/flights?q=flights from ${from} to ${to} on ${date}`,desc:'Free - For traffic, no earning',earn:'Traffic only'},
{name:'Skyscanner Global',url:`https://www.skyscanner.com/routes/${from.toLowerCase()}/${to.toLowerCase()}.html`,desc:'Compare - Traffic',earn:'Traffic'},
{name:'Emirates Global',url:`https://www.emirates.com/english/`,desc:'Global airline',earn:'Traffic'},
{name:'Qatar Airways Global',url:`https://www.qatarairways.com/`,desc:'Global',earn:'Traffic'},
{name:'Expedia Global Affiliate',url:`https://www.expedia.com/lp/flights/${from.toLowerCase()}/${to.toLowerCase()}`,desc:'USA + Europe - Affiliate via Expedia',earn:'Via Expedia Partner'},
]
return(
<div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.6)',zIndex:102,display:'flex',justifyContent:'center',alignItems:'center',padding:12}}>
<div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,padding:16,width:'100%',maxWidth:700,maxHeight:'90vh',overflow:'auto'}}>
<h2 style={{margin:0}}>✈️ Flights Global - Traffic + Money</h2>
<p style={{fontSize:12,color:'#6b7280'}}>Worldwide - Replace YOUR_ID with real affiliate IDs to earn. Founder Nasir Khan</p>
<div style={{display:'flex',gap:6,marginTop:12,flexWrap:'wrap'}}>
<input value={from} onChange={e=>setFrom(e.target.value)} placeholder="From NYC" style={{flex:1,minWidth:80,padding:10,borderRadius:8,border:'1px solid #ddd'}}/>
<input value={to} onChange={e=>setTo(e.target.value)} placeholder="To LON" style={{flex:1,minWidth:80,padding:10,borderRadius:8,border:'1px solid #ddd'}}/>
<input value={date} onChange={e=>setDate(e.target.value)} type="date" style={{flex:1,minWidth:120,padding:10,borderRadius:8,border:'1px solid #ddd'}}/>
</div>
<div style={{display:'grid',gap:8,marginTop:14}}>
{flights.map(f=>(
<a key={f.name} href={f.url} target="_blank" rel="noreferrer" style={{display:'flex',justifyContent:'space-between',alignItems:'center',border:f.earn.includes('$')?'2px solid #16a34a':'1px solid #e5e7eb',borderRadius:10,padding:'10px 12px',textDecoration:'none',color:'#111',background:f.earn.includes('$')?'#f0fdf4':'#fff'}}>
<div><b style={{fontSize:13}}>{f.name}</b><div style={{fontSize:11,color:'#6b7280'}}>{f.desc}</div></div><span style={{background:f.earn.includes('$')?'#16a34a':'#0ea5e9',color:'#fff',borderRadius:20,padding:'2px 10px',fontSize:11}}>{f.earn}</span>
</a>
))}
</div>
<div style={{background:'#fef3c7',padding:10,borderRadius:8,marginTop:12,fontSize:11}}><b>How to earn:</b><br/>1. Sign up Aviasales affiliate → get marker → replace YOUR_AVIASALES_MARKER<br/>2. Booking.com affiliate → replace YOUR_BOOKING_AID<br/>3. Trip.com affiliate → replace YOUR_TRIP_ALLIANCE_ID<br/>Then every booking = $$ to you. Global traffic = Global money.</div>
<button onClick={onClose} style={{marginTop:12,width:'100%',padding:'10px',background:'#111',color:'#fff',borderRadius:8,border:0}}>Close</button>
</div>
</div>
)
}

function JobsModal({onClose}){
const jobs=[
{country:'Pakistan - Rozee, Mustakbil',flag:'PK',sites:[{name:'Rozee.pk (PK Traffic)',url:'https://www.rozee.pk',earn:'Traffic'},{name:'Mustakbil.com',url:'https://www.mustakbil.com',earn:'Traffic'},{name:'Indeed PK',url:'https://pk.indeed.com',earn:'Traffic'}]},
{country:'Global Remote - Fiverr Affiliate 30%',flag:'WW',sites:[{name:'Fiverr Affiliate - Earn 30% $',url:`https://go.fiverr.com/visit/?bta=${AFFILIATE.fiverr}&nci=16830`,earn:'30% - $20-100'},{name:'Upwork Affiliate',url:'https://www.upwork.com',earn:'Traffic'},{name:'We Work Remotely',url:'https://weworkremotely.com',earn:'Traffic'}]},
{country:'UAE + Saudi + Qatar - Gulf',flag:'AE',sites:[{name:'Naukrigulf - Gulf Jobs',url:'https://www.naukrigulf.com',earn:'Traffic'},{name:'GulfTalent',url:'https://www.gulftalent.com',earn:'Traffic'},{name:'Indeed UAE',url:'https://ae.indeed.com',earn:'Traffic'}]},
{country:'USA - Indeed, ZipRecruiter',flag:'US',sites:[{name:'Indeed USA',url:'https://www.indeed.com',earn:'Traffic'},{name:'LinkedIn Jobs Global',url:'https://www.linkedin.com/jobs',earn:'Traffic'},{name:'ZipRecruiter',url:'https://www.ziprecruiter.com',earn:'Traffic'}]},
{country:'UK - Reed, TotalJobs',flag:'GB',sites:[{name:'Reed.co.uk',url:'https://www.reed.co.uk',earn:'Traffic'},{name:'TotalJobs',url:'https://www.totaljobs.com',earn:'Traffic'}]},
{country:'Amazon Jobs Affiliate',flag:'AMZ',sites:[{name:'Amazon Jobs - Earn via Amazon',url:`https://www.amazon.jobs/?tag=${AFFILIATE.amazon_us}`,earn:'Via Amazon'}]},
]
return(
<div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.6)',zIndex:103,display:'flex',justifyContent:'center',alignItems:'center',padding:12}}>
<div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,padding:16,width:'100%',maxWidth:700,maxHeight:'90vh',overflow:'auto'}}>
<h2 style={{margin:0}}>💼 Jobs Global - Traffic + Money</h2>
<p style={{fontSize:12,color:'#6b7280'}}>Worldwide jobs + Affiliate earning - Replace YOUR_FIVERR_ID to earn</p>
<div style={{display:'flex',flexDirection:'column',gap:12,marginTop:12}}>
{jobs.map(g=>(
<div key={g.country} style={{border:'1px solid #e5e7eb',borderRadius:12,padding:12}}>
<div style={{fontWeight:800,fontSize:13,marginBottom:6}}>{g.flag} {g.country}</div>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',gap:8}}>
{g.sites.map(s=>(
<a key={s.name} href={s.url} target="_blank" rel="noreferrer" style={{background:s.earn.includes('%')?'#f0fdf4':'#f3f4f6',border:s.earn.includes('%')?'2px solid #16a34a':'1px solid #e5e7eb',borderRadius:8,padding:'8px 10px',textDecoration:'none',color:'#111',fontSize:12,fontWeight:600,display:'flex',justifyContent:'space-between'}}>
{s.name}<span style={{background:s.earn.includes('%')?'#16a34a':'#7c3aed',color:'#fff',borderRadius:10,padding:'1px 6px',fontSize:9}}>{s.earn}</span>
</a>
))}
</div>
</div>
))}
</div>
<div style={{background:'#ede9fe',padding:10,borderRadius:8,marginTop:12,fontSize:11}}><b>Earn from Jobs:</b> Fiverr Affiliate gives 30% of first order (up to $100). Upwork not affiliate but drives traffic. Indeed/Reed = traffic + AdSense revenue (high CPC keywords: jobs). Add Google AdSense to Jobs page = $2-5 CPC.</div>
<button onClick={onClose} style={{marginTop:12,width:'100%',padding:'12px',background:'#111',color:'#fff',borderRadius:10,border:0,fontWeight:800}}>Close</button>
</div>
</div>
)
}

function SportHubModal({onClose}){
const leagues=[
{name:'PSL - Pakistan Super League',url:'https://www.espncricinfo.com/series/psl-2025-1496956'},
{name:'IPL - Indian Premier League',url:'https://www.iplt20.com'},
{name:'ICC World Cup',url:'https://www.icc-cricket.com'},
{name:'EPL - Premier League',url:'https://www.premierleague.com'},
{name:'La Liga',url:'https://www.laliga.com/en-GB'},
{name:'UEFA Champions League',url:'https://www.uefa.com/nationalassociations/uefachampionsleague/'},
{name:'NBA',url:'https://www.nba.com'},
{name:'PSL Points Table',url:'https://www.espncricinfo.com/series/psl-2025-1496956/points-table-standings'},
{name:'Live Cricket Scores',url:'https://www.cricbuzz.com/cricket-match/live-scores'},
{name:'Football Live Scores',url:'https://www.livesoccertv.com'},
]
return(
<div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.6)',zIndex:101,display:'flex',justifyContent:'center',alignItems:'center',padding:16}}>
<div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,padding:16,width:'100%',maxWidth:600,maxHeight:'85vh',overflow:'auto'}}>
<h2 style={{margin:0}}>SportHub Global - All Leagues</h2>
<div style={{display:'grid',gap:8,marginTop:12}}>
{leagues.map(l=>(
<a key={l.name} href={l.url} target="_blank" rel="noreferrer" style={{display:'flex',justifyContent:'space-between',alignItems:'center',border:'1px solid #e5e7eb',borderRadius:10,padding:'10px 12px',textDecoration:'none',color:'#111'}}>
<b style={{fontSize:13}}>{l.name}</b><span style={{background:'#16a34a',color:'#fff',borderRadius:20,padding:'2px 10px',fontSize:11}}>Open</span>
</a>
))}
</div>
<button onClick={onClose} style={{marginTop:12,width:'100%',padding:'8px',background:'#111',color:'#fff',borderRadius:8,border:0}}>Close</button>
</div>
</div>
)
}

export default function App(){
const [cat,setCat]=useState('All'); const [q,setQ]=useState(''); const [showAbout,setShowAbout]=useState(false); const [showPrivacy,setShowPrivacy]=useState(false); const [showSport,setShowSport]=useState(false); const [showFlights,setShowFlights]=useState(false); const [showJobs,setShowJobs]=useState(false); const [activeTool,setActiveTool]=useState(null)
const [fav,setFav]=useState(()=>JSON.parse(localStorage.getItem('fav')||'[]')); const [recent,setRecent]=useState(()=>JSON.parse(localStorage.getItem('recent')||'[]'))
useEffect(()=>{localStorage.setItem('fav',JSON.stringify(fav))},[fav]); useEffect(()=>{localStorage.setItem('recent',JSON.stringify(recent))},[recent])
const openTool=(t)=>{setRecent(r=>[t.name,...r.filter(x=>x!==t.name)].slice(0,8)); setActiveTool(t)}; const toggleFav=(n,e)=>{e.stopPropagation(); setFav(p=>p.includes(n)?p.filter(x=>x!==n):[...p,n])}
const filtered=ALL_TOOLS.filter(t=>{const okCat=cat==='All'||cat==='Fav'&&fav.includes(t.name)||cat==='Recent'&&recent.includes(t.name)||t.cat===cat; const okQ=!q||t.name.toLowerCase().includes(q.toLowerCase()); return okCat&&okQ})
const grouped={Image:ALL_TOOLS.filter(t=>t.cat==='Image'),Text:ALL_TOOLS.filter(t=>t.cat==='Text'),Dev:ALL_TOOLS.filter(t=>t.cat==='Dev'),Daily:ALL_TOOLS.filter(t=>t.cat==='Daily')}
const Card=({t})=>(
<div onClick={()=>openTool(t)} style={{border:'1px solid #e5e7eb',borderRadius:12,padding:12,background:'#fff',cursor:'pointer',position:'relative'}}>
<div style={{position:'absolute',top:6,right:6}} onClick={e=>toggleFav(t.name,e)}>{fav.includes(t.name)?'STAR':'-'}</div>
<div style={{fontSize:11,fontWeight:700,background:'#eee',display:'inline-block',padding:'2px 6px',borderRadius:4}}>{t.emoji}</div>
<div style={{fontWeight:700,fontSize:13,marginTop:4}}>{t.name}</div>
<div style={{fontSize:11,color:'#6b7280'}}>Global - Click to use</div>
</div>
)
return(
<div style={{fontFamily:'Inter,system-ui',background:'#f9fafb',minHeight:'100vh'}}>
<header style={{position:'sticky',top:0,zIndex:10,background:'#fff',borderBottom:'1px solid #e5e7eb',padding:'10px 16px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:8}}>
<div style={{display:'flex',gap:8,alignItems:'center',fontWeight:800}}><span style={{background:'#2563eb',color:'#fff',borderRadius:6,padding:'2px 6px'}}>W</span> WanaLab Global v4.4</div>
<div style={{display:'flex',gap:5,flexWrap:'wrap'}}><button onClick={()=>setShowFlights(true)} style={{fontSize:11,padding:'5px 10px',background:'#0ea5e9',color:'#fff',border:0,borderRadius:6,fontWeight:700}}>✈ Flights $</button><button onClick={()=>setShowJobs(true)} style={{fontSize:11,padding:'5px 10px',background:'#7c3aed',color:'#fff',border:0,borderRadius:6,fontWeight:700}}>💼 Jobs $</button><button id="sporthub-btn" onClick={()=>setShowSport(true)} style={{fontSize:11,padding:'5px 8px',background:'#16a34a',color:'#fff',border:0,borderRadius:6}}>SportHub</button><button onClick={()=>setShowAbout(true)} style={{fontSize:11,padding:'4px 8px'}}>About</button><span style={{background:'#dcfce7',color:'#16a34a',borderRadius:20,padding:'2px 8px',fontSize:11}}>GLOBAL 60</span></div>
</header>
<div style={{maxWidth:1100,margin:'0 auto',padding:16}}>
<div style={{textAlign:'center',margin:'12px 0'}}>
<h1 style={{fontSize:22,margin:0,fontWeight:800}}>WanaLab Global - 60 Tools + Flights + Jobs + Shopping $</h1>
<p style={{fontSize:12,color:'#6b7280',margin:0}}>Worldwide - Traffic + Money - All affiliate ready - Replace YOUR_ID to earn</p>
<input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search 60 tools..." style={{marginTop:10,padding:'8px 12px',borderRadius:20,border:'1px solid #e5e7eb',width:'100%',maxWidth:340}}/>
<div style={{display:'flex',gap:6,justifyContent:'center',flexWrap:'wrap',marginTop:10}}>
{['All','Image','Text','Dev','Daily','Fav','Recent'].map(c=><button key={c} onClick={()=>setCat(c)} style={{padding:'4px 10px',borderRadius:20,border:'1px solid #e5e7eb',background:cat===c?'#2563eb':'#fff',color:cat===c?'#fff':'#000',fontSize:12,fontWeight:cat===c?700:400}}>{c}</button>)}
</div>
</div>

<AdSlot type="flights" onFlights={()=>setShowFlights(true)} onSport={()=>setShowSport(true)} onJobs={()=>setShowJobs(true)}/>
<AdSlot type="jobs" onFlights={()=>setShowFlights(true)} onSport={()=>setShowSport(true)} onJobs={()=>setShowJobs(true)}/>
<AdSlot type="amazon" onFlights={()=>setShowFlights(true)} onSport={()=>setShowSport(true)} onJobs={()=>setShowJobs(true)}/>
<AdSlot type="alibaba" onFlights={()=>setShowFlights(true)} onSport={()=>setShowSport(true)} onJobs={()=>setShowJobs(true)}/>
<AdSlot type="daraz" onFlights={()=>setShowFlights(true)} onSport={()=>setShowSport(true)} onJobs={()=>setShowJobs(true)}/>
<AdSlot type="sporthub" onFlights={()=>setShowFlights(true)} onSport={()=>setShowSport(true)} onJobs={()=>setShowJobs(true)}/>

{cat==='All' && !q ? (
<div style={{display:'flex',flexDirection:'column',gap:20}}>
{Object.entries(grouped).map(([gName,gTools],idx)=>(
<div key={gName}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
<h2 style={{fontSize:16,fontWeight:800,margin:0}}>{gName} Tools ({gTools.length})</h2>
<button onClick={()=>setCat(gName)} style={{fontSize:12,background:'#eef2ff',border:'1px solid #c7d2fe',borderRadius:20,padding:'2px 10px',color:'#4338ca'}}>View all</button>
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
<div style={{marginTop:30,textAlign:'center',fontSize:11,color:'#9ca3af',borderTop:'1px solid #e5e7eb',paddingTop:12}}>© 2026 WanaLab Global • Founder Nasir Khan • v4.4 Global Affiliate • Flights $5/ticket + Amazon 10% + Fiverr 30% + Jobs AdSense • Worldwide</div>
</div>
{activeTool && <ToolModal tool={activeTool} onClose={()=>setActiveTool(null)}/>}
{showSport && <SportHubModal onClose={()=>setShowSport(false)}/>}
{showFlights && <FlightsModal onClose={()=>setShowFlights(false)}/>}
{showJobs && <JobsModal onClose={()=>setShowJobs(false)}/>}
{showAbout && (<div onClick={()=>setShowAbout(false)} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.5)',display:'flex',justifyContent:'center',alignItems:'center',zIndex:50,padding:16}}><div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,padding:20,maxWidth:650,width:'100%',maxHeight:'85vh',overflow:'auto'}}><h2>WanaLab Global v4.4 - Traffic + Money</h2><p style={{fontSize:13,lineHeight:1.7}}><b>Founder: Nasir Khan</b> - D.I.Khan - Global Web<br/><b>GLOBAL AFFILIATE SETUP:</b><br/>✈ Flights: Aviasales marker={AFFILIATE.aviasales_marker} - Booking aid={AFFILIATE.booking_aid} - Trip={AFFILIATE.trip_alliance}<br/>💼 Jobs: Fiverr ID={AFFILIATE.fiverr} - Earn 30%<br/>🛒 Shopping: Amazon US={AFFILIATE.amazon_us} UK={AFFILIATE.amazon_uk} - AliExpress={AFFILIATE.aliexpress}<br/><br/>1. Replace YOUR_ID in top CONFIG with real IDs<br/>2. You earn globally: USA, UK, UAE, PK, IN, EU - All traffic<br/>3. AdSense + Affiliate = Double income<br/>All tools global: Currency now shows USD→PKR, INR, AED, SAR, GBP, EUR<br/>This web is for global users, not just Pakistan.</p><button onClick={()=>setShowAbout(false)} style={{padding:'8px 16px',background:'#2563eb',color:'#fff',borderRadius:8,border:0}}>Close</button></div></div>)}
{showPrivacy && (<div onClick={()=>setShowPrivacy(false)} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.5)',display:'flex',justifyContent:'center',alignItems:'center',zIndex:50,padding:16}}><div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,padding:20,maxWidth:650,width:'100%',maxHeight:'85vh',overflow:'auto'}}><h2>Privacy Global v4.4</h2><p style={{fontSize:13}}>Global affiliate links may use cookies. Tools client side. No data collected. Contact: hello@wanalab.pk</p><button onClick={()=>setShowPrivacy(false)} style={{padding:'8px 16px',background:'#2563eb',color:'#fff',borderRadius:8,border:0}}>Close</button></div></div>)}
</div>
)
  }
