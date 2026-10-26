import { useState, useEffect } from 'react'

export default function UpdateChecker() {
  const [hasUpdate, setHasUpdate] = useState(false)
  const CURRENT_VERSION = "2.0.0" // Change this every deploy

  useEffect(() => {
    const savedVersion = localStorage.getItem('wanalab_version')
    if (savedVersion && savedVersion !== CURRENT_VERSION) {
      setHasUpdate(true)
    }
    localStorage.setItem('wanalab_version', CURRENT_VERSION)
    
    // Also check server version file (optional)
    fetch('/version.json?v=' + Date.now())
      .then(r => r.json())
      .then(data => {
        if (data.version !== CURRENT_VERSION) setHasUpdate(true)
      })
      .catch(()=>{})
  }, [])

  if (!hasUpdate) return null

  return (
    <div style={{ background: '#000', color: '#fff', padding: '12px 16px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', border: '2px solid #25D366' }}>
      <div>
        <div style={{ fontWeight: '800', fontSize: '13px' }}>🚀 New Update Available!</div>
        <div style={{ fontSize: '11px', opacity: 0.7 }}>WanaLab v{CURRENT_VERSION} • Faster • New tools</div>
      </div>
      <button onClick={()=>window.location.reload()} style={{ background: '#25D366', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '20px', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer' }}>Update Now</button>
    </div>
  )
}
