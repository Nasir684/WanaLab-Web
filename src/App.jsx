import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

// --- Prime List Component (Clickable) ---
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
    <div className="p-4 space-y-3 bg-gray-50 min-h-screen">
      {primes.map(p => (
        <div 
          key={p.name}
          onClick={() => navigate(p.path)}
          className="bg-white p-4 rounded-2xl shadow-sm border cursor-pointer active:scale-[0.98] hover:shadow-md transition-all"
        >
          <div className="font-bold text-lg">{p.icon} {p.name}</div>
          <div className="text-sm text-gray-500">{p.desc}</div>
        </div>
      ))}
    </div>
  )
}

// --- Dummy Prime Pages (Replace with your real components later) ---
const PrimePage = ({ title }) => {
  const navigate = useNavigate()
  return (
    <div className="p-6">
      <button onClick={() => navigate(-1)} className="mb-4 px-4 py-2 bg-black text-white rounded-full">← Back</button>
      <h1 className="text-2xl font-bold">{title} - Coming Soon</h1>
      <p>Build your {title} logic here</p>
    </div>
  )
}

// --- Main App with Routes ---
export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}
