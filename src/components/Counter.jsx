import { useEffect, useState } from 'react'
export default function Counter({ path }){
  const [count,setCount]=useState(0)
  useEffect(()=>{
    const key=`wl-count-${path}`
    let c=parseInt(localStorage.getItem(key)||'0')+1
    localStorage.setItem(key,c)
    let total=parseInt(localStorage.getItem('wl-total')||'0')+1
    localStorage.setItem('wl-total',total)
    setCount(c)
  },[path])
  return <div style={{fontSize:'10px',color:'#999',marginTop:'8px',textAlign:'center'}}>👁️ {count} views on this tool</div>
}
// Add in ToolWrapper: <Counter path={path} />
