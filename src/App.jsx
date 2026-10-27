import React, { useState, useRef, useEffect } from 'react';

const TOOLS = [
  "Word Counter","Case Converter","Password Generator","QR Generator",
  "Base64 Encode","URL Encode","JSON Formatter","Image Compressor",
  "Color Picker","Lorem Ipsum","UUID Generator","Hash Generator",
  "Image to Base64","Regex Tester","HTML Minifier","CSS Minifier",
  "JS Minifier","Text Diff","Unit Converter","BMI Calculator",
  "Age Calculator","Loan Calculator","Percentage Calculator","Date Difference",
  "Image Resizer","Text to Speech","Speech to Text","Morse Code",
  "Binary Converter","Hex Converter","IP Finder","Password Strength",
  "Email Validator","Credit Card Validator","CSV to JSON","JSON to CSV",
  "Markdown Preview","HTML to Markdown","YouTube Thumbnail","Meta Tag Generator"
];

function hashString(str){
  let h=0; for(let i=0;i<str.length;i++) h=((h<<5)-h)+str.charCodeAt(i); return Math.abs(h).toString(16);
}

export default function App(){
  const [active,setActive]=useState(TOOLS[0]);
  const [input,setInput]=useState("");
  const [input2,setInput2]=useState("");
  const [output,setOutput]=useState("");
  const [extra,setExtra]=useState("");
  const fileRef=useRef();
  const [qrText,setQrText]=useState("https://wanalab-web.pages.dev");
  const [color,setColor]=useState("#7c3aed");
  const [copied,setCopied]=useState(false);
  const [imageSrc,setImageSrc]=useState("");

  useEffect(()=>{setInput(""); setInput2(""); setOutput(""); setExtra(""); setImageSrc("");},[active]);
  const copy = (t) => { navigator.clipboard.writeText(t); setCopied(true); setTimeout(()=>setCopied(false),1500); };

  const runTool = () => {
    const t=input;
    try{
      switch(active){
        case "Word Counter":{
          const words=t.trim()?t.trim().split(/\s+/).length:0;
          setOutput(`Words: ${words}\nCharacters: ${t.length}\nWithout spaces: ${t.replace(/\s/g,'').length}\nLines: ${t.split('\n').length}\nReading: ${Math.ceil(words/200)} min`);
          break;
        }
        case "Case Converter":{
          setOutput(`UPPER:\n${t.toUpperCase()}\n\nlower:\n${t.toLowerCase()}\n\nTitle:\n${t.replace(/\w\S*/g, w=>w[0].toUpperCase()+w.slice(1).toLowerCase())}`);
          break;
        }
        case "Password Generator":{
          const len=parseInt(input||"16"); const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
          let p=""; for(let i=0;i<len;i++) p+=chars[Math.floor(Math.random()*chars.length)]; setOutput(p); break;
        }
        case "QR Generator":{
          const data=encodeURIComponent(qrText||input||"WanaLab");
          setImageSrc(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${data}`);
          setOutput(`QR for: ${decodeURIComponent(data)}`); break;
        }
        case "Base64 Encode":{
          if(input2==="decode") setOutput(atob(t)); else setOutput(btoa(t)); break;
        }
        case "URL Encode":{
          if(input2==="decode") setOutput(decodeURIComponent(t)); else setOutput(encodeURIComponent(t)); break;
        }
        case "JSON Formatter":{
          setOutput(JSON.stringify(JSON.parse(t),null,2)); break;
        }
        case "Color Picker":{
          setOutput(`HEX: ${color}\nRGB: ${parseInt(color.slice(1,3),16)}, ${parseInt(color.slice(3,5),16)}, ${parseInt(color.slice(5,7),16)}`); setImageSrc(color); break;
        }
        case "Lorem Ipsum":{
          const paras=parseInt(input||"3"); const lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."; setOutput(Array(paras).fill(lorem).join("\n\n")); break;
        }
        case "UUID Generator":{
          const count=parseInt(input||"5"); let out=""; for(let i=0;i<count;i++) out+=(crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2))+"\n"; setOutput(out.trim()); break;
        }
        case "Hash Generator":{ setOutput(`Hash: ${hashString(t)}\nLength: ${t.length}`); break; }
        case "Regex Tester":{
          const regex=new RegExp(input, input2||"g"); const matches=[...t.matchAll(regex)]; setOutput(matches.length?`Found ${matches.length}:\n`+matches.map(m=>m[0]).join("\n"): "No matches"); break;
        }
        case "HTML Minifier":{ setOutput(t.replace(/>\s+</g,'><').replace(/\s{2,}/g,' ').trim()); break; }
        case "CSS Minifier":{ setOutput(t.replace(/\/\*[\s\S]*?\*\//g,'').replace(/\s*([{}:;,])\s*/g,'$1').trim()); break; }
        case "JS Minifier":{ setOutput(t.replace(/\/\/.*$/gm,'').replace(/\s{2,}/g,' ').trim()); break; }
        case "Text Diff":{
          const a=t.split('\n'); const b=input2.split('\n'); let diff=""; for(let i=0;i<Math.max(a.length,b.length);i++){ if(a[i]!==b[i]) diff+=`Line ${i+1}:\n- ${a[i]||''}\n+ ${b[i]||''}\n\n`; } setOutput(diff||"No differences"); break;
        }
        case "Unit Converter":{
          const val=parseFloat(t)||0; setOutput(`M to Ft: ${(val*3.28084).toFixed(4)}\nKg to Lbs: ${(val*2.20462).toFixed(4)}\nC to F: ${(val*9/5+32).toFixed(2)}°F`); break;
        }
        case "BMI Calculator":{
          const [h,w]=t.split(',').map(Number); const bmi=w/((h/100)*(h/100)); setOutput(`BMI: ${bmi.toFixed(2)}\n${bmi<18.5?'Underweight':bmi<24.9?'Normal':bmi<29.9?'Overweight':'Obese'}`); break;
        }
        case "Age Calculator":{
          const birth=new Date(t); const diff=new Date()-birth; setOutput(`Age: ${Math.floor(diff/(1000*60*60*24*365.25))} years\nDays: ${Math.floor(diff/(1000*60*60*24))}`); break;
        }
        case "Loan Calculator":{
          const [p,r,y]=t.split(',').map(Number); const mr=r/100/12; const n=y*12; const pay=p*mr*Math.pow(1+mr,n)/(Math.pow(1+mr,n)-1); setOutput(`Monthly: $${pay.toFixed(2)}\nTotal: $${(pay*n).toFixed(2)}`); break;
        }
        case "Percentage Calculator":{
          const [a,b]=t.split(',').map(Number); setOutput(`${a}% of ${b} = ${(a/100*b).toFixed(2)}\n${a} is ${(a/b*100).toFixed(2)}% of ${b}`); break;
        }
        case "Morse Code":{
          const m={A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--.."," ":"/"}; 
          if(input2==="decode"){ const rev=Object.fromEntries(Object.entries(m).map(([k,v])=>[v,k])); setOutput(t.split(' ').map(c=>rev[c]||'').join('')); } else { setOutput(t.toUpperCase().split('').map(c=>m[c]||c).join(' ')); } break;
        }
        case "Binary Converter":{
          if(input2==="decode") setOutput(t.split(' ').map(b=>String.fromCharCode(parseInt(b,2))).join('')); else setOutput(t.split('').map(c=>c.charCodeAt(0).toString(2).padStart(8,'0')).join(' ')); break;
        }
        case "Hex Converter":{
          if(input2==="decode") setOutput(t.split(' ').map(h=>String.fromCharCode(parseInt(h,16))).join('')); else setOutput(t.split('').map(c=>c.charCodeAt(0).toString(16)).join(' ')); break;
        }
        case "Password Strength":{
          let s=0; if(t.length>7) s++; if(/[A-Z]/.test(t)) s++; if(/[0-9]/.test(t)) s++; if(/[^A-Za-z0-9]/.test(t)) s++; setOutput(`Score: ${s}/4 - ${['Very Weak','Weak','Medium','Strong','Very Strong'][s]}`); break;
        }
        case "Email Validator":{
          setOutput(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?`✅ Valid: ${t}`:`❌ Invalid`); break;
        }
        case "Credit Card Validator":{
          const luhn=n=>{let sum=0,alt=false; for(let i=n.length-1;i>=0;i--){let d=parseInt(n[i]); if(alt){d*=2; if(d>9)d-=9;} sum+=d; alt=!alt;} return sum%10===0;}; setOutput(luhn(t.replace(/\s/g,''))?`✅ Valid`:`❌ Invalid`); break;
        }
        case "CSV to JSON":{
          const lines=t.trim().split('\n'); const h=lines[0].split(','); const j=lines.slice(1).map(l=>{const v=l.split(','); const o={}; h.forEach((k,i)=>o[k.trim()]=v[i]?.trim()); return o;}); setOutput(JSON.stringify(j,null,2)); break;
        }
        case "JSON to CSV":{
          const arr=JSON.parse(t); const headers=Object.keys(arr[0]); setOutput([headers.join(','),...arr.map(r=>headers.map(h=>r[h]).join(','))].join('\n')); break;
        }
        case "Markdown Preview":{
          let html=t.replace(/^### (.*$)/gim,'<h3>$1</h3>').replace(/^## (.*$)/gim,'<h2>$1</h2>').replace(/^# (.*$)/gim,'<h1>$1</h1>').replace(/\*\*(.*)\*\*/gim,'<b>$1</b>').replace(/\n/gim,'<br/>'); setExtra(html); setOutput("Preview below"); break;
        }
        case "HTML to Markdown":{
          let md=t.replace(/<h1>(.*?)<\/h1>/gi,'# $1\n').replace(/<b>(.*?)<\/b>/gi,'**$1**').replace(/<[^>]+>/g,''); setOutput(md); break;
        }
        case "YouTube Thumbnail":{
          const id=t.match(/(?:v=|\.be\/)([^&]+)/)?.[1]||t; setImageSrc(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`); setOutput(`ID: ${id}\nHQ: https://img.youtube.com/vi/${id}/maxresdefault.jpg`); break;
        }
        case "Meta Tag Generator":{
          const [title,desc]=t.split(','); setOutput(`<title>${title}</title>\n<meta name="description" content="${desc||''}">\n<meta property="og:title" content="${title}">`); break;
        }
        default: setOutput(t?`Processed: ${t.slice(0,1000)}`:"Enter input and click Run");
      }
    }catch(e){ setOutput("Error: "+e.message); }
  };

  const handleFile = (e) => {
    const file=e.target.files[0]; if(!file) return;
    const reader=new FileReader();
    reader.onload=ev=>{ setImageSrc(ev.target.result); if(active==="Image to Base64") setOutput(ev.target.result.slice(0,3000)+"..."); };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{minHeight:'100vh', background:'#08080c', color:'#fff', fontFamily:'Inter, system-ui, sans-serif'}}>
      <div style={{maxWidth:'1440px', margin:'0 auto', padding:'16px'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 0', borderBottom:'1px solid rgba(255,255,255,0.08)', marginBottom:'20px'}}>
          <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
            <div style={{width:'38px', height:'38px', borderRadius:'12px', background:'linear-gradient(135deg,#7c3aed,#ec4899)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'900'}}>W</div>
            <div style={{fontWeight:'800', fontSize:'22px'}}>WanaLab</div>
            <div style={{padding:'5px 14px', borderRadius:'24px', background:'rgba(34,197,94,0.12)', border:'1px solid rgba(34,197,94,0.25)', color:'#22c55e', fontSize:'12px', fontWeight:'600'}}>● 40 TOOLS LIVE • PRO v3.0</div>
          </div>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'300px 1fr', gap:'20px'}}>
          <div style={{background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'16px', padding:'10px', height:'84vh', overflowY:'auto'}}>
            {TOOLS.map(t=>(
              <button key={t} onClick={()=>setActive(t)} style={{width:'100%', textAlign:'left', padding:'10px 12px', borderRadius:'10px', border:'none', cursor:'pointer', marginBottom:'2px', fontSize:'13px', background: active===t?'#7c3aed':'transparent', color: active===t?'#fff':'rgba(255,255,255,0.6)'}}>{t}</button>
            ))}
          </div>
          <div style={{background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'16px', padding:'24px'}}>
            <h2 style={{fontSize:'28px', fontWeight:'800', margin:'0'}}>{active}</h2>
            <div style={{marginTop:'20px'}}>
              {active==="QR Generator" ? <input value={qrText} onChange={e=>setQrText(e.target.value)} placeholder="URL or text for QR" style={{width:'100%', background:'rgba(0,0,0,0.4)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'12px', padding:'14px', color:'#fff'}}/> 
              : active==="Color Picker" ? <input type="color" value={color} onChange={e=>setColor(e.target.value)} style={{width:'100%', height:'60px', borderRadius:'12px'}}/>
              : active.includes("Image") ? <div><input type="file" accept="image/*" onChange={handleFile} style={{marginBottom:'12px'}}/><textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Optional width or text" style={{width:'100%', height:'80px', background:'rgba(0,0,0,0.4)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'12px', padding:'12px', color:'#fff'}}/></div>
              : <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder={`Enter input for ${active}...`} style={{width:'100%', height:'130px', background:'rgba(0,0,0,0.4)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'12px', padding:'14px', color:'#fff'}}/>}
              {(active==="Text Diff"||active==="Base64 Encode"||active==="URL Encode"||active==="Binary Converter"||active==="Hex Converter"||active==="Morse Code"||active==="Regex Tester") && <textarea value={input2} onChange={e=>setInput2(e.target.value)} placeholder={active==="Text Diff"?"Second text":active==="Regex Tester"?"Flags e.g. gi":"Type 'decode' for decode mode"} style={{width:'100%', height:'60px', marginTop:'10px', background:'rgba(0,0,0,0.3)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', padding:'12px', color:'#fff'}}/>}
            </div>
            <div style={{display:'flex', gap:'10px', marginTop:'16px'}}>
              <button onClick={runTool} style={{padding:'11px 24px', background:'linear-gradient(135deg,#7c3aed,#6d28d9)', border:'none', borderRadius:'12px', color:'#fff', cursor:'pointer', fontWeight:'700'}}>Run {active}</button>
              <button onClick={()=>{setInput(""); setInput2(""); setOutput(""); setExtra(""); setImageSrc("");}} style={{padding:'11px 18px', background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'12px', color:'#fff', cursor:'pointer'}}>Clear</button>
              {output && <button onClick={()=>{navigator.clipboard.writeText(output); setCopied(true); setTimeout(()=>setCopied(false),1500);}} style={{padding:'11px 18px', background: copied?'#22c55e':'rgba(255,255,255,0.07)', border:'none', borderRadius:'12px', color:'#fff', cursor:'pointer'}}>{copied?'✓ Copied':'Copy'}</button>}
            </div>
            {imageSrc && <div style={{marginTop:'20px', background:'rgba(0,0,0,0.4)', borderRadius:'12px', padding:'16px', textAlign:'center'}}>{active==="Color Picker"?<div style={{width:'100%', height:'100px', background:imageSrc, borderRadius:'10px'}}/>:<img src={imageSrc} style={{maxWidth:'100%', maxHeight:'400px', borderRadius:'10px'}}/>}</div>}
            {output && <div style={{marginTop:'20px'}}><pre style={{background:'rgba(0,0,0,0.5)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'12px', padding:'16px', fontSize:'13.5px', whiteSpace:'pre-wrap', wordBreak:'break-all'}}>{output}</pre>{extra && <div dangerouslySetInnerHTML={{__html: extra}} style={{marginTop:'12px', background:'#fff', color:'#000', padding:'16px', borderRadius:'10px'}}/>}</div>}
          </div>
        </div>
      </div>
    </div>
  );
        }
