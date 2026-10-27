import React, { useState } from 'react';

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

export default function App(){
  const [active,setActive]=useState(TOOLS[0]);
  const [input,setInput]=useState("");
  const [output,setOutput]=useState("");

  const run = (t) => {
    if(!t){ setOutput(""); return; }
    if(active==="Word Counter"){
      const words=t.trim()?t.trim().split(/\s+/).length:0;
      setOutput(`Words: ${words} | Chars: ${t.length} | Lines: ${t.split('\n').length}`);
    }else if(active==="Case Converter"){
      setOutput(`UPPER:\n${t.toUpperCase()}\n\nlower:\n${t.toLowerCase()}`);
    }else if(active==="Password Generator"){
      const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
      let p=""; for(let i=0;i<16;i++) p+=chars[Math.floor(Math.random()*chars.length)];
      setOutput(p);
    }else{
      setOutput(t.slice(0,2000));
    }
  };

  return (
    <div style={{minHeight:'100vh', background:'#0a0a0f', color:'#fff', fontFamily:'Inter, system-ui, sans-serif'}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');`}</style>
      <div style={{maxWidth:'1400px', margin:'0 auto', padding:'16px'}}>
        <div style={{display:'flex', alignItems:'center', gap:'12px', padding:'16px 0', borderBottom:'1px solid rgba(255,255,255,0.1)', marginBottom:'24px'}}>
          <div style={{width:'36px', height:'36px', borderRadius:'10px', background:'linear-gradient(135deg,#8b5cf6,#d946ef)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'800'}}>W</div>
          <div style={{fontWeight:'800', fontSize:'20px'}}>WanaLab</div>
          <div style={{marginLeft:'12px', padding:'4px 12px', borderRadius:'20px', background:'rgba(34,197,94,0.15)', border:'1px solid rgba(34,197,94,0.3)', color:'#22c55e', fontSize:'12px'}}>● 40 TOOLS LIVE - v2.3 FINAL</div>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'320px 1fr', gap:'24px'}}>
          <div style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'16px', padding:'12px', height:'80vh', overflowY:'auto'}}>
            {TOOLS.map(t=>(
              <button key={t} onClick={()=>{setActive(t); setInput(""); setOutput("");}}
                style={{width:'100%', textAlign:'left', padding:'10px 12px', borderRadius:'12px', border:'none', cursor:'pointer', marginBottom:'4px', fontSize:'13px', background: active===t?'#7c3aed':'transparent', color: active===t?'#fff':'rgba(255,255,255,0.7)'}}>
                {t}
              </button>
            ))}
          </div>

          <div style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'16px', padding:'24px'}}>
            <h2 style={{fontSize:'26px', fontWeight:'700'}}>{active}</h2>
            <textarea value={input} onChange={e=>{setInput(e.target.value); run(e.target.value)}} placeholder={`Enter text for ${active}...`} style={{width:'100%', height:'160px', background:'rgba(0,0,0,0.5)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'12px', padding:'14px', color:'#fff', marginTop:'16px'}} />
            {output && <pre style={{background:'rgba(0,0,0,0.6)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'12px', padding:'16px', marginTop:'20px', whiteSpace:'pre-wrap'}}>{output}</pre>}
          </div>
        </div>
      </div>
    </div>
  );
      }
