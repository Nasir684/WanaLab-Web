export default function SportsSuper(){
  const leagues=["PSL","IPL","EPL","La Liga","BBL","International"]
  return(
    <div style={{padding:20}}><h2 style={{fontWeight:'bold'}}>Sports Super Category</h2><div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:12}}>{leagues.map(l=><span key={l} style={{border:'1px solid black',padding:'6px 12px',borderRadius:20,background:'black',color:'white'}}>{l} Live</span>)}</div><div style={{marginTop:16,border:'1px solid #ccc',padding:10}}>Live Score API: CricAPI / Football-API — Legal embed only</div></div>
  )
}
