import { useNavigate } from 'react-router-dom'

function PrimeList() {
  const navigate = useNavigate()
  
  const primes = [
    { name: "Age Prime", path: "/age-prime", price: "$300" },
    { name: "Percentage Prime", path: "/percentage-prime", price: "$250" },
    { name: "PDF Prime", path: "/pdf-prime", price: "$300" },
    { name: "Resume Prime", path: "/resume-prime", price: "$400" },
    { name: "Image Prime", path: "/image-prime", price: "$350" },
    { name: "Word Prime", path: "/word-prime", price: "$250" },
    { name: "QR Prime", path: "/qr-prime", price: "$300" },
    { name: "Currency Prime", path: "/currency-prime", price: "$400" },
    { name: "Travel Prime", path: "/travel-prime", price: "$500" },
  ]

  return (
    <div>
      {primes.map(p => (
        <div 
          key={p.name}
          onClick={() => navigate(p.path)}
          className="cursor-pointer active:scale-95 transition"
          style={{ cursor: 'pointer' }}
        >
          {p.name}
        </div>
      ))}
    </div>
  )
}
