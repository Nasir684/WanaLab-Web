export default function TravelPrime(){
  const routes=[{from:'WANA',to:'DI Khan',km:120,time:'2.5h',fare:'Rs 800'},{from:'WANA',to:'Peshawar',km:380,time:'7h',fare:'Rs 2500'},{from:'WANA',to:'Islamabad',km:450,time:'8h',fare:'Rs 3000'},{from:'DI Khan',to:'Lahore',km:500,time:'8h',fare:'Rs 3500'}]
  return(
    <div style={{padding:'16px',maxWidth:'500px',margin:'0 auto'}}>
      <h2 style={{fontWeight:'900',margin:0}}>Travel Prime — Wana Routes</h2>
      <div style={{marginTop:'12px',display:'grid',gap:'10px'}}>
        {routes.map((r,i)=><div key={i} style={{background:'white',padding:'14px',borderRadius:'14px',border:'1px solid #eee',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div><div style={{fontWeight:'800',fontSize:'13px'}}>{r.from} → {r.to}</div><div style={{fontSize:'11px',color:'#666',marginTop:'4px'}}>{r.km} km • {r.time}</div></div>
          <div style={{background:'black',color:'white',padding:'6px 12px',borderRadius:'20px',fontSize:'12px',fontWeight:'700'}}>{r.fare}</div>
        </div>)}
      </div>
      <div style={{background:'white',padding:'12px',borderRadius:'12px',border:'1px solid #eee',marginTop:'12px',fontSize:'11px',color:'#666'}}>Data offline — For reference only — Confirm fare at Wana Adda</div>
    </div>
  )
}
