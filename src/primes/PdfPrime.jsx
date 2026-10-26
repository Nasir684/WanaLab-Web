import { useState } from 'react'
export default function PdfPrime(){
  const [file,setFile]=useState(null); const [url,setUrl]=useState('')
  const handle=e=>{ const f=e.target.files[0]; if(!f) return; setFile(f); setUrl(URL.createObjectURL(f)) }
  return(
    <div style={{padding:'16px',maxWidth:'600px',margin:'0 auto'}}>
      <h2 style={{fontWeight:'900',margin:0}}>PDF Prime — Vault</h2>
      <p style={{fontSize:'12px',color:'#666'}}>Offline PDF Viewer — No upload to server</p>
      <input type="file" accept="application/pdf" onChange={handle} style={{width:'100%',marginTop:'12px'}} />
      {file && <div style={{background:'white',padding:'10px',borderRadius:'10px',border:'1px solid #eee',marginTop:'12px',fontSize:'12px'}}>📄 {file.name} — {(file.size/1024/1024).toFixed(2)} MB</div>}
      {url && <iframe src={url} style={{width:'100%',height:'70vh',borderRadius:'12px',border:'1px solid #ddd',marginTop:'12px'}} />}
    </div>
  )
}
