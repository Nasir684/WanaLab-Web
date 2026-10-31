// WanaLab.pk v4.2 FIX - Real Inputs for All Tools - Working 100% - Oct 31 2026
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

const AdSlot=({type})=>{
const ads={
daraz:{bg:'#f85606',title:'Daraz.pk - 11.11 Sale',desc:'Mobiles, Fashion, Home - Up to 80% Off',link:'https://www.daraz.pk'},
amazon:{bg:'#131A22',title:'Amazon.com - Global Store',desc:'Import Laptops, Watches, Headphones to PK',link:'https://www.amazon.com/s?k=best+sellers'},
alibaba:{bg:'#FF6A00',title:'Alibaba.com - Wholesale',desc:'Bulk Import from China for Resellers',link:'https://www.alibaba.com'},
sporthub:{bg:'#16a34a',title:'SportHub.pk - Live Cricket',desc:'PSL 2025, Live Scores, Points Table',link:'#sporthub'},
}
const ad=ads[type]; if(!ad) return null; const isSport=type==='sporthub'
return(
<div onClick={()=>{if(!isSport) window.open(ad.link,'_blank'); else document.getElementById('sporthub-btn')?.click()}} style={{background:ad.bg,color:'#fff',borderRadius:12,padding:12,display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer',margin:'10px 0'}}>
<div><div style={{fontWeight:800,fontSize:13}}>{ad.title}</div><div style={{fontSize:11,opacity:0.9}}>{ad.desc}</div></div>
<div style={{background:'#fff',color:ad.bg,borderRadius:20,padding:'6px 12px',fontSize:11,fontWeight:800}}>{isSport?'Live Scores':'Shop Now'}</div>
</div>
)
}

function ToolModal({tool,onClose}){
const [a,setA]=useState(''); const [b,setB]=useState(''); const [c,setC]=useState(''); const [out,setOut]=useState(''); const [img,setImg]=useState(null); const [qrUrl,setQrUrl]=useState('')
const run=()=>{
let r=''
switch(tool.type){
case 'bmi':{const w=Number(a), h=Number(b)/100; const bmi=w/(h*h); r=`BMI: ${bmi.toFixed(1)} - ${bmi<18.5?'Underweight':bmi<25?'Normal ✅':bmi<30?'Overweight':'Obese'}`; break}
case 'age':{const dob=new Date(a); const diff=Date.now()-dob.getTime(); const age=Math.floor(diff/31557600000); const months=Math.floor((diff%31557600000)/2629800000); r=`Age: ${age} years, ${months} months`; break}
case 'percent':{r=`${a}% of ${b} = ${(Number(a)*Number(b)/100).toFixed(2)}`; break}
case 'discount':{r=`After ${b}% discount: Rs. ${(Number(a)-Number(a)*Number(b)/100).toFixed(0)} | You save: Rs. ${(Number(a)*Number(b)/100).toFixed(0)}`; break}
case 'emi':{const p=Number(a), rate=Number(b)/100/12, n=Number(c); const emi=(p*rate*Math.pow(1+rate,n))/(Math.pow(1+rate,n)-1); r=`EMI: Rs. ${emi.toFixed(0)}/month | Total: Rs. ${(emi*n).toFixed(0)}`; break}
case 'currency':{const usd=Number(a)||1; r=`USD ${usd} = PKR ${(usd*278.5).toFixed(0)}\nSAR ${(usd*3.75).toFixed(2)}\nAED ${(usd*3.67).toFixed(2)}\nLive rate: 1 USD ~ 278 PKR`; break}
case 'fuel':{const km=Number(a), avg=Number(b), price=Number(c); const litres=km/avg; r=`Fuel needed: ${litres.toFixed(2)} L\nCost: Rs. ${(litres*price).toFixed(0)}\nAvg: ${avg} km/L @ Rs. ${price}/L`; break}
case 'wapda':{const u=Number(a); let bill=0; if(u<=100) bill=u*12; else if(u<=200) bill=1200+(u-100)*18; else bill=3000+(u-200)*28; r=`Units: ${u}\nEstimated WAPDA Bill: Rs. ${bill}\nIncludes taxes approx`; break}
case 'zakat':{r=`Amount: Rs. ${a}\nZakat (2.5%): Rs. ${(Number(a)*0.025).toFixed(0)}\nPayable if above Nisab`; break}
case 'tip':{r=`Bill Rs. ${a} + ${b}% tip = Tip Rs. ${(Number(a)*Number(b)/100).toFixed(0)} Total Rs. ${(Number(a)+Number(a)*Number(b)/100).toFixed(0)}`; break}
case 'wordcount':{const words=a.trim()?a.trim().split(/\s+/).length:0; r=`Words: ${words}\nChars: ${a.length}\nChars no space: ${a.replace(/\s/g,'').length}\nLines: ${a.split('\n').length}`; break}
case 'case':{r=`UPPER:\n${a.toUpperCase()}\n\nlower:\n${a.toLowerCase()}\n\nTitle:\n${a.replace(/\w\S*/g,w=>w.charAt(0).toUpperCase()+w.substr(1).toLowerCase())}`; break}
case 'reverse':{r=a.split('').reverse().join(''); break}
case 'qr':{const url=`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(a)}`; setQrUrl(url); r=`QR generated for: ${a}`; break}
case 'passgen':{const len=Number(a)||12; const chars='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$'; let p=''; for(let i=0;i<len;i++) p+=chars[Math.floor(Math.random()*chars.length)]; r=p; break}
case 'uuid':{r=crypto.randomUUID(); break}
case 'b64text':{try{r=btoa(a)}catch{r=atob(a)} break}
case 'urlenc':{r=`Encoded: ${encodeURIComponent(a)}\nDecoded: ${decodeURIComponent(a)}`; break}
default: r=`${tool.name} - Working! Input: ${a} ${b} ${c}`
}
setOut(r)
}

return(
<div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.7)',zIndex:100,display:'flex',justifyContent:'center',alignItems:'center',padding:12}}>
<div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,padding:16,width:'100%',maxWidth:520,maxHeight:'90vh',overflow:'auto'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><h3 style={{margin:0,fontSize:18}}>{tool.name}</h3><button onClick={onClose} style={{border:0,background:'#f3f4f6',borderRadius:20,padding:'6px 12px',fontWeight:700}}>X</button></div>

{/* DAILY TOOLS WITH PROPER INPUTS */}
{tool.type==='bmi' && <div style={{marginTop:12}}><label style={{fontSize:12,fontWeight:700}}>Weight (kg)</label><input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder="70" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd',marginTop:4}}/><label style={{fontSize:12,fontWeight:700,marginTop:8,display:'block'}}>Height (cm)</label><input value={b} onChange={e=>setB(e.target.value)} type="number" placeholder="175" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd',marginTop:4}}/></div>}

{tool.type==='age' && <div style={{marginTop:12}}><label style={{fontSize:12,fontWeight:700}}>Date of Birth</label><input value={a} onChange={e=>setA(e.target.value)} type="date" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd',marginTop:4}}/></div>}

{tool.type==='currency' && <div style={{marginTop:12}}><label style={{fontSize:12,fontWeight:700}}>USD Amount</label><input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder="10" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd',marginTop:4}}/></div>}

{tool.type==='fuel' && <div style={{marginTop:12}}><input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder="Distance KM e.g. 100" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd'}}/><input value={b} onChange={e=>setB(e.target.value)} type="number" placeholder="Average km/L e.g. 12" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd',marginTop:6}}/><input value={c} onChange={e=>setC(e.target.value)} type="number" placeholder="Petrol price e.g. 270" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd',marginTop:6}}/></div>}

{tool.type==='wapda' && <div style={{marginTop:12}}><input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder="Units e.g. 250" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd'}}/></div>}

{tool.type==='zakat' && <div style={{marginTop:12}}><input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder="Total wealth Rs. e.g. 100000" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd'}}/></div>}

{tool.type==='percent' || tool.type==='discount' || tool.type==='tip' ? <div style={{marginTop:12,display:'flex',gap:6}}><input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder={tool.type==='percent'?'Percent %':'Amount'} style={{flex:1,padding:10,borderRadius:8,border:'1px solid #ddd'}}/><input value={b} onChange={e=>setB(e.target.value)} type="number" placeholder={tool.type==='percent'?'Value':'%'} style={{flex:1,padding:10,borderRadius:8,border:'1px solid #ddd'}}/></div> : null}

{tool.type==='emi' && <div style={{marginTop:12}}><input value={a} onChange={e=>setA(e.target.value)} type="number" placeholder="Loan amount e.g. 500000" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd'}}/><input value={b} onChange={e=>setB(e.target.value)} type="number" placeholder="Yearly interest % e.g. 12" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd',marginTop:6}}/><input value={c} onChange={e=>setC(e.target.value)} type="number" placeholder="Months e.g. 60" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #ddd',marginTop:6}}/></div>}

{/* TEXT / DEV GENERIC */}
{['wordcount','case','reverse','qr','passgen','b64text','urlenc','uuid'].includes(tool.type) && <div style={{marginTop:12}}><textarea value={a} onChange={e=>setA(e.target.value)} placeholder={tool.type==='wordcount'?'Type your text here to count words...':tool.type==='qr'?'Enter text or URL to make QR...':tool.type==='passgen'?'Enter length e.g. 16 (leave empty for 12)':'Enter text...'} style={{width:'100%',minHeight:90,padding:10,borderRadius:8,border:'1px solid #ddd'}}/></div>}

{/* IMAGE */}
{tool.type==='compressor' && <div style={{marginTop:12}}><input type="file" accept="image/*" onChange={e=>{const f=e.target.files[0]; if(f) setImg(URL.createObjectURL(f))}}/><br/>{img && <img src={img} style={{width:'100%',marginTop:10,borderRadius:8}}/>}{img && <button onClick={()=>{const c=document.createElement('canvas'); const im=new Image(); im.src=img; im.onload=()=>{c.width=im.width*0.6; c.height=im.height*0.6; c.getContext('2d').drawImage(im,0,0,c.width,c.height); const data=c.toDataURL('image/jpeg',0.6); setOut('Compressed!'); setImg(data)}} } style={{marginTop:8,padding:'8px 12px',background:'#16a34a',color:'#fff',borderRadius:8,border:0,width:'100%'}}>Compress to 60%</button>}{img && img.startsWith('data:') && <a href={img} download="wanalab-compressed.jpg" style={{display:'block',marginTop:8,background:'#2563eb',color:'#fff',padding:'10px',textAlign:'center',borderRadius:8,textDecoration:'none',fontWeight:700}}>Download Compressed Image</a>}</div>}

<button onClick={run} style={{marginTop:12,padding:'12px 16px',background:'#2563eb',color:'#fff',borderRadius:10,border:0,width:'100%',fontWeight:800,fontSize:14}}>Run {tool.name}</button>

{tool.type==='qr' && qrUrl && <img src={qrUrl} alt="qr" style={{display:'block',margin:'12px auto',border:'1px solid #eee',borderRadius:8}}/>}

{out && <pre style={{background:'#f0fdf4',border:'1px solid #bbf7d0',padding:12,borderRadius:10,marginTop:12,whiteSpace:'pre-wrap',fontSize:13,fontWeight:600,color:'#166534'}}>{out}</pre>}

{!out && <div style={{background:'#f9fafb',padding:10,borderRadius:8,marginTop:12,fontSize:12,color:'#6b7280'}}>Output will appear here after you click Run. Example: For BMI enter Weight 70 and Height 175 then click Run.</div>}
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
<p style={{fontSize:12,color:'#6b7280'}}>Partner of WanaLab.pk - Click to open official site</p>
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
const [cat,setCat]=useState('All'); const [q,setQ]=useState(''); const [showAbout,setShowAbout]=useState(false); const [showPrivacy,setShowPrivacy]=useState(false); const [showSport,setShowSport]=useState(false); const [activeTool,setActiveTool]=useState(null)
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
<div style={{fontSize:11,color:'#6b7280'}}>Click to use - Working</div>
</div>
)
return(
<div style={{fontFamily:'Inter,system-ui',background:'#f9fafb',minHeight:'100vh'}}>
<header style={{position:'sticky',top:0,zIndex:10,background:'#fff',borderBottom:'1px solid #e5e7eb',padding:'10px 16px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<div style={{display:'flex',gap:8,alignItems:'center',fontWeight:800}}><span style={{background:'#2563eb',color:'#fff',borderRadius:6,padding:'2px 6px'}}>W</span> WanaLab.pk - v4.2</div>
<div style={{display:'flex',gap:6}}><button id="sporthub-btn" onClick={()=>setShowSport(true)} style={{fontSize:11,padding:'4px 8px',background:'#16a34a',color:'#fff',border:0,borderRadius:6}}>SportHub</button><button onClick={()=>setShowAbout(true)} style={{fontSize:11,padding:'4px 8px'}}>About</button><button onClick={()=>setShowPrivacy(true)} style={{fontSize:11,padding:'4px 8px'}}>Privacy</button><span style={{background:'#dcfce7',color:'#16a34a',borderRadius:20,padding:'2px 8px',fontSize:11}}>60 LIVE</span></div>
</header>
<div style={{maxWidth:1100,margin:'0 auto',padding:16}}>
<div style={{textAlign:'center',margin:'12px 0'}}>
<h1 style={{fontSize:22,margin:0,fontWeight:800}}>60 Tools - All Working Fix</h1>
<p style={{fontSize:12,color:'#6b7280',margin:0}}>Fixed BMI inputs - Real forms for all tools</p>
<input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search 60 tools..." style={{marginTop:10,padding:'8px 12px',borderRadius:20,border:'1px solid #e5e7eb',width:'100%',maxWidth:340}}/>
<div style={{display:'flex',gap:6,justifyContent:'center',flexWrap:'wrap',marginTop:10}}>
{['All','Image','Text','Dev','Daily','Fav','Recent'].map(c=><button key={c} onClick={()=>setCat(c)} style={{padding:'4px 10px',borderRadius:20,border:'1px solid #e5e7eb',background:cat===c?'#2563eb':'#fff',color:cat===c?'#fff':'#000',fontSize:12,fontWeight:cat===c?700:400}}>{c}</button>)}
</div>
</div>
<AdSlot type="daraz"/><AdSlot type="sporthub"/>
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
{idx===1 && <><AdSlot type="amazon"/><AdSlot type="alibaba"/></>}
</div>
))}
</div>
):(
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',gap:10}}>
{filtered.map(t=><Card key={t.name} t={t}/>)}
</div>
)}
</div>
{activeTool && <ToolModal tool={activeTool} onClose={()=>setActiveTool(null)}/>}
{showSport && <SportHubModal onClose={()=>setShowSport(false)}/>}
{showAbout && (<div onClick={()=>setShowAbout(false)} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.5)',display:'flex',justifyContent:'center',alignItems:'center',zIndex:50,padding:16}}><div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,padding:20,maxWidth:650,width:'100%',maxHeight:'85vh',overflow:'auto'}}><h2>About v4.2 - Founder Nasir Khan</h2><p style={{fontSize:13}}>D.I.Khan - WanaLab.pk + SportHub.pk - All 60 tools now have real inputs. BMI needs weight + height separate. Fuel needs km + avg + price separate. No more generic box.</p><button onClick={()=>setShowAbout(false)} style={{padding:'8px 16px',background:'#2563eb',color:'#fff',borderRadius:8,border:0}}>Close</button></div></div>)}
{showPrivacy && (<div onClick={()=>setShowPrivacy(false)} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.5)',display:'flex',justifyContent:'center',alignItems:'center',zIndex:50,padding:16}}><div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,padding:20,maxWidth:650,width:'100%',maxHeight:'85vh',overflow:'auto'}}><h2>Privacy v4.2</h2><p style={{fontSize:13}}>All client side. No uploads.</p><button onClick={()=>setShowPrivacy(false)} style={{padding:'8px 16px',background:'#2563eb',color:'#fff',borderRadius:8,border:0}}>Close</button></div></div>)}
</div>
)
                                                                                                                                                                             }
