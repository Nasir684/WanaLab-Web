import { useState } from 'react'
export default function QrPrime(){
  const [text,setText]=useState('https://wanalab.pk'); const qrUrl=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`
  return(
    <div style={{padding:'16px',maxWidth:'500px',margin:'0 auto',textAlign:'center'}}>
      <h2 style={{fontWeight:'900',margin:0}}>QR Prime — Offline Maker</h2>
      <input value={text} onChange={e=>setText(e.target.value)} placeholder="Text / Link / UPI" style={{width:'100%',padding:'14px',borderRadius:'12px',border:'1px solid #ddd',marginTop:'12px',boxSizing:'border-box'}} />
      <div style={{background:'white',padding:'16px',borderRadius:'16px',border:'1px solid #eee',marginTop:'12px'}}>
        <img src={qrUrl} alt="QR" style={{width:'260px',height:'260px'}} />
      </div>
      <a href={qrUrl} download={`WanaLab-QR.png`} target="_blank" style={{display:'block',background:'black',color:'white',padding:'14px',borderRadius:'12px',textDecoration:'none',fontWeight:'900',marginTop:'12px'}}>Download QR</a>
    </div>
  )
}
