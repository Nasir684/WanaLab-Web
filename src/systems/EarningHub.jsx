export default function EarningHub(){
  return(
    <div style={{padding:20}}>
      <h2 style={{fontWeight:'bold',fontSize:20}}>Earning Hub</h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:12}}>
        <div style={{border:'1px solid #ccc',padding:12,borderRadius:8}}><b>Daraz Affiliate</b><br/>10% commission per sale</div>
        <div style={{border:'1px solid #ccc',padding:12,borderRadius:8}}><b>Amazon Affiliate</b><br/>Global earning in $</div>
        <div style={{border:'1px solid #ccc',padding:12,borderRadius:8}}><b>JazzCash Withdraw</b><br/>Min Rs 500 auto</div>
        <div style={{border:'1px solid #ccc',padding:12,borderRadius:8}}><b>AdSense</b><br/>Auto ads on /l pages</div>
      </div>
    </div>
  )
}
