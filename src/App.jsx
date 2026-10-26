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
        <div 
          key={p.name}
          onClick={() => navigate(p.path)}
          style={{
            background: 'white',
            padding: '16px',
            borderRadius: '16px',
            marginBottom: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            cursor: 'pointer',
            border: '1px solid #eee'
          }}
        >
          <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{p.icon} {p.name}</div>
          <div style={{ fontSize: '14px', color: '#666' }}>{p.desc}</div>
        </div>
      ))}
    </div>
  )
}

function PrimePage({ title }) {
  const navigate = useNavigate()
  return (
    <div style={{ padding: '20px' }}>
      <button 
        onClick={() => navigate('/')} 
        style={{ padding: '10px 20px', background: 'black', color: 'white', borderRadius: '20px', border: 'none', cursor: 'pointer' }}
      >
        ← Back to Primes
      </button>
      <h1 style={{ marginTop: '20px', fontSize: '24px', fontWeight: 'bold' }}>{title} Working!</h1>
      <p style={{ marginTop: '10px' }}>Your {title} logic goes here.</p>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PrimeList />} />
      <Route path="/age-prime" element={<PrimePage title="Age Prime" />} />
      <Route path="/percentage-prime" element={<PrimePage title="Percentage Prime" />} />
      <Route path="/pdf-prime" element={<PrimePage title="PDF Prime" />} />
      <Route path="/resume-prime" element={<PrimePage title="Resume Prime" />} />
      <Route path="/image-prime" element={<PrimePage title="Image Prime" />} />
      <Route path="/word-prime" element={<PrimePage title="Word Prime" />} />
      <Route path="/qr-prime" element={<PrimePage title="QR Prime" />} />
      <Route path="/currency-prime" element={<PrimePage title="Currency Prime" />} />
      <Route path="/travel-prime" element={<PrimePage title="Travel Prime" />} />
    </Routes>
  )
}
