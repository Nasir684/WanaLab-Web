import { useState, useEffect } from 'react'

export default function LinkEngine(){
  const [originalUrl, setOriginalUrl] = useState('')
  const [shortId, setShortId] = useState('')
  const [links, setLinks] = useState(()=>JSON.parse(localStorage.getItem('wanalab_links')||'[]'))

  const createLink = () => {
    if(!originalUrl) return alert('Paste a link first')
    const id = Math.random().toString(36).substring(2,6)
    const newLink = { id, original: originalUrl, clicks: 0, earnings: 0, short: `wanalab.netlify.app/l/${id}` }
    const updated = [newLink, ...links]
    setLinks(updated)
    localStorage.setItem('wanalab_links', JSON.stringify(updated))
    setShortId(id)
    setOriginalUrl('')
  }

  const shareWhatsApp = (id) => {
    const url = `https://wanalab.netlify.app/l/${id}`
    window.open(`https://wa.me/?text=${encodeURIComponent('Check this deal: '+url+' - Earn via WanaLab!')}`)
  }

  const totalClicks = links.reduce((a,b)=>a+b.clicks,0)
  const totalEarn = links.reduce((a,b)=>a+b.earnings,0)

  return (
    <div style={{padding:20,maxWidth:600,margin:'auto'}}>
      <h1 style={{fontSize:24,fontWeight:'bold'}}>Link Engine - Paste Any Link → Earn</h1>
      <p>Daraz / Amazon / Any Link = Your Earning Link</p>
      <div style={{display:'flex',gap:8,marginTop:16}}>
        <input value={originalUrl} onChange={e=>setOriginalUrl(e.target.value)} placeholder="Paste Daraz/Amazon link here..." style={{flex:1,border:'1px solid #ccc',padding:12,borderRadius:8}}/>
        <button onClick={createLink} style={{background:'black',color:'white',padding:'0 20px',borderRadius:8}}>Convert</button>
      </div>
      {shortId && <div style={{marginTop:16,padding:12,background:'#e8ffe8',border:'1px solid green',borderRadius:8}}>
        <b>Your Link:</b> wanalab.netlify.app/l/{shortId} 
        <button onClick={()=>shareWhatsApp(shortId)} style={{marginLeft:10,background:'green',color:'white',padding:'4px 10px',borderRadius:4}}>WhatsApp</button>
      </div>}
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:10,marginTop:20}}>
        <div style={{border:'1px solid #ccc',padding:12,borderRadius:8}}><b>{totalClicks}</b><br/>Clicks</div>
        <div style={{border:'1px solid #ccc',padding:12,borderRadius:8}}><b>Rs {totalEarn}</b><br/>Earnings</div>
        <div style={{border:'1px solid #ccc',padding:12,borderRadius:8}}><button style={{background:'blue',color:'white',padding:'8px',width:'100%',borderRadius:4}}>Withdraw JazzCash</button></div>
      </div>
      <h3 style={{marginTop:20,fontWeight:'bold'}}>My Links</h3>
      {links.map(l=><div key={l.id} style={{display:'flex',justifyContent:'space-between',borderBottom:'1px solid #eee',padding:'8px 0',fontSize:13}}><span>wanalab.netlify.app/l/{l.id}</span><span>{l.clicks} clicks | Rs {l.earnings}</span></div>)}
    </div>
  )
}
