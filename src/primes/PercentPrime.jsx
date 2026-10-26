import { useState } from 'react'
export default function PercentPrime(){
  const [num,setNum]=useState(''); const [per,setPer]=useState('')
  const val= parseFloat(num)*parseFloat(per)/100 || 0
  const add= parseFloat(num)+val || 0; const off= parseFloat(num)-val || 0
  return(
    <div style={{padding:'16px',maxWidth:'500px',margin:'0 auto'}}>
      <h2 style={{fontWeight:'900',margin:0}}>Percent Prime — Bazaar Calc</h2>
      <input type="number" value={num} onChange={e=>setNum(e.target.value)} placeholder="Price: e.g. 2500" style={{width:'100%',padding:'14px',borderRadius:'12px',border:'1px solid #ddd',marginTop:'12px',boxSizing:'border-box'}} />
      <input type="number" value={per} onChange={e=>setPer(e.target.value)} placeholder="Percent: e.g. 15" style={{width:'100%',padding:'14px',borderRadius:'12px',border:'1px solid #ddd',marginTop:'8px',boxSizing:'border-box'}} />
      <div style={{background:'black',color:'white',padding:'16px',borderRadius:'16px',marginTop:'12px'}}>
        <div style={{fontSize:'11px',opacity:0.7}}>{per}% of {num} =</div>
        <div style={{fontSize:'22px',fontWeight:'900',marginTop:'6px'}}>Rs {val.toLocaleString()}</div>
        <div style={{marginTop:'10px',fontSize:'13px',display:'flex',gap:'8px'}}><span style={{background:'#222',padding:'6px 10px',borderRadius:'20px'}}>+{per}% = {add.toLocaleString()}</span><span style={{background:'#222',padding:'6px 10px',borderRadius:'20px'}}>-{per}% = {off.toLocaleString()}</span></div>
      </div>
    </div>
  )
}
