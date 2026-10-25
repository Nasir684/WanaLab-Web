export default function DiscoverySEO(){
  const targets=["CGPA Calculator UET","Attendance Calculator Pakistan","Daraz Earning Link","Student Admit Card Maker","Wana Sports Live"]
  return(
    <div style={{padding:20}}><h2 style={{fontWeight:'bold'}}>Discovery SEO — Top 20 Google Targets</h2><ul style={{marginTop:12}}>{targets.map(t=><li key={t} style={{borderBottom:'1px solid #eee',padding:'8px 0'}}>✓ /{t.toLowerCase().replace(/ /g,'-')}</li>)}</ul></div>
  )
}
