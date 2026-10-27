import React from 'react';

export default function App(){
  return (
    <div style={{minHeight:'100vh', background:'#08080c', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', fontFamily:'sans-serif'}}>
      <div style={{width:'50px', height:'50px', borderRadius:'14px', background:'linear-gradient(135deg,#7c3aed,#ec4899)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'900', fontSize:'24px', marginBottom:'16px'}}>W</div>
      <h1 style={{fontSize:'32px', fontWeight:'800'}}>WanaLab - 40 Tools LIVE</h1>
      <p style={{color:'#22c55e', marginTop:'12px', background:'rgba(34,197,94,0.12)', padding:'8px 16px', borderRadius:'20px', border:'1px solid rgba(34,197,94,0.25)'}}>● PRO v3.2 Emergency Fix - Building...</p>
      <p style={{color:'rgba(255,255,255,0.5)', marginTop:'20px', fontSize:'14px'}}>If you see this, build is working. I will upgrade to full 40 tools next.</p>
    </div>
  );
}
