import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

function PrimeList() {
  const navigate = useNavigate()
  const primes = [
    { name: "Age Prime", desc: "Exact Age $300", path: "/age-prime", icon: "🎂" },
    { name: "Percentage Prime", desc: "% Lab $250", path: "/percentage-prime", icon: "📊" },
    { name: "PDF Prime", desc: "Vault No Upload $300", path: "/pdf-prime", icon: "📄" },
    { name: "Resume Prime", desc: "ATS 5 Templates $400", path: "/resume-prime", icon: "📝" },
    { name: "Image Prime", desc: "20KB 50KB 200KB $350", path: "/image-prime", icon: "🖼️" },
    { name: "Word Prime", desc: "Thesis Safe Wana $250", path: "/word-prime", icon: "🔤" },
    { name: "QR Prime", desc: "Logo Inside Offline $300", path: "/qr-prime", icon: "⬛" },
    { name: "Currency Prime", desc: "USD PKR RPM $18 $400", path: "/currency-prime", icon: "💱" },
    { name: "Travel Prime", desc: "PIA AirSial NEW $500", path: "/travel-prime", icon: "✈️" },
  ]
  return (
    <div style={{ padding: '16px', background: '#f5f5f5', minHeight: '100vh' }}>
      {primes.map(p => (
        <div key={p.name} onClick={() => navigate(p.path)} style={{ background: 'white', padding: '16px', borderRadius: '16px', marginBottom: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', cursor: 'pointer', border: '1px solid #eee' }}>
          <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{p.icon} {p.name}</div>
          <div style={{ fontSize: '14px', color: '#666' }}>{p.desc}</div>
        </div>
      ))}
    </div>
  )
}

// --- REAL WORD PRIME - No extra file needed ---
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

      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Paste your thesis, assignment, or essay here... 100% offline, never uploaded." style={{ width: '100%', height: '45vh', marginTop: '16px', padding: '16px', borderRadius: '16px', border: '1px solid #ddd', fontSize: '16px', outline: 'none', boxSizing: 'border-box' }} />

      <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
        <button onClick={() => setText('')} style={{ flex: 1, background: 'white', color: 'black', padding: '12px', borderRadius: '12px', border: '1px solid #ddd', fontWeight: 'bold', cursor: 'pointer' }}>Clear</button>
        <button onClick={() => { navigator.clipboard.writeText(text); alert('Copied!') }} style={{ flex: 1, background: 'black', color: 'white', padding: '12px', borderRadius: '12px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Copy</button>
      </div>
      <p style={{ marginTop: '20px', fontSize: '12px', color: '#888', textAlign: 'center' }}>🔒 Wana Safe: Text never leaves your phone.</p>
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

function DummyPage({ title }) {
  const navigate = useNavigate()
  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/')} style={{ padding: '10px 20px', background: 'black', color: 'white', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>← Back</button>
      <h1 style={{ marginTop: '20px', fontSize: '24px', fontWeight: 'bold' }}>{title} Coming Soon</h1>
      <p>Next Prime will be built here one by one.</p>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PrimeList />} />
      <Route path="/word-prime" element={<WordPrime />} />
      <Route path="/age-prime" element={<DummyPage title="Age Prime" />} />
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
