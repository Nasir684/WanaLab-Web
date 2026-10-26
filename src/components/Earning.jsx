import { useState } from 'react'

// Ad Spot Component - AdSense Ready
export function AdSpot({ position }) {
  return (
    <div style={{ 
      background: 'white', padding: '16px', borderRadius: '12px', border: '1px dashed #ccc', 
      margin: '12px 0', textAlign: 'center', minHeight: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
    }}>
      <div style={{ fontSize: '10px', color: '#aaa', fontWeight: '700' }}>AD — {position}</div>
      <div style={{ fontSize: '11px', color: '#999', marginTop: '4px' }}>
        {/* AdSense Code Goes Here After Approval */}
        {/* <ins class="adsbygoogle" ...></ins> */}
        AdSense: {position} — Ready
      </div>
    </div>
  )
}

// JazzCash / Easypaisa Premium Paywall
export function PremiumLock({ toolName, children }) {
  const [isPremium, setIsPremium] = useState(() => localStorage.getItem(`premium_${toolName}`) === 'true')
  const [showPay, setShowPay] = useState(false)

  if (isPremium) return children

  return (
    <>
      {showPay ? (
        <div style={{ background: 'white', padding: '20px', borderRadius: '16px', border: '2px solid black', marginTop: '16px' }}>
          <h3 style={{ margin: 0, fontWeight: '900' }}>Unlock {toolName} Prime 🔒</h3>
          <p style={{ fontSize: '13px', color: '#666', marginTop: '8px' }}>One time Rs 199 — All 9 tools unlocked forever — Easypaisa/JazzCash</p>
          <div style={{ background: '#f5f5f5', padding: '12px', borderRadius: '10px', marginTop: '12px', fontSize: '13px' }}>
            <div><b>Easypaisa:</b> 034X-XXXXXXX (WanaLab)</div>
            <div><b>JazzCash:</b> 030X-XXXXXXX (WanaLab)</div>
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#888' }}>After payment, send screenshot to WhatsApp → You get code</div>
          </div>
          <input placeholder="Enter unlock code" id="code" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd', marginTop: '12px', boxSizing: 'border-box' }} />
          <button onClick={()=>{
            const c = document.getElementById('code').value
            if(c === 'WANA2026'){ localStorage.setItem(`premium_${toolName}`, 'true'); setIsPremium(true); alert('Unlocked!') }
            else alert('Wrong code')
          }} style={{ width: '100%', background: 'black', color: 'white', padding: '12px', borderRadius: '10px', border: 'none', marginTop: '8px', fontWeight: 'bold' }}>Unlock</button>
          <button onClick={()=>setShowPay(false)} style={{ width: '100%', background: 'white', color: 'black', padding: '10px', borderRadius: '10px', border: '1px solid #ddd', marginTop: '8px' }}>Cancel</button>
        </div>
      ) : (
        <div style={{ background: '#000', color: 'white', padding: '16px', borderRadius: '16px', marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div><div style={{ fontWeight: '800' }}>Premium Feature</div><div style={{ fontSize: '11px', opacity: 0.7 }}>Rs 199 for all tools</div></div>
          <button onClick={()=>setShowPay(true)} style={{ background: 'white', color: 'black', padding: '8px 14px', borderRadius: '20px', border: 'none', fontWeight: 'bold', fontSize: '12px' }}>Unlock</button>
        </div>
      )}
    </>
  )
}

// Affiliate / Daraz Widget
export function AffiliateWidget() {
  return (
    <div style={{ background: 'white', padding: '12px', borderRadius: '12px', border: '1px solid #eee', marginTop: '12px' }}>
      <div style={{ fontSize: '12px', fontWeight: '800' }}>🔥 Deals for You (WanaLab Earns)</div>
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', marginTop: '8px' }}>
        <a href="https://s.daraz.pk/s.xxx?WanaLab" target="_blank" style={{ background: '#f5f5f5', padding: '8px 12px', borderRadius: '20px', fontSize: '12px', textDecoration: 'none', color: 'black', whiteSpace: 'nowrap' }}>Daraz Headphones Rs 899 →</a>
        <a href="https://www.amazon.com/s?k=laptop+stand&tag=wanalab-20" target="_blank" style={{ background: '#f5f5f5', padding: '8px 12px', borderRadius: '20px', fontSize: '12px', textDecoration: 'none', color: 'black', whiteSpace: 'nowrap' }}>Amazon Stand $19 →</a>
      </div>
      <div style={{ fontSize: '10px', color: '#aaa', marginTop: '6px' }}>We earn small commission if you buy — No extra cost to you</div>
    </div>
  )
}
