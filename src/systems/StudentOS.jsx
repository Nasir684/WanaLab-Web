import { useState } from 'react'
export default function StudentOS(){
  const [tab,setTab]=useState('cgpa')
  return(
    <div style={{padding:20,maxWidth:700,margin:'auto'}}>
      <h1 style={{fontSize:24,fontWeight:'bold'}}>Student OS — Offline Survival Kit</h1>
      <div style={{display:'flex',gap:8,marginTop:12}}>
        {['cgpa','attendance','admit','fees'].map(t=><button key={t} onClick={()=>setTab(t)} style={{padding:'6px 12px',borderRadius:6,background:tab===t?'black':'white',color:tab===t?'white':'black',border:'1px solid black'}}>{t.toUpperCase()}</button>)}
      </div>
      {tab==='cgpa' && <CGPA/>}
      {tab==='attendance' && <Attendance/>}
      {tab==='admit' && <Admit/>}
      {tab==='fees' && <div style={{marginTop:16,border:'1px solid #ccc',padding:12}}>Fee Calculator: Tuition + Library + Lab = Total (Offline)</div>}
    </div>
  )
}
function CGPA(){
  const [marks,setMarks]=useState([{credit:3,obtained:''}])
  const [system,setSystem]=useState('UET')
  const calc=()=>{
    let tp=0,tc=0
    marks.forEach(m=>{
      const pct=parseFloat(m.obtained)||0
      let gpa=0
      if(system==='UET'){ if(pct>=80) gpa=4; else if(pct>=70) gpa=3.5; else if(pct>=60) gpa=3; else if(pct>=50) gpa=2.5 }
      if(system==='PU'){ if(pct>=85) gpa=4; else if(pct>=75) gpa=3.7; else if(pct>=65) gpa=3.3; else if(pct>=50) gpa=2.5 }
      tp+=gpa*parseFloat(m.credit); tc+=parseFloat(m.credit)
    })
    return tc?(tp/tc).toFixed(2):0
  }
  return(
    <div style={{marginTop:16,border:'1px solid #ccc',padding:12,borderRadius:8}}>
      <h2 style={{fontWeight:'bold'}}>CGPA Calculator - {system} Grading</h2>
      <select value={system} onChange={e=>setSystem(e.target.value)} style={{border:'1px solid #ccc',padding:6,marginTop:8}}><option>UET</option><option>PU</option><option>Karachi</option></select>
      {marks.map((m,i)=><div key={i} style={{display:'flex',gap:8,marginTop:8}}><input placeholder="Credit" type="number" style={{border:'1px solid #ccc',padding:6,width:80}} value={m.credit} onChange={e=>{const n=[...marks];n[i].credit=e.target.value;setMarks(n)}}/><input placeholder="% Obtained" type="number" style={{border:'1px solid #ccc',padding:6,width:120}} value={m.obtained} onChange={e=>{const n=[...marks];n[i].obtained=e.target.value;setMarks(n)}}/></div>)}
      <button onClick={()=>setMarks([...marks,{credit:3,obtained:''}])} style={{marginTop:8,border:'1px solid black',padding:'4px 8px'}}>+ Add Subject</button>
      <div style={{marginTop:12,fontSize:22}}>CGPA: <b>{calc()}</b></div>
      <button onClick={()=>{window.open(`https://wa.me/?text=${encodeURIComponent('My CGPA is '+calc()+' via WanaLab')}`)}} style={{marginTop:8,background:'green',color:'white',padding:'6px 12px',borderRadius:6}}>Share on WhatsApp</button>
    </div>
  )
}
function Attendance(){
  const [total,setTotal]=useState(40)
  const [attended,setAttended]=useState(30)
  const pct=total?(attended/total*100).toFixed(1):0
  const bunks=Math.floor((attended-0.75*total)/0.75)
  return(
    <div style={{marginTop:16,border:'1px solid #ccc',padding:12,borderRadius:8}}>
      <h2 style={{fontWeight:'bold'}}>Attendance: How many bunks left for 75%?</h2>
      <div style={{display:'flex',gap:8,marginTop:8}}><input type="number" value={total} onChange={e=>setTotal(e.target.value)} placeholder="Total Classes" style={{border:'1px solid #ccc',padding:6}}/><input type="number" value={attended} onChange={e=>setAttended(e.target.value)} placeholder="Attended" style={{border:'1px solid #ccc',padding:6}}/></div>
      <div style={{marginTop:12}}>Your Attendance: <b>{pct}%</b></div>
      <div>Bunks Left: <b>{bunks>0?bunks:0}</b> | Need to attend: <b>{pct<75?Math.ceil(0.75*total-attended):0}</b> more</div>
    </div>
  )
}
function Admit(){
  const [name,setName]=useState(''); const [roll,setRoll]=useState(''); const [exam,setExam]=useState('')
  const makePDF=()=>{ alert(`Admit Card Ready for ${name} Roll ${roll} Exam ${exam} - PDF will download when jspdf added. For now screenshot this page!`) }
  return(
    <div style={{marginTop:16,border:'1px solid #ccc',padding:12,borderRadius:8}}>
      <h2 style={{fontWeight:'bold'}}>Admit Card Maker (Offline)</h2>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full Name" style={{border:'1px solid #ccc',padding:8,width:'100%',marginTop:8}}/>
      <input value={roll} onChange={e=>setRoll(e.target.value)} placeholder="Roll No" style={{border:'1px solid #ccc',padding:8,width:'100%',marginTop:8}}/>
      <input value={exam} onChange={e=>setExam(e.target.value)} placeholder="Exam Name" style={{border:'1px solid #ccc',padding:8,width:'100%',marginTop:8}}/>
      <button onClick={makePDF} style={{marginTop:10,background:'black',color:'white',padding:'8px 16px',borderRadius:6}}>Generate Admit Card</button>
    </div>
  )
}
