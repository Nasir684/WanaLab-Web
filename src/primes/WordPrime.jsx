import { useState } from 'react'
export default function WordPrime(){
  const [text,setText]=useState('')
  const words=text.trim()?text.trim().split(/\s+/).length:0
  const chars=text.length
  const charsNoSpace=text.replace(/\s/g,'').length
  const lines=text?text.split('\n').length:0
  const reading=Math.ceil(words/200)
  return(
    <div style={{padding:'16px',maxWidth:'500px',margin:'0 auto'}}>
      <h2 style={{fontWeight:'900',margin:0}}>Word Prime — Thesis Safe</h2>
      <p style={{fontSize:'12px',color:'#666'}}>Offline • No upload • 100% private</p>
      <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Paste thesis / assignment here..." style={{width:'100%',height:'200px',padding:'14px',borderRadius:'12px',border:'1px solid #ddd',marginTop:'12px',boxSizing:'border-box'}} />
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:'8px',marginTop:'12px'}}>
        <div style={{background:'black',color:'white',padding:'10px',borderRadius:'12px',textAlign:'center'}}><div style={{fontSize:'10px',opacity:0.7}}>WORDS</div><div style={{fontWeight:'900'}}>{words}</div></div>
        <div style={{background:'white',padding:'10px',borderRadius:'12px',textAlign:'center',border:'1px solid #eee'}}><div style={{fontSize:'10px',color:'#999'}}>CHARS</div><div style={{fontWeight:'800'}}>{chars}</div></div>
        <div style={{background:'white',padding:'10px',borderRadius:'12px',textAlign:'center',border:'1px solid #eee'}}><div style={{fontSize:'10px',color:'#999'}}>NO SPACE</div><div style={{fontWeight:'800'}}>{charsNoSpace}</div></div>
        <div style={{background:'white',padding:'10px',borderRadius:'12px',textAlign:'center',border:'1px solid #eee'}}><div style={{fontSize:'10px',color:'#999'}}>READ</div><div style={{fontWeight:'800'}}>{reading}m</div></div>
      </div>
      <button onClick={()=>{setText('');}} style={{width:'100%',padding:'12px',borderRadius:'10px',border:'1px solid #ddd',marginTop:'10px',background:'white'}}>Clear</button>
    </div>
  )
}
