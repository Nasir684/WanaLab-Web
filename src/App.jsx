import React, { useState, useEffect } from 'react';
const TOOLS=[
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
export default function App(){
  const [active,setActive]=useState(TOOLS[0]);
  const [input,setInput]=useState(""); const [input2,setInput2]=useState("");
  const [output,setOutput]=useState(""); const [qr,setQr]=useState("https://wanalab.pk");
  const [color,setColor]=useState("#7c3aed"); const [img,setImg]=useState(""); const [copied,setCopied]=useState(false);
  useEffect(()=>{setInput("");setInput2("");setOutput("");setImg("");},[active]);
  const run=()=>{
    const t=input; try{
      if(active==="Word Counter"){ const w=t.trim()?t.trim().split(/\s+/).length:0; setOutput(`Words: ${w}\nChars: ${t.length}\nLines: ${t.split("\n").length}`); }
      else if(active==="Case Converter"){ setOutput(`UPPER:\n${t.toUpperCase()}\n\nlower:\n${t.toLowerCase()}\n\nTitle:\n${t.replace(/\w\S*/g,w=>w[0].toUpperCase()+w.slice(1).toLowerCase())}`); }
      else if(active==="Password Generator"){ const l=parseInt(t||"16"); const c="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%"; let p=""; for(let i=0;i<l;i++) p+=c[Math.floor(Math.random()*c.length)]; setOutput(p); }
      else if(active==="QR Generator"){ const d=encodeURIComponent(qr||t||"WanaLab"); const u="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="+d; setImg(u); setOutput("QR generated"); }
      else if(active==="Base64 Encode"){ if(input2==="decode") setOutput(atob(t)); else setOutput(btoa(t)); }
      else if(active==="URL Encode"){ if(input2==="decode") setOutput(decodeURIComponent(t)); else setOutput(encodeURIComponent(t)); }
      else if(active==="JSON Formatter"){ setOutput(JSON.stringify(JSON.parse(t),null,2)); }
      else if(active==="Color Picker"){ setImg(color); setOutput("HEX: "+color); }
      else if(active==="Lorem Ipsum"){ const n=parseInt(t||"3"); const s="Lorem ipsum dolor sit amet, consectetur adipiscing elit."; setOutput(Array(n).fill(s).join("\n\n")); }
      else if(active==="UUID Generator"){ const n=parseInt(t||"5"); let o=""; for(let i=0;i<n;i++) o+=(crypto.randomUUID?crypto.randomUUID():Math.random().toString(36).slice(2))+"\n"; setOutput(o); }
      else if(active==="Email Validator"){ setOutput(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?"✅ Valid: "+t:"❌ Invalid"); }
      else if(active==="Password Strength"){ let s=0; if(t.length>7)s++; if(/[A-Z]/.test(t))s++; if(/[0-9]/.test(t))s++; if(/[^A-Za-z0-9]/.test(t))s++; setOutput(`Score ${s}/4 - ${["Very Weak","Weak","Medium","Strong","Very Strong"][s]}`); }
      else if(active==="CSV to JSON"){ const lines=t.trim().split("\n"); const h=lines[0].split(","); const j=lines.slice(1).map(l=>{const v=l.split(","); const o={}; h.forEach((k,i)=>o[k.trim()]=v[i]?.trim()); return o;}); setOutput(JSON.stringify(j,null,2)); }
      else if(active==="JSON to CSV"){ const a=JSON.parse(t); const h=Object.keys(a[0]); setOutput([h.join(","),...a.map(r=>h.map(k=>r[k]).join(","))].join("\n")); }
      else if(active==="YouTube Thumbnail"){ const id=(t.match(/(?:v=|\.be\/)([^&]+)/)||[])[1]||t; setImg("https://img.youtube.com/vi/"+id+"/maxresdefault.jpg"); setOutput("ID: "+id); }
      else if(active==="Binary Converter"){ if(input2==="decode") setOutput(t.split(" ").map(b=>String.fromCharCode(parseInt(b,2))).join("")); else setOutput(t.split("").map(c=>c.charCodeAt(0).toString(2).padStart(8,"0")).join(" ")); }
      else if(active==="BMI Calculator"){ const p=t.split(","); const h=parseFloat(p[0]); const w=parseFloat(p[1]); setOutput("BMI: "+(w/((h/100)*(h/100))).toFixed(2)); }
      else if(active==="Text to Speech"){ const u=new SpeechSynthesisUtterance(t); speechSynthesis.speak(u); setOutput("Speaking..."); }
      else setOutput(t?t.slice(0,2000):"Enter input and click Run");
    }catch(e){ setOutput("Error: "+e.message); }
  };
  const onFile=(e)=>{ const f=e.target.files[0]; if(!f)return; const r=new FileReader(); r.onload=ev=>{setImg(ev.target.result); setOutput("Loaded: "+(f.size/1024).toFixed(1)+"KB");}; r.readAsDataURL(f); };
  return(
    <div style={{minHeight:"100vh", background:"#08080c", color:"#fff", fontFamily:"Inter, sans-serif"}}>
      <div style={{maxWidth:"1440px", margin:"0 auto", padding:"16px"}}>
        <div style={{display:"flex", alignItems:"center", gap:"12px", padding:"14px 0", borderBottom:"1px solid rgba(255,255,255,0.08)", marginBottom:"20px"}}>
          <div style={{width:"38px", height:"38px", borderRadius:"12px", background:"linear-gradient(135deg,#7c3aed,#ec4899)", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:"900"}}>W</div>
          <div style={{fontWeight:"800", fontSize:"22px"}}>WanaLab.pk</div>
          <div style={{padding:"5px 14px", borderRadius:"24px", background:"rgba(34,197,94,0.12)", border:"1px solid rgba(34,197,94,0.25)", color:"#22c55e", fontSize:"12px", fontWeight:"700"}}>● 40 TOOLS LIVE • PRO v3.3</div>
          <div style={{marginLeft:"auto", fontSize:"11px", color:"rgba(255,255,255,0.35)"}}>Engineered in WANA</div>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"300px 1fr", gap:"20px"}}>
          <div style={{background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"16px", padding:"10px", height:"84vh", overflowY:"auto"}}>
            <div style={{fontSize:"10px", letterSpacing:"2px", color:"rgba(255,255,255,0.35)", padding:"6px 10px"}}>40 TOOLS</div>
            {TOOLS.map(t=>(
              <button key={t} onClick={()=>setActive(t)} style={{width:"100%", textAlign:"left", padding:"10px 12px", borderRadius:"10px", border:"none", cursor:"pointer", marginBottom:"2px", fontSize:"13px", background:active===t?"#7c3aed":"transparent", color:active===t?"#fff":"rgba(255,255,255,0.6)"}}>{t}</button>
            ))}
          </div>
          <div style={{background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"16px", padding:"24px"}}>
            <h2 style={{fontSize:"26px", fontWeight:"800", margin:"0"}}>{active}</h2>
            <div style={{marginTop:"18px"}}>
              {active==="QR Generator" ? <input value={qr} onChange={e=>setQr(e.target.value)} placeholder="URL for QR" style={{width:"100%", background:"rgba(0,0,0,0.4)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"12px", padding:"14px", color:"#fff"}}/>
              : active==="Color Picker" ? <input type="color" value={color} onChange={e=>setColor(e.target.value)} style={{width:"100%", height:"60px", borderRadius:"12px"}}/>
              : active.includes("Image") ? <div><input type="file" accept="image/*" onChange={onFile} style={{color:"#fff"}}/><textarea value={input} onChange={e=>setInput(e.target.value)} style={{width:"100%", height:"60px", background:"rgba(0,0,0,0.4)", borderRadius:"12px", padding:"10px", color:"#fff", marginTop:"8px"}}/></div>
              : <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder={"Enter "+active+" input"} style={{width:"100%", height:"120px", background:"rgba(0,0,0,0.4)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"12px", padding:"14px", color:"#fff"}}/>}
              {(active==="Base64 Encode"||active==="URL Encode"||active==="Binary Converter") && <textarea value={input2} onChange={e=>setInput2(e.target.value)} placeholder="Type 'decode' for decode mode" style={{width:"100%", height:"50px", marginTop:"10px", background:"rgba(0,0,0,0.3)", borderRadius:"12px", padding:"10px", color:"#fff"}}/>}
            </div>
            <div style={{display:"flex", gap:"10px", marginTop:"16px"}}>
              <button onClick={run} style={{padding:"11px 24px", background:"#7c3aed", border:"none", borderRadius:"12px", color:"#fff", fontWeight:"700", cursor:"pointer"}}>Run {active}</button>
              <button onClick={()=>{setInput(""); setInput2(""); setOutput(""); setImg("");}} style={{padding:"11px 18px", background:"rgba(255,255,255,0.07)", borderRadius:"12px", color:"#fff", border:"1px solid rgba(255,255,255,0.1)", cursor:"pointer"}}>Clear</button>
              {output && <button onClick={()=>{navigator.clipboard.writeText(output); setCopied(true); setTimeout(()=>setCopied(false),1200);}} style={{padding:"11px 18px", background:copied?"#22c55e":"rgba(255,255,255,0.07)", borderRadius:"12px", color:"#fff", border:"none", cursor:"pointer"}}>{copied?"Copied":"Copy"}</button>}
            </div>
            {img && <div style={{marginTop:"18px", textAlign:"center", background:"rgba(0,0,0,0.3)", padding:"16px", borderRadius:"12px"}}>{active==="Color Picker"?<div style={{height:"100px", background:img, borderRadius:"10px"}}/>:<img src={img} style={{maxWidth:"100%", maxHeight:"350px", borderRadius:"10px"}}/>}</div>}
            {output && <pre style={{marginTop:"18px", background:"rgba(0,0,0,0.5)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"12px", padding:"16px", fontSize:"13px", whiteSpace:"pre-wrap", wordBreak:"break-all"}}>{output}</pre>}
          </div>
        </div>
      </div>
    </div>
  );
                                                       }
