import { useState, useEffect } from 'react'

export default function AgePrime() {
  const [dob, setDob] = useState('2000-01-01')
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const birth = new Date(dob)
  const diffMs = now - birth

  // Calc exact
  let years = now.getFullYear() - birth.getFullYear()
  let months = now.getMonth() - birth.getMonth()
  let days = now.getDate() - birth.getDate()
  let hours = now.getHours() - birth.getHours()
  let mins = now.getMinutes() - birth.getMinutes()
  let secs = now.getSeconds() - birth.getSeconds()

  if (secs < 0) { secs += 60; mins-- }
  if (mins < 0) { mins += 60; hours-- }
  if (hours < 0) { hours += 24; days-- }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate()
    days += prevMonth
    months--
  }
  if (months < 0) { months += 12; years-- }

  const totalDays = Math.floor(diffMs / (1000*60*60*24))
  const totalHours = Math.floor(diffMs / (1000*60*60))
  const totalMins = Math.floor(diffMs / (1000*60))

  if (diffMs < 0) {
    return (
      <div style={{ padding: '16px', maxWidth: '500px', margin: '0 auto' }}>
        <h2 style={{ fontWeight: '900' }}>Age Prime</h2>
        <input type="date" value={dob} onChange={e=>setDob(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #ddd', boxSizing: 'border-box' }} />
        <div style={{ marginTop: '12px', color: 'red', background: 'white', padding: '12px', borderRadius: '10px' }}>Birth date is in future!</div>
      </div>
    )
  }

  return (
    <div style={{ padding: '16px', maxWidth: '500px', margin: '0 auto' }}>
      <h2 style={{ fontWeight: '900', margin: 0 }}>Age Prime — Exact Live</h2>
      <p style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>Offline • No upload • Engineered in WANA</p>
      
      <input type="date" value={dob} onChange={e=>setDob(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #ddd', marginTop: '16px', fontSize: '16px', boxSizing: 'border-box' }} />

      <div style={{ background: 'black', color: 'white', padding: '16px', borderRadius: '16px', marginTop: '16px' }}>
        <div style={{ fontSize: '11px', opacity: 0.7, letterSpacing: '1px' }}>EXACT AGE RIGHT NOW</div>
        <div style={{ fontSize: '22px', fontWeight: '900', marginTop: '8px' }}>
          {years}Y : {months}M : {days}D
        </div>
        <div style={{ fontSize: '16px', fontWeight: '700', marginTop: '8px', color: '#25D366' }}>
          {hours}h : {mins}m : {secs}s LIVE ⏱️
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginTop: '12px' }}>
        <div style={{ background: 'white', padding: '12px', borderRadius: '12px', textAlign: 'center', border: '1px solid #eee' }}>
          <div style={{ fontSize: '10px', color: '#999' }}>TOTAL DAYS</div>
          <div style={{ fontWeight: '800', marginTop: '4px' }}>{totalDays.toLocaleString()}</div>
        </div>
        <div style={{ background: 'white', padding: '12px', borderRadius: '12px', textAlign: 'center', border: '1px solid #eee' }}>
          <div style={{ fontSize: '10px', color: '#999' }}>TOTAL HOURS</div>
          <div style={{ fontWeight: '800', marginTop: '4px' }}>{totalHours.toLocaleString()}</div>
        </div>
        <div style={{ background: 'white', padding: '12px', borderRadius: '12px', textAlign: 'center', border: '1px solid #eee' }}>
          <div style={{ fontSize: '10px', color: '#999' }}>TOTAL MINS</div>
          <div style={{ fontWeight: '800', marginTop: '4px' }}>{totalMins.toLocaleString()}</div>
        </div>
      </div>

      <div style={{ background: 'white', padding: '12px', borderRadius: '12px', border: '1px solid #eee', marginTop: '12px', fontSize: '12px', color: '#555' }}>
        Born: {birth.toDateString()} <br/> Now: {now.toLocaleString()}
      </div>
    </div>
  )
}
