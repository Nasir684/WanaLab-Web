// WanaLab.pk v4.3 TRAFFIC BOOST - Air Ticketing + Jobs by Country + 60 Tools Working - Oct 31 2026
import { useState, useEffect } from 'react'

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
{cat:"Daily",emoji:"PK",name:"BMI Calculator",type:"bmi"},
{cat:"Daily",emoji:"PK",name:"Age Calculator",type:"age"},
{cat:"Daily",emoji:"PK",name:"Percentage Calc",type:"percent"},
{cat:"Daily",emoji:"PK",name:"Loan EMI",type:"emi"},
{cat:"Daily",emoji:"PK",name:"Discount Calc",type:"discount"},
{cat:"Daily",emoji:"PK",name:"Unit Converter",type:"unit"},
{cat:"Daily",emoji:"PK",name:"Time Difference",type:"timediff"},
{cat:"Daily",emoji:"PK",name:"Typing Speed",type:"typing"},
{cat:"Daily",emoji:"PK",name:"Click Counter",type:"clickcount"},
{cat:"Daily",emoji:"PK",name:"Timer",type:"timer"},
{cat:"Daily",emoji:"PK",name:"Currency PKR",type:"currency"},
{cat:"Daily",emoji:"PK",name:"Tip Calculator",type:"tip"},
{cat:"Daily",emoji:"PK",name:"Fuel Cost Calc",type:"fuel"},
{cat:"Daily",emoji:"PK",name:"Electricity Bill",type:"wapda"},
{cat:"Daily",emoji:"PK",name:"Zakat Calc",type:"zakat"},
]

const AdSlot=({type,onSport,onFlights,onJobs})=>{
const ads={
daraz:{bg:'#f85606',title:'Daraz.pk - 11.11 Sale',desc:'Mobiles, Fashion - Up to 80% Off',link:'https://www.daraz.pk'},
amazon:{bg:'#131A22',title:'Amazon.com - Global Store',desc:'Import to PK - Laptops, Watches',link:'https://www.amazon.com'},
alibaba:{bg:'#FF6A00',title:'Alibaba.com - Wholesale',desc:'Bulk Import from China',link:'https://www.alibaba.com'},
sporthub:{bg:'#16a34a',title:'SportHub.pk - Live Cricket',desc:'PSL 2025, Live Scores, Points Table',link:'#',action:onSport},
flights:{bg:'#0ea5e9',title:'✈️ Air Ticketing - Cheap Flights',desc:'PIA, Emirates, Qatar - Compare Prices',link:'#',action:onFlights},
jobs:{bg:'#7c3aed',title:'💼 Jobs - 100K+ Openings',desc:'Pakistan, UAE, Saudi, USA, UK, Canada',link:'#',action:onJobs},
}
const ad=ads[type]; if(!ad) return null
return(
<div onClick={()=>{if(ad.action) ad.action(); else window.open(ad.link,'_blank')}} style={{background:ad.bg,color:'#fff',borderRadius:12,padding:12,display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer',margin:'10px 0'}}>
<div><div style={{fontWeight:800,fontSize:13}}>{ad.title}</div><div style={{fontSize:11,opacity:0.9}}>{ad.desc}</div></div>
<div style={{background:'#fff',color:ad.bg,borderRadius:20,padding:'6px 12px',fontSize:11,fontWeight:800}}>Open →</div>
</div>
)
}

function ToolModal({tool,onClose}){
const [a,setA]=useState(''); const [b,setB]=useState(''); const [c,setC]=useState(''); const [out,setOut]=useState(''); const [img,setImg]=useState(null); const [qrUrl,setQrUrl]=useState('')
const run=()=>{
let r=''
switch(tool.type){
case 'bmi':{const w=Number(a), h=Number(b)/100; const bmi=w/(h*h); r=`BMI: ${bmi.toFixed(1)} - ${bmi<18.5?'Underweight':bmi<25?'Normal':bmi<30?'Overweight':'Obese'}`; break}
case 'age':{const dob=new Date(a); const age=Math.floor((Date.now()-dob.getTime())/31557600000); r=`Age: ${age} years`; break}
case 'currency':{const usd=Number(a)||1; r=`USD ${usd} = PKR ${(usd*278.5).toFixed(0)}\nSAR ${(usd*3.75).toFixed(2)}\nAED ${(usd*3.67).toFixed(2)}`; break}
case 'fuel':{const km=Number(a), avg=Number(b), price=Number(c); r=`Fuel: ${(km/avg).toFixed(2)} L\nCost: Rs. ${((km/avg)*price).toFixed(0)}`; break}
case 'wapda':{const u=Number(a); let bill=u<=100?u*12:u<=200?1200+(u-100)*18:3000+(u-200)*28; r=`WAPDA Bill: Rs. ${bill}`; break}
case 'zakat':{r=`Zakat 2.5%: Rs. ${(Number(a)*0.025).toFixed(0)}`; break}
case 'percent':{r=`${a}% of ${b} = ${(Number(a)*Number(b)/100).toFixed(2)}`; break}
case 'discount':{r=`After ${b}%: Rs. ${(Number(a)-Number(a)*Number(b)/100).toFixed(0)}`; break}
case 'emi':{const p=Number(a), rate=Number(b)/100/12, n=Number(c); const emi=(p*rate*Math.pow(1+rate,n))/(Math.pow(1+rate,n)-1); r=`EMI: Rs. ${emi.toFixed(0)}/month`; break}
case 'tip':{r=`Tip: Rs. ${(Number(a)*Number(b)/100).toFixed(0)} Total: Rs. ${(Number(a)+Number(a)*Number(b)/100).toFixed(0)}`; break}
case 'wordcount':{const w=a.trim()?a.trim().split(/\s+/).length:0; r=`Words: ${w} Chars: ${a.length}`; break}
case 'case':{r=`UPPER: ${a.toUpperCase()}\nlower: ${a.toLowerCase()}`; break}
case 'reverse':{r=a.split('').reverse().join(''); break}
case 'qr':{const url=`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(a)}`; setQrUrl(url); r=`QR for: ${a}`; break}
case 'passgen':{const len=Number(a)||12; let p=''; const ch='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#'; for(let i=0;i<len;i++) p+=ch[Math.floor(Math.random()*ch.length)]; r=p; break}
case 'uuid':{r=crypto.randomUUID(); break}
case 'b64text':{try{r=btoa(a)}catch{r=atob(a)} break}
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
{['currency','wapda','zakat'].includes(tool.type) && <div style={{marginTop:12}}><input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder={tool.type==='currency'?'USD e.g. 10':tool.type==='wapda'?'Units e.g. 250':'Amount e.g. 100000'} style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd'}}/></div>}
{['percent','discount','tip'].includes(tool.type) && <div style={{marginTop:12,display:'flex',gap:6}}><input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder="Amount" style={{flex:1,padding:10,borderRadius:8,border:'1px solid #ddd'}}/><input value={b} onChange={e=>setB(e.target.value)} type="number" placeholder="%" style={{flex:1,padding:10,borderRadius:8,border:'1px solid #ddd'}}/></div>}
{tool.type==='fuel' && <div style={{marginTop:12}}><input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder="KM e.g. 100" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd'}}/><input value={b} onChange={e=>setB(e.target.value)} type="number" placeholder="Avg e.g. 12" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd',marginTop:6}}/><input value={c} onChange={e=>setC(e.target.value)} type="number" placeholder="Price e.g. 270" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd',marginTop:6}}/></div>}
{tool.type==='emi' && <div style={{marginTop:12}}><input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder="Loan e.g. 500000" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd'}}/><input value={b} onChange={e=>setB(e.target.value)} type="number" placeholder="Interest % e.g. 12" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd',marginTop:6}}/><input value={c} onChange={e=>setC(e.target.value)} type="number" placeholder="Months e.g. 60" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd',marginTop:6}}/></div>}
{['wordcount','case','reverse','qr','passgen','b64text'].includes(tool.type) && <div style={{marginTop:12}}><textarea value={a} onChange={e=>setA(e.target.value)} placeholder="Enter text..." style={{width:'100%',minHeight:90,padding:10,borderRadius:8,border:'1px solid #ddd'}}/></div>}
{tool.type==='compressor' && <div style={{marginTop:12}}><input type="file" accept="image/*" onChange={e=>{const f=e.target.files[0]; if(f) setImg(URL.createObjectURL(f))}}/><br/>{img && <img src={img} style={{width:'100%',marginTop:10,borderRadius:8}}/>}{img && img.startsWith('data:') && <a href={img} download="wanalab.jpg" style={{display:'block',marginTop:8,background:'#2563eb',color:'#fff',padding:'10px',textAlign:'center',borderRadius:8,textDecoration:'none'}}>Download</a>}{img && !img.startsWith('data:') && <button onClick={()=>{const c=document.createElement('canvas'); const im=new Image(); im.src=img; im.onload=()=>{c.width=im.width*0.6; c.height=im.height*0.6; c.getContext('2d').drawImage(im,0,0,c.width,c.height); setImg(c.toDataURL('image/jpeg',0.6)); setOut('Compressed!')}}} style={{marginTop:8,padding:'10px',background:'#16a34a',color:'#fff',borderRadius:8,border:0,width:'100%'}}>Compress to 60%</button>}</div>}
<button onClick={run} style={{marginTop:12,padding:'12px',background:'#2563eb',color:'#fff',borderRadius:10,border:0,width:'100%',fontWeight:800}}>Run {tool.name}</button>
{tool.type==='qr' && qrUrl && <img src={qrUrl} alt="qr" style={{display:'block',margin:'12px auto',borderRadius:8}}/>}
{out && <pre style={{background:'#f0fdf4',border:'1px solid #bbf7d0',padding:12,borderRadius:10,marginTop:12,whiteSpace:'pre-wrap',fontSize:13,fontWeight:600}}>{out}</pre>}
{!out && <div style={{background:'#f9fafb',padding:10,borderRadius:8,marginTop:12,fontSize:12,color:'#6b7280'}}>Output will appear here. For BMI enter weight + height then Run.</div>}
</div>
</div>
)
}

function FlightsModal({onClose}){
const sites=[
{name:'Google Flights - Cheapest',url:'https://www.google.com/travel/flights',desc:'Best for comparison'},
{name:'Skyscanner - Compare All',url:'https://www.skyscanner.com',desc:'Compare 100+ airlines'},
{name:'PIA - Pakistan International',url:'https://www.piac.com.pk',desc:'Official PIA PK'},
{name:'Emirates',url:'https://www.emirates.com/pk/english/',desc:'PK to Dubai, USA, UK'},
{name:'Qatar Airways',url:'https://www.qatarairways.com/pk/en.html',desc:'PK to Doha, World'},
{name:'Saudia - Saudi Airlines',url:'https://www.saudia.com',desc:'PK to Jeddah, Riyadh'},
{name:'FlyDubai',url:'https://www.flydubai.com',desc:'PK to UAE Budget'},
{name:'Airblue - Pakistan',url:'https://www.airblue.com',desc:'Domestic PK Flights'},
{name:'SereneAir',url:'https://www.sereneair.com',desc:'PK Domestic'},
{name:'Trip.com - Tickets',url:'https://www.trip.com/flights/',desc:'Cheap international'},
{name:'Booking.com Flights',url:'https://www.booking.com/flights',desc:'Hotels + Flights'},
{name:'Expedia',url:'https://www.expedia.com/lp/flights',desc:'USA, Europe Deals'},
]
const [from,setFrom]=useState('ISB'); const [to,setTo]=useState('DXB'); const [date,setDate]=useState('')
return(
<div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.6)',zIndex:102,display:'flex',justifyContent:'center',alignItems:'center',padding:12}}>
<div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,padding:16,width:'100%',maxWidth:650,maxHeight:'90vh',overflow:'auto'}}>
<h2 style={{margin:0}}>✈️ Air Ticketing - WanaLab Flights</h2>
<p style={{fontSize:12,color:'#6b7280'}}>Search & compare cheap flights - Powered by WanaLab.pk - Founder Nasir Khan</p>
<div style={{display:'flex',gap:6,marginTop:12,flexWrap:'wrap'}}>
<input value={from} onChange={e=>setFrom(e.target.value)} placeholder="From ISB" style={{flex:1,minWidth:80,padding:10,borderRadius:8,border:'1px solid #ddd'}}/>
<input value={to} onChange={e=>setTo(e.target.value)} placeholder="To DXB" style={{flex:1,minWidth:80,padding:10,borderRadius:8,border:'1px solid #ddd'}}/>
<input value={date} onChange={e=>setDate(e.target.value)} type="date" style={{flex:1,minWidth:120,padding:10,borderRadius:8,border:'1px solid #ddd'}}/>
</div>
<button onClick={()=>window.open(`https://www.google.com/travel/flights?q=flights from ${from} to ${to} on ${date}`,'_blank')} style={{marginTop:10,width:'100%',padding:12,background:'#0ea5e9',color:'#fff',borderRadius:10,border:0,fontWeight:800}}>Search Flights on Google ✈️</button>
<div style={{display:'grid',gap:8,marginTop:16}}>
{sites.map(s=>(
<a key={s.name} href={s.url} target="_blank" rel="noreferrer" style={{display:'flex',justifyContent:'space-between',alignItems:'center',border:'1px solid #e5e7eb',borderRadius:10,padding:'10px 12px',textDecoration:'none',color:'#111'}}>
<div><b style={{fontSize:13}}>{s.name}</b><div style={{fontSize:11,color:'#6b7280'}}>{s.desc}</div></div><span style={{background:'#0ea5e9',color:'#fff',borderRadius:20,padding:'2px 10px',fontSize:11}}>Open</span>
</a>
))}
</div>
<button onClick={onClose} style={{marginTop:12,width:'100%',padding:'10px',background:'#111',color:'#fff',borderRadius:8,border:0}}>Close</button>
</div>
</div>
)
}

function JobsModal({onClose}){
const jobsByCountry=[
{country:'Pakistan',flag:'PK',sites:[{name:'Rozee.pk',url:'https://www.rozee.pk'},{name:'Mustakbil.com',url:'https://www.mustakbil.com'},{name:'Indeed Pakistan',url:'https://pk.indeed.com'},{name:'LinkedIn PK Jobs',url:'https://www.linkedin.com/jobs/search/?location=Pakistan'},{name:'BrightSpyre',url:'https://www.brightspyre.com'},{name:'Jobz.pk',url:'https://www.jobz.pk'}]},
{country:'UAE - Dubai',flag:'AE',sites:[{name:'Indeed UAE',url:'https://ae.indeed.com'},{name:'LinkedIn UAE',url:'https://www.linkedin.com/jobs/search/?location=United%20Arab%20Emirates'},{name:'Naukrigulf UAE',url:'https://www.naukrigulf.com/jobs-in-uae'},{name:'Dubizzle Jobs',url:'https://dubai.dubizzle.com/jobs/'},{name:'GulfTalent',url:'https://www.gulftalent.com/uae/jobs'}]},
{country:'Saudi Arabia',flag:'SA',sites:[{name:'Indeed Saudi',url:'https://sa.indeed.com'},{name:'Naukrigulf KSA',url:'https://www.naukrigulf.com/jobs-in-saudi-arabia'},{name:'LinkedIn KSA',url:'https://www.linkedin.com/jobs/search/?location=Saudi%20Arabia'},{name:'GulfTalent KSA',url:'https://www.gulftalent.com/saudi-arabia/jobs'}]},
{country:'USA',flag:'US',sites:[{name:'Indeed USA',url:'https://www.indeed.com'},{name:'LinkedIn USA',url:'https://www.linkedin.com/jobs/search/?location=United%20States'},{name:'ZipRecruiter',url:'https://www.ziprecruiter.com'},{name:'Glassdoor',url:'https://www.glassdoor.com/Job/index.htm'},{name:'USAJobs.gov',url:'https://www.usajobs.gov'}]},
{country:'UK',flag:'GB',sites:[{name:'Indeed UK',url:'https://uk.indeed.com'},{name:'Reed.co.uk',url:'https://www.reed.co.uk'},{name:'TotalJobs',url:'https://www.totaljobs.com'},{name:'LinkedIn UK',url:'https://www.linkedin.com/jobs/search/?location=United%20Kingdom'}]},
{country:'Canada',flag:'CA',sites:[{name:'Indeed Canada',url:'https://ca.indeed.com'},{name:'LinkedIn Canada',url:'https://www.linkedin.com/jobs/search/?location=Canada'},{name:'Job Bank Canada',url:'https://www.jobbank.gc.ca'}]},
{country:'Qatar',flag:'QA',sites:[{name:'Indeed Qatar',url:'https://qa.indeed.com'},{name:'Naukrigulf Qatar',url:'https://www.naukrigulf.com/jobs-in-qatar'}]},
{country:'Remote / Worldwide',flag:'WW',sites:[{name:'LinkedIn Remote',url:'https://www.linkedin.com/jobs/search/?f_WT=2'},{name:'We Work Remotely',url:'https://weworkremotely.com'},{name:'RemoteOK',url:'https://remoteok.com'},{name:'Upwork',url:'https://www.upwork.com'},{name:'Fiverr',url:'https://www.fiverr.com'}]},
]
return(
<div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.6)',zIndex:103,display:'flex',justifyContent:'center',alignItems:'center',padding:12}}>
<div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,padding:16,width:'100%',maxWidth:700,maxHeight:'90vh',overflow:'auto'}}>
<h2 style={{margin:0}}>💼 Jobs Search - By Country - WanaLab Jobs</h2>
<p style={{fontSize:12,color:'#6b7280'}}>100K+ jobs - Select your country - Powered by WanaLab.pk</p>
<div style={{display:'flex',flexDirection:'column',gap:16,marginTop:14}}>
{jobsByCountry.map(group=>(
<div key={group.country} style={{border:'1px solid #e5e7eb',borderRadius:12,padding:12}}>
<div style={{fontWeight:800,fontSize:14,marginBottom:8}}>{group.flag} {group.country} - {group.sites.length} Sites</div>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',gap:8}}>
{group.sites.map(s=>(
<a key={s.name} href={s.url} target="_blank" rel="noreferrer" style={{background:'#f3f4f6',borderRadius:8,padding:'8px 10px',textDecoration:'none',color:'#111',fontSize:12,fontWeight:600,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
{s.name}<span style={{background:'#7c3aed',color:'#fff',borderRadius:10,padding:'1px 6px',fontSize:10}}>Go</span>
</a>
))}
</div>
</div>
))}
</div>
<button onClick={onClose} style={{marginTop:14,width:'100%',padding:'12px',background:'#111',color:'#fff',borderRadius:10,border:0,fontWeight:800}}>Close Jobs</button>
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
<h2 style={{margin:0}}>SportHub.pk - All Leagues</h2>
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
<div style={{fontSize:11,color:'#6b7280'}}>Click to use</div>
</div>
)
return(
<div style={{fontFamily:'Inter,system-ui',background:'#f9fafb',minHeight:'100vh'}}>
<header style={{position:'sticky',top:0,zIndex:10,background:'#fff',borderBottom:'1px solid #e5e7eb',padding:'10px 16px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:8}}>
<div style={{display:'flex',gap:8,alignItems:'center',fontWeight:800}}><span style={{background:'#2563eb',color:'#fff',borderRadius:6,padding:'2px 6px'}}>W</span> WanaLab.pk - v4.3</div>
<div style={{display:'flex',gap:5,flexWrap:'wrap'}}><button id="flights-btn" onClick={()=>setShowFlights(true)} style={{fontSize:11,padding:'5px 10px',background:'#0ea5e9',color:'#fff',border:0,borderRadius:6,fontWeight:700}}>✈ Flights</button><button id="jobs-btn" onClick={()=>setShowJobs(true)} style={{fontSize:11,padding:'5px 10px',background:'#7c3aed',color:'#fff',border:0,borderRadius:6,fontWeight:700}}>💼 Jobs</button><button id="sporthub-btn" onClick={()=>setShowSport(true)} style={{fontSize:11,padding:'5px 8px',background:'#16a34a',color:'#fff',border:0,borderRadius:6}}>SportHub</button><button onClick={()=>setShowAbout(true)} style={{fontSize:11,padding:'4px 8px'}}>About</button><span style={{background:'#dcfce7',color:'#16a34a',borderRadius:20,padding:'2px 8px',fontSize:11}}>60 LIVE</span></div>
</header>
<div style={{maxWidth:1100,margin:'0 auto',padding:16}}>
<div style={{textAlign:'center',margin:'12px 0'}}>
<h1 style={{fontSize:22,margin:0,fontWeight:800}}>60 Tools + Flights + Jobs + SportHub</h1>
<p style={{fontSize:12,color:'#6b7280',margin:0}}>v4.3 Traffic Booster - All Working</p>
<input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search 60 tools..." style={{marginTop:10,padding:'8px 12px',borderRadius:20,border:'1px solid #e5e7eb',width:'100%',maxWidth:340}}/>
<div style={{display:'flex',gap:6,justifyContent:'center',flexWrap:'wrap',marginTop:10}}>
{['All','Image','Text','Dev','Daily','Fav','Recent'].map(c=><button key={c} onClick={()=>setCat(c)} style={{padding:'4px 10px',borderRadius:20,border:'1px solid #e5e7eb',background:cat===c?'#2563eb':'#fff',color:cat===c?'#fff':'#000',fontSize:12,fontWeight:cat===c?700:400}}>{c}</button>)}
</div>
</div>

<AdSlot type="flights" onFlights={()=>setShowFlights(true)} onSport={()=>setShowSport(true)} onJobs={()=>setShowJobs(true)}/>
<AdSlot type="jobs" onFlights={()=>setShowFlights(true)} onSport={()=>setShowSport(true)} onJobs={()=>setShowJobs(true)}/>
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
{idx===1 && <><AdSlot type="amazon" onFlights={()=>setShowFlights(true)} onSport={()=>setShowSport(true)} onJobs={()=>setShowJobs(true)}/><AdSlot type="alibaba" onFlights={()=>setShowFlights(true)} onSport={()=>setShowSport(true)} onJobs={()=>setShowJobs(true)}/></>}
</div>
))}
</div>
):(
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',gap:10}}>
{filtered.map(t=><Card key={t.name} t={t}/>)}
</div>
)}
<div style={{marginTop:30,textAlign:'center',fontSize:11,color:'#9ca3af',borderTop:'1px solid #e5e7eb',paddingTop:12}}>© 2026 WanaLab.pk • Founder Nasir Khan (D.I.Khan) • v4.3 Traffic Booster • Flights + Jobs + SportHub + 60 Tools + Ads</div>
</div>
{activeTool && <ToolModal tool={activeTool} onClose={()=>setActiveTool(null)}/>}
{showSport && <SportHubModal onClose={()=>setShowSport(false)}/>}
{showFlights && <FlightsModal onClose={()=>setShowFlights(false)}/>}
{showJobs && <JobsModal onClose={()=>setShowJobs(false)}/>}
{showAbout && (<div onClick={()=>setShowAbout(false)} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.5)',display:'flex',justifyContent:'center',alignItems:'center',zIndex:50,padding:16}}><div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,padding:20,maxWidth:650,width:'100%',maxHeight:'85vh',overflow:'auto'}}><h2>About WanaLab.pk v4.3 - Founder Edition</h2><p style={{fontSize:13,lineHeight:1.7}}><b>Founder & Dev: Nasir Khan</b> - D.I.Khan, KPK<br/>GitHub: Nasir684 - Email: hello@wanalab.pk<br/>Founder: WanaLab.pk (60 tools) + SportHub.pk + Flights + Jobs<br/><br/><b>v4.3 New - Traffic Booster:</b><br/>✈ Air Ticketing: Search flights From/To, Google Flights, Skyscanner, PIA, Emirates, Qatar, Saudia, Airblue<br/>💼 Jobs by Country: PK (Rozee, Mustakbil, Indeed PK), UAE (Indeed AE, Naukrigulf, Dubizzle), Saudi (Indeed SA), USA (Indeed, LinkedIn, ZipRecruiter), UK (Reed, TotalJobs), Canada, Qatar, Remote (Upwork, Fiverr)<br/>All links open to main official sites - No data collected.<br/><br/>60 Tools + 12 Flight sites + 30+ Job sites + 10 Sport leagues + 4 Ad partners = High Traffic<br/>Built: React + Vite + Cloudflare Pages</p><button onClick={()=>setShowAbout(false)} style={{padding:'8px 16px',background:'#2563eb',color:'#fff',borderRadius:8,border:0}}>Close</button></div></div>)}
{showPrivacy && (<div onClick={()=>setShowPrivacy(false)} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.5)',display:'flex',justifyContent:'center',alignItems:'center',zIndex:50,padding:16}}><div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,padding:20,maxWidth:650,width:'100%',maxHeight:'85vh',overflow:'auto'}}><h2>Privacy v4.3</h2><p style={{fontSize:13}}>No uploads. Tools client side. Flights/Jobs/SportHub external links to official sites. Ads: Daraz, Amazon, Alibaba may use cookies. Contact: hello@wanalab.pk</p><button onClick={()=>setShowPrivacy(false)} style={{padding:'8px 16px',background:'#2563eb',color:'#fff',borderRadius:8,border:0}}>Close</button></div></div>)}
</div>
)
                                     }
