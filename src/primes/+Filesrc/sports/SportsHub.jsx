import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SportsHub(){
  const leagues=[
    {id:'psl', name:'PSL 2026', flag:'🇵🇰', teams:'Peshawar Zalmi, Multan, Lahore...', color:'#01411c'},
    {id:'ipl', name:'IPL 2026', flag:'🇮🇳', teams:'CSK, MI, RCB...', color:'#0047ab'},
    {id:'epl', name:'EPL', flag:'🏴󐁧󐁢󐁥󐁮󐁧󐁿', teams:'Man Utd, Arsenal, City...', color:'#37003c'},
    {id:'worldcup', name:'T20 World Cup', flag:'🏆', teams:'All teams', color:'#000'},
  ]
  return(
    <div style={{padding:'16px',maxWidth:'600px',margin:'0 auto'}}>
      <div style={{background:'black',color:'white',padding:'20px',borderRadius:'20px'}}>
        <h1 style={{margin:0,fontSize:'22px',fontWeight:'900'}}>🏏 WanaLab Sports Hub</h1>
        <p style={{margin:'6px 0 0',fontSize:'12px',opacity:0.7}}>Live Scores • Points Table • PSL IPL EPL • Offline Schedules</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px',marginTop:'16px'}}>
        {leagues.map(l=>(
          <Link key={l.id} to={`/sports/${l.id}`} style={{background:'white',padding:'16px',borderRadius:'16px',border:'1px solid #eee',textDecoration:'none',color:'black',borderLeft:`6px solid ${l.color}`}}>
            <div style={{fontSize:'22px'}}>{l.flag}</div>
            <div style={{fontWeight:'800',marginTop:'6px'}}>{l.name}</div>
            <div style={{fontSize:'11px',color:'#666',marginTop:'4px'}}>{l.teams}</div>
          </Link>
        ))}
      </div>
      <div style={{background:'white',padding:'14px',borderRadius:'14px',border:'1px dashed #ccc',marginTop:'16px',textAlign:'center'}}>
        <div style={{fontSize:'12px',fontWeight:'800'}}>AD — Sports Header</div>
        <div style={{fontSize:'11px',color:'#999',marginTop:'4px'}}>AdSense Sports Slot — High CPC for PSL/IPL</div>
      </div>
    </div>
  )
}

export function LeaguePage({ league }){
  const data={
    psl:{name:'PSL 2026', matches:[{t1:'Peshawar Zalmi vs Multan', time:'Today 7PM', venue:'Lahore'}, {t1:'Lahore vs Karachi', time:'Tomorrow 7PM', venue:'Karachi'}], table:[{team:'Peshawar Zalmi', m:5,w:4},{team:'Multan Sultans', m:5,w:3},{team:'Lahore Qalandars', m:5,w:3}]},
    ipl:{name:'IPL 2026', matches:[{t1:'CSK vs MI', time:'Today 7:30PM', venue:'Chennai'}, {t1:'RCB vs KKR', time:'Tomorrow', venue:'Bangalore'}], table:[{team:'CSK', m:6,w:5},{team:'MI', m:6,w:4}]},
    epl:{name:'EPL', matches:[{t1:'Arsenal vs Man City', time:'Sat 8PM', venue:'Emirates'}], table:[{team:'Arsenal', m:20,w:14},{team:'Man City', m:20,w:13}]},
    worldcup:{name:'T20 World Cup', matches:[{t1:'Pakistan vs India', time:'Coming Soon', venue:'USA'}], table:[{team:'Pakistan', m:0,w:0}]},
  }
  const d=data[league]||data.psl
  const share=()=>{const url=window.location.href; window.open(`https://wa.me/?text=${encodeURIComponent(`🔥 ${d.name} Live on WanaLab Sports Hub ${url}`)}`,'_blank')}
  return(
    <div style={{padding:'16px',maxWidth:'500px',margin:'0 auto'}}>
      <h2 style={{fontWeight:'900',margin:0}}>{d.name}</h2>
      <button onClick={share} style={{background:'#25D366',color:'white',padding:'10px 14px',borderRadius:'20px',border:'none',fontWeight:'700',marginTop:'8px',fontSize:'12px'}}>Share on WhatsApp</button>
      
      <div style={{background:'black',color:'white',padding:'14px',borderRadius:'14px',marginTop:'16px'}}><div style={{fontSize:'12px',fontWeight:'800'}}>UPCOMING MATCHES</div>{d.matches.map((m,i)=><div key={i} style={{background:'#111',padding:'10px',borderRadius:'10px',marginTop:'8px'}}><div style={{fontSize:'13px',fontWeight:'700'}}>{m.t1}</div><div style={{fontSize:'11px',opacity:0.7}}>{m.time} — {m.venue}</div></div>)}</div>
      
      <div style={{background:'white',padding:'14px',borderRadius:'14px',border:'1px solid #eee',marginTop:'12px'}}><div style={{fontSize:'12px',fontWeight:'800'}}>POINTS TABLE</div>{d.table.map((r,i)=><div key={i} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid #f5f5f5',fontSize:'13px'}}><span>{i+1}. {r.team}</span><span style={{fontWeight:'700'}}>{r.w}W/{r.m}M</span></div>)}</div>
      
      <div style={{background:'white',padding:'12px',borderRadius:'12px',border:'1px dashed #ccc',marginTop:'12px',textAlign:'center',fontSize:'11px',color:'#999'}}>AD — Sports High CPC — PSL Betting Keywords Rs 50-150 CPC</div>

      <div style={{background:'white',padding:'12px',borderRadius:'12px',border:'1px solid #eee',marginTop:'12px'}}>
        <div style={{fontSize:'12px',fontWeight:'800'}}>🔥 Daraz Cricket Deals (Earn)</div>
        <a href="https://s.daraz.pk/s.xxx?psl" target="_blank" style={{display:'block',background:'#f5f5f5',padding:'10px',borderRadius:'10px',marginTop:'8px',textDecoration:'none',color:'black',fontSize:'12px'}}>PSL Official Jersey Rs 1299 → (WanaLab earns)</a>
      </div>
    </div>
  )
}
