import { useState } from 'react'
export default function CurrencyPrime(){
  const rates={USD:278, SAR:74, AED:75.7, GBP:350, EUR:300}
  const [pkr,setPkr]=useState('1000'); const [cur,setCur]=useState('USD')
  const result=(parseFloat(pkr)||0)/rates[cur]
  return(
    <div style={{padding:'16px',maxWidth:'500px',margin:'0 auto'}}>
      <h2 style={{fontWeight:'900',margin:0}}>Currency Prime — Wana Rates</h2>
      <p style={{fontSize:'11px',color:'#666'}}>Approx offline rates — For Wana DIK reference</p>
      <input type="number" value={pkr} onChange={e=>setPkr(e.target.value)} placeholder="PKR amount" style={{width:'100%',padding:'14px',borderRadius:'12px',border:'1px solid #ddd',marginTop:'12px',boxSizing:'border-box'}} />
      <div style={{display:'flex',gap:'8px',marginTop:'8px'}}>{Object.keys(rates).map(c=><button key={c} onClick={()=>setCur(c)} style={{flex:1,padding:'10px',borderRadius:'20px',border:c===cur?'2px solid black':'1px solid #ddd',background:c===cur?'black':'white',color:c===cur?'white':'black',fontWeight:'700'}}>{c}</button>)}</div>
      <div style={{background:'black',color:'white',padding:'20px',borderRadius:'16px',marginTop:'12px',textAlign:'center'}}>
        <div style={{fontSize:'11px',opacity:0.7}}>PKR {pkr} =</div>
        <div style={{fontSize:'26px',fontWeight:'900',marginTop:'6px'}}>{result.toFixed(2)} {cur}</div>
        <div style={{fontSize:'11px',opacity:0.6,marginTop:'8px'}}>1 {cur} ≈ {rates[cur]} PKR</div>
      </div>
    </div>
  )
}
