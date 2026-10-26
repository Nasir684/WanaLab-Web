import { useState } from 'react'
export default function ResumePrime(){
  const [name,setName]=useState(''); const [role,setRole]=useState(''); const [bio,setBio]=useState('')
  const cv=`${name}\n${role}\n\n${bio}\n\n-- Built with WanaLab Resume Prime`
  return(
    <div style={{padding:'16px',maxWidth:'500px',margin:'0 auto'}}>
      <h2 style={{fontWeight:'900',margin:0}}>Resume Prime — CV Maker</h2>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full Name" style={{width:'100%',padding:'12px',borderRadius:'10px',border:'1px solid #ddd',marginTop:'12px',boxSizing:'border-box'}} />
      <input value={role} onChange={e=>setRole(e.target.value)} placeholder="Role - e.g. Web Developer WANA" style={{width:'100%',padding:'12px',borderRadius:'10px',border:'1px solid #ddd',marginTop:'8px',boxSizing:'border-box'}} />
      <textarea value={bio} onChange={e=>setBio(e.target.value)} placeholder="Skills & Experience..." style={{width:'100%',height:'120px',padding:'12px',borderRadius:'10px',border:'1px solid #ddd',marginTop:'8px',boxSizing:'border-box'}} />
      <div style={{background:'white',padding:'16px',borderRadius:'12px',border:'1px solid #eee',marginTop:'12px',whiteSpace:'pre-wrap',fontSize:'13px'}}>{cv||'Preview will appear here'}</div>
      <button onClick={()=>{const blob=new Blob([cv],{type:'text/plain'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`${name||'Resume'}-WanaLab.txt`; a.click()}} style={{width:'100%',background:'black',color:'white',padding:'14px',borderRadius:'12px',border:'none',fontWeight:'900',marginTop:'12px'}}>Download TXT</button>
    </div>
  )
}
