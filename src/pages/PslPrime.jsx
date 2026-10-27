import { Link } from "react-router-dom";
export default function PslPrime() {
  return (
    <div className="max-w-md mx-auto p-4 min-h-screen bg-[#f8f9fa]">
      <Link to="/sports" className="bg-black text-white text-xs px-3 py-1.5 rounded-full">← Sports Hub</Link>
      <h1 className="text-2xl font-black mt-6">PSL Prime 🏏</h1>
      <p className="text-[12px] text-gray-500 mt-2">Pakistan Super League Live Scores & Stats</p>
      <div className="bg-white p-4 rounded-2xl border mt-4">
        <p className="font-bold">PSL 2026 Live</p>
        <p className="text-xs text-gray-500 mt-1">Offline scoreboard coming soon. Data stays private.</p>
        <div className="mt-3 p-3 bg-black text-white rounded-xl text-xs">Islamabad vs Lahore • Live soon</div>
      </div>
    </div>
  )
}
