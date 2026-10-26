import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

function PrimeList() {
  const navigate = useNavigate()
  const primes = [
    { name: "Age Prime", desc: "Exact Age • Live $300", path: "/age-prime", icon: "🎂" },
    { name: "Word Prime", desc: "Thesis Safe Wana $250", path: "/word-prime", icon: "🔤" },
    { name: "Percentage Prime", desc: "% Lab $250", path: "/percentage-prime", icon: "📊" },
    { name: "PDF Prime", desc: "Vault No Upload $300", path: "/pdf-prime", icon: "📄" },
    { name: "Resume Prime", desc: "ATS 5 Templates $400", path: "/resume-prime", icon: "📝" },
    { name: "Image Prime", desc: "20KB 50KB 200KB $350", path: "/image-prime", icon: "🖼️" },
    { name: "QR Prime", desc: "Logo Inside Offline $300", path: "/qr-prime", icon: "⬛" },
    { name: "Currency Prime", desc: "USD PKR RPM $18 $400", path: "/currency-prime", icon: "💱" },
    { name: "Travel Prime", desc: "PIA AirSial NEW $500", path: "/travel-prime", icon: "✈️" },
  ]
  return (
    <div style={{ padding: '16px', background: '#f5f5f5', minHeight: '100vh' }}>
      <h2 style={{ fontWeight: '900', fontSize: '22px', marginBottom: '12px' }}>WanaLab Primes</h2>
      {primes.map(p => (
        <div key={p.name} onClick={() => navigate(p.path)} style={{ background: 'white', padding: '16px', borderRadius: '16px', marginBottom: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', cursor: 'pointer', border: '1px solid #eee' }}>
          <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{p.icon} {p.name}</div>
          <div style={{ fontSize: '14px', color: '#666' }}>{p.desc}</div>
        </div>
      ))}
    </div>
  )
}

function WordPrime() {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const words = text.trim() ? text.trim().split(/\s+/).length : 0
  const chars = text.length
  const charsNoSpaces = text.replace(/\s/g, '').length
  const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0
  const paragraphs = text.trim() ? text.split(/\n+/).filter(p => p.trim()).length : 0
  const readingTime = Math.ceil(words / 200) || 0
  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '16px' }}>
      <button onClick={() => navigate('/')} style={{ background: 'black', color: 'white', padding: '10px 20px', borderRadius: '24px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>← Back to Primes</button>
      <h1 style={{ fontSize: '28px', fontWeight: '900', marginTop: '16px' }}>📝 Word Prime</h1>
      <p style={{ color: '#666', fontSize: '14px' }}>Thesis Safe • No Upload • Wana Vault</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '16px' }}>
        <Stat label="Words" value={words} />
        <Stat label="Characters" value={chars} />
        <Stat label="No Spaces" value={charsNoSpaces} />
        <Stat label="Sentences" value={sentences} />
        <Stat label="Paragraphs" value={paragraphs} />
        <Stat label="Reading" value={`${readingTime} min`} />
      </div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Paste your thesis here... 100% offline" style={{ width: '100%', height: '45vh', marginTop: '16px', padding: '16px', borderRadius: '16px', border: '1px solid #ddd', fontSize: '16px', boxSizing: 'border-box' }} />
    </div>
  )
}

// --- REAL AGE PRIME ---
function AgePrime() {
  const navigate = useNavigate()
  const [dob, setDob] = useState('2000-01-01')
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const birth = new Date(dob)
  let years = now.getFullYear() - birth.getFullYear()
  let months = now.getMonth() - birth.getMonth()
  let days = now.getDate() - birth.getDate()
  if (days < 0) { months--; const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate(); days += prevMonth }
  if (months < 0) { years--; months += 12 }

  const diffMs = now - birth
  const totalDays = Math.floor(diffMs / (1000*60*60*24))
  const totalHours = Math.floor(diffMs / (1000*60*60))
  const totalMins = Math.floor(diffMs / (1000*60))

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '16px' }}>
      <button onClick={() => navigate('/')} style={{ background: 'black', color: 'white', padding: '10px 20px', borderRadius: '24px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>← Back to Primes</button>
      <h1 style={{ fontSize: '28px', fontWeight: '900', marginTop: '16px' }}>🎂 Age Prime</h1>
      <p style={{ color: '#666', fontSize: '14px' }}>Exact Age • Live Seconds • Wana Vault</p>

      <div style={{ background: 'white', padding: '16px', borderRadius: '16px', marginTop: '16px', border: '1px solid #eee' }}>
        <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#888' }}>DATE OF BIRTH</label>
        <input type="date" value={dob} onChange={e => setDob(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '18px', marginTop: '6px', boxSizing: 'border-box' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginTop: '16px' }}>
        <AgeStat label="YEARS" value={years} />
        <AgeStat label="MONTHS" value={months} />
        <AgeStat label="DAYS" value={days} />
      </div>

      <div style={{ background: 'black', color: 'white', padding: '16px', borderRadius: '16px', marginTop: '12px', textAlign: 'center' }}>
        <div style={{ fontSize: '12px', opacity: 0.7, letterSpacing: '1px' }}>LIVE AGE</div>
        <div style={{ fontSize: '20px', fontWeight: '800', marginTop: '6px' }}>{years}y {months}m {days}d • {now.toLocaleTimeString()}</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '12px' }}>
        <Stat label="Total Days" value={totalDays.toLocaleString()} />
        <Stat label="Total Hours" value={totalHours.toLocaleString()} />
        <Stat label="Total Minutes" value={totalMins.toLocaleString()} />
        <Stat label="Next Birthday" value={`${11 - now.getMonth()} months`} />
      </div>
      <p style={{ marginTop: '20px', fontSize: '12px', color: '#888', textAlign: 'center' }}>🔒 100% offline. Calculated on your phone.</p>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div style={{ background: 'white', padding: '12px', borderRadius: '12px', border: '1px solid #eee', textAlign: 'center' }}>
      <div style={{ fontSize: '22px', fontWeight: '800' }}>{value}</div>
      <div style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase' }}>{label}</div>
    </div>
  )
}
function AgeStat({ label, value }) {
  return (
    <div style={{ background: 'white', padding: '16px', borderRadius: '16px', border: '1px solid #eee', textAlign: 'center' }}>
      <div style={{ fontSize: '32px', fontWeight: '900' }}>{value}</div>
      <div style={{ fontSize: '11px', color: '#888', fontWeight: 'bold' }}>{label}</div>
    </div>
  )
}

function DummyPage({ title }) {
  const navigate = useNavigate()
  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/')} style={{ padding: '10px 20px', background: 'black', color: 'white', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>← Back</button>
      <h1 style={{ marginTop: '20px', fontSize: '24px', fontWeight: 'bold' }}>{title} Coming Soon</h1>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PrimeList />} />
      <Route path="/word-prime" element={<WordPrime />} />
      <Route path="/age-prime" element={<AgePrime />} />
      <Route path="/percentage-prime" element={<DummyPage title="Percentage Prime" />} />
      <Route path="/pdf-prime" element={<DummyPage title="PDF Prime" />} />
      <Route path="/resume-prime" element={<DummyPage title="Resume Prime" />} />
      <Route path="/image-prime" element={<DummyPage title="Image Prime" />} />
      <Route path="/qr-prime" element={<DummyPage title="QR Prime" />} />
      <Route path="/currency-prime" element={<DummyPage title="Currency Prime" />} />
      <Route path="/travel-prime" element={<DummyPage title="Travel Prime" />} />
    </Routes>
  )
      }
