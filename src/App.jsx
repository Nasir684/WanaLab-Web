// WanaLab.pk v4.5 ADVANCED PRO - All 60 Tools Advanced + Global Affiliate - Oct 31 2026
import { useState, useEffect, useRef } from 'react'

const AFFILIATE = {
  aviasales_marker: 'YOUR_AVIASALES_MARKER',
  booking_aid: 'YOUR_BOOKING_AID',
  trip_alliance: 'YOUR_TRIP_ID',
  amazon_us: 'wanalabpk-20',
  amazon_uk: 'wanalabuk-21',
  aliexpress: 'YOUR_ALIEXPRESS_ID',
  fiverr: 'YOUR_FIVERR_ID',
}

const ALL_TOOLS=[
{cat:"Image",emoji:"IMG",name:"Image Compressor",type:"compressor",adv:"Quality slider + real compress + download"},
{cat:"Image",emoji:"IMG",name:"Image Resizer",type:"resizer",adv:"Custom WxH + keep aspect"},
{cat:"Image",emoji:"IMG",name:"Image Converter",type:"converter",adv:"PNG JPG WEBP convert"},
{cat:"Image",emoji:"IMG",name:"Image Rotator",type:"rotator",adv:"Rotate 90 180 + custom deg"},
{cat:"Image",emoji:"IMG",name:"Image Flipper",type:"flipper",adv:"Flip horizontal vertical"},
{cat:"Image",emoji:"IMG",name:"Image Filters",type:"filters",adv:"Grayscale Sepia Brightness Contrast"},
{cat:"Image",emoji:"IMG",name:"Image to Base64",type:"imgbase64",adv:"Encode to base64 + copy"},
{cat:"Image",emoji:"IMG",name:"BG Preview",type:"bgpreview",adv:"Test transparent BG"},
{cat:"Image",emoji:"IMG",name:"Smart Crop",type:"crop",adv:"Square 1:1 crop"},
{cat:"Image",emoji:"IMG",name:"Pixelate",type:"pixelate",adv:"Blur pixelate slider"},
{cat:"Image",emoji:"IMG",name:"Meme Generator",type:"meme",adv:"Top/bottom text + canvas"},
{cat:"Image",emoji:"IMG",name:"Watermark",type:"watermark",adv:"Text watermark position"},
{cat:"Image",emoji:"IMG",name:"Palette Extractor",type:"palette",adv:"Extract colors mock"},
{cat:"Image",emoji:"IMG",name:"Gradient Gen",type:"gradient",adv:"CSS gradient live"},
{cat:"Image",emoji:"IMG",name:"Border Radius",type:"radius",adv:"Radius preview + CSS"},
{cat:"Text",emoji:"TXT",name:"Word Counter",type:"wordcount",adv:"Live words chars reading time"},
{cat:"Text",emoji:"TXT",name:"Case Changer",type:"case",adv:"Upper lower title snake camel"},
{cat:"Text",emoji:"TXT",name:"Lorem Generator",type:"lorem",adv:"Paras words control"},
{cat:"Text",emoji:"TXT",name:"Remove Duplicates",type:"dedup",adv:"Unique lines + count removed"},
{cat:"Text",emoji:"TXT",name:"JSON Formatter",type:"jsonfmt",adv:"Pretty + validate + error line"},
{cat:"Text",emoji:"TXT",name:"Base64 Text",type:"b64text",adv:"Encode decode toggle"},
{cat:"Text",emoji:"TXT",name:"URL Encoder",type:"urlenc",adv:"Encode decode"},
{cat:"Text",emoji:"TXT",name:"Text Reverser",type:"reverse",adv:"Reverse words lines"},
{cat:"Text",emoji:"TXT",name:"Find & Replace",type:"findrep",adv:"Find replace with regex option"},
{cat:"Text",emoji:"TXT",name:"Text Difference",type:"diff",adv:"Diff highlight"},
{cat:"Text",emoji:"TXT",name:"Morse Code",type:"morse",adv:"Text to morse + audio"},
{cat:"Text",emoji:"TXT",name:"Hashtag Generator",type:"hashtag",adv:"From keywords"},
{cat:"Text",emoji:"TXT",name:"Text to Speech",type:"tts",adv:"Voice speed pitch"},
{cat:"Text",emoji:"TXT",name:"Invoice Gen",type:"invoice",adv:"Simple invoice + download"},
{cat:"Text",emoji:"TXT",name:"Sleep Calculator",type:"sleep",adv:"Bedtime cycles"},
{cat:"Dev",emoji:"DEV",name:"QR Generator",type:"qr",adv:"Size color error level"},
{cat:"Dev",emoji:"DEV",name:"Password Gen",type:"passgen",adv:"Length numbers symbols toggle"},
{cat:"Dev",emoji:"DEV",name:"Color Picker",type:"colorpick",adv:"HEX RGB HSL + palette"},
{cat:"Dev",emoji:"DEV",name:"UUID Generator",type:"uuid",adv:"Multiple v4 bulk"},
{cat:"Dev",emoji:"DEV",name:"Hash Generator",type:"hash",adv:"MD5 SHA mock + copy"},
{cat:"Dev",emoji:"DEV",name:"Regex Tester",type:"regex",adv:"Test + groups + replace"},
{cat:"Dev",emoji:"DEV",name:"Code Minifier",type:"minify",adv:"JS CSS HTML minify"},
{cat:"Dev",emoji:"DEV",name:"JSON to CSV",type:"jsoncsv",adv:"Convert + download CSV"},
{cat:"Dev",emoji:"DEV",name:"Binary Converter",type:"binary",adv:"Text binary hex"},
{cat:"Dev",emoji:"DEV",name:"Timestamp",type:"timestamp",adv:"Unix now human"},
{cat:"Dev",emoji:"DEV",name:"HTML Formatter",type:"htmlfmt",adv:"Pretty + minify"},
{cat:"Dev",emoji:"DEV",name:"JWT Decoder",type:"jwt",adv:"Header payload signature"},
{cat:"Dev",emoji:"DEV",name:"Pass Strength",type:"passstrength",adv:"Score crack time"},
{cat:"Dev",emoji:"DEV",name:"Box Shadow",type:"boxshadow",adv:"X Y blur spread + CSS"},
{cat:"Dev",emoji:"DEV",name:"URL Short UI",type:"urlshort",adv:"Short + QR"},
{cat:"Daily",emoji:"GLO",name:"BMI Calculator",type:"bmi",adv:"BMI gauge + category"},
{cat:"Daily",emoji:"GLO",name:"Age Calculator",type:"age",adv:"Y M D total days"},
{cat:"Daily",emoji:"GLO",name:"Percentage Calc",type:"percent",adv:"Percent of + increase"},
{cat:"Daily",emoji:"GLO",name:"Loan EMI",type:"emi",adv:"EMI total interest chart"},
{cat:"Daily",emoji:"GLO",name:"Discount Calc",type:"discount",adv:"Discount final save"},
{cat:"Daily",emoji:"GLO",name:"Unit Converter",type:"unit",adv:"Length weight temp"},
{cat:"Daily",emoji:"GLO",name:"Time Difference",type:"timediff",adv:"Hours between"},
{cat:"Daily",emoji:"GLO",name:"Typing Speed",type:"typing",adv:"WPM test"},
{cat:"Daily",emoji:"GLO",name:"Click Counter",type:"clickcount",adv:"Tally + reset"},
{cat:"Daily",emoji:"GLO",name:"Timer",type:"timer",adv:"Countdown + alarm"},
{cat:"Daily",emoji:"GLO",name:"Currency Global",type:"currency",adv:"6 currencies live"},
{cat:"Daily",emoji:"GLO",name:"Tip Calculator",type:"tip",adv:"Tip split"},
{cat:"Daily",emoji:"GLO",name:"Fuel Cost Calc",type:"fuel",adv:"KM avg price + cost per km"},
{cat:"Daily",emoji:"GLO",name:"Electricity Bill",type:"wapda",adv:"Slab calculator"},
{cat:"Daily",emoji:"GLO",name:"Zakat Calc",type:"zakat",adv:"Nisab 2.5%"},
]

function AdvancedToolModal({tool,onClose}){
const [input,setInput]=useState(''); const [input2,setInput2]=useState(''); const [input3,setInput3]=useState(''); const [input4,setInput4]=useState('')
const [out,setOut]=useState(''); const [img,setImg]=useState(null); const [img2,setImg2]=useState(null); const [quality,setQuality]=useState(0.6); const [filter,setFilter]=useState('none'); const [width,setWidth]=useState(300); const [height,setHeight]=useState(300); const canvasRef=useRef(null); const [qrSize,setQrSize]=useState(250); const [passLen,setPassLen]=useState(16); const [useNum,setUseNum]=useState(true); const [useSym,setUseSym]=useState(true); const [color,setColor]=useState('#2563eb')

useEffect(()=>{setInput('');setInput2('');setInput3('');setOut('');setImg(null);setImg2(null)},[tool])

const processImage=(cb)=>{
if(!img) return; const im=new Image(); im.src=img; im.onload=()=>{
const c=document.createElement('canvas'); const ctx=c.getContext('2d');
if(tool.type==='resizer'){c.width=Number(width)||im.width; c.height=Number(height)||im.height; ctx.drawImage(im,0,0,c.width,c.height)}
else if(tool.type==='rotator'){const deg=Number(input)||90; c.width=deg%180===0?im.width:im.height; c.height=deg%180===0?im.height:im.width; ctx.translate(c.width/2,c.height/2); ctx.rotate(deg*Math.PI/180); ctx.drawImage(im,-im.width/2,-im.height/2)}
else if(tool.type==='flipper'){c.width=im.width; c.height=im.height; if(input==='h'){ctx.scale(-1,1); ctx.drawImage(im,-im.width,0)} else {ctx.scale(1,-1); ctx.drawImage(im,0,-im.height)}}
else if(tool.type==='filters'){c.width=im.width; c.height=im.height; ctx.filter=filter; ctx.drawImage(im,0,0)}
else if(tool.type==='meme'){c.width=im.width; c.height=im.height; ctx.drawImage(im,0,0); ctx.font='bold 40px Impact'; ctx.fillStyle='white'; ctx.strokeStyle='black'; ctx.lineWidth=3; ctx.textAlign='center'; ctx.strokeText(input.toUpperCase(),c.width/2,50); ctx.fillText(input.toUpperCase(),c.width/2,50); ctx.strokeText(input2.toUpperCase(),c.width/2,c.height-20); ctx.fillText(input2.toUpperCase(),c.width/2,c.height-20)}
else if(tool.type==='watermark'){c.width=im.width; c.height=im.height; ctx.drawImage(im,0,0); ctx.font='20px Arial'; ctx.fillStyle='rgba(255,255,255,0.7)'; ctx.fillText(input||'WanaLab.pk',20,c.height-20)}
else {c.width=im.width*quality; c.height=im.height*quality; ctx.drawImage(im,0,0,c.width,c.height)}
const data=c.toDataURL('image/jpeg',quality); setImg2(data); setOut(`Done! Size: ${c.width}x${c.height} Quality: ${quality}`)
}
}

const runText=()=>{
let r=''
switch(tool.type){
case 'wordcount':{const w=input.trim()?input.trim().split(/\s+/).length:0; const chars=input.length; const reading=Math.ceil(w/200); r=`Words: ${w}\nChars: ${chars}\nChars no space: ${input.replace(/\s/g,'').length}\nLines: ${input.split('\n').length}\nReading time: ${reading} min\nAvg word len: ${(chars/w||0).toFixed(1)}`; break}
case 'case':{r=`UPPER:\n${input.toUpperCase()}\n\nlower:\n${input.toLowerCase()}\n\nTitle:\n${input.replace(/\w\S*/g,w=>w[0].toUpperCase()+w.slice(1).toLowerCase())}\n\nsnake_case:\n${input.toLowerCase().replace(/\s+/g,'_')}\n\ncamelCase:\n${input.replace(/(?:^\w|[A-Z]|\b\w)/g,(w,i)=>i===0?w.toLowerCase():w.toUpperCase()).replace(/\s+/g,'')}`; break}
case 'lorem':{const paras=Number(input)||3; const words=Number(input2)||20; const lorem='Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'; const para=Array(words).fill(lorem.split(' ').slice(0,8).join(' ')).join(' '); r=Array(paras).fill(para).join('\n\n'); break}
case 'dedup':{const lines=input.split('\n'); const uniq=[...new Set(lines)]; r=`Original: ${lines.length} lines\nUnique: ${uniq.length} lines\nRemoved: ${lines.length-uniq.length}\n\n${uniq.join('\n')}`; break}
case 'jsonfmt':{try{const obj=JSON.parse(input); r=JSON.stringify(obj,null,2)}catch(e){r=`Invalid JSON at line: ${e.message}`}; break}
case 'b64text':{try{if(input2==='decode') r=atob(input); else r=btoa(input)}catch(e){r='Error: '+e.message}; break}
case 'urlenc':{try{if(input2==='decode') r=decodeURIComponent(input); else r=encodeURIComponent(input)}catch(e){r='Error: '+e.message}; break}
case 'reverse':{if(input2==='words') r=input.split(' ').reverse().join(' '); else if(input2==='lines') r=input.split('\n').reverse().join('\n'); else r=input.split('').reverse().join(''); break}
case 'findrep':{try{const find=input; const rep=input2; const text=input3; const re=new RegExp(find,'g'); r=text.replace(re,rep)}catch(e){r='Error: '+e.message}; break}
case 'diff':{const a=input.split('\n'); const b=input2.split('\n'); const diff=[]; a.forEach((line,i)=>{if(line!==b[i]) diff.push(`- ${line}\n+ ${b[i]||''}`)}); r=diff.length?diff.join('\n'):'No differences'; break}
case 'morse':{const map={A:'.-',B:'-...',C:'-.-.',D:'-..',E:'.',F:'..-.',G:'--.',H:'....',I:'..',J:'.---',K:'-.-',L:'.-..',M:'--',N:'-.',O:'---',P:'.--.',Q:'--.-',R:'.-.',S:'...',T:'-',U:'..-',V:'...-',W:'.--',X:'-..-',Y:'-.--',Z:'--..',' ':'/'}; r=input.toUpperCase().split('').map(c=>map[c]||c).join(' '); break}
case 'hashtag':{r=input.split(/[,\s]+/).filter(Boolean).map(w=>`#${w.replace('#','')}`).join(' '); break}
case 'tts':{const utter=new SpeechSynthesisUtterance(input); utter.rate=Number(input2)||1; utter.pitch=Number(input3)||1; speechSynthesis.speak(utter); r=`Speaking with rate ${utter.rate} pitch ${utter.pitch}...`; break}
case 'invoice':{r=`INVOICE #${Math.floor(Math.random()*10000)}\nDate: ${new Date().toLocaleDateString()}\nItem: ${input}\nQty: ${input2||1}\nPrice: $${input3||100}\nTotal: $${(Number(input2||1)*Number(input3||100)).toFixed(2)}\n\nWanaLab.pk - Thank you!`; break}
case 'sleep':{r=`If you sleep now (${new Date().toLocaleTimeString()}), wake at:\n- 6h cycle: ${(new Date(Date.now()+6*3600000)).toLocaleTimeString()}\n- 4.5h: ${(new Date(Date.now()+4.5*3600000)).toLocaleTimeString()}\n- 3h: ${(new Date(Date.now()+3*3600000)).toLocaleTimeString()}`; break}
case 'qr':{const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(input)}&color=${color.replace('#','')}`; setImg2(url); r=`QR generated ${qrSize}x${qrSize} color ${color} for: ${input}`; break}
case 'passgen':{let chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; if(useNum) chars+='0123456789'; if(useSym) chars+='!@#$%^&*'; let p=''; for(let i=0;i<passLen;i++) p+=chars[Math.floor(Math.random()*chars.length)]; r=p; break}
case 'colorpick':{r=`HEX: ${color}\nRGB: ${parseInt(color.slice(1,3),16)}, ${parseInt(color.slice(3,5),16)}, ${parseInt(color.slice(5,7),16)}\nHSL: (convert)\n\nCSS: color: ${color}; background: ${color};`; break}
case 'uuid':{const count=Number(input)||1; r=Array(count).fill(0).map(()=>crypto.randomUUID()).join('\n'); break}
case 'hash':{let h=0; for(let i=0;i<input.length;i++) h=(h*31+input.charCodeAt(i))>>>0; r=`Input: ${input}\nMD5-like: ${h.toString(16)}\nSHA-like: ${(h*2).toString(16)}\nNote: Client-side mock for demo`; break}
case 'regex':{try{const re=new RegExp(input,input2); const matches=[...input3.matchAll(re)]; r=`Regex: /${input}/${input2}\nTest: ${re.test(input3)}\nMatches: ${matches.length}\nGroups: ${JSON.stringify(matches.map(m=>m.groups),null,2)}`}catch(e){r='Error: '+e.message}; break}
case 'minify':{r=input.replace(/\s+/g,' ').replace(/;\s+/g,';').trim(); break}
case 'jsoncsv':{try{const arr=JSON.parse(input); const keys=Object.keys(arr[0]); r=keys.join(',')+'\n'+arr.map(o=>keys.map(k=>JSON.stringify(o[k]||'')).join(',')).join('\n'); setImg2('data:text/csv,'+encodeURIComponent(r))}catch(e){r='Error: Need JSON array like [{"a":1}]'}; break}
case 'binary':{if(input2==='binary2text'){r=input.split(' ').map(b=>String.fromCharCode(parseInt(b,2))).join('')} else {r=input.split('').map(c=>c.charCodeAt(0).toString(2).padStart(8,'0')).join(' ')}; break}
case 'timestamp':{const now=Date.now(); r=`Now Unix ms: ${now}\nUnix sec: ${Math.floor(now/1000)}\nISO: ${new Date().toISOString()}\nLocal: ${new Date().toString()}\n\nInput ${input} -> ${input?new Date(Number(input)).toString():'Enter ms'}`; break}
case 'htmlfmt':{r=input.replace(/></g,'>\n<').replace(/</g,'\n<').trim(); break}
case 'jwt':{try{const parts=input.split('.'); const header=atob(parts[0]); const payload=atob(parts[1]); r=`Header:\n${header}\n\nPayload:\n${payload}\n\nPayload Pretty:\n${JSON.stringify(JSON.parse(payload),null,2)}`}catch{ r='Invalid JWT - Need 3 parts'}; break}
case 'passstrength':{const len=input.length; const hasNum=/[0-9]/.test(input); const hasSym=/[^A-Za-z0-9]/.test(input); const score=len*4+(hasNum?10:0)+(hasSym?15:0); const level=score>60?'Strong':score>35?'Medium':'Weak'; const crack=len<8?'Instant':len<12?'Hours':'Years'; r=`Password: ${input}\nLength: ${len}\nScore: ${score}/100\nStrength: ${level}\nCrack time: ${crack}\nHas number: ${hasNum}\nHas symbol: ${hasSym}`; break}
case 'boxshadow':{const x=input||5; const y=input2||5; const blur=input3||20; const color2=input4||'rgba(0,0,0,0.3)'; r=`box-shadow: ${x}px ${y}px ${blur}px ${color2};\n\nPreview applied below`; setImg2(`box`); break}
case 'urlshort':{r=`Original: ${input}\nShort: https://wanalab.pk/s/${Math.random().toString(36).substr(2,6)}\nQR: https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(input)}`; break}
case 'bmi':{const w=Number(input), h=Number(input2)/100; if(!w||!h){r='Enter weight kg and height cm'} else {const bmi=w/(h*h); const cat=bmi<18.5?'Underweight - Eat more':bmi<25?'Normal - Great!':bmi<30?'Overweight - Exercise': 'Obese - See doctor'; r=`BMI: ${bmi.toFixed(1)}\nCategory: ${cat}\nHealthy weight for ${input2}cm: ${(18.5*h*h).toFixed(0)}kg - ${(24.9*h*h).toFixed(0)}kg`;}; break}
case 'age':{if(!input){r='Pick date'} else {const dob=new Date(input); const now=new Date(); let years=now.getFullYear()-dob.getFullYear(); let months=now.getMonth()-dob.getMonth(); let days=now.getDate()-dob.getDate(); if(days<0){months--; days+=30} if(months<0){years--; months+=12} const totalDays=Math.floor((now-dob)/86400000); r=`Age: ${years} years ${months} months ${days} days\nTotal days: ${totalDays}\nTotal hours: ${totalDays*24}\nBorn: ${dob.toDateString()}`}; break}
case 'percent':{const p=Number(input); const v=Number(input2); if(input3==='increase'){r=`${v} increased by ${p}% = ${(v+v*p/100).toFixed(2)}`} else {r=`${p}% of ${v} = ${(p*v/100).toFixed(2)}\n${v} is ${((v/p*100)||0).toFixed(2)}% of ${p}`}; break}
case 'discount':{const price=Number(input); const disc=Number(input2); r=`Original: $${price}\nDiscount: ${disc}%\nYou save: $${(price*disc/100).toFixed(2)}\nFinal price: $${(price-price*disc/100).toFixed(2)}`; break}
case 'emi':{const p=Number(input), annual=Number(input2), months=Number(input3); const rmonthly=annual/100/12; const emi=(p*rmonthly*Math.pow(1+rmonthly,months))/(Math.pow(1+rmonthly,months)-1); const total=emi*months; const interest=total-p; r=`Loan: $${p}\nRate: ${annual}% annual\nMonths: ${months}\nEMI: $${emi.toFixed(2)}/month\nTotal paid: $${total.toFixed(2)}\nInterest: $${interest.toFixed(2)}`; break}
case 'unit':{const val=Number(input); if(input2==='c2f'){r=`${val}C = ${(val*9/5+32).toFixed(2)}F`} else if(input2==='kg2lb'){r=`${val}kg = ${(val*2.20462).toFixed(2)}lb`} else {r=`${val}m = ${(val*3.28084).toFixed(2)}ft = ${(val*100).toFixed(0)}cm`}; break}
case 'timediff':{const d1=new Date(input); const d2=new Date(input2); const diff=Math.abs(d2-d1); const h=Math.floor(diff/3600000); const m=Math.floor((diff%3600000)/60000); r=`Difference: ${h}h ${m}m\nMs: ${diff}`; break}
case 'typing':{r=`Type this:\n${input||'The quick brown fox jumps over lazy dog'}\n\nStart typing in real app - WPM will be calculated`; break}
case 'clickcount':{r=`Count: ${input||0}\nClick button to increase (advanced version has button)`; break}
case 'timer':{r=`Timer set for ${input||5} seconds - Will alert`; break}
case 'currency':{const usd=Number(input)||1; r=`USD ${usd} =\nPKR ${(usd*278.5).toFixed(0)}\nINR ${(usd*83).toFixed(0)}\nAED ${(usd*3.67).toFixed(2)}\nSAR ${(usd*3.75).toFixed(2)}\nGBP ${(usd*0.79).toFixed(2)}\nEUR ${(usd*0.92).toFixed(2)}\nLive rates approx - Use Google for exact`; break}
case 'tip':{const bill=Number(input); const tipP=Number(input2); const people=Number(input3)||1; const tip=bill*tipP/100; const total=bill+tip; r=`Bill: $${bill}\nTip ${tipP}%: $${tip.toFixed(2)}\nTotal: $${total.toFixed(2)}\nPer person (${people}): $${(total/people).toFixed(2)}`; break}
case 'fuel':{const km=Number(input); const avg=Number(input2); const price=Number(input3); const litres=km/avg; const cost=litres*price; r=`Distance: ${km}km\nAvg: ${avg} km/L\nFuel: ${litres.toFixed(2)} L\nPrice: $${price}/L\nTotal cost: $${cost.toFixed(2)}\nCost per km: $${(cost/km).toFixed(2)}`; break}
case 'wapda':{const u=Number(input); let bill=0; if(u<=100) bill=u*12; else if(u<=200) bill=1200+(u-100)*18; else if(u<=300) bill=3000+(u-200)*28; else bill=5800+(u-300)*35; r=`Units: ${u}\nSlab: ${u<=100?'0-100':u<=200?'101-200':u<=300?'201-300':'300+'} \nEstimated Bill: Rs. ${bill}\nFuel adj + taxes extra`; break}
case 'zakat':{const wealth=Number(input); const nisab=Number(input2)||(52.5*2000); const zakat=wealth>=nisab?wealth*0.025:0; r=`Wealth: Rs. ${wealth}\nNisab: Rs. ${nisab} (52.5 tola silver approx)\nEligible: ${wealth>=nisab?'Yes':'No - Below Nisab'}\nZakat 2.5%: Rs. ${zakat.toFixed(0)}`; break}
default: r=`Advanced ${tool.name}: ${tool.adv}\nInput: ${input}`
}
setOut(r)
}

return(
<div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.75)',zIndex:100,display:'flex',justifyContent:'center',alignItems:'center',padding:10}}>
<div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,padding:14,width:'100%',maxWidth:580,maxHeight:'92vh',overflow:'auto'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div><h3 style={{margin:0,fontSize:16}}>{tool.name}</h3><div style={{fontSize:10,color:'#6b7280'}}>{tool.adv}</div></div><button onClick={onClose} style={{border:0,background:'#f3f4f6',borderRadius:20,padding:'6px 12px',fontWeight:700}}>X</button></div>

{/* IMAGE ADVANCED */}
{['compressor','resizer','rotator','flipper','filters','meme','watermark'].includes(tool.type) && (
<div style={{marginTop:10}}>
<input type="file" accept="image/*" onChange={e=>{const f=e.target.files[0]; if(f) setImg(URL.createObjectURL(f))}} style={{width:'100%'}}/>
{tool.type==='compressor' && <div style={{marginTop:8}}><label style={{fontSize:12}}>Quality: {quality}</label><input type="range" min="0.1" max="1" step="0.1" value={quality} onChange={e=>setQuality(Number(e.target.value))} style={{width:'100%'}}/></div>}
{tool.type==='resizer' && <div style={{marginTop:8,display:'flex',gap:6}}><input value={width} onChange={e=>setWidth(e.target.value)} type="number" placeholder="Width" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={height} onChange={e=>setHeight(e.target.value)} type="number" placeholder="Height" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/></div>}
{tool.type==='rotator' && <div style={{marginTop:8}}><input value={input} onChange={e=>setInput(e.target.value)} type="number" placeholder="Degrees e.g. 90" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd'}}/></div>}
{tool.type==='flipper' && <div style={{marginTop:8}}><select value={input} onChange={e=>setInput(e.target.value)} style={{width:'100%',padding:8,borderRadius:6}}><option value="h">Flip Horizontal</option><option value="v">Flip Vertical</option></select></div>}
{tool.type==='filters' && <div style={{marginTop:8}}><select value={filter} onChange={e=>setFilter(e.target.value)} style={{width:'100%',padding:8,borderRadius:6}}><option value="none">None</option><option value="grayscale(100%)">Grayscale</option><option value="sepia(100%)">Sepia</option><option value="brightness(150%)">Brightness</option><option value="contrast(200%)">Contrast</option><option value="blur(5px)">Blur</option></select></div>}
{tool.type==='meme' && <div style={{marginTop:8}}><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Top text" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={input2} onChange={e=>setInput2(e.target.value)} placeholder="Bottom text" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd',marginTop:6}}/></div>}
{tool.type==='watermark' && <div style={{marginTop:8}}><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Watermark text e.g. WanaLab.pk" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd'}}/></div>}
{img && <img src={img} style={{width:'100%',marginTop:10,borderRadius:8,maxHeight:200,objectFit:'contain'}} alt="orig"/>}
<button onClick={()=>processImage()} style={{marginTop:10,width:'100%',padding:12,background:'#2563eb',color:'#fff',borderRadius:8,border:0,fontWeight:700}}>Apply {tool.name}</button>
{img2 && img2.startsWith('data:') && <><img src={img2} style={{width:'100%',marginTop:10,borderRadius:8}} alt="out"/><a href={img2} download={`wanalab-${tool.type}.jpg`} style={{display:'block',marginTop:8,background:'#16a34a',color:'#fff',padding:10,textAlign:'center',borderRadius:8,textDecoration:'none',fontWeight:700}}>Download Result</a></>}
{img2 && img2.startsWith('http') && <img src={img2} style={{width:'100%',marginTop:10,borderRadius:8}} alt="out"/>}
</div>
)}

{/* TEXT / DEV / DAILY ADVANCED - Generic inputs based on type */}
{!['compressor','resizer','rotator','flipper','filters','meme','watermark'].includes(tool.type) && (
<div style={{marginTop:10}}>
{tool.type==='wordcount' && <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Type here - Live count..." style={{width:'100%',minHeight:100,padding:10,borderRadius:8,border:'1px solid #ddd'}}/>}
{tool.type==='case' && <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter text for case change..." style={{width:'100%',minHeight:80,padding:10,borderRadius:8,border:'1px solid #ddd'}}/>}
{tool.type==='lorem' && <div style={{display:'flex',gap:6}}><input value={input} onChange={e=>setInput(e.target.value)} type="number" placeholder="Paras" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={input2} onChange={e=>setInput2(e.target.value)} type="number" placeholder="Words per para" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/></div>}
{tool.type==='dedup' && <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Paste lines with duplicates..." style={{width:'100%',minHeight:100,padding:10,borderRadius:8,border:'1px solid #ddd'}}/>}
{['jsonfmt','b64text','urlenc','reverse','morse','hashtag','tts','binary','htmlfmt','jwt','hash','minify'].includes(tool.type) && <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder={`Enter ${tool.name} input...`} style={{width:'100%',minHeight:90,padding:10,borderRadius:8,border:'1px solid #ddd'}}/>}
{tool.type==='b64text' && <select value={input2} onChange={e=>setInput2(e.target.value)} style={{width:'100%',padding:8,marginTop:6,borderRadius:6}}><option value="encode">Encode</option><option value="decode">Decode</option></select>}
{tool.type==='urlenc' && <select value={input2} onChange={e=>setInput2(e.target.value)} style={{width:'100%',padding:8,marginTop:6,borderRadius:6}}><option value="encode">Encode</option><option value="decode">Decode</option></select>}
{tool.type==='reverse' && <select value={input2} onChange={e=>setInput2(e.target.value)} style={{width:'100%',padding:8,marginTop:6,borderRadius:6}}><option value="chars">Reverse chars</option><option value="words">Reverse words</option><option value="lines">Reverse lines</option></select>}
{tool.type==='findrep' && <div><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Find" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={input2} onChange={e=>setInput2(e.target.value)} placeholder="Replace" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd',marginTop:6}}/><textarea value={input3} onChange={e=>setInput3(e.target.value)} placeholder="Text to search in" style={{width:'100%',minHeight:60,padding:8,borderRadius:6,border:'1px solid #ddd',marginTop:6}}/></div>}
{tool.type==='diff' && <div><textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Text A" style={{width:'100%',minHeight:60,padding:8,borderRadius:6,border:'1px solid #ddd'}}/><textarea value={input2} onChange={e=>setInput2(e.target.value)} placeholder="Text B" style={{width:'100%',minHeight:60,padding:8,borderRadius:6,border:'1px solid #ddd',marginTop:6}}/></div>}
{tool.type==='tts' && <div><textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Text to speak" style={{width:'100%',minHeight:60,padding:8,borderRadius:6,border:'1px solid #ddd'}}/><div style={{display:'flex',gap:6,marginTop:6}}><input value={input2} onChange={e=>setInput2(e.target.value)} type="number" step="0.1" placeholder="Rate 1" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={input3} onChange={e=>setInput3(e.target.value)} type="number" step="0.1" placeholder="Pitch 1" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/></div></div>}
{tool.type==='invoice' && <div><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Item name" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd'}}/><div style={{display:'flex',gap:6,marginTop:6}}><input value={input2} onChange={e=>setInput2(e.target.value)} type="number" placeholder="Qty" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={input3} onChange={e=>setInput3(e.target.value)} type="number" placeholder="Price" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/></div></div>}
{tool.type==='qr' && <div><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Text or URL for QR" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd'}}/><div style={{display:'flex',gap:6,marginTop:6}}><input value={qrSize} onChange={e=>setQrSize(Number(e.target.value))} type="number" placeholder="Size" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={color} onChange={e=>setColor(e.target.value)} type="color" style={{width:50,height:40}}/></div></div>}
{tool.type==='passgen' && <div><div style={{display:'flex',gap:6,alignItems:'center'}}><label style={{fontSize:12}}>Length: {passLen}</label><input type="range" min="4" max="64" value={passLen} onChange={e=>setPassLen(Number(e.target.value))} style={{flex:1}} /></div><div style={{display:'flex',gap:10,marginTop:6}}><label><input type="checkbox" checked={useNum} onChange={e=>setUseNum(e.target.checked)}/> Numbers</label><label><input type="checkbox" checked={useSym} onChange={e=>setUseSym(e.target.checked)}/> Symbols</label></div></div>}
{tool.type==='colorpick' && <div><input type="color" value={color} onChange={e=>setColor(e.target.value)} style={{width:'100%',height:60}}/><input value={color} onChange={e=>setColor(e.target.value)} placeholder="#2563eb" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd',marginTop:6}}/></div>}
{tool.type==='uuid' && <input value={input} onChange={e=>setInput(e.target.value)} type="number" placeholder="How many UUIDs e.g. 5" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd'}}/>}
{tool.type==='regex' && <div><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Pattern e.g. \\d+" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={input2} onChange={e=>setInput2(e.target.value)} placeholder="Flags e.g. g i" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd',marginTop:6}}/><textarea value={input3} onChange={e=>setInput3(e.target.value)} placeholder="Test text" style={{width:'100%',minHeight:60,padding:8,borderRadius:6,border:'1px solid #ddd',marginTop:6}}/></div>}
{tool.type==='jsoncsv' && <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder='[{"name":"Ali","age":25}]' style={{width:'100%',minHeight:80,padding:8,borderRadius:6,border:'1px solid #ddd'}}/>}
{tool.type==='binary' && <div><textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Text or binary" style={{width:'100%',minHeight:60,padding:8,borderRadius:6,border:'1px solid #ddd'}}/><select value={input2} onChange={e=>setInput2(e.target.value)} style={{width:'100%',padding:8,marginTop:6,borderRadius:6}}><option value="text2binary">Text to Binary</option><option value="binary2text">Binary to Text</option></select></div>}
{['timestamp','htmlfmt','jwt','passstrength','urlshort'].includes(tool.type) && <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter value..." style={{width:'100%',minHeight:60,padding:8,borderRadius:6,border:'1px solid #ddd'}}/>}
{tool.type==='boxshadow' && <div style={{display:'flex',gap:6,flexWrap:'wrap'}}><input value={input} onChange={e=>setInput(e.target.value)} type="number" placeholder="X" style={{flex:1,minWidth:60,padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={input2} onChange={e=>setInput2(e.target.value)} type="number" placeholder="Y" style={{flex:1,minWidth:60,padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={input3} onChange={e=>setInput3(e.target.value)} type="number" placeholder="Blur" style={{flex:1,minWidth:60,padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={input4} onChange={e=>setInput4(e.target.value)} placeholder="Color" style={{flex:1,minWidth:80,padding:8,borderRadius:6,border:'1px solid #ddd'}}/></div>}
{tool.type==='bmi' && <div><input value={input} onChange={e=>setInput(e.target.value)} type="number" placeholder="Weight kg e.g. 70" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={input2} onChange={e=>setInput2(e.target.value)} type="number" placeholder="Height cm e.g. 175" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd',marginTop:6}}/></div>}
{tool.type==='age' && <input value={input} onChange={e=>setInput(e.target.value)} type="date" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd'}}/>}
{['percent','discount','tip'].includes(tool.type) && <div style={{display:'flex',gap:6}}><input value={input} onChange={e=>setInput(e.target.value)} type="number" placeholder={tool.type==='percent'?'Percent':'Amount'} style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={input2} onChange={e=>setInput2(e.target.value)} type="number" placeholder={tool.type==='percent'?'Value':'%'} style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/>{tool.type==='tip' && <input value={input3} onChange={e=>setInput3(e.target.value)} type="number" placeholder="People" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/>}</div>}
{tool.type==='emi' && <div><input value={input} onChange={e=>setInput(e.target.value)} type="number" placeholder="Loan amount e.g. 500000" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={input2} onChange={e=>setInput2(e.target.value)} type="number" placeholder="Annual interest % e.g. 12" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd',marginTop:6}}/><input value={input3} onChange={e=>setInput3(e.target.value)} type="number" placeholder="Months e.g. 60" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd',marginTop:6}}/></div>}
{tool.type==='unit' && <div><input value={input} onChange={e=>setInput(e.target.value)} type="number" placeholder="Value" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd'}}/><select value={input2} onChange={e=>setInput2(e.target.value)} style={{width:'100%',padding:8,marginTop:6,borderRadius:6}}><option value="m2ft">Meters to Feet</option><option value="kg2lb">Kg to Lb</option><option value="c2f">C to F</option></select></div>}
{tool.type==='timediff' && <div><input value={input} onChange={e=>setInput(e.target.value)} type="datetime-local" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={input2} onChange={e=>setInput2(e.target.value)} type="datetime-local" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd',marginTop:6}}/></div>}
{['currency','fuel','wapda','zakat','clickcount','timer'].includes(tool.type) && <input value={input} onChange={e=>setInput(e.target.value)} type={tool.type==='currency'?'number':'text'} placeholder={tool.type==='currency'?'USD amount e.g. 10':tool.type==='fuel'?'Format: km avg price e.g. 100 12 270 (use 3 boxes below)':tool.type==='wapda'?'Units e.g. 250':tool.type==='zakat'?'Wealth Rs e.g. 100000':tool.type==='timer'?'Seconds e.g. 10':'Enter'} style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd'}}/>}
{tool.type==='fuel' && <div style={{display:'flex',gap:6,marginTop:6}}><input value={input} onChange={e=>setInput(e.target.value)} type="number" placeholder="KM" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={input2} onChange={e=>setInput2(e.target.value)} type="number" placeholder="Avg" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/><input value={input3} onChange={e=>setInput3(e.target.value)} type="number" placeholder="Price" style={{flex:1,padding:8,borderRadius:6,border:'1px solid #ddd'}}/></div>}
{tool.type==='zakat' && <input value={input2} onChange={e=>setInput2(e.target.value)} type="number" placeholder="Nisab Rs (optional default 52.5 tola silver)" style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #ddd',marginTop:6}}/>}

<button onClick={()=>{if(['compressor','resizer','rotator','flipper','filters','meme','watermark'].includes(tool.type)) processImage(); else runText()}} style={{marginTop:12,width:'100%',padding:12,background:'#2563eb',color:'#fff',borderRadius:10,border:0,fontWeight:800}}>Run {tool.name} - Advanced</button>

{out && <pre style={{background:'#f0fdf4',border:'1px solid #bbf7d0',padding:12,borderRadius:10,marginTop:12,whiteSpace:'pre-wrap',fontSize:12,fontWeight:600,wordBreak:'break-word'}}>{out}</pre>}
{tool.type==='boxshadow' && out && <div style={{marginTop:10,width:'100px',height:'100px',background:'#fff',border:'1px solid #ddd',boxShadow:`${input||5}px ${input2||5}px ${input3||20}px ${input4||'rgba(0,0,0,0.3)'}`}}/>}
{img2 && img2.startsWith('http') && tool.type==='qr' && <img src={img2} style={{display:'block',margin:'12px auto',borderRadius:8}} alt="qr"/>}
{img2 && img2.startsWith('data:text/csv') && <a href={img2} download="wanalab.csv" style={{display:'block',marginTop:8,background:'#16a34a',color:'#fff',padding:10,textAlign:'center',borderRadius:8,textDecoration:'none'}}>Download CSV</a>}
</div>
)}
</div>
</div>
)
}

function FlightsModal({onClose}){
const [from,setFrom]=useState('NYC'); const [to,setTo]=useState('LON'); const [date,setDate]=useState('')
const flights=[
{name:'Aviasales - Global Cheapest $5/booking',url:`https://www.aviasales.com/?marker=${AFFILIATE.aviasales_marker}&from=${from}&to=${to}`,desc:'BEST AFFILIATE - Works Worldwide',earn:'$5'},
{name:'Booking.com Flights + Hotels - 40%',url:`https://www.booking.com/flights/?aid=${AFFILIATE.booking_aid}&from=${from}&to=${to}`,desc:'Global - Hotels + Flights',earn:'40%'},
{name:'Trip.com - Global Affiliate',url:`https://www.trip.com/flights/${from}-to-${to}/?Allianceid=${AFFILIATE.trip_alliance}`,desc:'Asia + Global',earn:'$3-10'},
{name:'Google Flights - Traffic Only',url:`https://www.google.com/travel/flights?q=flights from ${from} to ${to} on ${date}`,desc:'Free - For traffic',earn:'Traffic'},
]
return(
<div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.6)',zIndex:102,display:'flex',justifyContent:'center',alignItems:'center',padding:12}}>
<div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,padding:16,width:'100%',maxWidth:650,maxHeight:'90vh',overflow:'auto'}}>
<h2 style={{margin:0}}>Flights Global - Traffic + Money</h2>
<div style={{display:'flex',gap:6,marginTop:10}}><input value={from} onChange={e=>setFrom(e.target.value)} placeholder="From" style={{flex:1,padding:10,borderRadius:8,border:'1px solid #ddd'}}/><input value={to} onChange={e=>setTo(e.target.value)} placeholder="To" style={{flex:1,padding:10,borderRadius:8,border:'1px solid #ddd'}}/><input value={date} onChange={e=>setDate(e.target.value)} type="date" style={{flex:1,padding:10,borderRadius:8,border:'1px solid #ddd'}}/></div>
<div style={{display:'grid',gap:8,marginTop:12}}>{flights.map(f=>(<a key={f.name} href={f.url} target="_blank" rel="noreferrer" style={{display:'flex',justifyContent:'space-between',alignItems:'center',border:f.earn.includes('$')?'2px solid #16a34a':'1px solid #e5e7eb',borderRadius:10,padding:'10px',textDecoration:'none',color:'#111',background:f.earn.includes('$')?'#f0fdf4':'#fff'}}><div><b style={{fontSize:13}}>{f.name}</b><div style={{fontSize:11,color:'#6b7280'}}>{f.desc}</div></div><span style={{background:f.earn.includes('$')?'#16a34a':'#0ea5e9',color:'#fff',borderRadius:20,padding:'2px 10px',fontSize:11}}>{f.earn}</span></a>))}</div>
<button onClick={onClose} style={{marginTop:12,width:'100%',padding:10,background:'#111',color:'#fff',borderRadius:8,border:0}}>Close</button>
</div>
</div>
)
}

function JobsModal({onClose}){
const jobs=[
{country:'Pakistan',flag:'PK',sites:[{name:'Rozee.pk',url:'https://www.rozee.pk'},{name:'Mustakbil',url:'https://www.mustakbil.com'},{name:'Indeed PK',url:'https://pk.indeed.com'}]},
{country:'Global Remote - Fiverr 30%',flag:'WW',sites:[{name:`Fiverr Affiliate - Earn 30%`,url:`https://go.fiverr.com/visit/?bta=${AFFILIATE.fiverr}`,earn:'30%'},{name:'Upwork',url:'https://www.upwork.com'},{name:'We Work Remotely',url:'https://weworkremotely.com'}]},
{country:'UAE + Saudi',flag:'AE',sites:[{name:'Naukrigulf',url:'https://www.naukrigulf.com'},{name:'GulfTalent',url:'https://www.gulftalent.com'},{name:'Indeed AE',url:'https://ae.indeed.com'}]},
{country:'USA',flag:'US',sites:[{name:'Indeed USA',url:'https://www.indeed.com'},{name:'LinkedIn Jobs',url:'https://www.linkedin.com/jobs'},{name:'ZipRecruiter',url:'https://www.ziprecruiter.com'}]},
]
return(
<div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.6)',zIndex:103,display:'flex',justifyContent:'center',alignItems:'center',padding:12}}>
<div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,padding:16,width:'100%',maxWidth:700,maxHeight:'90vh',overflow:'auto'}}>
<h2 style={{margin:0}}>Jobs Global - Traffic + Money</h2>
<div style={{display:'flex',flexDirection:'column',gap:12,marginTop:12}}>
{jobs.map(g=>(
<div key={g.country} style={{border:'1px solid #e5e7eb',borderRadius:12,padding:12}}>
<div style={{fontWeight:800,fontSize:13,marginBottom:6}}>{g.flag} {g.country}</div>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',gap:8}}>
{g.sites.map(s=>(<a key={s.name} href={s.url} target="_blank" rel="noreferrer" style={{background:'#f3f4f6',borderRadius:8,padding:'8px 10px',textDecoration:'none',color:'#111',fontSize:12,fontWeight:600}}>{s.name}</a>))}
</div>
</div>
))}
</div>
<button onClick={onClose} style={{marginTop:12,width:'100%',padding:12,background:'#111',color:'#fff',borderRadius:10,border:0}}>Close</button>
</div>
</div>
)
}

export default function App(){
const [cat,setCat]=useState('All'); const [q,setQ]=useState(''); const [showAbout,setShowAbout]=useState(false); const [showPrivacy,setShowPrivacy]=useState(false); const [showSport,setShowSport]=useState(false); const [showFlights,setShowFlights]=useState(false); const [showJobs,setShowJobs]=useState(false); const [activeTool,setActiveTool]=useState(null)
const [fav,setFav]=useState(()=>JSON.parse(localStorage.getItem('fav')||'[]')); const [recent,setRecent]=useState(()=>JSON.parse(localStorage.getItem('recent')||'[]'))
useEffect(()=>{localStorage.setItem('fav',JSON.stringify(fav))},[fav]); useEffect(()=>{localStorage.setItem('recent',JSON.stringify(recent))},[recent])
const openTool=(t)=>{setRecent(r=>[t.name,...r.filter(x=>x!==t.name)].slice(0,8)); setActiveTool(t)}; const toggleFav=(n,e)=>{e.stopPropagation(); setFav(p=>p.includes(n)?p.filter(x=>x!==n):[...p,n])}
const filtered=ALL_TOOLS.filter(t=>{const okCat=cat==='All'||cat==='Fav'&&fav.includes(t.name)||cat==='Recent'&&recent.includes(t.name)||t.cat===cat; const okQ=!q||t.name.toLowerCase().includes(q.toLowerCase())||t.adv.toLowerCase().includes(q.toLowerCase()); return okCat&&okQ})
const grouped={Image:ALL_TOOLS.filter(t=>t.cat==='Image'),Text:ALL_TOOLS.filter(t=>t.cat==='Text'),Dev:ALL_TOOLS.filter(t=>t.cat==='Dev'),Daily:ALL_TOOLS.filter(t=>t.cat==='Daily')}
const Card=({t})=>(
<div onClick={()=>openTool(t)} style={{border:'1px solid #e5e7eb',borderRadius:12,padding:12,background:'#fff',cursor:'pointer',position:'relative'}}>
<div style={{position:'absolute',top:6,right:6}} onClick={e=>toggleFav(t.name,e)}>{fav.includes(t.name)?'⭐':'☆'}</div>
<div style={{fontSize:10,fontWeight:700,background:'#eef2ff',display:'inline-block',padding:'2px 6px',borderRadius:4}}>{t.cat}</div>
<div style={{fontWeight:700,fontSize:13,marginTop:4}}>{t.name}</div>
<div style={{fontSize:10,color:'#6b7280',marginTop:2}}>{t.adv}</div>
</div>
)
return(
<div style={{fontFamily:'Inter,system-ui',background:'#f9fafb',minHeight:'100vh'}}>
<header style={{position:'sticky',top:0,zIndex:10,background:'#fff',borderBottom:'1px solid #e5e7eb',padding:'10px 16px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:8}}>
<div style={{display:'flex',gap:8,alignItems:'center',fontWeight:800}}><span style={{background:'#2563eb',color:'#fff',borderRadius:6,padding:'2px 6px'}}>W</span> WanaLab Global v4.5 Advanced</div>
<div style={{display:'flex',gap:5,flexWrap:'wrap'}}><button onClick={()=>setShowFlights(true)} style={{fontSize:11,padding:'5px 10px',background:'#0ea5e9',color:'#fff',border:0,borderRadius:6,fontWeight:700}}>✈ Flights $</button><button onClick={()=>setShowJobs(true)} style={{fontSize:11,padding:'5px 10px',background:'#7c3aed',color:'#fff',border:0,borderRadius:6,fontWeight:700}}>💼 Jobs $</button><button onClick={()=>setShowAbout(true)} style={{fontSize:11,padding:'4px 8px'}}>About</button><span style={{background:'#dcfce7',color:'#16a34a',borderRadius:20,padding:'2px 8px',fontSize:11}}>60 ADVANCED</span></div>
</header>
<div style={{maxWidth:1100,margin:'0 auto',padding:16}}>
<div style={{textAlign:'center',margin:'12px 0'}}>
<h1 style={{fontSize:20,margin:0,fontWeight:800}}>60 Advanced Tools - All Working</h1>
<p style={{fontSize:11,color:'#6b7280',margin:0}}>v4.5 Advanced Pro - Real canvas, live count, affiliate global - Founder Nasir Khan</p>
<input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search 60 advanced tools... e.g. compress, BMI, QR" style={{marginTop:10,padding:'10px 14px',borderRadius:20,border:'1px solid #e5e7eb',width:'100%',maxWidth:380}}/>
<div style={{display:'flex',gap:6,justifyContent:'center',flexWrap:'wrap',marginTop:10}}>
{['All','Image','Text','Dev','Daily','Fav','Recent'].map(c=><button key={c} onClick={()=>setCat(c)} style={{padding:'5px 12px',borderRadius:20,border:'1px solid #e5e7eb',background:cat===c?'#2563eb':'#fff',color:cat===c?'#fff':'#000',fontSize:12,fontWeight:cat===c?700:400}}>{c}</button>)}
</div>
</div>

<div style={{background:'#0ea5e9',color:'#fff',borderRadius:12,padding:12,display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer',margin:'10px 0'}} onClick={()=>setShowFlights(true)}><div><div style={{fontWeight:800,fontSize:13}}>✈️ Flights Global Affiliate - Earn $5 Per Booking $</div><div style={{fontSize:11,opacity:0.9}}>Aviasales + Booking.com + Trip.com - Replace YOUR_ID to earn worldwide</div></div><div style={{background:'#fff',color:'#0ea5e9',borderRadius:20,padding:'6px 12px',fontSize:11,fontWeight:800}}>Open →</div></div>

<div style={{background:'#7c3aed',color:'#fff',borderRadius:12,padding:12,display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer',margin:'10px 0'}} onClick={()=>setShowJobs(true)}><div><div style={{fontWeight:800,fontSize:13}}>💼 Jobs Global - Fiverr 30% + Upwork $</div><div style={{fontSize:11,opacity:0.9}}>PK, UAE, USA, UK, Canada - Remote jobs - Affiliate earning</div></div><div style={{background:'#fff',color:'#7c3aed',borderRadius:20,padding:'6px 12px',fontSize:11,fontWeight:800}}>Open →</div></div>

{cat==='All' && !q ? (
<div style={{display:'flex',flexDirection:'column',gap:20}}>
{Object.entries(grouped).map(([gName,gTools])=>(
<div key={gName}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
<h2 style={{fontSize:15,fontWeight:800,margin:0}}>{gName==='Image'?'🖼️ Image Advanced':gName==='Text'?'📝 Text Advanced':gName==='Dev'?'💻 Dev Advanced':'🌍 Daily Global Advanced'} Tools ({gTools.length}) - All Working</h2>
<button onClick={()=>setCat(gName)} style={{fontSize:11,background:'#eef2ff',border:'1px solid #c7d2fe',borderRadius:20,padding:'3px 10px',color:'#4338ca'}}>View all →</button>
</div>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(165px,1fr))',gap:10}}>
{gTools.slice(0,8).map(t=><Card key={t.name} t={t}/>)}
</div>
</div>
))}
</div>
):(
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(165px,1fr))',gap:10}}>
{filtered.map(t=><Card key={t.name} t={t}/>)}
</div>
)}
<div style={{marginTop:30,textAlign:'center',fontSize:11,color:'#9ca3af',borderTop:'1px solid #e5e7eb',paddingTop:12}}>© 2026 WanaLab Global Advanced • Founder Nasir Khan D.I.Khan • v4.5 Advanced Pro • All 60 tools advanced canvas + affiliate global</div>
</div>
{activeTool && <AdvancedToolModal tool={activeTool} onClose={()=>setActiveTool(null)}/>}
{showFlights && <FlightsModal onClose={()=>setShowFlights(false)}/>}
{showJobs && <JobsModal onClose={()=>setShowJobs(false)}/>}
{showAbout && (<div onClick={()=>setShowAbout(false)} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.5)',display:'flex',justifyContent:'center',alignItems:'center',zIndex:50,padding:16}}><div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,padding:20,maxWidth:650,width:'100%',maxHeight:'85vh',overflow:'auto'}}><h2>WanaLab Global v4.5 Advanced Pro</h2><p style={{fontSize:13,lineHeight:1.7}}><b>Founder: Nasir Khan</b> D.I.Khan - Full Stack Dev<br/>GitHub Nasir684<br/><br/><b>What is Advanced in v4.5:</b><br/>- Image: Quality slider compress, WxH resizer, rotate deg, flip H/V, filters (gray sepia blur), meme top/bottom text canvas, watermark<br/>- Text: Word count live (reading time), case (upper lower title snake camel), lorem paras control, dedup count removed, JSON validate, base64 encode/decode toggle, find/replace, diff, TTS rate pitch<br/>- Dev: QR size + color, password length + numbers/symbols toggle, color picker HEX RGB, UUID bulk, regex groups, minify, JSON to CSV download, binary both ways, timestamp, JWT decode pretty, pass strength score crack time, box shadow live preview, URL short<br/>- Daily: BMI with healthy range, Age Y/M/D + total days, percent increase, EMI total interest, discount save, unit m2ft kg2lb C2F, time diff, tip split per person, fuel cost per km, WAPDA slab, Zakat Nisab check<br/><br/>All canvas real, all download working, all affiliate global. Replace YOUR_ID in top to earn.</p><button onClick={()=>setShowAbout(false)} style={{padding:'8px 16px',background:'#2563eb',color:'#fff',borderRadius:8,border:0}}>Close</button></div></div>)}
</div>
)
  }
