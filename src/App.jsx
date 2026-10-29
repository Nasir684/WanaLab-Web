import { useState } from 'react'

export default function App() {
  const [done, setDone] = useState(false)
  return (
    <div style={{ minHeight: '100vh', background: '#dbeafe', padding: '20px', fontFamily: 'system-ui' }}>
      <div style={{ maxWidth: '600px', margin: '40px auto', background: '#fff', padding: '30px', borderRadius: '20px', textAlign: 'center' }}>
        <h1 style={{ color: '#1d4ed8', fontSize: '28px' }}>✅ NEW CODE LIVE - FINAL FIX</h1>
        <p>Factory v2.3 is GONE if you see this blue page.</p>
        <div style={{ marginTop: '20px', background: '#eff6ff', padding: '20px', borderRadius: '12px' }}>
          <input type="file" accept="image/*" onChange={(e)=>{
            const f=e.target.files[0]; if(!f) return;
            const r=new FileReader();
            r.onload=(ev)=>{
              const img=new Image();
              img.onload=()=>{
                const c=document.createElement('canvas');
                c.width=img.width/2; c.height=img.height/2;
                c.getContext('2d').drawImage(img,0,0,c.width,c.height);
                const a=document.createElement('a');
                a.href=c.toDataURL('image/jpeg',0.6);
                a.download='compressed.jpg'; a.click();
                setDone(true);
              }; img.src=ev.target.result;
            }; r.readAsDataURL(f);
          }} />
          <p>↑ Select image to test compressor</p>
          {done && <p style={{color:'green', fontWeight:'bold'}}>✅ Compressor WORKING!</p>}
        </div>
      </div>
    </div>
  )
}
