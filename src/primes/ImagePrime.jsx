import { useState } from 'react'
export default function ImagePrime(){
  const [img,setImg]=useState(null); const [size,setSize]=useState('50')
  const [preview,setPreview]=useState('')
  const handleFile=e=>{
    const file=e.target.files[0]; if(!file) return; setImg(file); setPreview(URL.createObjectURL(file))
  }
  const compress=async()=>{
    if(!img) return alert('Select image'); const canvas=document.createElement('canvas'); const ctx=canvas.getContext('2d'); const image=new Image(); image.src=preview; await new Promise(r=>image.onload=r)
    let w=image.width; let h=image.height; const maxDim=1024; if(w>maxDim||h>maxDim){ const ratio=Math.min(maxDim/w,maxDim/h); w*=ratio; h*=ratio }
    canvas.width=w; canvas.height=h; ctx.drawImage(image,0,0,w,h); const targetKB=parseInt(size); let quality=0.9; let dataUrl=canvas.toDataURL('image/jpeg',quality)
    while(dataUrl.length/1024 > targetKB && quality>0.1){ quality-=0.1; dataUrl=canvas.toDataURL('image/jpeg',quality) }
    const a=document.createElement('a'); a.href=dataUrl; a.download=`WanaLab-${size}KB.jpg`; a.click()
  }
  return(
    <div style={{padding:'16px',maxWidth:'500px',margin:'0 auto'}}>
      <h2 style={{fontWeight:'900',margin:0}}>Image Prime — Compress to Size</h2>
      <p style={{fontSize:'12px',color:'#666'}}>Offline • No upload • Vault safe</p>
      <input type="file" accept="image/*" onChange={handleFile} style={{width:'100%',marginTop:'12px'}} />
      {preview && <img src={preview} style={{width:'100%',borderRadius:'12px',marginTop:'12px',border:'1px solid #eee'}} />}
      <div style={{display:'flex',gap:'8px',marginTop:'12px'}}>{['20','50','200','500'].map(s=><button key={s} onClick={()=>setSize(s)} style={{flex:1,padding:'10px',borderRadius:'20px',border:s===size?'2px solid black':'1px solid #ddd',background:s===size?'black':'white',color:s===size?'white':'black',fontWeight:'700'}}>{s}KB</button>)}</div>
      <button onClick={compress} style={{width:'100%',background:'black',color:'white',padding:'14px',borderRadius:'12px',border:'none',fontWeight:'900',marginTop:'12px'}}>Compress & Download {size}KB</button>
    </div>
  )
}
